


function calcularMedia(notas) {
    let soma = 0;
    
    
    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }
    
  
    return soma / notas.length;
}


let minhasNotas = [8.5, 7.0, 6.5, 9.0];
let mediaFinal = calcularMedia(minhasNotas);


console.log("Média:", mediaFinal);

if (mediaFinal >= 7) {
    console.log("Aprovado! A média é maior ou igual a 7.");
} else {
    console.log("Reprovado! A média é menor que 7.");
}