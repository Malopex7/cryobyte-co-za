import { LaptopIcon, HomeIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    title: 'Business Support',
    description: 'Comprehensive IT solutions for small to medium-sized businesses.',
    icon: LaptopIcon,
    href: '/services/business',
    features: [
      'Network setup and maintenance',
      'Data backup and recovery',
      'Security solutions',
      'Cloud services integration'
    ]
  },
  {
    title: 'Home Support',
    description: 'Expert technical support for home users and remote workers.',
    icon: HomeIcon,
    href: '/services/home',
    features: [
      'PC and device setup',
      'Wi-Fi optimization',
      'Smart home integration',
      'Remote assistance'
    ]
  },
  {
    title: 'Corporate Support',
    description: 'Enterprise-level IT infrastructure and support services.',
    icon: BuildingOffice2Icon,
    href: '/services/corporate',
    features: [
      'Enterprise infrastructure',
      'Managed IT services',
      '24/7 dedicated support',
      'Compliance and security'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-page-gradient">
      <div className="relative">
        <div className="absolute inset-0 bg-grid-dark dark:bg-grid-white" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div key={service.title} className="h-full">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
