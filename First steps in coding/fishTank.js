function fishTank(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let volumeTaken = Number(input[3]);
  let aquariumVolume = length * width * height;
  let volumeInLitters = aquariumVolume / 1000;
  let spaceTaken = volumeTaken / 100;
  let waterNeeded = volumeInLitters * (1 - spaceTaken);
  console.log(waterNeeded);
}
fishTank(["105 ", "77 ", "89 ", "18.5 "]);
