var haiku = require('./haiku');
var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');
var objectOfWordandSyllables = {};

function readCmudictFile(file){
    return fs.readFileSync(file).toString();
}


//still need an object that has every word and its number of syllables so that it can be used in createHaiku
function formatData(data){    
	//makes every word+phonemes set its own line
   var lines = data.toString().split("\n"),
       lineSplit
   var last = lines.pop();
      //splits each line into the word (lineSplit[0]) and the phonemes (lineSplit[1])
   lines.forEach(function(line){    
	    lineSplit = line.split("  ");    
	    //console.log("The word " + lineSplit[0] + " has this phoneme    layout: " + lineSplit[1]); 
	    var theWord = lineSplit[0];
	    //for each line, loops through an array of the phonemes to determine how many syllables the word has
	    phonemesArray = lineSplit[1].split(" ")
	    var numberOfSyllables = 0;
	    for(var i=0; i<phonemesArray.length; i++) {
	    	if(phonemesArray[i].match(/\d/)) {
	    		numberOfSyllables ++
	    	}
	    }
	    if(!objectOfWordandSyllables[numberOfSyllables]) {
	    	objectOfWordandSyllables[numberOfSyllables] = [];
	    }
	    objectOfWordandSyllables[numberOfSyllables].push(theWord)
	  });   
}
formatData(cmudictFile);

console.log(haiku.createHaiku([[5],[7],[5]], objectOfWordandSyllables));
console.log("")
console.log(haiku.createHaiku([[[2],[3]],[[2],[1],[4]],[5]], objectOfWordandSyllables));
