import jwt from 'jsonwebtoken';
export function getTokenPayload(jwt) {
  return JSON.parse(atob(jwt.split('.')[1]))
}