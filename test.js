const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

let date = "2023-07-20T08:41:05.215Z";
date = new Date(date);
let deliveryDate = 15 * 24 * 60 * 60 * 1000 + date.getTime();
deliveryDate = new Date(deliveryDate);
console.log("delivery day", deliveryDate.getDate());

console.log("delivery month", months[deliveryDate.getMonth() - 1]);
console.log(deliveryDate.getFullYear());
