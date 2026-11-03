# Feliz cumpleaños · recorrido con el nene

Página interactiva con una línea del tiempo, dos secciones especiales y decoración de estrellas, lunas y soles. No necesita instalar nada.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Estructura de la página. Normalmente no hace falta tocarlo. |
| `style.css` | Colores y diseño (azul, rosita y gris oscuro). |
| `script.js` | **Aquí editas todo el contenido** (textos, fechas, fotos). |
| `assets/` | Carpeta donde pones tus fotos. |

## Cómo abrirla

Haz doble clic en `index.html`.

## Cómo cambiar el contenido

Abre `script.js` con VS Code o el Bloc de notas. Al inicio está la sección `CONTENIDO`, con comentarios que te guían.

- **Textos de la portada**: bloque `inicio`.
- **Letreritos**: en el bloque `inicio`, la línea `aviso` es el texto que aparece arriba del botón de iniciar; `avisoLinea` (justo debajo, en `CONTENIDO`) es el que aparece debajo de "Nuestro recorrido". Tienen el mismo estilo que los textos chiquitos de la portada. Déjalos en `""` para quitarlos.
- **Momentos de la línea del tiempo**: cada `{ tipo: "momento", ... }` tiene `fecha`, `titulo`, `texto` e `imagen`. Copia y pega un bloque para agregar más; bórralo para quitar uno.
- **Momento centrado**: si a un momento le agregas `centrado: true,` sale en el centro de la línea en vez de a un lado (así está el último, "Hoy es el Cumpleaños del Nene..."). Conviene dejarlo al final, justo arriba del texto "Y aún faltan muchas cosas por vivir...".
- **Botones laterales**: los bloques `{ tipo: "boton", ... }`. Muévelos de lugar en la lista para que aparezcan antes o después. `lado` puede ser `"izquierda"` o `"derecha"`.
- **Secciones a las que llevan los botones**: bloque `secciones` → `datos` ("Datos interesantes del nene") y `sabias` ("¿Sabías que...?"). Puedes cambiar sus textos, la lista de datos y su imagen.

- **Saltos de línea** en el `texto` de una sección (como la letra de la canción): escribe `\n` donde quieras que empiece un renglón nuevo, y `\n\n` para dejar un renglón vacío. Ejemplo: `texto: "Primer renglón\nSegundo renglón"`.

Guarda con Ctrl+S y recarga el navegador con F5.

## Cómo poner fotos

1. Copia tu foto a la carpeta `assets` (por ejemplo `foto1.jpg`).
2. En `script.js`, escribe `imagen: "assets/foto1.jpg"`.

Si `imagen` está vacío o el nombre no coincide (ojo con mayúsculas y con extensiones ocultas como `foto1.jpg.jpg`), se muestra un cuadro que dice "Aquí va tu foto" y la página sigue funcionando.

## Botón "Volver"

Al abrir una sección especial aparece el botón **← Volver**, que te regresa a la línea del tiempo en el mismo lugar donde estabas.

## Álbum de cada recuerdo ("Ver más fotos")

Cada recuerdo de la línea del tiempo tiene, junto a la fecha, un botón **Ver más fotos** que abre un mini álbum encima de la página. Se puede pasar de foto con las flechas, con las miniaturas, con las flechas del teclado o deslizando el dedo en el celular. Se cierra con la **✕**, con **Esc** o tocando fuera de la ventana, y la línea del tiempo queda exactamente donde estaba.

Para agregar fotos a un recuerdo:

1. Copia las fotos a la carpeta `assets` (por ejemplo `album9-2.jpg`).
2. En `script.js`, busca ese recuerdo y agrega las fotos a su lista `album`, separadas por comas:

```js
album: [
  "assets/album9-1.jpg",
  "assets/album9-2.jpg",
  { src: "assets/album9-3.jpg", texto: "Esta tiene un texto abajo" }
]
```

