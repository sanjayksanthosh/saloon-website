'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';
import { SERVICES } from '@/lib/data';
import { useBooking } from '@/components/providers/booking-provider';
import { Clock, ChevronRight } from 'lucide-react';

const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 }
};

export default function ServicesPage() {
    const { openBooking } = useBooking();
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...Array.from(new Set(SERVICES.map(s => s.category)))];

    const filteredServices = filter === 'All'
        ? SERVICES
        : SERVICES.filter(s => s.category === filter);

    return (
        <motion.div {...pageTransition} className="pt-32 pb-20">
            <div className="container mx-auto px-6">
                <SectionHeading title="Service Menu" subtitle="Indulge Yourself" />

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:border-rose-300'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredServices.map((service) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={service.id}
                                className="group p-8 rounded-3xl bg-white border border-stone-100 shadow-sm hover:shadow-xl hover:border-rose-100 transition-all duration-300 flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className="bg-stone-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        {service.category}
                                    </span>
                                    <span className="text-xl font-serif font-bold text-slate-900">₹{service.price}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                                <p className="text-slate-500 text-sm mb-6 flex-grow">
                                    {service.description}
                                </p>
                                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                                        <Clock size={14} /> {service.duration} min
                                    </div>
                                    <button
                                        onClick={() => openBooking(service)}
                                        className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-rose-500 transition-colors flex items-center gap-2"
                                    >
                                        Book This <ChevronRight size={14} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
