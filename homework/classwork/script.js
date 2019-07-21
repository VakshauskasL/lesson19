'use strict';

// Циклы while,for 

while(0){

}

let i = 0;

while(i<3){// итерация

console.log(i);
i++

}

//Циклы выполнения повторений называются итерациями
let n=10;
while(n){ //как только N=0 цикл прекратится
n--;
}

//Цикл do...while

let m=0; //Будет запускатся, пока m не будет равно 3,то цикл остановится//реже используется
do{

console.log(m);
    m++;
}while(m<3);

//Цикл for 

/*
//for(начало;условие;шаг){

}*/


for(let k=0; k<3; k++){ //фор состоит из одного итератора,пока k < 3-циклы будут выполнятся 
console.log(k);//самая часто используемая запись!!!!!!
}

let b = 0;
for(;b < 3;b++){

}
//Прерывание цикла break
/*
let sum=0;

    while(true){
        let value=+prompt('Введите число','');
        if(!value){
            break; //Как только будет введено не число, преобразует число в NaN будет false//складывает числа пока не напишешь 0
        }
        sum+=value;
}
console.log('Сумма:'+sum);
*/

//continue-следующая итерация 

for(let i =0; i<10;i++){
    if(i%2==0){
        continue;
    }
    console.log(i);
}

//Метки для break и continue
outer:for(let i=0;i<3;i++){
    for(let m=0; m<3; m++){
let input=prompt('Значение в координатах:'+i+','+m+' ');
if(!input){
    break outer;
}
    }
}
console.log('Готово!');

//Конструкция switch

let a = 4;
let g=  5;
switch(a){
    case 2://Группировка кейсов
    case 3:
        console.log('Маловато');
            break;//дополнение к контрукции,останавливает работу,являются обязательными.
    case 4:
        console.log('В точку')
            break;
    case 5-g:
        console.log('Перебор');
            break;
    default:
        console.log('Таких значений я не знаю');
            break; //запись в конце по желанию

}

//Функции

function showMessage(){
    console.log('Привет');//описание функции
}
showMessage(); //вызов функции
showMessage();
showMessage();
showMessage();

//Локальные переменные
function sayHello(){
    let name1='Лилия';
    console.log(`Привет ${name1}`);
}
sayHello();


//https://learn.javascript.ru/ , https://javascript.info/-постоянные обновления

//Внешние переменные

let userName = 'Вася';

function userReg(){
   let userName ='Андрей';

    let regMessage= 'Зарегистрирован'+ userName;
    console.log(regMessage);
}
userReg();
console.log(userName);

//Глобальная переменная-это переменная объявленная
//на уровне всего скрипта.

//Параметры
//Сколько секунд в 10 часах!!!!
function getSeconds(hours){
let SecondsInMin=60;
let secondsInHour=SecondsInMin*60;
let secondsInSomeHour=secondsInHour*hours;
console.log('Секунд-'+secondsInSomeHour+'в'+hours+'часах');
}
getSeconds(10);

function MoreParams(userName,message){


}

MoreParams(i,n);

//Аргументы по умолчанию
function DefaultParams(age,message='привет'){
 
}
DefaultParams(20,'пока');

//Возврат значения return

let age;

function CalcAge(year=2000){

return 2019-year;
}

age=CalcAge(1988);
console.log(age);
//2 вариант
/*let age;

function CalcAge(year){
let yearToBirth=2019-year;
return yearToBirth;
}

age=CalcAge(1988);
console.log(age);
*/
function DoNothing(){ //вернет ничего-undefinited
    return;
}

let returnVal= DoNothing; //undefinited

console.log(returnVal);
returnVal();
//Функиональнные выражения
//Объявление функции Function Expression-Функциональное выражение
//Стандартное объявление функции-называется Function Declaration
let SayHelloTwise=function (params){
console.log('Привет');
console.log('Привет');
};

SayHelloTwise(1);


function SayHi(){
    console.log('Привет');

}

let funcSayHi=SayHi;
funcSayHi();

SayHi=null;
//SayHi();//ошибка

funcSayHi();
//function дз





