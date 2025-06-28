"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <nav className="w-full px-6 py-4 flex justify-between items-center bg-zinc-900 shadow-md fixed top-0 z-50">
        <Link href="/" className="text-white hover:text-blue-400 transition text-xl">
          <FaHome />
        </Link>
        <div className="space-x-6 text-sm md:text-base text-white">
          <Link href="/about" className="hover:text-blue-400 transition">About</Link>
          <Link href="/education" className="hover:text-blue-400 transition">Education</Link>
          <Link href="/work" className="hover:text-blue-400 transition">Work</Link>
          <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link href="/technical" className="hover:text-blue-400 transition">Technical</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>
      </nav>
      <div className={isHome ? "pt-0" : "pt-20"} />
    </>
  );
}
