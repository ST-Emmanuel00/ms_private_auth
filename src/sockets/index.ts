import { Socket } from "socket.io";
import * as usersSockets from "./Users";

export const socketEvents = (io: any) => {
  io.on('connection', async (socket: Socket) => {

    await usersSockets.emitUsersOnline(io, socket);

    socket.on('disconnect', async () => {

      await usersSockets.emitUsersOnline(io, socket);

    });
  })

};
