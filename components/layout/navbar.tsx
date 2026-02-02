'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scissors, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useBooking } from '@/components/providers/booking-provider';
import clsx from 'clsx';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const { openBooking } = useBooking();

    const NavLink = ({ href, label }: { href: string, label: string }) => {
        const isActive = pathname === href;
        return (
            <Link
                href={href}
                className={clsx(
                    "transition-colors font-medium",
                    isActive ? 'text-rose-500' : 'text-slate-600 hover:text-rose-500'
                )}
            >
                {label}
            </Link>
        );
    };

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 cursor-pointer">
                    <div className="bg-slate-900 text-white p-2 rounded-lg">
                        <Scissors size={20} />
                    </div>
                    <span className="text-2xl font-serif font-bold text-slate-900 tracking-tight">LUXE<span className="text-rose-500">.</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="/" label="Home" />
                    <NavLink href="/services" label="Services" />
                    <NavLink href="/stylists" label="Stylists" />
                    <NavLink href="/gallery" label="Gallery" />
                    <Button onClick={() => openBooking()} variant="primary" className="!py-2 !px-5 text-sm">
                        Book Now
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-slate-900 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-white border-t overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-left text-lg py-2 border-b border-stone-100">Home</Link>
                            <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-left text-lg py-2 border-b border-stone-100">Services</Link>
                            <Link href="/stylists" onClick={() => setIsMenuOpen(false)} className="text-left text-lg py-2 border-b border-stone-100">Stylists</Link>
                            <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="text-left text-lg py-2 border-b border-stone-100">Gallery</Link>
                            <Button onClick={() => { openBooking(); setIsMenuOpen(false); }} className="w-full mt-2">Book Appointment</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
