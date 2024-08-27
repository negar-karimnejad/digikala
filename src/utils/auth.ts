import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const generateAccessToken = (data) => {
  const token = sign({ ...data }, process.env.AccessTokenSecretKey, {
    expiresIn: "60d",
  });
  return token;
};

const generateRefreshToken = (data) => {
  const token = sign({ ...data }, process.env.RefreshTokenSecretKey, {
    expiresIn: "15d",
  });
  return token;
};

export { generateAccessToken, generateRefreshToken, hashPassword };
