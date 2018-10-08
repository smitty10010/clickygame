import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Score from "./components/Score";
import Title from "./components/Title";
import philosophers from "./image.json";




class App extends Component {
state = {
  philosophers,
  score: 0,
  streak: 0,
  clicked: []
};

shuffleCards = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};


handleClick = id => {
  let shuffleCards = this.shuffleCards(philosophers);
  this.setState({philosophers: shuffleCards, clicked: this.state.clicked.concat(id) });
  if (this.state.clicked.indexOf(id) === -1){
    this.setState({score: this.state.score +1, streak: this.state.streak +1 });
  } else {
    this.setState({streak: 0, score: 0, clicked:[]});
  }
};



  render() {
    return (
      <Wrapper>
      <Navbar 
      title="Click A Philosopher"
      >
      
      </Navbar>
      <Score>Score: {this.state.score} Streak: {this.state.streak}</Score>
      <Title><h1>Pick A Philosopher</h1></Title>
      <div className="row">
      {this.state.philosophers.map(philosopher => (<Card 
        handleClick={this.handleClick}
        id={philosopher.id}
        key={philosopher.id}
        name={philosopher.name}
        image={philosopher.image}
      />))}      
      </div>

      </Wrapper>
    );
  }
}

export default App;
