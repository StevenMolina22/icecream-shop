import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import CounterButtons from "./CounterButtons";

type ProductCardProps = {
  variant?: "default" | "translucid";
  title: string;
  price: number;
  image: string;
};
const ProductCard = ({
  title,
  price,
  image,
  variant = "default",
}: ProductCardProps) => {
  return (
    <Card
      className={`rounded-[16px] min-w-[300px] mx-auto flex flex-col md:flex-row shadow-lg ${variant == "translucid" ? "bg-black/40 backdrop-blur-md dark" : "bg-gray-50 light"}`}
    >
      {/* Image */}
      <CardHeader className="rounded-[24px] px-0 py-4">
        <Image
          src={image}
          alt={title}
          className="h-48 w-full rounded-[24px] object-cover"
          width={258}
          height={258}
        />
      </CardHeader>
      {/* Content */}
      <CardContent className="rounded-[24px] p-6 text-foreground">
        <h2 className="mb-2 text-xl font-medium">{title}</h2>
        <p className="mb-4 text-muted-foreground">Order Type: </p>
        <div className="mb-4 flex items-center justify-between">
          <Button
            className={`mx-1 flex-1 border-border bg-transparent ${variant == "translucid" && "hover:bg-black/50"}`}
            variant="outline"
          >
            On Table
          </Button>
          <Button
            className={`mx-1 flex-1 border-border bg-transparent ${variant == "translucid" && "hover:bg-black/50"}`}
            variant="outline"
          >
            Delivery
          </Button>
        </div>
        <div className="flex items-center">
          <p className="text-lg font-semibold">Rs. {price}/-</p>
          {/* Footer: Price & Quantity */}
          <CounterButtons />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
