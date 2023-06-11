export default async function fetchCollection<T>(
  path: string,
  params: RequestInit = {}
): Promise<T[]> {
  const res = await fetch(`${process.env.BASE_URL}/api/${path}`, params);
  const data = await res.json();

  return data.data.collection;
}
