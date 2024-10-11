import jwt from 'jsonwebtoken';
import { Socket } from "socket.io";
import { JwtPayload } from "jsonwebtoken";
import { envs } from "../../config";

export const handleSocketAuthentication = (
    socket: Socket,
    secret: string = envs.JWT_SEED
): JwtPayload | null => {
    try {
        const token = Array.isArray(socket.handshake.query.disruptiveToken)
            ? socket.handshake.query.disruptiveToken[0]
            : socket.handshake.query.disruptiveToken;

        if (!token) {
            socket.emit('error', { message: "Authentication token is missing." });
            return null;
        }

        const decodedToken = jwt.verify(token, secret) as JwtPayload;

        if (!decodedToken || !decodedToken.uuid) {
            socket.emit('error', { message: "Failed to decode authentication token." });
            return null;
        }
        return decodedToken;
    } catch (err: any) {
        if (err.name === "TokenExpiredError") {
            socket.emit('error', { message: "Your session has expired. Please log in again." });
        } else {
            socket.emit('error', { message: "Authentication failed. Please log in again." });
        }
        socket.disconnect();
        return null;
    }
};
