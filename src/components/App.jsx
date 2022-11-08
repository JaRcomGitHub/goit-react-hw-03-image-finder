import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";

class App extends Component {
  state = {
    searchValue: '',
  }

  // async componentDidMount() {
  //   try {
  //     const response = await axios.get('/breads');
  //     console.log(response);
  //   } catch (error) {
      
  //   }
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  //   console.log(this.state.searchValue);
  // }

  handleSearchValue = searchValue => {
    this.setState({ searchValue: searchValue });
  }
  
  render() {
    
    return (
      <>
        <div className="App">
          <Searchbar onSubmit={this.handleSearchValue} />
          <ImageGallery searchValue={this.state.searchValue} />
        </div>
        <Button />
      </>
    )
  };
};

export default App;