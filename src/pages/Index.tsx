import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import heroImg from '@/assets/hero-home.jpg';
import { Truck, Tractor, Globe, Shield, Zap, Users, Network, TrendingUp, Package, BarChart3, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const StatCounter = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl md:text-5xl font-heading font-bold text-primary mb-2">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="glass-card p-8 group cursor-default"
  >
    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
      <Icon className="text-primary-foreground" size={24} />
    </div>
    <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </motion.div>
);

const WhyCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <motion.div whileHover={{ scale: 1.03 }} className="glass-card p-6 flex gap-4">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
      <Icon className="text-primary" size={20} />
    </div>
    <div>
      <h4 className="font-heading font-semibold mb-1 text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  </motion.div>
);

const Home = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Heavy industry logistics" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight"
          >
            {t('home.hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-10"
          >
            {t('home.hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/products" className="gradient-primary px-8 py-4 rounded-lg font-heading font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
              {t('home.hero.cta1')}
            </Link>
            <Link to="/contact" className="glass px-8 py-4 rounded-lg font-heading font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
              {t('home.hero.cta2')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{t('home.services.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('home.services.subtitle')}</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}><ServiceCard icon={Truck} title={t('home.services.trucks.title')} desc={t('home.services.trucks.desc')} /></AnimatedSection>
            <AnimatedSection delay={0.2}><ServiceCard icon={Tractor} title={t('home.services.tractors.title')} desc={t('home.services.tractors.desc')} /></AnimatedSection>
            <AnimatedSection delay={0.3}><ServiceCard icon={Globe} title={t('home.services.supply.title')} desc={t('home.services.supply.desc')} /></AnimatedSection>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{t('home.reach.title')}</h2>
            <p className="text-muted-foreground">{t('home.reach.subtitle')}</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter value="40+" label={t('home.reach.countries')} />
              <StatCounter value="500K+" label={t('home.reach.parts')} />
              <StatCounter value="120+" label={t('home.reach.partners')} />
              <StatCounter value="14+" label={t('home.reach.years')} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{t('home.why.title')}</h2>
            <p className="text-muted-foreground">{t('home.why.subtitle')}</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}><WhyCard icon={Shield} title={t('home.why.quality')} desc={t('home.why.quality.desc')} /></AnimatedSection>
            <AnimatedSection delay={0.2}><WhyCard icon={Zap} title={t('home.why.speed')} desc={t('home.why.speed.desc')} /></AnimatedSection>
            <AnimatedSection delay={0.3}><WhyCard icon={Users} title={t('home.why.trust')} desc={t('home.why.trust.desc')} /></AnimatedSection>
            <AnimatedSection delay={0.4}><WhyCard icon={Network} title={t('home.why.network')} desc={t('home.why.network.desc')} /></AnimatedSection>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{t('home.dashboard.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('home.dashboard.subtitle')}</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="glass-card p-6 md:p-8 max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Package, label: 'Active Orders', value: '1,247' },
                  { icon: TrendingUp, label: 'Revenue', value: '$2.4M' },
                  { icon: Clock, label: 'Avg Delivery', value: '4.2 days' },
                  { icon: BarChart3, label: 'Fill Rate', value: '98.7%' },
                ].map((item, i) => (
                  <div key={i} className="bg-secondary/50 rounded-xl p-4">
                    <item.icon size={18} className="text-primary mb-2" />
                    <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                    <div className="font-heading font-bold text-lg text-foreground">{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-secondary/30 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-xs text-muted-foreground">{['Recent Orders', 'Shipment Status', 'Inventory'][i]}</div>
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div className="space-y-2">
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className="h-3 bg-muted rounded-full" style={{ width: `${70 + Math.random() * 30}%` }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
