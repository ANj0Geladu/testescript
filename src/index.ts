const x: number = 30

console.table(x);


let y = 12

let z: number = 12

//tipos básicos 
let nome:string = "victor"
let idade:number = 20 
let isMaried: boolean = true 

//String !== string ou seja, o typeof mostre qual o tipo das  variáveis 
// o que sai no typeof é como é ultilizado o tipo 
console.table(typeof nome);
 
 nome = "joão"

console.table(nome);

//objects
const numeros: number[] = [1,  2, 4] // mosatea que a variável em questão se trata de um array numérico 
console.table(numeros);//mostra o array
console.table(numeros.length)//mostra o tamanho
console.table(numeros.push(3))

// tuplas -> tuple
let myTuples: [string, number, string[]]

myTuples = ["nome", 5, ["sande", "familia"]]
//objects literal
const user: {nome: string, age:number} = {
    nome: "victor", 
    age: 21
}

console.log(user);

//any atribui o valor de qualquer coisa a uma variável
let a: any = 0
a = 10
a = "string"
a = []



//type alias

//typew union


//enum enumero todo array ou objeto facilitando a busca 
enum  SIZE {
    P =  "pequeno",
    M = "medio", 
    G = "grande"
}

const camisa1 = {
    nome: "camisa", 
    size: SIZE.M
}

//funcoes
function sum(a:number, b:string){ // tipando os parametros
    return a + b
}
console.log(300,"spartanos");


function log(msrg: string): void{ //função sem retorno, devido ao void 
    console.log(msrg); 
}
console.log("users");

function gretinn(name: string, gret?: string): void {
    if(gret){
        console.log(`ola ${gret} ${name}`);
        return
    }
    console.log(`ola nome`);
}




