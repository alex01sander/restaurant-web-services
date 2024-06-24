import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function createCategory(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    // Verificar se tanto icon quanto name foram fornecidos
    if (!icon || !name) {
      return res.status(400).json({
        error: 'Both icon and name are required!'
      });
    }

    // Criar a categoria
    const category = await Category.create({ icon, name });

    res.json(category);
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error!'
    });
  }
}
