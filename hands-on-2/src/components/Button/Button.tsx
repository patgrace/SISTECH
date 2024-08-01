'use client'

import { useRouter } from 'next/navigation'
import React, { ReactNode} from "react";    

type ButtonProps = {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
};

function Button ({ 
    children, 
    className,
    onClick,
    href,
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
    className={`button ${className}`}
    onClick={handleClick}>
        {children}
    </button>
    
    )   
}

export {Button};