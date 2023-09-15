import "./Header.css";

export default function Main() {
  return (
    <main>
      <section className="content">
        <ul className="cards">
          <li className="card card_theme_dark-grey">
            <h2 className="card__title">КОМПЕТЕНЦИЯ</h2>
            <p className="card__text">
              Правовая поддержка предпринимательской деятельности.
            </p>
            <p className="card__text">Представление интересов в судах.</p>
          </li>
          <li className="card card_theme_light-blue">
            <h2 className="card__title">КОНТАКТЫ</h2>
            <p className="card__text">
              Россия
              <br />
              +7 (921) 942 36 97
              <br />
              +7 (952) 206 67 78
              <br />
              adviser@bk.ru
            </p>
            <p className="card__text">
              Узбекистан
              <br />
              +998 (90) 391 29 97
            </p>
          </li>
          <li className="card">
            <div className="card__title"></div>
            <div className="card__text"></div>
          </li>
          <li className="card card_theme_grey">
            <h2 className="card__title card_theme_grey">Фирма</h2>
            <p className="card__text card_theme_grey">
              Фирма образована в 1999 году в составе немецкого холдинга SP AG.
              По 2011 год обслуживала один из крупнейших проектов
              Санкт-Петербурга в области коммерческой недвижимости –
              строительство Торгового центра STOCKMANN на Невском пр. 114.
            </p>
            <div className="card__links">
              <a href="./about.html" className="card__link">
                читать далее
              </a>
            </div>
          </li>
          <li className="card card_theme_white">
            <h2 className="card__title card_theme_white">Аналитика</h2>
            <p className="card__text card__text_theme_white">
              Меры поддержки и льготы для российских IT-компаний по состоянию на
              июнь 2023 года
            </p>
            <div className="card__links">
              <a href="./analytics.html" className="card__link">
                читать далее
              </a>
            </div>
          </li>
          <li className="card">
            <div className="card__title"></div>
            <div className="card__text"></div>
          </li>
          <li className="card card_theme_grey">
            <h2 className="card__title card_theme_grey">Новости</h2>
            <p className="card__text card_theme_grey">
              Открытие представительства в Ташкенте.
              <br />
              <br />
              Сопровождение девелоперского greenfield проекта в Промышленном
              парке "Софийский".
              <br />
              <br />
              Выход на IT-рынок Узбекистана.
            </p>
            <div className="card__links">
              <a href="./news.html" className="card__link">
                читать далее
              </a>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
