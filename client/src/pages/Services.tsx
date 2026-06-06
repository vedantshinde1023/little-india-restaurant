import { Button } from '@/components/ui/button';
import { Section, SectionHeading, Eyebrow } from '@/components/site';
import { SEO } from '@/components/SEO';
import { ArrowRight } from 'lucide-react';

/**
 * Services Index Page
 * 
 * Design Philosophy: "Spice & Warmth"
 * - Hero strip with eyebrow and heading
 * - Editorial intro paragraph
 * - Full grid of all services
 * - Closing CTA
 */

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services | Signature Dishes at Little India"
        description="Explore our signature dishes including Butter Chicken, Tandoori Chicken, Biryani, and more. Authentic Indian cuisine prepared with passion."
      />
      <ServicesContent />
    </>
  );
}

function ServicesContent() {
  const allServices = [
    {
      title: 'Butter Chicken',
      slug: 'butter-chicken',
      tagline: 'Creamy tomato-based curry with tender chicken pieces',
      price: '₹499',
      category: 'Signature',
    },
    {
      title: 'Chicken Maratha',
      slug: 'chicken-maratha',
      tagline: 'Bold, rustic flavors with spiced onion-based gravy',
      price: '₹489',
      category: 'Signature',
    },
    {
      title: 'Murg Mussallam',
      slug: 'murg-mussallam',
      tagline: 'Whole chicken marinated and slow-roasted with aromatic spices',
      price: '₹599',
      category: 'Signature',
    },
    {
      title: 'Tandoori Chicken',
      slug: 'tandoori-chicken',
      tagline: 'Marinated in yogurt and spices, charred to perfection',
      price: '₹369',
      category: 'Signature',
    },
    {
      title: 'Paneer Tikka',
      slug: 'paneer-tikka',
      tagline: 'Soft paneer cubes marinated in spices and grilled',
      price: '₹429',
      category: 'Vegetarian',
    },
    {
      title: 'Chicken Tikka Masala',
      slug: 'chicken-tikka-masala',
      tagline: 'Tandoori chicken pieces in a creamy, tomato-based sauce',
      price: '₹449',
      category: 'Signature',
    },
    {
      title: 'Chicken Biryani',
      slug: 'chicken-biryani',
      tagline: 'Fragrant basmati rice layered with marinated chicken',
      price: '₹449',
      category: 'Rice & Biryani',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section
        fullBleed
        className="relative h-96 flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/hero-home-Qj84mvTWuQiPyNY8GxHcbZ.webp)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <Eyebrow className="text-ivory-overlay justify-center mb-4">
            Explore Our Menu
          </Eyebrow>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-ivory-overlay">
            Our Services
          </h1>
        </div>
      </Section>

      {/* Intro Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-muted-foreground">
            Each dish is a masterpiece, crafted with authentic recipes, the finest ingredients, and a passion for Indian cuisine. From tandoori specialties to creamy curries and fragrant biryanis, discover your new favorite.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service) => (
            <a
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-background rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-border"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <img
                  src={`https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/${service.slug}-hero-Qj84mvTWuQiPyNY8GxHcbZ.webp`}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-display font-bold">
                    {service.title}
                  </h3>
                  <span className="text-xs font-semibold uppercase letter-spacing text-primary bg-primary/10 px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.tagline}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">
                    {service.price}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Closing CTA */}
      <Section bgColor="primary" className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Ready to taste the difference?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Book your table and experience authentic Indian cuisine prepared with passion.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          >
            <a href="/book">Book Now</a>
          </Button>
        </div>
      </Section>
    </div>
  );
}
