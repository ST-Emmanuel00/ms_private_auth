import { PrismaClient } from "@prisma/client";
import { envs } from "./env.config";

export const db = new PrismaClient();
export const connectDB = async () => {
  try {
    await db.$connect();
    console.log(`Successful connection to the PostgreSQL ${envs.NODE_ENV} database`);

  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  } 
};
