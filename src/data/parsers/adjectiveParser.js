export default function Adjective(meaning, dictionaryEntry, types, chapter, section, special){
	var self = this;
	//clean up dictionaryEntry
	dictionaryEntry = dictionaryEntry.replace(" ,", ",");
	this.dictionaryEntry = dictionaryEntry.trim();
	this.firstDict = dictionaryEntry.trim().match(/^[a-zA-Z]+(?=,)/).join();
	//Order Matters.  Gender must be in front of Declension to remove any of the info.
	//For words that don't have a declared gender those are dealt with under the declension section.
	this.declension = getDeclension();
	this.stem = getStem();
	this.meaning = getMeanings();
	this.types = types.map(function(x){return x.trim();});
	this.chapter = chapter.trim();
	this.section = section;
	this.ending = '';
	//handel special cases for words
	if(special === 'on'){
		this.on = true;
	}

//so endings don't show up in the helper tool
	Object.defineProperty(this, 'ending', {
  enumerable: false,
	});

function test(x){
	if(x === undefined){
		console.log('failed test: ' + self);
		self.meaning = 'something was not defined, check how you entered the data for this word to fix it';
	}
	if(x.match(/\(/)){console.log('failed test: ' + self);}
}
	test(this.firstDict);
	test(this.declension);
	test(this.stem);
	test(this.meaning);


	function getMeanings(){
		//clean input
	 	meaning = meaning.replace(/\([\w\s]*\)/i, "");
		meaning = meaning.replace(';', ',');
		return meaning.trim();
	}
	function getDeclension(){

		//clean the data from extra spaces at the end
		dictionaryEntry = dictionaryEntry.trim();
		//check endings to get undefined genders and declensions
		if (dictionaryEntry.match('us, a, um') || dictionaryEntry.match('us, -a, -um')) {
			return 'first/second, standard';
		}
		else if (dictionaryEntry.match('er,') && dictionaryEntry.match('ra,')) {
			return 'first/second, er';
		}
		else if (dictionaryEntry.match('ns,')) {
			return 'third, ns';
		}
		else if (dictionaryEntry.match('is,') || dictionaryEntry.match('is$') ) {
			return 'third, standard';
		}
		else {
			console.log('uncaught declension: ' + dictionaryEntry);
		}
	}
	//note that you have to check if it is a pluralOnly word
	function getStem(){
		switch (self.declension) {
			case 'first/second, standard':
				self.declension = 'first/second';
				return self.dictionaryEntry.match(/\w+(?=us,)/)[0]
				break;
			case 'first/second, er':
				self.declension = 'first/second';
				return self.dictionaryEntry.match(/\w+(?=a,)/)[0]
				break;
			case 'third, ns':
				self.declension = 'third';
				return self.dictionaryEntry.match(/\w+(?=is)/)[0]
				break;
			case 'third, standard':
				self.declension = 'third';
				return self.dictionaryEntry.match(/\w+(?=is,)|\w+(?=is$)/)[0]
				break;
			}
	}
	return this;
}
