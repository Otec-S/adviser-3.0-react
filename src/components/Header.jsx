import "./Header.css";

export default function Header() {
  return (
    <header class="header">
      <h1 class="header__title">
        <a href="./index.html" class="header__title-link">
          Юридическая фирма "Эдвайзер"
        </a>
      </h1>
      <nav class="nav">
        <a href="#" class="nav__title nav__title_active">
          главная
        </a>
        <a href="./about.html" class="nav__title">
          о фирме
        </a>
        <a href="./news.html" class="nav__title">
          новости
        </a>
        <a href="./analytics.html" class="nav__title">
          аналитика
        </a>
        <a href="./service.html" class="nav__title">
          услуги
        </a>
        <a href="./clients.html" class="nav__title">
          клиенты
        </a>
        <a href="./contacts.html" class="nav__title">
          контакты
        </a>
      </nav>
    </header>
  );
}
