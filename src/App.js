import { useState } from "react";

export default function App() {
  let [cityList, setCityList] = useState([]);

  let addNewCity = () => {
    setCityList(["PUNE", ...cityList]);
  };

  return (
    <div>
      <h1 className="bg-dark text-light p-3">Lets Tweet</h1>
      <input
        className="btn btn-secondary btn-lg w-100"
        type="button"
        value="Add new Tweet"
        onClick={addNewCity}
      />

      {cityList.map((item) => (
        <div className="alert alert-secondary">{item}</div>
      ))}
    </div>
  );
}
