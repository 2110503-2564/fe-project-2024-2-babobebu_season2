'use client'
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { useState } from 'react';
import Rating from '@mui/material/Rating';


export default function Card({companyName,imgSrc, onCard}
    :{companyName:string,imgSrc:string,onCard?:Function}){
    const [value, setValue] = useState<number | null>(0);

    return(
        <InteractiveCard>
            <div className='w-full h-[60%] relative rounded-t-lg' >
                <Image 
                    src={imgSrc}
                    alt='Product Picture'
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='object-cover rounded-t-lg relative'
                    style={{position:'relative', width:'100%',height:'auto'}}/>
            </div>

            <div className='w-full min-h-[30%] p-[10px] text-red-400 break-words shadow-gray-700 font-semibold'> {companyName}
                {/* <div className='text-gray-500 text-sm font-sans mt-1 font-normal'>
                    Capture the moment of your life. 
                    Let's appreciate and embrace all the beloved and impressive moment of life with us!
                </div> */}

                {/*Rating Compo*/}
                <div>
                    {
                        onCard? <Rating
                        name={companyName+' Rating'}
                        id={companyName+' Rating'}
                        value={value}
                        onChange={(event,newValue)=>{
                            setValue(newValue);
                            onCard(companyName,newValue)
                        }}
                        onClick={(e)=>{e.stopPropagation()}}/>: ''
                    }

                    
                </div>
                    
            </div>
            
        </InteractiveCard>
    );
}