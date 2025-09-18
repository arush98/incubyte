function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /[\n,]/;
  let numString = numbers;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const rawDelimiter = parts[0].slice(2); 

    const escaped = rawDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    delimiter = new RegExp(escaped);
    numString = parts[1];
  }

  const nums = numString.split(delimiter).map(Number);

  // Step 6: check for negatives
  const negatives = nums.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return nums.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };
