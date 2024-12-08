//! У змінній min лежить число від 0 до 59. Визначте у котру чверть години
//! Попадає це число (у першу, другу, третю або четверту).

function getQuoter(min) {
  if (min >= 0 && min < 15) {
    return 'first quater';
  } else if (min >= 15 && min < 30) {
    return 'second quater';
  } else if (min >= 30 && min < 45) {
    return 'third quater';
  } else if (min >= 45 && min <= 59) {
    return 'four quater';
  } else {
    return 'incorect';
  }
}
console.log(getQuoter(13));
