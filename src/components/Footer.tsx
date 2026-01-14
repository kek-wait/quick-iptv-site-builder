import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Disclaimer */}
          <div className="mb-8 p-6 rounded-xl bg-muted/50 border border-border">
            <h4 className="font-semibold text-foreground mb-2">{t('footer.disclaimer')}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('footer.disclaimerText')}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">Q</span>
              </div>
              <span className="font-semibold text-foreground">Quick IPTV</span>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.privacy')}
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.terms')}
              </Link>
              <a href="mailto:support@quickiptv.app" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('footer.contact')}
              </a>
            </nav>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            © {currentYear} Quick IPTV. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
