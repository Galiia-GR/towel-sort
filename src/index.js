// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) {
        return [];
    } else {
        const result = [];
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                result.push(matrix[i]);
            } else {
                result.push(matrix[i].reverse());
            }
        }

        const len = result.length;
        let concatReslt;

        if (len === 2) {
            concatReslt = result[len - len].concat(result[len - len + 1]);
        } else if (len === 3) {
            concatReslt = result[len - len].concat(
                result[len - len + 1],
                result[len - len + 2]
            );
        } else if (len === 4) {
            concatReslt = result[len - len].concat(
                result[len - len + 1],
                result[len - len + 2],
                result[len - len + 3]
            );
        }

        return concatReslt;
    }
};
