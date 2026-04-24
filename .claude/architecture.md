# Arquitectura del proyecto

## Estructura de carpetas

```
src/
├── app/
│   ├── (admin)/              # Rutas protegidas — requieren auth
│   │   ├── page.tsx          # Dashboard home
│   │   ├── users/
│   │   │   ├── list/
│   │   │   ├── create/
│   │   │   └── edit/[id]/
│   │   ├── roles/
│   │   │   ├── list/
│   │   │   ├── create/
│   │   │   └── edit/[id]/
│   │   ├── permissions/
│   │   │   ├── list/
│   │   │   ├── create/
│   │   │   └── edit/[id]/
│   │   ├── sessions/
│   │   │   └── list/
│   │   └── profile/
│   │       └── config/
│   └── (guest)/
│       └── login/            # Página pública
├── components/               # Componentes UI reutilizables
├── configs/                  # Config de formularios y módulos de seguridad
├── constants/                # Constantes de la app
├── contexts/                 # React Context providers
├── helpers/                  # Procesamiento de cookies
├── hooks/                    # Custom hooks
├── interfaces/               # TypeScript interfaces/types
├── libs/
│   ├── axios/                # Cliente Axios con interceptor
│   └── fetch/                # Cliente Fetch (server-side)
├── locale/                   # Archivos de localización (i18n)
├── middlewares/              # Handlers del middleware Edge
├── services/                 # Capa de servicios API
├── templates/                # Templates de páginas por feature
├── utils/                    # Utilidades transversales
├── validations/              # Schemas Zod
└── middleware.ts             # Middleware Edge principal
```

## Módulos del sistema

| Módulo | Ruta | Descripción |
|--------|------|-------------|
| Dashboard | `/` | Home del panel |
| Users | `/users` | CRUD usuarios con roles y permisos |
| Roles | `/roles` | CRUD roles con asignación de permisos |
| Permissions | `/permissions` | CRUD de permisos individuales |
| Sessions | `/sessions/list` | Listado de sesiones activas |
| Profile | `/profile/config` | Edición de nombre y contraseña |

## Convenciones de naming

| Tipo | Patrón de archivo | Ejemplo |
|------|------------------|---------|
| Componente | `ComponentName.component.tsx` | `InputText.component.tsx` |
| Servicio | `entity.service.ts` | `users.service.ts` |
| Interface | `entity.interface.ts` | `user.interface.ts` |
| Contexto | `context.context.tsx` | `auth.context.tsx` |
| Hook | `useHookName.ts` | `useAuth.ts` |
| Validación | `entity.validation.ts` | `user.validation.ts` |
| Template | `index.tsx` en carpeta feature | `templates/users/list/index.tsx` |

## Patrón page → template → component

Las páginas en `app/` son minimalistas — solo importan el template correspondiente:

```
app/(admin)/users/list/page.tsx
  └── templates/users/list/index.tsx   ← lógica + layout de la feature
        └── components/...             ← componentes UI reutilizables
```

## BaseService pattern

Todos los servicios extienden `BaseService<TData, TCreate>` con métodos genéricos:
`list`, `all`, `edit`, `delete`, `state`, `create`, `update`
