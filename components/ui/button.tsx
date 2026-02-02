'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    className?: string;
    disabled?: boolean;
}

export const Button = ({ children, onClick, variant = 'primary', className = '', ...props }: ButtonProps) => {
    const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed";
    const variants = {
        primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl active:scale-95",
        secondary: "bg-rose-100 text-slate-900 hover:bg-rose-200 active:scale-95",
        outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-50 active:scale-95",
        ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};
