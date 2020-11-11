"use strict";
var forma = document.getElementById("forma"),
    salidaTotal = document.getElementById("salidaTotal"),    
    salidaCelebridades = document.getElementById("salidaCelebridades"),
    celebridades = document.getElementsByName("celebridades");
    
forma.addEventListener("click", validaCelebridades, false);      
forma.addEventListener("click", precio, false);    
 

function precio(){
     var celebridadesPrecio = new Array();
   for (var i = 0, total = celebridades.length; i < total; i++) {
      var precio = celebridades[i];
      if (precio.checked){
          celebridadesPrecio.push(this.dataset.number);
      }
   }
   salidaTotal.textContent= celebridadesPrecio.join("");
}

 

function validaCelebridades(){
   var celebridadesSeleccionadas = new Array();
   for (var i = 0, total = celebridades.length; i < total; i++) {
      var celebridad = celebridades[i];
      if (celebridad.checked){
          celebridadesSeleccionadas.push(celebridad.value);
      }
   }
    salidaCelebridades.textContent = celebridadesSeleccionadas.join(", ");     
}
