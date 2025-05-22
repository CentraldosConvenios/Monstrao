import fs from 'fs';
import path from 'path';

// Caminhos úteis
const dataDir = path.join(process.cwd(), 'src', 'data');
const brandsDir = path.join(dataDir, 'brands');
const indexPath = path.join(dataDir, 'index.json');

// Função para obter todas as marcas (apenas dados do index)
export function getAllBrands() {
  const fileContents = fs.readFileSync(indexPath, 'utf8');
  const data = JSON.parse(fileContents);
  return data;
}

// Função para obter os IDs de todas as marcas (útil para geração estática de páginas)
export function getAllBrandIds() {
  const brands = getAllBrands();
  return brands.map(brand => ({
    params: { id: brand.id }
  }));
}

// Função para obter dados completos de uma marca específica
export function getBrandData(id) {
  const filePath = path.join(brandsDir, `${id}.json`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  return data;
}

// Função para obter produtos de uma marca específica
export function getBrandProducts(id) {
  const brand = getBrandData(id);
  return brand ? brand.products : [];
}

// Função para obter dados de um produto específico
export function getProductData(brandId, productId) {
  const brand = getBrandData(brandId);
  if (!brand) return null;

  return brand.products.find(product => product.id === productId);
}
