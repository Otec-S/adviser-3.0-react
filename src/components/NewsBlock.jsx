import "./NewsBlock.css";


export default function NewsBlock({newsBlockPhoto, newsBlockPhotoAlt, newsBlockText}) {
  return (
    <>
      <div class="block__description">
        <div class="block__photo-place">
          <img
            class="block__photo"
            src={newsBlockPhoto}
            alt={newsBlockPhotoAlt}
          />
        </div>
        <p class="block__text">
          {newsBlockText}
        </p>
      </div>
    </>
  );
}
