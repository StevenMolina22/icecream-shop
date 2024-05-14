export async function getItems(endpoint: string) {
  const baseURL = "http://localhost:8090";
  const response = await fetch(baseURL + endpoint, { cache: "no-store" });
  const data = await response.json();
  return data.items;
}
