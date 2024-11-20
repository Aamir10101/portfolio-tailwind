import React from "react"

 export default function About() {
    return(
        <div>
            <div className="p-8 bg-yellow-300 min-h-screen">
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                    <h3 className="text-4xl font-semibold mb-4 pl-4">
                    About me </h3>
                        <p className="text-lg text-gray-700"></p>
                        <p>I am a student of GIAIC</p>
                        <p>Learning Artificial intellegence</p>
                        <p>and currently work on the frontend development in Next.js</p>
                        <p>SEO expert</p>
                        <p>I am always looking forward to Learning a new thing and improve my skills</p>
                        
                    </div>
                    <div>
                        <h3 className="text-4xl font-semibold mt-4 pl-4">Skills</h3>
                        <ul className="list-disc ml-4 text-gray-700">
                            <li>Html</li>
                            <li>CSS</li>
                            <li>Typescript</li>
                            <li>React</li>
                            <li>Tailwind</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}