import { getItems } from "../api/getItems";
import { Product } from "@/types/products";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ContextTextInfo from "./ContextTextInfo";
import UserContextProvider from "@/context/UserContext";
import UserContextComponent from "./UserContextComponent";

async function ProductsPage() {
  const products: Product[] = await getItems("/api/collections/products/records");
  const DB_HOST = process.env.DB_HOST;
  const mediaURL = `${DB_HOST}/api/files/${products[0].collectionId}`;

  return (
    <UserContextProvider>
      <div className="flex flex-wrap gap-4 p-12 ">
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <ProductCard
                image={
                  <Image
                    src={`${mediaURL}/${product.id}/${product.image}`}
                    alt={product.name}
                    width={268}
                    height={268}
                  />
                }
                content={
                  <div className="flex flex-col">
                    <span>{product.name} </span>
                    <span>Stock: {product.stock} </span>
                    <span>Price: {product.price} </span>
                    Context Test:
                    <ContextTextInfo />
                    <UserContextComponent />
                  </div>
                }
              />
            </div>
          ))}
      </div>
    </UserContextProvider>
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
