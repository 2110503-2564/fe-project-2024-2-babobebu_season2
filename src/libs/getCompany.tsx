export default async function getCompany(cid:string){

    await new Promise((resolve) => {
        setTimeout(resolve, 300);
    })

    const response=await fetch(`http://localhost:5005/api/v1/companies/${cid}`)
    
    if(!response.ok)
        throw new Error("Failed to fetch Venues");
        
    return await response.json();
    
}