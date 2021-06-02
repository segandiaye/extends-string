'use strict';

let param_string;

/**
 * @param {String} word
 * @returns {String}
 */
function countOccurencesOf(word) {
    checkString();

    return param_string.split(word).length - 1;
}

/**
 * @returns {String}
 */
function encryptInOccurencesFormat() {
    checkString();
    let formatted_string = '';

    Array.from(param_string).forEach((char) => {
        const count = param_string.split(char).length - 1;
        if (count && formatted_string.indexOf(char) == -1) {
            formatted_string += '' + count + char;
        }
    });
    formatted_string = formatted_string.split(' ').join('');

    return formatted_string;
}

/**
 * @param {Number} index
 * @returns {String}
 */
function removeByIndex(index) {
    checkString();

    if (index == -1) {
        return param_string;
    }

    const array = Array.from(param_string);

    array.splice(index, 1);

    return array.join('');
}

/**
 * @param {String} word
 * @returns {String}
 */
function removeWord(word) {
    checkString();
    const index = param_string.indexOf(word);

    if (index == -1) {
        return param_string;
    }

    param_string = param_string.replace(word, '');

    return param_string;
}

/**
 * @param {String} word
 * @returns {String}
 */
function removeWordAll(word) {
    checkString();
    let index = param_string.indexOf(word);

    if (index == -1) {
        return param_string;
    }

    const array = Array.from(param_string);

    let count_word_occurences = countOccurencesOf(word);
    const original_word = word;
    while (count_word_occurences > 0) {
        count_word_occurences--;
        word = original_word;
        if (word.length > 1) {
            index = array.join('').indexOf(word);
            array.splice(index, word.length, word);
        }

        array.splice(index, 1);
    }

    param_string = array.join('');
    return param_string;
}

/**
 * @returns {String}
 */
function reverse() {
    checkString();

    const array = Array.from(param_string).reverse();

    param_string = array.join('');
    return param_string;
}

/**
 * @param {Number} start
 * @param {String} word
 * @returns {String}
 */
function add(start, word) {
    checkString();

    const array = Array.from(param_string);
    array.splice(start, 0, word);

    param_string = array.join('');
    return param_string;
}

/**
 * @param {String} word
 * @returns {String}
 */
function addInHead(word) {
    checkString();

    if (word === undefined || word === null) {
        return;
    }

    param_string = word + param_string;
    return param_string;
}

/**
 * @param {String} word
 * @returns {String}
 */
function addInEnd(word) {
    checkString();

    if (word === undefined || word === null) {
        return;
    }

    param_string = param_string + word;
    return param_string;
}

/**
 * @param {Number} index
 * @returns {String}
 */
function upperByIndex(index) {
    checkString();

    const array = Array.from(param_string);

    if (!array[index]) {
        return param_string;
    }

    array[index] = array[index].toUpperCase();

    param_string = array.join('');
    return param_string;
}

/**
 * @param {String} word
 * @returns {String}
 */
function upperWord(word) {
    checkString();

    const index = param_string.indexOf(word);
    if (index == -1) {
        return param_string;
    }

    param_string = param_string.replace(word, word.toUpperCase());

    return param_string;
}

/**
 * @param {String} word
 * @returns {String}
 */
function upperWordAll(word) {
    checkString();

    let index = param_string.indexOf(word);
    if (index == -1) {
        return param_string;
    }

    const array = Array.from(param_string);

    let count_word_occurences = countOccurencesOf(word);
    const original_word = word;
    let count_deleted = 0;
    while (count_word_occurences > 0) {
        count_word_occurences--;
        word = original_word;
        if (word.length > 1) {
            index = array.join('').indexOf(word);
            array.splice(index - count_deleted, word.length, word);
        }

        array.splice(index - count_deleted, 1, word.toUpperCase());
        count_deleted += word.length - 1;
    }

    param_string = array.join('');
    return param_string;
}

/**
 * @param {Number} index
 * @returns {String}
 */
function lowerByIndex(index) {
    checkString();

    const array = Array.from(param_string);

    if (!array[index]) {
        return param_string;
    }

    array[index] = array[index].toLowerCase();

    param_string = array.join('');
    return param_string;
}

/**
 * @param {String} word
 * @returns {String}
 */
function lowerWord(word) {
    checkString();

    const index = param_string.indexOf(word);
    if (index == -1) {
        return param_string;
    }

    param_string = param_string.replace(word, word.toLowerCase());
    return param_string;
}

/**
 * @param {String} word
 * @returns {String}
 */
function lowerWordAll(word) {
    checkString();

    let index = param_string.indexOf(word);
    if (index == -1) {
        return param_string;
    }

    const array = Array.from(param_string);

    let count_word_occurences = countOccurencesOf(word);
    const original_word = word;
    let count_deleted = 0;
    while (count_word_occurences > 0) {
        count_word_occurences--;
        word = original_word;
        if (word.length > 1) {
            index = array.join('').indexOf(word);
            array.splice(index - count_deleted, word.length, word);
        }

        array.splice(index - count_deleted, 1, word.toLowerCase());
        count_deleted += word.length - 1;
    }

    param_string = array.join('');
    return param_string;
}

/**
 * @param {Number} start
 * @param {Number} end
 * @param {String} word
 * @returns {String}
 */
function splice(start, end, word) {
    checkString();
    checkNumbers(start, end);

    if (word === undefined || word === null) {
        return;
    }

    const old_word = param_string.slice(start, end + 1);
    const array = Array.from(param_string);

    array.splice(start, old_word.length, word);

    param_string = array.join('');
    return param_string;
}

function checkString() {
    if (!param_string) {
        // throw new Error('Missing string.');
        return;
    }
}

function checkNumbers(start, end) {
    if (!start && start != 0 || Math.sign(start) != 1 && Math.sign(start) != 0 || !end || Math.sign(end) != 1 && Math.sign(end) != 0) {
        throw new Error('One of the start or end value is not a number.');
    }
}

module.exports = function(param) {
    param_string = param;

    return {
        countOccurencesOf,
        encryptInOccurencesFormat,
        removeByIndex,
        removeWord,
        removeWordAll,
        reverse,
        add,
        addInHead,
        addInEnd,
        upperByIndex,
        upperWord,
        upperWordAll,
        lowerByIndex,
        lowerWord,
        lowerWordAll,
        splice,
    };
};
