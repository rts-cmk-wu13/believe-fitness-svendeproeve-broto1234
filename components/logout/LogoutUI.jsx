"use client";


export default function LogoutUI({ logoutAction }) {
  

  return (
    <div className="relative">
        <form action={logoutAction} className="">
          <button 
            type="submit" 
            // onClick={logoutAction}
            className="text-md hover:underline cursor-pointer"
          >
            Logout
          </button>
        </form>
    </div>
  );
}
