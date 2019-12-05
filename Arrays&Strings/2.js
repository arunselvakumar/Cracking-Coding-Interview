/*
 * Given two strings, write a method to decide if one is permutation of the other
 */

function checkPermutation(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const firstCharacters = {};
    const secondCharacters = {};

    first.split('').forEach(character => {
        if (firstCharacters[character]) {
            firstCharacters[character] = ++firstCharacters[character];
        } else {
            firstCharacters[character] = 1;
        }
    });

    second.split('').forEach(character => {
        if (secondCharacters[character]) {
            secondCharacters[character] = ++secondCharacters[character];
        } else {
            secondCharacters[character] = 1;
        }
    });

    if (firstCharacters.length !== secondCharacters.length) {
        return false;
    }

    for (let character in firstCharacters) {
        if(firstCharacters[character] !== secondCharacters[character]) {
            return false;
        }
    }

    return true;
}

console.log(checkPermutation('hello', 'word'));
console.log(checkPermutation('hello', 'ehlol'));
console.log(checkPermutation('dog', 'dag'));
console.log(checkPermutation('god', 'dog'));
