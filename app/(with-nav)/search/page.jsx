import Link from "next/link";
import { getAllClasses } from "@/dal/classes-dal";
import { IoArrowBackOutline } from "react-icons/io5";
import SearchHeader from "@/components/search";
import SnapClasses from "../../../components/classes/SnapClasses";

export default async function SearchPage( { searchParams }) {
  const { query } = await searchParams;

  const classes = await getAllClasses();

  const filteredClasses = query ? classes.filter((classItem) =>
    classItem.className.toLowerCase().includes(query.toLowerCase())
  ) : classes;  

  return (
    <div className="px-4 py-8">
      <div className="relative flex items-center px-4 py-8">
        <Link href="/classes" className="fixed top-4 left-4 p-2 cursor-pointer z-999">
          <IoArrowBackOutline className="text-gray-500"/>
        </Link>
        <h1 className="text-md -mt-16 ml-4">Search</h1>
      </div>
      <SearchHeader />
      <div>
        <h2>Popular classes</h2>
        <SnapClasses classes={filteredClasses} />
      </div>
    </div>
  );
}