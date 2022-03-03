function App() {
  let likeCounter = 0;

  let likeMe = () => {
    likeCounter++;
    console.log(likeCounter);
  };

  return (
    <div>
      <h1>{likeCounter}</h1>

      <input type="button" value="Like Me" onClick={likeMe} />
    </div>
  );
}

export default App;
