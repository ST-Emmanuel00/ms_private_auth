import { db } from "../../config";
import { generateJWT } from "../generate.jwt.service";
import { Permission } from '../../types/users/permissions.types';

export const login = async (email: string) => {
    try {

        const user = await db.users.findUnique({
            where: {
                email: email,
            },
        });

        // const permissions = await db.permissions.findMany(
        //     {
        //         where: { roleId: user?.roleId }
        //     }
        // )

        const token = await generateJWT({ uuid: user?.id });

        return {
            message: `Welcome ${user?.name} ${user?.lastName}`,
            info: {
                id: user?.id,
                roleId: user?.roleId,
                token,
            }
        }
    } catch (error: any) {
        console.error("Error al iniciar sesion:", error);
        throw new Error("Failed to log in");
    }
};