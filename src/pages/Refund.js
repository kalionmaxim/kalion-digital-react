import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const Refund = () => {
  return (
    <>
      <SEO
        title="Політика повернення коштів | Kalion.Digital"
        description="Політика повернення коштів ФОП Каліон Максим Олександрович. Умови повернення для цифрових продуктів, освітніх курсів, консультацій та веб-розробки."
        url="https://kalion.digital/refund"
      />
      <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft size={20} />
          <span>Повернутися на головну</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Політика повернення коштів</h1>

        <div className="max-w-4xl space-y-8 text-gray-300">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Цифрові продукти</h2>
            <p className="mb-3">Повернення коштів можливе протягом 14 днів з моменту покупки, якщо:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Продукт не відповідає опису</li>
              <li>Продукт має технічні проблеми, які неможливо усунути</li>
              <li>Клієнт не отримав доступ до продукту</li>
            </ul>
            <p className="mb-3">Повернення НЕ здійснюється, якщо:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Продукт вже був завантажений або використаний</li>
              <li>Минуло більше 14 днів з моменту покупки</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Освітні курси</h2>
            <p className="mb-3">Повернення можливе протягом 7 днів, якщо:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Не переглянуто більше 20% матеріалів курсу</li>
              <li>Курс не відповідає заявленому опису</li>
            </ul>
            <p>Після перегляду 20% матеріалів повернення не здійснюється.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Консультаційні послуги</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Відмова не пізніше ніж за 24 години до консультації — повне повернення</li>
              <li>Відмова менш ніж за 24 години — повернення не здійснюється</li>
              <li>Якщо консультація не відбулася з вини виконавця — повне повернення</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Веб-розробка та індивідуальні проекти</h2>
            <p>
              Умови повернення визначаються індивідуально у договорі на проект. Як правило, повернення передоплати
              можливе до початку робіт, за вирахуванням 10% організаційних витрат.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Процедура повернення</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>Надішліть запит на повернення на email: hello@kalion.digital</li>
              <li>Вкажіть: номер замовлення, дату покупки, причину повернення</li>
              <li>Очікуйте розгляду протягом 3 робочих днів</li>
              <li>При схваленні — кошти повертаються протягом 10 робочих днів на ту саму картку/рахунок</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Строки повернення</h2>
            <p>
              Повернення коштів здійснюється протягом 10 робочих днів після схвалення запиту.
              Кошти повертаються тим же способом, яким була здійснена оплата.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Контакти</h2>
            <div className="space-y-1">
              <p>Email: hello@kalion.digital</p>
              <p>Телефон: +380 96 999 99 40</p>
              <p>Час роботи: Пн-Пт, 9:00-18:00 (за київським часом)</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Refund;
