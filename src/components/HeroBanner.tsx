import { ReactNode } from 'react';

interface HeroBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const HeroBanner = ({ image, title, subtitle, children }: HeroBannerProps) => (
  <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
    <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="hero-overlay absolute inset-0" />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  </section>
);

export default HeroBanner;
