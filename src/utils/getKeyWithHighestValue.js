function getKeyWithHighestValue(obj) {
  let maxKey = null;
  let maxValue = Number.MIN_SAFE_INTEGER;

  for (const key in obj) {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
      maxKey = key;
    }
  }

  return maxKey;
}

export default getKeyWithHighestValue;
