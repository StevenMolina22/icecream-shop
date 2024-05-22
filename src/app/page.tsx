import ProductCard from "@/components/compound/ProductCard"
import { Button } from "@/components/ui/button";
import { getItems } from "@/app/api/getItems"; 
import { Product } from "@/types/products";
import {DB_HOST} from "@/app/database";
import ProductForm from "@/app/products/ProductForm";

export default async function Home() {
  const products: Product[] = await getItems("/api/collections/products/records");
  const mediaURL = `${DB_HOST}/api/files/${products[0].collectionId}`;

  console.log(products)
  return (
    <div className="flex flex-col items-center p-12">
      <div className="max-w-[800px] p-6 text-center">
        {/* text */}
        <h1 className="mb-8 text-6xl font-bold">Frupys shop</h1>
        <h2 className="mb-4 text-4xl font-semibold">Ice Creams</h2>
        <p className="text-muted-foreground font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          aspernatur ad hic culpa alias facere animi illo mollitia voluptatem
          suscipit aliquam adipisci, perspiciatis dolorem id molestias
          reiciendis sapiente soluta voluptate.
        </p>

        {/* buttons */}
        <div className="space-x-4 ">
          <Button
            className="mt-8 border-gray-50 bg-transparent text-xl"
            variant="outline"
            size="lg"
          >
            Order now
          </Button>
          <Button className="mt-8 text-xl" variant="ghost" size="lg">
            Book table
          </Button>
        </div>
      </div>
      {/* products */}
      <div className="grid grid-cols-2 gap-6">
      {
        products &&
          products.map((product) => (
            <ProductCard
            key={product.id}
            title={product.name}
            image={`${mediaURL}/${product.id}/${product.image}`}
            price={product.price}
          />
                
          ))
      }
      </div>
      <ProductForm />
    </div>
  );
}


