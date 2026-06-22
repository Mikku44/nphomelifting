import type { Route } from "./+types/pile";
import { FaFacebook } from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";
import { SiLine } from "react-icons/si";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import ImageGallery from "../components/ImageGallery";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "บริการตอกเสาเข็ม | N&P คอนสตรัคชั่น" },
    { name: "description", content: "บริการตอกเสาเข็มไอบีม เสาเข็มซีเมนต์ เปลี่ยนเสาเข็มเดิม เสริมเสาเข็ม โดยทีมช่างมืออาชีพ N&P คอนสตรัคชั่น ปรึกษาฟรี 061-0864789" },
    { name: "keywords", content: "ตอกเสาเข็ม, เสาเข็มไอบีม, เสาเข็มซีเมนต์, ลงเสาเข็ม, เปลี่ยนเสาเข็ม, N&P คอนสตรัคชั่น" },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "บริการตอกเสาเข็ม | N&P คอนสตรัคชั่น" },
    { property: "og:description", content: "บริการตอกเสาเข็มไอบีม เสาเข็มซีเมนต์ เปลี่ยนเสาเข็ม โดยทีมช่างมืออาชีพ N&P คอนสตรัคชั่น" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://nphomelifting.com/pile" },
    { property: "og:image", content: "https://nphomelifting.vercel.app/cover-image.png" },
    { property: "og:locale", content: "th_TH" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "บริการตอกเสาเข็ม | N&P คอนสตรัคชั่น" },
    { name: "twitter:description", content: "บริการตอกเสาเข็มไอบีม เสาเข็มซีเมนต์ เปลี่ยนเสาเข็ม โดยทีมช่างมืออาชีพ N&P คอนสตรัคชั่น" },
    { name: "twitter:image", content: "https://nphomelifting.vercel.app/cover-image.png" },
    { tagName: "link", rel: "canonical", href: "https://nphomelifting.com/pile" },
  ];
}

const totalImages = 54;
const totalVideos = 5;

export default function PilePage() {
  const images = Array.from({ length: totalImages }, (_, i) => `/images/เสาเข็ม/เสาเข็ม-${i + 1}.jpg`);
  const videos = Array.from({ length: totalVideos }, (_, i) => `/images/เสาเข็ม/เสาเข็ม-${i + 1}.mp4`);
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
          <h1 className="text-3xl md:text-5xl font-bold">เสาเข็ม</h1>
          <p className="text-blue-200 mt-4 max-w-2xl mx-auto text-xl font-thin">
            บริการตอกเสาเข็ม ลงเสาเข็ม โดยทีมช่างมืออาชีพ ได้มาตรฐาน ปลอดภัย มั่นคง
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
        <ImageGallery images={images} alt="เสาเข็ม" />
      </section>

      {/* Detail */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center text-gray-800 mb-3">รายละเอียดบริการตอกเสาเข็ม</h2>
          <p className="text-center text-gray-500 mb-10">โดย N&P คอนสตรัคชั่น</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "ตอกเสาเข็มไอบีม", desc: "เสาเข็มไอบีม มาตรฐานอุตสาหกรรม เหมาะกับงานบ้านทรุด บ้านเอียง ทนทาน รับน้ำหนักได้ดี" },
              { title: "ตอกเสาเข็มซีเมนต์", desc: "เสาเข็มซีเมนต์อัดแรง คุณภาพสูง ได้มาตรฐาน มั่นคงแข็งแรง รับน้ำหนักอาคาร" },
              { title: "เปลี่ยนเสาเข็มเดิม", desc: "เปลี่ยนเสาเข็มเก่าที่หมดอายุ เสื่อมสภาพ ด้วยเสาเข็มใหม่ ได้มาตรฐาน พร้อมรับประกัน" },
              { title: "เสริมเสาเข็มเพิ่ม", desc: "เสริมเสาเข็มเพิ่มเติม เพื่อเพิ่มความแข็งแรงให้โครงสร้างบ้าน ป้องกันการทรุดตัวในอนาคต" },
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
          <p className="text-center text-gray-500 mb-10">เกี่ยวกับบริการตอกเสาเข็ม</p>
          <div className="space-y-2">
            {[
              { q: "เสาเข็มไอบีมกับเสาเข็มซีเมนต์ต่างกันอย่างไร ?", a: "เสาเข็มไอบีมเป็นเหล็กรูปพรรณ มีน้ำหนักเบา ตอกง่าย เหมาะกับพื้นที่จำกัด ส่วนเสาเข็มซีเมนต์เป็นคอนกรีตอัดแรง รับน้ำหนักได้มากกว่า เหมาะกับงานโครงสร้างขนาดใหญ่ ทีมงาน N&P จะแนะนำชนิดเสาเข็มที่เหมาะสมกับหน้างานของคุณ" },
              { q: "ใช้เวลาตอกเสาเข็มกี่วัน ?", a: "โดยทั่วไปใช้เวลา 1-3 วัน ขึ้นอยู่กับจำนวนเสาเข็ม สภาพหน้างาน และชนิดของเสาเข็ม ทีมงานจะประเมินเวลาให้คุณลูกค้าก่อนเริ่มงาน" },
              { q: "รับประกันงานตอกเสาเข็มหรือไม่ ?", a: "ทาง N&P ให้การรับประกันทุกงาน ตอกเสาเข็มได้มาตรฐาน พร้อมตรวจสอบหน้างานก่อนและหลังการตอกเสาเข็มทุกครั้ง" },
              { q: "เสาเข็มราคาเท่าไหร่ ?", a: "ราคาขึ้นอยู่กับชนิดของเสาเข็ม จำนวน และสภาพหน้างาน คุณลูกค้าสามารถติดต่อเพื่อขอรับใบเสนอราคาฟรีได้ที่เบอร์ 061-0864789 หรือ Line Official ของทางร้าน" },
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
        <p className="text-center text-4xl text-gray-800 mb-3">สนใจบริการตอกเสาเข็ม</p>
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
