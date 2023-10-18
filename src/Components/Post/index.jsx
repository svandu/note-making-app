/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./post.scss";

// eslint-disable-next-line react/prop-types
function Post({ post }) {
  return (
    <div className="post-wrapper">
      <article className="post">
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="postDate">{post.datetime}</p>
      </Link>
      {/* <p className="postBody">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p> */}
      <p className="postBody">{post.body}</p>
    </article>
    </div>
  );
}

export default Post;
