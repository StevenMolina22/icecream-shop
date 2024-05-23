import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type ProductCardProps = {
  productName: string;
  productPrice: number;
  productDescription: string;
};

export function ProductCardPage({
  productName,
  productPrice,
  productDescription,
}: ProductCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const image =
    "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <section className="w-full bg-black/60 py-12 md:py-24 lg:py-32">
      <div className="container flex items-start gap-8 px-4 md:px-6">
        <Image
          alt="Sneaker Image"
          className="aspect-[1/1] bg-cover object-cover object-center"
          height="500"
          src={image}
          width="500"
        />
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter">{productName}</h1>
          <div className="flex space-x-1">
            {stars.map((_, index) => (
              <ArrowIcon key={index} />
            ))}
          </div>
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            ${productPrice.toFixed(2)}
          </p>
          <p className="text-base text-zinc-500 dark:text-zinc-400">
            {productDescription}
          </p>
          <div className="flex space-x-2">
            <Button className="h-12 w-12 rounded-md border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
              7
            </Button>
            <Button className="h-12 w-12 rounded-md border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
              8
            </Button>
            <Button className="h-12 w-12 rounded-md border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
              9
            </Button>
            <Button className="h-12 w-12 rounded-md border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
              10
            </Button>
          </div>
          <Button className="h-12 w-full rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900">
            Add to Cart
          </Button>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Fabric: 100% Cotton. Care: Machine wash cold, tumble dry low.
          </p>
        </div>
      </div>
    </section>
  );
}

interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const ArrowIcon: FC<ArrowIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="24"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export default ArrowIcon;
