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

// 18
function programa(num){
    let r = 'Numero fora do intervalo'
    switch(num){
        case 0:
           r= 'zero'
           break
           case 1:
            r= 'um'
            break
            case 2:
           r= 'dois'
           break
           case 3:
           r= 'tres'
           break
           case 4:
           r= 'quatro'
           break
           case 5:
           r= 'cinco'
           break
           case 6:
           r= 'seis'
           break
           case 7:
           r= 'sete'
           break
    }
    return r;
}

// console.log(programa(3));

// 19
function produtos(codigo ,quantidade = 1){
    let valorUnidade = 0;
    let resposta = 'Codigo do produto nao encontrado';
    let produto ='desconhecido';
    switch(codigo){
        case 100:
            valorUnidade = 3;
            produto ='Cachorro Quente';
            break
        case 200:
            valorUnidade = 4
            produto = 'Hambúrguer Simples';
            break
        case 300:
            valorUnidade = 5.5
            produto = 'Cheeseburguer';
            break
        case 400:
            valorUnidade = 7.5
            produto = 'Bauru';
            break
        case 500:
            valorUnidade = 3.5
            produto= 'Refrigerante';
            break
        case 600:
            valorUnidade = 2.8
            produto='Suco';
            break
      }
      resposta = `${quantidade} ${produto} custa: R$${quantidade * valorUnidade}`;
      return resposta;
}

// console.log(produtos(200,2));

// 20
function troco(valor){
    let cem = 0;
    let cinquenta =0;
    let vinte=0;
    let dez=0;
    let cinco=0;
    let dois = 0;
    let um=0;
    if(valor>=100){
        while(valor>=100){
            valor-=100;
            cem++
        }
    }
     if(valor>=50){
        while(valor>=50){
            valor-=50;
            cinquenta++
        }
    }
     if(valor >= 20){
        while(valor>=20){
            valor-=20;
            vinte++
        }
    }
     if(valor>=10)
    {
        while(valor>=10){
            valor-=10;
            dez++
        }
    }
    if(valor>=5){
        while(valor>=5){
            valor-=5;
            cinco++
        }
    }
    if(valor>=2){
        while(valor>=2){
            valor-=2;
            dois++
        }
    }
     if(valor>=1)
    {
        while(valor>=1){
            valor-=1;
            um++
        }
    }
    return `R$100-${cem} R$50-${cinquenta} R$20-${vinte} R$10-${dez} R$5-${cinco} R$2-${dois} R$1-${um}`;
}

// console.log(troco(19));

// 21
function planoDeSaude(nome,idade){
     let valorPlano=0;
    if(idade<=10){
        valorPlano=80
    }else if(idade>10 && idade < 30){
        valorPlano= 50;
    }else if(idade >30 && idade <60){
        valorPlano=95;
    }else if(idade>60){
        valorPlano=130;
    }
    return `Ola ${nome} o valor do seu plano é ${valorPlano}`;
}

// console.log(planoDeSaude('nathan',69));

// 22
function anuidade(valor,mes){
    let tempo = mes -1;
    return jurosCompostos(valor,5,tempo);
}

// console.log(anuidade(100,2));

// 23
function notas23(codigo,notas){
    let maior=0;
    let id=0;
    let soma = 0;
    let media=0;
    let result;
    for(let i=0;i<3;i++){
        for(let j = 3; j>0;j--){
            if(notas[i]>notas[j]){
                maior=notas[i];
                id=i;
            }
        }
    }
    for(let i=0;i<3;i++){
        if(i != id){
            soma += notas[i]*3;
        }else{
            soma += notas[i]*4;
        }
    }
    media=soma/10;
    if(media>=5){
        result = `o Aluno de codigo ${codigo} esta aprovado com media igual a: ${media}`
    }else{
        result = `o Aluno de codigo ${codigo} esta reprovado com media igual a: ${media}`
    }
    return result;
}
let notas233=[2,2,4]
// console.log(notas23(24,notas233));

