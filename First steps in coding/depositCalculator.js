function depositCalculator(input) {
  let sum = Number(input[0]);
  let depositDuration = Number(input[1]);
  let yearsInterestRate = Number(input[2]);
  let interest = (sum * yearsInterestRate) / 100;
  let monthlyInterest = (interest / 12).toFixed(2);
  let totalSum = sum + depositDuration * monthlyInterest;
  console.log(totalSum);
}
depositCalculator(["2350", "6 ", "7 "]);
