import react, { useState } from "react";
import { useQuery } from "react-query";
import Post from "./post";

const fetcher = (url) => fetch(url).then((res) => res.json());

function GetBlogDetails() {
  const [postId, setPostId] = useState(null);

  const { data, isLoading } = useQuery("posts", () =>
    fetcher("https://jsonplaceholder.typicode.com/posts"),
  );

  if (postId !== null) {
    console.log(postId);
    return <Post postId={postId} goBack={() => setPostId(null)} />;
  }

  if (isLoading) {
    return <h1>....Loading Posts</h1>;
  }

  return (
    <div>
      <h1>Posts:</h1>
      {data.map((post) => {
        return (
          <p key={post.id}>
            {post.id}.{" "}
            <a href="#" onClick={() => setPostId(post.id)}>
              {post.title}
            </a>
          </p>
        );
      })}
    </div>
  );
}

export default GetBlogDetails;
