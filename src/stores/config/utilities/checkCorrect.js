//returns true or false based on if the input matches the correct answer
//it only checks the answer upto the input length
export function checkCorrect(input, correctAnswer) {
  let correct = true;
  input = input.replace(/\s+/g, " " ).trim().split('')

  const sentence = correctAnswer.map(function(item, index, array){
    //to handleSentences
    if (typeof item === 'object') {
      if (item.meaning.match(/\s$/) || index === array.length -1) {
        return array[index - 1].meaning + item.meaning;
      }
    }
    //to handle one word
    else {
      return item
    }
  }).join(' ').replace(/\s+/g, " " ).trim().split("")
  input.forEach(function(letter, i){
    if(letter !== sentence[i]){
      correct = false;
    }
  });
  return correct;
}
