import Link from "next/link"
import Card from "./Card"
import { JobPostingJson } from "../../interface";

export default async function DeleteJobpostingCatalog({jobPostingJson}: {jobPostingJson: Promise<JobPostingJson>}) {
    const jobs = await jobPostingJson;
    return(
        <>
        <span className="text-black">
            Explore {jobs.count} fabulous companies in our catalog
        </span> 
        <div style={{margin:"20px", display:"flex",flexDirection:"row", alignContent:"space-around",justifyContent:"space-around", flexWrap:"wrap",padding:"20px"}}>
            {
                jobs.data.map((job)=>(
                    <Link href={`/jobdelete/${job._id}`} className="w-1/5 px-5 py-3" key={job._id}> 
                        <Card companyName={job.title} imgSrc='https://drive.google.com/uc?export=view&id=1VThaI32ox5b6Knz9AHAf9IN3ek6RIWrH'/>
                    </Link>
                ))
            }
                
        </div>
        </>
    )
}