import Image from "next/image"
import getCompany from "@/libs/getCompany"
export default async function CompanyDetailPage({params}:{params:{vid:string}}){
    console.log("CompanyDetailPage params:", params);
    const companyDetail = await getCompany(params.vid)
    // const mockVenueRepo=new Map()
    // mockVenueRepo.set('001',{name:'The Bloom Pavilion',image:'/img/bloom.jpg'}) 
    // mockVenueRepo.set('002',{name:'Spark Space',image:'/img/sparkspace.jpg'}) 
    // mockVenueRepo.set('003',{name:'The Grand Table',image:'/img/grandtable.jpg'}) 


    return(
        <main className="text-center p-5 text-black">
            <h1 className="text-lg font-medium text-black">{companyDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src='https://drive.google.com/uc?export=view&id=1VThaI32ox5b6Knz9AHAf9IN3ek6RIWrH'
                alt="Company Image"
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className="text-left text-black">
                    <div className="text-md mx-5">{companyDetail.data.name}</div>
                    <div className="text-md mx-5">Address: {companyDetail.data.address}</div>
                    <div className="text-md mx-5">District: {companyDetail.data.district}</div>
                    <div className="text-md mx-5">Province: {companyDetail.data.province}</div>
                    <div className="text-md mx-5">Postal Code: {companyDetail.data.postalcode}</div>
                    <div className="text-md mx-5">Website: {companyDetail.data.website}</div>
                    <div className="text-md mx-5">Tel: {companyDetail.data.telephonenumber}</div>
                    <div className="text-md mx-5">Description: {companyDetail.data.description}</div>
                </div>

            </div>
        </main>
    )
}


