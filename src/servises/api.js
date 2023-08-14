import PropTypes from 'prop-types';

const BASE_URl = 'https://api.themoviedb.org/';
const KEY = '35c7611c7985bed0f4b3c6955520cac4';

export const fetchQuery = async query => {
  const res = await fetch(`${BASE_URl}${query}api_key=${KEY}`);
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(new Error('error'));
};

fetchQuery.propTypes = {
  query: PropTypes.string.isRequired,
};