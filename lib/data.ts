
import { Service, Staff } from '@/types';

export const SERVICES: Service[] = [
    { id: 1, name: "Signature Haircut & Style", price: 950, duration: 60, category: "Hair", description: "Precision cut tailored to your face shape, finished with a blowout." },
    { id: 2, name: "Balayage & Toning", price: 4500, duration: 180, category: "Color", description: "Hand-painted highlights for a natural, sun-kissed look." },
    { id: 3, name: "Deep Conditioning", price: 1200, duration: 30, category: "Treatment", description: "Intense moisture restoration for dry or damaged hair." },
    { id: 4, name: "Gel Manicure Deluxe", price: 1500, duration: 45, category: "Nails", description: "Long-lasting gel polish with cuticle care and hand massage." },
    { id: 5, name: "Full Face Makeup", price: 3500, duration: 60, category: "Makeup", description: "Professional application for events, photoshoots, or parties." },
    { id: 6, name: "Bridal Consultation", price: 5000, duration: 90, category: "Special", description: "Trial run for hair and makeup to ensure perfection on your big day." },
    { id: 7, name: "Keratin Smooth", price: 6000, duration: 150, category: "Treatment", description: "Frizz-reduction treatment for smooth, shiny hair." },
    { id: 8, name: "Root Touch-Up", price: 2500, duration: 90, category: "Color", description: "Cover grays or blend regrowth seamlessly." },
];

export const STAFF: Staff[] = [
    {
        id: 1,
        name: "Anjali M.",
        role: "Senior Stylist",
        rating: 4.9,
        specialty: "Precision Cuts & Bridal",
        image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        name: "Rahul K.",
        role: "Color Specialist",
        rating: 5.0,
        specialty: "Balayage & Corrections",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        name: "Sarah J.",
        role: "Nail Artist",
        rating: 4.8,
        specialty: "Nail Art & Gel Extensions",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800"
    },
];

export const GALLERY_IMAGES = [
    { id: 1, src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=600", height: "h-64" },
    { id: 2, src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600", height: "h-96" },
    { id: 3, src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=600", height: "h-48" },
    { id: 4, src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600", height: "h-80" },
    { id: 5, src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=600", height: "h-64" },
    { id: 6, src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600", height: "h-72" },
    { id: 7, src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=600", height: "h-56" },
    { id: 8, src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600", height: "h-80" },
];