// 24
function helloWorld(){
    let i = 1;
    while(i<=11){
        console.log('Hello World');
        i++
    }
}

helloWorld();

// 25
function contAte50(){
    let i=0;
    while(i<=50){
        console.log(i)
        i++
    }
}

// contAte50()

// 26
function par(){
    let i=0;
    while(i<=100){
        if(i%2==0){
            console.log(i);
        }
        i++
    }
}

// par()

// 27
function altura(kid1,kid2){
    let maior;
    let menor;
    let anos=0;
    if(kid1[0]<kid2[0]){
        maior = kid2
        menor = kid1;
    }else{
        maior = kid1;
        menor = kid2;
    }
    if(maior[1]<menor[1]){
        while(maior[0]>menor[0]){
            maior[0]+=maior[1];
            menor[0]+=menor[1];
            anos++;
        }
    }
    return `o menor ultrapassar em ${anos}`
}

let kid1=[3,1]
let kid2=[1,2]
console.log(altura(kid1,kid2));

// 28
function parImpar(numeros){
    let par=0;
    let impar=0;
    for(i in numeros){  
       if(numeros[i] % 2 == 0){
        par++;
       }else{
        impar++;
       }
    }
    return `Ha :${par} pares e ${impar} Impares`;
}

let vetor = [1,2,3,4,5,6,7,8,9,10]
// console.log(parImpar(vetor));

// 29

function intervalo(){
    let x=0; //valores entre 10 e 20
    let y=0; // valores fora do 10 e 20
    for(i in arguments){
        if(arguments[i] > 10 && arguments[i] <20){
            x++;
        }
        else{
            y++;
        }
    }
    return `Ha :${x} entre 10 e 20 e ${y} fora`;
}

// console.log(intervalo(1,2,3,10,13,17,28));~

// 30
function maiorMenor(){
    let bigger=0;
    let small=100;
    for(i in arguments){
        if(arguments[i] > bigger){
            bigger=arguments[i];
        }
        if(arguments[i]<small){
            small=arguments[i];
        }
    }
    return `O maior é ${bigger} e o menor é ${small}`;
}

// console.log(maiorMenor(1,2,3,4,5,6,7,8,9,10));
// 31

function negativo(){
    let cont=0;
    for(i in arguments){
        if(Math.sign(arguments[i]) == -1){
            cont++
        }
    }
    return cont;
}

// console.log(negativo(1,3,-6,-9,8,-3,5,2));

// 32
function mediaAritimedia(vetor){
    let sum = 0;
    for(i in vetor){
        sum+=vetor[i];
    }
    return sum/vetor.length;
}

// console.log(mediaAritimedia(vetor))

// 33

function concatVetores(vetorInteiro,vetorString,vetorDouble){
    let vetor1 = vetorInteiro.concat(vetorString);
    let vetor2 = vetorString.concat(vetorDouble); 
    for(let i=0 ; i<3; i++){
        for(let j=0;j<4; j++){

        }
    }
    return vetor1
    vetor2
}
let v1=[1,2,3,4]
let v2=[' feijao no prato']
let v3=[1.2,4.5]

// console.log(concatVetores(v1,v2,v3));

// 34
function valores(v1,v2){
    let r = false;
    let r1 = false
    for(let i=0; i<v1.length; i++){
        r=false
        for(let j=0; j<v2.length ; j++){
            if(v1[i]==v2[j]){
                console.log(v1[i])
                r=true;
            }
        }
        if(r==false){
            return `falso o prgrama parou aqui`
            break
        }else{
            r1=true;
        }
  }
    return r1    
}
let v11 ='olaq';
let v22 = 'oqal';

// console.log(valores(v11,v22));

// 35
function juntarArray(vetorAdiciona,vetorPilha){
    return vetorAdiciona.concat(vetorPilha);
}

console.log(juntarArray(v1,v2));

