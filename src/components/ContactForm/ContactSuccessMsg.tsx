import React from "react";

const ContactSuccessMsg = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] fixed inset-0 z-30">
      <div className="max-w-[400px] py-10 bg-[#000] text-white-100 shadow-3xl rounded-3xl relative">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-white-100 text-yellow-200 mb-4 flex justify-center items-center">
            <i className="fa-solid fa-check text-yellow-200 text-4xl"></i>
          </div>
          <h2 className="text-lg">Thankyou!</h2>
          <p className="px-4 text-center pt-4 text-md">
            Your request has been submitted successfully. We will contact you
            soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSuccessMsg;
