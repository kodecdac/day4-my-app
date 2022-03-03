function App() {
  let counter = 10;
  let title = "State Management ###";

  // USED FOR EVENT HANDLING
  let clickMe = () => {
    console.log("Function is called!!");
    alert();
  };

  return (
    <div>
      <h1>{title}</h1>
      <h1>{counter}</h1>

      <input type="button" value="Click Me" onClick={clickMe} />
    </div>
  );
}

export default App;
