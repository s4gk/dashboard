import globals from 'globals';
import tseslint from 'typescript-eslint';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import prettier from 'eslint-config-prettier';

// --- Setup para compatibilidad con configs antiguas ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
   baseDirectory: __dirname,
   recommendedConfig: tseslint.configs.recommended,
});
// ----------------------------------------------------

export default tseslint.config(
   // Ignorar directorios globales
   {
      ignores: ['dist/', 'node_modules/', 'bun.lockb'],
   },

   // Aplicar las configuraciones de Airbnb usando la capa de compatibilidad
   ...compat.extends('airbnb', 'airbnb-typescript', 'airbnb/hooks', prettier),

   // Configuración específica para tus archivos TypeScript/React
   {
      files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
      languageOptions: {
         globals: {
            ...globals.browser, // Variables globales del navegador (window, document)
            ...globals.node, // Variables globales de Node.js
         },
         parserOptions: {
            project: true,
            tsconfigRootDir: __dirname,
         },
      },
      settings: {
         react: {
            version: 'detect', // Detecta automáticamente la versión de React
         },
      },
      rules: {
         // Aquí puedes sobrescribir reglas de Airbnb si lo necesitas
         'react/react-in-jsx-scope': 'off', // No es necesario con el nuevo JSX Transform
         'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
         'import/prefer-default-export': 'off', // Permite exportaciones nombradas sin un default
      },
   }
);
