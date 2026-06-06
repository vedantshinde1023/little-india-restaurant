import { ServicePageTemplate } from '@/components/site/ServicePageTemplate';

export default function ChickenMarathaPage() {
  return (
    <ServicePageTemplate
      title="Chicken Maratha"
      slug="chicken-maratha"
      tagline="Bold, rustic flavors with tender chicken in a spiced onion-based gravy"
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/chicken-maratha-hero-496AWXS8LLXXPkWv3H5Yej.webp"
      overview={[
        "Chicken Maratha is a bold, rustic preparation that celebrates the culinary heritage of Maharashtra. This dish features succulent chicken pieces cooked in a Marathi-style gravy with layered spices and caramelized onions.",
        "The magic of Chicken Maratha lies in its complexity—each spice plays a role, creating a medium-spiced dish that's far more than just heat. The caramelized onions add depth and sweetness, while regional herbs bring authenticity.",
        "This is a dish for those who appreciate bold, earthy flavors and want to explore regional Indian cuisine. It's a favorite among locals and a testament to Little India's commitment to authentic preparation.",
      ]}
      included={[
        'Succulent chicken pieces cooked Marathi-style',
        'Layered spices with regional herbs',
        'Rich, medium-spiced gravy with caramelized onions',
        'Served with rice or bread',
        'Authentic Maharashtrian preparation',
        'Slow-cooked for complex flavors',
      ]}
      pricing={[{ duration: 'Full Portion', price: '₹489' }]}
      experience={[
        {
          step: 1,
          title: 'Arrival & Welcome',
          description:
            'Our team greets you and seats you comfortably. We explain the dish\'s regional significance.',
        },
        {
          step: 2,
          title: 'Preparation',
          description:
            'Your Chicken Maratha is prepared fresh, with chicken marinated in yogurt and spices, then cooked with caramelized onions.',
        },
        {
          step: 3,
          title: 'Plating',
          description:
            'The dish arrives with a beautiful presentation, garnished with fresh ginger and cilantro.',
        },
        {
          step: 4,
          title: 'Enjoyment',
          description:
            'Savor the complex flavors and rustic charm. Our team is available for any questions about the preparation.',
        },
      ]}
      benefits={[
        'Bold, complex flavors',
        'Authentic regional cuisine',
        'Perfect for adventurous palates',
        'Rich and satisfying',
        'Tells a story of Marathi heritage',
        'Pairs beautifully with rice',
      ]}
      forWho="Perfect for those seeking authentic regional Indian cuisine and bold, earthy flavors. Ideal for adventurous eaters and those who appreciate the culinary heritage of Maharashtra."
      notForWho="Not ideal for those who prefer mild curries or are new to Indian cuisine. The spice level is medium with complex flavors that may be overwhelming for beginners."
      faqs={[
        {
          question: 'How spicy is Chicken Maratha?',
          answer:
            'Chicken Maratha is medium spice level with complex flavors—not just heat. The richness of the gravy and caramelized onions balance the spices beautifully. We can adjust the spice level upon request.',
        },
        {
          question: 'What makes it different from other curries?',
          answer:
            'Chicken Maratha is a Maharashtrian specialty with a unique blend of spices and cooking technique. The use of caramelized onions and regional herbs distinguishes it from other Indian curries.',
        },
        {
          question: 'Can I customize the spice level?',
          answer:
            'Absolutely! Tell our team your preference, and we\'ll adjust the spice level while maintaining the authentic flavors of the dish.',
        },
      ]}
      relatedServices={[
        {
          title: 'Chicken Curry',
          slug: 'chicken-maratha',
          price: '₹399',
        },
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
      ]}
    />
  );
}
