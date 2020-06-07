import React, { Component } from "react";
import Dogcard from "./components/dogcards";
import Wrapper from "./components/wrapper";
import Nav from "./components/nav";
import dogs from "./dogs.json";

class App extends Component {
  state = {
    score: 0,
    topscore: 0,
    msg: "Click an image!",
    dogs,
    chosenDogID: [],
    
  };
  sortdogs = (id) => {
    var chosenDogID = this.state.chosenDogID;
    if (chosenDogID.includes(id)) {
      this.setState({
        score: 0,
        msg: "Nope!",
        chosenDogID: [],
        textColor: "black",
      });
      return;
    } else {
      chosenDogID.push(id);
      var topscore = this.state.topscore;
      var score = this.state.score;
      if (chosenDogID.includes(id) && topscore === score) {
        this.setState({ topscore: topscore + 1, score: score + 1 });
      }
      if (score === 12) {
        this.setState({ msg: "Winner", chosenDogID: [], textColor: "green" });
        console.log("Winner");
        return;
      }

      var newDogs = dogs.sort((a, b) => Math.random() - 0.5);
      this.setState({
        score: score + 1,
        msg: "Correct!",
        dog: newDogs,
        chosenDogID,
        textColor: "greem",
      });
    }
  };

  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          topscore={this.state.topscore}
          msg={this.state.msg}
          textColor={this.state.textColor}
        />

        

        <Wrapper>
          {this.state.dogs.map(dogs => (
            <Dogcard
              sortdogs={this.sortdogs}
              id={dogs.id}
              key={dogs.id}
              image={dogs.image}
              alt={dogs.name}
            />
          ))}
        </Wrapper>
       
      </div>
    );
  }
}
export default App; 