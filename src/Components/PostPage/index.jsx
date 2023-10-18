import './postpage.scss'
import { useParams, Link } from 'react-router-dom';
 
// eslint-disable-next-line react/prop-types
function PostPage({posts, handleDelete}) {
  const { id } = useParams();
  // eslint-disable-next-line react/prop-types
  const post = posts.find(post => (post.id).toString() === id );
  return (
    <main className='postpage-container'>
      <article className='post'>
        {post && 
            <>
              <h2>{post.title}</h2>
              <p className='postDate'>{post.datetime}</p>
              <p className='postBody'>{post.body}</p>
              <button onClick={() => handleDelete(post.id)}>Delete Post</button>
            </>
        }
        {!post && 
            <>
              <h2>Post Not Found</h2>
              <p>Well, that is disappointing.</p>
              <p>
                <Link to="/">Visit Our HomePage</Link>
              </p>
            </>
        }
      </article>
    </main>
  )
}

export default PostPage