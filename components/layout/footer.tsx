'use client';
import { Scissors, MapPin, Phone, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-rose-500 text-white p-2 rounded-lg">
                                <Scissors size={20} />
                            </div>
                            <span className="text-2xl font-serif font-bold text-white tracking-tight">LUXE.</span>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Defining beauty through excellence, passion, and style. Join us for an unforgettable experience.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/services" className="hover:text-rose-500 transition-colors">Services</Link></li>
                            <li><Link href="/stylists" className="hover:text-rose-500 transition-colors">Stylists</Link></li>
                            <li><Link href="/gallery" className="hover:text-rose-500 transition-colors">Gallery</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-rose-500 shrink-0" size={18} />
                                <span>Opposite Lulu Mall, Edappally,<br />Kochi, Kerala 682024</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-rose-500 shrink-0" size={18} />
                                <span>+91 98765 43210</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <div className="flex gap-2">
                            <input type="email" placeholder="Email" className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-rose-500" />
                            <button className="bg-rose-500 text-white px-3 py-2 rounded-lg hover:bg-rose-600 transition-colors">
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
