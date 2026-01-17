# 🏢 Arquitectura de Microfrontends con Styled Components

Proyecto educativo que demuestra el **aislamiento de estilos** en una arquitectura de microfrontends utilizando **React**, **Styled Components** y **Module Federation (Webpack 5)**.

## 📋 Tabla de Contenidos

- Descripción
- Arquitectura
- Tecnologías
- Requisitos Previos
- Instalación
- Ejecución Local
- Estructura del Proyecto
- Características
- Verificación del Aislamiento
- Problemas Comunes

---

## 🎯 Descripción

Este proyecto implementa una **plataforma modular** compuesta por tres aplicaciones independientes:

- **Microfrontend Productos**: Catálogo de productos con funcionalidad de carrito
- **Microfrontend Usuarios**: Gestión de perfiles de usuario
- **Shell (Contenedor)**: Aplicación principal que integra ambos microfrontends

Cada microfrontend utiliza **Styled Components** para garantizar que sus estilos estén completamente aislados, evitando conflictos de CSS entre módulos.

---

## 🏗️ Arquitectura

```
┌─────────────────────────────────────┐
│          SHELL (Puerto 3000)        │
│  ┌──────────────────────────────┐   │
│  │   Header + Navegación        │   │
│  └──────────────────────────────┘   │
│                                     │
│  ┌──────────────┐  ┌─────────────┐  │
│  │ MF Productos │  │ MF Usuarios │  │
│  │ (Puerto 3001)│  │(Puerto 3002)│  │
│  └──────────────┘  └─────────────┘  │
└─────────────────────────────────────┘
```

### Comunicación entre Microfrontends

- **Module Federation (Webpack 5)**: Permite cargar microfrontends de forma dinámica
- **Shared Dependencies**: React, React-DOM y Styled Components se comparten entre aplicaciones
- **Aislamiento de Estilos**: Cada componente genera clases CSS únicas

---

## 🛠️ Tecnologías

| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| React | 18.2.0 | Framework UI |
| Styled Components | 6.1.8 | CSS-in-JS |
| Webpack | 5.88.2 | Module Federation |
| Babel | 7.23.0 | Transpilación JSX |
| Webpack Dev Server | 4.15.1 | Desarrollo local |

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** (versión 8 o superior) o **yarn**
- **Git** (para clonar el repositorio)

Verifica las versiones instaladas:

```bash
node --version
npm --version
git --version
```

---

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/microfrontends.git
cd microfrontends
```

### 2. Instalar dependencias en cada proyecto

Debes instalar las dependencias en **los 3 proyectos**:

```bash
# Microfrontend Productos
cd mf-productos
npm install

# Microfrontend Usuarios
cd ../mf-usuarios
npm install

# Shell (Aplicación Contenedora)
cd ../shell
npm install
```

### Instalación rápida (script automatizado)

Alternativamente, puedes ejecutar esto desde la carpeta raíz:

```bash
# Linux/Mac
cd mf-productos && npm install && cd ../mf-usuarios && npm install && cd ../shell && npm install && cd ..

# Windows (PowerShell)
cd mf-productos; npm install; cd ..\mf-usuarios; npm install; cd ..\shell; npm install; cd ..
```

---

## ▶️ Ejecución Local

### Método 1: Inicio Manual (Recomendado)

Abre **3 terminales diferentes** y ejecuta cada comando:

**Terminal 1 - Microfrontend Productos:**
```bash
cd mf-productos
npm start
```
- Se abrirá en: `http://localhost:3001`

**Terminal 2 - Microfrontend Usuarios:**
```bash
cd mf-usuarios
npm start
```
- Se abrirá en: `http://localhost:3002`

**Terminal 3 - Shell (Aplicación Principal):**
```bash
cd shell
npm start
```
- Se abrirá en: `http://localhost:3000`

### ⚠️ Orden Importante

**SIEMPRE** inicia primero los microfrontends (3001 y 3002) y **DESPUÉS** el shell (3000), ya que el shell necesita conectarse a los microfrontends activos.

### Método 2: Script Concurrente (Opcional)

Puedes usar `concurrently` para ejecutar todo con un solo comando:

```bash
# Instalar concurrently globalmente
npm install -g concurrently

# Desde la raíz del proyecto
concurrently "cd mf-productos && npm start" "cd mf-usuarios && npm start" "cd shell && npm start"
```

