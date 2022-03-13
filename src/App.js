import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      searchTerm: '',
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  //   FUNCIONANDO CON ASYNC
  //   async getCats() {
  //     try {
  //       const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //       const cats = await res.json();
  //       this.setState({ cats: cats });
  //     } catch (error) {
  //       console.log('Something bad happen :L');
  //     }
  //   }

  //   componentDidMount() {
  //     this.getCats();
  //   }

  // ------------------------------

  //    FUNCIONANDO CON PROMISES
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((cats) => this.setState({ cats: cats }))
      .catch((err) => console.log('Something bad happen :L' + err));
  }

  onSearchChange(evt) {
    this.setState({ searchTerm: evt.target.value });
  }

  render() {
    const filteredCats = this.state.cats.filter((cat) =>
      cat.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    return (
      <div className='tc'>
        <h1 className='f1'>CatsFriend</h1>
        <SearchBox searchHandler={this.onSearchChange} />
        <Scroll>
          <CardList cats={filteredCats} />
        </Scroll>
      </div>
    );
  }
}

export default App;
