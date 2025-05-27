export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const postId = slug[0];

  const slug2 = slug[1];

  if (!postId){
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()

    return (
        <div>
            <h1>All Posts</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>{post.title}</li>
                ))}
                </ul>
        </div>
    )
  }

  if (slug2 === "comments") {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    const comments = await data.json();

    return(
        <div>
            <h1>Comments for Post {postId}</h1>
            <ul>
                {comments.map((comment: any) => (
                    <li key={comment.id}>{comment.name}</li>
                ))}
            </ul>
        </div>
    )
  }

}