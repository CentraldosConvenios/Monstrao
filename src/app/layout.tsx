'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import WhoWeAre from "@/components/WhoWeAre";
import MapSection from "@/components/MapSection";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monstrão Meias | Distribuidora de Meias no Atacado",
  description: "Distribuidora no Brás especializada em meias premium no atacado. Trabalhamos com Nike, Adidas, Puma, Vans e mais. Exclusivo para lojistas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://monstraomeias.com.br" />

        {/* SEO Básico */}
        <meta name="description" content="Distribuidora no Brás especializada em meias premium no atacado. Trabalhamos com Nike, Adidas, Puma, Vans e mais. Exclusivo para lojistas." />

        {/* Open Graph (Facebook, WhatsApp etc.) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Monstrão Meias | Onde os Grandes do Varejo se Abastecem" />
        <meta property="og:description" content="Distribuidora no Brás com meias das maiores marcas do mundo. Atacado exclusivo para lojistas." />
        <meta property="og:url" content="https://monstraomeias.com.br" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monstrão Meias | Distribuidora de Meias no Atacado" />
        <meta name="twitter:description" content="Distribuidora no Brás com meias das maiores marcas do mundo. Atacado exclusivo para lojistas." />

        <meta name="facebook-domain-verification" content="5jja1kufuh4g4xjisfj72oth0606ea" />

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
              n.callMethod.apply(n,arguments) : n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1790630298548275'); 
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=1790630298548275&ev=PageView&noscript=1`}
          />
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <WhoWeAre />
        <MapSection />
        <footer className="bg-black text-white px-6 md:px-[140px] py-10">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-10">
            <div className="flex-1">
              <h2 className="font-bold text-[24px] tracking-widest">MON$TRÃO</h2>
              <p className="text-[14px] text-[#CCCCCC] mt-4 max-w-sm">
                Meias estilosas, confortáveis e que mostram sua atitude. A MO$TRÃO é mais que uma marca — é um movimento.
              </p>
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-[16px] mb-4">Fale conosco</h3>
              <p className="text-[14px] text-[#CCCCCC]">
                WhatsApp: <a href="https://wa.me/5511942453595" target="_blank" className="hover:text-white">+55 11 94245-3595</a>
              </p>
              <p className="text-[14px] text-[#CCCCCC] mt-2">Email: contato@monstrao.com</p>
            </div>
          </div>

          <div className="mt-10 border-t border-[#333333] pt-6 text-center text-[12px] text-[#666]">
            © {new Date().getFullYear()} MON$TRÃO. Todos os direitos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}

