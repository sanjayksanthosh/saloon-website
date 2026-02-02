'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useBooking } from '@/components/providers/booking-provider';
import { SERVICES } from '@/lib/data';
import { Sparkles, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

export default function Home() {
  const { openBooking } = useBooking();
  const router = useRouter();

  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="relative pt-12 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-wider mb-6">
                NEW SEASON, NEW LOOK
              </span>
              <h1 className="text-5xl lg:text-7xl font-serif text-slate-900 leading-[1.1] mb-6">
                Elevate Your <br />
                <span className="relative">
                  Style
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-rose-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
                <span className="text-rose-500">.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Experience premium haircare and beauty treatments in a sanctuary designed for your relaxation in the heart of Kochi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={() => openBooking()}>
                  Book Appointment
                </Button>
                <Button variant="outline" onClick={() => router.push('/services')}>
                  View Services
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                  <img src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800" alt="Styling" className="w-full h-64 object-cover rounded-2xl shadow-lg" />
                  <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800" alt="Salon" className="w-full h-48 object-cover rounded-2xl shadow-lg" />
                </div>
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" alt="Makeup" className="w-full h-48 object-cover rounded-2xl shadow-lg" />
                  <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" alt="Haircut" className="w-full h-64 object-cover rounded-2xl shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-rose-500 font-medium uppercase tracking-wider text-sm mb-2">Our Menu</h3>
              <h2 className="text-3xl font-serif text-slate-900">Popular Treatments</h2>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-2 text-slate-600 hover:text-rose-500 transition-colors font-medium">
              View Full Menu <ChevronRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map(service => (
              <div key={service.id} className="bg-stone-50 p-6 rounded-2xl border border-stone-100 hover:border-rose-200 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-white p-2 rounded-lg text-rose-500 shadow-sm"><Sparkles size={20} /></div>
                  <span className="font-serif font-bold text-slate-900">₹{service.price}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{service.description}</p>
                <button onClick={() => openBooking(service)} className="text-sm font-bold text-slate-900 hover:text-rose-500 flex items-center gap-1">
                  Book Now <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
