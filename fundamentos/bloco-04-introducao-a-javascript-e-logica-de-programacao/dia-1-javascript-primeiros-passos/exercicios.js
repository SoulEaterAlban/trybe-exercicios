// const a = 8;
// const b = 5;
// const c = 20;




// exercicio 1
// let c = a +b;
// c = a - b;
// c = a * b;
// c = a / b;
// c = a % b;
// console.log(c);

// exercicio 2
// if(a > b){
//     console.log(a)
// }else if(b>a){
//     console.log(b)
// }else{
//     console.log('São iguais')
// }


// exercicio 3
// if(a > b && a > c){
//     console.log(a)
// }else if(b > a && b > c){
//     console.log(b)
// }else if(c > a && c > b){
//     console.log(c)
// }else{
//     console.log('São iguais')
// }

//exercicio 4
// if (a == 9){
//     console.log('positive');
// }else if (a != 9 || a == 0){
//     console.log('negative');
// }


//exercicio 5
// const x = 90;
// const y = 30;
// const z = 60;
// if(x > 0 && y > 0 && z >0){
//     if((x + y + z) == 180){
//         console.log(true);
//     }else{
//         console.log(false);
//     }

// }else{
//     console.log('erro angulo inválido')
// }

// Exercicio 6
// let piece = "Rook"

// switch (piece.toLowerCase()) {
//     case "bishop":
//         console.log("any squares vacants,diagonals")
//         break;

//     case "king":
//         console.log("one square, all directions")
//         break;

//     case "queen":
//         console.log("any squares vacants,all directions")
//         break;

//     case "pawn":
//         console.log("only moves straight foward, capture pieces diagonnally")
//         break;

//     case "rook":
//         console.log("any squares vacants,moves vertically and horizontally")
//         break;

//     case "knight":
//         console.log("any squares vacants, moves in 'L' pattern ")
//         break;

//     default:
//         console.log("No piece found!");
//         break;
// }

// Exercicio 7
// let nota = 0;
// if(nota>=90){
//     console.log("nota A");
// }else if(nota>=80){
//     console.log("nota B");
// }else if(nota>=70){
//     console.log("nota C");
// }else if(nota>=60){
//     console.log("nota D");
// }else if(nota>=50){
//     console.log("nota E");
// }else if(nota>100 || nota <=0){
//     console.log("Erro nota inválida!");
// }else{
//     console.log("nota F");
// }

// Exercicio 8

// const a = 5;
// const b = 3;
// const c = 7;

// if(a%2 ==0||b%2 ==0||c%2 ==0){
//     console.log(true);
// }else{
//     console.log(false);
// }

// Exercicio 9
// const a = 5;
// const b = 3;
// const c = 7;

// if(a%2 ==0||b%2 ==0||c%2 ==0){
//     console.log(false);
// }else{
//     console.log(true);
// }

// Exercicio 10
// const custoProduto = 1000;
// const venda = 1500;

// if(custoProduto>=0 && venda>=0){
//     let imposto = 0.2*custoProduto;
//     let valorCustoTotal = custoProduto + imposto;
//     let lucro = (venda - valorCustoTotal)*1000;
//     console.log(lucro);
// }else{
//     console.log("Erro, valores inválidos!");
// }

// let salario = 3000;
// let inss = 0;
// let ir = 0;

// Exercicio 11
// if(salario <= 1556.94){
//     inss = 0.08* salario;
//     salario = salario - inss;
// }else if(salario >= 1556.95 && salario <= 2594.92){
//     inss = 0.09 * salario;
//     salario= salario - inss;
    
// }else if(salario >= 2594.93 && salario <= 5189.82){
//     inss = 0.11* salario;
//     salario = salario - inss;
// }else if(salario > 5189.82){
//     inss = 570.88;
//     salario = salario - inss;
// }else{
//     console.log("Insira um salário válido")
// }

// if(salario>=1903.99 && salario<= 2826.65){
//     ir= (0.075*salario)-142.80;
//     salario= salario-ir;
// }else if(salario>=2826.66 && salario<= 3751.05){
//     ir= (0.15*salario)-354.80;
//     salario= salario-ir;
// }else if(salario>=3751.06 && salario<= 4664.68){
//     ir= (0.225*salario)-636.13;
//     salario= salario-ir;
// }else if(salario>4664.68){
//     ir= (0.275*salario)-869.36;
//     salario= salario-ir;
// }

// console.log("Seu salário liquido é de: "+salario);