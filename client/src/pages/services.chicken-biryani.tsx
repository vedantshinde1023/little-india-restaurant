import { ServicePageTemplate } from '@/components/site/ServicePageTemplate';

export default function ChickenBiryaniPage() {
  return (
    <ServicePageTemplate
      title="Chicken Biryani"
      slug="chicken-biryani"
      tagline="Fragrant basmati rice layered with marinated chicken and aromatic spices"
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/biryani-hero-Pw5pSFaamTg3m6mmTkuBCB.webp"
      overview={[
        "Chicken Biryani is a complete meal in one bowl—fragrant basmati rice layered with marinated chicken, aromatic spices, and slow-cooked to perfection. It's a celebration of Indian culinary tradition.",
        "Our biryani is prepared using the dum pukht (slow-cooking) method, where layers of rice and chicken are sealed and cooked together. This allows flavors to meld beautifully while keeping the rice fluffy and the chicken tender.",
        "Biryani is more than just rice and chicken—it's an experience. Each grain of rice is infused with spices, and every bite delivers layers of flavor. It's a complete meal that requires no sides.",
      ]}
      included={[
        'Premium basmati rice aged and fragrant',
        'Marinated chicken cooked to perfection',
        'Aromatic spices: saffron, cardamom, cinnamon, bay leaves',
        'Layered and slow-cooked using dum pukht method',
        'Served with raita and pickle',
        'Complete meal requiring no sides',
      ]}
      pricing={[{ duration: 'Full Portion (Serves 1-2)', price: '₹449' }]}
      experience={[
        {
          step: 1,
          title: 'Marination',
          description:
            'Chicken is marinated in yogurt and spices for optimal flavor and tenderness.',
        },
        {
          step: 2,
          title: 'Layering',
          description:
            'Basmati rice and marinated chicken are layered with aromatic spices and herbs.',
        },
        {
          step: 3,
          title: 'Dum Pukht (Slow-Cooking)',
          description:
            'The sealed pot is slow-cooked, allowing flavors to meld and rice to absorb chicken essence.',
        },
        {
          step: 4,
          title: 'Plating & Enjoyment',
          description:
            'Your biryani arrives fragrant and steaming, served with raita and pickle. Enjoy the layers of flavor.',
        },
      ]}
      benefits={[
        'Complete meal in one bowl',
        'Fragrant, aromatic rice',
        'Tender, flavorful chicken',
        'Traditional dum pukht preparation',
        'Perfect for lunch or dinner',
        'No sides needed',
      ]}
      forWho="Perfect for those seeking a complete meal and biryani enthusiasts. Ideal for lunch, dinner, and anyone who appreciates the complexity of traditional Indian rice preparations."
      notForWho="Not ideal for those seeking a light meal, as biryani is substantial. Also not recommended for those with dairy allergies, as it's often served with raita (yogurt-based)."
      faqs={[
        {
          question: 'What is dum pukht cooking?',
          answer:
            'Dum pukht is a traditional slow-cooking method where a sealed pot is cooked on low heat. This allows flavors to concentrate and rice to absorb the essence of chicken and spices.',
        },
        {
          question: 'Can I get vegetarian biryani?',
          answer:
            'Yes! We offer Vegetable Biryani and Paneer Biryani with the same traditional preparation and aromatic spices.',
        },
        {
          question: 'Is it a complete meal?',
          answer:
            'Yes, biryani is a complete meal. It comes with raita (yogurt) and pickle. No additional sides are needed, though you can order extras if desired.',
        },
      ]}
      relatedServices={[
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
        {
          title: 'Tandoori Chicken',
          slug: 'tandoori-chicken',
          price: '₹369',
        },
      ]}
    />
  );
}
