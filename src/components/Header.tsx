import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center glow-primary">
            <span className="text-xl font-bold text-primary-foreground">Q</span>
          </div>
          <span className="text-xl font-bold text-foreground">Quick IPTV</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {isHome && (
            <>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.features')}
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.faq')}
              </a>
            </>
          )}
          <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
            {t('nav.privacy')}
          </Link>
          <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
            {t('nav.terms')}
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <Globe className="w-4 h-4" />
          <span className="uppercase font-medium">{language === 'en' ? 'RU' : 'EN'}</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
