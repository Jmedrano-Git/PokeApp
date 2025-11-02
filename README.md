# 🧩 PokéApp – Proyecto React con PokeAPI

### Equipo Chiribayas 10:
- Jefferson Bautista
- Carlos Valeriano
- Julio Medrano

## 📖 Descripción del Proyecto
PokéApp es una aplicación web desarrollada con **React + Vite** que permite explorar, buscar y filtrar Pokémon utilizando la **PokeAPI**. Este proyecto implementa una arquitectura con componentes reutilizables, hooks  y un diseño responsive con **Bootstrap 5**. El objetivo es demostrar el dominio de tecnologías modernas del ecosistema React y las buenas prácticas en el consumo de APIs públicas.

Los usuarios pueden:
- Visualizar una lista paginada de Pokémon.
- Buscar por nombre o filtrar por tipo.
- Ver Pokémon destacados en la página principal.
- Enviar mensajes desde un formulario de contacto validado.
- Navegar fácilmente entre páginas.

---

## 🌐 API Utilizada
**[PokeAPI](https://pokeapi.co/)**  
API pública y gratuita que proporciona información detallada sobre Pokémon, habilidades, tipos y estadísticas.

Ejemplo de endpoint utilizado:
https://pokeapi.co/api/v2/pokemon?limit=20&offset=0

El consumo se maneja desde el servicio `src/services/pokemonService.js` utilizando Axios.

---
###🔧 Requisitos Previos
- Node.js Versión LTS recomendado por soporte o superior
- npm (gestor de paquetes de Node)

---

## Estructura del Proyecto

```
src/
│
├── components/
│   ├── common/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── ErrorAlert.jsx
│   ├── home/
│   │   ├── HeroSection.jsx
│   │   └── PopularSection.jsx
│   ├── list/
│   │   ├── EntityCard.jsx
│   │   ├── FilterBar.jsx
│   │   └── Pagination.jsx
│   └── contact/
│       └── ContactForm.jsx
│
├── hooks/
│   ├── usePokemons.js
│   └── useEntity.js
│
├── pages/
│   ├── HomePage.jsx
│   ├── ListPage.jsx
│   ├── ContactPage.jsx
│   └── NotFound.jsx
│
├── services/
│   ├── api.js
│   └── pokemonService.js
│
├── App.jsx
└── main.jsx


```
---

### 📦 Instalación
```
# Clonar el repositorio
git clone https://github.com/tuusuario/pokeapp.git

# Entrar al proyecto
cd pokeapp

# Instalar dependencias
npm install

npm install react-router-dom axios bootstrap

# Ejecución
npm run dev

# Abrir en el Navegador
http://localhost:5173

```
---
## Proyecto Corriendo

<img width="1262" height="696" alt="image" src="https://github.com/user-attachments/assets/26c1f4b5-36fe-4877-a809-9ba1a62e9fcf" />

## Deployment

https://pokeappchi10.netlify.app/


