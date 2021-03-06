import express from 'express';
import helmet from 'helmet';
import session, { MemoryStore } from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ENV, PUBLIC_DIR, PUBLIC_ROUTE } from './config/config';

// Import controllers
import userController from './controllers/userController';

// Configure Express app
const app = express();

const sessionConfigs = {
  resave: true,
  saveUninitialized: false,
  secret: 'Replace me!', // TODO: change!
  name: 'sessionId', // TODO: change!
  cookie: { secure: false },
  store: new MemoryStore() // TODO: use another store! Or another session middleware!
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
app.get('/', (req, res) => {
  // TODO: delete me!
  res.send('Hello World!')
})
app.use('/api/users', userController)

// Public route
if (PUBLIC_DIR) {
  app.use(PUBLIC_ROUTE, express.static(PUBLIC_DIR))
  console.log('Serving static resources from:', PUBLIC_DIR);
}

export default app;
