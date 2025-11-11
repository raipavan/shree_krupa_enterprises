import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Testimonals from "../components/Testimonals";

export default function Home() {
  return (
    <div className="text-center py-20  ">
     <div>
      <HeroSection />
    </div>

    <div className='mt-10'>
      <Link
        to="/Contact"
        className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
      >
        Contact Us
      </Link>
      </div>

      <div>
        <Testimonals/>
      </div>
    </div>
    
  );
}
