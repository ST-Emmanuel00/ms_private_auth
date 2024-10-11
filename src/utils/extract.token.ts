import { Socket } from "socket.io";

export const extractToken = (socket: Socket): string | null => {
  if (socket?.handshake?.query?.disruptiveToken) {
    const token = Array.isArray(socket.handshake.query.disruptiveToken)
      ? socket.handshake.query.disruptiveToken[0]
      : socket.handshake.query.disruptiveToken;

    return token || null;
  } else {
    console.error("Token is missing or invalid");
    return null; 
  }
};
