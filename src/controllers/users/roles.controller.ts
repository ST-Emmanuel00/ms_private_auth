import { ExpressController, PaginationParams } from "../../types";
import { roleServices } from "../../services";
import { getDataFile } from "../../services/Roles";

export const getOneRole: ExpressController = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json(await roleServices.getOne(id));
  } catch (error) {
    next(error);
  }
};

export const getAllRoles: ExpressController = async (req, res, next) => {
  try {
    let paginationParams: PaginationParams = req.query;
    res.status(200).json(await roleServices.getAll(paginationParams));
  } catch (error: any) {
    next(error);
  }
};

export const createRole: ExpressController = async (req, res, next) => {
  try {
    const body = req.body;
    res.status(200).json(await roleServices.createRoleWithPermissions(body));
  } catch (error: any) {
    next(error);
  }
};

export const searchRoles: ExpressController = async (req, res, next) => {
  try {
    const searchOptions = req.query;
    await roleServices.search(searchOptions);
    res.status(200).json(await roleServices.search(searchOptions));
  } catch (error: any) {
    next(error);
  }
};

export const toggleRoleStatus: ExpressController = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json(await roleServices.toggleStatus(id));
  } catch (error) {
    next(error);
  }
};

export const updateRole: ExpressController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    res.status(200).json(await roleServices.update(id, body));
  } catch (error) {
    next(error);
  }
};

export const deleteRole: ExpressController = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json(await roleServices.deleteRoleId(id));
  } catch (error) {
    next(error);
  }
};
export const getPermissionsByRoleId: ExpressController = async (req, res, next) => {
  try {
    const { roleId } = req.params;
    res.status(200).json(await roleServices.getPermissionsByRoleId(roleId));
  } catch (error) {
    next(error);
  }
};

export const togglePermissionStatus: ExpressController = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json(await roleServices.toggleStatus(id));
  } catch (error) {
    next(error);
  }
};

export const getDataExcel: ExpressController = async (req, res, next) => {

  try {
    const { excelFile, deleteFile } = await getDataFile()
    res.download(excelFile, deleteFile);
  } catch (error) {
    next(error)
  }


}
