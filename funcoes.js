// declaraçao de funçoes
// literal
function fun(a){
    return a*2;
}

//Parametros e retornos sao opcionais porem nao é boa pratica nao fazer retorno
// pode ser passado parametros amais ou utilizar parametros passdos sem declarar
// quando nao é declarado nada os valores ficam armazenados em um array chamado arguments 
function fun2(){
    let result
    for(i in arguments){
        result+=arguments[i];
    }
    return result
}

// funcoes quando nao recebem todos os parametros ou parametros invalidos elas podem definir um valor padrao 
function valorPadrao1(a,b,c,d){
    a = a || 1;  //nesse caso se o valor a for nulo a variavel a recebe por padrao 1 o problema desse metodo que se for passado 0 ele vai setar o valor padrao
    b = b !=undefined ? b : 1;  // nesse caso se o b for diferente de null e undefined b = b senao b =1
    c = isNaN(c) ? 1 : c; //nesse caso se c nao for um numero c = 1 senao c = c
    d = 3 in arguments ? d : 1; //nesse caso se o usuario tiver passado uma valor pro indice 3 d = d senao d = 1
}

// esse metodos sao antigos mas funcionais, a versao mais nova do ecmascript trouxe uma soluçao mais simples e que aceita 0 como parametro
function valorPadro2(a =1,b=1,c=1,d=1){//se um parametro nao receber valor ele vai valer por padrao 1
    return a+b+c+d;
}

// this é usado para referenciar de onde vem a variavel e pode variar
// em funçoes normais o this sempre vai referenciar onde a funçao for chamada
// no exemplo a abaixo se a funçao nao for executada no body elea vai retornar false pois o this se refere ao lugar de execuçao
function testeThis(){
    return this===body;
}

// o this nas arrows functions nao segue esse padrao, se a funçao for criada no body e for chamada em outro lugar ela sempre vai retornar true pois o this nesse caso se refere ao lugar de criaçao
const teste2 = () => this===body;

// o this com excesao das arrow functions vai referenciar ao lugar de execuçao ou no caso de variveis o lugar onde foi feito a atribuiçao 
let pessoa= {
    nome:'Programador fullstack',
    chamar(){
        // console.log(this.nome);
    }
}
// pessoa.chamar();

// nesse primeiro caso o this funciona pois o this se refere a pessoa 
let chamado = pessoa.chamar();//nesse caso retorna undefined porque o this vai se referir a variavel chamado e nao ao objeto pessoa
// console.log(chamado);
// para resolver isso existe a palavra bind que significa vincular, essa funçao bind vai definir que nao importa o contexto que a funçao chamar for invocada o this vai se referir ao objeto pessoa
// let chamado1 = pessoa.chamar().bind(pessoa);
// console.log(chamado1);

// no caso de funçoes acontece a mesma coisa
function thisFunctions(){
    this.idade=10;
    setInterval(function fun2(){
        console.log(this.idade+1);
    }.bind(this),1500)
}

//funçoes callback
let carros = ["ferrari" , "mercedes", "uno" , "carroça"];

function funSemCallBack(nome, indice ){
    console.log(`${indice+1} ${nome} `);
}

carros.forEach(funSemCallBack);


// funçoes construtoras sao parecidas com as classes em java
// sao usadas funçoes construtoras para instanciar objetos
function veiculo(tipo,velocidadeMaxima = 150, acelerada = 10){
    let tipo1 =  tipo;
    let velocidadeAtual = 0;

    this.setVelocidadeAtual = function(){
        if(velocidadeAtual + acelerada <= velocidadeMaxima){
            velocidadeAtual += acelerada;
        }else{
            velocidadeAtual = velocidadeMaxima;
        }
    }

    this.getVelocidadeAtual = function (){
        return velocidadeAtual;
}
}

const pampa = new veiculo('pampa');
pampa.setVelocidadeAtual();
console.log(pampa.getVelocidadeAtual());


// lista de exercicios 
// 1
function calculo(a = 0 , b = 0){
    console.log(`soma = ${a+b}`);
    console.log(`subtraçao  = ${a-b}`);
    console.log(`multiplicaçao = ${a*b}`);
    console.log(`divisao = ${a /b }`);
}

// 2
function triangulo(l1=0,l2=0,l3=0){
    let menssagem = () => "O triangulo nao pode ter lados com valor zero";
    let resultado = null;
    if(l1 == 0 || l2 == 0 || l3 == 0){
        return menssagem();
    }
    else{
        if(l1== l2 && l2 == l3){
            resultado = "triangulo equilatero";
        }
        else if((l1 == l2 && l1 !=l3) || (l2 == l3 && l2!=l1) || (l3 == l1 && l1 !=l2)){
            resultado = "triangulo isoceles";
        }
        else{
            resultado = "triangulo escaleno";
        }
        return resultado;
    }
}
// 3
let elevar = (b,e) => b**e;

// 4
const divsao4 = function (a,b){
    console.log(`${a/b} o resto é ${a%b}`);
}

// 5
 function converter(value){
    value= value.toFixed(2);
    return `R$ ${value.toString().replace('.' , ',')}`;
 }

//6

