import type { Route } from "./+types/wood-lifting";
import { FaFacebook } from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";
import { SiLine } from "react-icons/si";
import ImageGallery from "../components/ImageGallery";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "บริการดีดบ้านไม้ | N&P คอนสตรัคชั่น" },
    { name: "description", content: "บริการดีดบ้านไม้ ยกบ้านไม้ ยกระดับบ้านไม้ เปลี่ยนเสาบ้านไม้ ซ่อมแซมพื้นไม้ โดยทีมช่างมากประสบการณ์ N&P คอนสตรัคชั่น ปรึกษาฟรี 061-0864789" },
    { name: "keywords", content: "ดีดบ้านไม้, ยกบ้านไม้, ยกระดับบ้านไม้, เปลี่ยนเสาบ้านไม้, ซ่อมพื้นไม้, N&P คอนสตรัคชั่น" },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "บริการดีดบ้านไม้ | N&P คอนสตรัคชั่น" },
    { property: "og:description", content: "บริการดีดบ้านไม้ ยกบ้านไม้ ยกระดับบ้านไม้ โดยทีมช่างมากประสบการณ์ N&P คอนสตรัคชั่น" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://nphomelifting.com/wood-lifting" },
    { property: "og:image", content: "https://nphomelifting.com/cover-image.png" },
    { property: "og:locale", content: "th_TH" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "บริการดีดบ้านไม้ | N&P คอนสตรัคชั่น" },
    { name: "twitter:description", content: "บริการดีดบ้านไม้ ยกบ้านไม้ ยกระดับบ้านไม้ โดยทีมช่างมากประสบการณ์ N&P คอนสตรัคชั่น" },
    { name: "twitter:image", content: "https://nphomelifting.com/cover-image.png" },
    { tagName: "link", rel: "canonical", href: "https://nphomelifting.com/wood-lifting" },
  ];
}

const totalImages = 37;

