require('dotenv').config({ path: '.env.test' });

import { authenticate } from './utils/authentificate.utils';
import supertest from "supertest";
import App from "../src/server";
import { db } from "../src/config";

let api = supertest(App);
let token: string | null ;

beforeAll(async () => {
  token = await authenticate();
});

export { api, db, token, authenticate };
