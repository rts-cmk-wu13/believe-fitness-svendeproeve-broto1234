"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuAlignRight } from "react-icons/lu";

export default function Nav() {
  const pathname = usePathname();
  const grayNav = ["/classes", "/search", "/profile", "/instructor"];
  const navColor = grayNav.includes(pathname) ? "text-gray-500" : "text-white";

  return (
    <div className="fixed top-6 right-6 flex justify-end z-999">
      <Link href="/navigation">
        <LuAlignRight className={navColor} size={30}/>            
      </Link>
    </div>
  );
}