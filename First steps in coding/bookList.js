function bookList(input) {
  let pagesCount = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let daysNeeded = Number(input[2]);
  let timeNeeded = pagesCount / pagesPerHour;
  let hoursDailyNeeded = timeNeeded / daysNeeded;
  console.log(hoursDailyNeeded);
}
bookList(["432 ", "15 ", "4 "]);
