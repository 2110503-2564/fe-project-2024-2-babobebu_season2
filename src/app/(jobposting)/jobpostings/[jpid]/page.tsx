import getJobPosting from "@/libs/getJobPosting";

export default async function JobPostingDetailPage({ params }: { params: { jpid: string } }) {
    const jobPosting = await getJobPosting(params.jpid);

    return (
        <main className="text-center p-5 text-black">
            <h1 className="text-lg font-medium">{jobPosting.data.title}</h1>
            <div className="text-left my-5">
                <p><strong>Description:</strong> {jobPosting.data.jobdescription}</p>
                <p><strong>Requirements:</strong> {jobPosting.data.requirement}</p>
                <p><strong>Salary Range:</strong> {jobPosting.data.salary_range}</p>
                <p><strong>Job Type:</strong> {jobPosting.data.jobtype}</p>
                <p><strong>Company:</strong> {jobPosting.data.company.name}</p>
                <p><strong>Posted Date:</strong> {new Date(jobPosting.data.posted_date).toLocaleDateString()}</p>
            </div>
        </main>
    );
}