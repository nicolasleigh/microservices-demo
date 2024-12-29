import axios from "axios";
import { useEffect, useState } from "react";
import { Comment } from "./types";

export default function CommentList({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);

  // When using microservices, fetching comments for 100 posts will result in 100 ‘GET’ requests, which is highly inefficient.
  // In contrast, with a monolithic architecture, you can embed comments within the post request, requiring only a single request.

  // Solution #1 - Synchronous communication: Send a GET request to /posts?comments=true to the Posts Service.
  // The Posts Service will then make requests to the Comments Service to fetch the comments.

  // However, there are some drawbacks:
  // 1.	It introduces dependencies between services.
  // 2.	If any inter-service request fails, the entire request fails.
  // 3.	The overall response time is limited by the slowest request.
  // 4.	It can easily lead to complex webs of requests.
  const fetchData = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul>
      {comments.map((c) => (
        <li key={c.id}>{c.content}</li>
      ))}
    </ul>
  );
}
