'use strict';

//1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно 
//больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
let a=8;

function isNumberInRange(a) { 
return ( a > 0 && a < 10) ? 'true':'false';
}
console.log(isNumberInRange(a) ); 

//2. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число 
//и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

function isEven(c) { 
    if(c > 0 && c % 2 == 0){
        return true;   
    }else{
     return false; 
    }
} 
    console.log (isEven(6) ); 

//3. Переписать код из конструкции if в switch


let value = +prompt('value?', '');
switch (value) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
        default:
        console.log('Таких значений я не знаю');
            break;
        }
        

//4. Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b

function min(a,b) {
return( a > b ? b : a );
}

console.log(min(2,5) );
console.log(min(3,-1) );
