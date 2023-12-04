window.onload=inicio;

function inicio(){
 let btn=document.getElementById("listar1");
 btn.onclick=function(){
fetch('http://camacho.atwebpages.com/parisroubaix/roubaix.json')
  .then(response => response.text())
  .then(text => {
    try {
      const data = JSON.parse(text);
      console.log(data);
    } catch (error) {
      console.error('Invalid JSON:', text);
    }
  })
  .catch(error => console.error(error));
}
}