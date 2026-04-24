# Sales System Frontend

Panel de administración del sistema de ventas Staff. Gestión de usuarios, roles, permisos y sesiones con autenticación basada en JWT.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 15.1.7 (App Router) |
| UI | React 19, PrimeReact 10.9, Tailwind CSS 3 |
| HTTP | Axios 1.7 + Fetch API (wrapper custom) |
| Validación | Zod 3.24 |
| Auth | JWT en cookie (`session_token`), middleware Edge |
| Lenguaje | TypeScript 5 (strict) |
| Dev server | Turbopack, puerto 4000 |

## Requisitos

- Node.js 20+
- npm / pnpm / yarn

## Setup

```bash
# 1. Clonar e instalar dependencias
npm install

# 2. Variables de entorno
cp example.env .env.local

# 3. Editar .env.local con los valores correctos
NEXT_PUBLIC_APP_ENV=local
NEXT_PUBLIC_API_SALES=https://localapisales.sanking.com/api/v1
NEXT_PUBLIC_COOKIE_NAME_SESSION=session_token
NEXT_PUBLIC_APP_URL=https://localsales.sanking.com

# 4. Correr en desarrollo
npm run dev
```

El servidor levanta en [http://localhost:4000](http://localhost:4000).

## Scripts

```bash
npm run dev      # Desarrollo con Turbopack (puerto 4000)
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # ESLint
```

## Estructura del proyecto

```
src/
├── app/
│   ├── (admin)/          # Rutas protegidas (requieren auth)
│   │   ├── page.tsx      # Dashboard
│   │   ├── users/        # CRUD usuarios
│   │   ├── roles/        # CRUD roles
│   │   ├── permissions/  # CRUD permisos
│   │   ├── sessions/     # Listado de sesiones
│   │   └── profile/      # Perfil del usuario
│   └── (guest)/
│       └── login/        # Login público
├── components/           # Componentes reutilizables (form, layout, table, toast)
├── contexts/             # React Context: auth, loading, toast, menu
├── hooks/                # Custom hooks
├── interfaces/           # TypeScript interfaces
├── libs/
│   ├── axios/            # Cliente HTTP Axios con interceptor de Bearer token
│   └── fetch/            # Cliente HTTP Fetch (server-side friendly)
├── middlewares/          # Handlers del middleware Edge (auth, guest, authorization)
├── services/             # Capa de servicios API (auth, users, roles, permissions, sessions)
├── validations/          # Schemas Zod
├── configs/              # Configuraciones de formularios y módulos de seguridad
├── constants/            # Constantes de la app
├── helpers/              # Procesamiento de cookies
├── utils/                # Utilidades (auth, datatable, query params, calendar)
├── templates/            # Templates de páginas (lógica + layout por feature)
├── locale/               # Archivos de localización
└── middleware.ts         # Middleware Edge principal
```

## Módulos principales

### Autenticación
- Login con email/password
- Token JWT almacenado en cookie `session_token`
- Middleware Edge valida el token en cada request via `GET /auth/me`
- Logout limpia las cookies de sesión, usuario, menús y permisos

### Usuarios
- CRUD completo con asignación de roles y permisos
- Listado con filtros y paginación

### Roles
- CRUD con asignación de permisos

### Permisos
- CRUD de permisos individuales

### Sesiones
- Listado de sesiones activas del sistema

### Perfil
- Edición de nombre y contraseña
- Verificación de contraseña actual antes de actualizar

## Autenticación y autorización

```
Request → middleware.ts
  ├── /login → GuestMiddleware (redirige si ya está autenticado)
  └── /* → AuthMiddleware → AuthorizationMiddleware
              ↓
        authService.me() con el token de la cookie
              ↓
        Enriquece cookies: user, menus, permissions
              ↓
        Respuesta o redirect a /login
```

Los permisos se almacenan como array de strings en `AuthContext` y se usan para controlar acceso a features.

## Integración con el backend

**Base URL:** `NEXT_PUBLIC_API_SALES`

**Headers:**
```
Authorization: Bearer <session_token>
Content-Type: application/json
```

**Formato de respuesta estándar:**
```typescript
{
  status: boolean;
  message: string | object;
  data?: T | { items: T[]; total: number; page: number; limit: number };
  code: number | string;
}
```

## Path aliases (tsconfig)

```
@/*           → src/*
@components/* → src/components/*
@interfaces/* → src/interfaces/*
@utils/*      → src/utils/*
@libs/*       → src/libs/*
@services/*   → src/services/*
@contexts/*   → src/contexts/*
@hooks/*      → src/hooks/*
@validations/*→ src/validations/*
@configs/*    → src/configs/*
@templates/*  → src/templates/*
@helpers/*    → src/helpers/*
@constants/*  → src/constants/*
@locale/*     → src/locale/*
```
