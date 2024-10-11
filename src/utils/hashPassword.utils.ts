const bcrypt = require("bcrypt");

export const generateHashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};
