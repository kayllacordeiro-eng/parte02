
let notas = [8.5, 4.0, 6.5, 9.0, 7.5];

console.log("Notas dos alunos:");
notas.forEach(function(nota) {
    console.log("Nota:", nota);
});

let notasAltas = notas.filter(function(nota) {
    return nota >= 7;
});

let notasComBonus = notas.map(function(nota) {
    if (nota + 1 > 10) {
        return 10;
    }
    return nota + 1;
});

let soma = notas.reduce(function(acumulador, nota) {
    return acumulador + nota;
}, 0);
let media = soma / notas.length;

let temNotaBaixa = notas.some(function(nota) {
    return nota < 5;
});

console.log("----------------------------");
console.log("Notas >= 7:", notasAltas);
console.log("Notas com ponto extra:", notasComBonus);
console.log("Média da turma:", media);
console.log("Tem nota abaixo de 5?:", temNotaBaixa);