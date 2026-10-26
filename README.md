# PILOT ARGENTINA

Web de la Cra. Alejandra Galloni, Contadora Pública (T° 371 F° 227 · CPCECABA).
Hecha con React + Vite. Se publica sola en GitHub Pages cada vez que se sube un cambio a `main`.

## Cambiar textos, packs o precios

Todo lo editable está en **`src/config.js`**:

- `WHATSAPP`: número de WhatsApp (formato 549 + característica + número, sin espacios).
- `GRUPOS`: los botones de filtro.
- `PACKS`: cada pack (título, subtítulo, qué recibís, precio, mensaje de WhatsApp).
- `MOSTRAR_PRECIOS`: `false` muestra "Consultar honorarios"; `true` muestra los precios.

Para agregar un pack, copiá uno de la lista, cambiale el `id` y los textos.

El aviso legal está en **`src/legal.js`**. La foto es **`public/foto-alejandra.jpg`** (reemplazala por otra con el mismo nombre).

Desde GitHub: abrí el archivo, tocá el lápiz (Edit), cambiá el texto y tocá "Commit changes". En 1 o 2 minutos la web se actualiza.

## Dominio

La dirección pública está en **`.env`** (`VITE_SITE_URL`). Se usa para la vista previa al compartir en redes.

## Trabajar en la compu (opcional)

```
npm install
npm run dev
```
