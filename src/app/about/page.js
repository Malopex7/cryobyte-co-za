import Image from 'next/image';

// Add metadata export
export const metadata = {
  title: 'About | CryoByte IT Support',
  description: 'Learn about CryoByte IT Support - Professional IT services with 24/7 support and expert team.',
  currentPage: 'about'  // This will help with navigation highlighting
};

export default function AboutPage() {
  const features = [
    {
      title: "24/7 Support",
      description: "Round-the-clock expert assistance with 15-minute response times",
      icon: "🕒"
    },
    {
      title: "Professional Team",
      description: "Certified IT professionals with extensive industry experience",
      icon: "👥"
    },
    {
      title: "Comprehensive Solutions",
      description: "From business to home support, covering all IT needs",
      icon: "💻"
    },
    {
      title: "Modern Approach",
      description: "Using cutting-edge technology and best practices",
      icon: "🚀"
    }
  ];
  return (
    <div className="min-h-screen bg-page-gradient">
      <div className="relative">
        <div className="absolute inset-0 bg-grid-dark dark:bg-grid-white" />
        {/* Hero Section */}
        
        <div className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                About CryoByte IT Support
              </h1>
              <p className="mt-6 text-lg text-secondary">
                Professional IT support services delivering reliable solutions for businesses and individuals. 
                Our commitment to excellence and rapid response times ensures your technology works for you.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-7 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
                <p className="text-secondary">
                  We strive to provide comprehensive IT solutions with a focus on professional service delivery, 
                  quick response times, and user-centric support. Our goal is to keep your systems running 
                  smoothly while you focus on what matters most - your core business.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {features.map((feature) => (
                    <div 
                      key={feature.title} 
                      className="border border-secondary/20 rounded-lg p-6 bg-background/50 hover:border-primary/20 transition-colors"
                    >
                      <div className="text-3xl mb-3">{feature.icon}</div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-secondary">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Support Stats */}
            <div className="lg:col-span-5">
              <div className="bg-primary/5 rounded-xl p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-8">Our Commitment</h2>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">15min</div>
                    <div className="text-sm text-secondary mt-2">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-secondary mt-2">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">100%</div>
                    <div className="text-sm text-secondary mt-2">Satisfaction Goal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">Expert</div>
                    <div className="text-sm text-secondary mt-2">Support Team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
