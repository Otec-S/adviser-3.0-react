import "./AboutPartner.css";
import photoKuznetsov from "../images/Kuznetsov-portrait.png";

export default function AboutKuznetsov() {
  return (
    <section className="block">
      <h2 className="block__title">Советник в Европейском Союзе</h2>
      <div className="block__description">
        <div className="block__photo-place">
          <img
            className="block__photo"
            src={photoKuznetsov}
            alt="Портрет Кузнецов"
          />
        </div>
        <article className="block__text">
          <h2>Андрей Кузнецов</h2>
          <p>Андрей закончил юридический факультет МГУ (Москва) в 1991 г.</p>
          <p>
            C 1999 года работал в различных юридических и адвокатских фирмах в
            Финляндии.
          </p>
          <ul>
            <span className="block__list_header">
              Советник специализируется в следующих областях:
            </span>
            <li className="block__list">договорное право,</li>
            <li className="block__list">корпоративное и торговое право,</li>
            <li className="block__list">право информационных технологий,</li>
            <li className="block__list">законодательство о конкуренции,</li>
            <li className="block__list">
              законодательство Европейского Союза,
            </li>
            <li className="block__list">трудовое право,</li>
            <li className="block__list">
              юридическое сопровождение деятельности предприятий в целом.
            </li>
          </ul>
          <p>
            Андрей имеет также опыт преподавания в Финляндии и свободно владеет
            английским и финским языками.
          </p>
        </article>
      </div>
    </section>
  );
}
