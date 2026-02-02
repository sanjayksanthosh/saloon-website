'use client';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';
import { STAFF } from '@/lib/data';
import { useBooking } from '@/components/providers/booking-provider';
import { Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 }
};

export default function StylistsPage() {
    const { openBooking } = useBooking();

    return (
        <motion.div {...pageTransition} className="pt-32 pb-20">
            <div className="container mx-auto px-6">
                <SectionHeading title="Meet The Team" subtitle="Expert Hands" />

                <div className="grid md:grid-cols-3 gap-8">
                    {STAFF.map((staff, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            key={staff.id}
                            className="group relative overflow-hidden rounded-3xl bg-white shadow-lg"
                        >
                            <div className="aspect-[3/4] overflow-hidden">
                                <img src={staff.image} alt={staff.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex justify-between items-end mb-2">
                                    <h3 className="text-2xl font-serif font-bold">{staff.name}</h3>
                                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md text-sm">
                                        <Star size={14} className="text-yellow-400 fill-current" /> {staff.rating}
                                    </div>
                                </div>
                                <p className="text-slate-300 text-sm mb-4 font-medium uppercase tracking-wide">{staff.role}</p>
                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                                    <p className="text-slate-300 text-sm mb-4 italic">Specializes in {staff.specialty}</p>
                                    <Button onClick={() => openBooking(null, staff)} variant="secondary" className="w-full !py-2 !text-sm">
                                        Book Appointment <ChevronRight size={14} className="ml-1" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
