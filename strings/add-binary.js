// O(max(n, m))
const addBinary = function (a, b) {
  let result = "";
  let carry = 0;
  let p1 = a.length - 1;
  let p2 = b.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    const bit1 = p1 >= 0 ? parseInt(a[p1]) : 0;
    const bit2 = p2 >= 0 ? parseInt(b[p2]) : 0;

    let sum = bit1 + bit2 + carry;

    if (sum >= 2) {
      carry = 1;
      sum = sum % 2;
    } else {
      carry = 0;
    }

    result = sum.toString() + result;

    p1--;
    p2--;
  }

  if (carry) result = "1" + result;

  return result;
};
