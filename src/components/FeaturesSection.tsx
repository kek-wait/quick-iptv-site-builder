import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Monitor, Sparkles, Cloud } from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Globe,
      titleKey: 'features.global.title',
      descKey: 'features.global.desc',
    },
    {
      icon: Monitor,
      titleKey: 'features.devices.title',
      descKey: 'features.devices.desc',
    },
    {
      icon: Sparkles,
      titleKey: 'features.quality.title',
      descKey: 'features.quality.desc',
    },
    {
      icon: Cloud,
      titleKey: 'features.dvr.title',
      descKey: 'features.dvr.desc',
    },
  ];

  return (
    <section id="features" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-muted-foreground">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
