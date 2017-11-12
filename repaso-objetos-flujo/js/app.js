var ingredient = prompt("Ingresa tu ingrediente favorito");

var blender = {
  fruit: "Mango",
  liquid: "Agua",
  mix: function (){//Se agrega parametro sabor para prueba de la linea 14
    sabor = blender.fruit;// Accecer al valor de la propiedad fruit para prueba de la linea 13
    //console.log("Esquimo de " + sabor);
    return alert("Esquimo de " + sabor);
  }
};

blender.mix(); // Línea demostrativa para la línea de código 7
//blender.mix(ingredient);// Manda el valor del parametro que se uttiliza dentro del método
