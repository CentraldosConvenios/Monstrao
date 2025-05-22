import { getBrandData } from '@/lib/data';
import { notFound } from 'next/navigation';

interface BrandPageProps {
  params: { id: string };
}

export default function BrandPage({ params }: BrandPageProps) {
  const brand = getBrandData(params.id);

  if (!brand) return notFound();

  return (
    <div className="pt-10 px-[140px] max-[1024px]:px-6">
      {/* NAV-MAP */}
      <p className="text-[#707070] text-[14px]">
        Página Inicial / Meias / {brand.name}
      </p>

      {/* TÍTULO */}
      <h1 className="text-[20px] font-bold text-black mt-4">
        Meias {brand.name} ({brand.products.length})
      </h1>

      {/* Grid de produtos – a ser implementado */}
      <div className="mt-10">
        {/* Aqui entra o grid com os cards dos produtos */}
      </div>
    </div>
  );
}
