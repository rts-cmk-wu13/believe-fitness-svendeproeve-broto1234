"use client";

import { useActionState, useState, useEffect } from "react";
import { signupData } from "@/actions/signup-action";
import Button from "@/components/ui/buttonLink";

const initialState = {
  values: {
    userFirstName: "",
    userLastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  },
  errors: undefined,
};

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(signupData, initialState);
  
  return (
    <section className="pb-4">
      <form action={formAction} noValidate className="flex flex-col space-y-2">                
        <div>
          <input 
            type="text"
            name="userFirstName"
            placeholder="Enter your first name..."
            defaultValue={state?.values?.userFirstName}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 bg-white text-xs text-gray-500" 
          />
          {state.errors?.userFirstName && <p className="text-red-500 text-xs mt-1">{state.errors.userFirstName}</p>}
        </div>
        
        <div>
          <input 
            type="text"
            name="userLastName"
            placeholder="Enter your last name..."
            defaultValue={state?.values?.userLastName}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 bg-white text-xs text-gray-500" 
          />
          {state.errors?.userLastName && <p className="text-red-500 text-xs mt-1">{state.errors.userLastName}</p>}
        </div>
        
        <div>
          <input 
            type="text"
            name="username"
            placeholder="Enter your username..."
            defaultValue={state?.values?.username}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 bg-white text-xs text-gray-500" 
          />
          {state.errors?.username && <p className="text-red-500 text-xs mt-1">{state.errors.username}</p>}
        </div>
        <div>
          <input 
            type="password"
            name="password"
            placeholder="Enter your password..."
            defaultValue={state?.values?.password}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 bg-white text-xs text-gray-500" 
          />  
          {state?.errors?.password && <p className="text-red-500 text-xs mt-1">{state.errors.password}</p>}
        </div>
        <div>
          <input 
            type="password"
            name="confirmPassword"
            placeholder="Repeat your password..."
            defaultValue={state?.values?.confirmPassword}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 bg-white text-xs text-gray-500"
          />  
          {state?.errors?.confirmPassword && <p className="text-red-500 text-xs mt-1">{state.errors.confirmPassword}</p>}
        </div>
        <Button type="submit" btText={isPending ? "Signing up..." : "Sign Up"} disabled={isPending} className="w-full py-3 mt-2 bg-primaryColor text-sm font-semibold text-black rounded-4xl uppercase hover:bg-primaryColor/70"/>        
        {state?.errors?.form && <p className="text-red-500 text-xs mt-2">{state.errors.form}</p>}
      </form>
    </section>
  );
}