export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left py-20 px-6 md:px-16 bg-gradient from-blue-800 to-blue-500 text-white">
      {/* LEFT CONTENT */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Reliable Power Solutions <br /> for Every Need
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Shreekrupa Invertor Battery Distributor — Trusted since 1998
        </p>
        <a
          href="/products"
          className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
        >
          Explore Products
        </a>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="md:w-1/2 flex justify-center flex-wrap gap-6">
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2023/9/345805623/CR/BK/VW/44424447/luminous-inverter-battery-1000x1000.jpg"
          alt="Luminous Battery"
          className="w-40 md:w-52 rounded-lg shadow-lg hover:scale-105 transition"
        />
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2021/12/FF/CC/ZW/8906369/amaron-quanta-battery.jpg"
          alt="Amaron Quanta Battery"
          className="w-40 md:w-52 rounded-lg shadow-lg hover:scale-105 transition"
        />
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2021/12/ZC/AS/QO/26815503/exide-inverter-battery.jpg"
          alt="Exide Battery"
          className="w-40 md:w-52 rounded-lg shadow-lg hover:scale-105 transition"
        />
      </div>
    </div>
  );
}
