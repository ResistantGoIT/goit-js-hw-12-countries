import './styles.css';

import { info, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import refs from './refs';
import fetchCountries from './fetchCountries';
import updateCountryMarkup from './update-country-markup';

const debounce = require('lodash.debounce');

refs.searchBar.addEventListener(
  'input',
  debounce(() => {
    const input = refs.searchBar.value;
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
    fetchCountries(input).then(country => updateCountryMarkup(country));
  }, 500),
);
