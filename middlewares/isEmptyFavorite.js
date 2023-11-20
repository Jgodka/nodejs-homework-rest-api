import { HttpError } from "../helpers/index.js";

const isEmptyFavorite = (req, res, next) => {
  const keys = Object.keys(req.body);
  console.log(req.body);
  if (!keys.length) {
    return next(HttpError(400, "missing field favorite"));
  }
  next();
};

export default isEmptyFavorite;
