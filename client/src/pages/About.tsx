import { Button } from '@/components/ui/button';
import { Section, SectionHeading, Eyebrow } from '@/components/site';
import { SEO } from '@/components/SEO';
import { ArrowRight } from 'lucide-react';

/**
 * About Page
 * 
 * Design Philosophy: "Spice & Warmth"
 * - Hero with founder/space photo
 * - Origin story (2-3 paragraphs)
 * - Philosophy deep-dive with imagery
 * - Closing CTA
 */

export default function About() {
  return (
    <>
      <SEO
        title="About Little India | Our Story & Philosophy"
        description="Learn about Little India's journey, philosophy, and commitment to authentic Indian cuisine, quality ingredients, and warm hospitality."
      />
      <AboutContent />
    </>
  );
}

function AboutContent() {
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
              'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/restaurant-ambiance-AniTqqTh24NRxyAZbHvLVt.webp)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <Eyebrow className="text-ivory-overlay justify-center mb-4">
            Our Story
          </Eyebrow>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-ivory-overlay">
            About Little India
          </h1>
        </div>
      </Section>

      {/* Origin Story */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="Our Journey">
            From Passion to Plate
          </SectionHeading>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Little India was born from a simple vision: to bring authentic Indian cuisine to Pune with warmth, authenticity, and excellence. Our founder believed that great food is more than just flavors—it's about creating moments of connection, comfort, and celebration.
            </p>
            <p>
              Every dish on our menu tells a story of tradition, passed down through generations of culinary expertise. We honor these recipes while infusing them with our own passion and dedication to quality. From the tandoor to your table, every element is carefully considered.
            </p>
            <p>
              Today, Little India stands as a testament to the power of authentic cuisine and warm hospitality. We're grateful for every guest who walks through our doors and trusts us with their dining experience.
            </p>
          </div>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section bgColor="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/chicken-tikka-masala-hero-mLhrMaX7SnZCYsdc64VXqq.webp"
              alt="Our Philosophy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Our Philosophy">
              Quality, Authenticity, Care
            </SectionHeading>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Authentic Recipes
                </h4>
                <p className="text-muted-foreground">
                  We honor traditional Indian recipes, using time-honored cooking techniques and authentic spice blends that have been perfected over generations.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Premium Ingredients
                </h4>
                <p className="text-muted-foreground">
                  We source only the finest ingredients, ensuring that every bite is fresh, flavorful, and of the highest quality. No shortcuts, no compromises.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Warm Hospitality
                </h4>
                <p className="text-muted-foreground">
                  Our team treats every guest like family. We believe that great food is best enjoyed in a warm, welcoming environment where you feel truly cared for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <SectionHeading eyebrow="Our Values" className="text-center mb-12">
          What Drives Us
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-display font-bold text-primary">
                🍳
              </span>
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-3">
              Craft
            </h4>
            <p className="text-muted-foreground">
              Every dish is prepared with meticulous attention to detail, honoring both tradition and innovation.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-sage-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-display font-bold text-sage-accent">
                🌿
              </span>
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-3">
              Authenticity
            </h4>
            <p className="text-muted-foreground">
              We stay true to our roots, celebrating the rich heritage of Indian cuisine without compromise.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-display font-bold text-primary">
                ❤️
              </span>
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-3">
              Care
            </h4>
            <p className="text-muted-foreground">
              We care deeply about our guests, our team, and our community, treating everyone with warmth and respect.
            </p>
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section bgColor="primary" className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Experience our story firsthand
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Visit us and discover why Little India is Pune's favorite destination for authentic Indian cuisine.
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
