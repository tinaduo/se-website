"use client";

import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import Marquee from "react-fast-marquee";
import AccordionWithImage from "../../../components/AccordionWithImage";

export default function Community() {
  return (
    <>
    <header>
        <title>Community | The Seventy-Eight Collection</title>
        <meta
          name="description"
          content="The Seventy-Eight Collection places you exactly where you want to be in the vibrant, ever-growing neighborhood of Willoughby. This exclusive selection of 31 homes, featuring 15 single-family residences, 8 rowhomes, and 8 duplexes, is thoughtfully nestled within Langley’s sought-after Willoughby area, blending modern living with a lively, connected lifestyle. Residents enjoy proximity to top-rated schools like R.E. Mountain, as well as the shopping, dining, and entertainment at Willoughby Town Centre. With easy access to Highway 1, public transit, and nearby outdoor escapes like Yorkson Community Park, this exceptional location offers an ideal mix of urban convenience and suburban tranquility for a well-rounded, vibrant lifestyle."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/selogo.png" />
      </header>
      <NavBar />
      <div className="flex flex-col-reverse bg-[url(/images/community/township-langley.png)] relative w-full h-[400px] md:h-[800px] bg-cover">
        <h1 className="text-white text-4xl md:text-6xl font-semibold font-['Lora'] mb-8 ml-4 shadow">Willoughby, Langley</h1>
      </div>
      <main className="flex flex-col justify-center items-center my-20 gap-20 mx-6">
        <section className="flex flex-col justify-center items-center gap-6 mx-6">
          <h1 className="justify-center text-[#3D6663] text-4xl sm:text-6xl font-semibold font-['Lora']">
            Your Community.
          </h1>
          <p className="justify-center text-[#3D6663] text-lg md:text-2xl font-normal text-center font-['Poppins']">
            Enjoy a community that places Willoughby’s best—sports, <br />
            nature, dining, and shopping—right at your doorstep.
          </p>
          <AccordionWithImage />
        </section>
        <section className="flex flex-col justify-center items-center gap-6">
          <h1 className="justify-center text-[#3D6663] text-4xl sm:text-6xl font-semibold font-['Lora'] text-center">
            Active Living, Right at Your Doorstep.
          </h1>
          <p className="justify-center text-[#3D6663] text-lg md:text-2xl font-normal text-center font-['Poppins'] w-10/12 md:w-6/12 my-6">
            Just minutes away, the expanding Langley Events Centre and the
            upcoming Smith Athletic Park will offer ice hockey, lacrosse,
            tournaments, and outdoor fields—bringing sports, recreation, and
            community events right to your neighborhood.
          </p>
          <Marquee 
            className="w-screen"
            speed={50}
            pauseOnHover={true}
          >
            <div className="flex flex-row gap-2 items-center justify-center w-fit">
              <img
                src="/images/community/1eec1e005cc3bad07af9a229ac925e1f660dc6f6.png"
                alt="Langley Events Centre"
                className="w-[200px] h-[300px] md:w-[400px] md:h-[500px] object-cover ml-2"
              />
              <img
                src="/images/community/6df751f7f277d9b96593da4c1ff131b7af4f8dac.png"
                alt="Township of Langley"
                className="w-[200px] h-[300px] md:w-[400px] md:h-[500px] object-cover"
              />
              <img
                src="/images/community/eec2b79f1706abf3334865561b925d2973bd2b69.png"
                alt="Smith Athletic Park"
                className="w-[200px] h-[300px] md:w-[400px] md:h-[500px] object-cover"
              />
              <img
                src="/images/community/donna.png"
                alt="Donna Gabriel Robins Elementary"
                className="w-[200px] h-[300px] md:w-[400px] md:h-[500px] object-cover"
              />
              <img
                src="/images/community/towncentre.png"
                alt="Willoughby Town Centre"
                className="w-[200px] h-[300px] md:w-[400px] md:h-[500px] object-cover"
              />
              <img
                src="/images/community/willowbrook.png"
                alt="Willowbrook Shopping Centre"
                className="w-[200px] h-[300px] md:w-[400px] md:h-[500px] object-cover"
              />
              <img
                src="/images/community/york.png"
                alt="Yorkson Village"
                className="w-[200px] h-[300px] md:w-[400px] md:h-[500px] object-cover"
              />
            </div>
          </Marquee>
        </section>
      </main>
      <Footer />
    </>
  );
}
