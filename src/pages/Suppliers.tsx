import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import HeroBanner from '@/components/HeroBanner';
import heroImg from '@/assets/hero-about.jpg';
import { motion } from 'framer-motion';

// Brand images (Dalla Trade's own brands)
import brand1 from '@/assets/brands/brand-1.webp';
import brand2 from '@/assets/brands/brand-2.webp';
import brand3 from '@/assets/brands/brand-3.webp';
import brand4 from '@/assets/brands/brand-4.webp';
import brand5 from '@/assets/brands/brand-5.webp';

// Partner images
import partner1 from '@/assets/partners/partner-1.webp';
import partner2 from '@/assets/partners/partner-2.webp';
import partner3 from '@/assets/partners/partner-3.webp';
import partner4 from '@/assets/partners/partner-4.webp';
import partner5 from '@/assets/partners/partner-5.webp';
import partner6 from '@/assets/partners/partner-6.webp';
import partner7 from '@/assets/partners/partner-7.webp';
import partner8 from '@/assets/partners/partner-8.jpeg';
import partner9 from '@/assets/partners/partner-9.png';

const brands = [
  { name: 'Prima Liners', img: brand1 },
  { name: 'Prima Filters', img: brand2 },
  { name: 'Prima Cylinder Heads', img: brand3 },
  { name: 'DT Steering Pumps', img: brand4 },
  { name: 'DT Water Pumps', img: brand5 },
];

const partners = [
  { name: 'Güneş Motor Supapları', img: partner1 },
  { name: 'Elring', img: partner2 },
  { name: 'Tesnila TMT', img: partner3 },
  { name: 'Grindtech', img: partner4 },
  { name: 'Goetze', img: partner5 },
  { name: 'Pojede-Lejan', img: partner6 },
  { name: 'Birlik Conta', img: partner7 },
  { name: 'Partner', img: partner8 },
  { name: 'Partner', img: partner9 },
];

const Suppliers = () => {
  const { t } = useLanguage();

  return (
    <div>
      <HeroBanner image={heroImg} title={t('suppliers.hero.title')} subtitle={t('suppliers.hero.subtitle')} />

      {/* Our Brands */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {t('suppliers.brands.title') || 'Our Brands'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('suppliers.brands.desc') || 'Dalla Trade\'s exclusive product lines delivering quality and performance.'}
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-8">
            {brands.map((brand, i) => (
              <AnimatedSection key={brand.name} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 flex items-center justify-center h-28 w-48"
                >
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="max-h-16 max-w-full object-contain"
                    loading="lazy"
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{t('suppliers.trusted.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('suppliers.trusted.desc')}</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {partners.map((partner, i) => (
              <AnimatedSection key={`${partner.name}-${i}`} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 flex items-center justify-center h-28"
                >
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className="max-h-16 max-w-full object-contain"
                    loading="lazy"
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Become Partner */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center max-w-2xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">{t('suppliers.become.title')}</h2>
            <p className="text-muted-foreground mb-8 text-lg">{t('suppliers.become.desc')}</p>
            <Link
              to="/contact"
              className="inline-block gradient-primary px-8 py-4 rounded-lg font-heading font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {t('suppliers.become.cta')}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Suppliers;
