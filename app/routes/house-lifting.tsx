import type { Route } from "./+types/concrete-lifting";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "บริการดีดบ้านปูน | N&P คอนสตรัคชั่น" },
    { name: "description", content: "บริการดีดบ้านปูน ยกบ้านปูน ยกระดับบ้านปูน โดยช่างมืออาชีพ N&P คอนสตรัคชั่น ผลงานมากมาย ราคาเป็นกันเอง" },
  ];
}

const projects = [
  {
    num: "1.1",
    title: "จากบ้านชั้นเดียวเป็นบ้านสองชั้น ความสูง 3 เมตร เสา 17 ต้น",
    images: ["ช่างดีดบ้าน-1-1", "ช่างดีดบ้าน-2-1", "ช่างดีดบ้าน-3-1", "ช่างดีดบ้าน-4-1"],
  },
  {
    num: "1.2",
    title: "ยกระดับหล่อเสาความสูง 2 เมตร จำนวนเสา 14 ต้น พร้อมเสริมคานบีม",
    images: ["ช่างดีดบ้าน-1-2", "ช่างดีดบ้าน-2-2", "ช่างดีดบ้าน-3-2", "ช่างดีดบ้าน-4-2"],
  },
  {
    num: "1.3",
    title: "ยกระดับเสาให้ได้ความสูงที่ 4 เมตร จำนวนเสา 33 ต้น",
    images: ["ช่างดีดบ้าน-1-3", "ช่างดีดบ้าน-2-3", "ช่างดีดบ้าน-3-3", "ช่างดีดบ้าน-4-3"],
  },
  {
    num: "1.4",
    title: "ต่อเสาศาลาได้ความสูงเพิ่ม 1.50 เมตร จำนวนเสา 12 ต้น",
    images: ["ช่างดีดศาลา-1", "ช่างดีดศาลา-2", "ช่างดีดศาลา-3", "ช่างดีดศาลา-4"],
  },
  {
    num: "1.5",
    title: "ยกระดับหล่อเสาท่อใยหิน ได้ความสูงที่ 4 เมตร พร้อมทำคานและเทพื้น",
    images: ["ช่างดีดศาลา-1-1", "ช่างดีดศาลา-2-1", "ช่างดีดศาลา-3-1", "ช่างดีดศาลา-4-1"],
  },
  {
    num: "1.6",
    title: "ยกระดับเปลี่ยนเสาให้ได้ความสูง 3 เมตร จำนวนเสา 12 ต้น",
    images: ["ช่างดีดบ้าน-1-4", "ช่างดีดบ้าน-2-4", "ช่างดีดบ้าน-3-4", "ช่างดีดบ้าน-4-4"],
  },
];

function ProjectCard({ num, title, images }: { num: string; title: string; images: string[] }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4">
        <p className="text-blue-700 font-bold text-lg">{num}</p>
        <p className="text-gray-700 font-medium text-sm mt-1">{title}</p>
      </div>
      <div className="grid grid-cols-2 gap-1 p-1">
        {images.map((img, i) => (
          <img
            key={i}
            src={`/images/${img}.webp`}
            alt={title}
            className="w-full aspect-square object-cover rounded-lg"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default function HouseLifting() {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold">ดีดบ้านปูน</h1>
          <p className="text-blue-200 mt-4 max-w-2xl mx-auto text-xl font-thin">
            บริการดีดบ้านปูน ยกบ้านปูน ยกระดับบ้านปูน โดยทีมช่างมืออาชีพจาก N&P คอนสตรัคชั่น
            พร้อมรับประกันผลงานทุกขั้นตอน
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-r from-blue-800 to-blue-900 text-white text-center">
        <p className="text-lg mb-4">สนใจบริการดีดบ้านปูน ปรึกษาฟรี ไม่มีค่าใช้จ่าย</p>
        <a href="tel:0610864789" className="inline-block bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-bold px-8 py-4 rounded-lg shadow-lg text-lg transition">
          โทรเลย: 061-0864789
        </a>
      </section>
    </>
  );
}
