export default async function userLogIn(userEmail:string, userPassword:string) {
    const response = await fetch('http://jobfair-env.eba-et2rserh.us-east-1.elasticbeanstalk.com/api/v1/auth/login',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            email:userEmail,
            password:userPassword
        }),
    })

    if(!response.ok){
        throw new Error('Failed to Login')
    }
    
    return await response.json()

}



