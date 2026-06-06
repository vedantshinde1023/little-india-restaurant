import { ServicePageTemplate } from '@/components/site/ServicePageTemplate';

export default function MurgMussallamPage() {
  return (
    <ServicePageTemplate
      title="Murg Mussallam"
      slug="murg-mussallam"
      tagline="Whole chicken marinated and slow-roasted with aromatic spices"
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/murg-mussallam-hero-CMmFBVrDVUXDV6isZuxwzs.webp"
      overview={[
        "Murg Mussallam is the showstopper of Indian cuisine—a whole chicken marinated in yogurt and spices, then slow-roasted in the tandoor for 45+ minutes. The result is juicy, tender meat with a smoky exterior and aromatic interior.",
        "This dish is a celebration of technique and patience. The long marination ensures flavors penetrate every fiber, while the tandoor cooking seals in moisture and creates a beautiful char.",
        "Murg Mussallam is perfect for special occasions, celebrations, and those seeking an impressive, restaurant-quality dish. It's a showstopper that commands attention on the table.",
      ]}
      included={[
        'Whole chicken marinated 4+ hours in yogurt and spices',
        'Slow-roasted in traditional clay tandoor',
        'Charred exterior with juicy, tender interior',
        'Served with mint chutney, onions, and lemon',
        'Smoky, aromatic flavor',
        'Impressive presentation',
      ]}
      pricing={[{ duration: 'Whole Chicken (Serves 2-3)', price: '₹599' }]}
      experience={[
        {
          step: 1,
          title: 'Order Ahead',
          description:
            'We recommend ordering Murg Mussallam 24 hours in advance for optimal preparation.',
        },
        {
          step: 2,
          title: 'Marination',
          description:
            'Your chicken is marinated for 4+ hours in our signature yogurt and spice blend.',
        },
        {
          step: 3,
          title: 'Tandoor Roasting',
          description:
            'The whole chicken is roasted in our traditional clay tandoor for 45+ minutes until perfectly cooked.',
        },
        {
          step: 4,
          title: 'Presentation & Carving',
          description:
            'Your Murg Mussallam arrives whole and is carved tableside or in the kitchen per your preference.',
        },
      ]}
      benefits={[
        'Showstopper presentation',
        'Juicy, tender meat',
        'Impressive for special occasions',
        'Smoky, authentic flavor',
        'Perfect for sharing',
        'Restaurant-quality preparation',
      ]}
      forWho="Perfect for special occasions, celebrations, and those seeking an impressive, restaurant-quality dish. Ideal for sharing and making a statement at the table."
      notForWho="Not ideal for those seeking a quick meal, as preparation takes 50+ minutes. Also not suitable for those with limited appetite, as it's a substantial dish."
      faqs={[
        {
          question: 'How long does it take to prepare?',
          answer:
            'About 50 minutes from order to table. We recommend ordering ahead for optimal preparation and to ensure availability.',
        },
        {
          question: 'Is it served whole?',
          answer:
            'Yes, it arrives whole and is carved tableside or in the kitchen per your preference. It\'s an impressive presentation.',
        },
        {
          question: 'Can it feed multiple people?',
          answer:
            'Yes, one Murg Mussallam comfortably serves 2-3 people. It\'s perfect for sharing and making a statement at the table.',
        },
      ]}
      relatedServices={[
        {
          title: 'Tandoori Chicken',
          slug: 'tandoori-chicken',
          price: '₹369',
        },
        {
          title: 'Chicken Tikka Masala',
          slug: 'chicken-tikka-masala',
          price: '₹449',
        },
        {
          title: 'Butter Chicken',
          slug: 'butter-chicken',
          price: '₹499',
        },
      ]}
    />
  );
}
