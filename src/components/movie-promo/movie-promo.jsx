// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-promo.prop-types';
// Constants and utils
import {Config, PathName} from '../../constants/consts';
import getDate from '../../utils/time/get-date';
// Components
import Header from '../header/header';
import Button from '../button/button';
import MoviePoster from '../movie-poster/movie-poster';
import Icon from '../icon/icon';
import Link from '../link/link';

function MoviePromo({specialMovie, changeMovieStatus}) {
  if (!specialMovie) { // In case of no movies
    return (
      <>
        <div className="movie-card__bg"/>
        <h1 className="visually-hidden">WTW</h1>
        <Header/>
      </>
    );
  }

  const {id, name, genre, releaseDate, poster, background, isInMyList} = specialMovie;
  const [backgroundColor, backgroundImage] = background;

  const handleMyListButtonClick = () => {
    changeMovieStatus(id, !isInMyList);
  };

  return (
    <section className="movie-card">
      <div className="movie-card__bg" style={{backgroundColor}}>
        <img src={backgroundImage} alt={name}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header/>
      {!!specialMovie &&
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <MoviePoster className="movie-card__poster" src={poster} alt={name}/>
            <div className="movie-card__desc">
              <h2 className="movie-card__title"><Link to={PathName.MOVIE_PAGE + id}>{name}</Link></h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{getDate(Config.MOVIE_PROMO_RELEASE_DATE_FORMAT)(releaseDate)}</span>
              </p>
              <div className="movie-card__buttons">
                <Link to={PathName.WATCH + id} className="btn btn--play movie-card__button">
                  <Icon name="play-s" width="19" height="19"/>
                  <span>Play</span>
                </Link>
                <Button className="btn btn--list movie-card__button" onClick={handleMyListButtonClick}>
                  <Icon name={isInMyList ? `in-list` : `add`} width="20" height="20"/>
                  <span>My list</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  );
}

MoviePromo.propTypes = propTypes;

export default React.memo(MoviePromo);
