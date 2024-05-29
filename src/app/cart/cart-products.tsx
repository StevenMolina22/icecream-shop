import { Separator } from "@/components/ui/separator";
import CounterCart from "./CounterCart";
import Image from "next/image";
import { getMediaURL } from "@/utils/mediaProducts";
import { Product } from "@/types/products";

const ProductsDisplayed = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid gap-4">
      {products &&
        products.map((product, index) => (
          <>
            <div key={product.id} className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <Image
                  alt="Thumbnail"
                  className="aspect-square rounded-lg object-cover"
                  height="100"
                  src={getMediaURL(product)}
                  width="100"
                />
                <div className="grid gap-1.5">
                  <h2 className="font-semibold">{product.name}</h2>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-0.5">
                      <span className="font-semibold">
                        {product.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        /unit
                      </span>
                    </div>
                    <CounterCart />
                  </div>
                </div>
              </div>
            </div>
            <Separator />
          </>
        ))}
    </div>
  );
};

export default ProductsDisplayed