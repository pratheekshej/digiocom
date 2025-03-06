import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf, Lock } from "lucide-react";
import Link from "next/link";

const PERKS = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    color: "text-blue-600",
    description: "Get your digital assets delivered instantly after purchase."
  },
  {
    name: "Guaranteed Quality",
    color: "text-violet-600",
    icon: CheckCircle,
    description: "All assets are verified by our team to ensure the highest quality."
  },
  {
    name: "Secure Payments",
    color: "text-orange-600",
    icon: Lock,
    description: "We use the latest technology to ensure your payments are secure."
  },
  {
    name: "Eco-Friendly",
    color: "text-green-600",
    icon: Leaf,
    description: "We plant a tree for every purchase made on our platform."
  }
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="flex flex-col items-center mx-auto py-20 max-w-3xl text-center">
          <h1 className="font-bold text-gray-800 text-4xl sm:text-6xl tracking-tight">
            Your space definition for high quality{' '}
            <span className="text-blue-600">Digital Assets</span>.
          </h1>
          <p className="mt-6 max-w-prose text-gray-600 text-muted-foreground text-lg sm:text-xl">
            Welcome to DigioCom. Everything on our platform
            is verified by our team to ensure the highest quality standards.
          </p>
          <div className="flex sm:flex-row flex-col gap-4 mt-6">
            <Link href='/products' className={buttonVariants()}>
              Browse Products
            </Link>
            <Button variant={'ghost'}>Our quality promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="bg-gray-50 border-gray-200 border-t">
        <MaxWidthWrapper className="py-20">
          <div
            className={`
              grid
              grid-cols-1
              gap-y-12
              sm:grid-cols-2
              sm:gap-x-6
              lg:grid-cols-4
              lg:gap-x-8
              lg:gap-y-8
            `}>
            {PERKS.map(({ name, icon: Icon, description, color }) => (
              <div key={name} className="flex flex-col items-center space-y-4 mt-5">
                <Icon size={48} className={color} />
                <h3 className="font-bold text-gray-800 text-lg">{name}</h3>
                <p className="text-gray-600 text-muted-foreground text-base text-center">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
