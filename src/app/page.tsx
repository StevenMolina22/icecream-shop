import ProductCard from "@/app/products/ProductCard";
import { buttonVariants } from "@/components/ui/button";
import { getItems } from "@/app/api/getItems";
import { getMediaURL } from "@/utils/mediaProducts";
import { Product } from "@/types/products";
import NavbarLayout from "@/components/layout/Navbar";
import Link from "next/link";

async function Home() {
  const bgImage = "images/background-image.png";
  const bgStyle = { backgroundImage: `url(${bgImage})` };

  const products: Product[] = await getItems(
    "/api/collections/products/records",
  );

  return (
    <main style={bgStyle} className=" min-h-[200vh] bg-cover bg-center">
      <NavbarLayout className="bg-black/30" />

      <div className="flex flex-col items-center md:p-12 p-6">
        <div className="max-w-[800px] space-y-6 md:p-6 p-4 text-center">
          {/* text */}
          <h1 className="text-6xl font-bold">Frupys shop</h1>
          <h2 className="text-4xl font-semibold">Ice Creams</h2>
          <p className="text-2xl font-semibold text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            aspernatur ad hic culpa alias facere animi illo mollitia voluptatem
            suscipit aliquam adipisci, perspiciatis dolorem id molestias
            reiciendis sapiente soluta voluptate.
          </p>

          {/* buttons */}
          <div className="space-x-4 ">
              <Link
              href={"/cart"}
             className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
              Order now
            </Link>
            <Link
              href={"/cart"}
              className={
                buttonVariants({ variant: "ghost", size: "lg" }) +
                `mt-8 bg-black/40 px-6 text-xl font-semibold hover:bg-black/60`
              }
            >
              Book table
            </Link>
          </div>
          </div>
        {/* products */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

export default Home;