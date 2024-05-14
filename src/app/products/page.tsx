import React from "react";
import { getItems } from "../api/getItems";
import { Product } from "@/types/products";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

async function ProductsPage() {
  const endpoint = "/api/collections/products/records";
  const products: Product[] = await getItems(endpoint);
  const mediaURL = `http://localhost:8090/api/files/${products[0].collectionId}`;
  return (
    <div className="flex flex-wrap gap-4 p-12 ">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard
            image={
              <Image
                src={mediaURL + "/" + product.id + "/" + product.image}
                alt={product.name}
                width={268}
                height={268}
              />
              // <div className="size-[268px] bg-blue-500"></div>
            }
            content={
              <div className="flex flex-col">
                <span>{product.name} </span>
                <span>Stock: {product.stock} </span>
                <span>Price: {product.price} </span>

              </div>
            }
          />
        </div>
      ))}
    </div>
  );
}

type ProductCardProps = {
  image: React.ReactNode;
  content: React.ReactNode;
};
function ProductCard({ image, content }: ProductCardProps) {
  return (
    <Card className="flex w-[500px] flex-row py-4">
      <CardHeader className="p-0">{image}</CardHeader>
      <CardContent className="my-auto mr-auto font-bold">{content}</CardContent>
    </Card>
  );
}

export default ProductsPage;
