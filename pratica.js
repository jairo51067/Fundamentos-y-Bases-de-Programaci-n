// Declaración de la función
function saludar() {
  // Código a ejecutar o Contenido de la función
  alert("Hola Mundo");
}
// Llamada a la función o Ejecución de la función
// saludar();

//----------CONDICIONALES----------

//**1** Condicional if
// 1. Definimos la variable con el valor de la nota
let nota = 5;
//console.log("He realizado mi examen.");

let contenedor = document.getElementById("mensaje-resultado");
// console.log(contenedor);

// Condición (si la nota es mayor o igual a 5)
if (nota >= 5) {
  console.log("¡Estoy aprobado!");
  contenedor.innerHTML = "¡Estoy aprobado!";
  contenedor.style.color = "green";
}

//**2** Condicional if-else
// 1. Definimos la variable
let notaobtenida = 3;
//console.log("He realizado mi examen. Mi resultado es el siguiente:");

// 2. Buscamos el elemento en el HTML donde queremos mostrar el texto
// Usamos el ID "mensaje-resultado-condicional" para mostrar el resultado del condicional if-else
let contenedor2 = document.getElementById("mensaje-resultado-condicional");
// console.log(contenedor2);

// Ejecutamos la logica del condicional if-else
if (notaobtenida >= 5) {
  // Acción A: nota es mayor o igual que 5
  contenedor2.innerHTML = "¡Estoy aprobado!";
  contenedor2.style.color = "green";
} else {
  // Acción B: Cualquier otro caso diferente a A (nota es menor a 5)
  contenedor2.innerHTML = "¡Estoy suspenso!";
  contenedor2.style.color = "red";
}

console.log("Estoy", notaobtenida >= 5 ? "aprobado" : "suspenso");

//**3** Condicional if-else if-else o if múltiples
// 1. Definimos la variable
let notaexamen = 7;
console.log(
  "He realizado mi examen. Mi resultado es el siguiente:" + notaexamen,
);

// 2. Buscamos el elemento en el HTML donde queremos mostrar el texto
// Usamos el ID "mensaje-resultado-condicional-multiple" para mostrar el resultado del condicional if-else if-else
let contenedor3 = document.getElementById(
  "mensaje-resultado-condicional-multiple",
);
// console.log(contenedor3);

// Ejecutamos la logica del condicional if-else if-else
if (notaexamen >= 9) {
  // Acción A: nota es mayor o igual que 9
  contenedor3.innerHTML =
    "Sobresaliente, ¡estoy aprobado con matrícula de honor!";
  contenedor3.style.color = "gold";
} else if (notaexamen >= 7) {
  // Acción B: nota es mayor o igual que 7 pero menor que 9
  contenedor3.innerHTML = "Notable, ¡estoy aprobado con buena nota!";
  contenedor3.style.color = "blue";
} else if (notaexamen >= 5) {
  // Acción C: nota es mayor o igual que 5 pero menor que 7
  contenedor3.innerHTML = "Aprobado, ¡estoy aprobado!";
  contenedor3.style.color = "green";
} else {
  // Acción D: cualquier otro caso (nota menor que 5)
  contenedor3.innerHTML = "¡Estoy suspenso!";
  contenedor3.style.color = "red";
}

//**4** Condicional switch
// 1. Definimos la variable
let diaSemana = "Lunes";
console.log("Hoy es " + diaSemana);

// 2. Buscamos el elemento en el HTML donde queremos mostrar el texto
// Usamos el ID "mensaje-resultado-switch" para mostrar el resultado del condicional switch
let contenedor4 = document.getElementById("mensaje-resultado-switch");
// console.log(contenedor4);

// Ejecutamos la logica del condicional switch

