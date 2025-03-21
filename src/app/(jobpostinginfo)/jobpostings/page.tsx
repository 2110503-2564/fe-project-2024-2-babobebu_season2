import JobPostingCatalog from "@/components/JobPostingCatalog";
import getJobPostings from "@/libs/getJobPostings";

export default async function JobPostingPage() {
    const jobPostingsJson = getJobPostings();
    
    return (
        <main className="w-full flex flex-col items-center space-y-6 py-6">
            <div className="text-2xl font-semibold text-black">Job Postings</div>
            <JobPostingCatalog jobPostingsJson={jobPostingsJson} />
        </main>
    );
}