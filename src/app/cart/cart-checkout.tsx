import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Checkout = () => {
  return (
    <Card className="rounded-xl p-6">
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <div>Subtotal</div>
          <div className="ml-auto font-medium">$260.33</div>
        </div>
        <div className="flex items-center gap-4">
          <div>Tax</div>
          <div className="ml-auto font-medium">$20.83</div>
        </div>
        <div className="flex items-center gap-4">
          <div>Shipping</div>
          <div className="ml-auto font-medium">$10.00</div>
        </div>
        <div className="flex items-center gap-4 font-semibold">
          <div>Total</div>
          <div className="ml-auto">$291.16</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Checkout</Button>
      </CardFooter>
    </Card>
  );
};

export default Checkout;