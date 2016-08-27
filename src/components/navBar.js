import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component{
  render(){
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" name="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavBar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Latin Practice </a>
          </div>
          <ul id="largeinputli" className="nav navbar-nav navbar-right">
            <li>
              <form>
                <input type="text" name="name" className="form-control" autoComplete="off"></input>
                <span id='large-search-glyph' className="glyphicon glyphicon-search"></span>
              </form>
              </li>
            </ul>
          <div className="collapse navbar-collapse" id="myNavBar">
            <ul  className="nav navbar-nav">
              <li><Link to="SentencesContainer">Sentence Practice</Link></li>
              <li><Link to="NounStemPractice">Noun Stem Practice</Link></li>
              <li><Link to="NounEndingPractice">Noun Ending Practice</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li id="inputli">
                  <form >
                    <input type="text" name="name" className="form-control"  autoComplete="off"></input>
                    <span id='search-glyph' className="glyphicon glyphicon-search"></span>
                  </form>
                  </li>
              <li><a href="#">Profile Options</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
