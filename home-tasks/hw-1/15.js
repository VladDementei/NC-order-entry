//15) Условие: дан целочисленный массив в градусах Цельсия.
// 	Задание: 1. преобразовать элементы массива в значения по Фаренгейту. 2. найти все положительные элементы.
// 	Примечание: исходный массив должен содержать как положительные, так и отрицательный значения.
let celsius = [-20,-7,-4,0,4,8,30];
let fahrenheit = celsius.map(elem => elem*1.8 + 32);
let positive = celsius.filter(elem => elem > 0);
console.log(fahrenheit);
console.log(positive);
