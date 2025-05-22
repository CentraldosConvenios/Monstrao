'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WhoWeAre() {
  return (
    <section className="w-full flex justify-center items-center py-[60px] bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[60px] lg:gap-[118px] max-w-[1440px] px-6 sm:px-10 md:px-14">
        {/* Bloco 1 - Texto */}
        <div className="max-w-[580px] flex flex-col gap-[30px]">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-tight text-center lg:text-left">
            Onde os Grandes do <br /> Varejo se Abastecem.
          </h2>

          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#333] text-justify">
            Há mais de uma década no coração do Brás, em São Paulo, a Monstrão se consolidou como referência nacional na distribuição de meias premium. Atendendo exclusivamente lojistas de moda em todo o Brasil, somos o elo de confiança entre as principais marcas do mundo e os revendedores que exigem qualidade, variedade e originalidade. <br /><br />
            Representamos as gigantes do mercado — Nike, Adidas, Puma, Vans e muitas outras — com um portfólio que une autenticidade, estilo e alta performance. Cada produto que passa por aqui carrega o selo das marcas mais desejadas do planeta, garantindo a nossos clientes acesso direto ao que há de melhor e mais procurado. <br /><br />
            Nossa reputação é construída diariamente com parcerias sólidas, agilidade logística e atendimento especializado. A Monstrão não é apenas uma distribuidora — é uma escolha estratégica para lojistas que querem se destacar no mercado com produtos de giro rápido e margens reais. <br /><br />
            Se você vende moda, a Monstrão é o seu lugar.
          </p>

          <Link
            href="#"
            className="bg-black text-white px-6 py-3 rounded-full w-fit text-[14px] sm:text-[16px] font-semibold hover:bg-[#111] transition"
          >
            Fale com um especialista
          </Link>
        </div>

        {/* Bloco 2 - Imagem */}
        <div className="w-[300px] sm:w-[380px] md:w-[420px] lg:w-[474px] h-auto">
          <Image
            src="/quemsomos.png"
            alt="Equipe da Monstrão"
            width={474}
            height={748}
            className="w-full h-auto object-cover rounded-[12px]"
          />
        </div>
      </div>
    </section>
  );
}

