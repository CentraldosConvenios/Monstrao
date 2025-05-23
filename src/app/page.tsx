'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-6 md:px-12 lg:px-24 py-10">
      {/* Bloco 1 - Banner */}
      <div className="w-full max-w-[1160px]">
        <Image
          src="/banner.jpg" // Substitua pelo caminho real da imagem
          alt="Banner principal"
          width={1160}
          height={595}
          className="w-full h-auto rounded-[16px] object-cover"
          priority
        />
      </div>

      {/* Bloco 2 - CTA */}
      <section className="mt-10 flex flex-col items-center text-center">
        <h2 className="text-[20px] font-bold mb-6">
          AS MELHORES MEIAS DO MERCADO
        </h2>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="#quemsomos"
            className="bg-black text-white text-[14px] font-bold px-6 py-3 rounded-full hover:bg-neutral-800 transition"
          >
            Saiba Mais
          </Link>
          <Link
            href="https://wa.me/55119242453595"
            className="border border-black text-black text-[14px] font-bold px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
          >
            FALE CONOSCO
          </Link>
        </div>
      </section>
    </main>
  );
}
