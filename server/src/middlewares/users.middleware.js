const jwt = require('jsonwebtoken');

require('dotenv').config();

const httpStatuses = require('../constants/httpStatuses');

async function authMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(httpStatuses.unauthorized).json({
          success: false,
          message: 'Invalid or expired token', // TODO move to a constant
          statusCode: httpStatuses.unauthorized,
        });
      }

      req.user = decoded;
      next();
    });
  } catch (error) {
    console.log(error);
    res.status(httpStatuses.serverError).json({
      success: false,
      message: error.message || somethingWentWrong,
      statusCode: httpStatuses.serverError,
    });
  }
}

module.exports = {
  authMiddleware,
};