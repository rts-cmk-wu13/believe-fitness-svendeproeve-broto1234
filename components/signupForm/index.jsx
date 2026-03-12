"use client";

import { useActionState, useState, useEffect } from "react";
import Link from "next/link";
import { signupData } from "@/actions/signup-action";
import { fi } from "zod/v4/locales";

const initialState = {
  values: {
    userFirstName: "",
    userLastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  },
  errors: undefined,
  // success: false,
};

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(signupData, initialState);
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
    <section className="">
      <form action={formAction} noValidate className="flex flex-col space-y-2">                
        <div>
          <input 
            type="text"
            name="userFirstName"
            placeholder="Enter your first name..."
            defaultValue={state?.values?.userFirstName}
            className="w-full px-2 py-1 border border-gray-300 rounded-[1px] focus:outline-none focus:ring-2 focus:ring-gray-700 bg-white text-xs text-gray-500" 
          />
          {state.errors?.userFirstName && <p className="text-red-500 text-xs mt-1">{state.errors.userFirstName}</p>}
        </div>
        
        <div>
          <input 
            type="text"
            name="userLastName"
            placeholder="Enter your last name..."
            defaultValue={state?.values?.userLastName}
            className="w-full px-2 py-1 border border-gray-300 rounded-[1px] focus:outline-none focus:ring-2 focus:ring-gray-700 bg-white text-xs text-gray-500" 
          />
          {state.errors?.userLastName && <p className="text-red-500 text-xs mt-1">{state.errors.userLastName}</p>}
        </div>
        
        <div>
          <input 
            type="text"
            name="username"
            placeholder="Enter your username..."
            defaultValue={state?.values?.username}
            className="w-full px-2 py-1 border border-gray-300 rounded-[1px] focus:outline-none focus:ring-2 focus:ring-gray-700 bg-white text-xs text-gray-500" 
          />
          {state.errors?.username && <p className="text-red-500 text-xs mt-1">{state.errors.username}</p>}
        </div>
        <div>
          <input 
            type="password"
            name="password"
            placeholder="Enter your password..."
            defaultValue={state?.values?.password}
            className="w-full px-2 py-1 border border-gray-300 rounded-[1px] focus:outline-none focus:ring-2 focus:ring-gray-700 bg-white text-xs text-gray-500" 
          />  
          {state?.errors?.password && <p className="text-red-500 text-xs mt-1">{state.errors.password}</p>}
        </div>
        <div>
          <input 
            type="password"
            name="confirmPassword"
            placeholder="Repeat your password..."
            defaultValue={state?.values?.confirmPassword}
            className="w-full px-2 py-1 border border-gray-300 rounded-[1px] focus:outline-none focus:ring-2 focus:ring-gray-700 bg-white text-xs text-gray-500" 
          />  
          {state?.errors?.confirmPassword && <p className="text-red-500 text-xs mt-1">{state.errors.confirmPassword}</p>}
        </div>
        <button
          type="submit"
          disabled={isPending}        
          className="w-40 mx-auto p-2 mt-2 bg-white text-sm text-black font-semibold rounded-md hover:bg-red-400 hover:text-foreground">
            {isPending ? "Logger ind..." : "Log ind"}
        </button> 
        {showSuccess && <p className="text-green-500 text-xs mt-2">Registration successful!</p>}
        {state?.errors?.form && <p className="text-red-500 text-xs mt-2">{state.errors.form}</p>}
      </form>
    </section>
  );
}