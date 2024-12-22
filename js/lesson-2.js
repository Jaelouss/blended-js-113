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

const string = "Nunc sed turpis a felis in nunc fringilla";
function findLongestWord(string) {
  let arr = string.split(" ");
  console.log(arr);
  let longWord = arr[0];
  for (const element of arr) {
    if (element.length > longWord.length) {
      longWord = element;
    }
  }
  return longWord;
}
console.log(findLongestWord(string));
