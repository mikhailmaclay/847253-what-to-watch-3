// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-overview.prop-types';
// Constants and utils
import {Config} from '../../constants/consts';
import pluralize from '../../utils/numbers/pluralize';
import padEndWithZero from '../../utils/strings/pad-end-with-zero';

const RATING_WORD_FORMS = [`rating`, `ratings`, `ratings`];
const DIRECTOR_WORD_FORMS = [`Director`, `Directors`, `Directors`];

function MovieOverview({rating, scoresCount, level, description, directors, actors}) {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{padEndWithZero(rating)}</div>
        <p className="movie-rating__meta">
          {!!scoresCount &&
            <span className="movie-rating__level">{level}</span>
          }
          <span className="movie-rating__count">{scoresCount ? `${scoresCount} ${pluralize(RATING_WORD_FORMS)(scoresCount)}` : `No ratings`}</span>
        </p>
      </div>
      <div className="movie-card__text">
        {description.map((sentence, index) => <p key={`${sentence.length}-${index}`}>{sentence}</p>)}
        <p className="movie-card__director"><b>{pluralize(DIRECTOR_WORD_FORMS)(directors.length)}: {directors.join(`, `)}</b></p>
        <p className="movie-card__starring"><b>Starring: {actors.slice(0, Config.MOVIE_OVERVIEW_ACTORS_COUNT).join(`, `)}{actors.length > Config.MOVIE_OVERVIEW_ACTORS_COUNT && ` and other`}</b></p>
      </div>
    </>
  );
}

MovieOverview.propTypes = propTypes;

export default React.memo(MovieOverview);
