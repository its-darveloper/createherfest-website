// src/components/Seo.tsx
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export const Seo = ({ 
  title,
  description,
  url = 'https://createherfest-website-staging.web.app',
  image = 'https://createherfest-website-staging.web.app/social-card.png' // Make sure this exists
}: SeoProps) => {
  const fullTitle = `${title} | CreateHER Fest`;
  
  return (
    <Helmet>
      {/* Standard Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Essential OpenGraph Tags for LinkedIn */}
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />

      {/* Additional OpenGraph Tags */}
      <meta property="og:site_name" content="CreateHER Fest" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@createherfest" />
      <meta name="twitter:creator" content="@createherfest" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};