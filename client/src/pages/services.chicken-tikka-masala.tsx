import { ServicePageTemplate } from '@/components/site/ServicePageTemplate';

export default function ChickenTikkaMasalaPage() {
  return (
    <ServicePageTemplate
      title="Chicken Tikka Masala"
      slug="chicken-tikka-masala"
      tagline="Tandoori chicken pieces in a creamy, tomato-based sauce"
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/chicken-tikka-masala-hero-mLhrMaX7SnZCYsdc64VXqq.webp"
      overview={[
        "Chicken Tikka Masala is the perfect fusion of tandoori and curry—tandoori chicken pieces combined with a creamy, tomato-based masala sauce. It's the best of both worlds: smoky tandoori flavor with creamy comfort.",
        "Our version features chicken marinated and grilled in the tandoor, then finished in a rich masala sauce made with tomatoes, cream, and aromatic spices. The result is complex, satisfying, and utterly delicious.",
        "This dish bridges the gap between tandoori and curry lovers. It's sophisticated enough for special occasions yet comforting enough for everyday indulgence.",
      ]}
      included={[
        'Tandoori chicken pieces grilled to perfection',
        'Rich, creamy tomato-based masala sauce',
        'Aromatic spices including fenugreek and garam masala',
        'Served with basmati rice or bread',
        'Smoky tandoori flavor with creamy comfort',
        'Perfectly balanced spices and creaminess',
      ]}
      pricing={[{ duration: 'Full Portion', price: '₹449' }]}
      experience={[
        {
          step: 1,
          title: 'Tandoor Grilling',
          description:
            'Your chicken is marinated and grilled in our traditional clay tandoor until charred and smoky.',
        },
        {
          step: 2,
          title: 'Masala Preparation',
          description:
            'The tandoori chicken is finished in our signature masala sauce made with tomatoes, cream, and spices.',
        },
        {
          step: 3,
          title: 'Plating',
          description:
            'Your Chicken Tikka Masala arrives beautifully plated with fresh cilantro and a perfect balance of sauce.',
        },
        {
          step: 4,
          title: 'Enjoyment',
          description:
            'Savor the smoky tandoori flavor combined with creamy comfort. Pair with rice or bread.',
        },
      ]}
      benefits={[
        'Smoky tandoori flavor',
        'Creamy, comforting sauce',
        'Complex, sophisticated taste',
        'Perfect for special occasions',
        'Satisfying and indulgent',
        'Pairs beautifully with rice or bread',
      ]}
      forWho="Perfect for those seeking the best of both tandoori and curry worlds. Ideal for special occasions, celebrations, and anyone who appreciates sophisticated, creamy dishes."
      notForWho="Not ideal for those with dairy allergies, as the dish contains cream. Also not recommended for strict vegan diets."
      faqs={[
        {
          question: 'How is it different from Butter Chicken?',
          answer:
            'Chicken Tikka Masala features tandoori chicken (charred and smoky) in a masala sauce, while Butter Chicken uses non-tandoori chicken in a butter-based sauce. Tikka Masala is smokier, Butter Chicken is creamier.',
        },
        {
          question: 'Is it spicy?',
          answer:
            'Chicken Tikka Masala is mild to medium with a creamy profile. The cream balances the spices beautifully. We can adjust the spice level upon request.',
        },
        {
          question: 'Can I customize the spice level?',
          answer:
            'Absolutely! Tell our team your preference, and we\'ll adjust the spice level while maintaining the authentic flavors.',
        },
      ]}
      relatedServices={[
        {
          title: 'Butter Chicken',
          slug: 'butter-chicken',
          price: '₹499',
        },
        {
          title: 'Tandoori Chicken',
          slug: 'tandoori-chicken',
          price: '₹369',
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
