function supplies(input) {
  let penCount = Number(input[0]);
  let markersCount = Number(input[1]);
  let littersDetergentCount = Number(input[2]);
  let discount = Number(input[3]);
  let singlePenPrice = 5.8;
  let singleMarkerPrice = 7.2;
  let singleDetergentPrice = 1.2;
  let penPrice = penCount * singlePenPrice;
  let markerPrice = markersCount * singleMarkerPrice;
  let detergentPrice = littersDetergentCount * singleDetergentPrice;
  let totalPrice = penPrice + markerPrice + detergentPrice;
  let totalPriceAfterDiscount = totalPrice - (totalPrice * discount) / 100;
  console.log(totalPriceAfterDiscount);
}
supplies(["2 ", "3 ", "4 ", "25 "]);
