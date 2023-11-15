import Service from "@/service/server";
import rateLimit from "@/utils/rate-limit";
import { NextResponse } from "next/server";

type SuccessType<T> = {
  success: true;
  data: T;
};

type ErrorType<T> = {
  success: false;
  name: string;
  error: T;
};

function makeResponse<T>(type: "success", data: T): SuccessType<T>;
function makeResponse<T>(type: "error", name: string, data: T): ErrorType<T>;
function makeResponse<T = any>(
  type: "success" | "error",
  data: T,
  name?: string
): SuccessType<T> | ErrorType<T> {
  if (type === "success") {
    return {
      success: true,
      data,
    };
  }

  return {
    success: false,
    name: name || "",
    error: data,
  };
}

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export async function POST(req: Request) {
  try {
    await limiter.check(5, "CONTACT_FORM"); // 5 requests per minute
  } catch (e) {
    return NextResponse.json(
      makeResponse(
        "error",
        "Too many requests. Please try again later.",
        "Rate Limit Error"
      )
    );
  }

  const data = await req.json();

  const service = new Service();

  const captchaResponse = await service.verifyGoogleReCaptchaToken(
    data.captchaToken
  );

  if (
    !captchaResponse ||
    (captchaResponse && !captchaResponse?.success) ||
    (captchaResponse && captchaResponse?.action !== "contact")
  ) {
    return NextResponse.json(
      makeResponse(
        "error",
        captchaResponse["error-codes"] &&
          captchaResponse["error-codes"].length > 0
          ? captchaResponse["error-codes"][0]
          : "Invalid captcha token",
        "Captcha Error"
      )
    );
  }

  delete data.captchaToken;
  delete data.tnc;

  try {
    const appwriteResponse = await service.createContact({
      name: data.name,
      email: data.email,
      contactno: data.contactno,
      interested: data.interested,
      companyname: data.companyname,
    });

    return NextResponse.json(makeResponse("success", {}));
  } catch (error: any) {
    const errRes =
      typeof error === "string" ? error : "Server error, please try again.";
    return NextResponse.json(makeResponse("error", errRes, "Appwrite Error"));
  }
}
