"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import Cinco from "../../assets/NavBar/Letra1.png";
import Um from "../../assets/NavBar/Letra2.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "#74B0C8" }}
      className="w-full h-24 flex items-center justify-around text-white relative px-4"
    >
      {/* LOGO */}
      <div className="flex items-center gap-1">
        <Link href="/" className="flex">
          <Image src={Cinco} alt="Logo letra 1" width={45} height={30} />
          <Image src={Um} alt="Logo letra 2" width={18} height={10} />
        </Link>
      </div>

      {/* BOTÃO MENU MOBILE */}
      <button
        className="md:hidden text-white z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menu"
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* MENU */}
      <nav
        className={`
          absolute md:static top-24 left-0 w-full md:w-auto
          bg-black md:bg-transparent
          flex-col md:flex-row
          items-center gap-8
          py-6 md:py-0
          transition-all duration-300
          z-40
          ${isOpen ? "flex" : "hidden md:flex"}
        `}
      >
        <ul className="flex flex-col md:flex-row gap-6 items-center">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
              Protagonistas
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
              Personagens
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
              Mapas
            </Link>
          </li>
        </ul>

        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="font-semibold text-black bg-white px-4 py-2 rounded-lg
          border border-gray-300 hover:bg-gray-100 transition"
        >
          Entrar
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
