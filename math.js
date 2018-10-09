exports.add = function (x, y) {
    // ToDo: Add the necessary code to add two numbers
    return x + y;
}

exports.sub = function (x, y) {
    // ToDo: Add the necessary code to subtract two numbers
    return x - y;
}

exports.sumOfPositiveNumbers = function (upperLimitInclusive) {
    // ToDo: Add the necessary code to calculate the sum of all positive
    //       numbers lower equal the specified upper limit.
    let sum = 0;

    for (let i = 1; i <= upperLimitInclusive; i++) {
      sum += i;
    }
    return sum;
}
