import React from 'react';
import CardList from '../component/CardList/CardList';
import SearchBox from '../component/SearchBox/SearchBox'
import { robots } from '../robots';
import './App.css';
import HomePage from '../component/HomePage/Home-Page';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      robots: robots,
      isSignedIn: true,
      pages: 'home'
    }
  }

  onInputChange = (event) => (
    this.setState({  searchField: event.target.value}) 
  )

  isSignedIn =  (event) => {
    this.setState({ isSignedIn: false })
  }

  render() {
    const filteredRobot = this.state.robots.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    return (
      <div className="App">
       <h1 className='f1'>Robofriendz</h1>
    
        {
          this.state.isSignedIn ? <HomePage signIn={ this.isSignedIn }/> : null
        }
       <SearchBox onInputChange={this.onInputChange}/>

       {
          !filteredRobot.length ?
          <h1>No Result Found</h1>: null

       }
       <CardList robots={ filteredRobot }/>
      </div>
    );
  }
}

export default App;
