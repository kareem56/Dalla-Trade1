import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/products', label: t('nav.products') },
    { to: '/suppliers', label: t('nav.suppliers') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4 text-foreground">
              DALLA <span className="text-primary">TRADE</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t('footer.desc')}</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">{t('footer.links')}</h4>
            <div className="flex flex-col gap-2">
              {links.map(l => (
                <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">{t('footer.contact')}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>{t('contact.info.address')}</span>
              <span>{t('contact.info.email')}</span>
              <span>{t('contact.info.phone')}</span>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
