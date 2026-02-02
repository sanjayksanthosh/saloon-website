'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

interface SectionHeadingProps {
    title: string;
    subtitle: string;
    centered?: boolean;
}

export const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}
    >
        <h3 className="text-rose-500 font-medium uppercase tracking-wider text-sm mb-3">{subtitle}</h3>
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900">{title}</h2>
        <div className={`h-1 w-20 bg-rose-300 mt-4 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
    </motion.div>
);
