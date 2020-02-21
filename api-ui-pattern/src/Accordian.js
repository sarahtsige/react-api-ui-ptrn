import React, { Component } from "react";
import Characterdiv from './Characterdiv'

class Accordian extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: "character",
      data: [],
      show: false
    };
  }

  componentDidMount() {
    let url = "https://rickandmortyapi.com/api/character/1,2,3,4,5";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data
        });
      });
  }



  displayCharacter(e){
console.log('Click Works')
console.log(e.target.data)
  }

  render() {
    let characterInfo = this.state.data.map(i => <p>{i.name}</p>);

    



    if (!this.state.data.length) {
      return null;
    } else {
      console.log(this.state.data[0]);
      return (
        <div className="App">
          <header>RICK AND MORTY</header>
          <div className="App-Accordian">
            <button onClick={this.displayCharacter} className="App-button"> RICK </button>
            <div id="rick">
              {/* {this.characterNames2} */}
              {/* {characterInfo} */}
              
              <img src={this.state.data[0].image} alt="character"></img>
              <h3>{this.state.data[0].name}</h3>
              <p>Species: {this.state.data[0].species}</p>
              <p>Gender: {this.state.data[0].gender}</p>
              <p>Status: {this.state.data[0].status}</p>
            </div>

            <button className="App-button"> MORTY</button>
            <div id="morty">
            
              <img src={this.state.data[1].image} alt="character"></img>
              <h3>{this.state.data[1].name}</h3>
              <p>Species: {this.state.data[1].species}</p>
              <p>Gender: {this.state.data[1].gender}</p>
              <p>Status: {this.state.data[1].status}</p>
            </div>

            <button className="App-button"> SUMMER</button>
            <div id="summer">

           
              <img src={this.state.data[2].image} alt="character"></img>
              <h3>{this.state.data[2].name}</h3>
              <p>Species: {this.state.data[2].species}</p>
              <p>Gender: {this.state.data[2].gender}</p>
              <p>Status: {this.state.data[2].status}</p>
            </div>

            <button className="App-button"> BETH</button>
            <div id="beth">
           
              <img src={this.state.data[3].image} alt="character"></img>
              <h3>{this.state.data[3].name}</h3>
              <p>Species: {this.state.data[3].species}</p>
              <p>Gender: {this.state.data[3].gender}</p>
              <p>Status: {this.state.data[3].status}</p>
            </div>

            <button className="App-button"> JERRY</button>
            <div id="jerry">
          
              <img src={this.state.data[4].image} alt="character"></img>
              <h3>{this.state.data[4].name}</h3>
              <p>Species: {this.state.data[4].species}</p>
              <p>Gender: {this.state.data[4].gender}</p>
              <p>Status: {this.state.data[4].status}</p>
            </div>
            </div>
          </div>
        //</div>
      );
    }
  }
}

export default Accordian;
