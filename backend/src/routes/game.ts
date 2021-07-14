import express, { Router } from 'express';
import { wordCheck } from '../controllers/wordCheck';

const gameRouter: Router = express.Router();

gameRouter.route('/wordcheck').get(wordCheck);

export default gameRouter;
