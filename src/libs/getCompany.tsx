export default async function getCompany(cid:string){

    const response=await fetch(`http://localhost:5005/api/v1/companies/${cid}`)
        if(!response.ok){
            throw new Error("Failed to fetch Venues")
        }
        
        const dataJson = await response.json()
        return dataJson

    
}