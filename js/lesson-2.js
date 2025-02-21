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

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// function foo(salaries) {
//   let sum = 0;
//   for (const key of Object.values(salaries)) {
//     sum += key;
//   }
//   return sum;
// }

// console.log(foo(salaries));

//Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція повертає загальну вартість каменів
//з ​​таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 6 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, {
//   for (let stone of stones) {
//     if (stone.name === stonesName)
//       return stone.price * stone.quantity;
//   }
// }

// console.log(calcTotalPrice(stones, 'Смарагд'));

// Угруповання об'єктів студентів по курсам
// Створіть масив об'єктів, що являють собою різних студентів. Кожен об'єкт повинен містити властивості ім'я, вік та курс.
// Використовуйте цикл for...of, щоб згрупувати студентів за курсами.
// Результатом буде об'єкт, де ключами будуть назви курсів, а значення – масиви об'єктів студентів, що належать до відповідного курсу.
// Очікуванний результат:
// const groupedStudents = {
//   Java: [
//     { name: "Алиса", age: 20, course: "Java" },
//     { name: "Карл", age: 21, course: "Java" },
//   ],
//   Python: [{ name: "Боб", age: 22, course: "Python" }],
//   JavaScript: [{ name: "Джон", age: 23, course: "JavaScript" }],
// };

// function groupStudentByCourse(students) {
//   const groupStudents = {};
//   for (const student of students) {
//     const course = student.course;
//     if (!groupStudents[course]) {
//       groupStudents[course] = [];
//     }
//     groupStudents[course].push(student);
//   }
//   return groupStudents;
// }

// const students = [
//   { name: "Алиса", age: 20, course: "Java" },
//   { name: "Боб", age: 22, course: "Python" },
//   { name: "Карл", age: 21, course: "Java" },
//   { name: "Джон", age: 23, course: "JavaScript" },
// ];

// console.log(groupStudentByCourse(students));

// =======================================================
// function transformString(string) {
//   const words = string.split("_");
//   return words.join("-");
// }

// transformString("user_age"); // "user-age"
// transformString("price_per_droid"); // "price-per-droid"
// ============================================================
// function calculateEngravingPrice(message, pricePerWord) {
//   const newMessage = message.split(" ");
//   const wordMessage = newMessage.length;
//   return wordMessage * pricePerWord;
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);
// ================================================================
// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }
// ===================================================================
// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);
// ======================================================================
// Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in на метод Object.keys() для отримання масиву властивостей. Функція має повернути кількість властивостей в об'єкті object.

function countProps(object) {
  let propCount = 0;
  const keys = Object.keys(countProps);

  for (const key in object) {
    if (object.values(key)) {
      propCount += 1;
    }
  }

  return propCount;
}
