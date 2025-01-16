# Frontend - Proyecto de Prueba
Este proyecto es un frontend básico en React que incluye un formulario de inicio de sesión. El objetivo es que el candidato pueda realizar pruebas automatizadas y modificar la aplicación según lo requiera la evaluación.

## Requisitos previos
### Antes de comenzar, asegúrate de tener instalados:

-- Node.js (versión 16 o superior).
-- npm (incluido con Node.js).

Un editor de código, como Visual Studio Code (opcional, pero recomendado).
Para verificar si están instalados, ejecuta en tu terminal:



## Clonar el repositorio
Clona este repositorio en tu máquina local:

-- git clone <URL_DEL_REPOSITORIO>
-- cd frontend

## Instalar dependencias
Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

npm install

## Configuración
No es necesario realizar configuraciones adicionales. El proyecto está preparado para conectarse al backend en http://localhost:3001. Asegúrate de que el backend esté en ejecución para probar la funcionalidad completa.

Si necesitas cambiar la URL del backend:

Abre el archivo src/App.jsx.
Modifica la URL en el bloque fetch


const response = await fetch("http://localhost:3001/login", {

## Ejecutar el proyecto
Inicia el servidor de desarrollo con:

npm run dev

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
