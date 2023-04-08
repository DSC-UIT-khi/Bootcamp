// React
import { useState, useEffect, useMemo } from "react";

import axios from "axios";

// Styles
import "./App.css";

// Components
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import GithubUser from "./components/GithubUser";

function App() {
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  async function getPosts() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((res) => setPosts(res))
    //   .catch((error) => console.log("There is an error", error));
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts([...posts, ...res.data]);
    return res.data;
  }

  const savePost = async () => {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    console.log("response", res);
  };

  // useEffect(() => {
  //   // getPosts();
  //   savePost();
  // }, [counter]);

  // useMemo(async () => {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //   console.log(res);
  // }, []);

  // Page render
  // dependeny array
  // component update / re-render

  const [user, setUser] = useState();
  const fetchUser = async () => {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    console.log(res);
    setUser(res.data);
  };

  // useEffect(() => {
  //   fetchUser();
  // }, [username]);

  return (
    <div className="App">
      {user && <GithubUser user={user} />}

      <div className="user-input">
        <div>
          <input
            placeholder="Enter GitHub username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div>
          <button onClick={fetchUser}>Find</button>
        </div>
      </div>
      {/* <ul>
        {posts.map((post, _id) => (
          <li>
            {_id} = {post.body}{" "}
          </li>
        ))}
      </ul> */}
      <Counter counter={counter} setCounter={setCounter} incrementVal={11} />
      <Todo />
    </div>
  );
}

export default App;
