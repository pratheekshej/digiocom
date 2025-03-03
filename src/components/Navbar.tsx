import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Icons from "./Icons";

const Navbar = () => {
    return (
        <div className="top-0 z-50 sticky inset-x-0 bg-white shadow-md h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="flex justify-between items-center border-gray-200 border-b h-full">
                        <div className="flex items-center space-x-4 h-16">
                            {/* Mobile Nav */}
                            <div className="flex ml-4 lg:ml-0">
                                <Link href={'/'}>
                                    <Icons.logo className="w-10 h-10" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    );
}

export default Navbar;