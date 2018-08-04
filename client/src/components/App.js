import React, {Component} from 'react';
import Header from "./Header/Header";
import Search from "./Search/Search";
import Results from "./Results/Results";
import Saved from "./Saved/Saved";
import API from "./../utils/API";

class App extends Component {
  state = {
    search: "",
    start: "",
    end: "",
    result: [],
    savedArticles: []
  }

  componentDidMount() {
    this.loadArticles();
  };

  loadArticles = () => {
    API.getSavedArticles().then((res) => {
      this.setState({savedArticles: res.data});
    }).catch((err) => {
      console.log(err);
    });
  };

  deleteArticle = (id) => {
    API.deleteArticle(id).then((res) => {
      this.loadArticles()
    }).catch((err) => {
      console.log(err);
    });
  };

  handleSaveButton = (title, url, date, summary) => {
    API.saveArticles({title, url, date, summary}).then((res) => {
      this.loadArticles()
    }).catch((err) => {
      console.log(err);
    });
  };

  handleFormSubmit = (event) => {
    this.setState({
      search: "",
      start: "",
      end: ""
    });
    event.preventDefault();
  };

  // function to detect any change 
  handleInputChange = (event) => {
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    let newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleButtonClick = () => {
    if (this.state.search !== "") {
      API.getData(this.state.search, this.state.start, this.state.end).then((res) => {
        this.setState({result: res.data.response.docs})
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <Search handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} handleButtonClick={this.handleButtonClick} search={this.state.search}/>
        <Results result={this.state.result} handleSaveButton={this.handleSaveButton}/>
        <Saved savedArticles={this.state.savedArticles} deleteArticle={this.deleteArticle}/>
      </div>
    );
  }
}

export default App;
