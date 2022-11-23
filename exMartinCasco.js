//exercici1
//pongo esto para no ensuciar codigo
(function() {
let boton = document.getElementById("coloret");  
let body = document.querySelector("body");
body.style.backgroundColor = "red";
boton.style.backgroundColor = "white";
boton.addEventListener("click", coloret);

boton.style.backgroundColor = "grey";

let cont = 0;
function coloret() {
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
    
 //exercici2    
  (function() {
    let boton = document.getElementById("coloret2");  
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
    boton.style.backgroundColor = "white";
    boton.addEventListener("click", coloret2);
    
    boton.style.backgroundColor = "grey";
    
    let cont = 0;
    function coloret2() {
          if (cont %4 == 0) {
              boton.style.backgroundColor = "red";
              body.style.backgroundColor = "white";
    
          } else if(cont %3 == 0) {
                boton.style.backgroundColor = "white";
                body.style.backgroundColor = "red";
          } //else {
        //         boton.style.backgroundColor = "red";
        //         body.style.backgroundColor = "white";
        //   }
          cont += 1;
        }
     })();

//exercici3

    let boton = document.getElementById("multiplicacio");  
    let body = document.querySelector("body");
    
    function factorial() {
        let valores = document.getElementById("valors").valueAsNumber;
        
         let resultat = 1;
         
             for(let i = valores; i>0; i--){
                 resultat *= i;
                 console.log(i);
             }

             console.log("resultat "+resultat)
   
    }
//exercici4

//exercici5
function inverteix() {
  
    llista = [1,2,3,4,5,6];
     for(let i = llista; i>0; i--){
     
        console.log(i);      
     }
     

       
}

//exercici 6
let rows = document.querySelector("tbody").children
let matrix = []
for (var i = 0; i < rows.length; i++) {
    matrix.push(rows[i].children)
}

function paintCuADRANT() {
   

    for (let i= matrix.length/2; i > 0; i++) { // afegir codi
        for (let j= 0; j < matrix[i].length/2; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "blue";
        }
    }

}

//exercici 7

function diagonals() {
   
    for (let i = 0; i < matrix.length; i++) { // afegir codi
        for (let j = i; j < matrix[i].length; j++) { // afegir codi
            // afegir codi
            matrix[i][j].style.backgroundColor = "blue";
        }
    }
}