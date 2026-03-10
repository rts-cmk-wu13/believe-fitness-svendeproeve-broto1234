"use client";

import { useActionState, useState, useEffect } from "react";
import { contactData } from "@/actions/contactus-action";

const initialState = {
  values: {
    name: "",
    email: "",
    message: "",
  },
  errors: undefined,
  // error: null,
};

export default function ContactUs() {
  const [state, formAction, isPending] = useActionState(contactData, initialState);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state?.success) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state?.success]);

  return (
    <section className="my-16 px-4">
      <h2 className="text-2xl font-bold">Contact us</h2>
      <p className="text-sm my-4">Ask us anything about Believe Fitness!</p>
      <form action={formAction} noValidate className="mt-4 flex flex-col space-y-2">                
      {/* <form className="mt-4 flex flex-col space-y-2">                 */}
        <div>
          <input 
            type="text"
            name="name"
            placeholder="Enter your name..."
            defaultValue={state?.values?.name}
            className="w-full px-4 py-3 border border-gray-400 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-500 bg-white text-sm text-gray-500" 
          />
          {state.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name}</p>}
        </div>
        <div>
          <input 
            type="email"
            name="email"
            placeholder="Enter your email..."
            defaultValue={state?.values?.email}
            className="w-full px-4 py-3 border border-gray-400 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-500 bg-white text-sm text-gray-500" 
          />  
          {state?.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email}</p>}
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Enter your message..."
            defaultValue={state?.values?.message}
            className="w-full px-4 py-3 border border-gray-400 rounded-2xl focus:outline-none focus:ring-1 focus:ring-gray-500 bg-white text-sm text-gray-500 resize-none"
            rows="4"
          ></textarea>
          {state?.errors?.message && <p className="text-red-500 text-xs mt-1">{state.errors.message}</p>}
        </div>
        <button
          type="submit"
          disabled={isPending}        
          className="w-full py-3 mt-2 bg-primaryColor text-md text-black rounded-4xl uppercase hover:bg-primaryColor/70">
            {isPending ? "Sending..." : "Send Message"}
        </button> 
        {showSuccess && <p className="text-green-500 text-xs mt-2">Message sent successfully!</p>}
        {/* {state?.errors?.general && <p className="text-red-500 text-xs mt-2">{state.errors.general}</p>} */}
      </form>
    </section>
  );
}