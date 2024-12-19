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

let proyectos = [
  new Porfolio(
    "8-Bits",
    "App react destinada a guardar Roms y emuladores de video juegos",
    "./images/8bits.jpg",
    "link 1",
    "React js",
    "Sass",
    "JavaScript"
  ),
  new Porfolio(
    "Guitar-on",
    "E- comerce de react de instuementos musicales",
    "./images/Guitar-on.jpg",
    "link 2",
    "React js",
    "Css 3",
    "JavaScript"
  ),
  new Porfolio(
    "checkIn Js",
    "app de javascript vanila",
    "./images/checkin-js.jpg",
    "link 3",
    "html 5",
    "Css 3",
    "JavaScript"
  ),
  new Porfolio(
    "calculadora",
    "Simple calculadora de javascript",
    "./images/calculadora.jpg",
    "link 4",
    "html 5",
    "Css 3",
    "JavaScript"
  ),
  new Porfolio(
    "Curriculum Vitae",
    "mi curriculum vitae echo con estilos propios",
    "./images/cv.jpg",
    "link 5",
    "html 5",
    "Css 3",
    "JavaScript"
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
            <span>${proyecto.skillA}</span>
            <span>${proyecto.skillB}</span >
            <span>${proyecto.skillC}</span> 
        </div>
        
    </div>
    `;
});
