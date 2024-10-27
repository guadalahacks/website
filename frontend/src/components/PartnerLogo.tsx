import { getLocalizedString } from "@/app/locale";

interface PartnerLogoProps {
    src: string;
    alt: string;
    link?: string;
    wording?: string;
  }
  
export const PartnerLogo: React.FC<PartnerLogoProps> = ({ src, alt, link, wording }) => {
    return (
      <div className="partner-logo-container">
        <img src={src} alt={alt} className="partner-logo" />
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="partner-link">
            {wording || getLocalizedString("partnerLogo_defaultWording")}
          </a>
        )}
      </div>
    );
  };