'use client';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';
import { GALLERY_IMAGES } from '@/lib/data';
import { Camera } from 'lucide-react';

const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 }
};

export default function GalleryPage() {
    return (
        <motion.div {...pageTransition} className="pt-32 pb-20">
            <div className="container mx-auto px-6">
                <SectionHeading title="Our Work" subtitle="Visual Stories" />

                {/* Masonry Layout using CSS Columns */}
                <div className="columns-2 md:columns-3 gap-4 space-y-4">
                    {GALLERY_IMAGES.map((img) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            key={img.id}
                            className="break-inside-avoid rounded-2xl overflow-hidden relative group"
                        >
                            <img src={img.src} alt="Gallery item" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="bg-white/90 p-3 rounded-full text-slate-900">
                                    <Camera size={24} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
