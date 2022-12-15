import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojis";            // import emojipedia from "../emojipedia";


// ............  24 React

//1. Extract the repeated parts of the App into a Entry component.
//2. Use props to make the Entry component render different data.
//3a. Import the emojipedia constant.
//3b. Map through the emojipedia array and render Entry components.

//Emojipedia has 3 entries, so createEntry gets called 3 times.
//Each time, it passes 1 item from the emojipedia array as a var called emojiTerm.

//var emojiTerm = {
//   id: 1,
//   emoji: "💪",
//   name: "Tense Biceps",
//   meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// }


function createEntry(emojiTerm) {
  return(
    <Entry 
    key = {emojiTerm.id}
    emoji= {emojiTerm.emoji}
    name={emojiTerm.name}
    desc={emojiTerm.meaning}
    />
  );
  
}
function EmojiMain() {
  return (
    <div>
      <h1>
        <span>EmojiPedia</span>
      </h1>

      <dl className="dictionary"> 
  {/* 1st using map function */}

  {emojipedia.map(createEntry)}


  {/* 2nd OR do this, Create each part separatly */}
      {/* <Entry emoji="💪" 
        name="Tense BIceps"
        desc = "You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
      />
      <Entry  emoji="🙏"
        name="Tense BIceps"
        desc = "You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."/>
      <Entry  emoji="🤣"
        name="Tense BIceps"
        desc = "You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."/>  */}
      </dl>
    </div>

  );
}

export default EmojiMain;
