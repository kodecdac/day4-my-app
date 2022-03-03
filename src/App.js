function App() {
  let id = 1;
  let title = "React App";

  let style1 = { backgroundColor: "green", color: "white" };

  return (
    <div>
      {/** We are writing css; USING JS!!  */}
      <h1 style={{ color: "red", background: "yellow" }}>Hello World</h1>

      {/** We follow here camelCase convention */}
      <h2 style={{ backgroundColor: "royalblue", color: "white" }}>
        Hello Universe!!
      </h2>

      <h2 style={style1}>Lorem ipsum dolor sit amet.</h2>
    </div>
  );
}

export default App;
