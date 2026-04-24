# Sales System Frontend — Claude Context

Panel de administración del sistema de ventas Staff (Joinnus).
Gestiona usuarios, roles, permisos y sesiones con autenticación JWT por middleware Edge.

## Módulos

- [stack.md](stack.md) — Framework, dependencias, scripts, variables de entorno
- [architecture.md](architecture.md) — Estructura de carpetas, routing, convenciones de naming
- [auth.md](auth.md) — Flujo de autenticación JWT, middleware Edge, cookies
- [api.md](api.md) — Clientes HTTP, formato de respuesta, servicios disponibles
- [components.md](components.md) — Componentes reutilizables, contexts, patterns

---

## Docker

Config en: `/home/sandro/Work-Projects/Staff/docker/projects/sales-system-frontend/`

```bash
# Desde el repo docker:
make up PROJECT=sales-system-frontend
make down PROJECT=sales-system-frontend
make logs PROJECT=sales-system-frontend
```

### Stack Docker

- **Imagen**: `node:22-bullseye` + usuario `appuser` (UID/GID del host)
- **Dev server**: `yarn dev --hostname 0.0.0.0` en puerto **4000** (Turbopack)
- **Nginx**: proxy reverso con SSL manual — certificados en `./nginx/certs/`
- **Red**: `app_network` (externa, aislada — no usa Traefik)
- **Dominio local**: `https://localsales.sanking.com`

### Variables de entorno (`.env` en el proyecto frontend)

```env
NEXT_PUBLIC_APP_ENV=local
NEXT_PUBLIC_API_SALES=https://localapisales.sanking.com/api/v1
NEXT_PUBLIC_COOKIE_NAME_SESSION=session_token
NEXT_PUBLIC_APP_URL=https://localsales.sanking.com
```

### Extra hosts configurado en docker-compose

El contenedor tiene mapeado `localapisales.sanking.com` → `10.101.0.5` para resolver el backend sin DNS externo.

### Estructura docker

```
projects/sales-system-frontend/
├── docker-compose.yml
├── node/
│   ├── Dockerfile          # node:22-bullseye + appuser
│   └── entrypoint.sh       # yarn dev --hostname 0.0.0.0
└── nginx/
    ├── default.conf        # SSL + proxy_pass → node:4000
    └── certs/              # localsales.sanking.com.pem + key.pem
```
