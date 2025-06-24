"use client";

export default function InterestForm() {
  return (
    <form
      action="https://formspree.io/f/xeokpqgo"
      method="POST"
      className="space-y-2 max-w-2xl font-['Poppins'] text-gray-500 text-lg mx-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
        <input
          type="text"
          name="firstName"
          placeholder="First Name*"
          required
          className="border-b-2 border-gray-500 p-2"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name*"
          required
          className="border-b-2 border-gray-500 p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          className="border-b-2 border-gray-500 p-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone*"
          required
          className="border-b-2 border-gray-500 p-2"
        />
        <input
          type="text"
          name="city"
          placeholder="City*"
          required
          className="border-b-2 border-gray-500 p-2"
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code*"
          required
          className="border-b-2 border-gray-500 p-2"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6 py-6">
        <fieldset className="flex flex-col">
          <label className="mb-1 font-medium">Are you a Realtor?*</label>
          <label>
            <input
              type="radio"
              name="realtor"
              value="No"
              required
              className="mr-1"
            />
            No
          </label>
          <label>
            <input type="radio" name="realtor" value="Yes" className="mr-1" />
            Yes
          </label>
        </fieldset>

        <fieldset className="flex flex-col">
          <label className="mb-1 font-medium">
            Are you working with a Realtor?*
          </label>
          <label>
            <input
              type="radio"
              name="workingWithRealtor"
              value="No"
              required
              className="mr-1"
            />
            No
          </label>
          <label>
            <input
              type="radio"
              name="workingWithRealtor"
              value="Yes"
              className="mr-1"
            />
            Yes
          </label>
        </fieldset>
      </div>

      <select
        name="referralSource"
        required
        className="w-full border border-gray-500 p-2"
      >
        <option value="">How did you hear about us?*</option>
        <option value="Facebook">Facebook</option>
        <option value="Instagram">Instagram</option>
        <option value="Google">Google</option>
        <option value="Drive-by">Drive-by</option>
        <option value="Referral">Referral</option>
      </select>

      <select 
        name="homeType"
        required
        className="w-full border border-gray-500 p-2"
      >
        <option value="">What type of home are you looking for?*</option>
        <option value="1 Bedroom Condo">Duplex</option>
        <option value="2 Bedroom Condo">Rowhouse</option>
        <option value="Townhome">Single-Family</option>
      </select>

      <label className="flex items-center space-x-2 py-4 text-sm">
        <input type="checkbox" name="consent" required />
        <span>
          By registering, I opt-in and consent to receiving electronic messages
          from Land Done Right.
        </span>
      </label>

      <div className="flex justify-center items-center space-x-2 pt-12">
        <button
          type="submit"
          className="px-6 py-1 bg-[#FBC049] w-fit rounded-full justify-center items-center text-white text-2xl sm:text-3xl font-['Poppins'] uppercase"
        >
          Register My Interest
        </button>
      </div>
    </form>
  );
}
