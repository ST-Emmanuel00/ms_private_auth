import { exploreServices } from "../../services";
import { ExpressController } from "../../types";

export const searchAll: ExpressController = async (req, res, next) => {
    try {
      const searchTerm = req.query.searchTerm as string | undefined; 
      res.status(200).json(await exploreServices.searchAll(searchTerm));
    } catch (error: any) {
      next(error)
    }
  };