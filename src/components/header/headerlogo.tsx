'use client';

import Link from 'next/link';

export default function HeaderSection() {
  function handleWhatsAppClick() {
    const phoneNumber = '5511942453595'; // Código do Brasil + número (55 + DDD + número)
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  }

  return (
    <div className="bg-white px-[50px] py-[18px] w-full">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto flex-nowrap gap-4 sm:gap-8">
        
        {/* Logo */}
        <Link href="/" className="font-['Helvetica Neue'] text-[24px] sm:text-[30px] tracking-widest font-bold text-black">
         MON$TRÃO
        </Link>

        {/* Botão */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-black text-white px-4 sm:px-9 py-2 sm:py-[14px] rounded-full text-[14px] sm:text-[16px] font-bold font-['Helvetica Neue'] whitespace-nowrap"
        >
          FALE CONOSCO
        </button>
      </div>
    </div>
  );
}
