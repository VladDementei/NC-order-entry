//16) Условие: даны два целочисленных массива.
// 	Задание: объединить два массива в один без повторяющихся элементов.
// Использовать встроенный в JS объект, позволяющий хранить уникальные значения любого типа.
let arr1 = [3, -2, 6, 1, 3, 30, 8, 1, -8];
let arr2 = [-20, -7, -4, 0, 4, 8, 30];
let set = new Set(arr1.concat(arr2));
console.log(set);
