/* eslint-disable react/prop-types */
import Post from '../Post'

// eslint-disable-next-line react/prop-types
function Feed({ posts }) {
  return (
    <>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
    </>
  )
}

export default Feed