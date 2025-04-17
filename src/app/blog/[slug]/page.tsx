export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-2 capitalize">{params.slug.replace(/-/g, ' ')}</h1>
      <p>This blog post will be dynamically generated in a future release.</p>
    </main>
  );
}
