import { useState } from "react";

export default function App() {
  // let user = { usenrame: "rohit", follower: 100 };
  let [user, setUser] = useState({ username: "rohit", follower: 100 });

  const updateFollower = () => {
    let newFollower = user.follower + 10;
    setUser({ ...user, follower: newFollower });
  };

  const updateUsername = () => {
    let newUsername = user.username + " sharma";
    setUser({ ...user, username: newUsername });
  };

  return (
    <div>
      <h1>
        {user.username} has {user.follower} follower
      </h1>

      <input type="button" value="Update Follower" onClick={updateFollower} />
      <input type="button" value="Update Username" onClick={updateUsername} />
    </div>
  );
}
