import axios from "axios";
import { FormEvent, useState } from "react";

export default function PostCreate() {
  const [title, setTitle] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className='form-control' />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
}
