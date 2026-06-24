import { Link } from "react-router";
import { SiLine } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

type Props = {
  variant: "home" | "service";
};

export default function Footer({ variant }: Props) {
  if (variant === "home") {
    return (
      <footer className=" text-gray-400">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/images/logo-footer.webp"
              alt="N&P Logo"
              className="h-52 w-auto mx-auto md:mx-0"
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-(--primary-color) font-semibold md:text-4xl text-3xl">รับดีดบ้าน ยกบ้าน ย้ายบ้าน <br/> เลื่อนบ้าน แก้ใขปัญหาบ้านทรุด</p>
            <p className="text-gray-400 text-sm mt-1">แก้ปัญหาบ้านทรุด เลื่อนบ้าน ช่างซ่อมบ้านทรุด</p>
            <div className="flex justify-center md:justify-end gap-3 mt-4">
              <a href="https://www.facebook.com/nphomeco.th" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-700 flex items-center justify-center text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>
              <a href="tel:0610864789" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-700 flex items-center justify-center text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                </svg>
              </a>
              <a href="http://m.me/nphomeco.th" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-500 flex items-center justify-center text-white transition">
               <FaFacebookMessenger size={20} /> 
              </a>
              <a href="https://line.me/ti/p/th1iBCMw2U" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center text-white transition">
                <SiLine className="w-5 h-5" />
              </a>
              <a href="mailto:niphaphon66cac@gmail.com" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-500 flex items-center justify-center text-white transition">
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className=" py-4 text-center text-xs">
          Copyright © 2026 รับดีดบ้าน ยกบ้าน ย้ายบ้าน เลื่อนบ้าน แก้ใขปัญหาบ้านทรุด | โดย N&P คอนสตรัคชั่น 
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
     
      <p className="mt-4 text-xs">Copyright © 2026 N&P คอนสตรัคชั่น</p>
    </footer>
  );
}
