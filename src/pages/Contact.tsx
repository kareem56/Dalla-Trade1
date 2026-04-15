import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import HeroBanner from '@/components/HeroBanner';
import heroImg from '@/assets/hero-home.jpg';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Message Sent', description: 'We will get back to you shortly.' });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <HeroBanner image={heroImg} title={t('contact.hero.title')} subtitle={t('contact.hero.subtitle')} />

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t('contact.form.message')}</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>
                <button type="submit" className="w-full gradient-primary text-primary-foreground py-3 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity">
                  {t('contact.form.send')}
                </button>
              </form>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <h3 className="font-heading font-bold text-2xl text-foreground">{t('contact.info.title')}</h3>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, text: t('contact.info.address') },
                    { icon: Mail, text: t('contact.info.email') },
                    { icon: Phone, text: t('contact.info.phone') },
                    { icon: MessageCircle, label: 'WhatsApp', text: t('contact.info.whatsapp') },
                    { icon: MessageCircle, label: 'WeChat', text: t('contact.info.wechat') },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon size={18} className="text-primary" />
                      </div>
                      <div className="mt-2">
                        {'label' in item && item.label && (
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">{item.label}</span>
                        )}
                        <span className="block text-muted-foreground">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Map */}
                <div className="glass-card overflow-hidden h-64">
                  <iframe
                    title="Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.7!2d31.2!3d30.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAzJzAwLjAiTiAzMcKwMTInMDAuMCJF!5e0!3m2!1sen!2seg!4v1690000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
