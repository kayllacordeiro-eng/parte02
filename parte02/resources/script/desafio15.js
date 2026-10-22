


let precosOriginais = [100, 50, 200, 80, 150];


let precosComDesconto = precosOriginais.map(function(preco) {
    return preco * 0.9;
});

console.log("Preços originais:", precosOriginais);
console.log("Preços com 10% de desconto:", precosComDesconto);