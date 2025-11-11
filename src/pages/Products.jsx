export default function Products() {
  const products = [
    { name: "Luminous Inverter Battery", desc: "Long backup, heavy duty performance", img: "https://via.placeholder.com/200" },
    { name: "Amaron Quanta", desc: "Maintenance-free inverter battery", img: "https://via.placeholder.com/200" },
    { name: "Exide Tubular Battery", desc: "High-efficiency, long life", img: "https://via.placeholder.com/200" },
  ];

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-100 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-10 text-blue-900">Our Products</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {products.map((p, i) => (
          <div key={i} className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <img src={p.img} alt={p.name} className="mx-auto mb-4 w-40 h-40 object-contain" />
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
