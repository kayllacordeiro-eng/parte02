


let precos = [25.50, 40.00, 15.00, 80.00, 60.00];

let totalCompra = precos.reduce(function(acumulador, precoAtual) {
    return acumulador + precoAtual;
}, 0);

console.log("Total da compra: R$", totalCompra);

if (totalCompra > 200) {
    console.log("O valor total ultrapassa R$ 200.");
} else {
    console.log("O valor total não ultrapassa R$ 200.");
}