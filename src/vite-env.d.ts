// src/vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SANITY_PROJECT_ID: string
    readonly VITE_SANITY_DATASET: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }