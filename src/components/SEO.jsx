import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Dynamic SEO Title and Meta updater for routes
 */
export default function SEO({ title, description }) {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title 
      ? `${title} | THE SPICE COURT — Royal Indian Restaurant & Café`
      : 'THE SPICE COURT — A Royal Taste. A Modern Experience.';
    
    document.title = fullTitle;

    const defaultDesc = "Experience luxury Indian fine dining, royal heritage cuisine, and modern café culture at THE SPICE COURT. A Royal Taste. A Modern Experience.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || defaultDesc);
    }
  }, [title, description, location.pathname]);

  return null;
}
