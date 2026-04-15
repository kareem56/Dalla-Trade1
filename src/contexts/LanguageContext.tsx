import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Lang = 'en' | 'ar';

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.suppliers': 'Suppliers',
    'nav.contact': 'Contact',
    // Home
    'home.hero.title': 'Powering Heavy Industries Worldwide',
    'home.hero.subtitle': 'Premium spare parts supplier for heavy-duty trucks, tractors, and industrial machinery — delivering reliability across continents.',
    'home.hero.cta1': 'Explore Products',
    'home.hero.cta2': 'Contact Us',
    'home.services.title': 'What We Supply',
    'home.services.subtitle': 'Comprehensive parts catalog for the world\'s most demanding industries',
    'home.services.trucks.title': 'Truck Parts',
    'home.services.trucks.desc': 'Engine components, transmission systems, and chassis parts for all major heavy-duty truck brands.',
    'home.services.tractors.title': 'Tractor Components',
    'home.services.tractors.desc': 'Hydraulic systems, PTO parts, and drivetrain components for agricultural and industrial tractors.',
    'home.services.supply.title': 'Global Supply Chain',
    'home.services.supply.desc': 'Worldwide sourcing and logistics network ensuring parts reach you on time, every time.',
    'home.reach.title': 'Global Reach',
    'home.reach.subtitle': 'Delivering to industries across 40+ countries',
    'home.reach.countries': 'Countries Served',
    'home.reach.parts': 'Parts Delivered',
    'home.reach.partners': 'Global Partners',
    'home.reach.years': 'Years Experience',
    'home.why.title': 'Why Choose Dalla Trade',
    'home.why.subtitle': 'Industry-leading standards that set us apart',
    'home.why.quality': 'Premium Quality',
    'home.why.quality.desc': 'Every part undergoes rigorous quality control to meet OEM specifications.',
    'home.why.speed': 'Fast Delivery',
    'home.why.speed.desc': 'Optimized logistics network ensures rapid delivery to any destination worldwide.',
    'home.why.trust': 'Trusted Partner',
    'home.why.trust.desc': 'Decades of B2B relationships built on reliability and transparent communication.',
    'home.why.network': 'Global Network',
    'home.why.network.desc': 'Strategic partnerships with manufacturers across Europe, Asia, and the Americas.',
    'home.dashboard.title': 'Smart Supply Chain Management',
    'home.dashboard.subtitle': 'Real-time visibility into orders, inventory, and shipments through our tech-enabled platform',
    // About
    'about.hero.title': 'About Dalla Trade',
    'about.hero.subtitle': 'Building the backbone of global heavy industries since day one',
    'about.description': 'Dalla Trade is a leading B2B supplier specializing in high-quality spare parts for heavy-duty trucks and tractors. With a global network of manufacturers and distributors, we ensure that businesses worldwide have access to the components they need to keep their fleets running at peak performance.',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'To be the most reliable and efficient spare parts supplier in the global heavy-duty vehicle industry, connecting manufacturers with businesses through innovative supply chain solutions.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'A world where every heavy-duty vehicle operates at its full potential, powered by readily available, high-quality spare parts delivered through a seamless global network.',
    'about.timeline.title': 'Our Journey',
    'about.timeline.2010': 'Founded as a regional truck parts distributor',
    'about.timeline.2014': 'Expanded into tractor and agricultural machinery parts',
    'about.timeline.2017': 'Established partnerships with European OEM manufacturers',
    'about.timeline.2020': 'Launched digital ordering platform for B2B clients',
    'about.timeline.2023': 'Reached 40+ countries with a network of 120+ partners',
    // Products
    'products.hero.title': 'Our Products',
    'products.hero.subtitle': 'Premium spare parts engineered for performance',
    'products.filter.all': 'All',
    'products.filter.engine': 'Engine Parts',
    'products.filter.brake': 'Brake Systems',
    'products.filter.suspension': 'Suspension Parts',
    'products.filter.electrical': 'Electrical Systems',
    'products.requestQuote': 'Request Quote',
    // Suppliers
    'suppliers.hero.title': 'Our Partners & Suppliers',
    'suppliers.hero.subtitle': 'Trusted partnerships powering our global supply chain',
    'suppliers.trusted.title': 'Trusted by Industry Leaders',
    'suppliers.trusted.desc': 'We partner with the world\'s most reputable manufacturers and distributors to ensure every part meets the highest quality standards.',
    'suppliers.become.title': 'Become a Partner',
    'suppliers.become.desc': 'Join our global network of suppliers and distributors. Together, we can build a stronger supply chain for heavy industries worldwide.',
    'suppliers.become.cta': 'Get in Touch',
    // Contact
    'contact.hero.title': 'Get in Touch',
    'contact.hero.subtitle': 'We\'re here to help with your spare parts needs',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': '19 Wadi El Nile St, Mohandeseen, Giza, Egypt',
    'contact.info.email': 'mostafa@dallatrade.com',
    'contact.info.phone': '+20 233 056 036 / +20 233 056 106',
    'contact.info.whatsapp': '+20 1033 000 772',
    'contact.info.wechat': '+20 1033 000 772',
    // Footer
    'footer.desc': 'Leading B2B supplier of premium spare parts for heavy-duty trucks, tractors, and industrial machinery.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.rights': '© 2026 Dalla Trade. All rights reserved.',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'عن الشركة',
    'nav.products': 'المنتجات',
    'nav.suppliers': 'الموردين',
    'nav.contact': 'تواصل معنا',
    'home.hero.title': 'نحرك الصناعات الثقيلة حول العالم',
    'home.hero.subtitle': 'مورد قطع غيار متميز للشاحنات الثقيلة والجرارات والآلات الصناعية — نوفر الموثوقية عبر القارات.',
    'home.hero.cta1': 'استكشف المنتجات',
    'home.hero.cta2': 'تواصل معنا',
    'home.services.title': 'ما نوفره',
    'home.services.subtitle': 'كتالوج شامل لقطع الغيار لأكثر الصناعات تطلباً في العالم',
    'home.services.trucks.title': 'قطع الشاحنات',
    'home.services.trucks.desc': 'مكونات المحرك وأنظمة النقل وقطع الهيكل لجميع ماركات الشاحنات الثقيلة الرئيسية.',
    'home.services.tractors.title': 'مكونات الجرارات',
    'home.services.tractors.desc': 'أنظمة هيدروليكية وقطع PTO ومكونات نقل الحركة للجرارات الزراعية والصناعية.',
    'home.services.supply.title': 'سلسلة التوريد العالمية',
    'home.services.supply.desc': 'شبكة توريد ولوجستيات عالمية تضمن وصول القطع إليك في الوقت المحدد.',
    'home.reach.title': 'الانتشار العالمي',
    'home.reach.subtitle': 'نخدم الصناعات في أكثر من 40 دولة',
    'home.reach.countries': 'دولة نخدمها',
    'home.reach.parts': 'قطعة تم توريدها',
    'home.reach.partners': 'شريك عالمي',
    'home.reach.years': 'سنوات خبرة',
    'home.why.title': 'لماذا تختار دله تريد',
    'home.why.subtitle': 'معايير رائدة في الصناعة تميزنا',
    'home.why.quality': 'جودة عالية',
    'home.why.quality.desc': 'كل قطعة تخضع لرقابة جودة صارمة لتلبية مواصفات المصنع الأصلي.',
    'home.why.speed': 'توصيل سريع',
    'home.why.speed.desc': 'شبكة لوجستية محسنة تضمن التسليم السريع لأي وجهة في العالم.',
    'home.why.trust': 'شريك موثوق',
    'home.why.trust.desc': 'عقود من العلاقات التجارية المبنية على الموثوقية والتواصل الشفاف.',
    'home.why.network': 'شبكة عالمية',
    'home.why.network.desc': 'شراكات استراتيجية مع مصنعين في أوروبا وآسيا والأمريكتين.',
    'home.dashboard.title': 'إدارة ذكية لسلسلة التوريد',
    'home.dashboard.subtitle': 'رؤية فورية للطلبات والمخزون والشحنات عبر منصتنا التقنية',
    'about.hero.title': 'عن دله تريد',
    'about.hero.subtitle': 'نبني العمود الفقري للصناعات الثقيلة العالمية منذ البداية',
    'about.description': 'دله تريد هي مورد B2B رائد متخصص في قطع الغيار عالية الجودة للشاحنات الثقيلة والجرارات. من خلال شبكة عالمية من المصنعين والموزعين، نضمن حصول الشركات حول العالم على المكونات التي تحتاجها.',
    'about.mission.title': 'مهمتنا',
    'about.mission.desc': 'أن نكون المورد الأكثر موثوقية وكفاءة لقطع الغيار في صناعة المركبات الثقيلة العالمية.',
    'about.vision.title': 'رؤيتنا',
    'about.vision.desc': 'عالم تعمل فيه كل مركبة ثقيلة بكامل إمكاناتها، مدعومة بقطع غيار عالية الجودة.',
    'about.timeline.title': 'مسيرتنا',
    'about.timeline.2010': 'تأسست كموزع إقليمي لقطع غيار الشاحنات',
    'about.timeline.2014': 'التوسع في قطع غيار الجرارات والآلات الزراعية',
    'about.timeline.2017': 'إقامة شراكات مع مصنعي OEM الأوروبيين',
    'about.timeline.2020': 'إطلاق منصة الطلبات الرقمية لعملاء B2B',
    'about.timeline.2023': 'الوصول إلى أكثر من 40 دولة مع شبكة من 120+ شريك',
    'products.hero.title': 'منتجاتنا',
    'products.hero.subtitle': 'قطع غيار متميزة مصممة للأداء',
    'products.filter.all': 'الكل',
    'products.filter.engine': 'قطع المحرك',
    'products.filter.brake': 'أنظمة الفرامل',
    'products.filter.suspension': 'قطع التعليق',
    'products.filter.electrical': 'الأنظمة الكهربائية',
    'products.requestQuote': 'طلب عرض سعر',
    'suppliers.hero.title': 'شركاؤنا وموردونا',
    'suppliers.hero.subtitle': 'شراكات موثوقة تدعم سلسلة التوريد العالمية',
    'suppliers.trusted.title': 'موثوقون من قادة الصناعة',
    'suppliers.trusted.desc': 'نتعاون مع أكثر المصنعين والموزعين سمعةً في العالم لضمان أعلى معايير الجودة.',
    'suppliers.become.title': 'كن شريكاً',
    'suppliers.become.desc': 'انضم إلى شبكتنا العالمية من الموردين والموزعين. معاً نبني سلسلة توريد أقوى.',
    'suppliers.become.cta': 'تواصل معنا',
    'contact.hero.title': 'تواصل معنا',
    'contact.hero.subtitle': 'نحن هنا لمساعدتك في احتياجات قطع الغيار',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'رسالتك',
    'contact.form.send': 'إرسال الرسالة',
    'contact.info.title': 'معلومات التواصل',
    'contact.info.address': '19 شارع وادي النيل، المهندسين، الجيزة، مصر',
    'contact.info.email': 'mostafa@dallatrade.com',
    'contact.info.phone': '+20 233 056 036 / +20 233 056 106',
    'contact.info.whatsapp': '+20 1033 000 772',
    'contact.info.wechat': '+20 1033 000 772',
    'footer.desc': 'مورد B2B رائد لقطع الغيار المتميزة للشاحنات الثقيلة والجرارات والآلات الصناعية.',
    'footer.links': 'روابط سريعة',
    'footer.contact': 'تواصل',
    'footer.rights': '© 2026 دله تريد. جميع الحقوق محفوظة.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('dalla-lang') as Lang) || 'en');

  useEffect(() => {
    localStorage.setItem('dalla-lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string) => translations[lang][key] || key;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
