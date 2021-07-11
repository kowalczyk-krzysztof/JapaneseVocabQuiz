import express, { Router } from 'express';
import { newWord } from '../controllers/newWord';
import { wordCheck } from '../controllers/wordCheck';

const gameRouter: Router = express.Router();

gameRouter.route('/newword').get(newWord);
gameRouter.route('/wordcheck/:word').get(wordCheck);

export default gameRouter;
