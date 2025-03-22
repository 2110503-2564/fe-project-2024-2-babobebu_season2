'use client'
import { useRouter } from "next/navigation"; // Import useRouter
import { deleteJobposting } from "@/libs/deleteJobposting";
import getJobPosting from "@/libs/getJobPosting";

export default async function DeleteJobpostingDetailPage({ params }: { params: { jpid: string } }) {
    // console.log("loading page"); 
    const router = useRouter(); 
    // const [isDeleting, setIsDeleting] = useState(false); // Add isDeleting state
    // const [deleteError, setDeleteError] = useState<string | null>(null); // Add deleteError state

    const jobDetail = await getJobPosting(params.jpid);

    const handleDelete = async () => {
        // setIsDeleting(true); // Set deleting state to true
        // setDeleteError(null); // Reset error state

        try {
            await deleteJobposting(params.jpid);
            router.push("/jobdelete");
        } catch (error: any) {
            // setDeleteError(error.message || "Failed to delete company.");
        } finally {
            // setIsDeleting(false); // Reset deleting state
        }
    };

    if (!jobDetail) {
        return (
            <main><div><h1>job posting id {params.jpid} is deleted</h1></div></main>
        );
    }

    return (
        <main className="text-center p-5 text-black">
            <h1 className="text-lg font-medium">{jobDetail.data.title}</h1>
            <div className="text-left my-5">
                <p><strong>Description:</strong> {jobDetail.data.jobdescription}</p>
                <p><strong>Requirements:</strong> {jobDetail.data.requirement}</p>
                <p><strong>Salary Range:</strong> {jobDetail.data.salary_range}</p>
                <p><strong>Job Type:</strong> {jobDetail.data.jobtype}</p>
                <p><strong>Company:</strong> {jobDetail.data.company.name}</p>
                <p><strong>Posted Date:</strong> {new Date(jobDetail.data.posted_date).toLocaleDateString()}</p>
            </div>
            <button className="bg-red-400 hover:bg-red-600 p-2" onClick={handleDelete} >
               Delete Job posting 
            </button>
        </main>
    );
}