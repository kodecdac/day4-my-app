import { useState } from "react";

export default function App() {
  let [username, setUsername] = useState("Rohit");
  let [follower, setFollower] = useState(10);

  let handleFollower = () => {
    let newFollowercount = follower + 10;
    // UPdate the UI with new Value.
    setFollower(newFollowercount);
  };

  let updateUsername = () => {
    let newUsername = username + " Sharmmaa";
    setUsername(newUsername);
  };

  return (
    <div>
      <h1>
        {username} has {follower} followers
      </h1>

      <input type="button" value="Update FOLLOWERS" onClick={handleFollower} />
      <input type="button" value="UPDATE USERNAME" onClick={updateUsername} />
    </div>
  );
}
