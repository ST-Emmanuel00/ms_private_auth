import { db, connectDB } from "./db.config";
import { emailServices } from "./email.config";
import { envs } from "./env.config";
import { corsOptions } from './cors.config';
import { socketConfig } from './sockets.config';

export { db, emailServices, connectDB, socketConfig, envs, corsOptions };
