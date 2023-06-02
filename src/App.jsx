import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import NewPost from "./Components/NewPost";
import PostPage from "./Components/PostPage";
import About from "./Components/About";
import Missing from "./Components/Missing";
import { format } from "date-fns";

import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My 1st Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 4,
      title: "My 4th Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigateTo = useNavigate();

  useEffect(() => {
    const filterResults = posts.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase())
     || ((post.title).toLowerCase()).includes(search.toLowerCase()))      

     setSearchResults(filterResults.reverse());
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigateTo("/");
  }

  const handleDelete = (id) => {
    const postsLists = posts.filter((post) => post.id !== id);
    setPosts(postsLists);
    navigateTo("/");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav search={search} setSearch={setSearch} />}>
          {/* <HomePage posts={posts}/> */}
          <Route index element={<HomePage posts={searchResults} />} />
          <Route
            exact
            path="/post"
            element={
              <NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
              />
            }
          />
          <Route
            path="/post/:id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/missing" element={<Missing />}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
