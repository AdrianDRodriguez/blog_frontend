// import axios from "axios";

export function PostCreator({onCreate}) {
  const handleSubmit = (event) => {
  event.preventDefault();
  console.log('in handle submit');
  const params = new FormData(event.target)
  onCreate(params)
  event.target.reset()
}

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" name="" />
        </div>
        <br/>
        <div>
          Blog: <input type="text" />
        </div>
        <br/>
        <div>
          Image: <input type="text" />
        </div>
        <br/>
        <button type="submit">Create blog</button>
      </form>
    </div>
  );
}
