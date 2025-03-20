'use client'
import Card from "./Card"
import { useReducer } from 'react';
import Link from "next/link";
import Image from "next/image";

export default function CardPanel(){
    const cardReducer=( venueList: Map<string,number>,action:{type:string; venueName:string; rating?:number})=>{
        switch(action.type){
            case 'update':{
                const newVenueList = new Map(venueList);
                if (action.rating !== undefined) {
                    newVenueList.set(action.venueName, action.rating); 
                }
                return newVenueList;
            }
            case 'remove':{
                const newVenueList=new Map(venueList);
                newVenueList.delete(action.venueName);
                return newVenueList;
            }
            default:{
                return venueList;
            }
    
        }
    }
    
    const defaultVenue= new Map<string,number>([
        ["The Bloom Pavilion",0],
        ["Spark Space",0],
        ["The Grand Table",0],
    ])
    
    const [venueList,dispatchCard]=useReducer(cardReducer,defaultVenue)

    const mockVenueRepo=[
        {vid:'001',name:'The Bloom Pavilion',image:'/img/bloom.jpg'},
        {vid:'002',name:'Spark Space',image:'/img/sparkspace.jpg'},
        {vid:'003',name:'The Grand Table',image:'/img/grandtable.jpg'}
    ];

    return(
        <div>
            <div style={{margin:"20px", display:"flex",flexDirection:"row", alignContent:"space-around",
            justifyContent:"space-around", flexWrap:"wrap",padding:"10px"}}>
                {
                    mockVenueRepo.map((venueItem)=>(
                        <Link href={`/venue/${venueItem.vid}`} className="w-1/5">
                            <Card companyName={venueItem.name} imgSrc={venueItem.image}
                            onCard={(venue:string, rating:number)=>dispatchCard({type:'update',venueName:venue,rating})}/>
                        </Link>
                    ))
                }
                
            </div>
            <div className="w-full text-xl font-medium text-black ml-7 font-bold p-1.5">Venue List with Ratings: {venueList.size}</div>
            {Array.from(venueList).map(([venueName, rating])=>(
                <div key={venueName} data-testid={venueName}
                    onClick={()=>dispatchCard({type:'remove',venueName})}
                    className="text-black text-l ml-7 p-0.5">
                    {venueName}: {rating}
                </div>
            ))}
        </div>
    );
}