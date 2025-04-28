// 1. Variables
const nombre = "Benjamin";
const edad = 20;
const tieneMascotas = (true);
console.log("nombre: ", nombre);
console.log("edad: ", edad); 
console.log("tieneMascotas?: ", tieneMascotas);
console.log("\n------------------------");

// 2. Operaciones numéricas
const num1 = 10;
const num2 = 5;
console.log("Suma:", num1 + num2);
console.log("Resta:", num1 - num2);
console.log("Multiplicación:", num1 * num2);
console.log("División:", num1 / num2);
console.log("\n-------------------------");

// 3. Función de saludo
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
console.log(saludar("Benjamin"));
console.log("\n------------------------");

// 4. Array de frutas
const frutas = ["Manzana", "Banana", "Naranja", "Uva", "Mango"];
for (const fruta of frutas) {
  console.log(fruta);
}
console.log("\n------------------------");

// 5. Multiplicar números por 2
const numeros = [1, 2, 3];
const numerosMultiplicados = numeros.map(num => num * 2);
console.log(numerosMultiplicados);
console.log("\n------------------------");

// 6. Array de objetos
const personas = [
  { nombre: "Ana", edad: 30 },
  { nombre: "Luis", edad: 25 },
  { nombre: "María", edad: 28 }
];
personas.forEach(persona => 
    console.log(`${persona.nombre} : ${persona.edad} años`));

console.log("\n-------------------------");

// 7. Filtrar números mayores a 5
const numero = [3, 7, 1, 8, 4];
const mayoresA5 = numero.filter(num => num > 5);
console.log(mayoresA5);
console.log("\n------------------------");

// 8. Suma total con reduce
const numeros3 = [1, 2, 3, 4];
const sumaTotal = numeros3.reduce((acum, num) => acum + num, 0);
console.log(sumaTotal);
console.log("\n-------------------------");

// 9. Función asincrónica
async function mensajeAsincrono() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return "XD";
}

(async () => {
  const mensaje = await mensajeAsincrono();
  console.log(mensaje);
})();