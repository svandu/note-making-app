import './newpost.scss'

function NewPost({
  // eslint-disable-next-line react/prop-types
  handleSubmit,
  // eslint-disable-next-line react/prop-types
  postTitle,
  // eslint-disable-next-line react/prop-types
  setPostTitle,
  // eslint-disable-next-line react/prop-types
  postBody,
  // eslint-disable-next-line react/prop-types
  setPostBody,
}) {
  return (
    <main className="newpost-container">
      <h2>Create Your New Note</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Note:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        ></textarea>
        <button type="submit">Add New Note</button>
      </form>
    </main>
  );
}

export default NewPost;
