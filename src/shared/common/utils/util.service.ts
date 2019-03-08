import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtileService {

  /**
     * Sets a cookie value for given key.
     * @param {string} key
     * @param {string} value 
     * @param {Date} expireDate (optional). If not specified the cookie will expire at the end of session.
     * @param {string} path (optional)
     */
  setCookieValue(key, value, expireDate, path, domain) {
    var cookieValue = encodeURIComponent(key) + '=';

    if (value) {
      cookieValue = cookieValue + encodeURIComponent(value);
    }

    if (expireDate) {
      cookieValue = cookieValue + "; expires=" + expireDate.toUTCString();
    }

    if (path) {
      cookieValue = cookieValue + "; path=" + path;
    }

    if (domain) {
      cookieValue = cookieValue + "; domain=" + domain;
    }

    document.cookie = cookieValue;
  };

  /**
   * Gets a cookie with given key.
   * @param {string} key
   * @returns {string} Cookie value or null
   */
  getCookieValue(key) {
    var equalities = document.cookie.split('; ');
    for (var i = 0; i < equalities.length; i++) {
      if (!equalities[i]) {
        continue;
      }

      var splitted = equalities[i].split('=');
      if (splitted.length != 2) {
        continue;
      }

      if (decodeURIComponent(splitted[0]) === key) {
        return decodeURIComponent(splitted[1] || '');
      }
    }

    return null;
  };

  /**
   * Deletes cookie for given key.
   * @param {string} key
   * @param {string} path (optional)
   */
  deleteCookie(key, path) {
    var cookieValue = encodeURIComponent(key) + '=';

    cookieValue = cookieValue + "; expires=" + (new Date(new Date().getTime() - 86400000)).toUTCString();

    if (path) {
      cookieValue = cookieValue + "; path=" + path;
    }

    document.cookie = cookieValue;
  }
  
}
