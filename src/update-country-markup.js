import countryInfoTemplate from './template/template.hbs';
import countryListTemplate from './template/country-list.hbs';
import refs from './refs';

import { info, error } from '@pnotify/core';

function updateCountryMarkup(country) {
  if (country.length > 10) {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
    error({
      text: 'Too many matches found. Please enter a more specific query!',
      delay: 3000,
    });
    return;
  }
  if (country.length === 1) {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = countryInfoTemplate(country);
  } else {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = countryListTemplate(country);
  }
}
export default updateCountryMarkup;
