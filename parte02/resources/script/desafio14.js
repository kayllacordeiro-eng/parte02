


let numeros = [3, 8, 15, 22, 7, 10, 44, 19, 30, 5];

let numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});


console.log("Array original:", numeros);
console.log("Array filtrado (apenas pares):", numerosPares);