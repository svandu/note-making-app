import Feed from '../Feed'

function HomePage({ posts }) {
  return (
    <main className="home-container">
        {posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p style={{ marginTop: "2rem" }}>No Posts to display.</p>
        )}
    </main>
  )
}

export default HomePage