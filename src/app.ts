import express from 'express';
import helmet from 'helmet';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ENV, PUBLIC_DIR, PUBLIC_ROUTE } from './config/config';

// Import controllers
import exampleController from './controllers/exampleController';

// Configure Express app
const app = express();

const sessionConfigs = {
  resave: true,
  saveUninitialized: false,
  secret: '4w3S0m3S3cR3t!?!?! Replace me!', // TODO: change!
  name: 'sessionId',
  cookie: { secure: false }
};

// Production environment specific configs
if (ENV === 'production') {
  app.set('trust proxy', 1) // Trust first proxy
  sessionConfigs.cookie.secure = true // Serve secure cookies
}

// Middlewares
app.use(cors());
app.use(helmet());
app.use(session(sessionConfigs));
app.use(bodyParser.json());

// Route controllers
app.use('/api/example', exampleController)

// Public route
if (PUBLIC_DIR) {
  app.use(PUBLIC_ROUTE, express.static(PUBLIC_DIR))
}

export default app;
