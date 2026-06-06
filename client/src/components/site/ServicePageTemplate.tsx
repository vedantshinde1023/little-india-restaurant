import { ReactNode } from 'react';
import { Section, SectionHeading, Eyebrow } from '@/components/site';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

/**
 * Service Page Template
 * 
 * Design Philosophy: "Spice & Warmth"
 * - Reusable component for all individual service pages
 * - Hero section with service image
 * - Overview section
 * - What's included
 * - Pricing table
 * - Experience walkthrough
 * - Benefits grid
 * - Who it's for / Who it's not for
 * - FAQ accordion
 * - Related services
 * - Closing CTA
 */

interface ServicePageProps {
  title: string;
  slug: string;
  tagline: string;
  heroImage: string;
  overview: string[];
  included: string[];
  pricing: Array<{ duration: string; price: string }>;
  experience: Array<{ step: number; title: string; description: string }>;
  benefits: string[];
  forWho: string;
  notForWho: string;
  faqs: Array<{ question: string; answer: string }>;
  relatedServices: Array<{ title: string; slug: string; price: string }>;
}

export function ServicePageTemplate({
  title,
  slug,
  tagline,
  heroImage,
  overview,
  included,
  pricing,
  experience,
  benefits,
  forWho,
  notForWho,
  faqs,
  relatedServices,
}: ServicePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section
        fullBleed
        className="relative h-96 flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <Eyebrow className="text-ivory-overlay justify-center mb-4">
            Signature Dish
          </Eyebrow>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-ivory-overlay mb-4">
            {title}
          </h1>
          <p className="text-xl text-ivory-overlay/90">{tagline}</p>
        </div>
      </Section>

      {/* Overview */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="About This Dish">
            A Culinary Experience
          </SectionHeading>
          <div className="space-y-4 text-lg text-muted-foreground">
            {overview.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section bgColor="muted">
        <SectionHeading eyebrow="What's Included" className="mb-12">
          Everything You Get
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {included.map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <Check className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <SectionHeading eyebrow="Pricing" className="text-center mb-12">
          Transparent Pricing
        </SectionHeading>
        <div className="max-w-2xl mx-auto">
          <div className="bg-muted rounded-lg overflow-hidden">
            {pricing.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between p-6 ${
                  idx !== pricing.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <span className="font-semibold text-foreground">
                  {item.duration}
                </span>
                <span className="text-2xl font-bold text-primary">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section bgColor="muted">
        <SectionHeading eyebrow="The Experience" className="text-center mb-12">
          From Arrival to Departure
        </SectionHeading>
        <div className="max-w-3xl mx-auto space-y-6">
          {experience.map((step) => (
            <div key={step.step} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                {step.step}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <SectionHeading eyebrow="Benefits" className="text-center mb-12">
          Why You'll Love It
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-muted rounded-lg p-6 text-center">
              <p className="font-semibold text-foreground">{benefit}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Who It's For */}
      <Section bgColor="muted">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Perfect For
            </h3>
            <p className="text-lg text-muted-foreground">{forWho}</p>
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Not Ideal For
            </h3>
            <p className="text-lg text-muted-foreground">{notForWho}</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQ" className="text-center mb-12">
          Common Questions
        </SectionHeading>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="bg-muted rounded-lg p-6 cursor-pointer group"
            >
              <summary className="font-semibold text-foreground flex items-center justify-between">
                {faq.question}
                <span className="text-primary group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="text-muted-foreground mt-4">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <Section bgColor="muted">
          <SectionHeading
            eyebrow="Explore More"
            className="text-center mb-12"
          >
            Similar Dishes
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((service) => (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-background rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40 overflow-hidden bg-muted">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    Image
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-display font-bold text-lg mb-2">
                    {service.title}
                  </h4>
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
      )}

      {/* Closing CTA */}
      <Section bgColor="primary" className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Ready to experience {title}?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Book your table now and taste the authentic flavors of Little India.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          >
            <a href={`/book?service=${title}`}>Book Now</a>
          </Button>
        </div>
      </Section>
    </div>
  );
}
