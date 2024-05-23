import Image from "next/image";
import Link from "next/link";

export function AboutUsPage() {
  return (
    <>
      
      <section className="w-full py-12 md:py-24 lg:py-32 text-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl text-foreground font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  About Frupys
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  We are a team of passionate web developers, designers, and
                  strategists who specialize in creating cutting-edge digital
                  experiences for our clients.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Learn More
                </Link>
                <Link
                  className="inline-flex h-10 items-center text-foreground justify-center rounded-md border border-border px-8 text-sm font-medium shadow-sm transition-colors hover:bg-black/10 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <Image
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="/images/background-image.png"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 py-12 dark:bg-gray-950 md:py-24 lg:py-32 text-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Story
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Acme Web Solutions was founded in 2015 by a team of passionate
                web developers who saw an opportunity to create a new kind of
                web agency. We were driven by a desire to push the boundaries of
                what was possible on the web, and to deliver exceptional digital
                experiences to our clients.
              </p>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our mission is to empower businesses of all sizes to thrive in
                the digital age. We believe that the web is the most powerful
                platform for connecting with customers, and we&apos;re dedicated
                to helping our clients harness its full potential.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 text-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Team
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At the heart of Acme Web Solutions are our talented and
                dedicated team members. We&apos;ve assembled a diverse group of
                web developers, designers, and strategists who are passionate
                about creating exceptional digital experiences.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <Image
                  alt="Team Member"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                  height="150"
                  src="/placeholder.svg"
                  width="150"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Co-Founder, CTO
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    John is a seasoned web developer with over 10 years of
                    experience. He leads our technical team and is passionate
                    about building cutting-edge web applications.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  alt="Team Member"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                  height="150"
                  src="/placeholder.svg"
                  width="150"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Jane Smith</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Co-Founder, CEO
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Jane is a strategic thinker and visionary leader. She
                    oversees the overall direction of the company and ensures
                    that we&apos;re delivering exceptional value to our clients.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  alt="Team Member"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                  height="150"
                  src="/placeholder.svg"
                  width="150"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Michael Johnson</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lead Designer
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Michael is a talented designer with a keen eye for user
                    experience. He leads our design team and is responsible for
                    creating visually stunning and intuitive interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full text-foreground bg-gray-100 py-12 dark:bg-gray-950 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Approach
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Acme Web Solutions, we believe in a user-centric approach to
                web development. We start by deeply understanding the needs and
                pain points of our clients&apos; customers, and then we use that
                knowledge to design and build intuitive, engaging, and
                high-performing web experiences.
              </p>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We&apos;re also big believers in agile methodologies, which
                allow us to be nimble and responsive to changing requirements.
                Our team collaborates closely with our clients throughout the
                development process, ensuring that we&apos;re always aligned on
                the project goals and delivering value at every step.
              </p>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Finally, we&apos;re constantly exploring new technologies and
                techniques to ensure that our clients&apos; web experiences are
                powered by the latest and greatest tools and frameworks. From
                cutting-edge front-end frameworks to scalable cloud-based
                infrastructure, we leverage the best-in-class solutions to
                deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
