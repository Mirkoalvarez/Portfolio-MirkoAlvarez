# 🌐 Mirko Alvarez — Portfolio

Portfolio personal desarrollado con **React**, **TypeScript**, **Tailwind CSS v4** y **Framer Motion**. Un sitio minimalista, moderno y responsive que presenta mi perfil profesional, stack tecnológico, proyectos destacados y formulario de contacto.

![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)

---

## ✨ Características

- **Hero Section** — Presentación minimalista con animaciones de gradiente y partículas sutiles
- **Sobre Mí & Stack** — Bio profesional con skills organizados en 3 categorías (Frontend, Backend & DB, DevOps & Tooling)
- **Proyectos Destacados** — Cards interactivas con hover overlay, tags tecnológicos y links a código/demo
- **Contacto** — Formulario funcional con validación y feedback visual
- **Navegación fluida** — Scroll spy, smooth scroll entre secciones y menú mobile animado
- **Diseño premium** — Paleta custom (Navy, Petrol, Amber, Cream), tipografía Instrument Serif + Barlow, glassmorphism
- **Mobile First** — 100% responsive en todos los dispositivos
- **Animaciones** — Reveal on scroll, micro-interacciones y transiciones suaves con Framer Motion

---

## 🛠️ Tech Stack

| Área | Tecnología |
|------|-----------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 8 |
| **Estilos** | Tailwind CSS v4 |
| **Animaciones** | Framer Motion |
| **Iconos** | React Icons (Simple Icons + Heroicons) |
| **Fuentes** | Instrument Serif (headings) · Barlow (body) |

---

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.tsx       # Navegación con scroll spy + menú mobile
│   ├── Footer.tsx       # Footer con social links
│   ├── SectionReveal.tsx # Animación de reveal on scroll
│   ├── SectionHeading.tsx # Heading reutilizable con label badge
│   └── CustomCursor.tsx  # Cursor personalizado
├── pages/               # Secciones principales del sitio
│   ├── Hero.tsx         # Sección de presentación
│   ├── About.tsx        # Bio + Stack tecnológico
│   ├── Projects.tsx     # Proyectos destacados
│   └── Contact.tsx      # Formulario de contacto
├── data/                # Datos editables en JSON
│   ├── profile.json     # Datos personales (nombre, bio, links)
│   ├── skills.json      # Stack tecnológico por categoría
│   └── projects.json    # Proyectos destacados
├── App.tsx              # Componente raíz
├── main.tsx             # Entry point
└── index.css            # Theme de Tailwind + utilidades custom
```

---

## 🚀 Getting Started

### Prerequisites

Asegurate de tener instalado:

- **[Node.js](https://nodejs.org/)** (v18 o superior) — incluye NPM
- **[Git](https://git-scm.com/)** — para clonar el repositorio

### Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/mirkoalvarez/portfolio-mirko.git
cd portfolio-mirko
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Iniciar el servidor de desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

```
http://localhost:5173
```

### Build de producción

```bash
npm run build
npm run preview
```

---

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| **Navy** | `#1F3A44` | Fondo principal |
| **Petrol** | `#3A6D7E` | Fondo secundario / cards |
| **Amber** | `#EBB068` | Acentos / CTAs |
| **Cream** | `#F9F4E8` | Texto / títulos |

---

## 📝 Personalización

Todos los datos del sitio se manejan desde archivos JSON en `src/data/`:

- **`profile.json`** → Nombre, bio, email, links de redes sociales
- **`skills.json`** → Stack tecnológico organizado por categoría
- **`projects.json`** → Proyectos con descripción, tags y links

---

## 📄 Licencia

Este proyecto es de uso personal. Si querés usar la estructura como base para tu propio portfolio, sentite libre de hacerlo dando crédito.

---

<p align="center">
  Desarrollado por <strong>Mirko Alvarez</strong> · 
  <a href="https://linkedin.com/in/mirko-alvarez">LinkedIn</a> · 
  <a href="https://github.com/mirkoalvarez">GitHub</a>
</p>
