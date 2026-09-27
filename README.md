# Consulta de Jubilaciones MPPE 2026

Página estática para GitHub Pages que permite consultar por número de cédula la lista de jubilaciones contenida en el PDF suministrado.

## Fuente de los datos

- **Documento:** JUBILACIONES DEL PERSONAL ADSCRITO AL MPPE
- **Resolución:** N.º 012 de fecha 24.08.2026
- **Gaceta Oficial:** N.º 43.451 de fecha 03.09.2026
- **Registros:** 4.912
- **Campos:** cédula, nombre y apellido, tipo de personal (D/O/A) y ubicación administrativa.

## Archivos

- `index.html` — página principal.
- `styles.css` — diseño responsive en azul celeste.
- `app.js` — búsqueda por cédula.
- `data/jubilados.json` — base de 4.912 registros.
- `assets/gd-logo.png` — logo aportado por el usuario.
- `assets/mppe-logo.svg` — versión SVG autocontenida del logotipo institucional para el encabezado.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube **todos los archivos y carpetas** de este proyecto a la raíz del repositorio.
3. Ve a **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
5. Guarda y espera a que GitHub Pages publique el sitio.

GitHub Pages busca `index.html` como archivo de entrada y publica archivos HTML/CSS/JavaScript estáticos desde el repositorio.

## Importante

GitHub Pages publica el contenido en Internet. Aunque esta página está configurada con `noindex` y `robots.txt` para desalentar la indexación, los datos del archivo JSON siguen formando parte del sitio público. Publica únicamente información que estés autorizado a difundir.
