import path from 'node:path'
import { Router } from "express";
import multer from 'multer'

import { listCategories} from './app/useCases/categories/listCategories'
import {createCategory} from './app/useCases/categories/createCategories'
import { listProducts } from "./app/useCases/products/listProducts";
import { createProduct } from './app/useCases/products/createProducts';
import { listProductsByCategories } from './app/useCases/categories/listProductsByCategories';
import { listOrders } from './app/useCases/orders/listOrder';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrdersStatus } from './app/useCases/orders/changeOrdersStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback){
      callback(null, path.resolve(__dirname, "..", 'uploads'));
    },
    filename(req, file, callback){
      callback(null, `${Date.now()}-${file.originalname}` )
    }
  })


})
// List categories
router.get('/categories', listCategories);

// Create categories
router.post('/categories', createCategory);

// List products
router.get('/products', listProducts);

// Crate products
router.post('/products', upload.single('image'), createProduct);

// Get products by category
router.get('/categories/:categoryId/products', listProductsByCategories);

// List orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrdersStatus);

// Delete/cancel order
router.delete('/orders/:orderId', cancelOrder);
