import react, { useState } from "react";
import { useQuery } from "react-query";

function FetchGithubRepoDetails() {
  const fetcher = (repo) => {
    return fetch(`https://api.github.com/repos/${repo}`).then((data) => data.json());
  }

  const [repo, setRepo] = useState('');
  const { isLoading, data } = useQuery(['github-data', repo], () => fetcher(repo));

  // fuction getRepoDetails() {

  // }

  if(isLoading) {
    return (
      <div>
        <input type="text" value={repo} onChange={(e) => setRepo(e.target.value)} />
        <h1>....Loading</h1>
      </div>
      )
  }

  return (
    <div>
      <input type="text" value={repo} onChange={(e) => setRepo(e.target.value)} />
      <div>
        <h3>Name: {data.name}</h3>
        <h3>Description: {data.description}</h3>
        <h3>Forks: {data.forks}</h3>
        <h3>Issues: {data.open_issues}</h3>
      </div>
      {/* <button onClick={getRepoDetails}>Find details of the repo</button> */}
    </div>
  )
}

export default FetchGithubRepoDetails;