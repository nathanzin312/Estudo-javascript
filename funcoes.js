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

// arrow function
