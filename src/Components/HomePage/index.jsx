/* eslint-disable react/prop-types */
import Feed from "../Feed";
import "./homepage.scss";

// eslint-disable-next-line react/prop-types
function HomePage({ posts }) {
  return (
    <main className="home-container">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No Posts to display.</p>
      )}
    </main>
  );
}

export default HomePage;
