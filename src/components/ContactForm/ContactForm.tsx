"use client";
import service from "@/service/client";
import React, { useEffect, useState, useRef } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import ContactSuccessMsg from "./ContactSuccessMsg";

const Loader = () => {
  return (
    <div
      role="status"
      className="flex justify-center items-center w-full h-full"
    >
      <svg
        aria-hidden="true"
        className="w-10 h-10 mr-2 text-gray-200 animate-spin fill-yellow-500"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactno: "",
    interested: "",
    companyname: "",
    tnc: false,
  });

  const [formError, setFormError] = useState({
    formError: "",
    name: "",
    email: "",
    contactno: "",
    interested: "",
    companyname: "",
    tnc: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);

  const checkboxRef = useRef<HTMLInputElement>(null);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = async () => {
    if (!executeRecaptcha) {
      return;
    }

    const token = await executeRecaptcha("contact");

    return token;
  };

  const formValidation = () => {
    let validation = true;
    const err = {
      name: "",
      email: "",
      contactno: "",
      interested: "",
      companyname: "",
      tnc: "",
    };

    const nameRegex = /^([a-zA-Z\s]{3,})$/i;
    const emailRegex =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;
    const contactRegex = /^[+0-9]{9,14}$/i;

    if (!formData.name.trim()) {
      validation = false;
      err.name = "Fullname is required";
    } else if (formData.name && !nameRegex.test(formData.name.trim())) {
      validation = false;
      err.name = "Invalid fullname";
    }

    if (!formData.email.trim()) {
      validation = false;
      err.email = "Email is required";
    } else if (formData.email && !emailRegex.test(formData.email.trim())) {
      validation = false;
      err.email = "Invalid email";
    }

    if (!formData.contactno.trim()) {
      validation = false;
      err.contactno = "Contact No is required";
    } else if (
      formData.contactno &&
      !contactRegex.test(formData.contactno.trim())
    ) {
      validation = false;
      err.contactno = "Invalid Contact No";
    }

    if (!formData.companyname.trim()) {
      validation = false;
      err.companyname = "This field is required";
    }

    if (!formData.interested.trim()) {
      validation = false;
      err.interested = "Please select your interest";
    }

    if (!formData.tnc) {
      validation = false;
      err.tnc = "Please agree to the terms before submitting.";
    }

    setFormError((prev) => ({ ...prev, ...err }));

    return validation;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleanup = (cb?: Function) => {
      setLoader(false);
      cb && cb();
    };

    setFormError((prev) => ({
      ...prev,
      formError: "",
    }));
    setLoader(true);

    if (!formValidation()) return cleanup();

    const captchaToken = await handleReCaptchaVerify();

    if (!captchaToken)
      return cleanup(() => {
        setFormError((prev) => ({
          ...prev,
          formError: "Please refresh and try again.",
        }));
      });

    try {
      const response = await service.contactForm({
        ...formData,
        captchaToken,
      });

      if (response.success) {
        setSubmitted(true);
        setFormData(() => ({
          name: "",
          email: "",
          contactno: "",
          interested: "",
          companyname: "",
          tnc: false,
        }));
        if (checkboxRef.current) checkboxRef.current.checked = false;
      } else {
        setFormError((prev) => ({
          ...prev,
          formError: response.error,
        }));
      }
    } catch (error) {
      setFormError((prev) => ({
        ...prev,
        formError: "Internal server Error, please try again.",
      }));
    }

    return cleanup();
  };

  useEffect(() => {
    let timer: any;
    if (submitted) {
      document.body.style.overflow = "hidden";

      timer = setTimeout(() => {
        setSubmitted(false);
        document.body.style.overflow = "unset";
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [submitted]);

  return (
    <>
      {submitted && <ContactSuccessMsg />}
      {loader && (
        <div className="absolute inset-0 bg-black-900/40 z-10 rounded-2xl">
          <Loader />
        </div>
      )}
      <form onSubmit={handleSubmit} autoComplete="off">
        <h2 className="text-center text-white-100 mb-6 uppercase font-semibold text-lg pb-2 tracking-[4.10px]">
          Let&apos;s Connect
        </h2>
        <p className="text-red-500 text-center font-bold -translate-y-4">
          {formError.formError}
        </p>
        <div className="flex flex-col w-full">
          <label className="text-white-100 mb-1 font-semibold leading-[normal]">
            Full Name:
          </label>
          <input
            type="text"
            className="h-12 pl-4 bg-blue_gray-100 outline-none rounded-lg leading-[normal] p-0 placeholder:text-blue_gray-900 text-blue_gray-900"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
          <p className="text-sm text-red-500">{formError.name}</p>

          <label className="text-white-100 mb-1 mt-4 font-semibold">
            Email Address:
          </label>
          <input
            type="email"
            className="h-12 pl-4 bg-blue_gray-100 outline-none rounded-lg leading-[normal] p-0 placeholder:text-blue_gray-900 text-blue_gray-900"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
          <p className="text-sm text-red-500">{formError.email}</p>

          <label className="text-white-100 mb-1 mt-4  font-semibold">
            Contact No:
          </label>
          <input
            type="text"
            className="h-12 pl-4 bg-blue_gray-100 outline-none rounded-lg leading-[normal] p-0 placeholder:text-blue_gray-900 text-blue_gray-900"
            value={formData.contactno}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                contactno: e.target.value,
              }))
            }
          />
          <p className="text-sm text-red-500">{formError.contactno}</p>

          <label className="text-white-100 mb-1 mt-4 font-semibold">
            Interested In:
          </label>
          <select
            id="select"
            className="h-12 pl-4 bg-blue_gray-100 outline-none rounded-lg leading-[normal] p-0 placeholder:text-blue_gray-900 text-blue_gray-900"
            value={formData.interested}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                interested: e.target.value,
              }))
            }
          >
            <option value="">Select</option>
            <option value="Sponsorship">Sponsorship</option>
            <option value="Attending as Participant">
              Attending as Participant
            </option>
            <option value="Volunteering opportunities">
              Volunteering opportunities
            </option>
            <option value="Others">Others</option>
          </select>
          <p className="text-sm text-red-500">{formError.interested}</p>

          <label className="text-white-100 mb-1 mt-4 font-semibold">
            Your/Company LinkedIn
          </label>
          <input
            type="text"
            className="h-12 pl-4 bg-blue_gray-100 outline-none rounded-lg leading-[normal] p-0 placeholder:text-blue_gray-900 text-blue_gray-900"
            value={formData.companyname}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                companyname: e.target.value,
              }))
            }
          />
          <p className="text-sm text-red-500">{formError.companyname}</p>
          <div className="flex font-montserrat flex-row gap-[18px] justify-start mt-5 md:w-full">
            <input
              id="check-box-tnc"
              type="checkbox"
              defaultChecked={formData.tnc}
              className="cursor-pointer"
              ref={checkboxRef}
              onChange={(e: any) =>
                setFormData((prev) => ({
                  ...prev,
                  tnc: e.target.checked,
                }))
              }
            />
            <label
              htmlFor="check-box-tnc"
              className="text-sm font-normal text-white-100 tracking-[0.35px] sm:w-full cursor-pointer"
            >
              I agree to be contacted by BSides Goa team for information about
              the event
            </label>
          </div>
          <p className="text-sm text-red-500">{formError.tnc}</p>

          <button
            type="submit"
            className="bg-yellow-200 cursor-pointer font-medium leading-[normal]  mx-auto mt-[33px] py-4 rounded-[5px] text-base text-black-900 text-center uppercase w-[177px] hover:bg-orange-300"
            disabled={loader}
          >
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
