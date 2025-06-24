"use client";

import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import InterestForm from "../../../components/InterestForm";

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
      <main className="flex flex-col justify-center items-center my-20 gap-20">
      <section className="flex flex-col justify-center items-center mx-6 gap-6">
        <h1 className="justify-center text-[#3D6663] text-4xl sm:text-6xl font-semibold font-['Lora']">
          Register Today
        </h1>
        <p className="justify-center text-[#3D6663] text-2xl font-normal text-center font-['Poppins']">
          31 modern homes in the heart of Willoughby. Close to schools, shops,
          parks, and transit. <br />
          Get exclusive updates and launch info.
        </p>
        <div className="flex flex-col justify-center items-center my-12">
          <InterestForm />
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
