"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function ToastAuthButton({ children }: { children?: React.ReactNode }) {
  const { toast } = useToast();

  return (
    <Button
      className="w-full"
      type="submit"
      onClick={() => {
        toast({
          title: "Account succesfully created",
          description: "You are now logged in",
        });
      }}
    >
      {children}
    </Button>
  );
}
