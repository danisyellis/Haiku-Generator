function createHaiku(structure, syllabelsArray){
  var arrOfWords;
  return structure.map(function(lines){
    return lines.map(function(syls){
      arrOfWords = syllabelsArray[syls];
      return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
    }).join(' ');
  }).join('\n');
}

module.exports = {
	createHaiku: createHaiku,
};

