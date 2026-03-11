"use client";

// import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";

export default function SearchHeader() {

  // const [isShownInput, setIsShownInput] = useState(false);

  const router = useRouter();  // Get the router instance
  const pathname = usePathname();  // Get the current pathname

  const handleChange = (e) => {
    const eventValue = e.target.value;

    if (eventValue) {
      router.replace(`${pathname}?query=${eventValue}`);  // Navigate to the same pathname with the query parameter
    } else {
      router.replace(pathname);
      // router.push(pathname);
    }
  };

  // const toggleShownInput = () => {
  //   setIsShownInput(!isShownInput);
  // }

  return (
    <div className="flex items-center space-x-2 px-2 py-1 border-2 text-gray-400 rounded-full">
        <FiSearch size={20}/>
      <form className="">
          <input
            type="text"
            name="query"
            onChange={handleChange}
            placeholder="Search classes"
            className="w-full text-sm focus:outline-none text-black"
            />
      </form>
    </div>
  )
}