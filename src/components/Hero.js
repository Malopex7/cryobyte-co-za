import Image from "next/image";
import Link from "next/link";

// Make sure the export is clean and clear
export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Professional IT Support for Your Business
            </h1>
            <p className="text-lg lg:text-xl text-blue-100">
              24/7 expert support to keep your systems running smoothly. 
              Trust CryoByte for all your IT needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/services" 
                className="px-8 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
          
          {/* Hero Image Container */}
          <div className="hidden lg:block relative">
            <div className="aspect-[4/3] relative">
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

      {/* Floating Support Card */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white text-gray-900 p-6 rounded-xl shadow-xl w-[90%] max-w-3xl">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-bold mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-600">Always here when you need us</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Quick Response</h3>
            <p className="text-sm text-gray-600">15 minute response time</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Expert Team</h3>
            <p className="text-sm text-gray-600">Certified professionals</p>
          </div>
        </div>
      </div>
    </section>
  );
}
