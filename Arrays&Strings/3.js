/*
 * URLify: Write a method to replace all spaces in a string with '%20'
 */

function urlify(input) {
    const characters = input.trim().split('');
    const resultUrl = [];
    for (let i = 0; i < characters.length; i++) {
        if (characters[i] === ' ') {
            resultUrl.push('%20');
        } else {
            resultUrl.push(characters[i])
        }
    }

    return resultUrl.join('');
}

console.log(urlify(''));
console.log(urlify(' '));
console.log(urlify('   '));
console.log(urlify('arun'));
console.log(urlify('arun selva'));
console.log(urlify('arun selva kumar'));

