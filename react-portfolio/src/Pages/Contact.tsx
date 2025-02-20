// import { Link } from "react-router-dom";
import Socials from "../Components/Socials";
import ContactForm from "../Components/ContactForm";

export default function Contact() {
  return (
    <>
      {/****************** HERO SECTION ******************/}

      <div className="relative isolate px-6 lg:py-0 pt-28 py-10 lg:pt-14 lg:px-8 bg-light dark:bg-dark shadow-lg shadow-regal-blue/45 dark:shadow-dark overflow-clip rounded-b-xl">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-l from-[#ff4500] to-[#0047ff] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="grid max-w-screen-2xl px-8 py-8 mx-auto xl:px-16 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 fade-in">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 md:-mr-20 -mr-5 font-myFont font-extrabold tracking-tight leading-none text-4xl sm:text-5xl lg:text-5xl xl:text-6xl dark:text-light">
              Contact
            </h1>

            <p className="max-w-2xl mb-6 font-myFont text-[15px] text-justify text-gray-600 lg:mb-8 xl:pr-20 lg:pr-10 text-lg dark:text-gray-400">
              Reach out on social media or drop me an email for inquiries.
            </p>

            <Socials />
          </div>

          <div className="hidden -z-10 lg:col-span-5 lg:flex xl:-ml-[27%] lg:-ml-[20%] lg:pt-0 lg:mt-16 md:-mb-16 xl:h-[33vw] lg:h-[30vw] xl:w-[50vw] lg:w-[45vw] fade-left">
            <img src="hero-img3.png" alt="Dawson Adams Photo"></img>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-30 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/378] -translate-x-1/2 bg-gradient-to-r from-[#0047ff] to-[#ff4500] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>

      {/****************** CONTACT FORM SECTION ******************/}

      <div className="md:py-[8.5vw] py-[12.5vw] bg-light">
        <div className="grid grid-cols-3">
          <div className="border-t-2 border-dark md:mt-3 mt-[10px] xl:ml-[25%] lg:ml-[20%] md:ml-[16%] ml-[12%] sm:mr-6 mr-10 xl:translate-x-[15%] lg:translate-x-[5%] md:translate-x-[15%]"></div>

          <h2 className="text-center font-myFont lg:text-lg md:text-base text-sm text-dark tracking-widest">
            SEND ME AN EMAIL
          </h2>

          <div className="border-t-2 border-dark md:mt-3 mt-[10px] xl:mr-[25%] lg:mr-[20%] md:mr-[16%] mr-[12%] sm:ml-6 ml-10 xl:-translate-x-[15%] lg:-translate-x-[5%] md:-translate-x-[15%]"></div>
        </div>

        <ContactForm />
      </div>
    </>
  );
}
