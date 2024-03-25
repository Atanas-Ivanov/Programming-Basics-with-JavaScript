function basketballEquipment(input) {
  let yearsTax = Number(input[0]);
  let shoesPrice = yearsTax - (yearsTax * 40) / 100;
  let clothes = shoesPrice - (shoesPrice * 20) / 100;
  let ball = clothes / 4;
  let accsessories = ball / 5;
  let totalPrice = shoesPrice + clothes + ball + accsessories + yearsTax;
  console.log(totalPrice);
}
basketballEquipment(["550 "]);
