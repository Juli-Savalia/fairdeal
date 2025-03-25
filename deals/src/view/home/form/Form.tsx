import Image from 'next/image';

export default function Form() {
  return (
    <div className="min-h-screen flex flex-col items-center  bg-gray-100">
      <div className="w-full bg-gradient-to-b from-[#288CD5] to-[#1A71B0] text-white py-28 px-[150px] flex flex-col items-center relative">
        <h1 className="text-[64px] md:text-5xl text-left font-bold text-[#F9F9F9]">
          Build. Operate. <span className="text-gray-200">Grow</span>
        </h1>
        <p className="max-w-2xl pt-[26px] text-left pb-10">
          We craft your initial identity, streamline your operations, and ignite your brand’s potential for sustained growth.
        </p>

        {/* Background Illustration (Optional) */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image 
            src="/assets/images/Group2222.png" // Make sure this path is correct!
            layout="fill"
            objectFit="cover"
            alt="Background"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-4xl w-full -mt-12 relative z-10">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
          Get started with us <span className="font-bold text-gray-800">today</span>
        </h2>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="p-3 border border-gray-300 rounded-md w-full" />
          <input type="text" placeholder="Brand Name" className="p-3 border border-gray-300 rounded-md w-full" />
          <input type="text" placeholder="Brand Website" className="p-3 border border-gray-300 rounded-md w-full" />
          <input type="email" placeholder="E-mail ID" className="p-3 border border-gray-300 rounded-md w-full" />
          <input type="tel" placeholder="Phone Number" className="p-3 border border-gray-300 rounded-md w-full col-span-1 md:col-span-2" />

          {/* Submit Button */}
          <button className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-all w-full md:w-auto">
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
}
