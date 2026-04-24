# Stack técnico

## Core

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | Next.js (App Router) | 15.1.7 |
| UI | React + React DOM | 19.0.0 |
| Componentes | PrimeReact + Primeicons | 10.9.2 / 7.0.0 |
| Estilos | Tailwind CSS + Tailwind Variants | 3.4.1 / 0.3.1 |
| HTTP | Axios | 1.7.9 |
| Validación | Zod | 3.24.2 |
| Cookies | js-cookie | 3.0.5 — solo para cookies no-httpOnly (user, menus, permissions) |
| Lenguaje | TypeScript | 5 (strict) |

## Dev tooling

- **Dev server:** Turbopack, puerto **4000** (`npm run dev`)
- **Linting:** ESLint 9, config `next/core-web-vitals` + `next/typescript`
- **CSS:** PostCSS con `postcss-nesting`
- **Build:** `npm run build` / `npm run start`

## Variables de entorno

Archivo de referencia: `example.env` → copiar a `.env.local`

```env
NEXT_PUBLIC_APP_ENV=local
NEXT_PUBLIC_API_SALES=https://localapisales.sanking.com/api/v1
API_SALES_INTERNAL=http://sales-system-backend_backend:3000/api/v1
NEXT_PUBLIC_COOKIE_NAME_SESSION=access_token
NEXT_PUBLIC_APP_URL=https://localsales.sanking.com
NEXT_PUBLIC_IDLE_MINUTES=15
NEXT_PUBLIC_IDLE_WARNING_MINUTES=2
```

- `NEXT_PUBLIC_API_SALES` — Base URL del backend para el browser (HTTPS)
- `API_SALES_INTERNAL` — Base URL del backend para server-side (HTTP directo al contenedor, sin SSL)
- `NEXT_PUBLIC_COOKIE_NAME_SESSION` — Nombre de la cookie httpOnly del JWT (default: `access_token`)
- `NEXT_PUBLIC_APP_URL` — URL pública del frontend
- `NEXT_PUBLIC_IDLE_MINUTES` — Minutos de inactividad antes de cerrar sesión (default: 15)
- `NEXT_PUBLIC_IDLE_WARNING_MINUTES` — Minutos antes del cierre en que aparece el modal de advertencia (default: 2)

Todas las variables están centralizadas en `src/config/env.ts`. Nunca usar `process.env` directamente.

## Path aliases (tsconfig)

```
@/*           → src/*
@components/* → src/components/*
@interfaces/* → src/interfaces/*
@utils/*      → src/utils/*
@libs/*       → src/libs/*
@contexts/*   → src/contexts/*
@hooks/*      → src/hooks/*
@validations/*→ src/validations/*
@configs/*    → src/configs/*
@templates/*  → src/templates/*
@helpers/*    → src/helpers/*
@constants/*  → src/constants/*
@locale/*     → src/locale/*
```
