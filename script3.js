window.onload=inicio;

function inicio(){
 let btn=document.getElementById("listar1");
 btn.onclick=function(){
   fetch('https://fakestoreapi.com/products')
   .then(response => response.json())
  .then(datos =>{
    console.table(datos);
    
    cargarTabla(datos);
  } );
 }
}
function cargarTabla(datos){
   
}