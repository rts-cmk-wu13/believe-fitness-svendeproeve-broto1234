import Link from "next/link";
import { IoClose } from "react-icons/io5";

export default function Navigation() {
  return (
    <nav className="text-center">
      <div className="flex justify-end p-4">
        <Link href="/home"><IoClose size={30}/></Link>
      </div>
      <ul className="mt-16 flex flex-col gap-4">
        <li><Link href="/home" className="text-md hover:underline">Home</Link></li>
        <li><Link href="/classes" className="text-md hover:underline">Popular classes</Link></li>
        <li><Link href="/search" className="text-md hover:underline">Search</Link></li>
        <li><Link href="/profile" className="text-md hover:underline">My Profile</Link></li>
        <li><Link href="/logout" className="text-md hover:underline">Log Out</Link></li>
      </ul>
    </nav>
  );
} 