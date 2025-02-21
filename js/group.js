// Задачі:
// 1. Виведи числа від 1 до 10 у консоль за допомогою циклу for.

// for (let i = 0; i <= 10; i++) console.log(i);

// 2. Виведи всі парні числа від 1 до 20 у консоль.
// for (let i = 0; i <= 19; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// 3. Напиши функцію sumFromTo(start, end), яка обчислює суму всіх чисел від start до end. Використай цикл for.
// function sumFromTostr(start, end) {
//   let sum = 0;
//   for (let i = start; i < end; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumFromTostr(1, 10));

// 4. Виведи таблицю множення для числа 5 у консоль:

// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50

// let sum = 5;
// for (let i = 1; i <= 10; i++) {
//   sum = 5 * i;
//   console.log(`5*${i} = ${sum}`);
//   // console.log(`5*${i} = ${5 * i}`);
// }

// 5. Напиши функцію checkAge(age), яка приймає вік і повертає:

// "Дитина", якщо вік менше 13;
// "Підліток", якщо від 13 до 19;
// "Дорослий", якщо більше 19.
// function checkAge(age) {
//   if (age <= 13) {
//     return 'child';
//   } else if (age > 13 && age <= 19) {
//     return 'boy';
//   } else {
//     return 'man';
//   }
// }
// console.log(checkAge(12));

// 6. Напиши функцію square(num), яка приймає число num і повертає його квадрат.
// const SSQUARE = 2;
// function square(num) {
//   return num ** SSQUARE;
// }
// console.log(square(5));

// 7. Напиши програму, яка рахує всі числа від 1 до 50, але:

// Якщо число кратне 3, виводь "Fizz".
// Якщо кратне 5, виводь "Buzz".
// Якщо кратне і 3, і 5, виводь "FizzBuzz".
// 8. Напиши функцію calculateDiscount(price, discountPercent), яка повертає ціну товару з урахуванням знижки.

// 9. Використай switch для написання функції getSeason(month), яка приймає номер місяця (1-12) і повертає пору року:

// "Зима" для грудня, січня, лютого;
// "Весна" для березня, квітня, травня;
// "Літо" для червня, липня, серпня;
// "Осінь" для вересня, жовтня, листопада.
// 10. Напиши функцію isEven(num), яка повертає true, якщо число парне, і false, якщо ні.

// 11. Напиши функцію isPrime(num), яка перевіряє, чи є число num простим (просте число — це число, яке ділиться тільки на 1 і на себе).

// 12. Напиши програму, яка виведе числа від 10 до 1 у зворотному порядку.

// 13. Напиши функцію getDaysInMonth(month, year), яка повертає кількість днів у заданому місяці.

// 14. Напиши функцію factorial(num), яка обчислює факторіал числа num (наприклад, factorial(5) = 5 * 4 * 3 * 2 * 1).

// 15. Напиши функцію getRandom(min, max), яка повертає випадкове ціле число між min і max.
// let num = [];
// for (let i = 0; i < 10; i++) {
//   for (let g = 0; g < 10; g++) {
//     num.push(g);
//   }
//   console.log(num);
//   num.length = 0;
// }
