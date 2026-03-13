import Link from "next/link";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import Button from "@/components/ui/buttonLink";
import TrainerCard from "../ui/trainerCard";
import AddClass from "@/components/classes/AddClass";

export default async function ClassDetailsCard( { userid, classItems, trainers } ) {

  const trainer = trainers.find((trainer) => trainer.id === classItems.trainer.id);

  return (
    <section className="relative">
      <Link href="/classes" className="fixed top-4 left-4 p-2 text-white cursor-pointer z-999">
        <IoArrowBackOutline className="text-white"/>
      </Link>
      <div className="relative w-full h-70">
        <Image src={classItems.asset.url} alt={classItems.className} width={800} height={600} className="w-full h-full object-cover" />
        <div className="w-full absolute bottom-0 left-0 px-6 py-4 text-primaryColor z-999">
          <h2 className="w-46 text-xl font-bold">{classItems.className}</h2>
          <div className="flex items-center justify-between">
            <p className="text-[0.5rem] flex items-center gap-2 mt-1">
              <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /> <span>{classItems.rating} 5/5</span>
            </p>
            <button
              className="mt-2 px-6 py-2 bg-secondaryColor text-[11px] text-primaryColor uppercase rounded-full border"
            >
              Rate
            </button>                  
          </div>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="px-6 py-2 z-100">
        <p className="text-xs font-semibold">{classItems.classDay} - {classItems.classTime}</p>
        <p className="text-xs mt-2">{classItems.classDescription}</p>
        <div className="my-4">
          <h2 className="font-semibold">Trainer</h2>
          <TrainerCard trainer={trainer} />
          <div className="flex gap-4">
          <AddClass classItems={classItems} />
          </div>
        </div>
      </div>
    </section>
  );
}