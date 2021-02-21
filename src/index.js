import cipher from './cipher.js';
// función para pasar de una vista a la otra("block" para que permanezca abierta y "none" para que permanezca cerrada)
let redirectCipher = (clase) =>
{
  let vistas = [".iniciar", ".segundaVista",".instruccion"];
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

// obtener el valor a cifrar, que colocó el usuario
document.getElementById("botonCifrar1").addEventListener("click", () => {

  let string= document.getElementById("mensajeCifrar").value;
  let offset=document.getElementById("numeroClave").value; 
  try {
    document.getElementById("root").innerHTML=cipher.encode(string,offset);  //imprimir la palabra cifrada y manejo de errores
  } catch (error) {
    alert(error.message);
  }
});

// obtener el valor a descifrar  
document.getElementById("botonDescifrar1").addEventListener("click", () => {

  let string= document.getElementById("mensajeCifrar").value;
  let offset=document.getElementById("numeroClave").value;

 //imprimir la palabra cifrada y manejo de errores
  try {
    document.getElementById("root").innerHTML=cipher.decode(string,offset);
  } catch (error) {
    alert(error.message);
  }
  



});




