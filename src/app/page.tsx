'use client';

import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-6 md:px-12 lg:px-24 py-10">
      {/* Bloco 1 - Banner */}
      <div className="w-full max-w-[1160px]">
        <Image
          src="/SemTítulo-1.png" // Substitua pelo caminho real da imagem
          alt="Banner principal"
          width={1160}
          height={595}
          className="w-full h-auto rounded-[16px] object-cover"
          priority
        />
      </div>

      {/* Bloco 2 - CTA */}
      <section className="mt-10 flex flex-col items-center text-center">
        <h2 className="text-[20px] text-black font-bold mb-6">
          AS MELHORES MEIAS DO MERCADO
        </h2>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="#quemsomos"
            className="bg-black text-white text-[14px] font-bold px-6 py-3 rounded-full hover:bg-neutral-800 transition"
          >
            Saiba Mais
          </Link>
          <WhatsAppButton />
        </div>
      </section>

      {/* Bloco 3 - Marcas */}
      <section className="mt-16 w-full flex justify-center">
        <div className="flex gap-6 max-w-[1160px] w-full justify-center">
          <div className="flex-1 min-w-0">
            <Link href="/brand/vans">
            <Image
              src="/Grupo17.png" // Substitua pelo caminho real
              alt="Marca 1"
              width={474}
              height={595}
              className="w-full h-auto object-cover rounded-[12px]"
            />
            </Link>
          </div>
          <div className="flex-1 min-w-0">
            <Link href="/brand/adidas">
            <Image
              src="/Grupo16.png" // Substitua pelo caminho real
              alt="Marca 2"
              width={474}
              height={595}
              className="w-full h-auto object-cover rounded-[12px]"
            />
            </Link>
          </div>
        </div>
      </section>
            {/* Bloco 4 - Galeria de 3 Imagens */}
      <section className="mt-16 w-full flex justify-center">
        <div className="flex gap-4 max-w-[1160px] w-full justify-center">
          <div className="flex-1 min-w-0">
            <Link href="/brand/jordan">
            <Image
              src="/meia1.png" // Substitua pelos caminhos reais
              alt="Galeria 1"
              width={376}
              height={497}
              className="w-full h-auto object-cover rounded-[12px]"
            />
            </Link>
          </div>
          <div className="flex-1 min-w-0">
            <Link href="brand/nike">
            <Image
              src="/meia2.png"
              alt="Galeria 2"
              width={376}
              height={497}
              className="w-full h-auto object-cover rounded-[12px]"
            />
            </Link>
          </div>
          <div className="flex-1 min-w-0">
            <Link href="brand/adidas">
            <Image
              src="/meia3.png"
              alt="Galeria 3"
              width={376}
              height={497}
              className="w-full h-auto object-cover rounded-[12px]"
            />
            </Link>
          </div>
        </div>
      
        </section>          
    </main>
  );
}
