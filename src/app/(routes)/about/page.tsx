import { AboutUsPage } from "@/app/(routes)/about/about-us-page";
import NavbarLayout from "@/components/layout/Navbar";
import React from "react";

function AboutPage() {
  return (
    <div className="swiss-theme bg-background min-h-screen w-full">
      <NavbarLayout />
      <AboutUsPage />
    </div>
  );
}

export default AboutPage;
