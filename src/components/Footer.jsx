export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center py-6 mt-10">
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()} Shreekrupa Invertor Battery Distributor. All rights reserved.
      </p>
      <p className="text-xs mt-2 text-gray-300">
        Designed with ❤️ using React + Tailwind CSS
      </p>
    </footer>
  );
}
