/* function saludo()
{
 console.log("Hello World");
}
 */

/* const saludo = () => {console.log()};

saludo(); */

/* function suma(x,y)
{
 return x + y;
} */
/* const suma = (x,y) => x+y; */
/* const suma = (x,y) =>{
    console.log(x+y);
    return x+y}

console.log(suma(10,22)); 
    let resultado = suma(2,3);
    console.log(resultado);
      
function discount(price, discount)
{
    let money_discounted = price * (discount/100)
    let result = price - money_discounted

    return result
}

console.log(discount(22,10));

function numberOfCharacters(text)
{
    return text.length;
}

let myText = "Eat the rubberband. Tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad play riveting piece on synthesizer keyboard stare at ceiling light. Snuggles up to shoulders or knees and purrs you to sleep fall asleep"

console.log(numberOfCharacters(myText));

function printer(text){
    console.log(text);
}

const printerArrow = (text) => {console.log(text)};

printer("Hello")
printerArrow("Hello")

const cubo = (n) => n*n*n

console.log(cubo(3)); */



/* arrayNumber.forEach(
    function(value,index)
    {
        let dato = value * 2
        console.log("El valor del indice es " + index + " es " + dato);
    }
)
 */
/* let arrayNumber = [8,22,12,33,45,21]
let arr2 = [];

//forEach ejemplos
 arrayNumber.forEach((value,index) =>
{
    console.log(index);
    console.log(value*2);
    arr2.push(value*2)   
})
console.log(arrayNumber);
console.log(arr2); 

//Ejemplos de .map

 let newArr = [1,2,3,4,5]

 let myDoubleArrayNumber = newArr.map(
    function(value,index){
        return value*2
    }
 )

 console.log(myDoubleArrayNumber); */
//Usar siempre funcion arrow.
//Usamos map cuando queremos devolver valores y forEach cuando solo queremos recorrerlo.


/* let arr4 = [23,32,12,54,21,32]

let arr3 = arr4.map(function(value){
    return value
})
console.log(arr3);
let arr2 = arr4.map((value)=>value*2)

console.log(arr2); */

//Metodo filter

//Si tengo varios objetos u elementos, puedo iterar, filtrar o utilizar metodos si los meto en un array

/* let obj1 = {nombre:"Pepe",edad:90}
let obj2 = {nombre:"Lucas",edad:33}
let obj3 = {nombre:"Raul",edad:55}

let arrayString = [obj1,obj2,obj3]

let arrayFiltered = arrayString.filter((value)=> value.edad > 35);
console.log(arrayFiltered); */

//Metodo reduce

/* let arrayNumber = [1,2,3,4,5]

let myAdd = arrayNumber.reduce(
    function(accumulator,value,index)
    {
        return accumulator + value
    }
)
console.log(myAdd); */


//Valores por defecto
/* function tablaCinco(x,y=2)
{
    console.log(x * y);
}

tablaCinco(3) */

/* const tablaCinco = (x, y=2) => x*y

console.log(tablaCinco(5,8));

//Spread Operator

let suma = (x,y,z,t) => x+y+z+t;
let miParams = [8,24,36,110]

console.log(suma(...miParams)); */