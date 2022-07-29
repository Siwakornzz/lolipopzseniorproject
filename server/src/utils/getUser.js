import jwt from "jsonwebtoken";

const getUser = (token) => {
  // check if token is'nt parse
  if (!token) {
    return null;
  }
  // example of slit  token = "Bearer Adoltib" turn into -> [Bearer , Adoltib]

  const parsedToken = token.split(" ")[1];
  
  try {
    const decodedToken = jwt.verify(parsedToken, process.env.COOKIE_SECRET)

    return decodedToken.userId
  } catch (error) {
    return null 
  }
};

export default getUser
