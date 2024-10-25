/* eslint-disable react/no-unescaped-entities */
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us - CryoByte IT Support',
  description: 'Get in touch with CryoByte IT Support. 24/7 professional IT support services for your business.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-page-gradient">
      <div className="relative">
        <div className="absolute inset-0 bg-grid-dark dark:bg-grid-white" />
        
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-primary/10 to-background py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-foreground">Contact Us</h1>
            <p className="mt-4 text-secondary max-w-2xl">
              Get in touch with our expert team for all your IT support needs. We're here to help 24/7.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-5">
              <div className="bg-background rounded-xl border border-secondary/20 p-6 space-y-8 sticky top-24">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                  <p className="text-secondary">
                    Reach out to us through any of these channels for immediate assistance.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/5 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:info@cryobyte.co.za" className="text-primary hover:text-primary-light">
                        info@cryobyte.co.za
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/5 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-secondary">
                        11 Von Wielligh St<br />
                        Lindhaven, Roodepoort<br />
                        1724
                      </p>
                    </div>
                  </div>

                  {/* Support Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/5 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Support Hours</h3>
                      <p className="text-secondary">24/7 Support Available</p>
                    </div>
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
