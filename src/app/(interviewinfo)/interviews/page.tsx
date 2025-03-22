import InterviewCatalog from "@/components/InterviewCatalog";
import getInterviews from "@/libs/getInterviews";
import { getSession } from "next-auth/react";
export default async function InterviewPage() {
    const session = await getSession();
    const token = session?.user.token;
    console.log('Hiii');
    console.log("Token:", token);
    console.log('Heyy')
    const interviewsJson = await getInterviews();
    console.log("Interviews JSON:", interviewsJson); // Log interviews data

    return (
        <main className="w-full flex flex-col items-center space-y-6 py-6">
            <div className="text-2xl font-semibold text-black">Interviews</div>
            <InterviewCatalog interviewsJson={interviewsJson} />
        </main>
    );
}

