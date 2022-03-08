import 'dotenv/config'

export const ENV = process.env.NODE_ENV;
export const PORT = process.env.SERVER_PORT;

export const PUBLIC_DIR = process.env.PUBLIC_DIR;
export const PUBLIC_ROUTE = `${process.env.PUBLIC_ROUTE}`;
