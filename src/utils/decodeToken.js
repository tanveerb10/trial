// src/utils/decodeToken.js
import {jwtDecode} from 'jwt-decode';

export function getRolesAndAbilities(accessToken) {
  try {
    // Remove the "accessToken " prefix if present
    console.log(accessToken);
    const token = accessToken.startsWith('accessToken=')  ? accessToken.split(' ')[1] : accessToken;
    console.log(token)
    const decodedToken = jwtDecode(token);
    const roles = decodedToken.role;
    const abilities = decodedToken.ability;
console.log(roles);
    return { roles, abilities };
  } catch (error) {
    console.error('Failed to decode token:', error);
    return { roles: null, abilities: null };
  }
}
