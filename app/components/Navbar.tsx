import { Link, useLocation } from "react-router";
import { useState } from "react";

type Props = {
  variant: "home" | "service";
};

const navLinks = [
  { to: "/pile", label: "แก้ใขปัญหาบ้านทรุด" },
  { to: "/concrete-lifting", label: "ดีดบ้านปูน" },
  { to: "/wood-lifting", label: "ดีดบ้านไม้" },
  { to: "/house-moving", label: "รับย้ายบ้าน" },
];

export default function Navbar({ variant }: Props) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const drawer = (
    <>
      <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setOpen(false)}>
        <div className="absolute inset-0 bg-black/40" />
        <aside className={`absolute top-0 right-0 h-full w-72 bg-white shadow-xl p-6 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8">
            <img src="/images/logo-header.webp" alt="N&P Logo" className="h-10 w-auto" />
            <button onClick={() => setOpen(false)} className="p-1 text-gray-500 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            {variant === "service" && (
              <Link to="/" onClick={() => setOpen(false)} className={`text-lg font-medium ${isActive("/") ? "text-(--primary-color) font-semibold" : "text-gray-700 hover:text-(--primary-color)"}`}>หน้าแรก</Link>
            )}
            <a href="/#contact" onClick={() => setOpen(false)} className="text-lg font-medium text-gray-700 hover:text-(--primary-color)">ติดต่อ</a>
            <a href="/#Reviews" onClick={() => setOpen(false)} className="text-lg font-medium text-gray-700 hover:text-(--primary-color)">ดูรีวิว</a>
            <hr className="border-gray-200" />
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={`text-lg font-medium ${isActive(l.to) ? "text-(--primary-color) font-semibold" : "text-gray-700 hover:text-(--primary-color)"}`}>{l.label}</Link>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );

  if (variant === "home") {
    return (
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="/">
            <img
              src="/images/logo-header.webp"
              alt="N&P Logo"
              className="h-18 w-auto"
            />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className={`navbar-link ${isActive(l.to) ? "text-(--primary-color) font-semibold" : ""}`}>{l.label}</Link>
            ))}
            <a href="/#Reviews" className="navbar-link">ดูรีวิว</a>
            <a href="/#contact" style={{ color: "white" }}
             className="navbar-link bg-(--primary-color)
             px-7 py-2 rounded-full text-white hover:opacity-90">ติดต่อเรา</a>
          </nav>

          <button onClick={() => setOpen(true)} className="md:hidden p-2 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {drawer}
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/">
          <img
            src="/images/logo-header.webp"
            alt="N&P Logo"
            className="h-12 md:h-14 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className={`navbar-link ${isActive("/") ? "text-(--primary-color) font-semibold" : ""}`}>หน้าแรก</Link>
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className={`navbar-link ${isActive(l.to) ? "text-(--primary-color) font-semibold" : ""}`}>{l.label}</Link>
          ))}
          <Link to="/#contact" className="navbar-link">ติดต่อ</Link>
          <Link to="/#Reviews" className="navbar-link">ดูรีวิว</Link>
        </nav>
        <button onClick={() => setOpen(true)} className="md:hidden p-2 text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {drawer}
    </header>
  );
}