switch (diaSemana) {
  case "Lunes":
    contenedor4.innerHTML = "Hoy es lunes, ¡comienza la semana!";
    contenedor4.style.color = "blue";
    break;
  case "Martes":
    contenedor4.innerHTML = "Hoy es martes, ¡sigue adelante!";
    contenedor4.style.color = "green";
    break;
  case "Miércoles":
    contenedor4.innerHTML =
      "Hoy es miércoles, ¡ya estamos a la mitad de la semana!";
    contenedor4.style.color = "orange";
    break;
  case "Jueves":
    contenedor4.innerHTML =
      "Hoy es jueves, ¡casi llegamos al final de la semana!";
    contenedor4.style.color = "purple";
    break;
  case "Viernes":
    contenedor4.innerHTML = "Hoy es viernes, ¡feliz fin de semana!";
    contenedor4.style.color = "red";
    break;
  default:
    contenedor4.innerHTML = "No es un día válido.";
    contenedor4.style.color = "black";
}

//**4.1** Otro ejemplo de condicional switch con números
// 1. Definimos la variable
let notadesarrollada = 10;
console.log("La nota es: " + notadesarrollada);

// 2. Buscamos el elemento en el HTML donde queremos mostrar el texto
// Usamos el ID "mensaje-resultado-switch-numeros" para mostrar el resultado del condicional switch con números
let contenedor5 = document.getElementById("mensaje-resultado-switch-numeros");
// console.log(contenedor5);

// Ejecutamos la logica del condicional switch con números
switch (notadesarrollada) {
  case 10:
    contenedor5.innerHTML = "¡Sobresaliente, matrícula de honor!";
    contenedor5.style.color = "black";
    contenedor5.style.fontWeight = "bold";
    contenedor5.style.fontSize = "20px";
    contenedor5.style.textAlign = "center";
    contenedor5.style.padding = "10px";
    contenedor5.style.border = "2px solid gold";
    contenedor5.style.borderRadius = "10px";
    contenedor5.style.backgroundColor = "#fff8dc";
    contenedor5.style.width = "250px";
    break;
  case 9:
  case 8:
    contenedor5.innerHTML = "¡Sobresaliente!";
    contenedor5.style.color = "blue";
    break;
  case 7:
  case 6:
    contenedor5.innerHTML = "¡Notable!";
    contenedor5.style.color = "green";
    break;
  case 5:
    contenedor5.innerHTML = "¡Aprobado!";
    contenedor5.style.color = "orange";
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    contenedor5.innerHTML = "¡Insuficiente!";
    contenedor5.style.color = "red";
    break;
  default:
    contenedor5.innerHTML = "¡Nota no válida!";
    contenedor5.style.color = "black";
    break;
}

console.log("Estoy", notadesarrollada >= 5 ? "aprobado" : "suspendido");

//**5** operador ternario  -- condición ? valor verdadero : valor falso; --
// 1. Definimos la variable
let notat = 6;
console.log("La nota es: " + notat);
// 2. Buscamos el elemento en el HTML donde queremos mostrar el texto
// Usamos el ID "mensaje-resultado-ternario" para mostrar el resultado del operador ternario
let contenedor6 = document.getElementById("mensaje-resultado-ternario");
// console.log(contenedor6);
// Ejecutamos la logica del operador ternario
contenedor6.innerHTML = notat >= 5 ? "¡Estoy aprobado!" : "¡Estoy suspendido!";
contenedor6.style.color = notat >= 5 ? "green" : "red";
contenedor6.style.fontWeight = "bold";
contenedor6.style.fontSize = "20px";
contenedor6.style.textAlign = "center";
contenedor6.style.padding = "10px";
contenedor6.style.border = "2px solid " + (notat >= 5 ? "green" : "red");
contenedor6.style.borderRadius = "10px";
contenedor6.style.backgroundColor = notat >= 5 ? "#d4edda" : "#f8d7da";
contenedor6.style.width = "250px";
// contenedor6.style.margin = "20px auto";
contenedor6.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
// contenedor6.style.transition = "all 0.3s ease";

//**6** Operador ternario con condicionales anidados
let notat2 = 10;
console.log("La nota es: " + notat2);
let contenedor7 = document.getElementById("mensaje-resultado-ternario-anidado");
let calificacion =
  notat2 < 5
    ? "Insuficiente"
    : notat2 < 6
      ? "Suficiente"
      : notat2 < 8
        ? "Bien"
        : notat2 < 9
          ? "Notable"
          : "Sobresaliente";

