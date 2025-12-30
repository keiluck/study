export default async function SchoolCategory({
  params,
}: {
  params: Promise<{ category?: string }>;
}) {
  const category = (await params).category;

  return (
    <main style={{ padding: 24 }}>
      <h1>{category} 学校介绍</h1>
      <p>这里是 {category} 的详细说明。</p>
    </main>
  );
}
