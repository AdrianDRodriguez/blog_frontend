import { BlogIndex } from "./BlogIndex";
import { PostCreator} from "./PostCreator"
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "./Modal";
import {PostShow} from "./PostShow"



export function PostPage() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, serCurrentPost] = useState({});

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
    serCurrentPost(post);
    setIsPostsShowVisible(true)
  }

  const handleCreate = (params)  => {
    console.log("handleCreate...");
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      console.log(response.data)

      setPosts([...posts, response.data])
    })
  }

  const closeModal = () => {
    console.log('close the modal...');
    setIsPostsShowVisible(false)
  }

  useEffect(handleIndex, []);

  return(
    <div>
    {/* <button onClick={handleIndex}>Get data from rails</button> */}
    <PostCreator onCreate={handleCreate} />
    <BlogIndex posts={posts} onShow={handleShow} />
    <Modal show={isPostsShowVisible} onClose={closeModal}>
      <PostShow post={currentPost}/>
    </Modal>
    </div>
  );
}      