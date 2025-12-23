"use client";


import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: '#74B0C8' }}
      className="bg-image w-full h-24 flex items-center justify-around text-white relative px-4"
    >


      <div className="flex items-center gap-1">
        <Link className="flex" href={"/"}>
          <Image src="/images/NavBar/Letra1.png" alt="Logo letra 1" width={45} height={30} />
          <Image src="/images/NavBar/Letra2.png" alt="Logo letra 2" width={18} height={10} />
        </Link>
      </div>


      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>


      <nav className={`
        absolute md:static top-24 left-0 w-full md:w-auto 
        bg-black md:bg-transparent flex-col md:flex-row 
        items-center gap-8 py-6 md:py-0 transition-all duration-300
        ${isOpen ? "flex" : "hidden md:flex"}
      `}>
        <ul className="flex flex-col md:flex-row gap-6 items-center">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/" className="hover:text-gray-300">Protagonistas</Link></li>
          <li><Link href="/" className="hover:text-gray-300">Personagens</Link></li>
          <li><Link href="/" className="hover:text-gray-300">Mapas</Link></li>
        </ul>

        <Link
          href="/"
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