---

## 📁 Estructura del Proyecto

```
microfrontends-proyecto/
│
├── mf-productos/                    # Microfrontend de Productos
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── CardProducto.jsx    # Componente estilizado
│   │   │   └── BotonComprar.jsx    # Componente estilizado
│   │   ├── App.jsx                 # Componente principal
│   │   ├── index.js                # Punto de entrada
│   │   └── index.css               # Reset CSS básico
│   ├── package.json
│   └── webpack.config.js           # Configuración Module Federation
│
├── mf-usuarios/                     # Microfrontend de Usuarios
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── PerfilUsuario.jsx   # Componente estilizado
│   │   │   └── BotonEditar.jsx     # Componente estilizado
│   │   ├── App.jsx                 # Componente principal
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── webpack.config.js
│
├── shell/                           # Aplicación Contenedora
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── manifest.json
│   ├── src/
│   │   ├── App.jsx                 # Integra los microfrontends
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── webpack.config.js           # Define remotes
│
├── .gitignore
└── README.md
```

---

## ✨ Características

### Aislamiento de Estilos

- ✅ **Scoped CSS**: Styled Components genera clases únicas (ej: `sc-bczRLJ`)
- ✅ **Sin colisiones**: Componentes con nombres similares no interfieren entre sí
- ✅ **CSS-in-JS**: Los estilos viven junto al código del componente
- ✅ **Tree-shaking**: Solo se incluyen estilos utilizados

### Funcionalidades Implementadas

#### Microfrontend Productos
- Catálogo de productos con grid responsive
- Tarjetas de producto con hover effects
- Botón "Agregar al Carrito" con notificaciones
- Gradiente azul/morado característico

#### Microfrontend Usuarios
- Perfiles de usuario con avatares dinámicos
- Estadísticas de compras y puntos
- Modal de edición de perfil
- Gradiente rosa/rojo característico

#### Shell
- Navegación entre microfrontends
- Tres vistas: Productos, Usuarios, Ambos
- Panel informativo sobre la arquitectura
- Carga dinámica con `React.lazy` y `Suspense`

---

## 🔍 Verificación del Aislamiento

Para comprobar que los estilos están aislados:

### 1. Inspeccionar el DOM

1. Abre la aplicación en `http://localhost:3000`
2. Presiona `F12` para abrir DevTools
3. Ve a la pestaña **Elements**
4. Inspecciona un botón de "Agregar al Carrito" (Productos)
5. Inspecciona un botón de "Editar Perfil" (Usuarios)

Verás clases CSS únicas:

```html
<!-- Microfrontend Productos -->
<button class="sc-bczRLJ kLmPxQ">Agregar al Carrito</button>

<!-- Microfrontend Usuarios -->
<button class="sc-gsnTZi fWXyeL">Editar Perfil</button>
```

### 2. Verificar en la pestaña Styles

Observa que cada componente tiene sus estilos encapsulados sin afectar a otros.

### 3. Cambiar estilos en tiempo real

1. Modifica el color de `BotonComprar` en `mf-productos/src/components/BotonComprar.jsx`
2. Guarda el archivo
3. Verifica que `BotonEditar` en el microfrontend de usuarios **NO se afecta**

---

## 🐛 Problemas Comunes

### Error: "Cannot find module 'mfProductos/App'"

**Causa**: El shell intenta cargar microfrontends que no están corriendo.

**Solución**: 
```bash
# Asegúrate de iniciar los microfrontends PRIMERO
cd mf-productos && npm start
cd mf-usuarios && npm start
# LUEGO el shell
cd shell && npm start
```

### Error: "Module not found: Can't resolve 'web-vitals'"

**Solución**:
```bash
npm install web-vitals
```

### Error: "URIError: Failed to decode param '%PUBLIC_URL%'"

**Causa**: Variables de entorno en `public/index.html`

**Solución**: Reemplaza en `index.html`:
```html
<!-- ANTES -->
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />

<!-- DESPUÉS -->
<link rel="icon" href="/favicon.ico" />
```

### Error de CORS

**Causa**: Políticas de seguridad del navegador.

**Solución**: Ya está configurado en `webpack.config.js`:
```javascript
headers: {
  'Access-Control-Allow-Origin': '*',
}
```

### Puerto ya en uso

**Solución**:
```bash
# Linux/Mac
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

---



