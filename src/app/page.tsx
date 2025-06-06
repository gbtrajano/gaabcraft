import { FaShoppingCart, FaArrowAltCircleRight, FaBook } from "react-icons/fa";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen mt-5 flex-col gap-8 relative">
      <a href="https://go.hotmart.com/Y99828388Y" target="_blank">
        <section className="bg-gray-800 p-6 rounded-2xl flex items-center justify-between gap-8 shadow-2xl">
          <div className="flex items-center">
            <FaBook className="icon" size={35} fill="#fcc83e" />
            <h1 className="text-white font-bold ml-3 text-2xl">
              Concurso Correios
            </h1>
          </div>
          <FaArrowAltCircleRight size={35} fill="#FFFF" />
        </section>
      </a>
      <Link href="/">
        <section className="bg-gray-800 p-6 rounded-2xl flex items-center justify-between gap-8 shadow-2xl">
          <div className="flex items-center">
            <FaShoppingCart className="icon" size={35} fill="#fcc83e" />
            <h1 className="text-white font-bold ml-3 text-2xl">Em breve...</h1>
          </div>
          <FaArrowAltCircleRight size={35} fill="#FFFF" />
        </section>
      </Link>
    </div>
  );
}
