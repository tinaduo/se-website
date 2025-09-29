"use client";

import Footer from "../../../../components/Footer";
import NavBar from "../../../../components/NavBar";

export default function SingleFamily() {
  return (
    <>
      <header>
        <title>Residences - Single-Family | The Seventy-Eight Collection</title>
        <meta
          name="description"
          content="The Seventy-Eight Collection places you exactly where you want to be in the vibrant, ever-growing neighborhood of Willoughby. This exclusive selection of 31 homes, featuring 15 single-family residences, 8 rowhomes, and 8 duplexes, is thoughtfully nestled within Langley’s sought-after Willoughby area, blending modern living with a lively, connected lifestyle. Residents enjoy proximity to top-rated schools like R.E. Mountain, as well as the shopping, dining, and entertainment at Willoughby Town Centre. With easy access to Highway 1, public transit, and nearby outdoor escapes like Yorkson Community Park, this exceptional location offers an ideal mix of urban convenience and suburban tranquility for a well-rounded, vibrant lifestyle."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/selogo.png" />
      </header>
      <NavBar />
      <img
        src="/images/renders/duplex-day.jpg"
        alt="Duplexes"
        className="flex relative w-full h-[400px] md:h-[800px] object-cover"
      />
      <main className="flex flex-col min-h-screen">
    <div className="bg-[#3D6663] p-12 md:p-24">
          <h1 className="text-white text-center text-4xl md:text-6xl font-semibold font-['Lora']">
            Explore Single-Family Residences
          </h1>
        </div>
        <section className="flex flex-col 2xl:flex-row justify-center items-center my-20 mx-6 gap-20">
          <div className="flex flex-col gap-2">
            <img
              src="/images/residences/single-family/lot11-day.png"
              alt="Single-Family Lot 11"
              className="w-full h-[400px] object-cover"
            />
            <h2 className="text-[#3D6663] text-4xl font-semibold font-['Lora'] pt-2">
              Lot 11
            </h2>
            <a
              href="/residences/single-family/lot11"
              className="px-6 py-1 bg-[#FBC049] rounded-full justify-center items-center text-white text-2xl sm:text-3xl font-['Poppins'] uppercase w-fit mt-4"
            >
              Browse Lot 11
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <img
              src="/images/residences/single-family/lot12-day.png"
              alt="Single-Family Lot 12"
              className="w-full h-[400px] object-cover"
            />
            <h2 className="text-[#3D6663] text-4xl font-semibold font-['Lora'] pt-2">
              Lot 12
            </h2>
            <a
              href="/residences/single-family/lot12"
              className="px-6 py-1 bg-[#FBC049] rounded-full justify-center items-center text-white text-2xl sm:text-3xl font-['Poppins'] uppercase w-fit mt-4"
            >
              Browse Lot 12
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
