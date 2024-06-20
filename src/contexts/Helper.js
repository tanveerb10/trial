// helpers.js
export const parseCookies = () => {
    if (typeof document !== 'undefined') {
      const cookieString = document.cookie;
      const cookies = {};
      cookieString.split(';').forEach(cookie => {
        const [key, value] = cookie.split('=');
        cookies[key.trim()] = decodeURIComponent(value);
      });
      return cookies;
    }
    return {};
  };
  
  export const parseToken = (token) => {
    if (token) {
      try {
        return JSON.parse(atob(token.split('.')[1]));
      } catch (e) {
        console.error('Invalid token format', e);
        return null;
      }
    }
    return null;
  };
  