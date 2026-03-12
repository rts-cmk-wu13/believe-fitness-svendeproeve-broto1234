
import Link from "next/link";
import { IoClose } from "react-icons/io5";
// import { cookies } from "next/headers";
// import { redirect } from "next/dist/server/api-utils";

export default async function Navigation() {

  // const cookiesStore = await cookies();  
  // console.log("Cookies in Navigation:", cookiesStore); 

  //   if (!cookiesStore.has("userId") || !cookiesStore.has("accessToken")) {
  //     redirect("/login");
  //   }
  
    // const userId = cookiesStore.get("userId")?.value;
    // const accessToken = cookiesStore.get("accessToken")?.value;

  // const token = cookiesStorage().get("accessToken")?.value;

  // if (!token) {
  //   redirect("/login");
  // }

  // const handleLogOut = () => {
  //  cookiesStore().delete("accessToken");
  //   cookies().delete("userId");
  //   redirect("/login");
  // }


  return (
    <nav className="text-center">
      <div className="flex justify-end p-4">
        <Link href="/home"><IoClose size={30}/></Link>
      </div>
      <ul className="mt-16 flex flex-col gap-4">
        <li><Link href="/home" className="text-md hover:underline">Home</Link></li>
        <li><Link href="/classes" className="text-md hover:underline">Popular classes</Link></li>
        <li><Link href="/search" className="text-md hover:underline">Search</Link></li>
        <li><Link href="/profile" className="text-md hover:underline">My Profile</Link></li>
        <li><Link href="/login" className="text-md hover:underline">Log Out</Link></li>
        {/* <li>
          {accessToken ? (
            <p>Log Out</p>
          ) : <Link href="/login" className="text-md hover:underline">Log in</Link>
          }
        </li> */}
      </ul>
    </nav>
  );
} 