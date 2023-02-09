var name = "Facundo";
var edad = 33;
var eresDesarrollador = true;
var fechaDeNacimiento = new Date("april 3 1990");
var libroFavorito = {
    titulo: "Los nueve gigantes",
    autor: "Amy Webb",
    fecha: new Date("Augost 24 2020"), 
    url: "https://books.google.com.ar/books/about/Nueve_gigantes.html?id=-w_5DwAAQBAJ&printsec=frontcover&source=kp_read_button&hl=es-419&redir_esc=y#v=onepage&q&f=false"
}


let c = 4;
let d = 10;
if (c != b){
}
let lista = [1,2,3,4,5,6,7]
// for of
for(let valor of lista){
    console.log(valor);
}

lista.forEach(valor =>{
    console.log(valor);
})

//Estructura for in
let persona = {
    nombre: "Facu",
    edad: 33,
    isDeveloper: true
}

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

