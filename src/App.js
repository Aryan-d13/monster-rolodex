import { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/searchbox'

class App extends Component {
  constructor(){
    super()
    this.state ={
      monsters : [],
      searchFilter : ''
    }
    
  }
  onSearchChange = (event)=>{
    const searchFilter = event.target.value.toLocaleLowerCase()
    this.setState(()=>{
      return {searchFilter}
    })
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json()).then((users)=>this.setState(()=>{
      return { monsters:users };
    }))
  }
  render(){
    const fiterMonsters = this.state.monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(this.state.searchFilter);
    });
    return (
      
      <div className='App'>
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox onChangeHandler = { this.onSearchChange }  placeholder = "search monsters" className = "monsterSearchBox "/>
        <CardList monsters = {fiterMonsters}/>
      </div>
        
      
    );
  }
  
}

export default App;