export default function WoodLiftingPage() {
  const images = Array.from({ length: totalImages }, (_, i) => `/images/ดีดบ้านไม้/ดีดบ้านไม้-${i + 1}.jpg`);

  return (
    <>
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold">ดีดบ้านไม้</h1>
          <p className="text-blue-200 mt-4 max-w-2xl mx-auto text-xl font-thin">
            บริการดีดบ้านไม้ ยกบ้านไม้ ยกระดับบ้านไม้ โดยทีมช่างมากประสบการณ์
            ด้วยมาตรฐานงานช่างมืออาชีพ
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
        <img src="/cover-image.png" alt="" className="w-full rounded-xl shadow-lg" />
      </div>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl text-center text-gray-800 mb-8">ภาพผลงาน</h2>
        <ImageGallery images={images} alt="ดีดบ้านไม้" />
      </section>

      {/* Detail */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center text-gray-800 mb-3">รายละเอียดบริการดีดบ้านไม้</h2>
          <p className="text-center text-gray-500 mb-10">โดย N&P คอนสตรัคชั่น</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "ดีดบ้านไม้ทรุด", desc: "แก้ปัญหาบ้านไม้ทรุดตัว บ้านไม้เอียง ด้วยระบบไฮดรอลิก ปลอดภัย ไม่กระทบโครงสร้างไม้เดิม" },
              { title: "ยกระดับบ้านไม้", desc: "ยกระดับบ้านไม้ให้ได้ระดับ ปรับเปลี่ยนเสาไม้เดิมที่ผุพัง ด้วยเสาใหม่ที่แข็งแรง ทนทาน" },
              { title: "เปลี่ยนเสาบ้านไม้", desc: "เปลี่ยนเสาไม้เดิมที่ชำรุด ทรุดโทรม แมลงกัดกิน ด้วยเสาไม้ใหม่ หรือเสาปูนตามความต้องการ" },
              { title: "ซ่อมแซมพื้นไม้", desc: "ซ่อมแซมพื้นไม้ที่ทรุดตัว แตกหักเสียหาย ปรับระดับพื้นให้เรียบเสมอกัน" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-xl text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center text-gray-800 mb-3">คำถามที่พบบ่อย</h2>
          <p className="text-center text-gray-500 mb-10">เกี่ยวกับบริการดีดบ้านไม้</p>
          <div className="space-y-2">
            {[
              { q: "ดีดบ้านไม้ต่างจากดีดบ้านปูนอย่างไร ?", a: "บ้านไม้มีโครงสร้างที่เบากว่าบ้านปูน การดีดบ้านไม้ต้องใช้ความละเอียดและความชำนาญเฉพาะทาง เพื่อไม่ให้โครงสร้างไม้เดิมเสียหาย ทีม N&P มีประสบการณ์ทั้งบ้านไม้และบ้านปูน" },
              { q: "บ้านไม้ทรุดสามารถดีดได้ไหม ?", a: "ได้ครับ บ้านไม้ทรุดตัวสามารถดีดยกระดับได้ โดยทีมงานจะประเมินสภาพโครงสร้างก่อนดำเนินการ เปลี่ยนเสาที่ผุพัง และยกระดับบ้านให้ได้ระดับดังเดิม" },
              { q: "เปลี่ยนเสาบ้านไม้เป็นเสาปูนได้ไหม ?", a: "ได้ครับ ทาง N&P สามารถเปลี่ยนเสาไม้เป็นเสาปูนได้ เพื่อความแข็งแรงทนทาน และป้องกันปลวก แมลงกัดกินเสาไม้" },
              { q: "ดีดบ้านไม้ราคาเท่าไหร่ ?", a: "ราคาขึ้นอยู่กับขนาดบ้าน สภาพไม้ จำนวนเสาที่ต้องเปลี่ยน และระยะทาง คุณลูกค้าสามารถติดต่อเพื่อรับใบเสนอราคาฟรีได้ที่เบอร์ 061-0864789" },
            ].map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl">
                <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-gray-800 list-none">
                  <span>{faq.q}</span>
                  <svg className="w-4 h-4 shrink-0 group-open:rotate-45 transition" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 text-gray-600 text-sm whitespace-pre-line">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-gray-50">
        <p className="text-center text-4xl text-gray-800 mb-3">สนใจบริการดีดบ้านไม้</p>
        <p className="text-center text-gray-500 mb-10">ปรึกษาฟรี ไม่มีค่าใช้จ่าย</p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6">
          <a href="https://www.facebook.com/nphomeco.th" className="flex items-center gap-4 border border-gray-200 hover:border-blue-400 rounded-xl p-5 transition bg-white">
            <FaFacebook className="w-7 h-7 text-blue-600 shrink-0" />
            <div>
              <p className="text-xs text-gray-400">Facebook</p>
              <p className="font-medium text-gray-800">N&P คอนสตรัคชั่น</p>
            </div>
          </a>
          <a href="tel:0610864789" className="flex items-center gap-4 border border-gray-200 hover:border-green-400 rounded-xl p-5 transition bg-white">
            <FiPhone className="w-7 h-7 text-green-600 shrink-0" />
            <div>
              <p className="text-xs text-gray-400">โทร</p>
              <p className="font-medium text-gray-800">061-0864789</p>
            </div>
          </a>
          <a href="/images/Line-Nphome.jpg" className="flex items-center gap-4 border border-gray-200 hover:border-green-500 rounded-xl p-5 transition bg-white">
            <SiLine className="w-7 h-7 text-green-600 shrink-0" />
            <div>
              <p className="text-xs text-gray-400">Line</p>
              <p className="font-medium text-gray-800">ประเมินราคาฟรี</p>
            </div>
          </a>
          <a href="mailto:niphaphon66cac@gmail.com" className="flex items-center gap-4 border border-gray-200 hover:border-red-400 rounded-xl p-5 transition bg-white">
            <FiMail className="w-7 h-7 text-red-500 shrink-0" />
            <div>
              <p className="text-xs text-gray-400">อีเมล</p>
              <p className="font-medium text-gray-800">niphaphon66cac</p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
