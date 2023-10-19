import { useQuery } from "react-query";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Post({ postId, goBack }) {
  const { isLoading, data } = useQuery(
    ["post", postId],
    () => fetcher(`https://jsonplaceholder.typicode.com/posts/${postId}`),
    {
      //   staleTime: Infinity,
    },
  );

  if (isLoading) {
    return <h1>...Loading Post</h1>;
  }

  return (
    <div>
      <h3>Title</h3>
      <h3>{data.title}</h3>
      <p>Body</p>
      <p>{data.body}</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default Post;
