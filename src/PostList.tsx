import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import CommentCreate from "./CommentCreate";
import axios from "axios";
import { Post } from "./types";

export default function PostList() {
  const [posts, setPosts] = useState<Post>({ id: { id: "", title: "" } });

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    // console.log(res.data);

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  // console.log(posts);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      post.id && (
        <div className='card' style={{ width: "30%", marginBottom: "20px" }} key={post.id}>
          <div className='card-body'>
            <h3>{post.title}</h3>
            <CommentList postId={post.id} />
            <CommentCreate postId={post.id} />
          </div>
        </div>
      )
    );
  });
  return <div className='d-flex flex-row flex-wrap justify-content-between'>{renderedPosts}</div>;
}
