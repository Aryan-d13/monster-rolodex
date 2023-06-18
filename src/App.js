import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      monsters : [],
      searchFilter : ''
    }
    
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
        <input className='inputField' type='search' placeholder='searchMonsters'onChange={(event)=>{
          const searchFilter = event.target.value.toLocaleLowerCase();
          this.setState({ searchFilter : searchFilter })
        }}/>
        {fiterMonsters.map((monster)=>{
        {
          return <div key={monster.id}><h1>{monster.name}</h1></div>;
        }
        
      })}
      </div>
        
      
    );
  }
  
}

export default App;
