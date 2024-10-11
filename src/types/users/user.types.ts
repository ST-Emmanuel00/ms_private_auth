
export interface Role {
    id: string;
    name: string;
    description: string;
    status: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface User {
    id: string;
    name: string;
    lastName: string;
    docType: string;
    docNumber: string;
    sex: string;
    email: string;
    phoneNumber: string;
    password: string;
    birthday: string;
    online: boolean;
    status: boolean;
    createdAt: string;
    updatedAt: string;
    roleId: string;
    role: Role; // Debe ser role
}


export type PartialUser = Partial<User>;

