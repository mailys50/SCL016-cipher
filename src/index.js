import cipher from './cipher.js';
// funcion para pasar de una vista a la otra("block" para que permanesca abierta y "none" para que permanesca cerrada)
let redirectCipher = (clase) =>
{
  var vistas = [".iniciar", ".segundaVista",".instruccion"];
  for (let i = 0; i < vistas.length; i++) {
    if (clase==vistas[i]) {
      document.querySelector(vistas[i]).style.display="block";
    } else {
      document.querySelector(vistas[i]).style.display="none";
    }
  }

}
document.getElementById("botonIniciar").addEventListener("click", () => {redirectCipher(".segundaVista")});
document.getElementById("botonInstruccion").addEventListener("click", () => {redirectCipher(".instruccion")});
document.getElementById("botonDescifrar2").addEventListener("click", () => {redirectCipher(".segundaVista")});
document.getElementById("botonCifrar2").addEventListener("click", () => {redirectCipher(".segundaVista")});
document.getElementById("botonInstruccion2").addEventListener("click",()=>{redirectCipher(".instruccion")});
document.getElementById("botonVolver").addEventListener("click",()=>{redirectCipher(".iniciar")});
document.getElementById("botonVolver1").addEventListener("click",()=>{redirectCipher(".iniciar")});





// obtener el valor a cifrar colocado por el usuario
document.getElementById("botonCifrar1").addEventListener("click", () => {

  let string= document.getElementById("mensajeCifrar").value;
  let offset=document.getElementById("numeroClave").value;

  //imprimir la palabra cifrada
  try {
    document.getElementById("root").innerHTML=cipher.encode(string,offset);
  } catch (error) {
    alert(error.message);
  }
});

// obtenetr el valor a descifrar colocado por el usuario
document.getElementById("botonDescifrar1").addEventListener("click", () => {

  let string= document.getElementById("mensajeCifrar").value;
  let offset=document.getElementById("numeroClave").value;

 //imprimir la palabra cifrada 
  try {
    document.getElementById("root").innerHTML=cipher.decode(string,offset);
  } catch (error) {
    alert(error.message);
  }
  



});




