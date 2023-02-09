/*Este archivo debe calcular el factorial de 10 utilizando un bucle while, 
una bifurcación if y una sentencia break */

var i = 1;
var factorial = 1;
elFactor: while(true){
    factorial = i*factorial;
    i++;
    if(i < 11) 
    {
        break elFactor;
    }
}
console.log(factorial);