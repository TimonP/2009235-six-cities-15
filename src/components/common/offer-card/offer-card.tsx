import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { Offer } from '../../../types/offers';
import StarsRating from '../stars-rating/stars-rating';
import OfferPrice from '../offer-price/offer-price';
import PremiumLabel from '../premium-label/premium-label';
import BookmarkButton from '../bookmark-button/bookmark-button';

type OfferCardProps = {
  offer: Offer;
  classNamePrefix: 'cities' | 'favorite' |'near-places';
  onCardHover?: (id: string | null) => void;
}

function OfferCard({offer, classNamePrefix, onCardHover}: OfferCardProps): JSX.Element {
  const {isPremium, previewImage, price, rating, title, type, id, isFavorite} = offer;
  const offerURL = generatePath(AppRoute.Offer, {id});

  const handleOnMouseEnter = () => onCardHover ? onCardHover(id) : undefined;
  const handleOnMouseLeave = () => onCardHover ? onCardHover(null) : undefined;

  return (
    <article
      className={`${classNamePrefix}__card place-card`}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <PremiumLabel isPremium={isPremium} classNamePrefix='place-card'/>
      <div className={`${classNamePrefix}__image-wrapper place-card__image-wrapper`}>
        <Link to={offerURL}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <OfferPrice price={price} classNamePrefix='place-card'/>
          <BookmarkButton isFavorite={isFavorite}/>
        </div>
        <StarsRating rating={rating} classNamePrefix='place-card'/>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
