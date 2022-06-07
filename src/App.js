/*import React, { useState, useEffect } from "react";
import axios from 'axios';

const App = () => {
    const [title,setTitle]=useState('');

    const onSubmit= async (event) =>{
        event.preventDefault();
        await axios.post('http://localhost:4000/posts',{
            title
        });

        setTitle('');
    };


    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get("http://localhost:4000/posts");

        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderedPosts = Object.values(posts).map((post) => {
        return (
        <div
            className="card"
            style={{ width: "30%", marginBottom: "20px" }}
        >
            <div className="card-body">
            <h3>post</h3>

            </div>
        </div>
        );
    });



    return (
        <div>
        <h1>Write your name</h1>
        <form onSubmit={onSubmit}> 
            <div className="form-group">
                <label>
                    Title
                </label>
                <input 
                value={title}
                onChange={e=>setTitle(e.target.value)}
                className="form-control"/>
                
            </div>
            <button className="btn btn-primary">submit</button>
        </form>
        <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
        </div>
    </div>
    );
  };
  export default App;

  */
  import React from "react";
  import PostCreate from "./postCreate";
  import PostRender from "./postRender";
  
  const App = () => {
    return (
      <div className="container">
        <h1>Create Post</h1>
        <PostCreate />
        <hr />
        <h1>Posts</h1>
        <PostRender />
      </div>
    );
  };
  export default App;
  