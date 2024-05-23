import { DB_HOST } from "@/lib/pocketbase";
import { Product } from "@/types/products";

export function getMediaURL(product: Product) {
  return `${DB_HOST}/api/files/${product.collectionId}/${product.id}/${product.image}`
}