contenedor7.innerHTML = calificacion;
contenedor7.style.color =
  notat2 < 5
    ? "red"
    : notat2 < 6
      ? "orange"
      : notat2 < 8
        ? "green"
        : notat2 < 9
          ? "blue"
          : "gold";
contenedor7.style.fontWeight = "bold";
contenedor7.style.fontSize = "24px";
contenedor7.style.textAlign = "left";
contenedor7.style.padding = "10px";
contenedor7.style.border =
  "2px solid " + notat2 < 5
    ? "red"
    : notat2 < 6
      ? "orange"
      : notat2 < 8
        ? "green"
        : notat2 < 9
          ? "blue"
          : "gold";

console.log("He obetenido una calificación de: " + calificacion);

//**7** BUCLE
/* 
Un bucle es una estructura de control que permite repetir un bloque de código varias veces,
dependiendo de una condición o un número determinado de iteraciones.
*/
// Tipos de bucles: for, while, do-while, for...in, for...of

// **While**
/* 
El primer tipo de bucle se denomina bucle while. 
Este bucle se caracteriza en que se repite, 
revisando la condición en cada iteración 
y sólo se detiene cuando la condición es falsa.
*/

let i = 0; // Inicialización de la variable contador

// Condición: Mientras la variable contador sea menor de 5
while (i < 5) {
  console.log("Valor de i:", i);

  //i = i + 1 ; // Incrementamos el valor de i
  i++; // Incrementamos el valor de i (forma abreviada de i = i + 1)
}

let contador = document.getElementById("mensaje-resultado-bucles");
contador.innerHTML = "Valor final de i: " + i;
contador.style.color = "blue";
contador.style.fontWeight = "bold";
contador.style.fontSize = "24px";

//**Do-While**
/* 
El segundo tipo de bucle se denomina bucle do-while. 
Este bucle se caracteriza en que se ejecuta al menos una vez, 
ya que la condición se revisa al final de cada iteración.
*/

let j = 10; // Inicialización de la variable contador

do {
  console.log("Valor de j:", j);
  j++; // Incrementamos el valor de j
} while (j < 5);

let contador2 = document.getElementById("mensaje-resultado-bucles-do-while");
contador2.innerHTML =
  "Valor final de j: " +
  j +
  "<br>" +
  "(Ejecutado al menos una vez)" +
  "<br>" +
  "(do-while)" +
  "<br>" +
  " (Bucle finalizado porque la condición j < 5 es falsa)";
contador2.style.color = "green";
contador2.style.fontWeight = "bold";
contador2.style.fontSize = "24px";

//**For**
/* 
El tercer tipo de bucle se denomina bucle for. 
Este bucle se caracteriza en que se repite un número determinado de veces (ITERACIONES), 
ya que la inicialización, la condición y el incremento se definen en una sola línea.
*/

// Sintaxis del bucle for: for (inicialización; condición; incremento) { // Código a ejecutar }
for (let k = 0; k < 5; k++) {
  console.log("Valor de k:", k);
}

let contador3 = document.getElementById("mensaje-resultado-bucles-for");
contador3.innerHTML =
  "Valor final de k: " + 5 + "<br>" + "(Bucle for ejecutado 5 veces)";
contador3.style.color = "red";
contador3.style.fontWeight = "bold";
contador3.style.fontSize = "24px";

//**Otras Modalidades**
/*
Al crear bucles, no siempre tienen que ser bucles incrementales que van aumentando de uno en uno. 
Es posible crear bucles con otras estructuras y condiciones. 
*/

//Decremental
for (let m = 5; m > 0; m--) {
  console.log("Valor de m:", m);
}

let contador4 = document.getElementById(
  "mensaje-resultado-bucles-for-decremental",
);
contador4.innerHTML =
  "Valor final de m: " +
  0 +
  "<br>" +
  "(Bucle for decremental ejecutado 5 veces)";
contador4.style.color = "purple";
contador4.style.fontWeight = "bold";
contador4.style.fontSize = "24px";

//Incremental de 2 en 2 o multiple
for (s = 0, r = 5; s < 5; s++, r--)
  console.log("Valor de s:", s, "Valor de r:", r);

