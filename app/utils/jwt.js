const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpiration, jwtRefreshExpiration } = require("../config");

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, jwtSecret, {
    expiresIn: jwtExpiration,
  });
  return token;
};

// const createRefreshToken = ({ payload }) => {
//   const refreshToken = jwt.sign(payload, jwtSecret, {
//     expiresIn: jwtRefreshExpiration,
//   });
//   return refreshToken;
// };

const isTokenValid = ({ token }) => jwt.verify(token, jwtSecret);

module.exports = {
  createJWT,
  isTokenValid,
};
