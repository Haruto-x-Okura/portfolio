export async function fetchGitHubUser(username:string){
  const res = await fetch(`https://api.github.com/users/${username}`, { next: { revalidate: 60 } })
  if(!res.ok) throw new Error('GitHub API error')
  return res.json()
}
