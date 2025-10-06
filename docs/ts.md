Kalion.Digital - React Website
Simple React site with Monochrome design (black background, orange-purple gradient).
Prerequisites

Node.js 18+
npm or yarn

Quick Start
bash# Create React app
npx create-react-app kalion-digital
cd kalion-digital

# Install dependencies
npm install lucide-react

# Start development
npm start
Project Structure
kalion-digital/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js          (main component - paste artifact code here)
│   ├── App.css         (delete default styles)
│   ├── index.js        (keep default)
│   └── legal/
│       ├── terms.md    (create from LEGAL_TERMS.md)
│       └── refund.md   (create from LEGAL_REFUND.md)
├── package.json
└── README.md
Setup Steps

Replace src/App.js

Delete existing code
Copy full React component from artifact


Clean src/App.css

css   /* Delete all default styles */

Update public/index.html (optional)

html   <title>Kalion.Digital - Розробка цифрових продуктів</title>
   <meta name="description" content="AI автоматизація, SaaS розробка, чат-боти">

Add legal documents

Create src/legal/ folder
Add terms.md and refund.md from separate files



Configuration
Package.json - verify dependencies:
json{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  }
}
Deployment
Vercel (recommended):
bashnpm install -g vercel
vercel
Netlify:
bashnpm run build
# Drag /build folder to Netlify
GitHub Pages:
bashnpm install --save-dev gh-pages

# Add to package.json:
"homepage": "https://kalion.digital",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

npm run deploy
DNS Setup
Point kalion.digital to your hosting provider:

Vercel: Add domain in dashboard
Netlify: Add custom domain
GitHub Pages: CNAME file with domain

Environment Notes

No backend needed
No database required
Static site only
Client-side routing with hash (#)

Customization
Update founder photos: In App.js, replace:
javascriptphoto: "https://your-image-url.jpg"
Add more partners: In partners array, add objects:
javascript{
  name: "Company",
  logo: "logo-url",
  description: "Brief text",
  website: "https://..."
}
Troubleshooting
Styles not loading: Check Tailwind CDN in style tag (included in component)
Icons not showing: Verify lucide-react installed: npm list lucide-react
Build fails: Clear cache: rm -rf node_modules package-lock.json && npm install
Production Checklist

 Replace placeholder founder photos
 Update ІПН and legal address if needed
 Test all links (LinkedIn, email, phone)
 Test modals (Terms, Refund policy)
 Verify mobile responsive
 Add real partner logos
 Test contact links work
 Add Google Analytics (optional)


LEGAL_TERMS.md
Правила та умови
1. Загальні положення
Ці Правила та умови регулюють відносини між ФОП Каліон Максим Олександрович (надалі - "Виконавець") та клієнтами при наданні послуг.
2. Послуги
Виконавець надає наступні послуги:

AI автоматизація бізнес-процесів
Розробка SaaS продуктів
Створення чат-ботів
Розробка веб та мобільних ігор
Веб-розробка (сайти та додатки)
IT-консультації з питань цифровізації
Проведення освітніх курсів у сфері інформаційних технологій

3. Умови оплати
Прийняті способи оплати:

Банківські картки Visa, MasterCard
Privat24
Готівкові та безготівкові платежі (UAH)

Оплата здійснюється через платіжну систему WayForPay. Комісія платіжної системи (2%) включена у вартість послуг.
4. Умови надання послуг
Цифрові продукти: доступ надається протягом 24 годин після оплати
Веб-розробка: терміни визначаються індивідуально у договорі
Консультації: проводяться у домовлений час протягом 48 годин після оплати
Курси: доступ надається протягом 24 годин після оплати
5. Відповідальність
Виконавець несе відповідальність за якість наданих послуг відповідно до законодавства України. Клієнт несе відповідальність за достовірність наданих даних.
6. Контактна інформація
ФОП Каліон Максим Олександрович
ІПН: 3438113235
Адреса: 03057, м. Київ, вул. Брайчевського, буд. 4, кв. 507
Телефон: +380 96 999 99 40
Email: maksym@kalion.digital

LEGAL_REFUND.md
Політика повернення коштів
Цифрові продукти
Повернення коштів можливе протягом 14 днів з моменту покупки, якщо:

Продукт не відповідає опису
Продукт має технічні проблеми, які неможливо усунути
Клієнт не отримав доступ до продукту

Повернення НЕ здійснюється, якщо:

Продукт вже був завантажений або використаний
Минуло більше 14 днів з моменту покупки

Освітні курси
Повернення можливе протягом 7 днів, якщо:

Не переглянуто більше 20% матеріалів курсу
Курс не відповідає заявленому опису

Після перегляду 20% матеріалів повернення не здійснюється.
Консультаційні послуги

Відмова не пізніше ніж за 24 години до консультації — повне повернення
Відмова менш ніж за 24 години — повернення не здійснюється
Якщо консультація не відбулася з вини виконавця — повне повернення

Веб-розробка та індивідуальні проекти
Умови повернення визначаються індивідуально у договорі на проект. Як правило, повернення передоплати можливе до початку робіт, за вирахуванням 10% організаційних витрат.
Процедура повернення

Надішліть запит на повернення на email: maksym@kalion.digital
Вкажіть: номер замовлення, дату покупки, причину повернення
Очікуйте розгляду протягом 3 робочих днів
При схваленні — кошти повертаються протягом 10 робочих днів на ту саму картку/рахунок

Строки повернення
Повернення коштів здійснюється протягом 10 робочих днів після схвалення запиту. Кошти повертаються тим же способом, яким була здійснена оплата.
Контакти
Email: maksym@kalion.digital
Телефон: +380 96 999 99 40
Час роботи: Пн-Пт, 9:00-18:00 (за київським часом)