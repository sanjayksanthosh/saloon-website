
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { BookingProvider } from '@/components/providers/booking-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'LUXE - Premium Salon & Spa',
  description: 'Experience premium haircare and beauty treatments in Kochi.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${serif.variable} font-sans bg-stone-50 text-slate-600 selection:bg-rose-200 selection:text-slate-900`}>
        <BookingProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
