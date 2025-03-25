export default async function getJobPostingforCompany(cid:string) {

    await new Promise((resolve) => {
        setTimeout(resolve, 300);
    })

    const response = await fetch(`http://localhost:5005/api/v1/jobpostings?company=${cid}`);

    if (!response.ok)
        throw new Error("Failed to fetch data!");

    return await response.json();
}