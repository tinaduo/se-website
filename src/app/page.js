import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import FadeCarousel from "../../components/FadeCarousel";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <header>
        <title>Home | The Seventy-Eight Collection</title>
        <meta
          name="description"
          content="The Seventy-Eight Collection places you exactly where you want to be in the vibrant, ever-growing neighborhood of Willoughby. This exclusive selection of 31 homes, featuring 15 single-family residences, 8 rowhomes, and 8 duplexes, is thoughtfully nestled within Langley’s sought-after Willoughby area, blending modern living with a lively, connected lifestyle. Residents enjoy proximity to top-rated schools like R.E. Mountain, as well as the shopping, dining, and entertainment at Willoughby Town Centre. With easy access to Highway 1, public transit, and nearby outdoor escapes like Yorkson Community Park, this exceptional location offers an ideal mix of urban convenience and suburban tranquility for a well-rounded, vibrant lifestyle."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/selogo.png" />
      </header>
      <NavBar />
      <FadeCarousel />
      <main className="flex flex-col justify-start items-center gap-64 my-64">
        <section className="flex flex-col lg:flex-row justify-center items-cente gap-11">
          <img
            className="w-full h-full sm:w-[800px] sm:h-fit"
            src="/images/drinks.png"
          />
          <div className="flex flex-col justify-center items-start gap-12">
            <h1 className="justify-center text-[#3D6663] text-4xl sm:text-6xl font-semibold font-['Lora']">
              Together Starts Here. Make It Yours.
            </h1>
            <p className="justify-center text-[#3D6663] text-2xl font-normal font-['Poppins']">
              Imagine a place where every day feels like it was made just for
              you and those you love. At The Seventy-Eight Collection, we
              believe a home should be the heart of your life—a place filled
              with joy, comfort, and the people who mean the most. This isn’t
              just a collection of homes; it’s a canvas for the moments you’ll
              cherish forever. Together begins here. Make it yours.
            </p>
            <a
              href="/community"
              className="px-6 py-1 bg-[#FBC049] rounded-full justify-center items-center text-white text-2xl sm:text-3xl font-['Poppins'] uppercase"
            >
              Explore the Community
            </a>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center mx-6 gap-11">
          <img className="w-full h-full" src="/images/renders/duplex-day.jpg" />
          <div className="flex flex-col justify-center items-start md:flex-row gap-12">
            <h1 className="justify-center text-[#3D6663] text-4xl sm:text-6xl font-semibold font-['Lora']">
              Quiet Corners of Willoughby.
            </h1>
            <div className="flex flex-col gap-11 md:ml-20">
              <p className="justify-center text-[#3D6663] text-2xl font-normal font-['Poppins']">
                Experience peaceful living nestled within the vibrant Willoughby
                community. Each home is thoughtfully crafted to bring
                tranquility into daily life, with spaces that offer calm amid
                the neighborhood’s lively energy.
              </p>
              <a
                href="/residences"
                className="px-6 py-1 bg-[#FBC049] w-fit rounded-full justify-center items-center text-white text-2xl sm:text-3xl font-['Poppins'] uppercase"
              >
                explore the residences
              </a>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center mx-6 gap-6">
          <h1 className="justify-center text-[#3D6663] text-4xl sm:text-6xl font-semibold font-['Lora']">
            Register Today
          </h1>
          <p className="justify-center text-[#3D6663] text-2xl font-normal text-center font-['Poppins']">
            31 modern homes in the heart of Willoughby. Close to schools, shops,
            parks, and transit. <br />
            Get exclusive updates and launch info.
          </p>
          <div className="flex flex-col justify-center items-center my-32">
            <form className="flex flex-col ">
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 text-lg font-medium mb-1 mt-4"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-teal-700 transition duration-300 bg-transparent text-gray-900 py-1"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 text-lg font-medium mb-1 mt-4"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-teal-700 transition duration-300 bg-transparent text-gray-900 py-1"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-lg font-medium mb-1 mt-4"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-teal-700 transition duration-300 bg-transparent text-gray-900 py-1"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 text-lg font-medium mb-1 mt-4"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-teal-700 transition duration-300 bg-transparent text-gray-900 py-1"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="px-6 py-1 bg-[#FBC049] w-fit rounded-full justify-center items-center text-white text-2xl sm:text-3xl font-['Poppins'] uppercase"
              >
                register my interest
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
