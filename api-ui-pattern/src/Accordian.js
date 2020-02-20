import React, { Component } from 'react';







class Accordian extends Component {
    constructor() {
      super() 
  
      this.state = {
        character: 'character',
        info:  "info",
        data: [],
        active: false
      };
      }
    
    componentDidMount() {
      let url='https://rickandmortyapi.com/api/character/1,2,3,4,5'
      fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data
        })
      })
    }

//   displayCharacter(e){

//   }
  
  
    render() {
      console.log(this.state.data)
      let characterInfo= this.state.data.map(i=><p>{i.name}</p>)
    
    //   let characterNames2= this.state.data.map(i=>(i.name));
      return (
        <div className="App">
          <header>
            RICK AND MORTY 
          </header>
          <div className='App-Accordian'>
         
            <button className='App-button'> RICK</button>
            <div>
                {/* {this.characterNames2} */}
                {characterInfo}
            </div>
            
            <button className='App-button'> MORTY</button>
            <div></div>
            <button className='App-button'> SUMMER</button>
            <div></div>
            <button className='App-button'> BETH</button>
            <div></div>
            <button className='App-button'> JERRY</button>
            <div></div>

          </div>
  
        </div>
      );
    }
  }

export default Accordian;


//RICK, MORTY, JERRY, BETH, SUMMER