function jurosSimples(valor,taxa,tempo){
    let resultado = valor;
    for(i=0 ; i<tempo; i++){
        resultado += (valor/100) * taxa;
    }
    return resultado;
}

function jurosCompostos(valor, taxa, tempo){
    let resultado = valor;
    for(i=0;i<tempo;i++){
        resultado += (resultado/100) *taxa; 
    }
    return resultado;
}

//7
function baskhara(a,b,c){
    let delta = b**2 - (4 * a * c);
    if(Math.sign(delta) == 1){
    let result = [];
    result.push((-b + (Math.sqrt(delta))) / (2 * a));
    result.push((-b - (Math.sqrt(delta))) / (2 * a));
    return result;
    }
    else{
        return `O delta ${delta} é negativo`
    }
}

// console.log(baskhara(2,-6,0));

// 8

function basquete(jogos){
    let maximo = 0;
    let minimo = 10;
    let recordes = -1;
    for(i = 0 ; i < jogos.length ;i++){
        if(jogos[i] > maximo){
            maximo = jogos[i];
            recordes++;
    }else if(jogos[i] < minimo ){
        minimo = [i];
    }
}
let result =`Ele quebrou o recorde ${recordes}vezes e o seu maior plcar é: ${maximo}, o meno placar ocorreu no ${minimo} jogo`;
return result;
}

const jogos = [10 ,20, 20 ,8 ,25, 3, 0 ,30 ,1]
// console.log(basquete(jogos));

// 9
function notas(nota){
    let result;
    if(nota <= 40){
        result = `o aluno esta reprovado com nota ${nota}`
    }
    else {
        if(nota % 5 >= 3){
            nota = nota + (5 - nota % 5 );
        }
        result = `O aluno passou com nota ${nota}`;
    }
    return result;
}

// console.log(notas(82));

// 10
function multiplo3(num){
    return num%3 == 0;
}

console.log(multiplo3(6));

// 11
function anoBisesto(ano){
    let result
    if(ano%400 ==0){
        result = 'ano bissesto de 400 em 400 anos'
    }else if(ano%100 == 0){
        result= 'nao é ano bissesto'
    }else if(ano % 4 == 0){
        result = 'é ano bissesto de 4 em 4'
    }else{
        result = 'nao é ano bissesto'
    }
    return result;
}

// console.log(anoBisesto(1988));

// 12

function fatorial(num){
    let fatorial1 =0
    if(num>1){
       fatorial1 = num * fatorial(num - 1);
}else{
    fatorial1 = 1;
}
return fatorial1
}

// console.log(fatorial(5));
// 

function fatorial2(n){
    let r = 1;
    for(i=n; i > 1;i--){
        r = r*i;
    }
    return r;
}

// console.log(fatorial2(5));

// 13
function diaUtil(dia){
    let r = 'dia invalido'
    switch (dia){
        case 1: 
          r ='domingo'
          break

          case 2: 
          r ='segunda'
          break
        
          case 3: 
          r ='terça'
          break

         case 4: 
         r ='quarta'
         break


        case 5: 
            r ='quinta'
        break

           case 6: 
          r ='sexta'
          break
  
          case 7: 
          r ='sabado'
          break
    }
    return r;
}

// console.log(diaUtil(3));

// 14
function frutas(fruta){
    let r =  'valor indefinido';
    switch(fruta){
        case 'maça':
            r ='Não vendemos esta fruta aqui';
            break
        case 'kiwi':
            r = 'Estamos com escassez de kiwis';
            break
        case 'melancia':
            r= 'Aqui está, são 3 reais o quilo';
            break
    }
    return r
}

// console.log(frutas('kiqwi'));

// 15
function lojaCarros(carro){
    let r = "Não trabalhamos com este tipo de automóvel aqui";
   switch(carro){
    case 'hatch':
        r = 'Compra efetuada com sucesso';
        break
    case 'sedans':
        r= 'Tem certeza que não prefere este modelo?'
        break
    case 'motocicletas':
        r= 'Tem certeza que não prefere este modelo?'
        break
    case 'caminhonetes':
        r= 'Tem certeza que não prefere este modelo?'
        break
   }
   return r;
}

// console.log(lojaCarros('hatc'));

// 16
function calculadora(num1 = 0,operacao,num2 = 0){
    let r
    switch(operacao){
        case '+':
            r=num1 + num2;
            break
        case '-':
             r=num1 - num2;
              break
        
         case '/':
            r=num1 / num2;
            break
        
            case '*':
            r=num1 * num2;
            break
        
            case '%':
            r=num1 % num2;
            break
    }
    return r;
}

// console.log(calculadora(2, '+' ,1));

// 17
function salario(nome,salario,plano){
    let salarioAtualizado = salario
    switch(plano){
        case 'A':
            salarioAtualizado = salario += salario * 0.1;
            break
        case 'B':
            salarioAtualizado = salario += salario * 0.15;
              break
         case 'C':
             salarioAtualizado = salario += salario * 0.2;
              break
    }
    return `Ola ${nome} seu salario atualizado de acordo com seu plano ${plano} é:R$${salarioAtualizado}`;
}

// console.log(salario('nathan', 1000, 'a'));

// 








