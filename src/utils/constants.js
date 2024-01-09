export const USER_AVATAR = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
    }
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const BG_URL ='https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg';

export const SUPPORTED_LANG = [
  {identifier: "en", name: "English"},
  {identifier: "hin", name: "Hindi"},
  {identifier: "spa", name: "Spanish"},
  {identifier: "jap", name: "Japanese"}
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const Movies_Genres = [
  { id: 28, name: "Action"},
  { id: 12, name: "Adventure"},
  { id: 16, name: "Animation"},
  { id: 35, name: "Comedy"},
  { id: 80, name: "Crime"},
  { id: 99, name: "Documentary"},
  { id: 18, name: "Drama"},
  { id: 10751, name: "Family"},
  { id: 14, name: "Fantasy"},
  { id: 36, name: "History"},
  { id: 27, name: "Horror"},
  { id: 10402, name: "Music"},
  { id: 9648, name: "Mystery"},
  { id: 10749, name: "Romance"},
  { id: 878, name: "Science Fiction"},
  { id: 10770, name: "TV Movie"},
  { id: 53, name: "Thriller"},
  { id: 10752, name: "War"},
  { id: 37, name: "Western" }
];

export const TVShows_Genres = [
  { id: 10759, name: "Action & Adventure"},
  { id: 16, name: "Animation"},
  { id: 35, name: "Comedy"},
  { id: 80, name: "Crime"},
  { id: 99, name: "Documentary"},
  { id: 18, name: "Drama"},
  { id: 10751, name: "Family"},
  { id: 10762, name: "Kids"},
  { id: 9648, name: "Mystery"},
  { id: 10763, name: "News"},
  { id: 10764, name: "Reality"},
  { id: 10765, name: "Sci-Fi & Fantasy"},
  { id: 10766, name: "Soap"},
  { id: 10767, name: "Talk"},
  { id: 10768, name: "War & Politics"},
  { id: 37, name: "Western" }
];

export const Genres = [
  { id: 28, name: "Action"},
  { id: 12, name: "Adventure"},
  { id: 10759, name: "Action & Adventure"},
  { id: 16, name: "Animation"},
  { id: 35, name: "Comedy"},
  { id: 80, name: "Crime"},
  { id: 99, name: "Documentary"},
  { id: 18, name: "Drama"},
  { id: 10751, name: "Family"},
  { id: 14, name: "Fantasy"},
  { id: 36, name: "History"},
  { id: 27, name: "Horror"},
  { id: 10762, name: "Kids"},
  { id: 10402, name: "Music"},
  { id: 9648, name: "Mystery"},
  { id: 10763, name: "News"},
  { id: 10764, name: "Reality"},
  { id: 10749, name: "Romance"},
  { id: 878, name: "Science Fiction"},
  { id: 10765, name: "Sci-Fi & Fantasy"},
  { id: 10766, name: "Soap"},
  { id: 10767, name: "Talk"},
  { id: 10770, name: "TV Movie"},
  { id: 53, name: "Thriller"},
  { id: 10752, name: "War"},
  { id: 10768, name: "War & Politics"},
  { id: 37, name: "Western" }
];