"use client";

import Footer from "../../../../components/Footer";
import NavBar from "../../../../components/NavBar";
import InterestForm from "../../../../components/InterestForm";

export default function Rowhouse() {
  return (
    <>
      <header>
        <title>Residences - Rowhouse | The Seventy-Eight Collection</title>
        <meta
          name="description"
          content="The Seventy-Eight Collection places you exactly where you want to be in the vibrant, ever-growing neighborhood of Willoughby. This exclusive selection of 31 homes, featuring 15 single-family residences, 8 rowhomes, and 8 duplexes, is thoughtfully nestled within Langley’s sought-after Willoughby area, blending modern living with a lively, connected lifestyle. Residents enjoy proximity to top-rated schools like R.E. Mountain, as well as the shopping, dining, and entertainment at Willoughby Town Centre. With easy access to Highway 1, public transit, and nearby outdoor escapes like Yorkson Community Park, this exceptional location offers an ideal mix of urban convenience and suburban tranquility for a well-rounded, vibrant lifestyle."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/selogo.png" />
      </header>
      <NavBar />
      <img
        src="/images/renders/rowhouse-day.jpg"
        alt="Rowhouse Exterior"
        className="flex relative w-full h-[400px] md:h-[800px] object-cover"
      />
      <main className="flex flex-col min-h-screen">
        <div className="bg-[#3D6663] p-12 md:p-24">
          <h1 className="text-white text-center text-4xl md:text-6xl font-semibold font-['Lora']">
            ROWHOME LOT 27
          </h1>
          <p className="text-white text-center text-lg md:text-2xl mt-4">
            6 BEDROOMS | 3.5 BATHROOMS | 2,894 SQFT. (APPROX)
          </p>
        </div>
        <section className="flex flex-col items-center justify-center p-6 md:p-12">
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-1 gap-4">
            <div className="flex flex-col items-center gap-4">
              <img
                src="/images/residences/rowhouse/basement.png"
                alt="Basement Floor Plan"
                className="w-full h-auto"
              />
              <p className="flex flex-col text-center text-2xl font-bold text-[#FBC048] uppercase">
                BASEMENT
                <span className="font-medium text-[#3D6663]">924 SQFT.</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img
                src="/images/residences/rowhouse/mainfloor.png"
                alt="Mainfloor Floor Plan"
                className="w-full h-auto"
              />
              <p className="flex flex-col text-center text-2xl font-bold text-[#FBC048] uppercase">
                Main Floor
                <span className="font-medium text-[#3D6663]">982 SQFT.</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img
                src="/images/residences/rowhouse/upperfloor.png"
                alt="Upperfloor Floor Plan"
                className="w-full h-auto"
              />
              <p className="flex flex-col text-center text-2xl font-bold text-[#FBC048] uppercase">
                Upper Floor
                <span className="font-medium text-[#3D6663]">969 SQFT.</span>
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center gap-16 mb-24">
          <h1 className="text-[#3D6663] text-6xl font-semibold font-['Lora'] pb-12">
            Interested in this residence?
          </h1>
          <p className="text-center justify-start text-[#3D6663] text-base font-normal font-['Poppins']">
            Please fill out the form below to register your interest in this
            residence. We will get back to you as soon as possible.
          </p>
          <InterestForm />
        </section>

        <section className="flex flex-col justify-center items-center py-12 gap-20 mx-6">
          <p className="text-center justify-start text-[#3D6663] text-base font-normal font-['Poppins']">The developer reserves the right to make changes and modifications to the building design, elevations, dimensions, specifications, features and prices without prior notifications. Decks, patios, stairs, and windows may vary based on site conditions. All sizes and dimensions are approximate and based on architectural measurements. Reverse and/or mirror plans occur throughout the development. Please see disclosure statement for specific offering once available. E. & O.E. </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
