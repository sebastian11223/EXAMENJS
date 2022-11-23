//exercici1
//pongo esto para no ensuciar codigo
(function() {
let boton = document.getElementById("coloret");  
let body = document.querySelector("body");
body.style.backgroundColor = "red";
boton.style.backgroundColor = "white";
boton.addEventListener("click", Colores);

boton.style.backgroundColor = "grey";

let cont = 0;
function Colores() {
      if (cont %2 ==0) {
          boton.style.backgroundColor = "red";
          body.style.backgroundColor = "white";

      } else {
            boton.style.backgroundColor = "white";
            body.style.backgroundColor = "red";
      }
      cont += 1;
    }
})();
    
     
    