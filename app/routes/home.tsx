import type { Route } from "./+types/home";
import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FaFacebook, FaHouseCrack, FaClock, FaCoins, FaCircleCheck, FaTruckMoving, FaWrench } from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";
import { SiLine } from "react-icons/si";
import { BiChevronRight } from "react-icons/bi";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "รีบดีดบ้าน ยกบ้าน ย้ายบ้าน เลื่อนบ้าน กรุงเทพ | โดย N&P คอนสตรัคชั่น" },
    { name: "description", content: "แก้ปัญหาบ้านทรุด บ้านเอียง รอยร้าว รับดีดบ้าน ยกบ้าน ย้ายบ้าน เลื่อนบ้าน กรุงเทพและทั่วประเทศ โดย N&P คอนสตรัคชั่น ช่างมากประสบการณ์ 10 ปี ปรึกษาฟรี 061-0864789" },
    { name: "keywords", content: "ดีดบ้าน, ยกบ้าน, ย้ายบ้าน, เลื่อนบ้าน, บ้านทรุด, บ้านเอียง, ซ่อมบ้าน, ตอกเสาเข็ม, N&P คอนสตรัคชั่น, กรุงเทพ" },
    { name: "author", content: "N&P คอนสตรัคชั่น" },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "รีบดีดบ้าน ยกบ้าน ย้ายบ้าน เลื่อนบ้าน กรุงเทพ | โดย N&P คอนสตรัคชั่น" },
    { property: "og:description", content: "แก้ปัญหาบ้านทรุด บ้านเอียง รอยร้าว รับดีดบ้าน ยกบ้าน ย้ายบ้าน เลื่อนบ้าน โดย N&P คอนสตรัคชั่น" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://nphomelifting.com" },
    { property: "og:image", content: "https://nphomelifting.vercel.app/cover-image.png" },
    { property: "og:locale", content: "th_TH" },
    { property: "og:site_name", content: "N&P คอนสตรัคชั่น" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "รีบดีดบ้าน ยกบ้าน ย้ายบ้าน เลื่อนบ้าน กรุงเทพ | โดย N&P คอนสตรัคชั่น" },
    { name: "twitter:description", content: "แก้ปัญหาบ้านทรุด บ้านเอียง รอยร้าว รับดีดบ้าน ยกบ้าน ย้ายบ้าน เลื่อนบ้าน โดย N&P คอนสตรัคชั่น" },
    { name: "twitter:image", content: "https://nphomelifting.vercel.app/cover-image.png" },
    { tagName: "link", rel: "canonical", href: "https://nphomelifting.com" },
  ];
}

const reviewImages = Array.from({ length: 16 }, (_, i) => ({
  src: `/images/ดีดบ้าน-เลื่อนบ้าน-รีวิว-${i + 1}.webp`,
  alt: "ดีดบ้าน เลื่อนบ้าน รีวิว",
}));

