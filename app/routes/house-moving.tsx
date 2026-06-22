import type { Route } from "./+types/house-moving";
import { FaFacebook } from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";
import { SiLine } from "react-icons/si";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import ImageGallery from "../components/ImageGallery";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "รับย้ายบ้าน | N&P คอนสตรัคชั่น" },
    { name: "description", content: "รับย้ายบ้าน เลื่อนบ้าน เคลื่อนย้ายบ้าน หมุนเปลี่ยนทิศทางบ้าน โดยทีมงานมืออาชีพ N&P คอนสตรัคชั่น ปลอดภัยด้วยมาตรฐานวิศวกรรม ปรึกษาฟรี 061-0864789" },
    { name: "keywords", content: "ย้ายบ้าน, เลื่อนบ้าน, เคลื่อนย้ายบ้าน, ย้ายบ้านทั้งหลัง, หมุนบ้าน, N&P คอนสตรัคชั่น" },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "รับย้ายบ้าน | N&P คอนสตรัคชั่น" },
    { property: "og:description", content: "รับย้ายบ้าน เลื่อนบ้าน เคลื่อนย้ายบ้าน โดยทีมงานมืออาชีพ N&P คอนสตรัคชั่น" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://nphomelifting.com/house-moving" },
    { property: "og:image", content: "https://nphomelifting.vercel.app/cover-image.png" },
    { property: "og:locale", content: "th_TH" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "รับย้ายบ้าน | N&P คอนสตรัคชั่น" },
    { name: "twitter:description", content: "รับย้ายบ้าน เลื่อนบ้าน เคลื่อนย้ายบ้าน โดยทีมงานมืออาชีพ N&P คอนสตรัคชั่น" },
    { name: "twitter:image", content: "https://nphomelifting.vercel.app/cover-image.png" },
    { tagName: "link", rel: "canonical", href: "https://nphomelifting.com/house-moving" },
  ];
}

const totalImages = 13;
const totalVideos = 2;

export default function HouseMovingPage() {
  const images = Array.from({ length: totalImages }, (_, i) => `/images/ย้ายบ้าน/ย้ายบ้าน-${i + 1}.jpg`);
  const videos = Array.from({ length: totalVideos }, (_, i) => `/images/ย้ายบ้าน/ย้ายบ้าน-${i + 1}.mp4`);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: videos.length > 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <>
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold">รับย้ายบ้าน</h1>
          <p className="text-blue-200 mt-4 max-w-2xl mx-auto text-xl font-thin">
            รับย้ายบ้าน เลื่อนบ้าน เคลื่อนย้ายบ้าน โดยทีมงานมืออาชีพ <br/>
            ปลอดภัยด้วยมาตรฐานวิศวกรรม พร้อมรับประกัน
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
        <img src="/cover-image.png" alt="" className="w-full rounded-xl shadow-lg" />
      </div>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        {videos.length > 0 && (
          <>
            <h2 className="text-3xl text-center text-gray-800 mb-8">วิดีโอผลงาน</h2>
            <div className="mb-12 relative">
              <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                <div className="flex">
                  {videos.map((src, i) => (
                    <div key={i} className="min-w-0 flex-[0_0_100%]">
                      <video src={src} controls className="w-full aspect-video object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              {videos.length > 1 && (
                <>
                  <button onClick={() => emblaApi?.goToPrev()} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition z-10">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button onClick={() => emblaApi?.goToNext()} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition z-10">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                  <div className="flex justify-center gap-2 mt-4">
                    {videos.map((_, i) => (
                      <button key={i} onClick={() => emblaApi?.goTo(i)} className={`w-2.5 h-2.5 rounded-full transition ${i === selectedIndex ? "bg-(--primary-color)" : "bg-gray-300"}`} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </>
        )}
        <h2 className="text-3xl text-center text-gray-800 mb-8">ภาพผลงาน</h2>
        <ImageGallery images={images} alt="รับย้ายบ้าน" />
      </section>

      {/* Detail */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center text-gray-800 mb-3">รายละเอียดบริการรับย้ายบ้าน</h2>
          <p className="text-center text-gray-500 mb-10">โดย N&P คอนสตรัคชั่น</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "ย้ายบ้านไม้", desc: "ย้ายบ้านไม้ทั้งหลัง พร้อมดีดยกระดับ เปลี่ยนเสา และเทคานรองรับ ปลอดภัยด้วยระบบไฮดรอลิก" },
              { title: "เลื่อนบ้าน", desc: "เลื่อนบ้านไปยังตำแหน่งใหม่ด้วยระบบแม่แรงไฮดรอลิก精准 ควบคุมทิศทางได้แม่นยำ" },
              { title: "หมุนเปลี่ยนทิศทางบ้าน", desc: "หมุนบ้านเปลี่ยนทิศทางตามความต้องการ พร้อมปรับระดับและวางฐานรากใหม่" },
              { title: "เคลื่อนย้ายบ้านทางไกล", desc: "ย้ายบ้านในระยะทางไกล พร้อมทีมงานชำนาญการ เครื่องมือครบครัน วางแผนหน้างานอย่างละเอียด" },
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
          <p className="text-center text-gray-500 mb-10">เกี่ยวกับบริการรับย้ายบ้าน</p>
          <div className="space-y-2">
            {[
              { q: "ย้ายบ้านทั้งหลังใช้เวลานานเท่าไหร่ ?", a: "ขึ้นอยู่กับขนาดบ้าน ระยะทาง และสภาพหน้างาน โดยทั่วไปใช้เวลา 3-7 วัน ตั้งแต่เตรียมหน้างาน ย้ายบ้าน ไปจนถึงวางฐานรากและเก็บงาน" },
              { q: "ย้ายบ้านแล้วโครงสร้างบ้านเสียหายไหม ?", a: "ทีม N&P มีประสบการณ์ย้ายบ้านมากว่า 10 ปี ใช้ระบบไฮดรอลิกและเครื่องมือที่ได้มาตรฐาน มีการทำหนังสือรับประกันความเสียหายก่อนเริ่มงานทุกครั้ง เพื่อให้คุณลูกค้ามั่นใจ" },
              { q: "ย้ายบ้านราคาเท่าไหร่ ?", a: "ราคาขึ้นอยู่กับขนาดบ้าน ระยะทาง สภาพหน้างาน และความซับซ้อน สามารถติดต่อเพื่อรับใบเสนอราคาฟรีได้ที่เบอร์ 061-0864789" },
              { q: "ย้ายบ้านต้องขออนุญาตไหม ?", a: "การย้ายบ้านบางกรณีจำเป็นต้องขออนุญาตจากหน่วยงานท้องถิ่น ทีมงาน N&P จะให้คำแนะนำและช่วยดำเนินการเอกสารที่เกี่ยวข้องให้คุณลูกค้า" },
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
        <p className="text-center text-4xl text-gray-800 mb-3">สนใจบริการรับย้ายบ้าน</p>
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
