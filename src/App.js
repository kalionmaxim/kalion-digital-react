import React, { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const KalionDigital = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const services = [
    {
      title: "AI Автоматизація",
      description: "Впровадження штучного інтелекту для оптимізації бізнес-процесів",
      icon: "🤖",
      details: "Інтеграція GPT, Claude, Gemini. Автоматизація обробки документів, аналізу даних, генерації контенту."
    },
    {
      title: "SaaS Розробка",
      description: "Створення Software-as-a-Service продуктів з нуля",
      icon: "☁️",
      details: "Повний цикл розробки SaaS: MVP, масштабування, підписки, multi-tenancy архітектура."
    },
    {
      title: "Чат-боти",
      description: "Розумні боти для автоматизації комунікації",
      icon: "💬",
      details: "Telegram, WhatsApp, веб-чати. AI-асистенти з GPT-4. Інтеграція з CRM."
    },
    {
      title: "Ігрова розробка",
      description: "Веб та мобільні ігри різних жанрів",
      icon: "🎮",
      details: "HTML5 ігри, Unity WebGL, казуальні та гіперказуальні ігри."
    },
    {
      title: "Веб-розробка",
      description: "Створення веб-сайтів та додатків під ключ",
      icon: "🌐",
      details: "Сучасні веб-рішення на React, Next.js, Node.js."
    },
    {
      title: "Консалтинг",
      description: "IT-консультації з питань цифровізації бізнесу",
      icon: "💡",
      details: "Аудит систем, технічна стратегія, code review."
    }
  ];

  const partners = [
    {
      name: "Genius.Space",
      logo: "/images/genius_space.svg",
      description: "Платформа для управління проєктами",
      website: "https://genius.space"
    },
    {
      name: "Park 36",
      logo: "https://wearepark36.com/wp-content/themes/WePark/img/logo-white.svg",
      description: "Креативний хаб та коворкінг",
      website: "https://wearepark36.com/"
    }
  ];

  const founders = [
    {
      name: "Vlad Kalion",
      role: "Co-Founder & Technical Lead",
      bio: "Понад 8 років досвіду в розробці. Спеціалізується на архітектурі складних систем.",
      linkedin: "https://www.linkedin.com/in/vlad-kalion-41999918a/",
      expertise: ["System Architecture", "Team Leadership", "Product Strategy"],
      photo: "https://media.licdn.com/dms/image/v2/D4E03AQElnMY1KRQt9Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727367213161?e=1762387200&v=beta&t=aup9P8eOX6E4mS3hnDBy53tEYFpruUaaLgsdCf8BjlA"
    },
    {
      name: "Maksym Kalion",
      role: "Co-Founder & CEO",
      bio: "Експерт у створенні цифрових продуктів та розвитку технологічного бізнесу.",
      linkedin: "https://www.linkedin.com/in/maksym-kalion-b772a8170/",
      expertise: ["Product Management", "Business Development", "Client Relations"],
      photo: "https://media.licdn.com/dms/image/v2/D4D03AQHTVHwSD7AkpQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727867952094?e=1762387200&v=beta&t=uSx7OOCpD8z4L9PhFzbl82UYGIJqLyqlrRp-20lfscw"
    }
  ];

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-zinc-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-zinc-800" onClick={e => e.stopPropagation()}>
          <div className="sticky top-0 bg-zinc-900 border-b border-zinc-800 p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded text-white">
              <X size={24} />
            </button>
          </div>
          <div className="p-6 text-gray-300">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        body { font-family: 'Inter', sans-serif; }

        .gradient-text {
          background: linear-gradient(90deg, #FF9933 0%, #6A00FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-border {
          position: relative;
          background: black;
          border-radius: 12px;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 12px;
          padding: 2px;
          background: linear-gradient(90deg, #FF9933, #6A00FF);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .btn-gradient {
          background: linear-gradient(90deg, #FF9933 0%, #6A00FF 100%);
          transition: all 0.3s;
          box-shadow: 0 0 20px rgba(255, 153, 51, 0.3);
        }

        .btn-gradient:hover {
          box-shadow: 0 0 40px rgba(106, 0, 255, 0.6);
          transform: translateY(-2px);
        }

        .card-hover {
          transition: all 0.3s;
          background: #111;
        }

        .card-hover:hover {
          background: #1a1a1a;
          box-shadow: 0 0 30px rgba(106, 0, 255, 0.3);
          transform: translateY(-4px);
        }

        .glow-purple {
          box-shadow: 0 0 20px rgba(106, 0, 255, 0.4);
        }
      `}</style>

      {/* Header */}
      <header className="border-b border-zinc-800 sticky top-0 bg-black z-40">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <img src="/logo_w.svg" alt="Kalion.Digital" className="h-8 md:h-10" />

            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-600 transition">Послуги</a>
              <a href="#partners" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-600 transition">Партнери</a>
              <a href="#founders" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-600 transition">Засновники</a>
              <a href="#contact" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-600 transition">Контакти</a>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a href="#services" className="text-gray-300 hover:text-white">Послуги</a>
              <a href="#partners" className="text-gray-300 hover:text-white">Партнери</a>
              <a href="#founders" className="text-gray-300 hover:text-white">Засновники</a>
              <a href="#contact" className="text-gray-300 hover:text-white">Контакти</a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero */}
      <section className="relative container mx-auto px-4 py-20 md:py-32">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10 pointer-events-none"
          style={{ backgroundImage: "url('/Hex.svg')" }}
        ></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Допомагаємо бізнесу створювати <span className="gradient-text">цифрові продукти</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10">
            AI автоматизація, SaaS розробка, чат-боти, ігри та веб-додатки
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.Calendly && window.Calendly.initPopupWidget({url: 'https://calendly.com/m-kalion/30min'})}
              className="inline-block btn-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg cursor-pointer"
            >
              Замовити консультацію
            </button>
            <a href="#services" className="inline-block border-2 border-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition">
              Наші послуги
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            До нас звертаються, коли <span className="gradient-text">потрібно</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card-hover p-8 rounded-xl border border-zinc-800">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-3">{service.description}</p>
                <p className="text-sm text-gray-500">{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Клієнти та <span className="gradient-text">партнери</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Довіра провідних компаній
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-16">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover p-6 rounded-lg border border-zinc-800 flex flex-col items-center justify-center min-h-[160px]"
              >
                <div className="mb-3 h-16 flex items-center">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-12 w-auto object-contain brightness-75 hover:brightness-100 transition"
                    />
                  ) : (
                    <span className="text-gray-500 font-bold">{partner.name}</span>
                  )}
                </div>
                <p className="text-xs text-gray-500 text-center">{partner.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section id="founders" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Засновники</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Досвід створення digital продуктів від ідеї до масштабування
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="card-hover p-8 rounded-xl border border-zinc-800">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 glow-purple">
                    <img
                      src={founder.photo}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                  <p className="gradient-text font-semibold">{founder.role}</p>
                </div>

                <p className="text-gray-400 mb-4 text-center">{founder.bio}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-500 mb-2 text-center">Експертиза:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {founder.expertise.map((skill, idx) => (
                      <span key={idx} className="bg-zinc-800 text-purple-400 text-xs px-3 py-1 rounded-full border border-purple-900">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-semibold">LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="gradient-text">Контакти</span>
            </h2>

            <div className="gradient-border p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">ФОП Каліон Максим Олександрович</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Юридична адреса:</div>
                    <div className="text-gray-400">03057, м. Київ, вул. Брайчевського, буд. 4, кв. 507</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-purple-500 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold">Телефон:</div>
                    <a href="tel:+380969999940" className="text-purple-400 hover:text-purple-300">
                      +380 96 999 99 40
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-purple-500 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold">Email:</div>
                    <a href="mailto:hello@kalion.digital" className="text-purple-400 hover:text-purple-300">
                      hello@kalion.digital
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <div className="text-sm text-gray-400">
                    <div><strong>ІПН:</strong> 3438113235</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <img src="/logo_w.svg" alt="Kalion.Digital" className="h-8 mb-4 mx-auto md:mx-0" />
              <div className="text-sm text-gray-400 mb-2">
                Допомагаємо бізнесу створювати цифрові продукти
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold mb-3">Контакти</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="tel:+380969999940" className="text-gray-400 hover:text-purple-400 transition flex items-center justify-center md:justify-start gap-2">
                    <Phone size={16} />
                    <span>+380 96 999 99 40</span>
                  </a>
                </div>
                <div>
                  <a href="mailto:hello@kalion.digital" className="text-gray-400 hover:text-purple-400 transition flex items-center justify-center md:justify-start gap-2">
                    <Mail size={16} />
                    <span>hello@kalion.digital</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Legal */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold mb-3">Юридична інформація</h3>
              <div className="space-y-1 text-sm text-gray-400 mb-3">
                <div>ФОП Каліон Максим Олександрович</div>
                <div>ІПН: 3438113235</div>
              </div>
              <div className="flex flex-col items-center md:items-start gap-2 text-sm">
                <button onClick={() => setActiveModal('terms')} className="text-gray-400 hover:text-purple-400 transition">
                  Правила та умови
                </button>
                <button onClick={() => setActiveModal('refund')} className="text-gray-400 hover:text-purple-400 transition">
                  Політика повернення
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-zinc-800 pt-6 text-center">
            <div className="text-sm text-gray-500">
              © 2025 Kalion.Digital. Всі права захищені.
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal isOpen={activeModal === 'terms'} onClose={() => setActiveModal(null)} title="Правила та умови">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3 text-white">1. Загальні положення</h3>
            <p className="text-gray-300 mb-4">
              Ці Правила та умови регулюють відносини між ФОП Каліон Максим Олександрович
              та клієнтами при наданні послуг.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-white">2. Послуги</h3>
            <p className="mb-2 text-gray-300">Виконавець надає наступні послуги:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-1">
              <li>AI автоматизація бізнес-процесів</li>
              <li>Розробка SaaS продуктів</li>
              <li>Створення чат-ботів</li>
              <li>Розробка веб та мобільних ігор</li>
              <li>Веб-розробка (сайти та додатки)</li>
              <li>IT-консультації</li>
              <li>Проведення освітніх курсів</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-white">3. Умови оплати</h3>
            <p className="mb-2 text-gray-300">Прийняті способи оплати:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-1">
              <li>Банківські картки Visa, MasterCard</li>
              <li>Privat24</li>
              <li>Безготівковий розрахунок (UAH)</li>
            </ul>
            <p className="mb-4 text-gray-300">
              Оплата здійснюється через платіжну систему WayForPay.
              Комісія платіжної системи (2%) включена у вартість послуг.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-white">4. Відповідальність</h3>
            <p className="mb-4 text-gray-300">
              Виконавець несе відповідальність за якість наданих послуг відповідно до
              законодавства України. Клієнт несе відповідальність за достовірність наданих даних.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-white">5. Контактна інформація</h3>
            <p className="text-gray-300 space-y-1">
              <div>ФОП Каліон Максим Олександрович</div>
              <div>ІПН: 3438113235</div>
              <div>Адреса: 03057, м. Київ, вул. Брайчевського, 4, кв. 507</div>
              <div>Телефон: +380 96 999 99 40</div>
              <div>Email: hello@kalion.digital</div>
            </p>
          </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'refund'} onClose={() => setActiveModal(null)} title="Політика повернення коштів">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3 text-white">Цифрові продукти</h3>
            <p className="mb-2 text-gray-300">Повернення коштів можливе протягом 14 днів, якщо:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-1">
              <li>Продукт не відповідає опису</li>
              <li>Продукт має технічні проблеми, які неможливо усунути</li>
              <li>Клієнт не отримав доступ до продукту</li>
            </ul>
            <p className="mb-2 text-gray-300">Повернення НЕ здійснюється, якщо:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-1">
              <li>Продукт вже був завантажений або використаний</li>
              <li>Минуло більше 14 днів з моменту покупки</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-white">Освітні курси</h3>
            <p className="mb-2 text-gray-300">Повернення можливе протягом 7 днів, якщо:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-1">
              <li>Не переглянуто більше 20% матеріалів курсу</li>
              <li>Курс не відповідає заявленому опису</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-white">Консультаційні послуги</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-1">
              <li>Відмова за 24+ години до консультації — повне повернення</li>
              <li>Відмова менш ніж за 24 години — повернення не здійснюється</li>
              <li>Якщо консультація не відбулася з вини виконавця — повне повернення</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-white">Веб-розробка та індивідуальні проекти</h3>
            <p className="mb-4 text-gray-300">
              Умови повернення визначаються індивідуально у договорі на проект.
              Повернення передоплати можливе до початку робіт, за вирахуванням 10% організаційних витрат.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-white">Процедура повернення</h3>
            <ol className="list-decimal pl-6 mb-4 text-gray-300 space-y-2">
              <li>Надішліть запит на: hello@kalion.digital</li>
              <li>Вкажіть: номер замовлення, дату покупки, причину повернення</li>
              <li>Очікуйте розгляду протягом 3 робочих днів</li>
              <li>При схваленні — кошти повертаються протягом 10 робочих днів</li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-white">Контакти</h3>
            <p className="text-gray-300 space-y-1">
              <div>Email: hello@kalion.digital</div>
              <div>Телефон: +380 96 999 99 40</div>
              <div>Час роботи: Пн-Пт, 9:00-18:00 (Київ)</div>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default KalionDigital;
