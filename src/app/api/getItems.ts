export async function getItems(endpoint: string) {
  const baseURL = process.env.DB_HOST;
  try {
    const response = await fetch(baseURL + endpoint, { cache: "no-store" });
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
}
export async function getProducts() {
  const baseURL = process.env.DB_HOST;
  const endpoint = "/api/collections/products/records";
  try {
    const response = await fetch(baseURL + endpoint, { cache: "no-store" });
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
}
