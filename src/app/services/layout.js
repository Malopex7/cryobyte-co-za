import React from 'react';

export const metadata = {
  title: 'IT Support Services - CryoByte',
  description: 'Professional IT support services for business, home, and corporate clients. 24/7 expert support and solutions.',
};

export default function ServicesLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-b from-primary/10 to-background py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground">Our Services</h1>
          <p className="mt-4 text-secondary max-w-2xl">
            Comprehensive IT support solutions tailored to your needs. Choose the service category that best fits your requirements.
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
