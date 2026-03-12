import Link from "next/link";
import { userDeleteClass } from "@/actions/userDeleteClass-action";

export default function ShowClassCard( {userId, classId} ) {
    async function handleDelete() {
      "use server";
      await userDeleteClass(userId, classId);
    }

  return (
    <div className="flex items-center justify-between">
    <div className="bg-primaryColor text-xs text-center font-semibold uppercase px-4 py-2 rounded-full mt-2"> 
      <Link href={`/classes/${classId}`}>Show class</Link>
    </div>
    <div className="bg-primaryColor text-xs text-center font-semibold uppercase px-4 py-2 rounded-full mt-2"> 
      <form action={handleDelete}>
        <button type="submit" className="w-full">Leave</button>
      </form>
      {/* <Link href="">Leave</Link> */}
    </div>
    </div>
  );
}