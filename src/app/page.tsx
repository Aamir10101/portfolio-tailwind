import React from "react"
import Link from "next/link"




export default function Home() {
    return(
        <div>
            {/* hero section */}
            <section className="text-center py-20 bg-blue-100 w-full mt-10">
                <h1 className="text-5xl font-bold">
                </h1>
                <p className="text-2xl mt-2 text-black font-bold w-full">
                 Frontend Developer | Programming with Amir <br /> Learning Artificial Intelligence
                </p>
                <Link href="/hire" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Hire me</Link>
            </section>
        </div>
    )
}