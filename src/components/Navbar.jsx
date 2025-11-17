import { useState } from "react";
import { Link } from "react-router-dom";
import EstimatePopup from "./EstimatePopup";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Estimate Popup */}
      {showPopup && <EstimatePopup onClose={() => setShowPopup(false)} />}

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <nav className="bg-blue-900 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
        <Link
          to="/"
          className="text-lg md:text-2xl font-bold transition-all duration-300 hover:tracking-wider"
        >
          Shreekrupa Invertor Battery
        </Link>

        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ul
          className={`md:flex gap-8 fixed md:static top-0 right-0 h-full md:h-auto 
            w-2/5 bg-transparent backdrop-blur-md transition-transform duration-500 
            transform md:transform-none z-50
            ${open ? "translate-x-0" : "translate-x-full"}
            md:translate-x-0 p-6 md:p-0 text-center md:text-left`}
        >
          <li>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block py-3 hover:text-yellow-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/products"
              onClick={() => setOpen(false)}
              className="block py-3 hover:text-yellow-300"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="block py-3 hover:text-yellow-300"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block py-3 hover:text-yellow-300"
            >
              Contact
            </Link>
          </li>

          <li className="mt-2">
            <button
              onClick={() => {
                setShowPopup(true);
                setOpen(false);
              }}
              className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-xl
              hover:bg-yellow-300 hover:scale-105 transition-all w-full md:w-auto"
            >
              Get Free Estimate
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
