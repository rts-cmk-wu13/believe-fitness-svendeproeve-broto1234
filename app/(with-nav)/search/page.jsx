
import Image from "next/image";
import Link from "next/link";
import { getAllClasses } from "@/dal/classes-dal";
import { getAllTrainers } from "@/dal/trainers-dal";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
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
              <div className="flex gap-3">
                {filteredClasses.map(cls =>(
                  <div key={cls.id} className="relative w-24 h-32 overflow-hidden rounded-lg">
                  <Link href={`/classes/${cls.id}`}>
                  <Image src={cls.asset.url} alt={cls.className} width={400} height={400} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 px-2 py-2 bg-primaryColor  rounded-[0em_2.5em_0em_0em]">
                    <h2 className="text-[0.4rem] font-bold">{cls.className}</h2>
                    <p className="text-[0.4rem] flex items-center gap-2 mt-1">
                      <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /> 
                    </p>
                  </div>
                  </Link>                
              </div>
              ))}
              </div>
            </div>
            <div>
              <h2 className="text-xs font-bold">Popular Trainers</h2>
              {filteredTrainers.map(trainer =>(
                <TrainerCard key={trainer.id} trainer={trainer} />
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