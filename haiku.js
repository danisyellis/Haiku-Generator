var fs = require('fs');
console.log( fs.readFileSync('./cmudict.txt') );

function createHaiku(structure) {
	console.log("This should log a haiku with the structure "+ structure)
}

module.exports = {
	createHaiku: createHaiku,
};