const head = function(array) {
  let first = Number(array.slice(0, 1));
  if (array.length === 0) {
    return undefined;
  } else {
    return first;
  }
};

module.exports = head;
