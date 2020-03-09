const middle = function(array) {
  const midElements = [];
  const midIndex = Math.floor(array.length/2);
  if (array.length % 2 !== 0) {
    midElements.push(array[midIndex]);
  } else if(array.length > 0) {
    midElements.push(array[midIndex - 1]);
    midElements.push(array[midIndex]);
  }
  return midElements;
}

module.exports = middle;