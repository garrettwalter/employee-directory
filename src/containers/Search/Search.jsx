import React, { Component } from 'react';
import API from "../../API/API.js";
import SearchForm from "../../components/Search/SearchForm";
import ResultList from "../../components/Search/ResultList";

class Search extends Component {
    state = {
      search: "",
      results: []
    };
  
    componentDidMount() {
      this.searchEmployees("male");
    }
  
    searchEmployees = query => {
      API.search(query)
        .then(res => this.setState({ results: res.data.results }))
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      });
    };
  

    handleFormSubmit = event => {
      event.preventDefault();
      this.searchEmployees(this.state.search);
    };
  
    render() {
      return (
        <div>
          <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <ResultList results={this.state.results} />
        </div>
      );
    }
  }
  
  export default Search;
  