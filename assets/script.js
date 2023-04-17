let currentAge = prompt("How old are you?");

calculateAge();

function calculateAge() {
  let yearsLeft = 90 - currentAge;
  let days = yearsLeft * 365;
  let monthsLeft = yearsLeft * 12;
  let weeksLeft = yearsLeft * 52;
  alert(
    "You have " +
      yearsLeft +
      " years " +
      days +
      " days " +
      monthsLeft +
      " months " +
      weeksLeft +
      " weeks left to live, assumming you live to be 90."
  );
}
