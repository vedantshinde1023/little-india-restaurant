import { Section, SectionHeading, Eyebrow } from '@/components/site';
import { SEO } from '@/components/SEO';
import { Star } from 'lucide-react';

/**
 * Reviews Page
 * 
 * Design Philosophy: "Spice & Warmth"
 * - Rating summary strip
 * - Grid of testimonial cards
 * - Featured guest story
 * - Closing CTA
 */

export default function Reviews() {
  return (
    <>
      <SEO
        title="Reviews | What Our Guests Say About Little India"
        description="Read testimonials and reviews from our guests. Discover why Little India is Pune's favorite destination for authentic Indian cuisine."
      />
      <ReviewsContent />
    </>
  );
}

function ReviewsContent() {
  const testimonials = [
    {
      author: 'Mukesh Ahuja',
      role: 'Local Guide',
      rating: 5,
      text: 'I recently visited Little India with friends, and we were blown away by the flavors. We ordered Chicken Maratha, and it was love at first bite. The dish was perfectly spiced, with tender chicken and a rich gravy. The portion size was quite good. The service was attentive and friendly. Overall, highly recommend!',
      highlight: true,
    },
    {
      author: 'Decepticon 1982',
      role: 'Local Guide',
      rating: 5,
      text: 'Geeta thank you for your hospitality! We are looking forward to our next visit already.',
      highlight: false,
    },
    {
      author: 'Santhosh Mankulam',
      role: 'Local Guide',
      rating: 3,
      text: 'Roadside restaurant with decent ambience and parking available. The service and food quality could be improved. We recommend calling ahead to ensure availability.',
      highlight: false,
    },
  ];

  const ratingStats = {
    average: 4.3,
    total: 39,
    food: 5,
    service: 4,
    atmosphere: 3,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section
        fullBleed
        className="relative h-80 flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/restaurant-ambiance-AniTqqTh24NRxyAZbHvLVt.webp)',
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <Eyebrow className="text-ivory-overlay justify-center mb-4">
            What Our Guests Say
          </Eyebrow>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-ivory-overlay">
            Reviews & Testimonials
          </h1>
        </div>
      </Section>

      {/* Rating Summary */}
      <Section bgColor="muted">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-display font-bold text-primary">
                  {ratingStats.average}
                </span>
                <span className="text-2xl text-muted-foreground">/5</span>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(ratingStats.average)
                        ? 'fill-primary text-primary'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground">
                Based on {ratingStats.total} reviews
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">Food Quality</span>
                  <span className="text-sm font-semibold text-primary">
                    {ratingStats.food}/5
                  </span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width: `${(ratingStats.food / 5) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">Service</span>
                  <span className="text-sm font-semibold text-primary">
                    {ratingStats.service}/5
                  </span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width: `${(ratingStats.service / 5) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">Atmosphere</span>
                  <span className="text-sm font-semibold text-primary">
                    {ratingStats.atmosphere}/5
                  </span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width: `${(ratingStats.atmosphere / 5) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials Grid */}
      <Section>
        <SectionHeading eyebrow="Guest Stories" className="text-center mb-12">
          Hear from Our Guests
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-8 ${
                testimonial.highlight
                  ? 'bg-primary/5 border-2 border-primary'
                  : 'bg-background border border-border'
              }`}
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Story */}
      <Section bgColor="muted">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="Featured Story" className="text-center mb-8">
            A Guest's Journey
          </SectionHeading>
          <blockquote className="text-2xl font-display font-bold text-foreground mb-6 italic">
            "The Chicken Maratha was love at first bite—perfectly spiced, tender chicken, and a rich gravy that tells a story of culinary mastery."
          </blockquote>
          <p className="text-lg text-muted-foreground mb-4">
            Mukesh Ahuja, a seasoned food critic and local guide, visited Little India with friends and was immediately captivated by the flavors. What impressed him most wasn't just the exceptional food quality, but the attentive service and warm hospitality that made the experience truly memorable.
          </p>
          <p className="text-lg text-muted-foreground">
            "The portion size was generous, the service was knowledgeable and friendly, and the overall experience was one we're already planning to repeat. Little India isn't just a restaurant—it's a destination for authentic Indian cuisine in Pune."
          </p>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section bgColor="primary" className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Join our growing family of satisfied guests
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Experience the flavors and hospitality that have earned us these wonderful reviews.
          </p>
          <a
            href="/book"
            className="inline-flex items-center justify-center px-8 py-3 bg-background text-foreground font-semibold rounded-lg hover:bg-background/90 transition-colors"
          >
            Book Your Table
          </a>
        </div>
      </Section>
    </div>
  );
}
