export function BlogIndex( {posts, onShow} ) {
console.log(posts);

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {/* {JSON.stringify(posts)} */}
      <br/>
      {posts.map((post) => (
        <div key={post.id}>
          <div>
            Title: {post.title}
          </div>
          <div>
            Body: {post.body}
          </div>
          <div>
            <img src={post.image_url} />
          </div>
          {/* <button>More info</button> */}
          <button onClick={() => onShow(post)}>More info</button>
          <br />
          <br />
          <br />
        </div>
      ))}
     </div>
  );
}
