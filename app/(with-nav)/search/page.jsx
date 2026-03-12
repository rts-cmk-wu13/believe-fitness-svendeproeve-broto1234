import Link from "next/link";
import { getAllClasses } from "@/dal/classes-dal";
import { getAllTrainers } from "@/dal/trainers-dal";
import { IoArrowBackOutline } from "react-icons/io5";
import SearchHeader from "@/components/search";
import SnapClasses from "../../../components/classes/SnapClasses";
import TrainerCard from "@/components/ui/trainerCard";

export default async function SearchPage( { searchParams }) {
  const { query } = await searchParams;

  const classes = await getAllClasses();
  const trainers = await getAllTrainers();

  const filteredClasses = query ? classes.filter((classItem) =>
    classItem.className.toLowerCase().includes(query.toLowerCase()) ||
    classItem.classDay.toLowerCase().includes(query.toLowerCase()) ||
    classItem.classDescription.toLowerCase().includes(query.toLowerCase())
  ) : classes;

  const filteredTrainers = query ? trainers.filter((trainer) =>
    trainer.trainerName.toLowerCase().includes(query.toLowerCase())
  ) : trainers;

  console.log("filTrainer", filteredTrainers)

  const finalFilter = filteredClasses.length > 0 || filteredTrainers.length>0 ;

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
        {finalFilter ? (
          <div className="mt-4 space-y-6">
            <div>
              <h2 className="text-xs font-bold mb-3">Popular classes</h2>
              <SnapClasses classes={filteredClasses} />
            </div>
            <div>
              <h2 className="text-xs font-bold">Popular Trainers</h2>
              {filteredTrainers.map(trainer =>(
                <div key={trainer.id}>
                  <TrainerCard trainer={trainer} />
                </div>
              ))}
            </div>
          </div>
        ) :
          <p className="text-sm mt-8 px-8 text-pretty">Your search did not give any results. Try to search for something else.</p>
      }
      </div>
    </div>
  );
}