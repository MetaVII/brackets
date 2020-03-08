module.exports = function check(str, bracketsConfig) {
    // your solution
    const closers = new Map();
    const equals = new Map();
    const stack = [];

    bracketsConfig.forEach(element => {
        if (element[0] === element[1]) {
            equals.set(element[1], element[0]);
        } else {
            closers.set(element[1], element[0]);
        }
    });

    for (let index = 0; index < str.length; index++) {
        const element = str[index];

        if (equals.has(element)) {
            if (stack.length > 0 && stack[stack.length - 1] === element) {
                stack.pop();
            } else {
                stack.push(element);
            }
            continue;
        }

        if (closers.has(element)) {
            if (stack[stack.length - 1] === closers.get(element)) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(element);
        }
    }

    if (stack.length === 0) {
        return true;
    }

    return false;
};
