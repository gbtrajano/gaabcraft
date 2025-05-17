import {
  FaShoppingCart,
  FaArrowAltCircleRight,
  FaMoneyBillAlt,
} from "react-icons/fa";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen mt-5 flex-col gap-8 relative">
      <Link href="/">
        <section className="bg-gray-800 p-6 rounded-2xl flex items-center justify-between w-80 shadow-2xl">
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
