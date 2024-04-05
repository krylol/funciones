/* function saludo()
{
 console.log("Hello World");
}
 */

const saludo = () => {console.log()};

saludo();

/* function suma(x,y)
{
 return x + y;
} */
/* const suma = (x,y) => x+y; */
const suma = (x,y) =>{
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

console.log(cubo(3));



/* arrayNumber.forEach(
    function(value,index)
    {
        let dato = value * 2
        console.log("El valor del indice es " + index + " es " + dato);
    }
)
 */
let arrayNumber = [1,2,3,4,5,6]
let arr2 = [];

arrayNumber.forEach((value,index) =>
{
    console.log(index);
    console.log(value*2);
    arr2.push(value*2)   
})
arr2.forEach

