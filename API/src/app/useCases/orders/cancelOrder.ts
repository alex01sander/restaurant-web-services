import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function cancelOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params;

    // Verificar se o pedido existe antes de tentar excluí-lo
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).send("Pedido não encontrado");
    }

    // Excluir o pedido
    await Order.findByIdAndDelete(orderId);

    // Registrar o ID do pedido excluído (evitar logs sensíveis em produção)
    console.log("Pedido cancelado:", orderId);

    // Responder ao cliente com status 204 (No Content)
    res.sendStatus(204);
  } catch (error) {
    console.error("Erro ao cancelar pedido:", error);
    res.sendStatus(500);
  }
}
