'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    className?: string;
    disabled?: boolean;
}

export const Button = ({
    children,
    onClick,
    variant = 'primary',
    size = 'default',
    className = '',
    ...props
}: ButtonProps) => {
    const baseStyle = "rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl active:scale-95",
        secondary: "bg-rose-100 text-slate-900 hover:bg-rose-200 active:scale-95",
        outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-50 active:scale-95",
        ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
    };

    const sizes = {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-lg",
        icon: "h-10 w-10 p-2"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};
