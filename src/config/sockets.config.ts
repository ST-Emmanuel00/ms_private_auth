
import { Server } from 'socket.io';
import { corsOptions } from "./cors.config";

export const socketConfig = (server: any) => {
  const io = new Server(server, {
    cors: {
      origin: corsOptions.origin, 
      methods: corsOptions.methods,
    },
    
  });
  return io;
};

