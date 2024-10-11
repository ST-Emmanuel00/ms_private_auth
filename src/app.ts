import http from "http";
import { connectDB, socketConfig } from "./config";
import app from "./server";
import { socketEvents } from "./sockets";
const PORT: string = process.env.PORT || "8000";

const main = async () => {
  try {
    const server = http.createServer(app);
    socketEvents(socketConfig(server))
    await connectDB();
    
    server.listen(PORT, () => {
      console.log(`Server running at port: ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

main();
