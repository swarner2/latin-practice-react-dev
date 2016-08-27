export function newWordList(generatedSentence) {
  return {
    english : generatedSentence.english.map( word => {

      if ('noun' in word) {
        var partOfSpeech = 'noun'
        // console.log(word[partOfSpeech]);

      }
      else if ('verb' in word) {
        var partOfSpeech = 'verb'
        // console.log(word[partOfSpeech]);

      }
      else if ('adjective' in word) {
        var partOfSpeech = 'adjective'
        // console.log(word[partOfSpeech]);
      }

      var wordData = {
        meaning : word.stem.english,
        info :{
          partOfSpeech : partOfSpeech,
          title: word[partOfSpeech].dictionaryEntry + ": ",
          titleDescription: word[partOfSpeech].meaning,
          other: partOfSpeech === 'noun' || partOfSpeech === 'adjective'?
            {
              "Declension" : word.stem.declension,
              "Case" : word.ending.case,
              "Case Use" : word.ending.caseUse
            } :
            {
              "Person" : word.ending.person,
              "Number" : word.ending.number,
              "Tense" : word.stem.tense,
              "Voice" : word.ending.voice,
            }
        }
      }
      return wordData;
    }),
    latin : generatedSentence.latin.map( wordPart => {
      return {
        meaning : wordPart.latin,
        info :{
          title: wordPart.latin,
          titleDescription: "",
          other: wordPart
        }
      }
    }),
  };
}
