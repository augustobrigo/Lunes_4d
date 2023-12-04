window.onload=inicio;

function inicio(){
 let btn=document.getElementById("listar1");
 btn.onclick=function(){
fetch('http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php')
.then(response => response.json())
  .then(datos =>{
    console.table(datos);
    
    cargarCarousel(datos);
  } );
}
}
function cargarCarousel(datos){

            //Cogemos la lista y el div contenedor del DOM
            let contenedor = document.getElementById("contenedor");
            let lista = document.getElementById("lista");

            //Al hacer parse nos devuelve un objeto
            console.log(datos);

            datos.forEach(recorrer);
            function recorrer(fotoCamacho, posicion) {

                    //PARTE 1: LISTA OL
                //Creamos el elemento li de la lista para cada imagen
                let elemento = document.createElement("li");
                elemento.setAttribute("data-target", "#myCarousel");
                elemento.setAttribute("data-slide-to", posicion);
                
                //Compruebo si es el primer li
                if(posicion == 0){
                    elemento.className = "active";
                }

                //Meto los li a la lista
                lista.appendChild(elemento);

                    //PARTE 2: DIV DE LA IMAGEN
                //Creamos el div que  va a tener las clases y la imagen
                let caja = document.createElement("div");
                
                //Compruebo si la caja es el primer item del carousel
                if(posicion == 0){
                    caja.className = "item active";
                }else{
                    caja.className = "item";
                }

                    //PARTE 3: IMAGEN
                //Creamos la imagen y le damos atributos
                let imag = document.createElement("img");
                imag.setAttribute("src", fotoCamacho.imagen);
                imag.setAttribute("alt", fotoCamacho.texto);
                imag.style = "width:100%;height:50vh;";

                //Meto la imagen en la caja y la caja en el contenedor
                caja.appendChild(imag);
                contenedor.appendChild(caja);

            }

        }
    

   

