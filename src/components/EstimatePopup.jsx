import { useState } from "react";

export default function EstimatePopup({ onClose }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [desc, setDesc] = useState("");

  const sendToWhatsApp = () => {
    if (!mobile || !subject || !desc) {
      alert("Please fill all fields!");
      return;
    }

    const message = `*New Estimate Request*\n\nName: ${name}\nMobile: ${mobile}\nSubject: ${subject}\nDescription: ${desc}`;

    const whatsappNumber = "918147976125"; // update with your number

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="
      fixed inset-0 bg-black/40 backdrop-blur-sm 
      flex justify-center items-center z-50 
      animate-fadeIn
    ">
      <div className="
        bg-white/90 backdrop-blur-xl 
        rounded-2xl shadow-2xl p-6 w-full max-w-md 
        animate-scaleUp relative
      ">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 text-xl hover:text-red-500 transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center tracking-wide">
          Get Free Estimate
        </h2>

        {/* Inputs */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 outline-none transition"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Mobile Number"
          className="w-full border border-gray-300 p-3 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 outline-none transition"
          onChange={(e) => setMobile(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full border border-gray-300 p-3 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 outline-none transition"
          onChange={(e) => setSubject(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="w-full border border-gray-300 p-3 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 outline-none transition h-24"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>

        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            Close
          </button>

          <button
            onClick={sendToWhatsApp}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-md hover:shadow-lg"
          >
            Send to WhatsApp
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { transform: scale(0.7) translateY(30px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }

        .animate-scaleUp {
          animation: scaleUp 0.35s ease-out;
        }
      `}</style>
    </div>
  );
}
