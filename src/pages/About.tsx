import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import HeroBanner from '@/components/HeroBanner';
import heroImg from '@/assets/hero-about.jpg';
import { motion } from 'framer-motion';

const timelineData = [
  { year: '2010', key: 'about.timeline.2010' },
  { year: '2014', key: 'about.timeline.2014' },
  { year: '2017', key: 'about.timeline.2017' },
  { year: '2020', key: 'about.timeline.2020' },
  { year: '2023', key: 'about.timeline.2023' },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <div>
      <HeroBanner image={heroImg} title={t('about.hero.title')} subtitle={t('about.hero.subtitle')} />

      {/* Description */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center">
              {t('about.description')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="glass-card p-8 h-full">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <span className="text-primary-foreground font-heading font-bold text-lg">M</span>
                </div>
                <h3 className="font-heading font-bold text-xl mb-4 text-foreground">{t('about.mission.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">{t('about.mission.desc')}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-8 h-full">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-6">
                  <span className="text-accent-foreground font-heading font-bold text-lg">V</span>
                </div>
                <h3 className="font-heading font-bold text-xl mb-4 text-foreground">{t('about.vision.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">{t('about.vision.desc')}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{t('about.timeline.title')}</h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute top-0 bottom-0 start-6 md:start-1/2 w-px bg-border" />
            {timelineData.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.1}>
                <div className={`relative flex items-start gap-6 mb-12 md:mb-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute start-6 md:start-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-primary border-4 border-background z-10 mt-1" />
                  <div className="ms-14 md:ms-0 md:w-1/2 glass-card p-6">
                    <span className="text-primary font-heading font-bold text-lg">{item.year}</span>
                    <p className="text-muted-foreground mt-2">{t(item.key)}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
