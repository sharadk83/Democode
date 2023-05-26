const jwt = require("jsonwebtoken");

module.exports = async (request, response, next) => {
  try {
    //   get token from authorization header
    const token = await request.headers.authorization.split(" ")[1];

    //check if the token matches supposed origin
    const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");

    // get the user details of the logged in user
    const user = await decodedToken;

    // pass the the user to the endpoints here
    request.user = user;

    // pass down functionality to the endpoint
    next();
    
  } catch (error) {
    response.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
