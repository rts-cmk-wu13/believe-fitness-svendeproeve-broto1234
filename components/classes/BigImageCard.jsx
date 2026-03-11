import Image from "next/image";
import { IoStar } from "react-icons/io5";

export default function BigImageCard({ bigImage }) {

  return (
    <div className="relative w-full h-60 my-4 overflow-hidden rounded-lg">
          <Image src={bigImage.asset.url} alt={bigImage.className} width={800} height={600} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 px-6 py-4 bg-primaryColor  rounded-[0em_2.5em_0em_0em]">
            <h2 className="text-xs font-bold">{bigImage.className}</h2>
            <p className="text-[0.5rem] flex items-center gap-2 mt-1">
              <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /> 
            </p>
          </div>
        </div>
  )
}