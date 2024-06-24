import { Request, Response } from "express";
import { Order } from "../../models/Order";
import { io } from "../../..";

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    // Verificar se tanto table quanto products foram fornecidos
    if (!table || !products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({
        error: 'Both table and products are required and products must be a non-empty array!'
      });
    }

    // Criar o pedido
    const order = await Order.create({ table, products });

    // Popular os detalhes do pedido
    const orderDetails = await order.populate('products.product');

    // Emitir evento via socket
    io.emit('order@new', orderDetails);

    // Retornar o pedido criado
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Internal server error!'
    });
  }
}
