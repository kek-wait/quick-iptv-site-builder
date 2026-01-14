import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Play, Tv } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-up">
            <span className="text-foreground">{t('hero.title')}</span>
            <br />
            <span className="text-gradient">{t('hero.titleHighlight')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl glow-primary transition-all hover:glow-strong"
              disabled
            >
              <Play className="w-5 h-5 mr-2" />
              {t('hero.comingSoon')}
            </Button>
          </div>

          {/* Hero Image/Mockup */}
          <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative mx-auto max-w-3xl">
              <div className="aspect-video rounded-2xl bg-gradient-card border border-border overflow-hidden glow-primary animate-float">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Tv className="w-20 h-20 text-primary mx-auto mb-4" />
                    <p className="text-2xl font-bold text-foreground">Quick IPTV</p>
                    <p className="text-muted-foreground">Stream Anywhere</p>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
