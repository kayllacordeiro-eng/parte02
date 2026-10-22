


let saldo = 500;
let saque = 150;


if (saque <= 0) {
    console.log("Erro: O valor do saque deve ser maior que zero.");
} else if (saque > saldo) {
    console.log("Erro: Saldo insuficiente.");
} else {
    saldo = saldo - saque; 
    console.log("Saque realizado com sucesso!");
}


console.log("Saldo final: R$", saldo);