import { ReactNode, HTMLAttributes } from 'react';
import { Button } from './ui/button';
import { PRODUCT_CATEGORIES } from '@/config';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

type Category = typeof PRODUCT_CATEGORIES[number];

interface NavItemProps {
    category: Category
    handleOpen: () => void
    isOpen: boolean
    isAnyOpen: boolean
}

const NavItem = ({
    isAnyOpen,
    category,
    handleOpen,
    isOpen
}: NavItemProps
) => {
    return (
        <div className='flex'>
            <div className='relative flex items-center'>
                <Button
                    className='gap-1.5'
                    onClick={handleOpen}
                    variant={isOpen ? 'secondary' : 'ghost'}
                >
                    {category.label}
                    <ChevronDown
                        className={cn(
                            `
                                h-4
                                w-4
                                transition-all
                                text-muted-foreground
                            `,
                            {
                                '-rotate-180': isOpen
                            }
                        )}
                    />
                </Button>
            </div>
            {isOpen && (
                <div className={cn(
                    `
                        absolute
                        inset-x-0
                        top-full
                        left-0
                        w-full
                        z-50
                        text-sm
                        text-muted-foreground
                    `,
                    {
                        "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen
                    }
                )}>
                    <div
                        className='top-1/2 absolute inset-0 bg-white shadow'
                        aria-hidden='true'
                    />

                    <div className='relative bg-white'>
                        <div className='mx-auto px-8 max-w-7xl'>
                            <div className='gap-x-8 gap-y-10 grid grid-cols-4 py-16'>
                                <div className='gap-x-8 grid grid-cols-3 col-span-4 col-start-1'>
                                    {category.featured.map((item) => (
                                        <div
                                            onClick={() => close}
                                            key={item.name}
                                            className='group relative sm:text-sm text-base'>
                                            <div className='relative bg-gray-100 group-hover:opacity-75 rounded-lg aspect-video overflow-hidden'>
                                                <Image
                                                    src={item.imageSrc}
                                                    alt='product category image'
                                                    fill
                                                    className='object-center object-cover'
                                                />
                                            </div>

                                            <Link
                                                href={item.href}
                                                className='block mt-6 font-medium text-gray-900'>
                                                {item.name}
                                            </Link>
                                            <p
                                                className='mt-1'
                                                aria-hidden='true'>
                                                Shop now
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavItem;