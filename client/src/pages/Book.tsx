import { useState } from 'react';
import { useLocation } from 'wouter';
import { Section, SectionHeading, Eyebrow } from '@/components/site';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Phone, Clock, AlertCircle } from 'lucide-react';

/**
 * Book/Contact Page
 * 
 * Design Philosophy: "Spice & Warmth"
 * - Two-column layout: form on left, sidebar on right
 * - Form: name, email, phone, service select, date, time, guests, notes
 * - Sidebar: phone booking, hours, cancellation policy
 * - Confirmation toast on submit
 */

export default function Book() {
  return (
    <>
      <SEO
        title="Book a Table | Reserve at Little India Restaurant"
        description="Reserve your table at Little India Restaurant. Fill out our simple form or call +91 9503 343 500. Open daily 11:30 AM – 11:30 PM."
      />
      <BookContent />
    </>
  );
}

function BookContent() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location.split('?')[1] || '');
  const serviceParam = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceParam || '',
    date: '',
    time: '',
    guests: '2',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Butter Chicken',
    'Chicken Maratha',
    'Murg Mussallam',
    'Tandoori Chicken',
    'Paneer Tikka',
    'Chicken Tikka Masala',
    'Chicken Biryani',
    'General Inquiry',
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Reservation request received!', {
        description:
          'We will confirm your booking shortly. Thank you for choosing Little India!',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        guests: '2',
        notes: '',
      });
      setIsSubmitting(false);
    }, 1000);
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
              'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/hero-home-Qj84mvTWuQiPyNY8GxHcbZ.webp)',
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <Eyebrow className="text-ivory-overlay justify-center mb-4">
            Reserve Your Table
          </Eyebrow>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-ivory-overlay">
            Book a Table
          </h1>
        </div>
      </Section>

      {/* Booking Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Service/Inquiry
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Preferred Date
                  </label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Preferred Time
                  </label>
                  <Input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Special Requests or Notes
                </label>
                <Textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any dietary restrictions, allergies, or special occasions?"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Submitting...' : 'Request Reservation'}
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Phone Booking */}
            <div className="bg-muted rounded-lg p-6">
              <div className="flex gap-3 mb-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <h4 className="text-lg font-semibold text-foreground">
                  Call to Book
                </h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Prefer to book over the phone? Our team is ready to help!
              </p>
              <a
                href="tel:+919503343500"
                className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                +91 9503 343 500
              </a>
            </div>

            {/* Hours */}
            <div className="bg-muted rounded-lg p-6">
              <div className="flex gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <h4 className="text-lg font-semibold text-foreground">
                  Hours
                </h4>
              </div>
              <p className="text-muted-foreground">
                <span className="font-semibold block mb-2">Daily</span>
                11:30 AM – 11:30 PM
              </p>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <div className="flex gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <h4 className="text-lg font-semibold text-foreground">
                  Cancellation Policy
                </h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Cancellations must be made at least 24 hours in advance. For
                changes, please call us directly at +91 9503 343 500.
              </p>
            </div>

            {/* What to Bring */}
            <div className="bg-muted rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                What to Bring
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Valid ID for verification</li>
                <li>• Any dietary documentation if needed</li>
                <li>• Appetite for great food!</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Info Section */}
      <Section bgColor="muted">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading eyebrow="Questions?" className="text-center mb-6">
            We're Here to Help
          </SectionHeading>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions about our menu, dietary restrictions, or special
            events? Our team is happy to assist. Contact us anytime!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919503343500"
              className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Call Us
            </a>
            <a
              href="mailto:info@littleindia.com"
              className="inline-flex items-center justify-center px-6 py-2 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
