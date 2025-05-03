import Link from "next/link";

import "./page.css";

export default function doacao() {
  return (
    <section className="flex items-center justify-center flex-col mt-5">
      <img src="/images/pix.png" alt="" className="h-64 rounded-2xl" />
      <p className="mt-4 text-white font-bold">gabrielcraftoficial@gmail.com</p>
      <Link
        href="/"
        className="py-2 px-5 text-black font-bold rounded mt-3 btn"
      >
        Voltar
      </Link>
    </section>
  );
}
