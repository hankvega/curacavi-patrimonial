# Curacaví Patrimonial — Maqueta

Maqueta del sitio web del proyecto **"Curacaví: la historia de una comunidad"**
(Fondo del Patrimonio Cultural, Región Metropolitana). Astro + Tailwind CSS.

## Requisitos
- Node.js 18+

## Uso
```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Despliegue en Cloudflare Pages
1. Subir el repo a GitHub (ya conectado en VSCode).
2. En Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Configuración de build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Cloudflare genera la URL `*.pages.dev` y conecta el dominio
   `curacavipatrimonial.cl` desde **Custom domains** (DNS gestionado por Cloudflare).

## Estructura
```
src/
  components/   Logo, Header (con buscador), Footer, EpisodeCard, Map (SVG interactivo)
  layouts/      Base.astro
  pages/        index, episodios (lista + [slug] con ficha patrimonial),
                patrimonio (mapa), comunidad, material-educativo
  data/         episodes.json (los 10 episodios)
public/         imágenes y assets
```

## Diseño
- Paleta: pitch-black, mahogany-red, camel, faded-copper y crushed-berry (definidas en `src/styles/global.css`).
- Logo propio: estilo imprenta tipográfica (C con estandarte rojo y diana). Masthead centrado en el inicio; al hacer scroll aparece la barra con menú sándwich (overlay a pantalla completa).
- Buscador en el header y en el listado de episodios (filtro cliente).
- Mapa interactivo SVG con pines por episodio (reemplazable por Leaflet/OpenStreetMap).
- Los videos se embeben desde YouTube; contenidos bajo CC BY-NC.
