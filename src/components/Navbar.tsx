import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";

const Navbar = () => {

    const user = null;

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
                            {/* Desktop Nav */}
                            <div className="hidden lg:block z-50 lg:self-stretch lg:ml-8">
                                <NavItems />
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 ml-auto">
                            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-6">
                                {!user && (
                                    <Link
                                        href={'/sign-in'}
                                        className={buttonVariants({
                                            variant: 'ghost'
                                        })}
                                    >
                                        Sign-In
                                    </Link>
                                )}

                                {user ? null : (
                                    <span
                                        className='bg-gray-200 w-px h-6'
                                        aria-hidden='true'
                                    />
                                )}

                                {user ? null : (
                                    <Link
                                        href='/sign-up'
                                        className={buttonVariants({
                                            variant: 'ghost',
                                        })}>
                                        Create account
                                    </Link>
                                )}

                                {user ? (
                                    <span
                                        className='bg-gray-200 w-px h-6'
                                        aria-hidden='true'
                                    />
                                ) : null}

                                {user ? null : (
                                    <div className='flex lg:ml-6'>
                                        <span
                                            className='bg-gray-200 w-px h-6'
                                            aria-hidden='true'
                                        />
                                    </div>
                                )}

                                <div className='flow-root ml-4 lg:ml-6'>
                                    <Cart />
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    );
}

export default Navbar;