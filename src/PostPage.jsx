import { BlogIndex } from "./BlogIndex";
import { PostCreator} from "./PostCreator"
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "./Modal";


export function PostPage() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleIndex = () => {
    console.log ('doing something...');

    axios.get('http://localhost:3000/posts.json')
    .then(function (response) {
      console.log('inside the .then')
      console.log(response.data);
      // posts = response.data;
      setPosts(response.data)
    })
    console.log('after the .then')


  }

  const handleShow = (post) => {
    console.log(post);
    console.log('handling the show...');
    setIsPostsShowVisible(true)
  }

  const closeModal = () => {
    console.log('close the modal...');
    setIsPostsShowVisible(false)
  }

  useEffect(handleIndex, []);

  return(
    <div>
    {/* <button onClick={handleIndex}>Get data from rails</button> */}
    <PostCreator/>
    <BlogIndex posts={posts} onShow={handleShow} />
    <Modal show={isPostsShowVisible} onClose={closeModal}>
      <p> today is you </p>
    </Modal>
    </div>
  );
}      