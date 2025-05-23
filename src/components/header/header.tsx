// src/components/header/header.tsx
import TopHeader from "./headertop";
import Headerlogo from "./headerlogo";
import BrandNav from "./BrandNav";
import { getAllBrands } from "@/lib/data";

export default function Header() {
  const brands = getAllBrands();

  return (
    <>
      <TopHeader />
      <Headerlogo />
      <BrandNav brands={brands} />
    </>
  );
}
