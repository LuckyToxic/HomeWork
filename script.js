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