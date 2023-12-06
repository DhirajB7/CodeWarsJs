//November 21, 2023 at 2:00:58.052 PM UTC+5:30

const returnDateTimeStamp = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();

  const timeInAmPM = date
    .toLocaleString("en-US", { hour: "numeric", hour12: true })
    .split(" ");

  return `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()} at ${checkIfZeroShouldBePrefixed(
    timeInAmPM[0]
  )}:${checkIfZeroShouldBePrefixed(
    date.getMinutes()
  )}:${checkIfZeroShouldBePrefixed(date.getSeconds())}.${date.getMilliseconds()} ${timeInAmPM[1]}`;
};

const checkIfZeroShouldBePrefixed = (data = "") => {
  return data.length === 1 ? "0" + data : data;
};

console.log(returnDateTimeStamp());
