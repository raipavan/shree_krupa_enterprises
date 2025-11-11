import { useState } from "react";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      name: "Luminous Inverter Battery",
      desc: "Long backup, heavy duty performance",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Amaron Quanta",
      desc: "Maintenance-free inverter battery",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Exide Tubular Battery",
      desc: "High-efficiency, long life",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Microtek Inverter Battery",
      desc: "Durable, high-performance backup",
      img: "https://via.placeholder.com/200",
    },
  ];

  const phoneNumber = "9876543210"; // Replace with your real number

  // Filter products based on search
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-100 text-center relative">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-blue-900">
        Our Products
      </h2>

      {/* 🔍 Search Bar */}
      <div className="mb-10 flex justify-center">
        <input
          type="text"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* PRODUCT GRID */}
      <div className="grid gap-10 md:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p, i) => (
            <div
              key={i}
              onClick={() => setSelectedProduct(p)}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.name}
                className="mx-auto mb-4 w-40 h-40 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 col-span-full">
            No products found for "{searchTerm}"
          </p>
        )}
      </div>

      {/* MODAL POPUP */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-white/20 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-white/90 rounded-2xl shadow-2xl p-8 text-center w-11/12 md:w-1/3 backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">
              Call About {selectedProduct.name}?
            </h3>
            <p className="text-gray-700 mb-6">
              Would you like to call us for more details about this product?
            </p>

            <div className="flex justify-center gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                📞 Call Now
              </a>
              <button
                onClick={() => setSelectedProduct(null)}
                className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
