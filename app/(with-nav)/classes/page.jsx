
import { getAllClasses } from "@/dal/classes-dal";
import ClassesCard from "@/components/classes/ClassesCard";

export default async function Classes() {
  const classes = await getAllClasses();
  const randomClass = classes[Math.floor(Math.random() * classes.length)];

  return (
    <ClassesCard classes={classes} randomClass={randomClass} />
  );
}