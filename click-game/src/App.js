import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  shuffleArray = (id) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // let friendsArray = this.state.friends.filter(friend => friend.id !== id);
    // this.compareArray();
    // const friendsArray = this.state.friends.filter(friend => friend.id !== id);
    // this.setState({friendsArray:friendsArray})   
    console.log(friendsArray,"your friends")
      var i = 0
        , j = 0
        , temp = null
    
      for (i = friends.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = friends[i]
        friends[i] = friends[j]
        friends[j] = temp
      }
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
