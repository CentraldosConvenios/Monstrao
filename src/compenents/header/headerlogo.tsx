'use client';

export default function HeaderSection() {
  return (
    <div className="bg-white px-[50px] py-[18px] w-full">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto flex-nowrap gap-4 sm:gap-8">
        {/* Logo */}
        <div className="font-['Helvetica Neue'] text-[24px] sm:text-[30px] tracking-widest font-bold text-black">
          MO$TRÃO
        </div>

        {/* Botão */}
        <button className="bg-black text-white px-4 sm:px-9 py-2 sm:py-[14px] rounded-full text-[14px] sm:text-[16px] font-bold font-['Helvetica Neue'] whitespace-nowrap">
          FALE CONOSCO
        </button>
      </div>
    </div>
  );
}
