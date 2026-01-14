import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const contentEn = (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
      <p className="text-lg text-muted-foreground mb-12">How we collect, use, and protect your information</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-sm text-muted-foreground mb-8"><em>Last Updated: January 2025</em></p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Introduction</h2>
        <p className="text-muted-foreground mb-4">
          Welcome to the Quick IPTV Privacy Policy. Your privacy is critically important to us. At Quick IPTV, we have a few fundamental principles:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li>We are thoughtful about the personal information we ask you to provide and the personal information that we collect about you through the operation of our services.</li>
          <li>We store personal information for only as long as we have a reason to keep it.</li>
          <li>We aim to make it as simple as possible for you to control what information is shared publicly or kept private.</li>
          <li>We aim for full transparency on how we gather, use, and share your personal information.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
        <p className="text-muted-foreground mb-4">
          We only collect information about you if we have a reason to do so — for example, to provide our Services, to communicate with you, or to make our Services better.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Information You Provide to Us</h3>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li><strong>Basic account information:</strong> We ask for basic information from you in order to set up your account. For example, we require individuals who sign up for a Quick IPTV account to provide an email address.</li>
          <li><strong>Payment and contact information:</strong> If you buy something from us, we'll collect information to process those payments and contact you.</li>
          <li><strong>Communications with us:</strong> You may also provide us with information when you respond to surveys, communicate with our support team, or sign up for a newsletter.</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Information We Collect Automatically</h3>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li><strong>Log information:</strong> Like most online service providers, we collect information that web browsers, mobile devices, and servers typically make available, including the browser type, IP address, unique device identifiers, language preference, referring site, the date and time of access, operating system, and mobile network information.</li>
          <li><strong>Usage information:</strong> We collect information about your usage of our Services to provide our Services, get insights on how people use our Services, and make improvements.</li>
          <li><strong>Location information:</strong> We may determine the approximate location of your device from your IP address.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Information</h2>
        <p className="text-muted-foreground mb-4">We use information about you for the purposes listed below:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li>To provide our Services</li>
          <li>To further develop and improve our Services</li>
          <li>To monitor and analyze trends and better understand how users interact with our Services</li>
          <li>To monitor and prevent any problems with our Services</li>
          <li>To communicate with you, solicit your feedback, and provide customer support</li>
          <li>To protect your, our, or others' rights, property, or safety</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Sharing Information</h2>
        <p className="text-muted-foreground mb-4">
          We share information about you in limited circumstances, and with appropriate safeguards on your privacy:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li><strong>Subsidiaries and independent contractors:</strong> We may disclose information about you to our subsidiaries and independent contractors who need the information to help us provide our Services.</li>
          <li><strong>Third-party vendors:</strong> We may share information about you with third-party vendors who need the information in order to provide their services to us.</li>
          <li><strong>Legal and regulatory requirements:</strong> We may disclose information about you in response to a subpoena, court order, or other governmental request.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Security</h2>
        <p className="text-muted-foreground mb-6">
          While no online service is 100% secure, we work hard to protect information about you against unauthorized access, use, alteration, or destruction. We implement various security measures to maintain the safety of your personal information.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Your Rights</h2>
        <p className="text-muted-foreground mb-4">
          Depending on your location, you may have certain rights regarding your personal information:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li>Access to your personal data</li>
          <li>Rectification of inaccurate data</li>
          <li>Erasure of your data</li>
          <li>Restriction of processing</li>
          <li>Data portability</li>
          <li>Right to object to processing</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">IPTV Player Disclaimer</h2>
        <p className="text-muted-foreground mb-6">
          Quick IPTV is a media player application that plays content from user-provided playlists (M3U/M3U8). We do not provide, host, or stream any content. Users are responsible for ensuring they have the legal right to access any content they stream through the application.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
        <p className="text-muted-foreground mb-6">
          If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:support@quickiptv.app" className="text-primary hover:underline">support@quickiptv.app</a>
        </p>
      </div>
    </>
  );

  const contentRu = (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Политика конфиденциальности</h1>
      <p className="text-lg text-muted-foreground mb-12">Как мы собираем, используем и защищаем вашу информацию</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-sm text-muted-foreground mb-8"><em>Последнее обновление: Январь 2025</em></p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Введение</h2>
        <p className="text-muted-foreground mb-4">
          Добро пожаловать в Политику конфиденциальности Quick IPTV. Ваша конфиденциальность для нас крайне важна. В Quick IPTV мы руководствуемся несколькими фундаментальными принципами:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li>Мы внимательно относимся к личной информации, которую просим вас предоставить, и к информации, которую мы собираем в процессе работы наших сервисов.</li>
          <li>Мы храним личную информацию только до тех пор, пока есть причина её хранить.</li>
          <li>Мы стремимся максимально упростить контроль над тем, какая информация является публичной, а какая — частной.</li>
          <li>Мы стремимся к полной прозрачности в том, как мы собираем, используем и передаём вашу личную информацию.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Какую информацию мы собираем</h2>
        <p className="text-muted-foreground mb-4">
          Мы собираем информацию о вас только при наличии причины — например, для предоставления наших Услуг, связи с вами или улучшения наших Услуг.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Информация, которую вы предоставляете нам</h3>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li><strong>Основная информация об аккаунте:</strong> Мы запрашиваем базовую информацию для создания вашего аккаунта. Например, мы требуем, чтобы пользователи, регистрирующиеся в Quick IPTV, предоставили адрес электронной почты.</li>
          <li><strong>Платёжная и контактная информация:</strong> Если вы что-то покупаете у нас, мы собираем информацию для обработки платежей и связи с вами.</li>
          <li><strong>Общение с нами:</strong> Вы также можете предоставить нам информацию, когда отвечаете на опросы, обращаетесь в службу поддержки или подписываетесь на рассылку.</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Информация, которую мы собираем автоматически</h3>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li><strong>Информация журналов:</strong> Как и большинство онлайн-сервисов, мы собираем информацию, которую обычно предоставляют веб-браузеры, мобильные устройства и серверы.</li>
          <li><strong>Информация об использовании:</strong> Мы собираем информацию о вашем использовании наших Услуг для их предоставления и улучшения.</li>
          <li><strong>Информация о местоположении:</strong> Мы можем определить приблизительное местоположение вашего устройства по IP-адресу.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Как мы используем информацию</h2>
        <p className="text-muted-foreground mb-4">Мы используем информацию о вас для следующих целей:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li>Для предоставления наших Услуг</li>
          <li>Для развития и улучшения наших Услуг</li>
          <li>Для мониторинга и анализа тенденций</li>
          <li>Для предотвращения проблем с нашими Услугами</li>
          <li>Для связи с вами и предоставления поддержки клиентам</li>
          <li>Для защиты ваших, наших или чужих прав, собственности или безопасности</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Передача информации</h2>
        <p className="text-muted-foreground mb-4">
          Мы передаём информацию о вас в ограниченных случаях и с соответствующими мерами защиты вашей конфиденциальности.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Безопасность</h2>
        <p className="text-muted-foreground mb-6">
          Хотя ни один онлайн-сервис не является на 100% безопасным, мы усердно работаем над защитой информации о вас от несанкционированного доступа, использования, изменения или уничтожения.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Ваши права</h2>
        <p className="text-muted-foreground mb-4">
          В зависимости от вашего местоположения вы можете иметь определённые права в отношении вашей личной информации:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li>Доступ к вашим персональным данным</li>
          <li>Исправление неточных данных</li>
          <li>Удаление ваших данных</li>
          <li>Ограничение обработки</li>
          <li>Переносимость данных</li>
          <li>Право на возражение против обработки</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Отказ от ответственности IPTV Player</h2>
        <p className="text-muted-foreground mb-6">
          Quick IPTV — это приложение медиаплеера, которое воспроизводит контент из пользовательских плейлистов (M3U/M3U8). Мы не предоставляем, не размещаем и не транслируем какой-либо контент. Пользователи несут ответственность за то, чтобы у них было законное право на доступ к любому контенту, который они транслируют через приложение.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Связаться с нами</h2>
        <p className="text-muted-foreground mb-6">
          Если у вас есть вопросы по этой Политике конфиденциальности, пожалуйста, свяжитесь с нами: <a href="mailto:support@quickiptv.app" className="text-primary hover:underline">support@quickiptv.app</a>
        </p>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {language === 'en' ? contentEn : contentRu}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
