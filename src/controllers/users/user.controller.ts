
import { userServices } from "../../services";
import { ExpressController } from "../../types";


export const getAllUsers: ExpressController = async (req, res, next) => {
  try {
    let paginationParams = req.query;
    res.status(200).json(await userServices.getAll(paginationParams));
  } catch (error: any) {
    next(error)
  }
};



export const createNewUser: ExpressController = async (req, res, next) => {
  try {
    const { ...body } = req.body;
    res.status(200).json(await userServices.create(body));
  } catch (error: any) {
    next(error)
  }
};

export const searchManyUsers: ExpressController = async (req, res, next) => {
  try {
    const searchOptions = req.query;
    res.status(200).json(await userServices.searchUsers(searchOptions));
  } catch (error: any) {
    next(error)
  }
};

export const toggleUserStatus: ExpressController = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json(await userServices.toggleStatus(id));
  } catch (error) {
    next(error)
  }
};

export const updateUser: ExpressController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    res.status(200).json(await userServices.update(id, body));
  } catch (error) {
    next(error)
  }
};

export const deleteUser: ExpressController = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json(await userServices.deleteUserId(id));
  } catch (error) {
    next(error)
  }
};

export const getRoleList: ExpressController = async (req, res, next) => {
  try {
    const roles = await userServices.getList();
    res.status(200).json(roles);
  } catch (error) {
    next(error)
  }
};



export const getDataExcel: ExpressController = async (req, res, next) => {
  try {

    const { excelFile, deleteFile } = await userServices.getDataFile()

    res.download(excelFile, deleteFile);
  } catch (error) {
    next(error)
  }

};

