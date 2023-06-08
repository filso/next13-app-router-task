
export default async function fetchCollection<T>(
  path: string,
  { revalidate }: { revalidate: number }
): Promise<T[]> {
  const res = await fetch(`${process.env.HOST}/api${path}`, { next: { revalidate }});
  const data = await res.json();

  return data.data.collection;
}
