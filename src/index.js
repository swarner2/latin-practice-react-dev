import React from 'react';
import { render } from 'react-dom';
import App from 'pages/app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import appSentencesContainer from './pages/appSentencesContainer';
import appNounStemPractice from './pages/appNounStemPractice';
import appNounEndingPractice from './pages/appNounEndingPractice';
import appNounCaseUsePractice from './pages/appNounCaseUsePractice';
import appVerbStemPractice from './pages/appVerbStemPractice';
import appVerbEndingPractice from './pages/appVerbEndingPractice';

render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={appSentencesContainer}></IndexRoute>
      <Route path={"NounStemPractice"} component={appNounStemPractice}></Route>
      <Route path={"SentencesContainer"} component={appSentencesContainer}></Route>
      <Route path={"NounEndingPractice"} component={appNounEndingPractice}></Route>
      <Route path={"NounCaseUsePractice"} component={appNounCaseUsePractice}></Route>
      <Route path={"VerbStemPractice"} component={appVerbStemPractice}></Route>
      <Route path={"VerbEndingPractice"} component={appVerbEndingPractice}></Route>
    </Route>
  </Router>,
document.getElementById('app'));
