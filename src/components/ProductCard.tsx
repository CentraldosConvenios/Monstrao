'use client';

import Image from 'next/image';
import { useState } from 'react';

export interface Product {
  id: string;
  name: string;
  image?: string;
  description?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);

  const whatsappNumber = '5511942453595';
  const message = encodeURIComponent(`Olá! Tenho interesse no produto: ${product.name}`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    }

    // Aguarda 300ms antes de abrir o link (para garantir que o pixel seja enviado)
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
    }, 300);
  };

  return (
    <a
      href={whatsappLink}
      onClick={handleClick}
      className="flex flex-col items-start w-full max-w-[245px] cursor-pointer"
    >
      {!imgError && product.image ? (
        <Image
          src={product.image}
          alt={product.name}
          width={245}
          height={245}
          className="object-contain w-full h-auto"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="bg-gray-300 w-full" style={{ aspectRatio: '1 / 1' }} />
      )}
      <p className="mt-2 font-bold text-[16px] text-left text-black w-full">
        {product.name}
      </p>
    </a>
  );
}





