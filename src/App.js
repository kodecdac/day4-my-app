import { useState } from "react";

export default function App() {
  let [cityList, setCityList] = useState([]);

  let addNewCity = () => {
    setCityList(["PUNE", ...cityList]);
  };

  return (
    <div>
      <h1>Lets Tweet</h1>
      <input type="button" value="Add new Tweet" onClick={addNewCity} />

      {cityList.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}
