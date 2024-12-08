//! У змінній min лежить число від 0 до 59. Визначте у котру чверть години
//! Попадає це число (у першу, другу, третю або четверту).

function getQuoter(min) {
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
//console.log(getQuoter(13));

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

function getSizen(num) {
  let result = "";
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
      result = "не вірне значення";
      break;
  }
  return result;
}

console.log(getSizen(3));
