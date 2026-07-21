import React from "react";

const research = [
  {
    title: "AI-Driven Healthcare Systems",
    description:
      "Published research exploring the integration of artificial intelligence into healthcare environments to improve diagnostics, decision-making, and patient outcomes.",
  },
  {
    title: "Quantum Computing Applications",
    description:
      "Research focused on emerging quantum technologies and their potential impact on computing, optimization, and scientific advancement.",
  },
];

const achievements = [
  "Software Engineering Fellow at Headstarter AI",
  "Stanford Code in Place 2024 Graduate",
  "Published Research Contributor",
  "Founder of Tiramisu Amate YouTube Channel (16K+ Subscribers)",
  "2nd Place – GAA Aishwarya Shield Spelling Competition",
  "50+ Hours of Community Tutoring & Volunteer Service",
];

const ResearchAchievements = () => {
  return (
    <section>
      <div className="border-t border-softGray">
        <div className="container">
          <div className="py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Research &amp; Achievements</h2>
              <p className="text-xl text-primary">( 04 )</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-20">
              <div className="w-full lg:max-w-md flex flex-col gap-7 xl:gap-10">
                <h5 className="text-black">Research &amp; Publications</h5>
                <div className="flex flex-col gap-7">
                  {research.map((item, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <h6 className="text-black">{item.title}</h6>
                        <p className="font-normal">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full flex flex-col gap-7 xl:gap-10">
                <h5 className="text-black">Achievements</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6">
                  {achievements.map((item, index) => (
                    <div
                      key={index}
                      className="p-5 xl:p-6 border border-softGray rounded-lg flex items-start gap-4"
                    >
                      <div className="no-print mt-1.5 w-3.5 h-3.5 min-w-3.5 rounded-full border-1 bg-white flex items-center justify-center border-primary">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <p className="font-normal text-black">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAchievements;