let contador5 = document.getElementById(
  "mensaje-resultado-bucles-for-multiple",
);
contador5.innerHTML =
  "Valor final de s: " +
  5 +
  "<br>" +
  "Valor final de r: " +
  0 +
  "<br>" +
  "(Bucle for incremental de 2 en 2 ejecutado 5 veces)";
contador5.style.color = "orange";
contador5.style.fontWeight = "bold";
contador5.style.fontSize = "24px";

//**Interrumpir un bucle con break**
/*
Por norma general, un buen hábito de programación cuando creamos bucles es pensar 
la forma de hacer que esos bucles siempre vayan desde un número inicial a un número final y terminen las repeticiones. 
De esta forma son predecibles y fáciles de leer. 
Sin embargo, en algunas ocasiones nos puede interesar hacer interrupciones o saltos de iteraciones 
para conseguir algo más específico que con un bucle íntegro es más complejo de conseguir.
*/

//**Saltar una iteración con continue**
/*
El comando continue se utiliza para saltar una iteración del bucle, es decir, 
para omitir el bloque de código que se ejecutaría en esa iteración y pasar a la siguiente.
*/

for (let n = 0; n < 10; n++) {
  if (n === 5) {
    continue; // Salta la iteración cuando n es igual a 5
  }
  console.log("Valor de n:", n);

  let contador6 = document.getElementById(
    "mensaje-resultado-bucles-for-continue",
  );
  contador6.innerHTML =
    "Bucle for con continue: se ha saltado la iteración cuando n es igual a 5";
  contador6.style.color = "brown";
  contador6.style.fontWeight = "bold";
  contador6.style.fontSize = "24px";
}

//**Saltar una iteracion con Break**
/*
De la misma forma que tenemos un continue que interrumpe la iteración y vuelve al inicio a evaluar la condición, 
tenemos un break que nos permite interrumpir el bucle y abandonarlo. 
Esto puede ser bastante útil cuando queremos que se abandone el bucle por una condición special.
*/

for (let p = 0; p < 10; p++) {
  if (p === 5) {
    break; // Interrumpe el bucle cuando p es igual a 5
  }

  console.log("Valor de p:", p);

  let contador7 = document.getElementById("mensaje-resultado-bucles-for-break");
  contador7.innerHTML =
    "Bucle for con break: se ha interrumpido el bucle cuando p es igual a 5";
  contador7.style.color = "darkred";
  contador7.style.fontWeight = "bold";
  contador7.style.fontSize = "24px";
}

//**1** Párametros de una función */ Solo en se muestra en consola / PrimerEjemplo
// Veamos el siguiente ejemplo, donde utilizamos el parámetro "hasta" para indicar hasta donde debe llegar:
// Declaración
function tablaDelUnoPrimerEjemplo(hasta) {
  for (let i = 0; i <= hasta; i++) {
    console.log("1 x", i, "=", 1 * i);
  }
}

// Ejecución
tablaDelUnoPrimerEjemplo(10); // Tabla del 1
tablaDelUnoPrimerEjemplo(5); // Tabla del 1

//**2** Párametros de una función */ Mostrando el resultado en el HTML con Bootstrap / SegundoEjemplo
// Veamos el siguiente ejemplo, donde utilizamos el parámetro "hasta" para indicar hasta donde debe llegar:
// Declaramos
function tablaDelUnoSegundoEjemplo(hasta) {
  // Buscamos el elemento donde queremos mostrar el resultado
  let contenedor = document.getElementById("resultado");

  // Limpiamos el contenido anterior
  contenedor.innerHTML = "";

  // Creamos el bucle
  for (let i = 0; i <= hasta; i++) {
    // Creamos el HTML con clases de Bootstrap (list-group-item)
    let itemHTML = `
        <span>1 x ${i} = ${1 * i}</span>     
        `;

    // Agregamos el item al contenedor
    contenedor.innerHTML += itemHTML;
  }
}

// Ejecución
tablaDelUnoSegundoEjemplo(5);

