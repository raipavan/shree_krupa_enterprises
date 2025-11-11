export default function Contact() {
  return (
    <div className="py-16 px-6 md:px-20 bg-gray-100 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-blue-900">Contact Us</h2>
      <form className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-8 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" required />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" required />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg h-32" required></textarea>
        <button type="submit" className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>

      <div className="mt-10 text-gray-700">
        <p><strong>Address:</strong> 123 Power Street, Kolhapur, Maharashtra</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Email:</strong> info@shreekrupabattery.com</p>
      </div>
    </div>
  );
}
