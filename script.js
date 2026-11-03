const ONDAS = {
  activas: true,
  color: "255, 255, 255",
  largoMax: 46,
  grosor: 3,
  particulas: 1,
  duracionParticulas: 2000
};

const CONTENIDO = {
  

  /* ---------- Pantalla de inicio ---------- */
  inicio: {
    textoChico: "Hoy es un día muy especial",
    textoGrande: "FELIZ CUMPLEAÑOS NENE!!1!",
    subtitulo: "Para el nene más hermoso del planeta Tierra...",
    boton: "Iniciar Travesía con el Nene",
    aviso: "La canción se llama Silver Soul... Puedes bajar el volumen en la esquina inferior derecha."   
  },

  /* ---------- Línea del tiempo (de arriba hacia abajo) ---------- */
  tituloLinea: "Nuestro recorrido",
  avisoLinea: 'Puedes ver más fotos cliqueando la foto o "Ver más..."',   // letrerito debajo del título; "" para quitarlo
  finLinea: "Aún faltan muchas cosas por vivir...",
  botonAlbum: "Ver más...",   // texto del botón de cada recuerdo

  /* ---------- Video del final (recuadro centrado) ---------- */
  video: {
    titulo: "Se que te gustan las flores... mi regalo para tí... aunque no es mucho, lo hice con amor... recuerdas el jardín que llenaríamos con todas las flores que me regalaras? se vería algo así",
    archivo: "assets/emuach.mp4",  // tu video; "" para ocultar el recuadro
    portada: ""  // opcional: imagen que se ve antes de darle play
  },
  
  linea: [
    {
      tipo: "momento",
      fecha: "2 / Nov / 2025",
      titulo: "Aquí empezó todo",
      texto: "A pesar de que no nos conocimos ese dia, tu diste el primer paso al felicitarme por mi cumpleaños, un detalle muy bonito que a pesar de no haber sido ese el día de mi cumpleaños, me hizo felíz el hecho de que te hayas tomado el tiempo para hacerlo...",
      imagen: "assets/foto1.png", // "assets/foto1.jpg"
      album: [
        "assets/foto1.png",
        "assets/a1/album1-1.png",
        "assets/a1/album1-2.png"

      ]
    },
    {
      tipo: "momento",
      fecha: "7 / Nov / 2025",
      titulo: "PRIMERA CITA CON EL NENE!!!",
      texto: "Me invitaste a jugar cs2, despues de unas cuantas victorias nos fuimos a boblox para jugar un par de juegos de terror, y para finalizar me invitaste a jugar Nightreign. Yo no lo tenía y me lo compraste, me emocioné mucho... jugamos durante un par de horas y me diverti mucho con el Nene",
      imagen: "assets/foto2.jpg",
      album: [
        "assets/foto2.jpg",
        "assets/a2/album2-1.jpg",
        "assets/a2/album2-2.jpg",
        "assets/a2/album2-3.jpg",
        "assets/a2/tonoto.gif",
        "assets/a2/album2-4.jpg",
        "assets/a2/album2-5.jpg"
      ]
    },
    {
      tipo: "boton",
      destino: "datos",
      lado: "derecha"     // "izquierda" o "derecha"
    },
    {
      tipo: "momento",
      fecha: "01 / Dic / 2025",
      titulo: "Llega el mes de la Navidad",
      texto: "Llego Diciembre con todo y frío... y sin embargo sentí la calidez que me brindaste todos los dias que pasamos juntos, jugamos muchos jueguitos y nos papeamos a todos los que se interpusieron en nuestro camino ezezezezezezez",
      imagen: "assets/foto3.png",
      album: [
        "assets/foto3.png",
        "assets/a3/album3-1.jpg",
        "assets/a3/album3-2.jpg",
        "assets/a3/album3-3.jpg",
        "assets/a3/album3-4.jpg",
        "assets/a3/album3-5.jpg",
      ]
    },
    {
      tipo: "momento",
      fecha: "25 / Dic / 2025",
      titulo: "Nuestra Aventura por Elden Ring",
      texto: "Llego la Navidad y comenzamos a jugar juntos Elden Ring, me enseñaste todo sobre el juego y me guiaste por el mejor camino como el buen Nene Guía que eres... Fuimos por todo lo alto y aspiramos a Platinar el juego en una sola run... Trabajo fácil para el Nene",
      imagen: "assets/foto4.jpg",
      album: [
        "assets/foto4.jpg",
        "assets/a4/album4-1.jpg",
        "assets/a4/album4-2.jpg",
        "assets/a4/album4-3.jpg",
        "assets/a4/album4-4.jpg",
        "assets/a4/album4-5.jpg",
        "assets/a4/album4-6.jpg",
        "assets/a4/album4-7.jpg",
        "assets/a4/album4-8.jpg"
      ]
    },
    {
      tipo: "momento",
      fecha: "14 / Feb / 2026",
      titulo: "Nuestro Primer San Valentin",
      texto: "Llego el 14 de Febrero y con él uno de los mejores regalos que cualquier persona puede recibir un día como este... Siempre atesorare esta carta que me diste, espero que te hayas pasado tan bien ese día como yo me lo pasé a tu lado, lamento mucho no haberte preparado un regalo bonito :((( te lo daré siempre apartir de ahora. Y por cierto... de entre los dos tu eres el mejor",
      imagen: "assets/foto6.png",
      album: [
        "assets/foto6.png"
      ]
    },
    {
      tipo: "boton",
      destino: "sabias",
      lado: "izquierda"
    },
    {
      tipo: "momento",
      fecha: "1 / Mar / 2026",
      titulo: "Mas diversión con el Nene",
      texto: "Eran tiempos de clases, sin embargo continuamos pasando los tiempos libres juntos, continuamos con la experiencia de Elden Ring hasta terminar el juego con todos los logros, seguimos jugando Nightreign hasta platinarlo tambien...",
      imagen: "assets/foto7.png",
      album: [
        "assets/foto7.png",
        "assets/a7/album7-8.png",
        "assets/a7/album7-1.png",
        "assets/a7/album7-2.png",
        "assets/a7/album7-3.png",
        "assets/a7/album7-4.png",
        "assets/a7/album7-5.png",
        "assets/a7/album7-6.png",
        "assets/a7/album7-7.png"
      ]
    },
    {
      tipo: "momento",
      fecha: "1 / Jun / 2026",
      titulo: "Vacaciones con el Nene",
      texto: "Llegaron las vacaciones y con ellas muchos momentos bonitos, por estas fechas me compraste el Status Prime y nos viciamos aun más al cs2 de lo que ya estabamos ASJDJASDJS, el Nene consiguio un trabajito y yo lo esperaba en casa listo para recibirlo con mucho amor.",
      imagen: "assets/foto8.jpg",
      album: [
        "assets/foto8.jpg",
        "assets/a8/album8-1.jpg",
        "assets/a8/album8-2.jpg",
        "assets/a8/album8-3.jpg",
        "assets/a8/album8-4.jpg"
      ]
    },
    {
      tipo: "momento",
      fecha: "8 / Jul / 2026",
      titulo: "NO-CLIP a los Backrooms...",
      texto: "Con todo el revuelo de los Backrooms nos dieron ganas de adentrarnos en la experiencia... me regalaste 2 juegos de los backrooms y los exploramos de arriba a abajo, de aca salieron muchas caps y momentos graciosos. Quiero que a ti tampoco se te olvide nunca lo increible bello y maravilloso que eres no solo para mi sino para todos los que te rodean",
      imagen: "assets/foto9.png",
      album: [
        "assets/foto9.png",
        "assets/a9/album9-0.png",
        "assets/a9/album9-1.jpg",
        "assets/a9/album9-2.jpg",
        "assets/a9/album9-3.jpg",
        "assets/a9/album9-4.jpg",
        "assets/a9/album9-5.jpg",
        "assets/a9/album9-6.jpg",
        "assets/a9/album9-7.jpg",
        "assets/a9/album9-8.jpg",
        "assets/a9/album9-9.jpg",
        "assets/a9/album9-10.jpg",
        "assets/a9/album9-11.jpg",
        "assets/a9/album9-12.jpg",
        "assets/a9/album9-13.jpg",
        "assets/a9/album9-14.jpg"
      ]
    },
    {
      tipo: "boton",
      destino: "otrodato",
      lado: "derecha"
    },
    {
      tipo: "momento",
      fecha: "31 / Jul / 2026",
      titulo: "Nuestra Aventura por Dark Souls 3",
      texto: "Aprovechamos nuestros últimos días de vacaciones para iniciar una travesía por DarkSouls 3, como ya es costumbre el Nene fue el mejor guía que se puede tener... Me mostro los mejores caminos, llegamos con jefes míticos con su musica mítica... Igual no fueron rivales para el Nene y yo jedjjed",
      imagen: "assets/foto10.jpg",
      album: [
        "assets/foto10.jpg",
        "assets/a10/album10-0.png",
        "assets/a10/album10-0.5.png",
        "assets/a10/album10-1.jpg",
        "assets/a10/album10-2.jpg",
        "assets/a10/album10-3.jpg",
        "assets/a10/album10-4.jpg",
        "assets/a10/album10-5.jpg",
        "assets/a10/album10-6.jpg",
        "assets/a10/album10-7.jpg",
        "assets/a10/album10-8.jpg"
      ]
    },
    {
      tipo: "momento",
      fecha: "10 / Ago / 2026",
      titulo: "Regreso a Clases",
      texto: "Se terminaron las vacaciones de verano... pero no pasa nada porque continuamos conviviendo como siempre, el Nene me ayudo mucho con mis tareas y me ayudo a estudiar temas que se me complicaban, gracias a él consegui aprobar varios examenes!!1! MUCHAS GRACIAS NENE <333",
      imagen: "assets/gif11.gif",
      album: [
        "assets/gif11.gif",
        "assets/a11/album11-1.png",
        "assets/a11/album11-2.png",
        "assets/a11/album11-3.png",
        "assets/a11/album11-33.png",
        "assets/a11/album11-333.png",
        "assets/a11/album11-4.png",
        "assets/a11/album11-5.png",
        "assets/a11/album11-6.png",
        "assets/a11/album11-7.png",
      ]
    },
    {
      tipo: "momento",
      fecha: "31 / Ago / 2026",
      titulo: "TERROR CON EL NENE (No tan terror)",
      texto: "Descubri unos juegos de terror gratis en TikTok y fui a mostrartelos para jugar juntos, aunque solo eran 3 y estaban bien rancios nos divertimos jugandolos JSADJADJ",
      imagen: "assets/gif13.gif",
      album: [
        "assets/gif13.gif",
        "assets/a13/album13-1.jpg",
        "assets/a13/album13-2.jpg",
        "assets/a13/album13-3.jpg",
        "assets/a13/album13-4.jpg",
        "assets/a13/album13-5.jpg"
      ]
    },
    {
      tipo: "boton",
      destino: "jumpscare",
      lado: "izquierda"
    },
    {
      tipo: "momento",
      fecha: "6 / Sep / 2026",
      titulo: "Apocalipsis Zombie....",
      texto: "El nene me compró Black Ops III... y me invitó a probar todos los mapas que venian con él, jugamos mapas muy míticos de los zombies como lo es Kino Der Toten, Origins y Moon, jugamos mucho e intentamos pasarnos varios Easter Eggs, aunque nos ha resultado algo complicado...",
      imagen: "assets/foto12.jpg",
      album: [
        "assets/foto12.jpg",
        "assets/a12/album12-6.jpeg",
        "assets/a12/album12-1.jpg",
        "assets/a12/album12-2.jpg",
        "assets/a12/album12-3.jpg",
        "assets/a12/album12-4.jpg",
        "assets/a12/album12-5.jpg",
        "assets/a12/album12-6.jpg",
        "assets/a12/album12-7.jpg",
        "assets/a12/album12-8.jpg",
        "assets/a12/album12-9.jpg",
        "assets/a12/album12-10.jpg",
        "assets/a12/album12-11.jpg",
        "assets/a12/album12-12.jpg",
        "assets/a12/album12-13.jpg",
        "assets/a12/album12-14.jpg",
      ]
    },
    {
      tipo: "momento",
      fecha: "25 / Oct / 2026",
      titulo: "Rocket League con el Nene",
      texto: "Despues de mucho tiempo desde nuestra ultima partida en rocket, volvimos a jugarlo... y como siempre no hubo rival para nosotros Bv Xv, el Nene tambien me regaló el Goat Simulator... Goty de hace muchos años, jugarlo de nuevo fue como regresar al pasado...",
      imagen: "assets/foto14.png",
      album: [
        "assets/foto14.png",
        "assets/a14/album14-1.jpg",
        "assets/a14/album14-2.jpg",
        "assets/a14/album14-3.jpg",
        "assets/a14/album14-4.jpg",
        "assets/a14/album14-5.jpg",
        "assets/a14/album14-6.jpg",
        "assets/a14/album14+1.png",
        "assets/a14/album14+2.png",
        "assets/a14/album14+3.png",
        "assets/a14/album14+4.png",
        "assets/a14/album14+5.png",
      ]
    },
    {
      tipo: "momento",
      fecha: "31 / Oct / 2026",
      titulo: "Halloween con el Nene",
      texto: "Llego Halloween y lo pasamos juntos, hacia mucho tiempo que no jugabamos DBD y se te ocurrio probarlo de nuevo, mientras otros andaban de fiesta nosotros nos desvelabamos hasta las 3:00am jugando porque como dice el Nene: Estar con mi bebé >>>>>>>>>> una fiesta EMMMMMMMMMMMUACHHHHHHHHHHHHHH TE AMO MUCHO NENE MUCHAS GRACIAS POR TUS REGALOS TAN BONITOS",
      imagen: "assets/foto15.png",
      album: [
        "assets/foto15.png",
        "assets/a15/album15-1.jpg",
        "assets/a15/album15-2.jpg",
        "assets/a15/album15-3.png",
        "assets/a15/album15-4.png",
        "assets/a15/album15-5.jpg",
        "assets/a15/album15.png",
        "assets/a15/album15-.png",
        "assets/a15/album15-6.jpg",
        "assets/a15/album15-7.jpg",
        "assets/a15/album15-8.jpg",
        "assets/a15/album15-9.jpg",
        "assets/a15/album15-10.jpg",
        "assets/a15/album15-11.jpg",
      ]
    },
    {
      tipo: "boton",
      destino: "datomusica",
      lado: "derecha"
    },
    {
      tipo: "momento",
      centrado: true,   // tarjeta centrada al final, arriba del texto "Y aún faltan..."
      fecha: "4 / Nov / 2026",
      titulo: "Hoy es el Cumpleaños del Nene...",
      texto: "Y quiero desearte un muy Feliz Cumpleaños, que te la pases muy bonito con tu familia y amigos, que te festejen muy bonito y que todo lo que te pase este día sea positivo, hoy y todos los días del resto de tu vida. Te amo mucho y deseo lo mejor para ti, te mando un gran abrazo y un largo beso desde donde estoy hasta donde estás.",
      imagen: "assets/HAPPYBIRTHDAY.png",
      album: [
        "assets/HAPPYBIRTHDAY.png"
      ]
    }
  ],

  /* ---------- Secciones a las que llevan los botones ---------- */
  secciones: {

    // Botón: "Datos interesantes del nene"
    datos: {
      boton: "Datos interesantes del Nene",
      icono: "moon",         // "star", "moon" o "sun"
      titulo: "Datos interesantes del Nene",
      intro: "Cosas que hacen al Nene único:",
      datos: [
        "Es muy bonito, lindo y noble siempre...",
        "Se preocupa mucho por las demas personas...",
        "Le gusta mucho chipilearme :p",
        "El Nene es MultiTask, puede hacer todo lo que se proponga...",
        "El Nene es muy inteligente, se sabe todo y siempre me ayuda y si hay algo que desconoce lo investiga con tal de ayudarme...",
        "Es simplemente perfecto",
        "Hay algo que no hagas bien?"
      ],
      imagen: "assets/youme.jpg"
    },

    // Botón: "¿Sabías que...?"
    sabias: {
      boton: "¿Sabías que...?",
      icono: "sun",
      titulo: "¿Sabías que...?",
      texto: "Cuando las parejas pasan mucho tiempo juntas, sus ritmos cardíacos pueden comenzar a sincronizarse... Se cree que este fenómeno refleja una armonización de los sistemas nerviosos debido a la vinculación emocional y la conexión profunda... Crees que los nuestros ya se han sincronizado?",
      datos: [],
      imagen: "assets/muamua.png"
    },

    // Botón: "Otro Dato interesante del nene"
    otrodato: {
      boton: "¿Cuál es el Backroom favorito del Nene?",
      icono: "sun",
      titulo: "¿Cuál es el Backroom favorito del Nene?",
      texto: "El Nivel favorito del Nene de los Backrooms es el 37: Los Poolrooms... yo me quedaria ahí durante horas con el Nene, bañandonos y jugando juntos... Yo lo tiraría al agua y me tiraría con el para comermelo a besos...",
      datos: [],
      imagen: "assets/poolrooms.png"
    },

    // Botón: "JumpScare..."
    jumpscare: {
      tipo: "jumpscare",
      boton: "JumpScare...",
      icono: "ghost",
      titulo: "Presiona para jumpscare",
      imagen: "assets/jumpscare.gif",   // la imagen que aparece al terminar la cuenta regresiva
      apareceEn: 5000,                  // cuánto tarda la imagen en verse completa (milisegundos; 5000 = 5 s)
      sonido: ""                        // opcional: un sonido (ej. "assets/grito.mp3") que suena junto con la imagen
    },
    datomusica: {
      boton: "Gather matters of the heart...",
      icono: "moon",
      titulo: "Silver Soul",
      // \n = salto de línea (\n\n deja un renglón vacío)
      texto: "“Gather matters of the heart,”\n“So we can act a fool,”\n“It's incomplete without you,”\n“The silver soul is running through.”\n\nEs la letra de la canción que escuchas de fondo, expresa la idea de vulnerabilidad, de entregarse al sentimiento sin reservas, y que las cosas pierden el sentido o se sienten inconclusas cuando esa persona ya no está...",
      datos: [],
      imagen: "assets/silversoul.jpg"
    }
  }
};

