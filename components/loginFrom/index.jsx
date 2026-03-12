"use client";

import { useActionState } from "react";
import Link from "next/link";
import Button from "@/components/ui/buttonLink";
import { loginData } from "@/actions/login-action";

const initialState = {
  values: {
    username: "",
    password: "",
  },
  errors: undefined,
  // error: null,
};

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginData, initialState);

  return (
    <section className="">
      <form action={formAction} noValidate className="flex flex-col space-y-2">   
        <div>
          <input 
            type="text"
            name="username"
            placeholder="Enter your username..."
            defaultValue={state?.values?.username}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 bg-white text-xs text-gray-500" 
          />
          {state?.errors?.username && <p className="text-red-500 text-xs mt-1">{state.errors.username}</p>}
        </div>
        <div>
          <input 
            type="password"
            name="password"
            placeholder="Enter your password..."
            defaultValue={state?.values?.password}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 bg-white text-sm text-gray-500" 
          />  
          {state?.errors?.password && <p className="text-red-500 text-xs mt-1">{state.errors.password}</p>}
        </div>
        <Button type="submit" btText={isPending ? "Logging..." : "Log in"} disabled={isPending} className="w-full py-3 mt-2 bg-primaryColor text-sm font-semibold text-black rounded-4xl uppercase hover:bg-primaryColor/70"/>        
        {/* {showSuccess && <p className="text-green-500 text-xs mt-2">Login successful!</p>} */}
        {/* {state?.errors?.form && <p className="text-red-500 text-xs mt-2">{state.errors.form}</p>} */}
        <p className="text-xs mt-2 text-center text-gray-500">Are You not yet a Believer? <br/> 
          <Link href="/signup" className="underline underline-offset-3">Sign up here</Link> to start training like a pro.
        </p>
      </form>
    </section>
  );
}