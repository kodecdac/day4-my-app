import { useState } from "react";

function App() {
  let [likeCounter, setLikeCounter] = useState(0);

  let likeMe = () => {
    let newLikeCounter = likeCounter + 1;
    setLikeCounter(newLikeCounter);

    console.log(newLikeCounter);
  };

  return (
    <div>
      <h1>{likeCounter}</h1>

      <input type="button" value="Like Me" onClick={likeMe} />
    </div>
  );
}

export default App;
