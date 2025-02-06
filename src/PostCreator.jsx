export function PostCreator() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Blog: <input type="text" />
        </div>
        <div>
          Image: <input type="image_url" />
        </div>
        <button type="submit">Create blog</button>
      </form>
    </div>
  );
}
