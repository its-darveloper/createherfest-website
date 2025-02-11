// src/components/Seo.tsx
import { HelmetProvider } from "react-helmet-async";

interface SeoProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  image?: string;
}

export const Seo = ({ 
  title, 
  description = "CreateHER Fest bridges the gender gap in emerging tech through hands-on training in AI, Blockchain, and AR/VR.",
  canonicalUrl = "https://createherfest.com",
  image = "/chf.svg"  // ensure this image exists in your public folder
}: SeoProps) => {
  const finalTitle = title ? `${title} | CreateHER Fest` : 'CreateHER Fest';
  
  return (
    <HelmetProvider>
      {/* Basic meta tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content="CreateHER Fest" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#150e60" />
    </HelmetProvider>
  );
};