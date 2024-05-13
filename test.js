const calculateDays = (currDate) => {
  let currentDate = new Date(currDate); // get the current date
  currentDate.setDate(currentDate.getDate() + 20); // set the date 20 days from now
  let options = { day: "numeric", month: "long", year: "numeric" };
  let formattedDate = currentDate.toLocaleDateString("en-US", options);
  return formattedDate;
};

calculateDays("2021-09-01T00:00:00.000Z");
