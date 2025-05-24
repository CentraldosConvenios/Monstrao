import { getBrandData } from '@/lib/data';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import BrandTracker from '@/components/BrandTracker'; // ⬅️ IMPORTANTE

interface BrandPageProps {
  params: Promise<{ id: string }>;
}

interface Product {
  id: string;
  name: string;
  image?: string;
  description?: string;
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { id } = await params;
  const brand = getBrandData(id);

  if (!brand) return notFound();

  return (
    <main className="bg-[#ffffff]">
      {/* Dispara o evento ViewContent */}
      <BrandTracker brandName={brand.name} />

      <div className="pt-10 px-[140px] max-[1024px]:px-6">
        <p className="text-[#707070] text-[14px]">
          Página Inicial / Meias / {brand.name}
        </p>

        <h1 className="text-[20px] font-bold text-black mt-4">
          Meias {brand.name} ({brand.products.length})
        </h1>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-[40px]">
          {brand.products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}





