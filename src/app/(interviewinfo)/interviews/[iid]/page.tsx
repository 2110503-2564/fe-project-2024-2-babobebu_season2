import getInterview from "@/libs/getInterview";

export default async function InterviewDetailPage({ params }: { params: { iid: string } }) {
    const interview = await getInterview(params.iid);

    return (
        <main className="text-center p-5 text-black">
            <h1 className="text-lg font-medium">Interview Details</h1>
            <div className="text-left my-5">
                <p><strong>Company:</strong> {interview.data.company.name}</p>
                <p><strong>Interview Date:</strong> {new Date(interview.data.intwDate).toLocaleDateString()}</p>
                <p><strong>Candidate:</strong> {interview.data.user.name}</p>
                <p><strong>Created At:</strong> {new Date(interview.data.createdAt).toLocaleDateString()}</p>
            </div>
        </main>
    );
}
