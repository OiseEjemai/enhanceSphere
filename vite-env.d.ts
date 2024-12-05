/// <reference types="vite/client" />
declare module 'path'

interface ImportMetaEnv {
    readonly VITE_BACKEND_URL: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }