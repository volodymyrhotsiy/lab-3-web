import express from 'express';
import { createCat, getCats, getCatById, deleteCat, editCat } from '../controllers/cats.js';

const router = express.Router();

router.get('/', getCats);

router.get('/:id', getCatById);

router.delete('/:id', deleteCat);

router.post('/', createCat);

router.patch('/:id', editCat);

export default router;