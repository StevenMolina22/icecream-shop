"use client";
import React, { FC, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { IceCream } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { useAtom } from "jotai";
import { isLoggedInAtom } from "@/context/authentication";
type Props = {
  className?: string;
};

export default function NavbarLayout({ className }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {name: "Profile", route: "/"},
    {name: "Cart", route: "cart"},
    {name: "About", route: "about"},
    {name: "Signin", route: "auth/signin"},
    {name: "My Settings", route: "/"},
    {name: "Help & Feedback", route: "/"},
    {name: "Sign Out ", route: "/"},
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBordered
      className={`${className} text-foreground`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            {/* <Image src="/icons/cream-4.png" alt="logo" width={40} height={40} /> */}
            <IceCream size={40} />
            <div className="flex flex-col font-bold text-foreground">
              <p className="">FRUPYS</p>
              <p className="">CREAM&apos;s</p>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link className="text-foreground" color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-foreground" href="/about" aria-current="page">
            Know us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-foreground" color="foreground" href="/cart">
            My cart
          </Link>
        </NavbarItem>
      </NavbarContent>
      <AuthButtons />

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              className="w-full"
              href={item.route}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

const AuthButtons = () => {
  const [isloggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const hangleLogout = () => {
    setIsLoggedIn(false);
    localStorage && localStorage.setItem("isLoggedIn", "false");
  }

  if (isloggedIn) {
    return (
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-foreground" href="/auth/signin">
            Profile
          </Link>
        </NavbarItem>
        <NavbarItem className="dark">
          <Button
          onClick={hangleLogout}
            className={buttonVariants({ variant: "default" })}
            color="danger"
          >
            Sign Out
          </Button>
        </NavbarItem>
      </NavbarContent>
    );
  }
  return (
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link className="text-foreground" href="/auth/signin">
          Login
        </Link>
      </NavbarItem>
      <NavbarItem className="dark">
        <Link
          href="/auth/signup"
          className={buttonVariants({ variant: "default" })}
          color="primary"
        >
          Sign Up
        </Link>
      </NavbarItem>
    </NavbarContent>
  );
};
