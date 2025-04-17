
type BlogPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: BlogPageProps) {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold capitalize mb-2">{params.slug.replace(/-/g, ' ')}</h1>
      <p>This blog post will be dynamically generated in a future release.</p>
    </main>
  );
}
