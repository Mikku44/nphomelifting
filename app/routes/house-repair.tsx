import type { Route } from "./+types/wood-lifting";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "บริการดีดบ้านไม้ | N&P คอนสตรัคชั่น" },
    { name: "description", content: "บริการดีดบ้านไม้ ยกบ้านไม้ ยกระดับบ้านไม้ โดยช่างมืออาชีพ N&P คอนสตรัคชั่น" },
  ];
}

const projects = [
  {
    num: "3.1",
    title: "ช่างทำการดึงคืนและทำฐานฟุตติ้งให้ใหม่ จำนวน 13 ช่อง",
    images: ["แก้บ้านทรุด-1", "แก้บ้านทรุด-2", "แก้บ้านทรุด-3", "แก้บ้านทรุด-4"],
  },
  {
    num: "3.2",
    title: "จัดเสาใหม่ให้ตรงและทำตอหม้อ 30 ต้น",
    images: ["แก้บ้านทรุด-1-1", "แก้บ้านทรุด-2-1", "แก้บ้านทรุด-3-1", "แก้บ้านทรุด-4-1"],
  },
  {
    num: "3.3",
    title: "บ้านทรุดตัว แก้ไขโดยลงเข็มไอ 18 จำนวน 8 จุด",
    images: ["แก้บ้านทรุด-1-2", "แก้บ้านทรุด-2-2", "แก้บ้านทรุด-3-2", "แก้บ้านทรุด-4-2"],
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

export default function HouseRepair() {
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

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-r from-blue-800 to-blue-900 text-white text-center">
        <p className="text-lg mb-4">สนใจบริการดีดบ้านไม้ ปรึกษาฟรี ไม่มีค่าใช้จ่าย</p>
        <a href="tel:0610864789" className="inline-block bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-bold px-8 py-4 rounded-lg shadow-lg text-lg transition">
          โทรเลย: 061-0864789
        </a>
      </section>
    </>
  );
}
