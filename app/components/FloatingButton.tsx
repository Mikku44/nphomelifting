import { FiPhone } from "react-icons/fi";
import { SiLine } from "react-icons/si";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      <a
        href="https://line.me/ti/p/th1iBCMw2U"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 shadow-lg flex items-center justify-center text-white transition-transform hover:scale-110"
        aria-label="Line"
      >
        <SiLine className="w-7 h-7" />
      </a>
      <a
        href="tel:0610864789"
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 shadow-lg flex items-center justify-center text-white transition-transform hover:scale-110"
        aria-label="โทร"
      >
        <FiPhone className="w-7 h-7" />
      </a>
    </div>
  );
}
