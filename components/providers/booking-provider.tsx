'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Service, Staff } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import BookingWizard from '@/components/features/booking-wizard';

interface BookingContextType {
    openBooking: (preselectedService?: Service | null, preselectedStaff?: Staff | null) => void;
    closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) throw new Error("useBooking must be used within a BookingProvider");
    return context;
};

export const BookingProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [preselection, setPreselection] = useState<{ service: Service | null, staff: Staff | null }>({ service: null, staff: null });

    const openBooking = (service: Service | null = null, staff: Staff | null = null) => {
        setPreselection({ service, staff });
        setIsOpen(true);
    };

    const closeBooking = () => setIsOpen(false);

    return (
        <BookingContext.Provider value={{ openBooking, closeBooking }}>
            {children}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed inset-0 z-[60] bg-white/50 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                            <div className="hidden md:block w-1/3 bg-slate-900 text-white p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Relax.<br />Rejuvenate.<br />Refresh.</h3>
                                <p className="text-slate-400 text-sm relative z-10">Your journey to luxury begins here.</p>
                                <div className="absolute bottom-8 left-8">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MapPin size={16} className="text-rose-500" /> <span className="text-xs">Edappally, Kochi</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone size={16} className="text-rose-500" /> <span className="text-xs">+91 98765 43210</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 p-6 md:p-10 overflow-y-auto">
                                <BookingWizard
                                    preselectedService={preselection.service}
                                    preselectedStaff={preselection.staff}
                                    onCancel={closeBooking}
                                    onComplete={closeBooking}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </BookingContext.Provider>
    );
};
