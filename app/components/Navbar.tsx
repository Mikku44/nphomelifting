import { Link } from "react-router";

type Props = {
  variant: "home" | "service";
};

export default function Navbar({ variant }: Props) {
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
            <a href="/#contact" className="navbar-link">ติดต่อ</a>
            <a href="/#Reviews" className="navbar-link">ดูรีวิว</a>
            <Link to="/pile" className="navbar-link">ตอกเสาเข็ม</Link>
            <Link to="/concrete-lifting" className="navbar-link">ดีดบ้านปูน</Link>
            <Link to="/wood-lifting" className="navbar-link">ดีดบ้านไม้</Link>
            <Link to="/house-moving" className="navbar-link">รับย้ายบ้าน</Link>
          </nav>
          <button className="md:hidden p-2 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
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
          <Link to="/#contact" className="navbar-link">ติดต่อ</Link>
          <Link to="/#Reviews" className="navbar-link">ดูรีวิว</Link>
          <Link to="/" className="navbar-link">หน้าแรก</Link>
        </nav>
      </div>
    </header>
  );
}
