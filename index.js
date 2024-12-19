class Porfolio {
  constructor(titulo, descripcion, imagen, link, skillA, skillB, skillC) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.link = link;
    this.skillA = skillA;
    this.skillB = skillB;
    this.skillC = skillC;
  }
}

let skillHtml = "./iconos/html-5.png";
let skillCss = "./iconos/css.png";
let skillJavaScript = "./iconos/js.png";
let skillSass = "./iconos/sass.png";
let skillReact = "./iconos/react.png";
let skillBootstrap = "./iconos/Bootstrap.png";
let skillChackra = "./iconos/chakraUI.png";

let proyectos = [
  new Porfolio(
    "8-Bits",
    "App react destinada a guardar Roms y emuladores de video juegos",
    "./images/8bits.jpg",
    "link 1",
    skillReact,
    skillJavaScript,
    skillSass
  ),
  new Porfolio(
    "Guitar-on",
    "E- comerce de react de instuementos musicales",
    "./images/Guitar-on.jpg",
    "link 2",
    skillReact,
    skillChackra,
    skillJavaScript
  ),
  new Porfolio(
    "checkIn Js",
    "app de javascript vanila",
    "./images/checkin-js.jpg",
    "link 3",
    skillHtml,
    skillCss,
    skillJavaScript
  ),
  new Porfolio(
    "calculadora",
    "Simple calculadora de javascript",
    "./images/calculadora.jpg",
    "link 4",
    skillHtml,
    skillCss,
    skillJavaScript
  ),
  new Porfolio(
    "Curriculum Vitae",
    "mi curriculum vitae echo con estilos propios",
    "./images/cv.jpg",
    "link 5",
    skillHtml,
    skillCss,
    skillJavaScript
  ),
];

proyectos.forEach((proyecto) => {
  console.log(proyecto);
  document.getElementsByClassName("contenedorPorfolio")[0].innerHTML += `
    <div class="proyecto">
        <img  src="${proyecto.imagen}" alt="${proyecto.titulo}">
        <h4>${proyecto.titulo}</h4>
        <p>${proyecto.descripcion}</p>
      
        <div class="skills">
            <img  src="${proyecto.skillA}">
           <img  src="${proyecto.skillB}">
           <img  src="${proyecto.skillC}">
        </div>
        
    </div>
    `;
});
