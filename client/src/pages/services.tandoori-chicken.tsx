import { ServicePageTemplate } from '@/components/site/ServicePageTemplate';

export default function TandooriChickenPage() {
  return (
    <ServicePageTemplate
      title="Tandoori Chicken"
      slug="tandoori-chicken"
      tagline="Marinated in yogurt and spices, charred to perfection in the tandoor"
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/tandoori-chicken-hero-WjmcQeFP4pseArZw4vLkpo.webp"
      overview={[
        "Tandoori Chicken is the quintessential tandoor preparation—chicken marinated in yogurt and spices, then roasted in our traditional clay tandoor. The result is smoky, charred, and impossibly juicy.",
        "The tandoor's intense heat seals in moisture while creating a beautiful, charred exterior. The yogurt marinade tenderizes the meat and infuses it with aromatic spices.",
        "This is a classic dish that showcases the power of traditional cooking methods. It's healthy, flavorful, and perfect for those seeking authentic tandoori preparation.",
      ]}
      included={[
        'Chicken marinated in yogurt and spices',
        'Roasted in traditional clay tandoor',
        'Charred exterior with juicy interior',
        'Served with mint chutney, onions, and lemon',
        'Smoky, authentic flavor',
        'Perfectly balanced spices',
      ]}
      pricing={[{ duration: 'Full Portion (Half Chicken)', price: '₹369' }]}
      experience={[
        {
          step: 1,
          title: 'Marination',
          description:
            'Your chicken is marinated in yogurt and our signature spice blend for optimal flavor.',
        },
        {
          step: 2,
          title: 'Tandoor Roasting',
          description:
            'The marinated chicken is roasted in our traditional clay tandoor until charred and cooked through.',
        },
        {
          step: 3,
          title: 'Plating',
          description:
            'Your Tandoori Chicken arrives with fresh mint chutney, onions, and lemon wedges.',
        },
        {
          step: 4,
          title: 'Enjoyment',
          description:
            'Squeeze fresh lemon, add mint chutney, and savor the smoky, authentic flavors.',
        },
      ]}
      benefits={[
        'Authentic tandoor preparation',
        'Smoky, charred flavor',
        'Juicy, tender meat',
        'Healthy and protein-rich',
        'Perfect as a starter or main',
        'Pairs with any side dish',
      ]}
      forWho="Perfect for those seeking authentic tandoori preparation and smoky flavors. Ideal for health-conscious diners, tandoori enthusiasts, and anyone who appreciates traditional cooking methods."
      notForWho="Not ideal for those who dislike smoky flavors or prefer creamy curries. The tandoor char is a defining characteristic."
      faqs={[
        {
          question: 'Is Tandoori Chicken spicy?',
          answer:
            'Tandoori Chicken is mild to medium spice. The yogurt marinade balances the spices beautifully. We can adjust the spice level upon request.',
        },
        {
          question: 'What makes tandoor cooking special?',
          answer:
            'The tandoor\'s intense heat (700°F+) seals in moisture while creating a charred exterior. This traditional method has been used for centuries and creates unmatched flavor.',
        },
        {
          question: 'Can I get a full chicken?',
          answer:
            'Yes, we offer full chicken portions. Please ask our team for pricing and availability. We recommend ordering ahead for larger portions.',
        },
      ]}
      relatedServices={[
        {
          title: 'Paneer Tikka',
          slug: 'paneer-tikka',
          price: '₹429',
        },
        {
          title: 'Murg Mussallam',
          slug: 'murg-mussallam',
          price: '₹599',
        },
        {
          title: 'Chicken Tikka Masala',
          slug: 'chicken-tikka-masala',
          price: '₹449',
        },
      ]}
    />
  );
}
