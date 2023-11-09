// ¿Que es el tercer parámetro recibido?

//El tercer parámetro, "callback", permite que se ejecute una función después de que se complete una tarea. 


// ¿En que casos es obligatorio desarrollar este tipo de funciones?

// No es obligatorio desarrollar funciones de devolución de llamada (callback) en JavaScript 
// o en la programación en general. Sin embargo, son útiles en diversas situaciones, 
// especialmente cuando se trabaja con operaciones asincrónicas 
// o se necesita proporcionar flexibilidad y extensibilidad en el codigo.


// Realizar un llamado a la función de ejemplo.

function suma(a, b, callback) {
    let c = a + b;
    callback(c); 
  }
  

  suma(3, 4, function(resultado) {
    console.log("La suma es: " + resultado);
  });
  