const cipher = {

  //funcion cifrar en mayusculas

  encode(string, offset) {
    let cifrar = "";


    if (string == "" || string == 0 || string == null || string == "[]") {

      throw new TypeError("el caracter introducido no esta permitido");

    }
    if (offset == "" || offset == 0 || offset == null || offset == []) {

      throw new TypeError("el offset introducido no esta permitido");

    }

    else {
      // convertir valor string a mayuscula, convertir valor de offset a numero
      string = string.toUpperCase();
      offset = parseInt(offset);

      //obtener el valor de la letra en codigo ASCII, desplazamiento , convertir en letra
      for (let i = 0; i < string.length; i++) {

        let codigoAscii = string.charCodeAt(i);
        let recorrido = (codigoAscii - 65 + offset) % 26 + 65;
        cifrar += String.fromCharCode(recorrido);

      }
    }

    return cifrar;

  },
  //funcion descifrar en Mayuscula

  decode(string, offset) {
    let descifrar = "";

    if (string == "" || string == 0 || string == null || string == "[]") {
      //manejo de los errores de typeError
      throw new TypeError("el caracter introducido no esta permitido");

    }
    if (offset == "" || offset == 0 || offset == null || offset == "[]") {
      //manejo de los errores de typeError
      throw new TypeError("el offset introducido no esta permitido");

    }

    else {
      // convertir valor de usuario a mayuscula, convertir valor de usuario a numero
      string = string.toUpperCase();
      offset = parseInt(offset);

      //obtener el valor de la letra en codigo ASCII, desplazamiento , convertir en letra
      for (let i = 0; i < string.length; i++) {

        let codigoAscii = string.charCodeAt(i);
        let recorrido = (codigoAscii + 65 - offset) % 26 + 65;
        descifrar += String.fromCharCode(recorrido);

      }
    }

    return descifrar;
  },

};
export default cipher;
