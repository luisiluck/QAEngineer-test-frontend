# **Frontend - Proyecto de Prueba**

Este proyecto es un frontend básico desarrollado en React. Incluye un formulario de inicio de sesión que interactúa con un backend para autenticar a los usuarios. El objetivo del candidato es realizar pruebas automatizadas y personalizaciones según lo indicado en la evaluación.

---

## **Requisitos previos**

Antes de comenzar, asegúrate de tener instalados:

- **Node.js** (versión 16 o superior). Puedes descargarlo desde [Node.js](https://nodejs.org/).
- **npm** (incluido con Node.js).
- Un editor de código, como **Visual Studio Code** (opcional, pero recomendado).

Para verificar si están instalados, ejecuta en tu terminal:

```bash
node -v
npm -v
```

---

## **1. Clonar el repositorio**

Clona este repositorio en tu máquina local:

```bash
git clone <URL_DEL_REPOSITORIO>
cd frontend
```

---

## **2. Instalar dependencias**

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

Esto instalará las bibliotecas necesarias para ejecutar el proyecto React.

---

## **3. Configuración**

El proyecto está preconfigurado para conectarse al backend en `http://localhost:3001`. Asegúrate de que el backend esté en ejecución antes de probar el proyecto.

Si necesitas cambiar la URL del backend:

1. Abre el archivo `src/App.jsx`.
2. Modifica la URL en el bloque `fetch`:

   ```javascript
   const response = await fetch("http://localhost:3001/login", {
   ```

---

## **4. Ejecutar el proyecto**

Inicia el servidor de desarrollo con:

```bash
npm run dev
```

Esto iniciará el proyecto y deberías ver un mensaje similar a este:

```
  VITE v4.0.0  ready in 300ms

  ➔  Local:   http://localhost:5173/
  ➔  Network: use `--host` to expose
```

Abre la URL proporcionada (normalmente `http://localhost:5173`) en tu navegador para ver la aplicación.

---

## **5. Funcionalidad del proyecto**

Este proyecto incluye:

- Un formulario de inicio de sesión con los campos:
  - **Email** (requerido).
  - **Contraseña** (requerida).
- **Flujo del login:**
  - Si las credenciales son correctas, se muestra una página de bienvenida.
  - Si las credenciales son incorrectas, se muestra un mensaje de error debajo del formulario.

---

## **6. Scripts útiles**

- **Iniciar el servidor en modo desarrollo:**
  ```bash
  npm run dev
  ```

- **Construir la aplicación para producción:**
  ```bash
  npm run build
  ```

- **Previsualizar el proyecto de producción:**
  ```bash
  npm run preview
  ```

---

## **7. Notas adicionales**

1. **Errores comunes:**
   - Si el frontend no puede conectarse al backend, verifica que:
     - El backend esté en ejecución.
     - Las URLs del frontend y backend coincidan.

2. **Configuración de puertos:**
   - El servidor de desarrollo de React se ejecuta en `http://localhost:5173` por defecto. Si necesitas cambiarlo, consulta la documentación de [Vite](https://vitejs.dev/).

3. **Pruebas:**
   - Este proyecto está diseñado para que puedas escribir pruebas automatizadas para el formulario de login y sus flujos.

---

## **8. Siguientes pasos**

1. **Verificar el flujo completo:** Asegúrate de que el backend esté en ejecución y prueba los flujos de inicio de sesión exitoso y fallido.
2. **Escribir pruebas automatizadas:** Diseña y ejecuta pruebas utilizando herramientas como Cypress o Selenium.

Si tienes preguntas o necesitas ayuda, contacta a tu responsable técnico.

---

## **9. Pruebas E2E con Cypress**

> #### **NOTA**: Se requiere docker para inicializar la API

#### Para inicializar la GUI interactiva
```bash
npm run cy:open
```
> Util para implementar pruebas y depurar
#### Para ejecutar las pruebas por linea de comandos
```bash
npm run cy:run
```

#### Estructura general del Proyecto
```bash
cypress
├── e2e             # contiene las pruebas
│   └── login.cy.js
├── fixtures        # contiene los datos para las pruebas
│   └── login.json
└── pages           # contiene elementos web agrupados en pages
    └── login.js
...    
cypress.config.js # configuración general de cypress
```