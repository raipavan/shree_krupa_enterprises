import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function HeroSection() {
  return (
    <div className="bg-blue-300 text-white ">
      {/* HERO CONTENT */}
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left py-20 px-6 md:px-16">
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
       <div className="flex justify-center py-2">
  <img
    src="https://pbs.twimg.com/media/GO-bCwAXQAAUp4s.jpg"
    alt="Luminous Battery"
    className="w-64 md:w-96 rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
  />
</div>

      </div>

    </div>
  );
}
