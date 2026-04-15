import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/products', label: t('nav.products') },
    { to: '/suppliers', label: t('nav.suppliers') },
    { to: '/contact', label: t('nav.contact') },
  ];

  // When not scrolled, navbar sits on top of hero images - use white text
  // When scrolled, glass bg kicks in - use foreground colors
  const textBase = scrolled ? 'text-foreground' : 'text-primary-foreground';
  const textMuted = scrolled ? 'text-foreground/70' : 'text-primary-foreground/70';
  const borderClass = scrolled ? 'border-border' : 'border-primary-foreground/20';

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className={`font-heading font-bold text-xl md:text-2xl ${textBase}`}>
          DALLA <span className="text-primary">TRADE</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === l.to ? 'text-primary' : textMuted}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className={`px-3 py-1.5 rounded-md text-xs font-bold border ${borderClass} hover:bg-primary/20 transition-colors ${textBase}`}
          >
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-md hover:bg-primary/20 transition-colors ${textBase}`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ${textBase}`}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-sm font-medium py-2 px-3 rounded-md transition-colors ${location.pathname === l.to ? 'text-primary bg-secondary' : 'text-foreground/70 hover:text-primary'}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
