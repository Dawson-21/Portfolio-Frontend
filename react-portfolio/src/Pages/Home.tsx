import { Link } from "react-router-dom";
import Button2 from "../Components/Button2";
import Card from "../Components/Card";

export default function Home() {
  return (
    <>
      {/****************** HERO SECTION ******************/}

      <div className="relative isolate px-6 lg:py-0 pt-28 py-10 lg:pt-14 lg:px-8 bg-bg dark:bg-dark shadow-lg shadow-bright-orange/45 dark:shadow-gray-900 overflow-clip rounded-b-xl">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-l from-[#ff4500] to-[#0047ff] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="grid max-w-screen-2xl px-8 py-8 mx-auto xl:px-16 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 fade-in">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 md:-mr-20 -mr-5 font-myFont font-extrabold tracking-tight leading-none text-4xl sm:text-5xl lg:text-5xl xl:text-6xl dark:text-light">
              Hi, I'm Dawson Adams
            </h1>
            <p className="max-w-2xl mb-6 font-myFont text-[15px] text-justify text-gray-600 lg:mb-8 xl:pr-20 lg:pr-10 text-lg dark:text-gray-400">
              Professional web developer and aspiring software engineer with
              skills ranging from front-end design and user experience
              optimization to back-end development and database management. I
              recently graduated from Texas A&M University - Corpus Christi with
              a Bachelor of Computer Science.
            </p>
            <Link to="/about">
              <button
                className="transform hover:scale-[1.15] transition duration-200 ease-in-out relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-myFont text-dark font-extrabold hover:text-light dark:text-light rounded-lg group 
                bg-gradient-135 from-bright-orange from-20% to-regal-blue to-80% group-hover:from-bright-orange group-hover:to-regal-blue"
              >
                <span
                  className="relative px-5 py-2.5 transition-all ease-in duration-200 
                bg-light dark:bg-slate-950 rounded-md group-hover:bg-opacity-0"
                >
                  Learn More
                </span>
              </button>
            </Link>
            <Link to="/portfolio">
              <div className="inline-flex px-5 py-3 mr-3 font-myFont hover:scale-[1.15] transition duration-500 ease-in-out">
                <Button2>View My Work</Button2>
              </div>
            </Link>
          </div>
          <div className="hidden -z-10 lg:col-span-5 lg:flex xl:-ml-[27%] lg:-ml-[20%] lg:pt-0 lg:mt-16 md:-mb-16 xl:h-[33vw] lg:h-[30vw] xl:w-[50vw] lg:w-[45vw] fade-left">
            <img src="hero-img.png" alt="Dawson Adams Photo"></img>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-30 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/378] -translate-x-1/2 bg-gradient-to-r from-[#0047ff] to-[#ff4500] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>

      {/****************** PROJECTS SECTION ******************/}

      <div className="py-20 bg-light">
        <div className="grid grid-cols-3">
          <div className="border-t-2 border-dark md:mt-3 mt-[10px] xl:ml-[25%] lg:ml-[20%] md:ml-[16%] ml-[12%] md:mr-4 sm:mr-6 mr-10 xl:translate-x-[15%] lg:translate-x-[5%]"></div>

          <h2 className="sm:-mx-4 -mx-10 text-center font-myFont lg:text-lg md:text-base text-sm text-dark tracking-widest">
            MY LATEST PROJECTS
          </h2>

          <div className="border-t-2 border-dark md:mt-3 mt-[10px] xl:mr-[25%] lg:mr-[20%] md:mr-[16%] mr-[12%] md:ml-4 sm:ml-6 ml-10 xl:-translate-x-[15%] lg:-translate-x-[5%]"></div>
        </div>

        <div className="inline-flex xl:mx-[12%] lg:mx-[8%] md:mx-[5%] mx-[4%] lg:gap-10 md:gap-6 sm:gap-4 gap-2 pt-6">
          <div className="md:max-w-md max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-light dark:bg-dark dark:border-dark">
            <Card
              img="img-2.png"
              title="Portfolio Website"
              desc="Built from the ground up using React.js
                and Tailwind CSS, with many reusable components and well written
                code."
            />
          </div>
          <div className="lg:max-w-[33%] max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-light dark:bg-dark dark:border-dark">
            <Card
              img="MD3.png"
              title="Web Development Website"
              desc="This is a website designed with WordPress using Elementor. I built the website for my freelance web development business."
            />
          </div>
          <div className="hidden md:block lg:max-w-[33%] max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-light dark:bg-dark dark:border-dark">
            <Card
              img="TGS2.png"
              title="Gutter Business Website"
              desc="I built this website using WordPress and various plugins for optimizations. Simple and sleek one page design for company's new website."
            />
          </div>
        </div>
      </div>
    </>
  );
}
