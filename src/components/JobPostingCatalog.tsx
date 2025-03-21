import Link from "next/link";
import Card from "./Card";
import { Key } from "react";
import { JobPostingJson } from "../../interface";

export default async function JobPostingCatalog({ jobPostingsJson }: { jobPostingsJson: Promise<JobPostingJson> }) {
    const jobPostingJsonReady = await jobPostingsJson;
    
    return (
        <>
            <span className="text-black">
                Explore {jobPostingJsonReady.count} job opportunities in our catalog
            </span> 
            <div style={{ margin: "20px", display: "flex", flexDirection: "row", alignContent: "space-around", justifyContent: "space-around", flexWrap: "wrap", padding: "20px" }}>
                {
                    jobPostingJsonReady.data.map((jobItem: { _id: Key | null | undefined; title: string; }) => (
                        <Link href={`/jobpostings/${jobItem._id}`} className="w-1/5 px-5 py-3" key={jobItem._id}> 
                            <Card companyName={jobItem.title} imgSrc="https://drive.google.com/uc?export=view&id=1VThaI32ox5b6Knz9AHAf9IN3ek6RIWrH" />
                        </Link>
                    ))
                }
            </div>
        </>
    );
}
