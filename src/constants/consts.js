export const Config = {
  MOVIE_CARDS_COUNT_AT_START: 8,
  MOVIE_CARDS_COUNT_BY_LOAD: 8,
  MOVIE_SCORE_PRECISION: 3,
  MOVIE_LEVEL_MAP: {
    10: `Awesome`,
    7: `Very good`,
    5: `Good`,
    3: `Normal`,
    0: `Bad`
  },
  MOVIE_PROMO_RELEASE_DATE_FORMAT: `MMMM DD, YYYY`,
  MOVIE_DETAILS_RELEASE_DATE_FORMAT: `YYYY`,
  MOVIE_DETAILS_RUN_TIME_FORMAT: `H[h] m[m]`,
  REVIEW_DATE_FORMAT: `MMMM DD, YYYY`,
  MOVIE_DEFAULT_SCORE: 0,
  MOVIE_OVERVIEW_ACTORS_COUNT: 4,
  SIMILAR_MOVIES_COUNT: 4,
  VIDEO_PLAYER_PLAY_TIME_FORMAT: `HH:mm:ss`,
  VIDEO_PLAYER_DEFAULT_VOLUME: 1,
  VIDEO_PLAYER_IS_MUTED_ON_START: false,
  VIDEO_PLAYER_IS_PLAYING_ON_START: true,
  MOVIE_PREVIEW_DELAY_MS: 1000,
  MOVIE_PREVIEW_DEFAULT_VOLUME: 1,
  MOVIE_PREVIEW_IS_LOOPED: true,
  MOVIE_PREVIEW_IS_MUTED_ON_START: true,
  MOVIE_PREVIEW_IS_PLAYING_ON_START: true,
  GENRE_LIST_MAX_MOVIE_COUNT: 9,
  REQUEST_TIMEOUT: 5000,
  NOTIFICATION_TIMEOUT: 3000
};

export const NO_SPECIAL_MOVIE = -1;

export const PathName = {
  ROOT: `/`,
  MOVIE_FILTER: `/films`,
  MOVIE_PAGE: `/films/`,
  WATCH: `/watch/`,
  SIGN_IN: `/sign-in`,
  SERVER: `https://htmlacademy-react-3.appspot.com`
};

export const FilterName = {
  MOVIES: {
    ID: `FILTER_MOVIE_ID`,
    EXCEPT_ID: `FILTER_MOVIE_EXCEPT_ID`,
    GENRE: `FILTER_MOVIE_GENRE`
  },
  TEAM: {
    ROLE: `FILTER_TEAM_ROLE`
  },
  REVIEWS: {
    ID: `FILTER_REVIEW_ID`
  },
  USERS: {
    ID: `FILTER_USER_ID`
  }
};

export const SelectorName = {
  MOVIES: {
    GENRES: `SELECTOR_MOVIES_GENRES`
  },
  MOVIE: {
    TEAM: `SELECTOR_MOVIE_TEAM`,
    RATINGS: `SELECTOR_MOVIE_RATINGS`
  }
};

export const ConverterName = {
  RATING: {
    LEVEL: `CONVERTER_RATING_LEVEL`
  }
};

export const AdapterName = {
  MOVIE: `ADAPTER_MOVIE`
};

export const KeyCode = {
  ESC: `Escape`
};

export const AuthorizationStatus = {
  AUTHORIZED: `AUTHORIZED`,
  UNAUTHORIZED: `UNAUTHORIZED`
};
