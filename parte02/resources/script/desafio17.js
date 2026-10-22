
let notas = [6.5, 7.8, 8.2, 9.5, 7.0, 9.1];


let notaAlta = notas.find(function(nota) {
    return nota >= 9;
});

if (notaAlta !== undefined) {
    console.log("Primeira nota maior ou igual a 9 encontrada:", notaAlta);
} else {
    console.log("Não existe nota nesse intervalo.");
}