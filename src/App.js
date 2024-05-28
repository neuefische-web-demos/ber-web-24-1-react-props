import React from "react";
import "./styles.css";

export default function App() {
  function handlePet() {
    console.log("Thanks for petting me");
  }
  return (
    <div className="App">
      <Pet
        sound="Bock bock bock"
        name="A Chicken"
        emoji="🐓"
        onPet={handlePet}
        // isHungry={true}
      />
      <Pet sound="Roar" name="A Lion" emoji="🦁" onPet={handlePet} />
      <Pet
        sound="snorts, grunts and bellows"
        name="A Koala"
        emoji="🐨"
        onPet={handlePet}
        isHungry
      />
    </div>
  );
}

// use destructing
function Pet({ sound, name, emoji, onPet, isHungry }) {
  console.log("isHungry: ", name, isHungry); // use the ternary operator expression
  return (
    <div onClick={onPet}>
      {isHungry ? "Feed Me!" : sound}
      <span role="img" aria-label={name}>
        {emoji}
      </span>
    </div>
  );
}
