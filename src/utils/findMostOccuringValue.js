function countOccurrences(obj) {
  const occurrences = {};

  // Iterate over the object
  for (const key in obj) {
      const value = obj[key];

      // If the value is already in occurrences, increment its count
      if (occurrences[value]) {
          occurrences[value]++;
      } else {
          // Otherwise, initialize its count to 1
          occurrences[value] = 1;
      }
  }

  return occurrences;
}

export default countOccurrences