import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const Terms = () => {
  return (
    <>
      <SEO
        title="Правила та умови | Kalion.Digital"
        description="Правила та умови надання послуг ФОП Каліон Максим Олександрович: AI автоматизація, SaaS розробка, чат-боти, веб-розробка та IT-консалтинг."
        url="https://kalion.digital/terms"
      />
      <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft size={20} />
          <span>Повернутися на головну</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Правила та умови</h1>

        <div className="max-w-4xl space-y-8 text-gray-300">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">1. Загальні положення</h2>
            <p>
              Ці Правила та умови регулюють відносини між ФОП Каліон Максим Олександрович
              (надалі - "Виконавець") та клієнтами при наданні послуг.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">2. Послуги</h2>
            <p className="mb-3">Виконавець надає наступні послуги:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI автоматизація бізнес-процесів</li>
              <li>Розробка SaaS продуктів</li>
              <li>Створення чат-ботів</li>
              <li>Розробка веб та мобільних ігор</li>
              <li>Веб-розробка (сайти та додатки)</li>
              <li>IT-консультації з питань цифровізації</li>
              <li>Проведення освітніх курсів у сфері інформаційних технологій</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">3. Умови оплати</h2>
            <p className="mb-3">Прийняті способи оплати:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Банківські картки Visa, MasterCard</li>
              <li>Privat24</li>
              <li>Готівкові та безготівкові платежі (UAH)</li>
            </ul>
            <p>
              Оплата здійснюється через платіжну систему WayForPay. Комісія платіжної системи (2%) включена у вартість послуг.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">4. Умови надання послуг</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Цифрові продукти: доступ надається протягом 24 годин після оплати</li>
              <li>Веб-розробка: терміни визначаються індивідуально у договорі</li>
              <li>Консультації: проводяться у домовлений час протягом 48 годин після оплати</li>
              <li>Курси: доступ надається протягом 24 годин після оплати</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">5. Відповідальність</h2>
            <p>
              Виконавець несе відповідальність за якість наданих послуг відповідно до законодавства України.
              Клієнт несе відповідальність за достовірність наданих даних.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">6. Контактна інформація</h2>
            <div className="space-y-1">
              <p>ФОП Каліон Максим Олександрович</p>
              <p>ІПН: 3438113235</p>
              <p>Адреса: 03057, м. Київ, вул. Брайчевського, буд. 4, кв. 507</p>
              <p>Телефон: +380 96 999 99 40</p>
              <p>Email: hello@kalion.digital</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Terms;
