import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import NavbarLayout from "@/components/layout/Navbar";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main className="swiss-theme flex min-h-screen w-full flex-col items-center bg-background">
      <NavbarLayout />
      <div className="w-full px-12 py-6 lg:flex">
        <div className="px-2 py-4 lg:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>Checkout</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Badge>1</Badge>
                  <span className="ml-2">Shipping Address</span>
                </div>
                <form>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input
                      className="col-span-2"
                      placeholder="Street Address"
                    />
                    <Input placeholder="City" />
                    <Input placeholder="State" />
                    <Input placeholder="Postal Code" />
                    <Input className="col-span-2" placeholder="Country" />
                  </div>
                </form>
                <div className="flex items-center">
                  <Badge>2</Badge>
                  <span className="ml-2">Payment Method</span>
                </div>
                <form>
                  <div className="grid grid-cols-2 gap-4">
                    <Input className="col-span-2" placeholder="Card Number" />
                    <Input placeholder="MM/YY" />
                    <Input placeholder="CVV" />
                  </div>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 px-2 py-4 lg:mt-0 lg:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Product A</span>
                  <span>$100</span>
                </div>
                <div className="flex justify-between">
                  <span>Product B</span>
                  <span>$200</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$300</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={"/"} className="w-full">
                <Button className="w-full">Complete Order</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
