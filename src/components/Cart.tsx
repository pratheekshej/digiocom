'use client';

import Link from "next/link";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

const Cart = () => {
    // const { items } = useCart()
    const itemCount = 0; // items.length

    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    /* const cartTotal = items.reduce(
        (
            total,
            { product }
        ) => total + product.price,
        0
    ) */

    const cartTotal = 0

    const fee = 1

    return (
        <Sheet>
            <SheetTrigger className='group flex items-center -m-2 p-2'>
                <ShoppingCart
                    aria-hidden='true'
                    className='group-hover:text-gray-500 flex-shrink-0 w-6 h-6 text-gray-400'
                />
                <span className='group-hover:text-gray-800 ml-2 font-medium text-gray-700 text-sm'>
                    {isMounted ? itemCount : 0}
                </span>
            </SheetTrigger>
            <SheetContent className='flex flex-col pr-0 w-full sm:max-w-lg'>
                <SheetHeader className='space-y-2.5 pr-6'>
                    <SheetTitle>Cart ({!itemCount ? ' 0 Items ' : itemCount})</SheetTitle>
                </SheetHeader>
                {itemCount > 0 ? (
                    <>
                        <div className='flex flex-col pr-6 w-full'>
                            <ScrollArea>
                                {/* {items.map(({ product }) => (
                                    <CartItem
                                        product={product}
                                        key={product.id}
                                    />
                                ))} */}
                            </ScrollArea>
                        </div>
                        <div className='space-y-4 pr-6'>
                            <Separator />
                            <div className='space-y-1.5 text-sm'>
                                <div className='flex'>
                                    <span className='flex-1'>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>
                                        Transaction Fee
                                    </span>
                                    {/* <span>{formatPrice(fee)}</span> */}
                                    <span>${fee}</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>Total</span>
                                    <span>
                                        ${(cartTotal + fee)}
                                        {/* {formatPrice(cartTotal + fee)} */}
                                    </span>
                                </div>
                            </div>

                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link
                                        href='/cart'
                                        className={buttonVariants({
                                            className: 'w-full',
                                        })}>
                                        Continue to Checkout
                                    </Link>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>
                ) : (
                    <div className='flex flex-col justify-start items-center space-y-1 pt-10 h-full'>
                        <div
                            aria-hidden='true'
                            className='relative mb-4 w-60 h-60 text-muted-foreground'>
                            <Image
                                src='/empty-shopping-cart.png'
                                fill
                                alt='empty shopping cart'
                            />
                        </div>
                        <div className='font-semibold text-xl'>
                            Your cart is empty
                        </div>
                        <SheetTrigger asChild>
                            <Link
                                href='/products'
                                className={buttonVariants({
                                    variant: 'link',
                                    size: 'sm',
                                    className:
                                        'text-sm text-muted-foreground',
                                })}>
                                Add items to your cart to checkout
                            </Link>
                        </SheetTrigger>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default Cart;