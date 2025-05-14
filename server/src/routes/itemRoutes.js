import express from 'express';
import { authenticateToken, authorizeRoles, debugToken, sanitizeUserData } from '../middlewares/authMiddlewares.js';
import { getItems, createItem, updateItem, deleteItem, getItemsById } from '../controllers/itemController.js';
const itemRouter = express.Router();


itemRouter.get('/', getItems);
itemRouter.get('/:id', getItemsById);
itemRouter.post('/', createItem);
itemRouter.put('/:id', updateItem);
itemRouter.delete('/:id', deleteItem);

export default itemRouter;