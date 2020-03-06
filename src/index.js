module.exports = function check(str, bracketsConfig) {
  // your solution
  const closers = new Map();
  const stack = [];
  bracketsConfig.forEach(element => {
    closers.set(element[1], element[1]);
  });
}
