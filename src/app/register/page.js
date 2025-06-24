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
      <Footer />
    </>
  );
}
