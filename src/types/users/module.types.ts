import { Permission } from "./permissions.types";

export type Module = {
    id: string;
    name: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    permissions: Permission[]; 
  };