const slides = [

  {
    title: "รับดีดบ้าน ยกบ้าน เลื่อนบ้าน",
    subtitle: "แก้บ้านทรุด โดยช่างมืออาชีพ",
    desc: "N&P คอนสตรัคชั่น ผลงานมากกว่า 1,000 หน้างาน ตรวจเช็คก่อนส่งมอบโดยเจ้าของ",
    bg: "/images/FEAIMG.webp",
  },
  {
    title: "แก้ใขปัญหาบ้านทรุด",
    subtitle: "ตอกเสาเข็ม ลงเสาเข็ม โดยช่างมืออาชีพ",
    desc: "ได้มาตรฐาน ปลอดภัย มั่นคง ทุกหน้างาน",
    bg: "/images/เสาเข็ม/เสาเข็ม-7.jpg",
  },
  {
    title: "ดีดบ้านปูน",
    subtitle: "ยกระดับบ้านปูน ให้สูงขึ้น ปลอดภัย",
    desc: "ทีมช่างมากประสบการณ์ พร้อมรับประกันผลงาน",
    bg: "/images/ดีดบ้านปูน/ดีดบ้านปูน-1.jpg",
  },
  {
    title: "รับย้ายบ้าน",
    subtitle: "เคลื่อนย้ายบ้าน เลื่อนบ้าน ปลอดภัย",
    desc: "มาตรฐานวิศวกรรม พร้อมรับประกัน",
    bg: "/images/ย้ายบ้าน/ย้ายบ้าน-1.jpg",
  },
];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    const t = setInterval(() => emblaApi.goToNext(), 5000);
    return () => { clearInterval(t); emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "N&P คอนสตรัคชั่น",
            description: "รับดีดบ้าน ยกบ้าน ย้ายบ้าน เลื่อนบ้าน แก้ปัญหาบ้านทรุด บ้านเอียง รอยร้าว",
            url: "https://nphomelifting.com",
            telephone: "061-0864789",
            email: "nphomelifting@gmail.com",
            address: { "@type": "PostalAddress", addressLocality: "กรุงเทพ", addressCountry: "TH" },
            areaServed: "ทั่วประเทศ",
            priceRange: "ตามหน้างาน",
            openingHours: "Mo-Su 07:00-18:00",
            image: "https://nphomelifting.com/images/%E0%B9%80%E0%B8%AA%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B9%87%E0%B8%A1/%E0%B9%80%E0%B8%AA%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B9%87%E0%B8%A1-1.jpg",
            sameAs: ["https://www.facebook.com/nphomeco.th"],
          }),
        }}
      />
      {/* <section className="relative text-white overflow-hidden">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((s, i) => (
              <div key={i} className="embla__slide min-w-0 flex-[0_0_100%] relative"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.10),rgba(0,0,100,0.20)), url('${s.bg}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="max-w-6xl mx-auto px-20 absolute bottom-10 z-10">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {s.title}
                  </h1>
                  <h2 className="text-xl md:text-3xl mt-3">
                    {s.subtitle}
                  </h2>
                  <p className="text-blue-100 mt-4 text-sm md:text-base max-w-xl">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button key={i} onClick={() => emblaApi?.goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === selectedIndex ? "bg-(--primary-color) w-6" : "bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>

        
      </section> */}

      <section className="min-h-125 w-full bg-gray-50">
        <div className="w-full h-125 bg-white overflow-hidden rounded-b-[80px]">
          <img src="/images/FEAIMG.webp" 
          alt="cover image" 
          className="w-full h-full object-cover" />
        </div>
      </section>

      {/* จุดเด่นของเรา */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-4xl text-gray-800 mb-2">ทำไมต้องเลือก</p>
          <p className="text-center text-5xl w-fit mx-auto bg-(--primary-color) px-2 text-white mb-10">N&P คอนสตรัคชั่น</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "ไม่มีการเบิกค่าจ้างล่วงหน้า", desc: "เราทำงานแบบไม่มีการเบิกค่าจ้างล่วงหน้า ทำงานเสร็จ ตรวจความเรียบร้อยแล้วค่อยจ่าย" },
              { title: "เสาเข็มมาตรฐาน มอก.", desc: "เราใช้เสาเข็มจากโรงงานที่มีมาตรฐาน มอก. และใบเซอร์ รับรองมาตรฐานทุกขั้นตอน" },
              { title: "รับประกันผลงานนาน 3 ปี", desc: "เรารับประกันผลงานของเรานานสามปี มั่นใจในคุณภาพงานทุกหน้างาน" },
              { title: "รับงานเอง ไม่ผ่านคนกลาง", desc: "บริษัทของเรารับงานเองและทำเองไม่ผ่านคนกลาง ควบคุมคุณภาพทุกขั้นตอน" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <span className="text-2xl shrink-0 text-(--primary-color)">✓</span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Category Cards */}
      <section className="py-16 mx-auto relative">
        <div className="min-h-[300px] flex flex-col justify-center items-center relative">
          <p className="text-center text-5xl text-gray-800">รายละเอียดบริการ</p>
          <p className="text-center text-4xl text-gray-800 mb-10 mt-2">จาก <span className="bg-(--primary-color) px-2 text-white">N&P คอนสตรัคชั่น</span></p>
          <img src="/images/engineer.webp" alt="" className="
             md:absolute bottom-0 md:left-[16%] h-48 md:h-64
              lg:h-80 w-auto object-contain pointer-events-none z-10" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {[
            { to: "/pile", img: "เสาเข็ม/เสาเข็ม-1.jpg", label: "แก้ใขปัญหาบ้านทรุด", tag: "งานฐานราก" },
            { to: "/concrete-lifting", img: "ดีดบ้านปูน/ดีดบ้านปูน-1.jpg", label: "ดีดบ้านปูน", tag: "ยกบ้านปูน" },
            { to: "/wood-lifting", img: "ดีดบ้านไม้/ดีดบ้านไม้-1.jpg", label: "ดีดบ้านไม้", tag: "ยกบ้านไม้" },
            { to: "/house-moving", img: "ย้ายบ้าน/ย้ายบ้าน-1.jpg", label: "รับย้ายบ้าน", tag: "เคลื่อนย้าย" },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="group relative overflow-hidden shadow-lg cursor-pointer aspect-[3/4]"
            >
              <img
                src={`/images/${item.img}`}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase mb-1">
                  {item.tag}
                </span>
                <h2 className="text-xl font-extrabold text-white tracking-wide mb-4">
                  {item.label}
                </h2>
                <span className="w-full  flex gap-2 items-center justify-center
                 bg-[#F3E092] hover:bg-[#ebd374]
                  text-neutral-900 font-semibold text-[10px] 
                  tracking-[0.15em] uppercase py-2.5 px-6 rounded
                   transition-colors duration-200 text-center">
                  ดูบริการ <BiChevronRight
                    className="group-hover:translate-x-1 transition-transform duration-200"
                    size={28} />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <p className="text-center text-4xl text-gray-800 mb-3">ติดต่อเรา</p>
        <p className="text-center text-gray-500 mb-10">ปรึกษาฟรี ไม่มีค่าใช้จ่าย</p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6">
          <a
            href="https://www.facebook.com/nphomeco.th"
            className="flex items-center gap-4 border border-gray-200 hover:border-blue-400 rounded-xl p-5 transition bg-white"
          >
            <FaFacebook className="w-7 h-7 text-blue-600 shrink-0" />
            <div>
              <p className="text-xs text-gray-400">Facebook</p>
              <p className="font-medium text-gray-800">N&P คอนสตรัคชั่น</p>
            </div>
          </a>
          <a
            href="tel:0610864789"
            className="flex items-center gap-4 border border-gray-200 hover:border-green-400 rounded-xl p-5 transition bg-white"
          >
            <FiPhone className="w-7 h-7 text-green-600 shrink-0" />
            <div>
              <p className="text-xs text-gray-400">โทร</p>
              <p className="font-medium text-gray-800">061-0864789</p>
            </div>
          </a>
          <a
            href="/images/Line-Nphome.jpg"
            className="flex items-center gap-4 border border-gray-200 hover:border-green-500 rounded-xl p-5 transition bg-white"
          >
            <SiLine className="w-7 h-7 text-green-600 shrink-0" />
            <div>
              <p className="text-xs text-gray-400">Line</p>
              <p className="font-medium text-gray-800">ประเมินราคาฟรี</p>
            </div>
          </a>
          <a
            href="mailto:niphaphon66cac@gmail.com"
            className="flex items-center gap-4 border border-gray-200 hover:border-red-400 rounded-xl p-5 transition bg-white"
          >
            <FiMail className="w-7 h-7 text-red-500 shrink-0" />
            <div>
              <p className="text-xs text-gray-400">อีเมล</p>
              <p className="font-medium text-gray-800">niphaphon66cac</p>
            </div>
          </a>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <p className="text-center text-4xl  text-gray-800">รับบริการได้อย่างมั่นใจ</p>
        <p className="text-center text-3xl  text-gray-800 mb-10 mt-2">ที่ <span className="bg-(--primary-color) px-2 text-white">
          N&P คอนสตรัคชั่น</span></p>
        <div className="grid sm:grid-cols-2  gap-6">
          {[
            { icon: <FaHouseCrack />, title: "แก้ปัญหาบ้านทรุด", desc: "ทาง N&P เชี่ยวชาญการแก้ปัญหาบ้านทรุด บ้านเอียง รับดีดบ้าน ดีดบ้านราคาถูก ช่างดีดบ้าน" },
            { icon: <FaClock />, title: "แก้ปัญหาบ้านเอียง", desc: "บ้านเอียง ก็เป็นปัญหาที่ควรปรึกษาผู้เชี่ยวชาญมาแก้ไขอย่างเร่งด่วน เปลี่ยนเสาบ้าน ยกบ้านปูน" },
            { icon: <FaCircleCheck />, title: "บริการดีดบ้าน", desc: "บริการยกบ้าน บริการย้ายบ้าน ดีดบ้านไม้ ดีดบ้านปูน คือสิ่งที่ N&P ถูกยกเป็นบริษัทอันดับต้น ๆ ประเทศ" },
            { icon: <FaTruckMoving />, title: "บริการเลื่อนบ้าน", desc: "บริการเคลื่อนย้ายบ้าน เลื่อนบ้าน ย้ายบ้าน ไม่ใช่สิ่งที่ใครจะทำก็ได้ เพราะไม่สามารถผิดพลาดได้" },

          ].map((svc, i) => (
            <div key={i} className="flex flex-col gap-4 p-5 bg-gray-50 rounded-xl">
              <span className="text-2xl shrink-0 text-(--primary-color)">{svc.icon}</span>
              <div>
                <h3 className="font-medium text-2xl text-gray-900">{svc.title}</h3>
                <p className="text-gray-500 text-lg mt-1">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="Reviews" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className=" text-4xl text-center mb-2">ส่วนนึงจากลูกค้าที่ไว้ใจเรา</h2>
          <h2 className="text-3xl text-center mb-10 font-thin">ผ่านประสบการณ์ใช้บริการจริง</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {reviewImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="w-full rounded-xl shadow-sm object-cover"
                style={{ aspectRatio: "400/250" }}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl text-center text-gray-800 mb-2">ภาพตัวอย่างก่อนและหลังทำ</h2>
          <p className="text-center text-gray-500 mb-10">ผลงานจริงจาก N&P คอนสตรัคชั่น</p>
          <div className="grid  gap-6">
            {[
              { before: "/images/4-before.webp", after: "/images/4-after.webp" },
              { before: "/images/5-before.webp", after: "/images/5-after.webp" },
              { before: "/images/before-ช่างดีดบ้าน-5.webp", after: "/images/after-ช่างดีดบ้าน-5.webp" },
            ].map((pair, i) => (
              <div key={i} className={`bg-gray-50 rounded-sm overflow-hidden shadow-sm ${i == 0 ? 'md:col-span-2' : ''}`}>
                <div className="grid grid-cols-2">
                  <div>
                    <div className="bg-(--primary-color) text-white text-[10px] font-bold tracking-wider text-center py-1">ก่อน</div>
                    <img src={pair.before} alt="ก่อน" className="w-full aspect-auto object-cover" loading="lazy" />
                  </div>
                  <div>
                    <div className="bg-(--secondary-color) text-white text-[10px] font-bold tracking-wider text-center py-1">หลัง</div>
                    <img src={pair.after} alt="หลัง" className="w-full aspect-auto object-cover" loading="lazy" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Facebook + FAQ */}
      <section id="map" className="py-16 px-4 bg-white">
        <h2 className=" text-4xl text-center mb-2">ช่องทางการติดต่อ</h2>
        <h2 className="text-3xl text-center mb-10 font-thin">และคำถามที่พบบ่อย</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>

            {/* FAQ Accordion */}
            <div className="space-y-2">
              {[
                {
                  q: "N&P คอนสตรัคชั่น ให้บริการอะไรบ้าง ?",
                  a: "ให้บริการ แก้ปัญหาบ้านทรุด แก้ปัญหาบ้านเอียง แก้ปัญหารอยร้าวบ้าน ด้วยบริการยกบ้าน บริการเลื่อนบ้าน บริการเคลื่อนย้ายบ้าน บริการซ่อมบ้านทุกหน้างาน",
                },
                {
                  q: "ทีมงานมีประสบการณ์หรือไม่ ?",
                  a: "ทีมงานของเรามีวารันตีให้กับลูกค้า ด้วยประสบการณ์ที่มากกว่า 10 ปี และผลงานมากกว่า 1,000 หน้างาน ซึ่งสิ่งสำคัญที่สุดคือเรามุ่งเน้นให้ลูกค้าได้รับผลงานที่มีคุณภาพ ในราคาที่คุ้มค่าคุ้มราคา",
                },
                {
                  q: "ให้บริการในพื้นที่ใดบ้าง ?",
                  a: "N&P คอนสตรัคชั่น ให้บริการดีดบ้านทุกจังหวัดทั่วประเทศ",
                },
                {
                  q: "สามารถโทรสอบถามราคาก่อนได้หรือไม่ ?",
                  a: "หากคุณลูกค้าสนใจ ยกบ้าน ดีดบ้าน เคลื่อนย้ายบ้าน แก้ปัญหาบ้านทรุด สามารถติดต่อช่างเอ็ม ได้เลยที่เบอร์ 061-0864789 ครับบบ และสาเหตุที่เราราคาไม่แพงก็เพราะ : เนื่องจากเรารับงานตรงไม่ผ่านคนกลาง จึงทำให้เรากำหนดขั้นตอนและวิธีในการทำงานได้ชัดเจนควบคุมคุณภาพของคนงานและเนื้องานและเวลาในการทำงานได้ชัดเจน ลูกค้าจึงมั่นใจได้เลยว่าช่างจะทำงานออกมาได้อย่างคุณภาพในราคาที่สมเหตุสมผล และเสร็จตามเวลาที่กำหนด ทำหนังสือสัญญารับประกันความเสียหายให้กับบ้านของลูกค้าก่อนลงมือทำงาน เพื่อให้ลูกค้ามั่นใจว่าบ้านของลูกค้าจะมั่นคงแข็งแรงและปลอดภัยต่อการอยู่อาศัย เราจะไม่เบิกเงินค่าแรงก่อนทำงาน ทำให้ลูกค้าหมดความกังวลกับปัญหา ช่างเบิกเงินแล้วทิ้งงาน ช่างเบิกเงินไปแล้วงานช้า งานไม่เดิน งานเสร็จตรวจความเรียบร้อยแล้วค่อยจ่าย ทำงานโดยช่างที่มีความชำนาญในการดีดบ้านโดยเฉพาะและเครื่องมือที่ครบครันการันตีด้วยผลงานที่เคยทำมามากมายหลายรูปแบบ",
                },
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
          <div className="place-self-center justify-center justify-items-center w-full ">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnphomeco.th&tabs=timeline&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=331923862254014"
              height="500"
              width="100%"
              className="mb-2 w-full "
              loading="lazy"
              title="Facebook Page"
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        <img src="/cover-image.png" alt="" className="w-full rounded-xl shadow-lg" />
      </div>
    </>
  );
}
