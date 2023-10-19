import react, { useState } from "react";
import { useQuery } from "react-query";
import Post from "./post";
import client from "./../queryClient/queryClient";

const fetcher = (url) => fetch(url).then((res) => res.json());

function GetBlogDetails() {
  const [postId, setPostId] = useState(null);

  const { data, isLoading } = useQuery("posts", () =>
    fetcher("https://jsonplaceholder.typicode.com/posts"),
  );

  if (postId !== null) {
    return <Post postId={postId} goBack={() => setPostId(null)} />;
  }

  if (isLoading) {
    return <h1>....Loading Posts</h1>;
  }

  function updateTitle(id) {
    client.setQueryData(["post", id], (oldData) => {
      if (oldData) {
        return { ...oldData, title: "updated title" };
      }
    });
  }

  return (
    <div>
      <h1>Posts:</h1>
      {data.map((post) => {
        const cachedData = client.getQueryData(["post", post.id]);
        return (
          <p key={post.id}>
            {cachedData ? <b>[visited] </b> : null}
            {post.id}.{" "}
            <a href="#" onClick={() => setPostId(post.id)}>
              {post.title}
            </a>
            <button onClick={() => updateTitle(post.id)}>Update Title</button>
          </p>
        );
      })}
    </div>
  );
}

export default GetBlogDetails;
