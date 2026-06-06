import { Button } from '@/components/ui/button';
import { Section, SectionHeading, Eyebrow } from '@/components/site';
import { SEO } from '@/components/SEO';
import { ArrowRight, MapPin, Phone } from 'lucide-react';

/**
 * Home Page
 * 
 * Design Philosophy: "Spice & Warmth"
 * - Full-viewport hero with custom imagery
 * - Editorial intro with signature image
 * - Signature services grid
 * - Philosophy section with value props
 * - Featured testimonial
 * - Visit us section with map preview
 * - Closing CTA band
 */

export default function Home() {
  return (
    <>
      <SEO
        title="Little India Restaurant | Authentic Indian Cuisine in Pune"
        description="Experience authentic Indian cuisine at Little India Restaurant in Pune. Signature dishes, warm hospitality, and unforgettable flavors. Book your table now."
        image="https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/hero-home-Qj84mvTWuQiPyNY8GxHcbZ.webp"
      />
      <HomeContent />
    </>
  );
}

function HomeContent() {
  const signatureServices = [
    {
      title: 'Butter Chicken',
      slug: 'butter-chicken',
      tagline: 'Creamy tomato-based curry with tender chicken pieces',
      price: '₹499',
    },
    {
      title: 'Chicken Maratha',
      slug: 'chicken-maratha',
      tagline: 'Bold, rustic flavors with spiced onion-based gravy',
      price: '₹489',
    },
    {
      title: 'Tandoori Chicken',
      slug: 'tandoori-chicken',
      tagline: 'Marinated and charred to perfection in the tandoor',
      price: '₹369',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section
        fullBleed
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/hero-home-Qj84mvTWuQiPyNY8GxHcbZ.webp)',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <div className="mb-6">
            <Eyebrow className="text-ivory-overlay justify-center">
              Authentic Indian Cuisine
            </Eyebrow>
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-ivory-overlay mb-6">
            Little India
          </h1>
          <p className="text-xl text-ivory-overlay/90 mb-12 max-w-xl mx-auto">
            Warm hospitality, bold flavors, and unforgettable meals in the heart of Pune.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="/book">Book Now</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-ivory-overlay text-ivory-overlay hover:bg-white/10"
            >
              <a href="/services">Explore Services</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-ivory-overlay/70">Scroll to explore</span>
            <svg
              className="w-6 h-6 text-ivory-overlay/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </Section>

      {/* Intro Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading eyebrow="Our Story">
              Bringing India's Flavors to Pune
            </SectionHeading>
            <p className="text-lg text-muted-foreground mb-6">
              Little India is a celebration of authentic Indian cuisine, where every dish tells a story of tradition, passion, and culinary excellence. Our chefs craft each meal with care, using time-honored techniques and the finest ingredients.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From the tandoor to your table, we believe in creating moments of warmth, connection, and unforgettable flavors.
            </p>
            <Button asChild>
              <a href="/about">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/restaurant-ambiance-AniTqqTh24NRxyAZbHvLVt.webp"
              alt="Little India Restaurant Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Signature Services */}
      <Section bgColor="muted">
        <SectionHeading
          eyebrow="Signature Dishes"
          className="text-center mb-16"
        >
          Our Most Beloved Creations
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signatureServices.map((service) => (
            <a
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-background rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
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
                <h3 className="text-lg font-display font-bold mb-2">
                  {service.title}
                </h3>
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

      {/* Philosophy Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden order-2 lg:order-1">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/butter-chicken-hero-iLUgTzUeAemnhcSMUZoupx.webp"
              alt="Our Philosophy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="Our Approach">
              Quality, Authenticity, Warmth
            </SectionHeading>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Authentic Recipes
                </h4>
                <p className="text-muted-foreground">
                  Every dish is prepared using traditional methods and authentic spice blends passed down through generations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Fresh Ingredients
                </h4>
                <p className="text-muted-foreground">
                  We source the finest ingredients locally and nationally, ensuring every bite is fresh and flavorful.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Warm Hospitality
                </h4>
                <p className="text-muted-foreground">
                  Our team treats every guest like family, ensuring a memorable dining experience from arrival to departure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonial Section */}
      <Section bgColor="primary" className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl lg:text-3xl font-display font-bold text-primary-foreground mb-6 italic">
            "I recently visited Little India with friends, and we were blown away by the flavors. The Chicken Maratha was love at first bite—perfectly spiced, tender chicken, and a rich gravy. The service was attentive and friendly. Highly recommend!"
          </blockquote>
          <p className="text-primary-foreground/80 font-semibold">
            — Mukesh Ahuja, Local Guide
          </p>
        </div>
      </Section>

      {/* Visit Us Section */}
      <Section>
        <SectionHeading eyebrow="Location" className="text-center mb-12">
          Visit Us in Mohammed Wadi
        </SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold uppercase letter-spacing mb-2 text-foreground">
                  Address
                </h4>
                <p className="text-lg text-muted-foreground">
                  SNO.10/1 2B Mohammad Wadi, Pune 411028
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase letter-spacing mb-2 text-foreground">
                  Hours
                </h4>
                <p className="text-lg text-muted-foreground">
                  Daily: 11:30 AM – 11:30 PM
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase letter-spacing mb-2 text-foreground">
                  Contact
                </h4>
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a
                    href="tel:+919503343500"
                    className="text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9503 343 500
                  </a>
                </div>
              </div>
              <Button asChild size="lg">
                <a href="/location">Get Directions</a>
              </Button>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden bg-muted">
            <div className="w-full h-full flex items-center justify-center">
              <MapPin className="w-12 h-12 text-muted-foreground" />
            </div>
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section bgColor="primary" className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Ready for an unforgettable meal?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Book your table now and experience authentic Indian cuisine at its finest.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          >
            <a href="/book">Book a Table</a>
          </Button>
        </div>
      </Section>
    </div>
  );
}
