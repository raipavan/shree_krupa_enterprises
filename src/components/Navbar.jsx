import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-lg md:text-2xl font-bold">
        Shreekrupa Invertor Battery
      </Link>

      <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <ul
        className={`md:flex gap-8 ${open ? "block" : "hidden"} md:block text-center md:text-left`}
      >
        <li><Link to="/" className="hover:text-yellow-300" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/products" className="hover:text-yellow-300" onClick={() => setOpen(false)}>Products</Link></li>
        <li><Link to="/about" className="hover:text-yellow-300" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-300" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}
