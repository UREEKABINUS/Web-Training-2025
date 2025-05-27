export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const data = await fetch(`https://api.vercel.app/blog/${slug}`)

  if (!data.ok) return <div>Post Not Found</div>;

  const post = await data.json();

  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
    </div>
  )

}