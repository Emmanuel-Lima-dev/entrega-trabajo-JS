/*var diccionario=[{
    palabra:"peregrino",
    definicion:"Persona Que anda o viaja por tierras extrañas que presentan dificultades."
   },{
    palabra:"berenjena",
    definicion:"planta de fruto comestible, generalmente anual, del género Solanum dentro de la familia de las solanáceas"
   },{
    palabra:"bucle",
    definicion:"secuencia de instrucciones de código que se ejecuta repetidas veces.//Curva en forma de rizo que se forma en determinadas cosas. "
   },{
    palabra:"estetoscopio",
    definicion:"Instrumento médico que sirve para explorar los sonidos producidos por los órganos de las cavidades del pecho y del abdomen."
   },{
    palabra:"recoleccion",
    definicion:"Acción o actividad de recolectar los frutos de la tierra.//Conjunto de frutos recolectados."
   }];

                                //ejercicio 1

const input=document.getElementById("palabra");
const btn=document.querySelector("#button");
const recuadroCeleste=document.getElementById("recuadroCeleste");

btn.addEventListener("click", ()=>{
    let valorInput=input.value;
    let item=diccionario.find((obj)=>obj.palabra===valorInput);
    if (item) {
        recuadroCeleste.textContent=item.definicion;
    } else {
        recuadroCeleste.textContent="Lo sentimos, nuestro diccionario no dispone de esta esta definición por el momento";
    }
});

input.addEventListener("click",()=>{
    recuadroCeleste.textContent="";
});

                                //ejercicio 2


// const circulo=document.querySelector(".circulo");
// const precioCard=document.querySelector("#precioCard");
// const btnCompra=document.querySelector("#btnCompra");
// const sacarProducto=document.querySelector("#sacarItem");
// const total=document.getElementById("totalCompra");

// var valorCirculo=parseInt(circulo.textContent);
// var valor=parseInt(precioCard.textContent);


// btnCompra.addEventListener("click", ()=>{
//     circulo.textContent=valorCirculo+=1;
//     total.textContent=`TOTAL: $${valor*valorCirculo}`;
// });

// sacarProducto.addEventListener("click", ()=>{

//     if (valorCirculo>0) {
//         circulo.textContent=valorCirculo-=1;
//         total.textContent=`TOTAL: $${valorCirculo*valor}`;
//     } else {
//         circulo.textContent=valorCirculo;
//         total.textContent=`TOTAL: $${valorCirculo*valor}`;
//     }

// });

/*apliqué una funcion sencilla tratandose de un solo producto, pero en el caso de que la tienda contara con diferentes productos y precios usaria un contador unico para cada producto en lugar de usar el carrito como multiplicador ya que seria compartido.*/

                                  //ejercicio 3


// let usuarioAdministrador = "cosme";
// let password ="123";

// let productos=[{
// nombre:"remera",
// precio:2500,
// stock:40
// },{
// nombre:"buzo",
// precio:5750,
// stock:32
// }];

// function loggin() {
//     var ingresoUsuario=prompt("si es administrador ingrese su usuario para agregar productos");

//     if (ingresoUsuario==usuarioAdministrador) {
//         var ingresoPassword=prompt("ingrese password");
//         if (ingresoPassword==password) { 
//             var nuevoproducto={};
//             nuevoproducto.nombre=prompt("ingrese nombre del producto nuevo");
//             nuevoproducto.precio=parseInt(prompt("ingrese precio del producto nuevo"));
//             nuevoproducto.stock=parseInt(prompt("ingrese unidades del producto nuevo"));
//             productos.push(nuevoproducto);
//             }
//              else {
//             alert("contraseña incorrectoa");
//                      }
//         } else {
//         alert("usuario incorrecto");
//         }};


// loggin();


                             // ejercicio 4

// let cancion=["mi", "barba", "tiene", "tres", "pelos"];

// var botonSacar=document.querySelector("#btnSacar");
// var botonEliminar=document.getElementById("btnEliminar");
// var nodo2=document.querySelector("#nodo2");
// var nodoPadre=document.querySelector("#nodoPadre");
// var nodo=document.getElementById("#nodo");
// var inputCancion=document.getElementById("inputCancion")

// var textoCancion=document.createElement("p");
// textoCancion.textContent=`${cancion.join(" ")}.`;
// nodoPadre.insertBefore(textoCancion,nodo2);


// botonSacar.addEventListener("click",()=>{
//     var buscador=inputCancion.value;
//     if (cancion.includes(buscador)) {
//         var nuevotext=cancion.filter(item => item!=buscador)
//         textoCancion.textContent=`${nuevotext.join(" ")}.`;
//         inputCancion.value=""
//     } else {
//         textoCancion.textContent=`esa palabra no esta. :S`;
//     }      
// });

                                 // ejercicio 5

 var tituloDiaNoche=document.getElementById("tituloDiaNoche");
 var containerDiaNoche=document.querySelector("#containerDiaNoche");
 var imagen=document.createElement("img");
 imagen.src="./imagenes/murcielago.png";

 tituloDiaNoche.addEventListener("mouseover",()=>{
    containerDiaNoche.style.background="#000";
    containerDiaNoche.appendChild(imagen);
 });

//no entendi si la imagen debia quedarse o no asi que el codigo que sigue abajo es por si deberia irse la imagen al perder el foco

//tituloDiaNoche.addEventListener("mouseout",()=>{
//     containerDiaNoche.style.background="#fff";
//     containerDiaNoche.removeChild(imagen);
// });

