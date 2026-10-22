
let texto = "JavaScript é incrível";

let textoMinusculo = texto.toLowerCase();

let contadorVogais = 0;
let vogais = "aeiouáéíóúãõâêô";

for (let i = 0; i < textoMinusculo.length; i++) {
    let letra = textoMinusculo[i];
    
    if (vogais.includes(letra)) {
        contadorVogais++;
    }
}

console.log("Texto:", texto);
console.log("Quantidade de vogais:", contadorVogais);