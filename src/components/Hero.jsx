import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Professional IT Support for Your Business
            </h1>
            <p className="mt-6 text-lg text-secondary max-w-xl">
              24/7 expert IT support services delivering reliable solutions for all your technology needs.
            </p>
            <div className="mt-10 flex gap-6">
              <a
                href="/contact"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-light transition-colors"
              >
                Get Started
              </a>
              <Link
                href="/services"
                className="rounded-lg border border-secondary px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary/10 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="/images/hero-support.svg"
              alt="IT Support Services"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
