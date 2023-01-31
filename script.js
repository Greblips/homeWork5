2// Задание 1

const a = 8;
const b = 4;

function min(a, b) {
    if (a < b) {
      return a;
    } else if(a < b) {
      return b;
    }
    else {
       return a;
    }
  }

  min(a,b);

  console.log(min(a,b))


// Задание 2


const number = +prompt('Введите число');
 function checkOdd(number){
    if( !isNaN(number) && number !=''){
        if( number % 2 === 0) alert(`Число ${number} четное`);
        else alert(`Число ${number} нечетное`)
       }
       else alert (`${number} -Это не число`)
 }

 checkOdd(number);


//  Задание 3

const multNumber = +prompt('Введите число');
function multNumberResoult (multNumber) {
    return multNumber**2;
   
}

console.log(multNumberResoult(multNumber))


// Задание 4

function howManyYears () {
    const userYears= prompt('Сколько тебе лет?')
    if (userYears < 0) {
        alert('Вы ввели неправильное значение')
    } else  if (userYears<=12){
      alert('Привет, друг!')  
    }else{
        alert('Добро пожаловать')
    }
}

howManyYears();

// Задание 5

const number1 = prompt('Введите первое число');
const number2 = prompt('Введите второе число');

function multypli (number1, number2) {
    if( !isNaN(number1) && !isNaN(number2) ){
       return alert(number1*number2)
       }
       else alert (`Одно или оба значения не являются числом`)
  }

 multypli(number1, number2);

//  Задание 6

const userNumber = prompt('Введите число возвадимое в куб')

 function numberToCube () {
 if (!isNaN(userNumber)) {
    return alert(Math.pow(userNumber,3))
    }
    else alert (`не число`)
 }

 numberToCube(userNumber);

//  Задание 7

// https://github.com/Greblips/homeWork1/pull/4









