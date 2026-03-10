"use client";

import { useActionState, useState, useEffect } from "react";
import { newsletterAction } from "@/actions/newsletter-action";

const initialState = {
  values: {
    email: "",
  },
  errors: undefined,
};


export default function Newsletter() {
  const [state, formAction, isPending] = useActionState(newsletterAction, initialState);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (state?.success) {
      setIsSuccess(true);
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    } else if (state?.errors) {
      setIsSuccess(false);
    } else {
      setIsSuccess(false);
    }     
  }, [state?.success, state?.errors]);

    // console.log("state:", state);

  return (  
    <section className="my-4 px-4">
      <h2 className="text-xl font-bold">Sign up for our newsletter</h2>
      <p className="text-md/7 my-8">Sign up to receive the latest news and announcements from Believe Fitness</p>
      <form className="mt-4 grid grid-cols-3 items-center justify-between gap-2" action={formAction} noValidate>
        <div className="col-span-2">
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            defaultValue={state?.values?.email}
            className="w-full px-2 py-2 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-700 bg-white text-md text-gray-700"
          />
          {state?.errors?.email && <p className="text-red-500 text-xs">{state.errors.email}</p>}
        </div>
        {state?.errors?.form && <p className="text-red-500 text-xs mt-1">{state.errors.form}</p>}
        <button type="submit" disabled={isPending} className="p-3 bg-primaryColor text-xs font-semibold uppercase text-black cursor-pointer rounded-full hover:bg-primaryColor/70 hover:text-foreground">
          {isPending ? "Signing up..." : "Sign up"}
        </button> 
        {isSuccess && <p className="w-120 text-green-500 text-md -mt-2">Signed up successfully!</p>}
        {state?.errors && !state?.errors?.email && <p className="text-red-500 text-xs mt-1">Error signing up</p>}
      </form>
    </section>
  );
}