# 🎵 Spinify — Vinyl Store

E-commerce especializado en la venta de discos de vinil, construido como proyecto individual fullstack. Spinify nació de la idea de que la música merece ser tuya — no solo en streaming, sino en formato físico y con identidad propia.

![Tech Stack](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?style=flat-square&logo=tailwindcss)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=flat-square&logo=postgresql)

---

## ✨ Funcionalidades

- 🛍️ Catálogo de productos con filtrado por categorías
- 🔍 Vista de detalle por producto con rutas dinámicas (`/product/[idProduct]`)
- 🛒 Carrito de compras con persistencia y suma de múltiples unidades
- 👤 Registro e inicio de sesión de usuarios
- 📋 Dashboard de usuario con historial de actividad
- ✅ Flujo de checkout simulado
- 🎨 Interfaz oscura con diseño editorial inspirado en la cultura del vinil

---

## 🛠️ Stack Tecnológico

| Área | Tecnología |
|------|-----------|
| Frontend | Next.js 15 (App Router), React, TypeScript |
| Estilos | Tailwind CSS |
| Backend | Node.js / Express |
| Base de datos | PostgreSQL |
| Arquitectura | Fullstack monorepo (`/front` + `/back`) |

---

## 📁 Estructura del proyecto

```
spinify-vinyl-store/
├── front/
│   └── src/app/
│       ├── components/      # Componentes reutilizables
│       ├── context/         # Estado global del carrito y usuario
│       ├── Services/        # Llamadas a la API
│       ├── helpers/         # Funciones utilitarias
│       ├── interface/       # Tipos TypeScript
│       ├── home/            # Página principal
│       ├── products/        # Catálogo de productos
│       ├── product/[idProduct]/ # Detalle de producto (ruta dinámica)
│       ├── cartPage/        # Carrito de compras
│       ├── checkout/        # Flujo de pago
│       ├── dashboard/       # Panel de usuario
│       ├── login/           # Autenticación
│       └── register/        # Registro de usuarios
└── back/                    # API REST con Node.js y PostgreSQL
```

---

## 🚀 Instalación y uso local

### Prerrequisitos
- Node.js 18+
- PostgreSQL

### Frontend

```bash
cd front
npm install
npm run dev
```

### Backend

```bash
cd back
npm install
# Configura tu archivo .env con las variables de entorno
npm run dev
```

### Variables de entorno (`.env`)

```env
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/spinify
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

## 📸 Capturas de pantalla

![Home](../screenshots/home.png)
![Best Sellers](../screenshots/best-sellers.png)
![Checkout](../screenshots/checkout.png)
![Pasarela de pago](../screenshots/pasarela.png)
![Perfil de usuario](../screenshots/perfil.png)

---

## 👩‍💻 Desarrolladora

**Jenifer Villanueva** — Frontend Developer  
[LinkedIn](https://www.linkedin.com/in/jenifer-villanueva) · [GitHub](https://github.com/JeniferVM)

---

> Proyecto individual desarrollado durante el bootcamp Henry (2025).
