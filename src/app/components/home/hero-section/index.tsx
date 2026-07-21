import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
          <div>
            <div className="flex items-center gap-8">
              <h1>I'm Ojaswi</h1>
              <div className="wave">
                <Image
                  src={getImgPath("/images/home/banner/wave-icon.svg")}
                  alt="wave-icon"
                  width={62}
                  height={62}
                  className=""
                />
              </div>
            </div>
            <h1>Full-Stack Developer</h1>
          </div>
          <p className="text-secondary font-normal max-w-md xl:max-w-xl">
            Building intelligent web applications, AI-powered solutions, and
            scalable digital experiences. Computer Science student at ECE
            Paris, passionate about turning ideas into real products through
            software engineering and AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default index;
