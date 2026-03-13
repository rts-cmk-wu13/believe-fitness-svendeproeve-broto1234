export async function getSingleTrainer(id) {
  try {
    if (!id) {
      throw new Error({message: "Post ID is required"});
    }

    if(!/^\d+$/.test(id)) {
      throw new Error({message: "Post ID must be a numeric string"});
    }

    const res = await fetch(`${process.env.API_URL}/api/v1/trainers/${id}`);
    
    if(!res.ok){
        throw new Error({message: res.statusText})
    }
    
    return await res.json();

  } catch (error) {
    console.log("Network error:", error);
    return {
      success: false,
      message: "Network error while fetching trainer"
    }
  }    
}