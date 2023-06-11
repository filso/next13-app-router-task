export default async function fetchCollection<T>(
  path: string,
  params: RequestInit = {}
): Promise<T[]> {
  const res = await fetch(`${process.env.HOST}/api/${path}`, params);
  const data = await res.json();

  return data.data.collection;
}
