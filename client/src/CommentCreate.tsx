import axios from "axios";
import { FormEvent, useState } from "react";

export default function CommentCreate({ postId }: { postId: string }) {
  const [content, setContent] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>New Comment</label>
          <input value={content} onChange={(e) => setContent(e.target.value)} className='form-control' />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
}
