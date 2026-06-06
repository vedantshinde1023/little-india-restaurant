import { useEffect } from 'react';

/**
 * SEO Component
 * 
 * Manages page-level metadata for search engines and social sharing
 * Updates document title and meta tags dynamically
 */

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function SEO({
  title,
  description,
  image = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/5omo3gGVAmXHsUcHNXncB3/hero-home-Qj84mvTWuQiPyNY8GxHcbZ.webp',
  url = 'https://littleindia.manus.space',
  type = 'website',
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Little India Restaurant`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update OG tags for social sharing
    updateMetaTag('og:title', `${title} | Little India Restaurant`);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:url', url);
    updateMetaTag('og:type', type);

    // Update Twitter tags
    updateMetaTag('twitter:title', `${title} | Little India Restaurant`);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:card', 'summary_large_image');

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, image, url, type]);

  return null;
}

function updateMetaTag(name: string, content: string) {
  let tag = document.querySelector(`meta[property="${name}"]`);
  if (!tag) {
    tag = document.querySelector(`meta[name="${name}"]`);
  }

  if (tag) {
    tag.setAttribute('content', content);
  } else {
    const meta = document.createElement('meta');
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      meta.setAttribute('property', name);
    } else {
      meta.name = name;
    }
    meta.content = content;
    document.head.appendChild(meta);
  }
}