// 36
function multiplicar(vetor , num){
    let vetorResult=[];
    for(i in vetor){
        vetorResult[i]= vetor[i]*num;
    }
    return vetorResult
}

function multiploDe5(vetor , num){
    if(num>5){
        return multiplicar(vetor,num);
    }else{
        return 'numero menor que 5'
    }
}

// console.log(multiploDe5(v1,5));

// 37
function pa(quantidadeTermos,primeiroTermo, razao){
    let sum = primeiroTermo;
    let numeros=[];
    numeros[0]= primeiroTermo;
    for(let i=1; i < quantidadeTermos; i++){
        numeros[i]= primeiroTermo + (i * razao)
        sum += numeros[i];
    }
    return `A soma dos ${numeros} da PA incrementando de ${razao} é: ${sum}`;
}

// console.log(pa(5,2,2));

function pg(quantidadeTermos,primeiroTermo, razao){
    let sum = primeiroTermo;
    let numeros=[];
    numeros[0]= primeiroTermo;
    for(let i =1 ; i < quantidadeTermos;i++){
        numeros[i]=primeiroTermo* (razao**i);
        sum += numeros[i];
    }
    return `A soma dos ${numeros} da PG incrementando de ${razao} é: ${sum}`;
}

console.log(pg(4,90, 1/3));


//38
function impares(maior = 100 ,menor = 0){
    let maior1 = maior;
    let menor1= menor;
    let result = [];
    if(menor1>maior1){
        maior1=menor1;
        menor1=maior1
    }
    for(let i = menor1; i <maior1;i++){
        if(i%2 != 0){
        result.push(i);
        }
    }
    return result;
}

// console.log(impares());

//39
function trocarVetor(v1,v2){
    console.log(`o vetor A era:${v1} e o vetor b era: ${v2}`);
    for(i in v1){
        v1[i] += v2[i];
        v2[i] = v1[i] - v2[i];
        v1[i] = v1[i] - v2[i] ;
    }
    console.log(`o vetor A é: ${v1} e o B: ${v2}`);
}
let vetor4 = [1,2,3,4,5];
let vetor5 = [5,4,3,2,1];
// trocarVetor(vetor4,vetor5);



function thisFunctions2(){
    this.idade=10;
    setInterval(function fun2(){
        console.log(this.idade+1);
},1500);
}

// const tryq = thisFunctions2().bind(thisFunctions2);
// console.log(tryq);

// call e aply
const casa = { 
    nome:'apartamento',
    numero:32,
    limpar(){
        console.log(this.nome);
    }
}

let calll = function casinha(){
   return this.limpar();
}

// console.log(calll.apply(casa));

// 40
// function tt(element,index,array){
//     console.log(`O elemento ${element} de indice ${index} do array ${array}`);
// }
// console.log([2, 5, 9].forEach(tt));

function conceitos(notas){
    let conceitos = []
    let conceito = 'D';
    function testeNota(nota){
        if(nota<=4.9){
            conceito = "D"
        }
        else if(nota>=5 && nota <=6.9){
            conceito = 'C';
        }else if(nota>7 && nota<=8.9){
            conceito = "B";
        }else if(nota >=9 && nota <=100){
            conceito = 'A'
        }
        return conceito
    }
    for(i in notas){
        conceitos[i] = testeNota(notas[i]);
    }

    return conceitos;
}

console.log(conceitos([4,9,6,1,1]));


// primeira maneira de criar um obejeto
let obejetoLiteral ={}

let objetoLiteral2 = new Object(null);

// console.log(typeof(objetoLiteral2))

// funçao cronstutora
function criaObejto(nome,idade){
    this.nome=nome,
    idade,
    this.falarIdade = () => {
        console.log(this.idade);
    }
}

let objeto2 = new criaObejto('nome', 13);

// function factory
function criaObjeto2(nome, idade){
    return {
        nome,
        idade
    }
}

let objeto3 = criarObjeto('alex', 20);

