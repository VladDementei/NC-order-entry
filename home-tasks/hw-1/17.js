//17) Условие: дан целочисленный массив.
// 	Задание:
// 		1. переставить элементы массива в обратном порядке
// 		2. проверить наличие хотя бы одного элемента, который больше 1 (результат типа boolean)
let arr1 = [3, -2, 6, 1, 3, 30, 8, 1, -8];
console.log(arr1.reverse());
console.log(arr1.find(elem => elem > 1) !== undefined);
