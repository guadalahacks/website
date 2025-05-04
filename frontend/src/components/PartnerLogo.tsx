import { getLocalizedString, languageState } from "@/app/locale";
import Image, { StaticImageData } from 'next/image';

interface PartnerLogoProps {
    src: StaticImageData;
    alt: string;
    link?: string;
    wording?: string;
    highlight?: boolean;
  }
  
export const PartnerLogo: React.FC<PartnerLogoProps> = ({ src, alt, link, wording, highlight }) => {
  const [language, _] = languageState.useState();
    return (
      <div className={highlight ? "partner-logo-container-highlight" : "partner-logo-container"}>
        <Image src={src} alt={alt} className={highlight ? "partner-logo-highlight" : "partner-logo"} />
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="partner-link">
            {wording || getLocalizedString("partnerLogo_defaultWording", language)}
          </a>
        )}
      </div>
    );
  };