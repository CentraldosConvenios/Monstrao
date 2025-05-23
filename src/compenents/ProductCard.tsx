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

  const whatsappNumber = '55119242453595'; // Substitua pelo seu número
  const message = encodeURIComponent(`Olá! Tenho interesse no produto: ${product.name}`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
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




