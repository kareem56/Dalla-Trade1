import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import HeroBanner from '@/components/HeroBanner';
import heroImg from '@/assets/hero-products.jpg';
import productsImg from '@/assets/products-grid.jpg';
import { motion } from 'framer-motion';

type Category = 'all' | 'engine' | 'brake' | 'suspension' | 'electrical';

const products = [
  { id: 1, category: 'engine' as Category, name: 'Turbocharger Assembly', desc: 'High-performance turbocharger for heavy-duty diesel engines.', img: null },
  { id: 2, category: 'engine' as Category, name: 'Cylinder Head Gasket Set', desc: 'Complete gasket kit for engine overhaul and maintenance.', img: null },
  { id: 3, category: 'engine' as Category, name: 'Fuel Injection Pump', desc: 'Precision-engineered fuel pump for optimal engine performance.', img: null },
  { id: 4, category: 'brake' as Category, name: 'Air Brake Valve', desc: 'Heavy-duty air brake valve for commercial vehicles.', img: null },
  { id: 5, category: 'brake' as Category, name: 'Brake Disc Rotor', desc: 'Ventilated brake disc for maximum stopping power.', img: null },
  { id: 6, category: 'brake' as Category, name: 'Brake Pad Set', desc: 'Semi-metallic brake pads for extended service life.', img: null },
  { id: 7, category: 'suspension' as Category, name: 'Air Spring Bellows', desc: 'Heavy-duty air spring for suspension systems.', img: null },
  { id: 8, category: 'suspension' as Category, name: 'Shock Absorber', desc: 'Hydraulic shock absorber for smooth ride quality.', img: null },
  { id: 9, category: 'electrical' as Category, name: 'Alternator 28V', desc: 'High-output alternator for heavy-duty electrical systems.', img: null },
  { id: 10, category: 'electrical' as Category, name: 'Starter Motor', desc: 'Gear-reduction starter motor for reliable cold starts.', img: null },
  { id: 11, category: 'electrical' as Category, name: 'Wiring Harness', desc: 'OEM-spec wiring harness for complete electrical systems.', img: null },
  { id: 12, category: 'suspension' as Category, name: 'Leaf Spring Pack', desc: 'Multi-leaf spring for heavy load-bearing applications.', img: null },
];

const Products = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Category>('all');

  const filters: { key: Category; label: string }[] = [
    { key: 'all', label: t('products.filter.all') },
    { key: 'engine', label: t('products.filter.engine') },
    { key: 'brake', label: t('products.filter.brake') },
    { key: 'suspension', label: t('products.filter.suspension') },
    { key: 'electrical', label: t('products.filter.electrical') },
  ];

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <div>
      <HeroBanner image={heroImg} title={t('products.hero.title')} subtitle={t('products.hero.subtitle')} />

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {/* Filters */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  filter === f.key
                    ? 'gradient-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {f.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Products Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className="glass-card overflow-hidden group">
                  <div className="h-48 bg-secondary overflow-hidden">
                    <img
                      src={productsImg}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                      {filters.find(f => f.key === product.category)?.label}
                    </span>
                    <h3 className="font-heading font-semibold text-foreground mt-2 mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.desc}</p>
                    <button className="w-full gradient-primary text-primary-foreground py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                      {t('products.requestQuote')}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
