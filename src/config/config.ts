import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export const ENV = process.env.NODE_ENV;
export const PORT = process.env.SERVER_PORT;

export const PUBLIC_DIR = path.resolve(`${process.env.NODE_PATH}`, `${process.env.PUBLIC_DIR}`);
export const PUBLIC_ROUTE = `${process.env.PUBLIC_ROUTE}`;
