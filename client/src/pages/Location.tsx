import { Section, SectionHeading, Eyebrow } from '@/components/site';
import { useRef, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { MapView } from '@/components/Map';
import { MapPin, Phone, Clock, ParkingCircle } from 'lucide-react';

/**
 * Location Page
 * 
 * Design Philosophy: "Spice & Warmth"
 * - Storefront hero photo
 * - Address and embedded map preview
 * - Hours table
 * - Parking and transit guidance
 * - First-visit guide
 * - Closing CTA
 */

export default function Location() {
  return (
    <>
      <SEO
        title="Location | Visit Little India in Mohammed Wadi, Pune"
        description="Find us at SNO.10/1 2B Mohammad Wadi, Pune 411028. Hours: 11:30 AM – 11:30 PM daily. Free parking available. Get directions now."
      />
      <LocationContent />
    </>
  );
}

function LocationContent() {
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
    
    // Add marker for Little India Restaurant
    const restaurantLocation = { lat: 18.5234567, lng: 73.8123456 };
    
    // Create advanced marker
    new google.maps.marker.AdvancedMarkerElement({
      map,
      position: restaurantLocation,
      title: 'Little India Restaurant',
    });
  };

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
            Find Us
          </Eyebrow>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-ivory-overlay">
            Visit Little India
          </h1>
        </div>
      </Section>

      {/* Address & Map */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading eyebrow="Location">
              Mohammed Wadi, Pune
            </SectionHeading>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Address
                  </h4>
                  <p className="text-muted-foreground">
                    SNO.10/1 2B Mohammad Wadi
                    <br />
                    Pune 411028
                    <br />
                    Near Corinthians Club
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:+919503343500"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    +91 9503 343 500
                  </a>
                </div>
              </div>
            </div>
            <Button asChild size="lg">
              <a
                href="https://maps.google.com/?q=Little+India+Restaurant+Pune+Mohammed+Wadi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>
          <MapView
            initialCenter={{ lat: 18.5234567, lng: 73.8123456 }}
            initialZoom={15}
            onMapReady={handleMapReady}
            className="h-96 rounded-lg overflow-hidden"
          />
        </div>
      </Section>

      {/* Hours */}
      <Section bgColor="muted">
        <SectionHeading eyebrow="Hours" className="text-center mb-12">
          When We're Open
        </SectionHeading>
        <div className="max-w-2xl mx-auto">
          <div className="bg-background rounded-lg p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="font-semibold text-foreground">
                  Monday - Sunday
                </span>
                <span className="text-muted-foreground">11:30 AM – 11:30 PM</span>
              </div>
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Open daily for lunch and dinner
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Parking & Transit */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-muted rounded-lg p-8">
            <div className="flex gap-3 mb-4">
              <ParkingCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <h4 className="text-lg font-semibold text-foreground">Parking</h4>
            </div>
            <p className="text-muted-foreground">
              Free street parking is available near the restaurant. Ample parking space makes it convenient to visit us anytime.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-8">
            <div className="flex gap-3 mb-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0" />
              <h4 className="text-lg font-semibold text-foreground">
                Getting Here
              </h4>
            </div>
            <p className="text-muted-foreground">
              Located in Mohammed Wadi, easily accessible from all parts of Pune. Close to major landmarks and well-connected by public transport.
            </p>
          </div>
        </div>
      </Section>

      {/* First Visit Guide */}
      <Section bgColor="muted">
        <SectionHeading eyebrow="First Time?" className="text-center mb-12">
          What to Expect
        </SectionHeading>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Warm Welcome
                </h4>
                <p className="text-muted-foreground">
                  Our team greets you warmly and seats you comfortably. Feel free to ask for recommendations or dietary accommodations.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Menu Guidance
                </h4>
                <p className="text-muted-foreground">
                  Our knowledgeable staff will guide you through the menu, explaining dishes and suggesting pairings based on your preferences.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Attentive Service
                </h4>
                <p className="text-muted-foreground">
                  Our team ensures your water glass is always full, your needs are anticipated, and your dining experience is seamless.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Memorable Meal
                </h4>
                <p className="text-muted-foreground">
                  Enjoy authentic, freshly prepared cuisine in a warm, welcoming atmosphere. This is just the beginning of your Little India journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section bgColor="primary" className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            We're waiting for you
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Book your table now and experience authentic Indian cuisine at Little India.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          >
            <a href="/book">Reserve a Table</a>
          </Button>
        </div>
      </Section>
    </div>
  );
}
