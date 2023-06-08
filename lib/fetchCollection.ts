type CollectionPath = "balances" | "currencies" | "users";

export default async function fetchCollection<T>(
  path: CollectionPath,
  init?: RequestInit
): Promise<T[]> {
  const res = await fetch(`${process.env.HOST}/api/${path}`, init);
  const data = await res.json();

  return data.data.collection;
}
