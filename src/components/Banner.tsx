'use client'
import styles from './banner.module.css'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';


export default function Banner(){
    const covers=['/img/cover7.jpg','/img/cover5.jpg','/img/cover6.jpg','/img/cover8.jpg']
    const [index,setIndex]=useState(0)
    const router = useRouter()

    const {data:session}=useSession()
    console.log(session?.user)
    console.log(session?.user.token)
    console.log(session?.user.name)


    return (
        <div className="relative w-full min-h-[700px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden cursor-pointer" 
        onClick={()=>setIndex(index+1)}>
            <Image src={covers[index%4]} 
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
                <h1 className='text-4xl shadow rounded font-bold'>Unlocking Opportunities for Every Career</h1>
                <h3 className='text-xl font-serif'>Discover top employers, connect with recruiters, and take the 
                    next step in your professional journey.</h3>
            </div>
            {
                session?<div className='z-30 absolute top-5 right-10 font-semibold text-black text-xl'>
                    Welcome {session.user?.name}</div>
                    : null
            }
            <button className='bg-white text-cyan-600 border border-cyan-600
            font-semibold px-2 py-2 m-4 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick={(e)=>{e.stopPropagation();router.push('/venue')}}>
                Select Venue 
            </button>
        </div>
    );
}