//**3** Párametros de una función // Parametros Multiples / TercerEjemplo
// Mostrando el resultado en el HTML con Bootstrap / TercerEjemplo
// Declaramos
function tablaDelNumero(numero, hasta) {
  // Buscamos el elemento donde queremos mostrar el resultado
  let contenedor = document.getElementById("resultado-multiple");
  // Limpiamos el contenido anterior
  contenedor.innerHTML = "";
  // Creamos el título de la tabla
  let tituloHTML = `
    <h5>Tabla del ${numero}</h5>
  `;
  contenedor.innerHTML += tituloHTML;

  // Creamos el bucle
  for (let i = 0; i <= hasta; i++) {
    // Creamos el HTML con clases de Bootstrap (list-group-item)
    let itemHTML = `
        <span>${numero} x ${i} = ${numero * i}</span>     
        `;
    // Agregamos el item al contenedor
    contenedor.innerHTML += itemHTML;
  }
}

// Ejecución
tablaDelNumero(5, 15); // Tabla del 5 hasta el 10
//tablaDelNumero(3, 5); // Tabla del 3 hasta el 5
// tablaDelNumero(7, 12); // Tabla del 7 hasta el 12



//**4** Párametros de una función // Parametros Multiples / CuartoEjemplo
// Mostrando solo en la consola / CuartoEjemplo
// Declaración
function tablaMultiplicar(tabla, hasta) {
  // Título en consola
  console.log(`Tabla del ${tabla}`);
  console.log("-------------------"); // Opcional: separador

  for (let i = 0; i <= hasta; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
  console.log("-------------------"); // Opcional: separador al final
}

// Ejecución
tablaMultiplicar(1, 10); // Tabla del 1
tablaMultiplicar(5, 10); // Tabla del 5
tablaMultiplicar(7, 12); // Tabla del 7


//**5** Párametros de una función // Parametros por Defecto / QuintoEjemplo
// Mostrando el resultado en el HTML con Bootstrap / QuintoEjemplo
// Declaración
function tablaMultiplicarConDefectoHTML(tabla = 2, hasta = 10) {
  // Buscamos el elemento donde queremos mostrar el resultado 
  let contenedor = document.getElementById("resultado-multiple-porDefecto");
  // Limpiamos el contenido anterior
  contenedor.innerHTML = "";
  // Creamos el título de la tabla
  let tituloHTML = `
    <h5>Tabla del ${tabla}</h5>
  `;
  contenedor.innerHTML += tituloHTML;

  // Creamos el bucle
  for (let i = 0; i <= hasta; i++) {
    // Creamos el HTML con clases de Bootstrap (list-group-item)
    let itemHTML = `
        <span>${tabla} x ${i} = ${tabla * i}</span>     
        `;
    // Agregamos el item al contenedor
    contenedor.innerHTML += itemHTML;
  }
}

// Ejecución
tablaMultiplicarConDefectoHTML(); // Tabla del 2 hasta el 10  /* aqui no le pasamos ningún valor y se mostraran los valores por defecto */
tablaMultiplicarConDefectoHTML(5); // Tabla del 5 hasta el 10 /*aqui solo le pasamos el valor de tabla y se mostrara hasta 10*/
tablaMultiplicarConDefectoHTML(7, 12); // Tabla del 7 hasta el 12 
/* aqui le pasamos el valor de tabla y el valor de hasta,  
por lo que se sobreescriben los valores por defecto y se muestran los resultados correspondientes a esos valores. 
Si no le pasamos ningún valor, se utilizarán los valores por defecto (tabla = 2 y hasta = 10) y se mostrará la tabla del 2 hasta el 10.*/



//**5** Párametros de una función // Parametros por Defecto / QuintoEjemplo
// Mostrando solo en la consola / QuintoEjemplo
// Declaración
function tablaMultiplicarConDefecto(tabla = 2, hasta = 10) {
  // Título en consola
  console.log(`Tabla del ${tabla}`);
  console.log("-------------------"); // Opcional: separador
  for (let i = 0; i <= hasta; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
  console.log("-------------------"); // Opcional: separador al final
}

// Ejecución
tablaMultiplicarConDefecto(); // Tabla del 2 hasta el 10
tablaMultiplicarConDefecto(5); // Tabla del 5 hasta el 10
tablaMultiplicarConDefecto(7, 12); // Tabla del 7 hasta el 12
