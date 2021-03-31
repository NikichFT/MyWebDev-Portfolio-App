import React from 'react';
import './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import FetchData from './service/FetchData';



class App extends React.Component {

  fetchData = new FetchData;
  
  state = {
    headtitle: 'Home',
    projects: []
  }
  
  componentDidMount() {
    this.updateProjects();
  }

  changeHeadtitle(title) {
    this.setState({headtitle: title})
  }

  updateProjects(){
    this.fetchData.getProj()
      .then(data => {
        this.setState({ projects: data.map(item => item)});
      })
  }



  render() {
    console.log(this.state.projects)
        return (
        <BrowserRouter>
        <div className="App">
          <Header changeHeadtitle = {this.changeHeadtitle.bind(this)}/>
          <Main headtitle = {this.state.headtitle} projects = {this.state.projects} changeHeadtitle = {this.changeHeadtitle.bind(this)}/>
        </div>
        </BrowserRouter>
    );
    }
}

export default App;
