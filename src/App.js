import { useState } from "react";

function App() {
  // let list = useState(0);
  // let [likeCounter, setLikeCounter] = list;

  // let likeCounter = 0;
  let [likeCounter, setLikeCounter] = useState(0); // ES6

  let likeMe = () => {
    let newCounter = likeCounter + 1;

    // Asking the REACT TO UPDAT THE STATE / UI
    setLikeCounter(newCounter);
  };

  return (
    <div>
      <h1>{likeCounter}</h1>
      <input type="button" value="Like Me" onClick={likeMe} />
    </div>
  );
}

export default App;
