import Service from "@/service/server";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const databaseId = searchParams.get("databaseId");
    const collectionId = searchParams.get("collectionId");

    if (!databaseId || !collectionId) {
        return NextResponse.json({
            success: false,
            error: "Please provide 'databaseId' and 'collectionId' in search params",
        });
    }

    const service = new Service();

    const response = await service.cleanCollection(databaseId, collectionId);

    return NextResponse.json(response);
}
