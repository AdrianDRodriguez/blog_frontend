export function PostCreator() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <br/>
        <div>
          Blog: <input type="text" />
        </div>
        <br/>
        <div>
          Image: <input type="image_url" />
        </div>
        <br/>
        <button type="submit">Create blog</button>
      </form>
    </div>
  );
}
