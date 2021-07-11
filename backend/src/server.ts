import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
// Routers
import gameRouter from './routes/game';

dotenv.config({ path: 'config.env' });

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// Routers
app.use('/api/v1/game', gameRouter);

const PORT = (process.env.PORT as unknown as number) || 80;

app.listen(PORT, (): void => {
  if (process.env.NODE_ENV === 'development')
    console.log(
      `Server is up and running @ http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
    );
});
