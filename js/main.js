//Задание №1 Вычислить результат 158+2 и вывести значение выражения в диалоговое окно.

//let a = 158 + 2;
//console.log(a);

//Задание №2 Передать строковый параметр в диалоговое окно. Например, вывести «Привет, Алевтина!», где имя — это передаваемый параметр

//let name = "Алевтина"
//console.log(`Привет, ${name}!`)

//Задание №3 Вызвать диалоговое окно с заголовком «Как вас зовут?» и подсказкой «Имя» в поле ввода. Затем вывести имя, которое ввели.

//let name = prompt('Как вас зовут?', 'Имя');
//console.log(name)

//Задание №4 Написать функцию, выводящую в диалоговом окне текст и переменную. 
//Например, «Привет, Алевтина». Где «Алевтина» — это внешняя переменная.

/*function print_name(name){
    console.log(`Привет, ${name}`)
}
let a = 'Алевтиина';
print_name(a);*/

//Задание №5 вывести на экран ****в диалоговом окне текст с сообщением “Вы уверены?” и кнопками «ОК» , «Отмена».
//При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Мы рады, что Вы уверены!”.
//При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Жаль, что Вы не уверены…”.

/*let result = confirm("Вы уверены?")
if (result) {
    console.log('Мы рады, что Вы уверены!');
}
else{
    console.log('Жаль, что Вы не уверены…')
}*/

//Задание №6 перепишите код, используя конструкцию switch-case, запрашивая возраст пользователя через диалоговое окно.
/*<script>
    let age = 101;

    if (age == 18) {
        alert('Вы совершеннолетний, все можно!');
    } else if (age == 10) {
        alert('Вам надо учить уроки!');
    } else if (age == 30) {
        alert('Ложитесь спать, завтра на работу');
    } else {
        alert('Мы не знаем что Вам делать');
    }
</script>*/


/*let age = prompt("Введите ваш возраст: ");
n = parseInt(age)
switch(n) {
    case 18:
        console.log('Вы совершеннолетний, все можно!');
        break;
    case 10:
        console.log('Вам надо учить уроки!');
        break;
    case 30:
        console.log('Ложитесь спать, завтра на работу');
        break;
    default:
        console.log('Мы не знаем, что вам делать');       
}*/

//Задание №7. Создайте массив с произвольными элементами. Выведите в документе или консоли все данные из массива.
// При желании можете его предварительно отсортировать, как вам будет удобно(по возрастанию или убыванию)

/*let list = [10, 3, 6, 8, 1, 9];
list = list.sort(function(a,b){return a - b})
for (i=0; i < list.length; i++) {
    console.log(list[i]);
}*/

//Задание №8. Создайте массив с элементами 'a', 'b', 'c'. 
//Запишите вместо первого элемента слово, вместо второго - предложение, вместо третьего - новую букву.
//Массив должен состоять только из строк. Выведите итоговый массив в документ или в консоль.

/* let list = ['a', 'b','c'];
console.log(list);
list[0] = 'Javascript';
list[1] = 'is very cool language of'
list[2] = 'P'
console.log(list) */

//Задание №9. Создайте массив с произвольными элементами(числами).
//Увеличьте каждый элемент массива на единицу. Выведите итоговый массив в документ или в консоль.

let list = [5, 9, 15, 20, 56, 54, 12, 3, 8, 2, 1];
console.log(list)
for (i=0; i<list.length; i++){
    list[i] = list[i] + 1
}
console.log(list)