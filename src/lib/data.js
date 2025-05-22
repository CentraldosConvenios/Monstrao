import fs from 'fs';
import path from 'path';

// Caminhos úteis
const dataDir = path.join(process.cwd(), 'src', 'data');
const brandsDir = path.join(dataDir, 'brands');
const indexPath = path.join(dataDir, 'index.json');

/**
 * Lê e retorna o conteúdo JSON de um arquivo, com tratamento de erros.
 * @param {string} filePath - Caminho do arquivo JSON.
 * @returns {any|null} Objeto JSON ou null em caso de erro.
 */
function readJsonFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.warn(`Arquivo não encontrado: ${filePath}`);
      return null;
    }
    const fileContents = fs.readFileSync(filePath, 'utf8');
    if (!fileContents) {
      console.warn(`Arquivo vazio: ${filePath}`);
      return null;
    }
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Erro ao ler ou parsear JSON: ${filePath}`, error);
    return null;
  }
}

// Função para obter todas as marcas (apenas dados do index)
export function getAllBrands() {
  const data = readJsonFile(indexPath);
  return Array.isArray(data) ? data : [];
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
  return readJsonFile(filePath);
}

// Função para obter produtos de uma marca específica
export function getBrandProducts(id) {
  const brand = getBrandData(id);
  return brand && Array.isArray(brand.products) ? brand.products : [];
}

// Função para obter dados de um produto específico
export function getProductData(brandId, productId) {
  const brand = getBrandData(brandId);
  if (!brand || !Array.isArray(brand.products)) return null;

  return brand.products.find(product => product.id === productId) || null;
}

