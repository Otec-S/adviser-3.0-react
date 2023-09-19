import NewsBlock from "./NewsBlock";
import HotelUzbekistan from "../images/Hotel Uzbekistan.jpg";
import Sofiysky from "../images/Sofiysky.png";
import UzEmblem from "../images/Uz-emblem.png";

import "./NewsPage.css";

export default function NewsPage() {
  return (
    <section class="about about_news">
      <h2 class="block__title">Новости фирмы</h2>

      <NewsBlock
        newsBlockPhoto={HotelUzbekistan}
        newsBlockPhotoAlt="Отель Узбекистан"
        newsBlockText="Фирма открыла представительство в городе Ташкент Республики
          Узбекистан."
      />

      <NewsBlock
        newsBlockPhoto={Sofiysky}
        newsBlockPhotoAlt="Промышленный парк Софийский"
        newsBlockText="После проведения Due Diligence юристы фирмы обеспечили приобретение её клиентом производственного земельного участка в Промышленном парке 'Софийский'. Заключен договор на дальнейшее полное сопровождение проекта."
      />

      <NewsBlock
        newsBlockPhoto={UzEmblem}
        newsBlockPhotoAlt="Герб Узбекистана"
        newsBlockText="Фирма обеспечила выход её клиента на рынок IT-услуг Республики Узбекистан."
      />
    </section>
  );
}
