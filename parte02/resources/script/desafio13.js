

function calcularMedia(notas) {
    let soma = 0;
    
    
    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }
    
   
    return soma / notas.length;
}


let minhasNotas = [8.0, 7.5, 6.0, 9.5];
let mediaFinal = calcularMedia(minhasNotas);


console.log("Média das notas:", mediaFinal);

if (mediaFinal >= 7) {
    console.log("A média é maior ou igual a 7.");
} else {
    console.log("A média é menor que 7.");
}