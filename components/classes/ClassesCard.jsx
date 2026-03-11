"use client"
import { useState } from "react";
import Link from "next/link";
import BigImageCard from "./BigImageCard";
import SnapClasses from "./SnapClasses"

export default function ClassesCard( { classes, randomClass } ) {
  const [bigImage, setBigImage] = useState(randomClass);
  // console.log("Classes in ClassesCard:", classes);
  console.log("Random Class:", randomClass);
  
  return (
    <section className="px-6 py-10">
      <h1 className="text-md">Popular Classes</h1>

      <Link href={`/classes/${bigImage.id}`}>
        <BigImageCard bigImage={bigImage} />
      </Link>

      <div>
        <h2 className="text-sm font-bold mb-2">Classes for You</h2>
        <SnapClasses classes={classes} />
      </div>
    </section>
  )
}