import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Phone, MapPin, ExternalLink, Linkedin } from 'lucide-react';
import SEO from '../components/SEO';

const VersionB = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      description: "Найбільша освітня платформа в Україні",
      website: "https://genius.space"
    },
    {
      name: "Park 36",
      logo: "https://wearepark36.com/wp-content/themes/WePark/img/logo-white.svg",
      description: "Креативна дизайн студія з ТОП-100 Іспанії",
      website: "https://wearepark36.com/"
    },
    {
      name: "TrailerValet",
      logo: "/images/logo_dark_theme_transparent@2x.png",
      description: "Система управління трейлерами в США",
      website: "https://trailervalet.com/"
    },
    {
      name: "Markupus",
      logo: "/images/markapus.svg",
      description: "Провідна WordPress агенція",
      website: "https://markupus.com/"
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

  return (
    <>
      <SEO
        title="Kalion.Digital - Розробка цифрових продуктів | AI автоматизація, SaaS, чат-боти"
        description="Допомагаємо бізнесу створювати цифрові продукти: AI автоматизація, SaaS розробка, чат-боти, веб та мобільні ігри. Професійна веб-розробка та IT-консалтинг в Україні."
        url="https://kalion.digital/version-b"
      />
      <div className="min-h-screen" style={{
        backgroundColor: '#0a0e0f',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      }}>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

        :root {
          --bg-primary: #0a0e0f;
          --bg-secondary: #151a1c;
          --accent-primary: #00d9a3;
          --accent-secondary: #00ffc4;
          --text-primary: #ffffff;
          --text-secondary: #8b9499;
          --border-color: #1f2629;
        }

        body { font-family: 'Inter', sans-serif; }

        .text-gradient-teal {
          background: linear-gradient(135deg, #00d9a3 0%, #00ffc4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .text-gradient-upstash {
          background: linear-gradient(
            to right,
            #00d9a3 0%,
            #00ffc4 25%,
            #7cffb8 50%,
            #b8ff8f 75%,
            #d4ff6f 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(45px, 8vw, 112px);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.04em;
        }

        .hero-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 400;
          color: #8b9499;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto 32px;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 60px 20px;
          }

          .hero-title {
            font-size: clamp(32px, 9.6vw, 45px);
            line-height: 1.0;
            letter-spacing: -0.03em;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .hero::before {
            width: 500px;
            height: 500px;
            top: -10%;
          }

          .hero::after {
            width: 600px;
            height: 400px;
            bottom: -20%;
          }

          .hero-grid {
            background-size: 40px 40px;
          }
        }

        .btn-teal {
          background: #00d9a3;
          color: #0a0e0f;
          padding: 16px 40px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-teal:hover {
          background: #00ffc4;
          box-shadow: 0 4px 20px rgba(0, 217, 163, 0.4);
          transform: translateY(-2px);
        }

        .btn-teal-outline {
          background: transparent;
          color: #00d9a3;
          border: 2px solid #00d9a3;
          padding: 12px 30px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-teal-outline:hover {
          background: #00d9a3;
          color: #0a0e0f;
          box-shadow: 0 4px 20px rgba(0, 217, 163, 0.3);
          transform: translateY(-2px);
        }

        .card-teal {
          background: #151a1c;
          border: 1px solid #1f2629;
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .card-teal:hover {
          border-color: #00d9a3;
          box-shadow: 0 8px 32px rgba(0, 217, 163, 0.1);
          transform: translateY(-4px);
        }

        .hero {
          position: relative;
          background: #0a0e0f;
          min-height: 90vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 80px 24px;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(
            circle,
            rgba(0, 217, 163, 0.15) 0%,
            rgba(0, 217, 163, 0.08) 25%,
            rgba(0, 217, 163, 0.03) 50%,
            transparent 70%
          );
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          z-index: 1;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: 50%;
          transform: translateX(-50%);
          width: 1000px;
          height: 600px;
          background: radial-gradient(
            ellipse,
            rgba(0, 255, 196, 0.1) 0%,
            rgba(123, 255, 184, 0.05) 30%,
            transparent 60%
          );
          filter: blur(80px);
          pointer-events: none;
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 217, 163, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 163, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 1;
          mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
        }

        .glow-teal {
          box-shadow: 0 0 40px rgba(0, 217, 163, 0.3);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>

      {/* Header */}
      <header style={{
        borderBottom: '1px solid #1f2629',
        position: 'sticky',
        top: 0,
        backgroundColor: '#0a0e0f',
        zIndex: 40
      }}>
        <nav className="container mx-auto px-4 py-6" style={{ maxWidth: '1400px' }}>
          <div className="flex justify-between items-center">
            <img src="/logo_w.svg" alt="Kalion.Digital" className="h-8 md:h-10" />

            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gradient-teal hover:opacity-80 transition" style={{ color: '#8b9499' }}>Послуги</a>
              <a href="#partners" className="text-gradient-teal hover:opacity-80 transition" style={{ color: '#8b9499' }}>Партнери</a>
              <a href="#founders" className="text-gradient-teal hover:opacity-80 transition" style={{ color: '#8b9499' }}>Засновники</a>
              <a href="#contact" className="text-gradient-teal hover:opacity-80 transition" style={{ color: '#8b9499' }}>Контакти</a>
              <Link to="/" className="text-sm px-4 py-2 rounded-lg" style={{ color: '#8b9499', border: '1px solid #1f2629' }}>Version A</Link>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <button
                style={{ color: '#ffffff' }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a href="#services" style={{ color: '#8b9499' }}>Послуги</a>
              <a href="#partners" style={{ color: '#8b9499' }}>Партнери</a>
              <a href="#founders" style={{ color: '#8b9499' }}>Засновники</a>
              <a href="#contact" style={{ color: '#8b9499' }}>Контакти</a>
              <Link to="/" style={{ color: '#8b9499' }}>Version A</Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-content container mx-auto text-center animate-fade-in-up" style={{ maxWidth: '1400px' }}>
          <h1 className="hero-title text-gradient-upstash mb-4">
            Допомагаємо бізнесу<br />створювати цифрові продукти
          </h1>
          <p className="hero-subtitle mb-8">
            AI автоматизація, SaaS розробка, чат-боти, ігри та веб-додатки
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.Calendly && window.Calendly.initPopupWidget({url: 'https://calendly.com/m-kalion/30min'})}
              className="btn-teal"
            >
              Замовити консультацію →
            </button>
            <a href="#services" className="btn-teal-outline">
              Наші послуги
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container mx-auto px-4" style={{ maxWidth: '1400px' }}>
          <h2 className="font-bold text-center mb-16" style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            color: '#ffffff',
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif"
          }}>
            До нас звертаються, коли <span className="text-gradient-teal">потрібно</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card-teal">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#00d9a3' }}>{service.title}</h3>
                <p className="mb-3" style={{ color: '#ffffff' }}>{service.description}</p>
                <p className="text-sm" style={{ color: '#8b9499' }}>{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#0d1214' }}>
        <div className="container mx-auto px-4" style={{ maxWidth: '1400px' }}>
          <h2 className="font-bold text-center mb-4" style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            color: '#ffffff',
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif"
          }}>
            Клієнти та <span className="text-gradient-teal">партнери</span>
          </h2>
          <p className="text-center mb-12 text-lg" style={{ color: '#8b9499' }}>
            Довіра провідних компаній
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="card-teal flex flex-col items-center justify-center"
                style={{ minHeight: '160px', padding: '24px' }}
              >
                <div className="mb-3 h-16 flex items-center justify-center w-full">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      loading="lazy"
                      className="max-h-12 max-w-full object-contain hover:scale-110 transition-transform"
                    />
                  ) : (
                    <span style={{ color: '#8b9499' }} className="font-bold">{partner.name}</span>
                  )}
                </div>
                <p className="text-xs text-center" style={{ color: '#8b9499' }}>{partner.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section id="founders" className="py-20" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container mx-auto px-4" style={{ maxWidth: '1400px' }}>
          <h2 className="font-bold text-center mb-4 text-gradient-teal" style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif"
          }}>
            Засновники
          </h2>
          <p className="text-center mb-12 text-lg" style={{ color: '#8b9499' }}>
            Досвід створення digital продуктів від ідеї до масштабування
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="card-teal">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 glow-teal">
                    <img
                      src={founder.photo}
                      alt={`${founder.name} - ${founder.role}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-1" style={{ color: '#ffffff' }}>{founder.name}</h3>
                  <p className="font-semibold text-gradient-teal">{founder.role}</p>
                </div>

                <p className="mb-4 text-center" style={{ color: '#8b9499' }}>{founder.bio}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2 text-center" style={{ color: '#8b9499' }}>Експертиза:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {founder.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          background: 'rgba(0, 217, 163, 0.15)',
                          color: '#00d9a3',
                          border: '1px solid rgba(0, 217, 163, 0.3)'
                        }}
                      >
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
                    className="inline-flex items-center gap-2 hover:opacity-80 transition"
                    style={{ color: '#00d9a3' }}
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
      <section id="contact" className="py-20" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#0d1214' }}>
        <div className="container mx-auto px-4" style={{ maxWidth: '1400px' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-center mb-12 text-gradient-teal" style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif"
            }}>
              Контакти
            </h2>

            <div className="card-teal" style={{ border: '1px solid #00d9a3' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#ffffff' }}>ФОП Каліон Максим Олександрович</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin style={{ color: '#00d9a3' }} className="flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold" style={{ color: '#ffffff' }}>Юридична адреса:</div>
                    <div style={{ color: '#8b9499' }}>03057, м. Київ, вул. Брайчевського, буд. 4, кв. 507</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone style={{ color: '#00d9a3' }} className="flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold" style={{ color: '#ffffff' }}>Телефон:</div>
                    <a href="tel:+380969999940" className="hover:opacity-80" style={{ color: '#00d9a3' }}>
                      +380 96 999 99 40
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail style={{ color: '#00d9a3' }} className="flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold" style={{ color: '#ffffff' }}>Email:</div>
                    <a href="mailto:hello@kalion.digital" className="hover:opacity-80" style={{ color: '#00d9a3' }}>
                      hello@kalion.digital
                    </a>
                  </div>
                </div>

                <div className="pt-4" style={{ borderTop: '1px solid #1f2629' }}>
                  <div className="text-sm" style={{ color: '#8b9499' }}>
                    <div><strong>ІПН:</strong> 3438113235</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: '#0a0e0f', borderTop: '1px solid #1f2629' }}>
        <div className="container mx-auto px-4" style={{ maxWidth: '1400px' }}>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <img src="/logo_w.svg" alt="Kalion.Digital" className="h-8 mb-4 mx-auto md:mx-0" />
              <div className="text-sm mb-2" style={{ color: '#8b9499' }}>
                Допомагаємо бізнесу створювати цифрові продукти
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h3 className="font-semibold mb-3" style={{ color: '#ffffff' }}>Контакти</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="tel:+380969999940" className="hover:text-teal-400 transition flex items-center justify-center md:justify-end gap-2" style={{ color: '#8b9499' }}>
                    <Phone size={16} />
                    <span>+380 96 999 99 40</span>
                  </a>
                </div>
                <div>
                  <a href="mailto:hello@kalion.digital" className="hover:text-teal-400 transition flex items-center justify-center md:justify-end gap-2" style={{ color: '#8b9499' }}>
                    <Mail size={16} />
                    <span>hello@kalion.digital</span>
                  </a>
                </div>
                <div>
                  <a href="https://linkedin.com/company/monochrome-tech/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition flex items-center justify-center md:justify-end gap-2" style={{ color: '#8b9499' }}>
                    <Linkedin size={16} />
                    <span>monochrome-tech</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Legal */}
            <div className="text-center md:text-right">
              <h3 className="font-semibold mb-3" style={{ color: '#ffffff' }}>Юридична інформація</h3>
              <div className="space-y-1 text-sm mb-3" style={{ color: '#8b9499' }}>
                <div>ФОП Каліон Максим Олександрович</div>
                <div>ІПН: 3438113235</div>
              </div>
              <div className="flex flex-col items-center md:items-end gap-2 text-sm">
                <Link to="/terms" className="hover:opacity-80 transition underline" style={{ color: '#8b9499' }}>
                  Правила та умови
                </Link>
                <Link to="/refund" className="hover:opacity-80 transition underline" style={{ color: '#8b9499' }}>
                  Політика повернення
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 text-center" style={{ borderTop: '1px solid #1f2629' }}>
            <div className="text-sm" style={{ color: '#8b9499' }}>
              © 2025 Kalion.Digital. Всі права захищені.
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};

export default VersionB;
