# Componentes, contextos y patterns UI

## Componentes reutilizables — `src/components/`

### Form inputs

| Componente | Descripción |
|-----------|-------------|
| `InputText.component.tsx` | Input de texto con label y error |
| `InputPassword.component.tsx` | Campo de contraseña con toggle |
| `InputNumber.component.tsx` | Input numérico |
| `InputTextarea.component.tsx` | Área de texto |
| `InputSwitch.component.tsx` | Toggle switch |
| `SelectSimple.component.tsx` | Select con una opción |
| `SelectMultiple.component.tsx` | Select múltiple |
| `Calendar.component.tsx` | Date picker (PrimeReact) |

### Layout

| Componente | Descripción |
|-----------|-------------|
| TopNav | Barra de navegación superior (admin) |
| SideMenu | Menú lateral (admin) |
| Guest layout | Layout para páginas públicas |

### Feedback

| Componente | Descripción |
|-----------|-------------|
| `Toast.component.tsx` | Notificaciones toast (PrimeReact) |
| Loading spinner | Overlay de carga global |
| Error components | Páginas/mensajes de error |

### Data

| Componente | Descripción |
|-----------|-------------|
| `DataTable.component.tsx` | Tabla con filtros, paginación y ordenamiento |

## Context providers

### `AuthContext` — `useAuth()`

```typescript
{ user, menus, permissions, setUser, setMenus, setPermissions, logout }
```

### `LoadingContext` — `useLoading()`

```typescript
{ isLoading, showLoading(), hideLoading(), setLoading(bool) }
```
Muestra un overlay de spinner global.

### `ToastContext` — `useToast()`

```typescript
{ success(msg), info(msg), warn(msg), error(msg), secondary(msg), contrast(msg), removeToast() }
// Duración default: 3000ms | Posición default: top-right
```

### `IsOpenMenuMobileProvider`

Estado del menú mobile (abrir/cerrar sidebar en mobile).

## Validaciones — `src/validations/`

Todos los formularios usan **Zod** para validación en cliente:

- `login.validation.ts` — email + password
- `user.validation.ts` — name, email, password, roles[], permissions[]
- `role.validation.ts` — name, permissions[]
- `permission.validation.ts` — name, code
- `profile.validation.ts` — name, current password, new password

## Tailwind — colores custom

El `tailwind.config.ts` define la paleta de la app:
- `green-*`, `blue-*`, `gray-*`, `red-*` con variantes propias (no son los defaults de Tailwind)
- Utilidades de altura para compensar el navbar (`h-screen-navbar`)
