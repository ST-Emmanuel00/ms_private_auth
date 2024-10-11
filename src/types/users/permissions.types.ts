import { Module } from "./module.types";
import { Role } from "./user.types";


export enum Privilege {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",

}

export type Permission = {
  id?: string;
  roleId: string;
  moduleId: string;
  status: boolean;
  privilege: Privilege;
  createdAt: Date;
  updatedAt: Date;
  role?: Role;
  module?: unknown;
};