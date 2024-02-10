// Домашнее задание №1

let name = prompt('Введите ваше имя:')

alert(`Привет,  ${name}!`)



const age = prompt('Укажите год вашего рождения:')

alert( `Вам уже ${2024 - Number(age)} лет.`)



let a = prompt('Введите сторону квадрата,чтобы расчитать его периметр:')

alert(`Периметр квадрата равен ${a * 4}`)



let r = prompt('Введите радиус окружности:')

alert(`Площадь вашей окружности равна ${Math.PI * (r * r)}`)


let range = +prompt('Введите расстояние между двумя городами в км:')

let time = +prompt('Введите время ,за которое планируете добраться:')

alert(`Скорость с которой вам необходимо двигаться ${range / time} ,чтобы успеть вовремя!`)



let dollasrs = +prompt('Введите сумму в долларах:')

const eur = 0.92 * dollasrs

alert(`Ваша сумму в евро будет составлять ${eur.toFixed(2)}`)



let memory = +prompt('Укажите объем вашей флешки в Гб:')

let file = memory * 1024

alert(`На вашу флешку поместиться ${ Math.floor(file /820)} файлов ,размером 820 Мб`)



let money = +prompt('Введите сумму денег в вашем кошельке в рублях:')

let chocolate = +prompt('Введите стоимость одной шоколадки в рублях:')

let quantity = Math.floor(money  / chocolate)

let change = chocolate * quantity

alert(`Вы сможете купить ${quantity} шоколадок и у вас останется ${money - change } рублей `)



let num = +prompt('Введите трехзначное число:')

let reverse = 0

while( num !== 0){
    reverse = reverse*10
    reverse = reverse+(num%10)
    num=Math.trunc(num/10)
}

alert(`Ваше число  на обратном порядке записи ${reverse}`)



let num = +prompt('Введите число ,чтобы узнать четное оно или нет:')

alert((num % 2 == 0)  ? 'Число является чётным' : 'Число является нечётным')



// ДОМАШНЕЕ ЗАДАНИЕ №2



let age = +prompt('Введите ваш возраст:')

if(age <= 2){
    alert('Вы являетесь ребенком!')
}

if(age >=12 && age < 18){
    alert('Вы являетесь подростком!')
}

if(age >= 18 && age < 60){
    alert('Вы являетесь взрослым!')
}

if(age > 60){
    alert('Вы явялетесь пенсионером!')
}




let num = +prompt('Введите число от 0 до 9:')

switch(num){
    case 1:
        alert('!')
        break;
    case 2:
        alert('@')
        break;
    case 3:
        alert('#')
        break;
    case 4:
        alert('$')
        break;
    case 5:
        alert('%')
    case 6:
        alert('^')
        break;
    case 7:
        alert('&')
        break;
    case 8:
        alert('*')
        break;
    case 9:
        alert('(')
        break;
    default:   
        alert('Читайте условие!')
        break;               
}




let num = prompt('Введите трехзначное число :')

if(num[0] == num[1] || num [0] == num[2] || num[1] == num[2]){
    alert('Есть совпадения!')
}else{
    alert('Совпадений нет!')
}



let year = +prompt('Введите год:')

if(year % 4 == 0 && year % 100 !== 0){
    alert('Год высокосный')
}else{
    alert('Год не высокосный')
}



let num = +prompt('Введите пятиразрядное число(от 1000 до 99999):')

if(number === number.split('').reverse().join('')){
    alert('Явлется палиндромом')
}else{
    alert('Не является палиндромом')
}



let amount = prompt('Enter the amount of USD:')
    
let currency = prompt('EUR', 'UAH', 'AZN')
    
switch(currency) {
    case 'EUR':
        alert(amount*0.92 + 'EUR');
        break;
    case 'UAH':
        alert(amount*37.57 + 'UAH');
        break;
    case 'AZN':
        alert(amount*1.7 + 'AZN');
        break;
    default: 
        alert('Введите перечисленное значение')   
}       



