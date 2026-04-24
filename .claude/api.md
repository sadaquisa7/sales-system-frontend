# Integración con el backend

## Base URL

```
NEXT_PUBLIC_API_SALES=https://localapisales.sanking.com/api/v1
```

## Clientes HTTP

### Axios — `src/libs/axios/`

Uso principal: componentes cliente, servicios del navegador.

- `withCredentials: true` — el browser envía la httpOnly cookie automáticamente
- Sin interceptor de request (no agrega Bearer manual)
- **Interceptor de response** para refresh token automático:
  - 401 en endpoint protegido → `GET /auth/refresh-token` → reintenta la request
  - Si refresh falla → redirect a `/login`
  - No intenta refresh si el 401 viene de `/auth/login` o `/auth/refresh-token`
- Timeout: 10 segundos

### Fetch wrapper — `src/libs/fetch/base.lib.ts`

Uso principal: server-side (Edge middleware, Server Components).

- Usa `API_SALES_INTERNAL` (HTTP directo al contenedor backend, sin SSL)
- Factory `createHttpClient(baseUrl)`
- Headers manuales
- Más adecuado para entornos sin `document.cookie`

## Formato de respuesta estándar

```typescript
interface ApiResponse<D> {
  status: boolean
  message: string | object
  data?: D | Paginated<D>
  code: number | string
}

interface Paginated<I> {
  items: I[]
  total: number
  page: number
  limit: number
}
```

## Servicios disponibles

| Servicio | Archivo | Endpoint base | Notas |
|----------|---------|--------------|-------|
| AuthService | `auth.service.ts` | `/auth` | `login`, `me`, `logout`, `refresh-token`, `updateProfile`, `verifyPassword` |
| UsersService | `users.service.ts` | `/users` | BaseService |
| RolesService | `roles.service.ts` | `/roles` | BaseService |
| PermissionsService | `permissions.service.ts` | `/permissions` | BaseService |
| SessionsService | `sessions.service.ts` | `/sessions` | `listAll` |
| CategoriesService | `catalog/categories.service.ts` | `/categories` | BaseService |
| UnitsService | `catalog/units.service.ts` | `/units` | BaseService — usa `abbreviation` (no `description`) |
| ClientsService | `clients.service.ts` | `/clients` | BaseService |
| ProductsService | `products.service.ts` | `/products` | BaseService |
| SectorsService | `catalog/sectors.service.ts` | `/sectors` | BaseService |
| ServicesService | `services.service.ts` | `/services` | BaseService |
| InventoryService | `inventory.service.ts` | `/inventories` | BaseService — ruta plural con "ies", sin edit |
| MenusService | `menus.service.ts` | `/menus` | BaseService |

## Query params

`src/utils/services/queryParams.ts` — Utilidad para construir query strings para filtros y paginación en los listados.

## Headers estándar

```
Content-Type: application/json
Cookie: access_token=<jwt>  ← enviado automáticamente por el browser (httpOnly)
```
