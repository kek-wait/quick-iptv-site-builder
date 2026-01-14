import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsOfUse = () => {
  const { language } = useLanguage();

  const contentEn = (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Use</h1>
      <p className="text-lg text-muted-foreground mb-12">Please read these terms carefully before using our services</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-sm text-muted-foreground mb-8"><em>Last Updated: January 2025</em></p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="text-muted-foreground mb-4">
          By accessing and using Quick IPTV ("the App"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Description of Service</h2>
        <p className="text-muted-foreground mb-4">
          Quick IPTV is a media player application that allows users to stream content from their own M3U/M3U8 playlists. The App does not provide, host, or distribute any media content. Users must supply their own playlist sources.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Eligibility</h2>
        <p className="text-muted-foreground mb-4">
          You must be at least 13 years of age to use this App. By using the App, you represent and warrant that you meet the eligibility requirements. If you do not meet these requirements, you must not access or use the App.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. User Responsibilities</h2>
        <p className="text-muted-foreground mb-4">Users of Quick IPTV agree to:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li>Only use playlists and content sources for which they have legal authorization</li>
          <li>Comply with all applicable local, state, national, and international laws and regulations</li>
          <li>Not use the App for any illegal or unauthorized purpose</li>
          <li>Not attempt to gain unauthorized access to any part of the App or its systems</li>
          <li>Not transmit any viruses, worms, or other malicious code</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Account Registration</h2>
        <p className="text-muted-foreground mb-4">
          To access certain features of the App, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Subscription and Billing</h2>
        <p className="text-muted-foreground mb-4">
          Some features of the App may require a paid subscription. By subscribing to premium features:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li>You authorize us to charge your payment method on a recurring basis</li>
          <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
          <li>Cancellation takes effect at the end of the current billing period</li>
          <li>Refunds are handled according to the app store's refund policy</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Intellectual Property</h2>
        <p className="text-muted-foreground mb-4">
          The App, including its original content, features, and functionality, is owned by Quick IPTV and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Acceptable Use Policy</h2>
        <p className="text-muted-foreground mb-4">You agree not to use the App to:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li>Stream content that you do not have the right to access</li>
          <li>Violate any copyright, trademark, or other intellectual property rights</li>
          <li>Distribute malware or other harmful computer code</li>
          <li>Interfere with the proper functioning of the App</li>
          <li>Attempt to circumvent any security measures</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Termination</h2>
        <p className="text-muted-foreground mb-6">
          We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Use.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Disclaimer of Warranties</h2>
        <p className="text-muted-foreground mb-6">
          THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. QUICK IPTV MAKES NO WARRANTIES, EXPRESSED OR IMPLIED, REGARDING THE APP'S OPERATION OR THE INFORMATION, CONTENT, OR MATERIALS INCLUDED THEREIN.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. Limitation of Liability</h2>
        <p className="text-muted-foreground mb-6">
          IN NO EVENT SHALL QUICK IPTV BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE APP.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">12. Indemnification</h2>
        <p className="text-muted-foreground mb-6">
          You agree to indemnify and hold harmless Quick IPTV and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms of Use.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">13. IPTV Player Disclaimer</h2>
        <p className="text-muted-foreground mb-6">
          Quick IPTV is a media player application that plays content from user-provided playlists (M3U/M3U8). We do not provide, host, or stream any content. Users are responsible for ensuring they have the legal right to access any content they stream through the application.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">14. Changes to Terms</h2>
        <p className="text-muted-foreground mb-6">
          We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms of Use on this page and updating the "Last Updated" date.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">15. Contact Information</h2>
        <p className="text-muted-foreground mb-6">
          If you have any questions about these Terms of Use, please contact us at: <a href="mailto:support@quickiptv.app" className="text-primary hover:underline">support@quickiptv.app</a>
        </p>
      </div>
    </>
  );

  const contentRu = (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Условия использования</h1>
      <p className="text-lg text-muted-foreground mb-12">Пожалуйста, внимательно прочитайте эти условия перед использованием наших услуг</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-sm text-muted-foreground mb-8"><em>Последнее обновление: Январь 2025</em></p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Принятие условий</h2>
        <p className="text-muted-foreground mb-4">
          Получая доступ к Quick IPTV («Приложение») и используя его, вы принимаете и соглашаетесь соблюдать условия и положения данного соглашения. Если вы не согласны с этими условиями, пожалуйста, не используйте этот сервис.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Описание услуги</h2>
        <p className="text-muted-foreground mb-4">
          Quick IPTV — это приложение медиаплеера, которое позволяет пользователям транслировать контент из собственных плейлистов M3U/M3U8. Приложение не предоставляет, не размещает и не распространяет медиаконтент. Пользователи должны сами предоставлять источники плейлистов.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Право на использование</h2>
        <p className="text-muted-foreground mb-4">
          Вам должно быть не менее 13 лет для использования этого Приложения. Используя Приложение, вы подтверждаете, что соответствуете требованиям. Если вы не соответствуете этим требованиям, вы не должны использовать Приложение.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Обязанности пользователя</h2>
        <p className="text-muted-foreground mb-4">Пользователи Quick IPTV соглашаются:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li>Использовать только плейлисты и источники контента, на которые у них есть законное разрешение</li>
          <li>Соблюдать все применимые местные, региональные, национальные и международные законы и нормативные акты</li>
          <li>Не использовать Приложение в незаконных или несанкционированных целях</li>
          <li>Не пытаться получить несанкционированный доступ к любой части Приложения или его систем</li>
          <li>Не передавать вирусы, черви или другой вредоносный код</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Регистрация аккаунта</h2>
        <p className="text-muted-foreground mb-4">
          Для доступа к определённым функциям Приложения может потребоваться регистрация аккаунта. Вы соглашаетесь предоставлять точную, актуальную и полную информацию в процессе регистрации и обновлять её для поддержания актуальности.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Подписка и оплата</h2>
        <p className="text-muted-foreground mb-4">
          Некоторые функции Приложения могут требовать платной подписки. Подписываясь на премиум-функции:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li>Вы разрешаете нам списывать средства с вашего способа оплаты на регулярной основе</li>
          <li>Подписки автоматически продлеваются, если не отменены до даты продления</li>
          <li>Отмена вступает в силу в конце текущего расчётного периода</li>
          <li>Возвраты обрабатываются в соответствии с политикой магазина приложений</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Интеллектуальная собственность</h2>
        <p className="text-muted-foreground mb-4">
          Приложение, включая его оригинальный контент, функции и функциональность, принадлежит Quick IPTV и защищено международными законами об авторском праве, товарных знаках, патентах, коммерческой тайне и другими законами об интеллектуальной собственности.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Политика допустимого использования</h2>
        <p className="text-muted-foreground mb-4">Вы соглашаетесь не использовать Приложение для:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li>Трансляции контента, к которому у вас нет права доступа</li>
          <li>Нарушения авторских прав, товарных знаков или других прав интеллектуальной собственности</li>
          <li>Распространения вредоносного ПО или другого вредоносного кода</li>
          <li>Вмешательства в нормальное функционирование Приложения</li>
          <li>Попыток обойти меры безопасности</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Прекращение</h2>
        <p className="text-muted-foreground mb-6">
          Мы можем прекратить или приостановить ваш доступ к Приложению немедленно, без предварительного уведомления или ответственности, по любой причине, включая, помимо прочего, нарушение вами настоящих Условий использования.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Отказ от гарантий</h2>
        <p className="text-muted-foreground mb-6">
          ПРИЛОЖЕНИЕ ПРЕДОСТАВЛЯЕТСЯ НА УСЛОВИЯХ «КАК ЕСТЬ» И «КАК ДОСТУПНО». QUICK IPTV НЕ ДАЁТ НИКАКИХ ГАРАНТИЙ, ЯВНЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ, ОТНОСИТЕЛЬНО РАБОТЫ ПРИЛОЖЕНИЯ.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. Ограничение ответственности</h2>
        <p className="text-muted-foreground mb-6">
          НИ ПРИ КАКИХ ОБСТОЯТЕЛЬСТВАХ QUICK IPTV НЕ НЕСЁТ ОТВЕТСТВЕННОСТИ ЗА ЛЮБЫЕ КОСВЕННЫЕ, СЛУЧАЙНЫЕ, ОСОБЫЕ, ПОСЛЕДУЮЩИЕ ИЛИ ШТРАФНЫЕ УБЫТКИ, ВОЗНИКАЮЩИЕ В СВЯЗИ С ИСПОЛЬЗОВАНИЕМ ПРИЛОЖЕНИЯ.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">12. Возмещение ущерба</h2>
        <p className="text-muted-foreground mb-6">
          Вы соглашаетесь возместить убытки и оградить Quick IPTV и его должностных лиц, директоров, сотрудников и агентов от любых претензий, обязательств, убытков, решений, наград, потерь, затрат, расходов или сборов, возникающих в связи с нарушением вами настоящих Условий использования.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">13. Отказ от ответственности IPTV Player</h2>
        <p className="text-muted-foreground mb-6">
          Quick IPTV — это приложение медиаплеера, которое воспроизводит контент из пользовательских плейлистов (M3U/M3U8). Мы не предоставляем, не размещаем и не транслируем какой-либо контент. Пользователи несут ответственность за то, чтобы у них было законное право на доступ к любому контенту, который они транслируют через приложение.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">14. Изменения условий</h2>
        <p className="text-muted-foreground mb-6">
          Мы оставляем за собой право изменять эти условия в любое время. Мы уведомим пользователей о любых изменениях, опубликовав новые Условия использования на этой странице и обновив дату «Последнее обновление».
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">15. Контактная информация</h2>
        <p className="text-muted-foreground mb-6">
          Если у вас есть вопросы об этих Условиях использования, пожалуйста, свяжитесь с нами: <a href="mailto:support@quickiptv.app" className="text-primary hover:underline">support@quickiptv.app</a>
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

export default TermsOfUse;
