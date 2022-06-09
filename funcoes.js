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


 console.log(converter(3.444444));