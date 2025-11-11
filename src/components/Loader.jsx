import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-800 text-white z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="border-4 border-t-yellow-400 border-blue-700 rounded-full w-16 h-16"
      />
    </div>
  );
}
