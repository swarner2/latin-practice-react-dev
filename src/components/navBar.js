import React from 'react';

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
            <a className="navbar-brand" href="#">My App </a>
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
              <li><a href="/#/home">Home</a></li>
              <li><a href="/#/sentence">Sentence Practice</a></li>
              <li><a href="/#/vocabulary">Vocabulary</a></li>
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
