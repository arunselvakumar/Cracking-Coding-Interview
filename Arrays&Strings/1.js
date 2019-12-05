/*
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures.
 */

function hasUniqueCharacters(input) {
    let hasDuplicates = false;
    const characters = input.split('');
    const characterDictionary = {};

    characters.forEach(character => {
        if (characterDictionary[character]) {
            hasDuplicates = true;
        }

        characterDictionary[character] = character;
    });

    return !hasDuplicates;
}

describe('hasUniqueCharacters()', function() {
    it('should return `TRUE` when the input character is Unique', function () {
        expect(hasUniqueCharacters('ABCDEFGH')).toBe(true);
    });

    it('should return `FALSE` when the input character is not Unique', function () {
        expect(hasUniqueCharacters('ABCDC')).toBe(false);
    });
});
