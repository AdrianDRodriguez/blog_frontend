import { BlogIndex } from "./BlogIndex";
import { Footer } from "./Footer";
import { HeadPage } from "./HeadPage";
import { PostCreator } from "./PostCreator";

function App() {
  return (
    <div>
      <HeadPage/>
      <PostCreator/>
      <BlogIndex/>
      <Footer/>
    </div>
  );
}

export default App;