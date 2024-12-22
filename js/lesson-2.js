//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];
// function findSmallerNumber(numbers) {
//   if (Array.isArray(numbers)) {
//     let min = Math.min(...numbers);
//     return min;
//   }
// }
// Напиши функцію findLongestWord(string)
// яка приймає довільний рядок
// що складається лише з розділених слів
// пробілом (параметр string)
// і повертає найдовше слово у цьому рядку

// const string = "Nunc sed turpis a felis in nunc fringilla";
// function findLongestWord(string) {
//   let arr = string.split(" ");
//   console.log(arr);
//   let longWord = arr[0];
//   for (const element of arr) {
//     if (element.length > longWord.length) {
//       longWord = element;
//     }
//   }
//   return longWord;
// }
// console.log(findLongestWord(string));

/*
Напишіть функцію caclculateAverage()
яка приймає довільну кількість
аргументів і повертає їхнє середнє значення.
Додати перевірку, що аргументи це числа.
const arr = [2, 6, 24, 7, 35, 24, "hello", 9, "world"];
*/

// function caclculateAverage(array) {
//   let sum = 0;
//   let count = 0;
//   for (const item of array) {
//     if (typeof item === "number") {
//       sum += item;
//       count++;
//     }
//   }
//   return sum / count || 0;
// }

// const arr = [2, 6, 24, 7, 35, 24, "hello", 9, "world"]
// console.log(caclculateAverage(arr));
// console.log(caclculateAverage([]));

//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть код для сумування всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

function foo(salaries) {
  let sum = 0;
  for (const key of Object.values(salaries)) {
    sum += key;
  }
  return sum;
}

console.log(foo(salaries));
