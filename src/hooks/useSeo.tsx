// src/hooks/useSeo.tsx
import { useEffect } from 'react';
import type { Workshop } from '@/types/sanity';
import { urlFor } from '@/lib/sanity';

interface SeoProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  workshops?: Workshop[];
  publishedTime?: string;
  author?: string;
}

export const useSeo = ({
  title,
  description,
  url = 'https://createherfest-website-staging.web.app',
  image = 'https://cdn.prod.website-files.com/61feaeaa52128ab2ccab4143/65d215122fb696a06ed21612_baddiecommunity-p-1600.jpg',
  type = 'website',
  workshops,
  publishedTime = new Date().toISOString(),
  author = 'CreateHER Fest'
}: SeoProps) => {
  useEffect(() => {
    const fullTitle = `${title} | CreateHER Fest`;

    // Define all meta tags
    const metaTags = [
      // Standard tags
      { name: 'title', content: fullTitle },
      { name: 'description', content: description },
      
      // OpenGraph tags
      { property: 'og:type', content: type },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: 'CreateHER Fest' },
      { property: 'og:locale', content: 'en_US' },
      
      // Article specific tags
      { property: 'article:published_time', content: publishedTime },
      { property: 'article:author', content: author },
      
      // Twitter tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      
      // Additional tags
      { name: 'robots', content: 'index, follow' },
      { property: 'og:image:width', content: '1600' },
      { property: 'og:image:height', content: '900' },
      { property: 'og:image:type', content: 'image/jpeg' }
    ];

    // Update document title
    document.title = fullTitle;

    // Update meta tags
    metaTags.forEach(({ name, property, content }) => {
      let meta = document.querySelector(
        property ? `meta[property="${property}"]` : `meta[name="${name}"]`
      );

      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', name!);
        }
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    });

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Add structured data for events if workshops exist
    if (workshops?.length) {
      const eventSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": workshops.map((workshop, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Event",
            "name": workshop.title,
            "description": workshop.description,
            "startDate": workshop.date,
            "endDate": new Date(new Date(workshop.date).getTime() + workshop.duration * 60000).toISOString(),
            "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
              "@type": "VirtualLocation",
              "url": workshop.workshopUrl
            },
            "organizer": {
              "@type": "Organization",
              "name": "CreateHER Fest",
              "url": "https://createherfest-website-staging.web.app"
            },
            "performer": workshop.speaker ? {
              "@type": "Person",
              "name": workshop.speaker.name,
              "jobTitle": workshop.speaker.title,
              "affiliation": workshop.speaker.company
            } : undefined,
            "image": workshop.speaker?.image ? urlFor(workshop.speaker.image).url() : image,
            "offers": {
              "@type": "Offer",
              "url": workshop.workshopUrl,
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "validFrom": new Date(workshop.date).toISOString()
            }
          }
        }))
      };

      // Add or update the JSON-LD script
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(eventSchema);
    }

    // Cleanup function
    return () => {
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (scriptTag) {
        scriptTag.remove();
      }
    };
  }, [title, description, url, image, type, workshops, publishedTime, author]);
};