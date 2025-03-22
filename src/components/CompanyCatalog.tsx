import Link from "next/link";
import Card from "./Card";
import { CompanyJson } from "../../interface";

export default async function CCatalog({ companiesJson }: { companiesJson: Promise<CompanyJson> }) {
    const companyJsonReady = await companiesJson;

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 py-12 px-6  rounded-xl shadow-lg p-8">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500">
                    Explore {companyJsonReady.count} Amazing Companies
                </h1>
                <p className="text-lg md:text-xl font-light mt-4 text-gray-700">
                    Browse through a wide range of companies and find your perfect career fit.
                </p>
            </div>

            {/* Company Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                {companyJsonReady.data.map((companyItem) => (
                    <Link
                        href={`/companies/${companyItem._id}`}
                        key={companyItem._id}
                        className="group transform transition-all duration-300 ease-in-out hover:scale-105"
                    >
                        <Card 
                            companyName={companyItem.name} 
                            imgSrc="https://drive.google.com/uc?export=view&id=1VThaI32ox5b6Knz9AHAf9IN3ek6RIWrH"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