let lastCheck = +prompt('Введите сумму покупки:')

if(lastCheck >=200 && lastCheck < 300){
    alert(`Сумма к оплате ${lastCheck/100*97}рублей со скидкой 3%`) 
} else if (lastCheck >= 300 && lastCheck < 500 ){
    alert(`Сумма к оплате ${lastCheck/100*95}рублей  со скидкой 5%`)  
} else if( lastCheck >= 500){
    alert(`Сумма к оплате ${lastCheck/100*93}рублей со скидкой 7%`)
}



let l = +prompt('Введите длину окружности:')

let p = +prompt('Введите периметр квадрата:')

let is = (l/(2 * Math.PI)) <= (p/8)

let result = is ? alert('Окружность может поместиться в указаный квадрат') : alert('Окружность не моежт поместиться в укзаный квадрат')



let capital = prompt('Какой город является столицей России: а - Москва; б - Санкт-Питербург; в - Сочи')

let money = prompt('Какая основная валюта в России: а - гривна; б - рубль; в - лира')

let brain = prompt('Самые умные люди мира родились: а - в Китае; б - в Индии; в - в России')

let score = 0 

if(capital == 'а'){
    score += 1
}
if(money == 'б'){
    score += 2
}
if(brain == 'в'){
    score += 3
}

alert(`Ты набрал ${score} очков`)




// ДОМАШНЕЕ ЗАДАНИЕ №3

let num1 = +prompt('Введите начало диапазона:')

let num2 = +prompt('Введите конец диапазона:')

let sum = 0

while(num1 <= num2){
    sum += num1
    num1++
}

alert(`Сумма чисел заданого диапазона равна - ${sum}`)



let num1 = +prompt('Введите первое число:')

let num2 = +prompt('Введите второе число:')

let maxDivisor = 1;

for( let i = 1; i <= num1 && i <= num2;i++ ){
    if(num1 % i == 0 && num2 % i == 0){
        maxDivisor = i
    }
}

alert(`У чисел ${num1} и ${num2} наибольший общий делитель ${maxDivisor}`)




let num = +prompt('Введите число:')

let divisors = ''

for( let i = 1; i <= num; i++){
    if(num % i == 0){
        divisors += i + ','
    }
}

alert(`У числа ${num} есть такие делители: ${divisors}`)





let num = +prompt('Введите число:')

let counter = 0

while(num > 0){
    num = Math.trunc(num / 10)
    counter++
}

alert(`В вашем числе (в его целой части) находиться ${counter} цифр`)




let num = 0

let positiveNum = 0

let negativeNum = 0

let nullNum = 0

let evenNum = 0

let oddNum = 0

for(let i = 0; i < 10;i++){
    num = +prompt('Введите число:')

    if(num > 0){
        positiveNum += 1
    }else if( num < 0){
        negativeNum += 1
    }else{
        nullNum += 1
    }
    (num % 2 == 0) ? (evenNum += 1) : (oddNum += 1)
}

alert(`Из 10 введеных чисел ${positiveNum} положительных, ${negativeNum} отрицательных, ${nullNum} равны нулю, ${evenNum} четных и ${oddNum} нечетных чисел`)





let num1 = 0

let num2 = 0

let sign = ''

let result = true

do{
    let num1 = +prompt('Введите первое число:')

    let num2 = +prompt('Введите второе число:')

    let sign = prompt('Введите знак действия : * , / , + , - :')

    switch(sign){
        case '*' :
            alert(`${num1} ${sign} ${num2} = ${num1 * num2}`)
            break;
        case '/' :  
            alert(`${num1} ${sign} ${num2} = ${num1 / num2}`)
            break;
        case '+' :
            alert(`${num1} ${sign} ${num2} = ${num1 + num2}`)
            break;
        case '-' :
            alert(`${num1} ${sign} ${num2} = ${num1 - num2}`)
            break;
        default:
            alert('Вы не ввели нужный знак!')
            break; 
}
result = confirm('Хотите  продолжить?')
}while(result == true)




