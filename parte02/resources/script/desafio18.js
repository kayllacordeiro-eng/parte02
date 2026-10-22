
function celsiusParaFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

let temp1 = 0;
let temp2 = 25;
let temp3 = 100;

console.log(temp1 + "°C =", celsiusParaFahrenheit(temp1) + "°F");
console.log(temp2 + "°C =", celsiusParaFahrenheit(temp2) + "°F");
console.log(temp3 + "°C =", celsiusParaFahrenheit(temp3) + "°F");