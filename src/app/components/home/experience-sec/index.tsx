import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "Jul 2023 – Jun 2024",
            title: "Administrative Assistant & Visa Officer",
            company: "Namaste Holidays Tours & Treks Pvt. Ltd.",
            type: "Kathmandu, Nepal",
            description: "Managed visa and permit documentation for over 700 clients, authored company guidebooks on visa procedures, and assisted with customer support, administration, and accounting tasks."
        },
        {
            year: "Jul 2024 – Sep 2024",
            title: "Software Engineering Fellow",
            company: "Headstarter AI",
            type: "Remote",
            description: "Built and deployed AI-powered web applications during a 7-week software engineering fellowship, working on full-stack projects involving APIs, authentication systems, and responsive interfaces."
        },
        {
            year: "Dec 2024 – Feb 2025",
            title: "Fellow",
            company: "Ventured Winter Fellowship",
            type: "Remote",
            description: "Contributed to Jammy, an AI-powered music recommendation platform, assisting with application features and recommendation experiences within a product-focused team."
        },
        {
            year: "Dec 2025 – Present",
            title: "Freelance Full-Stack Developer",
            company: "Self-employed",
            type: "Remote",
            description: "Developing and deploying responsive web applications and AI-powered tools using Python, JavaScript, Flask, SQL, and REST APIs, focused on educational, productivity, and recommendation-based platforms."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === experiences.length - 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === experiences.length - 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;