- Si no recuerdas la extensión (.jpg, .png, .webp...), la página prueba las otras sola.
- Si un recuerdo tiene `album: []` (vacío), el botón sigue ahí y el álbum muestra "Aquí van las fotos de este recuerdo".
- El texto del botón se cambia en `botonAlbum`, al inicio de `CONTENIDO`.

## Video del final

Al terminar la línea del tiempo hay un recuadro centrado con un reproductor de video.

1. Copia tu video a la carpeta `assets` (el de prueba se llama `hola.mp4`; puedes reemplazarlo con el tuyo usando el mismo nombre).
2. Si tu archivo se llama distinto, cámbialo en `script.js`, bloque `video` → `archivo`. Ahí mismo cambias el `titulo` y, si quieres, una `portada` (imagen antes de darle play).
3. Para ocultar el recuadro, deja `archivo: ""`.

Si el video es **vertical** (como los de celular), el recuadro se adapta solo: se hace angosto y alto, sin barras negras a los lados. Si es horizontal, queda ancho como siempre.

Usa un MP4 (H.264 con audio AAC), que es lo que abre cualquier navegador. Si el video no carga, el recuadro muestra un aviso en vez de romperse. El video se pausa solo si abres un álbum o una sección especial.

## Colores

Los colores principales están en las variables al inicio de `style.css` (`:root`): `--fondo` (fondo de la página), `--carta-fondo` y `--carta-borde` (tarjetas), `--carta-texto` y `--carta-titulo` (letras), `--estrella`, `--luna` y `--sol-deco` (figuras del fondo) y `--fuente-carta` (letra de los títulos).

## Ondas de sonido

Mientras suena la música aparecen, a los lados de la pantalla, unas barras blancas que se mueven como ondas de sonido, con partículas pequeñas que salen de ellas y se desvanecen a los 2 segundos. Al pausar o silenciar la música se apagan solas, y con más volumen se ven un poco más grandes.

Son decorativas: se mueven al ritmo de un patrón propio, no al ritmo exacto de la canción (leer el audio real no funciona de forma confiable al abrir `index.html` directamente desde la carpeta).

Se ajustan en `script.js`, en el bloque `ONDAS` (antes de la parte de lógica): `activas` (false para quitarlas), `color` (RGB), `largoMax`, `grosor`, `particulas` (0 = ninguna) y `duracionParticulas` (en milisegundos). Si tu sistema tiene activada la opción de reducir animaciones, no se muestran.

## Botón de sonido (silenciar)

El botón 🔊 del control de volumen silencia la música; al volver a presionarlo la quita del silencio con el mismo volumen que tenía. Si bajas la barra hasta cero y luego presionas el botón, también regresa el sonido. La música empieza al 30 %; para cambiarlo, edita `VOLUMEN_INICIAL` en `script.js` (0.3 = 30 %, 0.5 = 50 %).

## JumpScare

Debajo del recuerdo de terror hay una pestaña **JumpScare..**. Abre un cuadro con un botón rojo y el texto "Presiona para jumpscare"; al presionarlo empieza una cuenta regresiva 3, 2, 1 y la imagen va apareciendo poco a poco a pantalla completa (tarda 5 segundos en verse completa) con un botón **✕ Cerrar** (también se cierra con Esc). Después queda listo para usarse otra vez, y si presionas **← Volver** durante la cuenta, se cancela.

- La imagen se cambia en `script.js`, bloque `secciones` → `jumpscare` → `imagen` (por defecto `assets/jumpscare.jpg`; copia tu imagen a `assets`).
- El tiempo en que se va viendo la imagen se cambia en `apareceEn` (en milisegundos: 5000 = 5 segundos).
- Opcional: en `sonido` puedes poner un audio (por ejemplo `"assets/grito.mp3"`) que suena junto con la imagen.
- El título del cuadro, el texto de la pestaña y el ícono también se cambian ahí. Para moverla de lugar o de lado, cambia su bloque `{ tipo: "boton", destino: "jumpscare", ... }` en la lista `linea`.
