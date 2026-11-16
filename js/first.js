// single line comment
/*
multiple line comment
*/ 
// varriable : var , let, const
/*
variable syntax:

var/ let/const   variable name = variable value



*/ 

//  js sincronyce ja line ba line kaj  kore jeita last takbe seita hwbe

// = asinment operator
var my_name = "tayon"
console.log(my_name)


// var : redeclear/reassign / global scope
// const : no redeclear/ no reassign/ blcok scope      ( fixed )



var number = 20;
number = 100;   

{
    // global scope sobjaigai teke acces kora jai
    console.log(number)
}

// let : No redeclear/reassign/ blcok scope

let num = 30;
// let num =40    no redeclear
num = 50;


 console.log(num)

//  blcok scope
/*
{
    console.log(num)
}

{
    let roll = 5;

}
console.log(roll)
*/
console.warn("this is a dangerous")
console.error("this is a errror")
console.table([1,2])

let no;
no=299;
console.log(no)
/* js data types 2 : 
 1 : primitive  : 1.string  2.number 3.boolean 4.undefiend 5.null 6.bigint 7.symbol;
 2 : non primitive : 1.Array 2.Object 3.Function;
*/
// 1: string  :"" single otoba double cotteion used"
let nameIs  = "tayon";
console.log(typeof nameIs)
// numbe : + - jekono number 
let numOne = +27343366;
console.log(typeof numOne)
// boolean  : True  And False
let bollean = false;
console.log(typeof bollean)
// undefiend  :  valu pass na korle 
let undefiend ;
console.log(typeof undefiend)
// Null : Faka jaigai ja  next eh korar jonno  ; eikhane object show kore js er bug
let nullOne = null;
console.log(typeof nullOne) 
// bigint: boro songka show korar jonno ; laste n dite hwbe 
let bigInt = 22222222222222222n;
console.log(typeof bigInt)
// symboll  : compaire kora; == value cheak   ; === value and data type cheak ; True False ahse
let symbolOne = 1;
let symbolTwo = 1;
console.log(typeof symbolOne == symbolTwo)
//  value vitore value asine kore   `backtik sinnw diye
let a = 100;
let myName = "Tayon Chakma";
let info =`my registraion number is a :  ${a}
 my roll is : ${a}` ;
let fullName = `my name is : ${myName}`;
console.log(info);
console.log(fullName);

//  Condition :
/*
if (Condition){
/code
}else{
/code 
   }

*/ 
let b = 50;
let c = 90;
let d  = 50;
let e = 70;

if(c<b && d>e){
    console.log("This is a Wrong");
} else{
    console.log("this is a True");
}

let f = 30;
let g = 20;
if (a>b){
    console.log("A is a big Number");
}else{
    console.log("B is a big")
}