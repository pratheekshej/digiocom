import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function Home() {
  return (
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
          <Link href={'/products'} className={buttonVariants()}>
            Browse Products
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
