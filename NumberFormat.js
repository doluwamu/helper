// NumFormat formats your number with commas if the number is greater or equal to 1000
// e.g if you pass 10000 through the function,
// the result will be 10,000
const NumFormat = (num) => {
  if (!num || typeof num !== "number") {
    return 0;
  }

  const formatter = new Intl.NumberFormat("en");
  // return the result
  return formatter.format(num);
};
