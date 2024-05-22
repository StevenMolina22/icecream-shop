import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type ProductCardProps = {
  title: string;
  price: number;
  image: string;
};
const ProductCard = ({ title, price, image }: ProductCardProps) => {
  return (
    <Card className="mx-auto flex rounded-[24px] bg-gray-50 shadow-lg">
      {/* Image */}
      <CardHeader className="bg-gray-50 py-4 px-0 rounded-[24px]">
        <Image
          src={image}
          alt={title}
          className="h-48 w-full rounded-[24px] object-cover"
          width={258}
          height={258}
        />
      </CardHeader>
      {/* Content */}
      <CardContent className="bg-gray-50 p-6 text-gray-900 rounded-[24px]">
        <h2 className="mb-2 text-xl font-semibold">{title}</h2>
        <p className="mb-4 text-gray-600">Order Type: <span className="text-destructive/90">hello</span></p>
        <div className="mb-4 flex items-center justify-between">
          <Button className="mx-1 flex-1 bg-transparent" variant="outline">
            On Table
          </Button>
          <Button className="mx-1 flex-1 bg-transparent" variant="outline">
            Delivery
          </Button>
        </div>
        <div className="flex items-center">
          <p className="text-lg font-semibold">Rs. {price}/-</p>
          <div className="flex items-center justify-between bg-gray-50 px-4">
              <button className="rounded-full bg-gray-200 hover:bg-gray-300 p-2">
                <MinusIcon className="h-4 w-4" />
              </button>
              <span className="mx-2">02</span>
              <button className="rounded-full bg-gray-200 hover:bg-gray-300 p-2">
                <PlusIcon className="h-4 w-4" />
              </button>
            </div>
        </div>
      </CardContent>
      {/* Footer: Price & Quantity */}
    </Card>
  );
};

export default ProductCard;
