import ProductCard from "@/app/products/ProductCard";
import { buttonVariants } from "@/components/ui/button";
import { getItems } from "@/app/api/getItems";
import { Product } from "@/types/products";
import ProductForm from "@/app/dev/products/ProductForm";
import NavbarLayout from "@/components/layout/Navbar";
import { getMediaURL } from "@/utils/mediaProducts";
import Link from "next/link";

export default async function Home() {
  const bgImage = "images/background.png";
  const bgStyle = { backgroundImage: `url(${bgImage})` };

  const products: Product[] = await getItems(
    "/api/collections/products/records",
  );

  console.log(products);
  return (
    <main style={bgStyle} className=" min-h-[200vh] bg-cover bg-center">
      <NavbarLayout className="bg-background/30" />

      <div className="flex flex-col items-center p-12">
        <div className="max-w-[800px] p-6 text-center space-y-6">
          {/* text */}
          <h1 className="text-6xl font-bold">Frupys shop</h1>
          <h2 className="text-4xl font-semibold">Ice Creams</h2>
          <p className="font-semibold text-muted-foreground text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            aspernatur ad hic culpa alias facere animi illo mollitia voluptatem
            suscipit aliquam adipisci, perspiciatis dolorem id molestias
            reiciendis sapiente soluta voluptate.
          </p>

          {/* buttons */}
          <div className="space-x-4 ">
            <Link
            href={"/cart"}
              className={buttonVariants({variant:"default", size:"lg"})}
            >
              Order now
            </Link>
            <Link
              href={"/cart"}
              className={buttonVariants({variant:"ghost", size:"lg"}) + `mt-8 bg-black/40 text-xl font-semibold hover:bg-black/60 px-6`}

            >
              Book table
            </Link>
          </div>
        </div>
        {/* products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products &&
            products.map((product, index) => (
              <ProductCard
                key={product.id}
                title={product.name}
                variant={index === 1 ? "default" : "translucid"}
                image={getMediaURL(product)}
                price={product.price}
              />
            ))}
        </div>
        {/* <ProductForm /> */}
      </div>
    </main>
  );
}
