import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.faq': 'FAQ',
    'nav.privacy': 'Privacy Policy',
    'nav.terms': 'Terms of Use',
    
    // Hero
    'hero.title': 'Unlimited Entertainment With',
    'hero.titleHighlight': 'Quick IPTV',
    'hero.subtitle': 'Access 10,000+ live channels, movies, shows, and sports from around the world on any device.',
    'hero.cta': 'Get it on Google Play',
    'hero.comingSoon': 'Coming Soon',
    
    // Features
    'features.title': 'Explore Our Premium Features',
    'features.subtitle': 'Quick IPTV delivers the ultimate streaming experience with these powerful features',
    'features.global.title': 'Global Content',
    'features.global.desc': 'Access 10,000+ channels from over 70 countries in multiple languages',
    'features.devices.title': 'Multi-Device Support',
    'features.devices.desc': 'Watch on smart TVs, phones, tablets, computers, and streaming devices',
    'features.quality.title': 'HD & 4K Quality',
    'features.quality.desc': 'Enjoy crystal-clear HD and 4K streams with minimal buffering',
    'features.dvr.title': 'Cloud DVR',
    'features.dvr.desc': 'Record, pause, and rewind live TV with our cloud-based DVR functionality',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about Quick IPTV',
    'faq.q1': 'What is IPTV and how does it work?',
    'faq.a1': 'IPTV (Internet Protocol Television) delivers television content over the internet rather than traditional cable or satellite. Quick IPTV allows you to stream live TV, movies, and shows using your internet connection on any compatible device.',
    'faq.q2': 'What devices can I use with Quick IPTV?',
    'faq.a2': 'Quick IPTV works on Android smartphones, tablets, Android TV, Fire TV, and other Android-based streaming devices. We support a wide range of devices to ensure you can watch your favorite content anywhere.',
    'faq.q3': 'How do I add my M3U playlist?',
    'faq.a3': 'Simply open the app, go to Settings, and select "Add Playlist". You can add your M3U link or upload an M3U file directly. The app will automatically parse and organize your channels.',
    'faq.q4': 'Is Quick IPTV free to use?',
    'faq.a4': 'Quick IPTV offers both free and premium features. The basic app is free to download and use with your own M3U playlists. Premium features are available through in-app subscriptions.',
    'faq.q5': 'How do I update my channel list?',
    'faq.a5': 'Your playlist can be refreshed manually from the playlist settings or set to auto-update at regular intervals. This ensures you always have the latest channel information.',
    
    // CTA
    'cta.title': 'Ready to Transform Your TV Experience?',
    'cta.subtitle': 'Download Quick IPTV today and enjoy unlimited entertainment on all your devices',
    
    // Footer
    'footer.disclaimer': 'IPTV Player Disclaimer',
    'footer.disclaimerText': 'Quick IPTV is a media player application that plays content from user-provided playlists (M3U/M3U8). We do not provide, host, or stream any content. Users are responsible for ensuring they have the legal right to access any content they stream through the application.',
    'footer.rights': 'All rights reserved.',
    'footer.contact': 'Contact',
  },
  ru: {
    // Navigation
    'nav.features': 'Возможности',
    'nav.faq': 'Вопросы',
    'nav.privacy': 'Политика конфиденциальности',
    'nav.terms': 'Условия использования',
    
    // Hero
    'hero.title': 'Безграничные развлечения с',
    'hero.titleHighlight': 'Quick IPTV',
    'hero.subtitle': 'Доступ к 10,000+ каналам, фильмам, сериалам и спорту со всего мира на любом устройстве.',
    'hero.cta': 'Скачать в Google Play',
    'hero.comingSoon': 'Скоро',
    
    // Features
    'features.title': 'Откройте премиальные возможности',
    'features.subtitle': 'Quick IPTV обеспечивает лучший опыт стриминга с этими мощными функциями',
    'features.global.title': 'Мировой контент',
    'features.global.desc': 'Доступ к 10,000+ каналам из более чем 70 стран на разных языках',
    'features.devices.title': 'Любые устройства',
    'features.devices.desc': 'Смотрите на Smart TV, телефонах, планшетах, компьютерах и стриминговых устройствах',
    'features.quality.title': 'HD и 4K качество',
    'features.quality.desc': 'Наслаждайтесь кристально чистым HD и 4K с минимальной буферизацией',
    'features.dvr.title': 'Облачный DVR',
    'features.dvr.desc': 'Записывайте, ставьте на паузу и перематывайте ТВ с облачным DVR',
    
    // FAQ
    'faq.title': 'Часто задаваемые вопросы',
    'faq.subtitle': 'Ответы на популярные вопросы о Quick IPTV',
    'faq.q1': 'Что такое IPTV и как это работает?',
    'faq.a1': 'IPTV (Internet Protocol Television) доставляет телевизионный контент через интернет, а не через кабель или спутник. Quick IPTV позволяет смотреть ТВ, фильмы и шоу через интернет на любом совместимом устройстве.',
    'faq.q2': 'На каких устройствах работает Quick IPTV?',
    'faq.a2': 'Quick IPTV работает на Android смартфонах, планшетах, Android TV, Fire TV и других устройствах на Android. Мы поддерживаем широкий спектр устройств для просмотра в любом месте.',
    'faq.q3': 'Как добавить M3U плейлист?',
    'faq.a3': 'Откройте приложение, перейдите в Настройки и выберите "Добавить плейлист". Вы можете добавить M3U ссылку или загрузить файл напрямую. Приложение автоматически обработает и организует каналы.',
    'faq.q4': 'Quick IPTV бесплатный?',
    'faq.a4': 'Quick IPTV предлагает бесплатные и премиум функции. Базовое приложение бесплатно для скачивания и использования с вашими M3U плейлистами. Премиум функции доступны по подписке.',
    'faq.q5': 'Как обновить список каналов?',
    'faq.a5': 'Плейлист можно обновить вручную в настройках или настроить автообновление. Это гарантирует актуальность информации о каналах.',
    
    // CTA
    'cta.title': 'Готовы преобразить свой ТВ-опыт?',
    'cta.subtitle': 'Скачайте Quick IPTV сегодня и наслаждайтесь безграничными развлечениями на всех устройствах',
    
    // Footer
    'footer.disclaimer': 'Отказ от ответственности',
    'footer.disclaimerText': 'Quick IPTV — это медиаплеер, воспроизводящий контент из пользовательских плейлистов (M3U/M3U8). Мы не предоставляем, не размещаем и не транслируем контент. Пользователи несут ответственность за законность доступа к контенту.',
    'footer.rights': 'Все права защищены.',
    'footer.contact': 'Контакты',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
