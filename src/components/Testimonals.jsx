import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <div className="bg-blue-300 text-white">
      {/* TESTIMONIALS SECTION */}
      <div className="bg-white text-gray-800 py-16 px-4 sm:px-8 md:px-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-900">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },      // 📱 Mobile
            640: { slidesPerView: 1.5 },  // 📱+ slightly larger phones
            768: { slidesPerView: 2 },    // 💻 Tablets
            1024: { slidesPerView: 3 },   // 🖥 Desktops
          }}
          className="max-w-7xl mx-auto"
        >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className="bg-gray-100 rounded-xl shadow-lg p-6 sm:p-8 mx-4 hover:scale-105 transition-transform duration-300">
              <p className="italic mb-4 text-base sm:text-lg">
                “Excellent service! The inverter battery I purchased works perfectly, and their delivery was super quick.”
              </p>
              <h4 className="font-semibold text-blue-700">— Ramesh K., Pune</h4>
            </div>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide>
            <div className="bg-gray-100 rounded-xl shadow-lg p-6 sm:p-8 mx-4 hover:scale-105 transition-transform duration-300">
              <p className="italic mb-4 text-base sm:text-lg">
                “Highly reliable products. The team helped me choose the right battery for my home backup system.”
              </p>
              <h4 className="font-semibold text-blue-700">— Priya M., Kolhapur</h4>
            </div>
          </SwiperSlide>

          {/* Testimonial 3 */}
          <SwiperSlide>
            <div className="bg-gray-100 rounded-xl shadow-lg p-6 sm:p-8 mx-4 hover:scale-105 transition-transform duration-300">
              <p className="italic mb-4 text-base sm:text-lg">
                “I’ve been a regular customer for years. Great pricing and trustworthy products every single time.”
              </p>
              <h4 className="font-semibold text-blue-700">— Sanjay D., Sangli</h4>
            </div>
          </SwiperSlide>

          {/* Testimonial 4 */}
          <SwiperSlide>
            <div className="bg-gray-100 rounded-xl shadow-lg p-6 sm:p-8 mx-4 hover:scale-105 transition-transform duration-300">
              <p className="italic mb-4 text-base sm:text-lg">
                “Professional and responsive service. Installation and support were flawless.”
              </p>
              <h4 className="font-semibold text-blue-700">— Kavita S., Satara</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
