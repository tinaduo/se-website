"use client";

import { color } from "framer-motion";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import ResidencesCarousel from "../../../components/ResidencesCarousel";

export default function Residences() {
  return (
    <>
      <header>
        <title>Residences | The Seventy-Eight Collection</title>
        <meta
          name="description"
          content="The Seventy-Eight Collection places you exactly where you want to be in the vibrant, ever-growing neighborhood of Willoughby. This exclusive selection of 31 homes, featuring 15 single-family residences, 8 rowhomes, and 8 duplexes, is thoughtfully nestled within Langley’s sought-after Willoughby area, blending modern living with a lively, connected lifestyle. Residents enjoy proximity to top-rated schools like R.E. Mountain, as well as the shopping, dining, and entertainment at Willoughby Town Centre. With easy access to Highway 1, public transit, and nearby outdoor escapes like Yorkson Community Park, this exceptional location offers an ideal mix of urban convenience and suburban tranquility for a well-rounded, vibrant lifestyle."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/selogo.png" />
      </header>
      <NavBar />
      <section>
        <img
          src="/images/renders/rowhouse-day.jpg"
          alt="Rowhomes and Duplexes"
          className="flex relative w-full h-[400px] md:h-[800px]"
        />
        <div className="bg-[#3D6663] p-12 md:p-24">
          <h1 className="text-white text-center text-4xl md:text-6xl font-semibold font-['Lora'] mb-6">
            Welcome to the Seventy-Eight Collection
          </h1>
          <p className="text-center text-white text-2xl font-normal font-['Poppins']">
            The Seventy-Eight Collection is a curated community of 31 homes in
            Langley’s vibrant Willoughby neighborhood—featuring 15 single-family
            homes, 8 rowhomes, and 8 duplexes. Enjoy top-rated schools, shops,
            and parks nearby, with easy access to Highway 1 and transit. Modern
            living meets connected, suburban charm.
          </p>
        </div>
        <section className="flex flex-col 2xl:flex-row justify-center items-center my-20 mx-6 gap-20">
          <div className="flex flex-col gap-2">
            <img
              src="/images/renders/duplex-day.jpg"
              alt="Duplex Residences"
              className="w-full h-[400px] object-cover"
            />
            <h2 className="text-[#3D6663] text-4xl font-semibold font-['Lora'] pt-2">
              Duplex
            </h2>
            <a
              href="/residences/duplex"
              className="px-6 py-1 bg-[#FBC049] rounded-full justify-center items-center text-white text-2xl sm:text-3xl font-['Poppins'] uppercase w-fit mt-4"
            >
              Browse Duplex
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <img
              src="/images/renders/rowhouse-day.jpg"
              alt="Rowhouse Residences"
              className="w-full h-[400px] object-cover"
            />
            <h2 className="text-[#3D6663] text-4xl font-semibold font-['Lora'] pt-2">
              Rowhouse
            </h2>
            <a
              href="/residences/rowhouse"
              className="px-6 py-1 bg-[#FBC049] rounded-full justify-center items-center text-white text-2xl sm:text-3xl font-['Poppins'] uppercase w-fit mt-4"
            >
              Browse Rowhouse
            </a>
          </div>
        </section>
      </section>
      <section className="flex flex-col justify-center items-center mx-6 gap-11">
        <ImgComparisonSlider
          style={{
            "--divider-color": "#3D6663",
            "--divider-width": "4px",
            "--default-handle-color": "#3D6663",
          }}
        >
          <img slot="first" src="/images/residences/interior/willow.jpg" />
          <img slot="second" src="/images/residences/interior/whisper.jpg" />
        </ImgComparisonSlider>

        <div className="flex flex-col justify-center items-start md:flex-row gap-12">
          <h1 className="text-[#3D6663] text-4xl sm:text-6xl font-semibold font-['Lora'] w-fit">
            The Heart of Homes.
          </h1>
          <div className="flex flex-col gap-11">
            <p className="justify-center text-[#3D6663] text-2xl font-normal font-['Poppins'] max-w-[1500px] md:ml-20">
              Discover spaces designed to be the true heart of your home, where
              every detail brings comfort and elegance together. Our
              open-concept layouts maximize both space and light, with kitchens
              featuring generous islands, ample counter space, and spacious
              pantries. Choose between two signature color palettes: Willow, a
              serene green inspired by nature, or Whisper, a soft blue that
              captures the calm of the sky. Large windows illuminate sleek
              laminate flooring throughout, creating an effortlessly stylish
              backdrop for every moment. Each home is thoughtfully crafted to
              provide an inviting blend of modern comfort and timeless beauty.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center my-20 gap-20">
        <ResidencesCarousel />
      </section>

      <section className="flex flex-col mx-6">
        <h1 className="justify-center text-[#3D6663] text-6xl font-semibold font-['Lora'] pb-24">
          Features
        </h1>
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-1 gap-4">
          <div className="flex flex-col gap-4">
            <h3 className="self-stretch justify-start text-[#FBC048] text-3xl font-bold font-['Poppins']">
              WELCOME HOME
            </h3>
            <ul className="list-disc pl-6 text-2xl font-['Poppins'] text-[#3D6663] leading-snug">
              <li>
                Stylish Color Palettes: Choose between Willow, a serene green,
                and Whisper, a calming blue, to personalize your space.
              </li>
              <li>Elegant shaker cabinetry for a classic look.</li>
              <li>
                Wide-plank oak laminate flooring for comfort and durability.
              </li>
              <li>
                Plush carpet on the stairs for safety and acoustic comfort.
              </li>
              <li>Expansive 9-foot ceilings throughout the living area.</li>
              <li>Custom-built closet organizers for efficient storage. </li>
              <li>Energy-efficient Whirlpool washer and dryer.</li>
              <li>
                Forced-air heating system for affordable, efficient warmth.
              </li>
              <li>Navien hot water on demand for energy efficiency.</li>
              <li>Level 2 EV charging ready for electric vehicles.</li>
              <li>
                Built-in irrigation system ensures the community maintains its
                curb appeal.
              </li>
            </ul>
            <h3 className="self-stretch justify-start text-[#FBC048] text-3xl font-bold font-['Poppins']">
              WELCOME HOME
            </h3>
            <ul className="list-disc pl-6 text-2xl font-['Poppins'] text-[#3D6663] leading-snug">
              <li>
                Connects you to sports, dining, shopping, and the beautiful
                nature of Willoughby.
              </li>
              <li>
                Enjoy green spaces, unique boutiques, and great dining options
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="list-disc pl-6 text-2xl font-['Poppins'] text-[#3D6663] leading-snug">
              <li>
                Experience a lifestyle where your to-do list doesn’t involve parking meters—welcome to effortless convenience.
              </li>
              <li>
                Enjoy various outdoor activities and recreational facilities just moments away.
              </li>
              <li>
                Benefit from easy access to public transit and major roadways, connecting you to the wider area
              </li>
              <li>
                The transformative $4.01 billion BRT and Skytrain extension project, expected to be completed by 2028, will redefine the area and improve transportation options for residents.
              </li>
            </ul>
            <h3 className="self-stretch justify-start text-[#FBC048] text-3xl font-bold font-['Poppins']">
              GOURMET KITCHEN
            </h3>
            <ul className="list-disc pl-6 text-2xl font-['Poppins'] text-[#3D6663] leading-snug">
              <li>
                Modern pendant lights over the kitchen island.
              </li>
              <li>
                Soft-closing cabinet doors and drawers for quiet operation.
              </li>
              <li>
                Solid quartz countertops and a seamless full-piece backsplash for durability and easy maintenance.
              </li>
              <li>
                Stainless-steel undermount sink.
              </li>
              <li>
                Matte-black Kohler faucet with extractable hand spray.
              </li>
              <li>
                Premium KitchenAid appliances:
              </li>
              <li>
                French-door refrigerator with internal water dispenser.
              </li>
              <li>
                Gas convection range with burners.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="list-disc pl-6 text-2xl font-['Poppins'] text-[#3D6663] leading-snug">
              <li>
                  Stainless-steel dishwasher with hidden controls.
                </li>
                <li>
                  Built-in stainless-steel microwave.
                </li>
                <li>
                  AEG under-cabinet telescopic hood fan.
                </li>
            </ul>
            <h3 className="self-stretch justify-start text-[#FBC048] text-3xl font-bold font-['Poppins']">
              MODERN FIXTURES AND FINISHES
            </h3>
            <ul className="list-disc pl-6 text-2xl font-['Poppins'] text-[#3D6663] leading-snug">
              <li>
                Spacious bathroom vanities with porcelain under-mount sinks.
              </li>
              <li>
                Spa-inspired ensuite bathrooms with frameless glass showers.
              </li>
              <li>
                Matte-black Kohler fixtures for sleek design and easy cleaning.
              </li>
            </ul>
            <h3 className="self-stretch justify-start text-[#FBC048] text-3xl font-bold font-['Poppins']">
              PEACE OF MIND
            </h3>
            <ul className="list-disc pl-6 text-2xl font-['Poppins'] text-[#3D6663] leading-snug">
              <li>
                All homes are covered by the Travelers 2-5-10 Year Warranty Program:
              </li>
              <li>
                2 years for materials and labor.
              </li>
              <li>
                5 years for building envelope.
              </li>
              <li>
                10 years for structural defects.
              </li>
            </ul>
            <a 
              href="files/Seventy-Eight_Brochure_Post.pdf"
              download="Seventy-Eight_Brochure_Post.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-1 bg-[#FBC049] rounded-full justify-center items-center text-white text-2xl sm:text-3xl font-['Poppins'] uppercase w-fit mt-4"
            >
            Download Brochure
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mx-16 py-12 gap-20">
        <p className="text-center justify-start text-[#3D6663] text-base font-normal font-['Poppins']">The developer reserves the right to make changes and modifications to the building design, elevations, dimensions, specifications, features and prices without prior notifications. Decks, patios, stairs, and windows may vary based on site conditions. All sizes and dimensions are approximate and based on architectural measurements. Reverse and/or mirror plans occur throughout the development. Please see disclosure statement for specific offering once available. E. & O.E. </p>
      </section>
      <Footer />
    </>
  );
}
