import { accessServices } from "../../services";
import { ExpressController } from "../../types";

export const login: ExpressController = async (req, res, next) => {
  try {
    const { email, token } = req.body;

    const response = await accessServices.login(email)

    res.cookie("disruptiveToken", response.info.token);
    res.status(200).json(response);
  } catch (error: any) {
    next(error)
  }
};

export const logout: ExpressController = async (req, res, next) => {
  try {
    const token = req.cookies.disruptiveToken;

    res.cookie("disruptiveToken", "", {
      expires: new Date(0),
      // httpOnly: true, // secure: true, 
    });

    res.status(200).json(await accessServices.logout(token));
  } catch (error) {
    console.error("Error to log out:", error);
    next(error)
  }
};

export const activateAccount: ExpressController = async (req, res, next) => {
  try {
    const { token } = req.params;
    res.status(200).json(await accessServices.activateNewAccount(token));
  } catch (error: any) {
    next(error)
  }
};

export const requestPasswordReset: ExpressController = async (req, res, next) => {
  try {
    const { email } = req.body;
    res.status(200).json(await accessServices.requestPasswordReset(email));
  } catch (error: any) {
    next
  }
};

export const updateUserSelf: ExpressController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { ...body } = req.body;
    res.status(200).json(await accessServices.updateSelf(id, body));
  } catch (error) {
    next(error)
  }
};

export const verifyCode: ExpressController = async (req, res, next) => {
  try {
    const { token } = req.params;
    const { code } = req.body;
    res.status(200).json(await accessServices.verifyCode(token, code))
  } catch (error: any) {
    next(error)
  }
};

export const resetPassword: ExpressController = async (req, res, next) => {
  try {
    const { token } = req.params;
    const { password } = req.body;
    res.status(200).json(await accessServices.resetPassword(token, password));
  } catch (error: any) {
    next()
  }
};

export const getUserInfo: ExpressController = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json(await accessServices.getUserInfo(id));
  } catch (error) {
    console.error("Error to get user:", error);
    next(error)
  }
};
