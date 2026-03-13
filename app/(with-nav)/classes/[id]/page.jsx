import { getSingleClass } from "@/dal/singleClass-dal";
import { getAllTrainers } from "@/dal/trainers-dal";
import ClassDetailsCard from "@/components/classes/ClassDetailsCard";

export default async function ClassDetailsPage({ params }) {
  const { id } = await params;
  const classItems = await getSingleClass(id);
  const trainers = await getAllTrainers();
  
  console.log("Class Items in ClassDetailsPage:", classItems);
  console.log("Trainers in ClassDetailsPage:", trainers);

  return (
    <ClassDetailsCard classItems={classItems} trainers={trainers} />
  );
}