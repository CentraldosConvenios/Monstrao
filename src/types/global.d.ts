// src/types/global.d.ts
export {};

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

