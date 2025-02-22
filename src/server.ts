import 'dotenv/config'
import express, { json } from 'express';
import cors from 'cors'

import { routes } from './routes';
import { setupMongo } from './database/index';
import { errorHandler } from './middlewares/error-handler.middleware';

setupMongo().then(() => {
    const app = express();

    app.use(
        cors({
        origin: process.env.FRONT_URL
    }))
    app.use(json());
    app.use(routes);
    app.use(errorHandler);

    app.listen(3333, () => console.log('App is running at port 3333!'));
})

