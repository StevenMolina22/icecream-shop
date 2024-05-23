import { pb } from "@/lib/pocketbase";

function ProductForm() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const price = formData.get("price");
    const stock = formData.get("stock");
    const category = formData.get("category");
    const product = { name, price, stock, category };

    const record = await pb.collection("products").create(product);
    console.log(record);
  }
  return (
    <form action={handleSubmit} className="flex flex-col items-start gap-4">
      <input
        className="rounded-lg px-4 py-2"
        type="text"
        placeholder="Name"
        name="name"
      />
      <input
        className="rounded-lg px-4 py-2"
        type="text"
        placeholder="Price"
        name="price"
      />
      <input
        className="rounded-lg px-4 py-2"
        type="text"
        placeholder="Stock"
        name="stock"
      />
      <input
        className="rounded-lg px-4 py-2"
        type="text"
        placeholder="Category"
        name="category"
      />
      <button
        className="rounded-lg border border-black px-4 py-2 hover:border-none hover:bg-black hover:text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default ProductForm;
