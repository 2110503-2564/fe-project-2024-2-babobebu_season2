import InterviewCatalog from "@/components/InterviewCatalog";
import getInterviews from "@/libs/getInterviews";

export default async function InterviewPage() {
    const interviewsJson = getInterviews();

    return (
        <main className="w-full flex flex-col items-center space-y-6 py-6">
            <div className="text-2xl font-semibold text-black">Interviews</div>
            <InterviewCatalog interviewsJson={interviewsJson} />
        </main>
    );
}
