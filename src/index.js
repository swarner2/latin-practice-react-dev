import React from 'react';
import { render } from 'react-dom';
import App from 'pages/app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import appSentencesContainer from './pages/appSentencesContainer';
import appNounStemPractice from './pages/appNounStemPractice';
import appNounEndingPractice from './pages/appNounEndingPractice';
import appVerbStemPractice from './pages/appVerbStemPractice';

render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={appSentencesContainer}></IndexRoute>
      <Route path={"NounStemPractice"} component={appNounStemPractice}></Route>
      <Route path={"SentencesContainer"} component={appSentencesContainer}></Route>
      <Route path={"NounEndingPractice"} component={appNounEndingPractice}></Route>
      <Route path={"VerbStemPractice"} component={appVerbStemPractice}></Route>
    </Route>
  </Router>,
document.getElementById('app'));
