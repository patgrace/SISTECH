'use client'

import { useRouter } from 'next/navigation'
import React, { ReactNode} from "react";    

type ButtonProps = {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    variant?: 'primary' | 'secondary'; 
};

function Button ({ 
    children, 
    className,
    onClick,
    href,
    variant = 'primary',
}: ButtonProps) {
    const router= useRouter()

    const handleClick = () => {
        if (onClick){
            onClick()
        }
        if (href) {
            router.push(href);
        }
    }

    return (
    <button 
    className={`button ${className} ${variant === 'primary' ? '' : 'bg-red text-white'}`}
    onClick={handleClick}>
        {children}
    </button>
    
    )   
}

export {Button};