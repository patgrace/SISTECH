import { useRouter } from "next/router";
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

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick){
            onClick()
        }
        if (href) {
            e.preventDefault();
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