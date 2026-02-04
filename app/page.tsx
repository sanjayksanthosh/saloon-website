'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useBooking } from '@/components/providers/booking-provider';
import { SERVICES } from '@/lib/data';
import { Sparkles, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
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
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800" alt="Styling" fill className="object-cover" />
                  </div>
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800" alt="Salon" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" alt="Makeup" fill className="object-cover" />
                  </div>
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" alt="Haircut" fill className="object-cover" />
                  </div>
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
          <div className="mt-8 text-center md:hidden">
            <Link href="/services" className="inline-flex items-center gap-2 text-slate-600 hover:text-rose-500 transition-colors font-medium">
              View Full Menu <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=800"
                  alt="Premium Salon Experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-rose-100 rounded-full opacity-50 blur-3xl -z-10"></div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-100 rounded-full opacity-50 blur-3xl -z-10"></div>
            </div>
            <div className="lg:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-wider mb-6">
                THE EXPERIENCE
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif text-slate-900 mb-6">
                Where Beauty Meets <br />
                <span className="text-rose-500">Tranquility</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Step into a world where your comfort is our priority. Our salon is more than just a place to get your hair done—it&apos;s a retreat from the hustle of daily life.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                From our carefully curated playlist to our premium organic products, every detail is chosen to enhance your wellbeing. Let our expert stylists transform your look while you relax in our modern, serene space.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-3xl font-serif text-slate-900 mb-1">5k+</h4>
                  <p className="text-slate-500 text-sm uppercase tracking-wide">Happy Clients</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-slate-900 mb-1">10+</h4>
                  <p className="text-slate-500 text-sm uppercase tracking-wide">Expert Stylists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery CTA */}
      <section className="py-24 relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138fa6ca0bd5?auto=format&fit=crop&q=80&w=1600"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl lg:text-6xl font-serif text-white mb-6">
            See Our Work
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Browse through our portfolio of transformations. Real clients, real results.
          </p>
          <Link href="/gallery">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50">
              View Gallery <ChevronRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-slate-100 relative">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125746.22557476839!2d76.216669!3d9.971764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0d12e62235%3A0x6b1940984920b7f8!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
        <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
          <h3 className="font-serif text-xl text-slate-900 mb-2">Visit Us</h3>
          <p className="text-slate-600 mb-4">
            Located in the heart of Kochi, providing accessible luxury for everyone.
          </p>
          <Button size="sm" onClick={() => window.open('https://goo.gl/maps/placeholder', '_blank')}>
            Get Directions
          </Button>
        </div>
      </section>
    </motion.div>
  );
};
