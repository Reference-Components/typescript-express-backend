import { PORT, ENV } from './config/config';
import http from 'http';
import app from './app';

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server is running in ${ENV} on port ${PORT}!`);
});
