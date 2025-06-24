import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import FadeCarousel from "../../components/FadeCarousel";
import InterestForm from "../../components/InterestForm";

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

         {/* Open Graph / Facebook */}
        <meta property="og:title" content="The Seventy-Eight Collection | Langley Homes for Sale" />
        <meta
          property="og:description"
          content="Live in Langley’s sought-after Willoughby neighborhood. Explore modern homes close to schools, shopping, and parks."
        />
        <meta property="og:image" content="images/renders/duplex-day.jpg" />
        <meta property="og:url" content="https://www.seventyeightcollection.ca/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="The Seventy-Eight Collection" />
        
      </header>
      <NavBar />
      <FadeCarousel />
      <main className="flex flex-col justify-start items-center gap-64 my-64">
        <section className="flex flex-col 2xl:flex-row justify-center items-center gap-11">
          <img
            className="w-screen 2xl:w-[800px] md:h-fit"
            src="/images/drinks.png"
          />
          <div className="flex flex-col justify-center items-start gap-6 md:gap-12 mx-6">
            <h1 className="justify-center text-[#3D6663] text-4xl sm:text-6xl font-semibold font-['Lora']">
              Together Starts Here. <br /> Make It Yours.
            </h1>
            <p className="justify-center text-[#3D6663] text-lg md:text-2xl font-normal font-['Poppins'] md:mr-8">
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
        <section className="flex flex-col justify-center items-center mx-6 gap-6 md:gap-12">
          <img className="w-full h-full" src="/images/renders/duplex-day.jpg" />
          <div className="flex flex-col justify-center items-start md:flex-row gap-12">
            <h1 className="justify-center text-[#3D6663] text-4xl sm:text-6xl font-semibold font-['Lora']">
              Quiet Corners of Willoughby.
            </h1>
            <div className="flex flex-col gap-11 md:ml-20">
              <p className="justify-center text-[#3D6663] text-lg md:text-2xl font-normal font-['Poppins']">
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
          <div className="flex flex-col justify-center items-center my-12">
            <InterestForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
