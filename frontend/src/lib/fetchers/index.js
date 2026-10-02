const DEFAULT_REVALIDATE = 60;

export async function serverFetch(path, options = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1";
  const { revalidate = DEFAULT_REVALIDATE, ...fetchOptions } = options;

  const response = await fetch(`${baseUrl}${path}`, {
    ...fetchOptions,
    headers: {
      Accept: "application/json",
      ...fetchOptions.headers,
    },
    next: { revalidate },
  });

  if (!response.ok) {
    throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
