export default async function getJobPosting(jpid:string) {

    await new Promise((resolve) => {
        setTimeout(resolve, 300);
    })

    const response = await fetch(`http://jobfair-env.eba-et2rserh.us-east-1.elasticbeanstalk.com/api/v1/jobpostings/${jpid}`);

    if (!response.ok)
        throw new Error("Failed to fetch data!");

    return await response.json();
}