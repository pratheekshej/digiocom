import { cn } from '@/lib/utils';
import React from 'react';

interface MaxWidthWrapperProps {
    className?: string;
    children: React.ReactNode;
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
    children,
    className,
}) => {
    return (
        <div className={cn(
            `mx-auto w-full max-w-screen-xl px-2.5 md:px-20`,
            className,
        )}>
            {children}
        </div>
    );
};

export default MaxWidthWrapper;