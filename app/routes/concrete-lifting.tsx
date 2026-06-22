import type { Route } from "./+types/concrete-lifting";
import { FaFacebook } from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";
import { SiLine } from "react-icons/si";
import ImageGallery from "../components/ImageGallery";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "บริการดีดบ้านปูน | N&P คอนสตรัคชั่น" },
    { name: "description", content: "บริการดีดบ้านปูน ยกบ้านปูน ยกระดับบ้านปูน เปลี่ยนเสาบ้านปูน ซ่อมรอยร้าว โดยทีมช่างมืออาชีพ N&P คอนสตรัคชั่น ปรึกษาฟรี 061-0864789" },
    { name: "keywords", content: "ดีดบ้านปูน, ยกบ้านปูน, ยกระดับบ้านปูน, เปลี่ยนเสาบ้านปูน, ซ่อมรอยร้าวบ้าน, N&P คอนสตรัคชั่น" },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "บริการดีดบ้านปูน | N&P คอนสตรัคชั่น" },
    { property: "og:description", content: "บริการดีดบ้านปูน ยกบ้านปูน ยกระดับบ้านปูน โดยทีมช่างมืออาชีพ N&P คอนสตรัคชั่น" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://nphomelifting.com/concrete-lifting" },
    { property: "og:image", content: "https://nphomelifting.com/cover-image.png" },
    { property: "og:locale", content: "th_TH" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "บริการดีดบ้านปูน | N&P คอนสตรัคชั่น" },
    { name: "twitter:description", content: "บริการดีดบ้านปูน ยกบ้านปูน ยกระดับบ้านปูน โดยทีมช่างมืออาชีพ N&P คอนสตรัคชั่น" },
    { name: "twitter:image", content: "https://nphomelifting.com/cover-image.png" },
    { tagName: "link", rel: "canonical", href: "https://nphomelifting.com/concrete-lifting" },
  ];
}

const totalImages = 19;

export default function ConcreteLiftingPage() {
  const images = Array.from({ length: totalImages }, (_, i) => `/images/ดีดบ้านปูน/ดีดบ้านปูน-${i + 1}.jpg`);

  return (
    <>
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold">ดีดบ้านปูน</h1>
          <p className="text-blue-200 mt-4 max-w-2xl mx-auto text-xl font-thin">
            บริการดีดบ้านปูน ยกบ้านปูน ยกระดับบ้านปูน โดยทีมช่างมืออาชีพ
            พร้อมรับประกันผลงานทุกขั้นตอน
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
        <img src="/cover-image.png" alt="" className="w-full rounded-xl shadow-lg" />
      </div>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl text-center text-gray-800 mb-8">ภาพผลงาน</h2>
        <ImageGallery images={images} alt="ดีดบ้านปูน" />
      </section>

      {/* Detail */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center text-gray-800 mb-3">รายละเอียดบริการดีดบ้านปูน</h2>
          <p className="text-center text-gray-500 mb-10">โดย N&P คอนสตรัคชั่น</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "ดีดบ้านปูนทรุด", desc: "แก้ปัญหาบ้านปูนทรุดตัว บ้านเอียง ด้วยระบบไฮดรอลิก ปลอดภัย ไม่กระทบโครงสร้างเดิม" },
              { title: "ยกระดับบ้านปูน", desc: "ยกระดับบ้านปูนให้ได้ระดับตามต้องการ ปรับโครงสร้างให้มั่นคงแข็งแรง พร้อมรับประกันผลงาน" },
              { title: "เปลี่ยนเสาบ้านปูน", desc: "เปลี่ยนเสาเดิมที่ชำรุด ทรุดโทรม ด้วยเสาใหม่ได้มาตรฐาน พร้อมเทคานรองรับน้ำหนัก" },
              { title: "ซ่อมแซมรอยร้าว", desc: "ซ่อมแซมรอยร้าวที่เกิดจากการทรุดตัวของบ้านปูน ปิดรอยร้าวด้วยวัสดุคุณภาพสูง" },
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
          <p className="text-center text-gray-500 mb-10">เกี่ยวกับบริการดีดบ้านปูน</p>
          <div className="space-y-2">
            {[
              { q: "ดีดบ้านปูนใช้เวลานานเท่าไหร่ ?", a: "โดยทั่วไปใช้เวลา 2-5 วัน ขึ้นอยู่กับขนาดบ้าน สภาพโครงสร้าง และความซับซ้อนของหน้างาน ทีมงานจะประเมินเวลาที่แน่นอนก่อนเริ่มดำเนินการ" },
              { q: "ดีดบ้านปูนแล้วบ้านจะแตกร้าวไหม ?", a: "ทีมงาน N&P มีความเชี่ยวชาญและประสบการณ์สูง เราวางระบบไฮดรอลิกอย่างถูกต้อง มีการตรวจสอบหน้างานอย่างละเอียด และทำหนังสือรับประกันความเสียหายก่อนเริ่มงานทุกครั้ง" },
              { q: "ต้องย้ายออกระหว่างดีดบ้านหรือไม่ ?", a: "ขึ้นอยู่กับลักษณะหน้างาน หากมีการดีดบ้านปูนขนาดใหญ่ ทีมงานแนะนำให้ย้ายเฟอร์นิเจอร์ออก แต่ในบางกรณีสามารถอยู่อาศัยได้ ทีมงานจะแจ้งรายละเอียดให้ทราบก่อนเริ่มงาน" },
              { q: "คิดราคาดีดบ้านปูนอย่างไร ?", a: "ราคาขึ้นอยู่กับขนาดบ้าน สภาพโครงสร้าง จำนวนจุดดีด และระยะทาง คุณลูกค้าสามารถติดต่อเพื่อรับใบเสนอราคาฟรีได้ที่เบอร์ 061-0864789" },
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
        <p className="text-center text-4xl text-gray-800 mb-3">สนใจบริการดีดบ้านปูน</p>
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
