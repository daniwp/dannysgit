var numbers = {
    small: [1, 2, 3, 4, 5, 6, 7],
    medium: [54, 54, 54, 54, 23, 612, 712],
    large: [1214214, 2124124, 3122112, 4412441, 541221, 6124124, 7124124]
};

numbers.small.map(function (num) {
    console.log(num);
});

numbers.medium.map(function (num) {
    console.log(num);
});

numbers.large.map(function (num) {
    console.log(num);
});

var sum = function (array) {
    return array.reduce(function(x, y) {
        return x + y;
    });
};

console.log(sum(numbers.small));



