import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import FavoriteOfferCardList from '../../components/favorites-screen/favorite-offer-card-list/favorite-offer-card-list';
import { useAppSelector } from '../../hooks/redux';
import FavoritesEmpty from '../../components/favorites-screen/favorites-empty/favorites-empty';
import { getFavoritesOffers, getFavoritesOffersPageStatus } from '../../store/offers-data/selectors';
import Spinner from '../../components/common/spinner/spinner';


function FavoritesScreen(): JSX.Element {
  const favoritesOffers = useAppSelector(getFavoritesOffers);
  const favoritesOffersPageStatus = useAppSelector(getFavoritesOffersPageStatus);

  if (favoritesOffersPageStatus === 'fetching') {
    return <Spinner/>;
  }

  return (
    <>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      {
        !favoritesOffers.length ? <FavoritesEmpty/> : (
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoriteOfferCardList offers={favoritesOffers}/>
              </section>
            </div>
          </main>
        )
      }
      <Footer/>
    </>
  );
}

export default FavoritesScreen;
