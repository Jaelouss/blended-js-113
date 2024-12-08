//! У змінній min лежить число від 0 до 59. Визначте у котру чверть години
//! Попадає це число (у першу, другу, третю або четверту).

/*function getQuoter(min) {
  if (min >= 0 && min < 15) {
    return "first quater";
  } else if (min >= 15 && min < 30) {
    return "second quater";
  } else if (min >= 30 && min < 45) {
    return "third quater";
  } else if (min >= 45 && min <= 59) {
    return "four quater";
  } else {
    return "incorect";
  }
}
console.log(getQuoter(13));*/

/*function getSizen(num = 3); {
let result;
switch (num) {
  case 1:
    result = "зима";
    break;
  case 2:
    result = "весна";
    break;
  case 3:
    result = "літо";
    break;
  case 4:
    result = "осінь";
    break;
    default:
    result = "Невірне значення";
}
return = result;
}
console.log(getSizen(3));*/

/*//Напишіть функцію min(a, b), яка повертає
//менше з чисел a, b
//Потрібно додати перевірку, що функція отримує числа*/


function min(a, b) {

  if (typeof a !== "number" || typeof b !== "number" ) {
    return `не число`;
  }
  return a < b ? a : b;
}
 console.log (min(4, "7"));
 console.log (min (3, 4));
