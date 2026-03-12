import { getSingleClass } from "@/dal/singleClass-dal";
import { getAllTrainers } from "@/dal/trainers-dal";
import ClassDetailsCard from "@/components/classes/ClassDetailsCard";
import { getUserById } from "@/actions/user-action";

export default async function ClassDetailsPage({ params }) {
  const { id } = await params;
  const classItems = await getSingleClass(id);
  const trainers = await getAllTrainers();
  const user = await getUserById();
  
  console.log("Class Items in ClassDetailsPage:", classItems);
  console.log("Trainers in ClassDetailsPage:", trainers);
  console.log("User...:", user);

  const isUserEnrolled = user.classes?.some(cls => cls.id === Number(id));

  return (
    <ClassDetailsCard user={user} classItems={classItems} trainers={trainers} isUserEnrolled={isUserEnrolled} />
  );
}