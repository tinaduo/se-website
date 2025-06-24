import React from "react";

const Footer = () => (
  <footer className="flex w-screen flex-col md:flex-row bg-[#3D6663] bg-cover bg-no-repeat gap-y-16 px-8 py-10 font-['Poppins'] justify-between">
    <div className="flex flex-col lg:flex-row gap-x-12 gap-y-12">
      <section>
        <h3 className="justify-start text-white text-2xl md:text-4xl font-medium uppercase mb-4">
          Visit the site
        </h3>
        <p className="w-96 justify-center text-white text-xl md:text-2xl font-normal mb-4">
          20453 78 Avenue Langley, British Columbia V2Y1X3
        </p>
        <img className="w-96 h-52" src="/images/svg/site.svg" alt="Site location map" />
      </section>
      <section className="flex flex-col">
        <h3 className="justify-start text-white text-2xl md:text-4xl font-medium uppercase mb-4">
          CONTACT US
        </h3>
        <div className="flex flex-col">
          <a href="mailto:info@landdoneright.com" className="justify-center text-white text-2xl font-normal lowercase">
            info@landdoneright.com
          </a>
          <a href="tel:604-716-9134" className="justify-center text-white text-2xl font-normal lowercase">
            604-716-9134
          </a>
        </div>
      </section>
    </div>
    <section className="flex items-end">
      <img className="min-h-[37.9px] min-w-[221px]" src="/images/svg/logos.svg" alt="Logo of Land Done Right, Sutton, Quantum Group and Karma Homes" />
    </section>
  </footer>
);

export default Footer;
