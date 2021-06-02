'use strict';

let string;

/**
 * @param {String} word
 * @returns {String}
 */
function countOccurencesOf(word) {
    checkString();

    return string.split(word).length - 1;
}

/**
 * @returns {String}
 */
function encryptInOccurencesFormat() {
    checkString();
    let formatted_string = '';

    Array.from(string).forEach((char) => {
        const count = string.split(char).length - 1;
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
        return string;
    }

    const array = Array.from(string);

    array.splice(index, 1);

    return array.join('');
}

/**
 * @param {String} word
 * @returns {String}
 */
function removeWord(word) {
    checkString();
    const index = string.indexOf(word);

    if (index == -1) {
        return string;
    }

    string = string.replace(word, '');

    return string;
}

/**
 * @param {String} word
 * @returns {String}
 */
function removeWordAll(word) {
    checkString();
    let index = string.indexOf(word);

    if (index == -1) {
        return string;
    }

    const array = Array.from(string);

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

    string = array.join('');
    return string;
}

/**
 * @returns {String}
 */
function reverse() {
    checkString();

    const array = Array.from(string).reverse();

    string = array.join('');
    return string;
}

/**
 * @param {Number} start
 * @param {String} word
 * @returns {String}
 */
function add(start, word) {
    checkString();

    const array = Array.from(string);
    array.splice(start, 0, word);

    string = array.join('');
    return string;
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

    string = word + string;
    return string;
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

    string = string + word;
    return string;
}

/**
 * @param {Number} index
 * @returns {String}
 */
function upperByIndex(index) {
    checkString();

    const array = Array.from(string);

    if (!array[index]) {
        return string;
    }

    array[index] = array[index].toUpperCase();

    string = array.join('');
    return string;
}

/**
 * @param {String} word
 * @returns {String}
 */
function upperWord(word) {
    checkString();

    const index = string.indexOf(word);
    if (index == -1) {
        return string;
    }

    string = string.replace(word, word.toUpperCase());

    return string;
}

/**
 * @param {String} word
 * @returns {String}
 */
function upperWordAll(word) {
    checkString();

    let index = string.indexOf(word);
    if (index == -1) {
        return string;
    }

    const array = Array.from(string);

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

    string = array.join('');
    return string;
}

/**
 * @param {Number} index
 * @returns {String}
 */
function lowerByIndex(index) {
    checkString();

    const array = Array.from(string);

    if (!array[index]) {
        return string;
    }

    array[index] = array[index].toLowerCase();

    string = array.join('');
    return string;
}

/**
 * @param {String} word
 * @returns {String}
 */
function lowerWord(word) {
    checkString();

    const index = string.indexOf(word);
    if (index == -1) {
        return string;
    }

    string = string.replace(word, word.toLowerCase());
    return string;
}

/**
 * @param {String} word
 * @returns {String}
 */
function lowerWordAll(word) {
    checkString();

    let index = string.indexOf(word);
    if (index == -1) {
        return string;
    }

    const array = Array.from(string);

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

    string = array.join('');
    return string;
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

    const old_word = string.slice(start, end + 1);
    const array = Array.from(string);

    array.splice(start, old_word.length, word);

    string = array.join('');
    return string;
}

function checkString() {
    if (!string) {
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
    string = param;

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
