import { ServicePageTemplate } from '@/components/site/ServicePageTemplate';

export default function ButterChickenPage() {
  return (
    <ServicePageTemplate
      title="Butter Chicken"
      slug="butter-chicken"
      tagline="Creamy tomato-based curry with tender chicken pieces—a timeless favorite"
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/butter-chicken-hero-iLUgTzUeAemnhcSMUZoupx.webp"
      overview={[
        "Butter Chicken is the quintessential Indian curry—a masterpiece of balance between creamy richness and aromatic spices. Our version features tender chicken pieces slow-cooked in a luxurious tomato-based sauce infused with fenugreek, cream, and butter.",
        "This beloved dish is perfect for those seeking comfort in a bowl. The sauce is neither too spicy nor too mild, making it accessible to first-timers while satisfying seasoned curry enthusiasts.",
        "Every bite delivers a harmonious blend of flavors: the sweetness of tomatoes, the warmth of spices, and the silky texture of cream. It's a gateway to Indian cuisine that has captivated palates worldwide.",
      ]}
      included={[
        'Tender chicken pieces marinated and cooked to perfection',
        'Rich, creamy tomato-based gravy with fenugreek leaves',
        'Aromatic spices including cumin, coriander, and garam masala',
        'Served with basmati rice or bread of your choice',
        'Perfectly balanced sweetness and tanginess',
        'Slow-cooked for depth of flavor',
      ]}
      pricing={[{ duration: 'Full Portion', price: '₹499' }]}
      experience={[
        {
          step: 1,
          title: 'Arrival & Welcome',
          description:
            'Our team greets you warmly and seats you comfortably. We offer water and take your order.',
        },
        {
          step: 2,
          title: 'Preparation',
          description:
            'Your Butter Chicken is prepared fresh to order, with chicken marinated and cooked in our tandoor.',
        },
        {
          step: 3,
          title: 'Plating',
          description:
            'The dish arrives beautifully plated with fresh cilantro garnish and a perfect balance of sauce and chicken.',
        },
        {
          step: 4,
          title: 'Enjoyment',
          description:
            'Savor every bite, pairing it with rice or bread. Our team ensures your glass is always full.',
        },
      ]}
      benefits={[
        'Comfort in every bite',
        'Accessible to all spice levels',
        'Rich, satisfying flavor',
        'Perfect for sharing',
        'Pairs well with rice or bread',
        'A timeless classic',
      ]}
      forWho="Perfect for those seeking comfort in a bowl. Ideal for first-timers exploring Indian cuisine, families, and anyone who appreciates a creamy, flavorful curry."
      notForWho="Not recommended for those with dairy allergies or strict vegan diets, as the dish contains cream and butter."
      faqs={[
        {
          question: 'Is Butter Chicken spicy?',
          answer:
            'No, Butter Chicken is mild to medium with a creamy, slightly sweet profile. The richness of the sauce balances the spices beautifully. We can adjust the heat level upon request.',
        },
        {
          question: 'Can I get it vegetarian?',
          answer:
            'Yes! We offer Paneer Butter Masala with the same rich sauce and authentic preparation. It\'s equally delicious and beloved by our vegetarian guests.',
        },
        {
          question: 'What bread pairs best with Butter Chicken?',
          answer:
            'Butter Naan or Basmati Rice complement the gravy beautifully. Butter Naan adds richness, while rice provides a neutral base to soak up the sauce.',
        },
      ]}
      relatedServices={[
        {
          title: 'Paneer Butter Masala',
          slug: 'paneer-butter-masala',
          price: '₹389',
        },
        {
          title: 'Chicken Tikka Masala',
          slug: 'chicken-tikka-masala',
          price: '₹449',
        },
        {
          title: 'Chicken Maratha',
          slug: 'chicken-maratha',
          price: '₹489',
        },
      ]}
    />
  );
}
