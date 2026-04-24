# Autenticación y autorización

## Flujo completo

```
HTTP Request
    │
    ▼
middleware.ts (Edge)
    ├── path === /login ──→ GuestMiddleware
    │                          └── tiene cookie? → redirect /
    │                          └── no tiene cookie? → continúa a /login
    │
    └── cualquier otra ruta → AuthMiddleware
            │
            ├── no hay cookie session_token → redirect /login
            │
            └── hay token → llama authService.me() via API_SALES_INTERNAL (HTTP interno)
                    ├── error / token inválido → redirect /login
                    └── OK → enriquece cookies (user, menus, permissions)
                                │
                                ▼
                           Siguiente handler
```

## Cookies manejadas

| Cookie | Contenido | Quien la escribe |
|--------|-----------|-----------------|
| `access_token` | JWT de autenticación — **httpOnly** | Backend (login/refresh-token) |
| `user` | Datos del usuario serializado | Middleware tras `me()` |
| `menus` | Estructura de menús del usuario | Middleware tras `me()` |
| `permissions` | Array de permission codes | Middleware tras `me()` |

- `access_token` es httpOnly — no accesible por JS, el browser la envía automáticamente
- El nombre es configurable via `NEXT_PUBLIC_COOKIE_NAME_SESSION` (default: `access_token`)
- NO usar `js-cookie` para leer/escribir/borrar `access_token`

## AuthContext

Disponible en toda la app via `useAuth()`:

```typescript
{
  user: User | null
  menus: MenuItem[]
  permissions: string[]      // códigos de permisos: ["users.create", "roles.edit", ...]
  setUser(user)
  setMenus(menus)
  setPermissions(permissions)
  logout()                   // limpia todas las cookies de auth + redirect
}
```

El estado se hidrata desde las cookies del servidor en el layout raíz.

## Helpers relevantes

- `src/helpers/` — Parsing de cookies desde headers del servidor
- `src/utils/auth.ts` — Utilidades de autenticación (acceso a cookies client-side)
- `src/middlewares/` — `guest.middleware.ts`, `auth.middleware.ts`, `authorization.middleware.ts`
