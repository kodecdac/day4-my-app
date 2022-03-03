function App() {
  let id = 1;
  let title = "React App";

  return (
    <div>
      <h1>Hello World</h1>
      <h2> {title} </h2>

      <p id="id1"></p>
      <p id={id}></p>
    </div>
  );
}

export default App;
