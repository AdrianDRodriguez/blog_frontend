import axios from "axios";

export function PostCreator() {

const handleSubmit = () => {
  axios.post("http://localhost:3000/posts.json", {title: "Batman", body: "I'M BATMAN", image:"https://assets-prd.ignimgs.com/2023/01/31/batman-blogroll-1646355379001-1675144026976.jpeg"}).then(response => {
    console.log(response.data)
  })
  console.log("You submited a form!!");
}

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" />
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
