import dispatcher from "../dispatcher";

export function checkCorrect(input, correctAnswer){
  dispatcher.dispatch({
    type: "CHECK_CORRECT",
    input: input,
    correctAnswer: correctAnswer,
  });
}

export function getWordInfo(word){
  dispatcher.dispatch({
    type: "TOGGLE_HELP",
    toggleTo : true,
  });
  dispatcher.dispatch({
    type: "GET_WORD_INFO",
    word: word,
  });
}

export function newSentence(){
  dispatcher.dispatch({
    type: "NEW_SENTENCE",
  });
}

export function toggleSetting(setting, toggleTo){
  dispatcher.dispatch({
    type: "TOGGLE_SETTING",
    setting: setting,
    toggleTo: toggleTo,
  });
}
