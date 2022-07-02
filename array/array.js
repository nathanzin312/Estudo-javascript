let pessoas = new Array('joao','maria','rafael');

console.log(pessoas);

let frutas1 = [];
frutas1[3] = 'abacaxi';
frutas1.push('limao');
console.log(frutas1)


const nomes = ['luzia','marcela','maria'];
nomes.push('kamylli');

nomes.unshift('bruna');

let carros1 = ['uno','gol','chevette','saveiro','astra']
let novoArray = carros1.slice(2,4)
delete carros1[1]
console.log(carros1);