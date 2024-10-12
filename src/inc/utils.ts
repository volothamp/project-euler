//If input is a string that can be converted to an integer, return the integer. Otherwise return false.
export function inputToNumber(input: string): number | false {
  const num = parseInt(input, 10);
  return isNaN(num) ? false : num;
}
