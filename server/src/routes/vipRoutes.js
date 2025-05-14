import express from 'express';
const vipRouter = express.Router();
import {getVipItems, getVipItemsById ,createVipItem, deleteVipItems, updateVipItem } from '../controllers/vipController.js';

vipRouter.get('/', getVipItems);
vipRouter.get('/:id', getVipItemsById);
vipRouter.post('/', createVipItem);
vipRouter.put('/:id', updateVipItem);
vipRouter.delete('/:id', deleteVipItems);

export default vipRouter