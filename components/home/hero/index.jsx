import Link from "next/link";
import { LuAlignRight } from "react-icons/lu";

export default function Hero() {  
  return (
    <section className="w-full h-150 flex items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat ">
      <div className="w-full h-full flex flex-col justify-between text-center p-12 bg-black/36">
        <div className="flex justify-end">
          <LuAlignRight className="text-white" size={80}/>
        </div>
        <div className="text-left">
        <h1 className="text-6xl font-bold mb-10 text-textColor">Welcome to <br /> Belive Fitness</h1>
        <div className="flex gap-4 justify-start">
          <Link href="/classes" className="text-black font-semibold text-md px-10 py-4 rounded-full uppercase bg-textColor">
            Classes
          </Link>
          <Link href="/login" className="text-black font-semibold text-md px-10 py-4 rounded-full uppercase  bg-textColor">
            Log in
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}