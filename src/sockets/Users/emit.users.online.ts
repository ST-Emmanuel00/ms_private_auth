import { Socket } from "socket.io";
import { db } from "../../config";
import { handleSocketAuthentication } from "../../utils";

export const emitUsersOnline = async (io: any, socket: Socket) => {

    const decode = handleSocketAuthentication(socket);

    if (decode) {
        socket.emit('errors', { message: "Sockets auth error." })
    }

    const user = await db.users.findFirst({
        where: { id: decode?.uuid },
    });

    await db.users.update({
        where: { id: user?.id },
        data: { online: socket.connected },
    });


    const usersOnline = await db.users.findMany({
        where: { online: true },
        select: {
            id: true, 
            name: true,
            lastName: true,
            email: true,
            phoneNumber: true,
            role: {
                select: {
                    name: true
                }
            },
            online: true
        },
        // orderBy: {
        //     online: 'desc',
        // },
    });


    io.emit('usersOnline', usersOnline)
}