/* ==========================================================
   A PARTIR DE AQUÍ ES LA LÓGICA. No necesitas tocar nada.
   ========================================================== */
(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };
  var NS = "http://www.w3.org/2000/svg";

  var vistaPrincipal = $("vistaPrincipal");
  var vistaDetalle = $("vistaDetalle");
  var recorrido = $("recorrido");
  var timeline = $("timeline");
  var detalleContenido = $("detalleContenido");
  var btnIniciar = $("btnIniciar");
  var btnVolver = $("btnVolver");
  var videoSeccion = $("videoSeccion");
  var videoRegalo = $("videoRegalo");
  var videoAviso = $("videoAviso");

  var posicionGuardada = 0;
  var botonOrigen = null;

  var reducirMovimiento = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Ayudantes ---------- */
  function el(tag, clase, texto) {
    var nodo = document.createElement(tag);
    if (clase) nodo.className = clase;
    if (texto !== undefined) nodo.textContent = texto;
    return nodo;
  }

  function icono(nombre, clase) {
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("class", "icon " + (clase || ""));
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    var use = document.createElementNS(NS, "use");
    use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#i-" + nombre);
    use.setAttribute("href", "#i-" + nombre);
    svg.appendChild(use);
    return svg;
  }

  // Cuadro de ejemplo cuando no hay foto
  function marcador() {
    var caja = el("div", "foto-vacia");
    caja.appendChild(icono("sun", "foto-vacia__icono"));
    caja.appendChild(el("span", "", "Aquí va tu foto"));
    return caja;
  }

  // Figura con imagen (o el marcador si falta / no carga)
  function figura(src, alt, alHacerClic) {
    var fig = el("figure", "foto");
    
    // Si se pasa una función de clic, hacemos que la foto sea interactiva
    if (alHacerClic) {
      fig.style.cursor = "pointer";
      fig.title = "Abrir álbum de fotos";
      fig.addEventListener("click", alHacerClic);
    }

    if (!src) {
      fig.appendChild(marcador());
      return fig;
    }
    var img = document.createElement("img");
    img.alt = alt || "";
    img.loading = "lazy";
    img.onerror = function () {
      if (img.parentNode) img.parentNode.replaceChild(marcador(), img);
    };
    img.src = src;
    fig.appendChild(img);
    return fig;
  }

  /* ---------- Inicio ---------- */
  function pintarInicio() {
    var c = CONTENIDO.inicio;
    $("heroPequeno").textContent = c.textoChico;
    $("heroGrande").textContent = c.textoGrande;
    $("heroSubtitulo").textContent = c.subtitulo;
    btnIniciar.textContent = c.boton;
    $("heroAviso").textContent = c.aviso || "";
    $("heroAviso").hidden = !c.aviso;
    document.title = "FELIZ CUMPLE NENE";
    $("recorridoTitulo").textContent = CONTENIDO.tituloLinea;
    $("recorridoAviso").textContent = CONTENIDO.avisoLinea || "";
    $("recorridoAviso").hidden = !CONTENIDO.avisoLinea;
    $("recorridoFin").textContent = CONTENIDO.finLinea;
    pintarVideo();
  }

  /* ---------- Video del final ---------- */
  function pintarVideo() {
    var v = CONTENIDO.video;
    if (!v || !v.archivo) {
      videoSeccion.hidden = true;
      return;
    }
    $("videoTitulo").textContent = v.titulo || "";
    if (v.portada) videoRegalo.poster = v.portada;
    videoRegalo.addEventListener("error", function () {
      // El archivo no existe o el navegador no pudo abrirlo
      videoRegalo.hidden = true;
      videoAviso.textContent = "No se pudo cargar " + v.archivo +
        ". Revisa que el video esté en la carpeta assets y que sea un MP4.";
      videoAviso.hidden = false;
    });
    // Se adapta a la forma del video: si es vertical (de celular) el recuadro se hace alto y angosto
    videoRegalo.addEventListener("loadedmetadata", function () {
      var w = videoRegalo.videoWidth, h = videoRegalo.videoHeight;
      if (!w || !h) return;
      videoSeccion.style.setProperty("--rel", (w / h).toFixed(4));
      videoSeccion.classList.toggle("video--vertical", h > w);
    });
    videoRegalo.src = v.archivo;
  }

  function pausarVideo() {
    if (videoRegalo && !videoRegalo.paused) videoRegalo.pause();
  }

  /* ---------- Línea del tiempo ---------- */
  function pintarLinea() {
    timeline.innerHTML = "";
    var contadorMomentos = 0;

    CONTENIDO.linea.forEach(function (item) {
      var li = el("li", "tl-item");

      if (item.tipo === "boton") {
        var sec = CONTENIDO.secciones[item.destino];
        if (!sec) return;
        li.classList.add("tl-item--extra", item.lado === "derecha" ? "lado-der" : "lado-izq");
        li.appendChild(el("span", "tl-dot tl-dot--extra")).appendChild(icono(sec.icono || "star"));

        var b = el("button", "btn btn--extra");
        b.type = "button";
        b.appendChild(icono(sec.icono || "star", "btn__icono"));
        b.appendChild(el("span", "", sec.boton));
        b.addEventListener("click", function () { abrirSeccion(item.destino, b); });
        li.appendChild(b);
      } else {
        if (item.centrado) {
          li.classList.add("tl-item--centro");   // tarjeta en el centro, sin lado
        } else {
          contadorMomentos++;
          li.classList.add(contadorMomentos % 2 === 1 ? "lado-izq" : "lado-der");
          li.appendChild(el("span", "tl-dot")).appendChild(icono("star"));
        }

        var tarjeta = el("article", "card");
        var cab = el("div", "card__cab");
        cab.appendChild(el("time", "card__fecha", item.fecha));
        var textoAlbum = CONTENIDO.botonAlbum || "Ver más fotos";
        
        var bAlbum = el("button", "btn btn--album");
        bAlbum.type = "button";
        bAlbum.setAttribute("aria-label", textoAlbum + ": " + item.titulo);
        bAlbum.appendChild(icono("photo", "btn__icono"));
        bAlbum.appendChild(el("span", "", textoAlbum));
        
        // Función común para abrir el álbum
        var accionAlbum = function () { abrirAlbum(item, bAlbum); };
        
        bAlbum.addEventListener("click", accionAlbum);
        cab.appendChild(bAlbum);
        tarjeta.appendChild(cab);
        
        // Le pasamos la acción a la figura para que también responda al clic
        tarjeta.appendChild(figura(item.imagen, item.titulo, accionAlbum));
        
        tarjeta.appendChild(el("h3", "card__titulo", item.titulo));
        tarjeta.appendChild(el("p", "card__texto", item.texto));
        li.appendChild(tarjeta);
      }
      timeline.appendChild(li);
    });

    observarAparicion();
  }

  // Los elementos aparecen suavemente al hacer scroll
  function observarAparicion() {
    var items = timeline.querySelectorAll(".tl-item");
    if (reducirMovimiento || !("IntersectionObserver" in window)) {
      items.forEach(function (i) { i.classList.add("visible"); });
      return;
    }
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(function (i) { obs.observe(i); });
  }

  function iniciarRecorrido() {
    var musica = $("musicaFondo");
    if (musica) {
      var reproduccion = musica.play();
      if (reproduccion !== undefined) {
        reproduccion.catch(function (error) {
          console.log("Reproducción automática bloqueada por el navegador:", error);
        });
      }
    }

    var controlAudio = $("controlAudio");
    if (controlAudio) controlAudio.hidden = false;

    recorrido.hidden = false;
    btnIniciar.setAttribute("aria-expanded", "true");
    pintarLinea();
    window.scrollTo({
      top: recorrido.getBoundingClientRect().top + window.pageYOffset - 10,
      behavior: reducirMovimiento ? "auto" : "smooth"
    });
  }

  /* ---------- Control de volumen y silencio ---------- */
  var VOLUMEN_INICIAL = 0.3;   // volumen con el que empieza la música (0.3 = 30 %)

  function iniciarControlAudio() {
    var musica = $("musicaFondo");
    var btnMute = $("btnMute");
    var rango = $("rangoVolumen");
    if (!musica || !btnMute || !rango) return;

    var simbolo = btnMute.querySelector("span");
    var ultimoVolumen = VOLUMEN_INICIAL;   // para volver al mismo volumen al quitar el silencio
    musica.volume = VOLUMEN_INICIAL;

    // Deja el icono, la barra y los textos del botón igual al estado real de la música
    function sincronizar() {
      var callado = musica.muted || musica.volume === 0;
      rango.value = callado ? 0 : Math.round(musica.volume * 100);
      simbolo.textContent = callado ? "🔇" : "🔊";
      btnMute.setAttribute("aria-label", callado ? "Activar sonido" : "Silenciar");
      btnMute.setAttribute("aria-pressed", callado ? "true" : "false");
      if (!callado) ultimoVolumen = musica.volume;
    }

    // Botón: silencia / quita el silencio
    btnMute.addEventListener("click", function () {
      if (musica.muted || musica.volume === 0) {
        musica.muted = false;
        if (musica.volume === 0) musica.volume = ultimoVolumen || VOLUMEN_INICIAL;
      } else {
        musica.muted = true;
      }
    });

    // Barra de volumen
    rango.addEventListener("input", function () {
      var v = rango.value / 100;
      musica.muted = (v === 0);
      musica.volume = v;
    });

    musica.addEventListener("volumechange", sincronizar);
    sincronizar();
  }

  /* ---------- Secciones extra ---------- */
  function abrirSeccion(clave, botonQueAbrio) {
    var sec = CONTENIDO.secciones[clave];
    if (!sec) return;

    pausarVideo();
    posicionGuardada = window.pageYOffset;   // recuerda dónde ibas
    botonOrigen = botonQueAbrio;

    detalleContenido.innerHTML = "";
    var cab = el("div", "detalle__cab");
    cab.appendChild(icono(sec.icono || "star", "detalle__icono"));
    var h = el("h2", "detalle__titulo", sec.titulo);
    h.id = "detalleTitulo";
    cab.appendChild(h);
    detalleContenido.appendChild(cab);

    if (sec.tipo === "jumpscare") {
      detalleContenido.appendChild(armarJumpscare(sec));
    } else {
      if (sec.intro) detalleContenido.appendChild(el("p", "detalle__intro", sec.intro));
      if (sec.texto) detalleContenido.appendChild(el("p", "detalle__texto", sec.texto));

      if (sec.datos && sec.datos.length) {
        var lista = el("ul", "datos");
        sec.datos.forEach(function (d) {
          var li = el("li", "datos__item");
          li.appendChild(icono("star", "datos__icono"));
          li.appendChild(el("span", "", d));
          lista.appendChild(li);
        });
        detalleContenido.appendChild(lista);
      }

      var f = figura(sec.imagen, sec.titulo);
      f.classList.add("foto--grande");
      detalleContenido.appendChild(f);
    }

    vistaPrincipal.hidden = true;
    vistaDetalle.hidden = false;
    window.scrollTo(0, 0);
    btnVolver.focus({ preventScroll: true });
  }

  function volver() {
    cancelarCuenta();     // si había una cuenta regresiva en marcha, se cancela
    cerrarSusto();
    vistaDetalle.hidden = true;
    vistaPrincipal.hidden = false;
    // Regresa exactamente a donde se quedó en la línea del tiempo
    window.scrollTo(0, posicionGuardada);
    if (botonOrigen) botonOrigen.focus({ preventScroll: true });
  }

  /* ---------- Álbum de fotos de cada recuerdo ---------- */
  var album = $("album");
  var albumTitulo = $("albumTitulo");
  var albumFecha = $("albumFecha");
  var albumMarco = $("albumMarco");
  var albumPie = $("albumPie");
  var albumMinis = $("albumMinis");
  var albumPrev = $("albumPrev");
  var albumNext = $("albumNext");
  var albumCerrar = $("albumCerrar");

  var albumFotos = [];
  var albumIndice = 0;
  var albumBotonOrigen = null;
  var EXTENSIONES = ["jpg", "jpeg", "png", "webp", "gif"];

  // Carga una imagen. Si no existe con esa extensión, prueba con las demás
  // (por si Windows te ocultó la extensión real). Si ninguna funciona, llama a "fallo".
  function cargarImagen(img, src, fallo) {
    var m = /^(.*)\.([A-Za-z0-9]+)$/.exec(src);
    var base = m ? m[1] : src;
    var actual = m ? m[2].toLowerCase() : "";
    var pendientes = EXTENSIONES.filter(function (e) { return e !== actual; });
    img.onerror = function () {
      var sig = pendientes.shift();
      if (sig) {
        img.src = base + "." + sig;
      } else {
        img.onerror = null;
        fallo();
      }
    };
    img.src = src;
  }

  // Acepta "assets/foto.jpg" o { src: "assets/foto.jpg", texto: "..." }
  function normalizarFotos(lista) {
    var fotos = [];
    (lista || []).forEach(function (f) {
      if (typeof f === "string") f = { src: f };
      if (f && f.src) fotos.push({ src: f.src, texto: f.texto || "" });
    });
    return fotos;
  }

  function cajaVacia(mensaje) {
    var vacio = el("div", "foto-vacia album__vacio");
    vacio.appendChild(icono("photo", "foto-vacia__icono"));
    vacio.appendChild(el("span", "", mensaje));
    return vacio;
  }

  function mostrarFoto(i) {
    albumMarco.innerHTML = "";
    albumPrev.hidden = albumNext.hidden = albumFotos.length < 2;

    if (!albumFotos.length) {
      albumMarco.appendChild(cajaVacia("Aquí van las fotos de este recuerdo"));
      albumPie.textContent = "Todavía no hay fotos en este álbum.";
      return;
    }

    albumIndice = (i + albumFotos.length) % albumFotos.length;
    var foto = albumFotos[albumIndice];

    var img = document.createElement("img");
    img.className = "album__img";
    img.alt = foto.texto || ("Foto " + (albumIndice + 1) + " de " + albumFotos.length);
    cargarImagen(img, foto.src, function () {
      if (img.parentNode === albumMarco) {
        albumMarco.replaceChild(
          cajaVacia("No se encontró " + foto.src.split("/").pop()), img);
      }
    });
    albumMarco.appendChild(img);

    albumPie.textContent = (albumIndice + 1) + " / " + albumFotos.length +
      (foto.texto ? " · " + foto.texto : "");

    Array.prototype.forEach.call(albumMinis.children, function (b, k) {
      b.classList.toggle("activa", k === albumIndice);
      if (k === albumIndice) {
        b.setAttribute("aria-current", "true");
        albumMinis.scrollLeft = b.offsetLeft - (albumMinis.clientWidth - b.offsetWidth) / 2;
      } else {
        b.removeAttribute("aria-current");
      }
    });
  }

  function abrirAlbum(momento, boton) {
    pausarVideo();
    albumBotonOrigen = boton;
    albumFotos = normalizarFotos(momento.album);
    albumIndice = 0;
    albumTitulo.textContent = momento.titulo || "Álbum";
    albumFecha.textContent = momento.fecha || "";

    albumMinis.innerHTML = "";
    if (albumFotos.length > 1) {
      albumFotos.forEach(function (foto, i) {
        var b = el("button", "album__mini");
        b.type = "button";
        b.setAttribute("aria-label", "Ver foto " + (i + 1));
        var im = document.createElement("img");
        im.alt = "";
        im.loading = "lazy";
        cargarImagen(im, foto.src, function () {
          im.remove();
          b.appendChild(icono("photo", "album__mini-icono"));
        });
        b.appendChild(im);
        b.addEventListener("click", function () { mostrarFoto(i); });
        albumMinis.appendChild(b);
      });
    }

    album.hidden = false;
    document.body.style.overflow = "hidden";   // la línea de atrás no se mueve
    mostrarFoto(0);
    albumCerrar.focus();
  }

  function cerrarAlbum() {
    if (album.hidden) return;
    album.hidden = true;
    document.body.style.overflow = "";
    // La línea del tiempo sigue exactamente donde estaba
    if (albumBotonOrigen) albumBotonOrigen.focus({ preventScroll: true });
  }

  document.addEventListener("keydown", function (e) {
    if (album.hidden) return;
    if (e.key === "Escape") {
      cerrarAlbum();
    } else if (e.key === "ArrowLeft") {
      mostrarFoto(albumIndice - 1);
    } else if (e.key === "ArrowRight") {
      mostrarFoto(albumIndice + 1);
    } else if (e.key === "Tab") {
      // Mantiene el foco dentro del álbum mientras está abierto
      var focos = album.querySelectorAll("button:not([hidden])");
      if (!focos.length) return;
      var primero = focos[0], ultimo = focos[focos.length - 1];
      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault(); ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault(); primero.focus();
      }
    }
  });

  // Deslizar con el dedo en el celular
  var toqueX = null;
  albumMarco.addEventListener("touchstart", function (e) {
    toqueX = e.changedTouches[0].clientX;
  }, { passive: true });
  albumMarco.addEventListener("touchend", function (e) {
    if (toqueX === null) return;
    var dx = e.changedTouches[0].clientX - toqueX;
    toqueX = null;
    if (Math.abs(dx) > 40) mostrarFoto(albumIndice + (dx < 0 ? 1 : -1));
  });

  /* ---------- JumpScare: botón rojo, cuenta regresiva 3-2-1 e imagen ---------- */
  var sustoEl = $("susto");
  var sustoMarco = $("sustoMarco");
  var sustoCerrar = $("sustoCerrar");
  var sustoTimers = [];
  var sustoActivo = false;       // true mientras corre la cuenta regresiva
  var sustoZona = null;          // {boton, cuenta} de la sección abierta
  var sustoAudio = null;

  function armarJumpscare(sec) {
    var zona = el("div", "susto-zona");

    var boton = el("button", "boton-rojo");
    boton.type = "button";
    boton.setAttribute("aria-label", sec.titulo || "Presiona para jumpscare");

    var cuenta = el("div", "susto-zona__cuenta");
    cuenta.setAttribute("aria-live", "assertive");
    cuenta.hidden = true;

    zona.appendChild(boton);
    zona.appendChild(cuenta);
    sustoZona = { boton: boton, cuenta: cuenta };

    boton.addEventListener("click", function () { empezarCuenta(sec); });
    return zona;
  }

  function cancelarCuenta() {
    sustoTimers.forEach(clearTimeout);
    sustoTimers = [];
    sustoActivo = false;
    if (sustoZona) {
      sustoZona.boton.hidden = false;
      sustoZona.cuenta.hidden = true;
      sustoZona.cuenta.textContent = "";
    }
  }

  function empezarCuenta(sec) {
    if (sustoActivo || !sustoZona) return;   // evita iniciar dos cuentas a la vez
    sustoActivo = true;
    sustoZona.boton.hidden = true;
    sustoZona.cuenta.hidden = false;

    [3, 2, 1].forEach(function (n, i) {
      sustoTimers.push(setTimeout(function () {
        var c = sustoZona.cuenta;
        c.textContent = n;
        c.classList.remove("late");
        void c.offsetWidth;          // reinicia la animación del número
        c.classList.add("late");
      }, i * 1000));
    });

    // Después del 1, aparece la imagen
    sustoTimers.push(setTimeout(function () {
      sustoTimers = [];
      sustoActivo = false;
      mostrarSusto(sec);
    }, 3000));
  }

  function mostrarSusto(sec) {
    sustoMarco.innerHTML = "";
    var img = document.createElement("img");
    img.className = "susto__img";
    img.alt = "Jumpscare";
    img.style.animationDuration = (sec.apareceEn || 5000) + "ms";   // aparece poco a poco
    var sinImagen = function () {
      sustoMarco.innerHTML = "";
      sustoMarco.appendChild(el("p", "susto__vacio",
        "Aquí va tu imagen de jumpscare: " + (sec.imagen || "assets/jumpscare.jpg")));
    };
    if (sec.imagen) {
      cargarImagen(img, sec.imagen, sinImagen);
      sustoMarco.appendChild(img);
    } else {
      sinImagen();
    }

    if (sec.sonido) {
      try {
        sustoAudio = new Audio(sec.sonido);
        var p = sustoAudio.play();
        if (p && p.catch) p.catch(function () {});
      } catch (e) { /* si el sonido falla, la imagen igual aparece */ }
    }

    sustoEl.hidden = false;
    document.body.style.overflow = "hidden";
    sustoCerrar.focus();
  }

  function cerrarSusto() {
    if (sustoEl.hidden) return;
    sustoEl.hidden = true;
    document.body.style.overflow = "";
    if (sustoAudio) { sustoAudio.pause(); sustoAudio = null; }
    // El botón rojo queda listo para volver a usarse
    if (sustoZona) {
      sustoZona.boton.hidden = false;
      sustoZona.cuenta.hidden = true;
      sustoZona.cuenta.textContent = "";
      sustoZona.boton.focus({ preventScroll: true });
    }
  }

  sustoCerrar.addEventListener("click", cerrarSusto);
  document.addEventListener("keydown", function (e) {
    if (sustoEl.hidden) return;
    if (e.key === "Escape") {
      cerrarSusto();
    } else if (e.key === "Tab") {
      e.preventDefault();
      sustoCerrar.focus();
    }
  });

  /* ---------- Decoración flotante ---------- */
  function pintarDecoracion() {
    var deco = $("deco");
    var tipos = ["star", "star", "star", "moon", "sun"];
    var cantidad = window.innerWidth < 600 ? 16 : 28;
    for (var i = 0; i < cantidad; i++) {
      var tipo = tipos[i % tipos.length];
      var nodo = icono(tipo, "deco__item deco--" + tipo);
      var tam = 10 + Math.random() * 22;
      nodo.style.left = Math.random() * 100 + "%";
      nodo.style.top = Math.random() * 100 + "%";
      nodo.style.width = tam + "px";
      nodo.style.height = tam + "px";
      nodo.style.animationDelay = (-Math.random() * 6).toFixed(2) + "s";
      nodo.style.animationDuration = (4 + Math.random() * 5).toFixed(2) + "s";
      deco.appendChild(nodo);
    }
  }

  /* ---------- Eventos ---------- */
  btnIniciar.addEventListener("click", iniciarRecorrido);
  btnVolver.addEventListener("click", volver);
  albumCerrar.addEventListener("click", cerrarAlbum);
  albumPrev.addEventListener("click", function () { mostrarFoto(albumIndice - 1); });
  albumNext.addEventListener("click", function () { mostrarFoto(albumIndice + 1); });
  album.addEventListener("click", function (e) {
    if (e.target.hasAttribute("data-cerrar")) cerrarAlbum();   // clic fuera de la ventana
  });


  /* ---------- Ondas de sonido a los lados (mientras suena la música) ---------- */
  function iniciarOndas() {
    var lienzo = $("ondas");
    var musica = $("musicaFondo");
    if (typeof ONDAS === "undefined" || !ONDAS.activas) return;
    if (!lienzo || !lienzo.getContext || !musica || reducirMovimiento) return;

    var ctx = lienzo.getContext("2d");
    var PASO = 11;
    var ancho = 0, alto = 0, barras = 0, y0 = 0;
    var nivel = 0;
    var particulas = [];
    var rafId = null;
    var ultimo = 0;

    function medir() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      ancho = window.innerWidth;
      alto = window.innerHeight;
      lienzo.width = Math.round(ancho * dpr);
      lienzo.height = Math.round(alto * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      
      // Abarca desde arriba hasta abajo de la pantalla
      barras = Math.max(10, Math.floor(alto / PASO));
      y0 = PASO / 2; 
    }

    function sonando() {
      return !musica.paused && !musica.muted && musica.volume > 0;
    }

    function nuevaParticula(lado, x, y, ahora) {
      if (particulas.length >= 260) return;
      var haciaAdentro = lado === 0 ? 1 : -1;
      particulas.push({
        x: x,
        y: y,
        vx: haciaAdentro * (14 + Math.random() * 34),
        vy: (Math.random() - 0.6) * 26,
        r: 0.7 + Math.random() * 1.2,
        nace: ahora
      });
    }

    function cuadro(ahora) {
      rafId = null;
      var dt = Math.min((ahora - (ultimo || ahora)) / 1000, 0.05);
      ultimo = ahora;
      var t = ahora / 1000;

      var vivo = sonando();
      var objetivo = vivo ? 0.55 + 0.45 * musica.volume : 0;
      nivel += (objetivo - nivel) * 0.06;
      if (nivel < 0.004) nivel = 0;

      ctx.clearRect(0, 0, ancho, alto);
      var rgb = ONDAS.color || "255, 255, 255";
      var pequeno = ancho < 700;
      var largoMax = pequeno ? Math.min(ONDAS.largoMax * 0.45, 18) : ONDAS.largoMax;
      var grosor = pequeno ? 2 : (ONDAS.grosor || 3);

      if (nivel > 0) {
        ctx.lineCap = "round";
        ctx.lineWidth = grosor;
        ctx.strokeStyle = "rgba(" + rgb + ", 0.85)";
        var pulso = 0.65 + 0.35 * Math.pow(0.5 + 0.5 * Math.sin(t * 2.3), 2);

        for (var lado = 0; lado < 2; lado++) {
          for (var i = 0; i < barras; i++) {
            var y = y0 + i * PASO;
            var centro = Math.pow(Math.sin(Math.PI * (i + 0.5) / barras), 0.6);
            var a = 0.5 + 0.5 * Math.sin(t * (1.7 + (i % 5) * 0.4) + i * 0.9 + lado * 1.3);
            var b = 0.5 + 0.5 * Math.sin(t * 3.3 + i * 1.7 - lado);
            var largo = 2 + (0.1 + 0.9 * a * b) * pulso * centro * largoMax * nivel;
            var xBorde = lado === 0 ? 0 : ancho;
            var xPunta = lado === 0 ? largo : ancho - largo;

            ctx.beginPath();
            ctx.moveTo(xBorde, y);
            ctx.lineTo(xPunta, y);
            ctx.stroke();

            if (vivo && Math.random() < 0.02 * (ONDAS.particulas || 0) * (largo / largoMax)) {
              nuevaParticula(lado, xPunta, y, ahora);
            }
          }
        }
      }

      var duracion = ONDAS.duracionParticulas || 2000;
      var vivas = [];
      for (var k = 0; k < particulas.length; k++) {
        var p = particulas[k];
        var edad = ahora - p.nace;
        if (edad >= duracion) continue;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        ctx.fillStyle = "rgba(" + rgb + ", " + ((1 - edad / duracion) * 0.9).toFixed(3) + ")";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        vivas.push(p);
      }
      particulas = vivas;

      if (vivo || nivel > 0 || particulas.length) {
        rafId = requestAnimationFrame(cuadro);
      } else {
        ultimo = 0;
        ctx.clearRect(0, 0, ancho, alto);
      }
    }

    function despertar() {
      if (rafId === null) {
        ultimo = 0;
        rafId = requestAnimationFrame(cuadro);
      }
    }

    ["play", "playing", "pause", "ended", "volumechange"].forEach(function (ev) {
      musica.addEventListener(ev, despertar);
    });
    window.addEventListener("resize", medir);
    medir();
    if (sonando()) despertar();
  }
  
  pintarInicio();
  pintarDecoracion();
  iniciarControlAudio();
  iniciarOndas();

})();