function getKeyWithHighestValue(obj) {
  let highestKey = null;
  let highestValue = -Infinity;

  // Iterate over the object
  for (const key in obj) {
      const value = obj[key];

      // Update highestKey if value is greater than highestValue
      if (value > highestValue) {
          highestValue = value;
          highestKey = key;
      }
  }

  return highestKey;
}

export default getKeyWithHighestValue