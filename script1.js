window.onload=inicio;

function inicio(){
 let btn=document.getElementById("listar1");
 btn.onclick=function(){
  // fetch('https://fakestoreapi.com/products')
   fetch('http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php')
   //fetch('ParisRoubaix.json')
   //fetch('http://camacho.atwebpages.com/parisroubaix/roubaix.json',{ mode: 'no-cors'})
  .then(response => response.json())
  .then(datos =>{
    console.table(datos);
    
    cargarTabla(datos);
  } );
 }
}
function cargarTabla(datos){
    console.table("metadatos: "+Object.keys(datos[0]));
    let tabla=document.getElementById("tabla1");
    let cabecera=document.createElement("thead");
    let tr=document.createElement("tr");
    cabecera.appendChild(tr);
   
    let vectorMetadatos=Object.keys(datos[0]);
  //cabecera
    for (let i=0;i<vectorMetadatos.length;i++){
        console.log(vectorMetadatos[i]);
        let th=document.createElement("th");
        let sp=document.createElement("span");
        sp.textContent=vectorMetadatos[i];
        th.appendChild(sp);
        tr.appendChild(th);
    }
    tabla.appendChild(cabecera);
    let tbody=document.createElement("tbody");
   //contenido 
 datos.forEach(recorrer);
 function recorrer(item,indice){
    let fila=document.createElement("tr");
   for (let j=0;j<vectorMetadatos.length;j++){
    let celda=document.createElement("td");
    let sp2=document.createElement("span");
    
    
    let campo=vectorMetadatos[j];
    if (campo=="image" || campo=="imagen"){
        let imagen=document.createElement("img");
        imagen.setAttribute("src",item[campo]);
        imagen.setAttribute("width",100);
        sp2.appendChild(imagen);
    }else{
        sp2.textContent=item[campo];

    }
    celda.appendChild(sp2);
    fila.appendChild(celda);
   }
tbody.appendChild(fila);
tabla.appendChild(tbody);
 }
}