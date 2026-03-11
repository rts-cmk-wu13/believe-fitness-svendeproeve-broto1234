
export async function getAllTrainers() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/trainers`,{
      cache: "no-store"
    });
    // console.log(res);
    
    if(!res.ok){
        throw new Error({message: res.statusText})
    }
    
    return await res.json();

  } catch (error) {
    console.log("Network error:", error);
    return {
      success: false,
      message: "Network error while fetching classes"
    }
  }    
}