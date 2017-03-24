import dispatcher from "../dispatcher";

export function checkUser(username, password){
  dispatcher.dispatch({
    type: "CHECK_USER",
    username: username,
    password: password,
  });
}

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

export function newQuestion(question){
  dispatcher.dispatch({
    type: "NEW_QUESTION",
    question : question,
  });
}

export function toggleSetting(setting, toggleTo){
  dispatcher.dispatch({
    type: "TOGGLE_SETTING",
    setting: setting,
    toggleTo: toggleTo,
  });
}
