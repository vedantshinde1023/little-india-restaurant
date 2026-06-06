import { ServicePageTemplate } from '@/components/site/ServicePageTemplate';

export default function PaneerTikkaPage() {
  return (
    <ServicePageTemplate
      title="Paneer Tikka"
      slug="paneer-tikka"
      tagline="Soft paneer cubes marinated in spices and grilled to perfection"
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/paneer-tikka-hero-2UzHDZJEx682i2t8NkXvBF.webp"
      overview={[
        "Paneer Tikka is the vegetarian answer to tandoori excellence—soft paneer cubes marinated in yogurt and spices, then grilled in the tandoor until charred and smoky.",
        "The beauty of Paneer Tikka lies in its simplicity and texture contrast: creamy paneer interior with a charred, smoky exterior. It's a celebration of vegetarian protein done right.",
        "This dish is perfect for vegetarians and those seeking a lighter, protein-rich option. It's often served as a starter but makes an excellent main course as well.",
      ]}
      included={[
        'Fresh paneer cubes marinated in yogurt and spices',
        'Grilled in traditional clay tandoor',
        'Charred exterior with soft interior',
        'Served with mint chutney, onions, and lemon',
        'Smoky, authentic flavor',
        'Vegetarian and protein-rich',
      ]}
      pricing={[{ duration: 'Full Portion (6-8 pieces)', price: '₹429' }]}
      experience={[
        {
          step: 1,
          title: 'Marination',
          description:
            'Fresh paneer is marinated in yogurt and our signature spice blend for optimal flavor.',
        },
        {
          step: 2,
          title: 'Tandoor Grilling',
          description:
            'The marinated paneer is grilled in our traditional clay tandoor until charred and smoky.',
        },
        {
          step: 3,
          title: 'Plating',
          description:
            'Your Paneer Tikka arrives with fresh mint chutney, onions, and lemon wedges.',
        },
        {
          step: 4,
          title: 'Enjoyment',
          description:
            'Squeeze fresh lemon, add mint chutney, and savor the smoky, creamy flavors.',
        },
      ]}
      benefits={[
        'Vegetarian protein powerhouse',
        'Smoky, charred flavor',
        'Soft, creamy texture',
        'Light and healthy',
        'Perfect as starter or main',
        'Pairs with any side dish',
      ]}
      forWho="Perfect for vegetarians seeking protein-rich options and tandoori enthusiasts. Ideal for health-conscious diners and anyone who appreciates the versatility of paneer."
      notForWho="Not ideal for those with dairy allergies or strict vegan diets, as paneer is a dairy product. Also not suitable for those who dislike smoky flavors."
      faqs={[
        {
          question: 'Is Paneer Tikka spicy?',
          answer:
            'Paneer Tikka is mild to medium spice. The yogurt marinade balances the spices beautifully. We can adjust the spice level upon request.',
        },
        {
          question: 'Can I get more pieces?',
          answer:
            'Yes, we offer larger portions. Please ask our team for pricing and availability.',
        },
        {
          question: 'What\'s the difference between Paneer Tikka and Paneer Butter Masala?',
          answer:
            'Paneer Tikka is grilled tandoori preparation served with chutney. Paneer Butter Masala is paneer in a creamy tomato-based gravy. Both are delicious but offer different experiences.',
        },
      ]}
      relatedServices={[
        {
          title: 'Tandoori Chicken',
          slug: 'tandoori-chicken',
          price: '₹369',
        },
        {
          title: 'Butter Chicken',
          slug: 'butter-chicken',
          price: '₹499',
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
