import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function createProduct(req: Request, res: Response){
  try {
    // Verifica se o arquivo de imagem foi enviado corretamente
    const imagePath = req.file?.filename;
    if (!imagePath) {
      return res.status(400).json({ error: "Imagem do produto não recebida." });
    }

    // Extrai os dados do corpo da requisição
    const { name, description, price, category, ingredients } = req.body;

    // Validação dos dados recebidos
    if (!name || !description || !price || !category || !ingredients) {
      return res.status(400).json({ error: "Por favor, forneça todos os campos necessários." });
    }

    // Criação do produto no banco de dados
    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: JSON.parse(ingredients)
    });

    console.log("Produto criado:", product);

    // Retorna o produto criado como resposta
    res.status(200).json(product);

  } catch (error) {
    // Captura e trata erros
    console.error("Erro ao criar produto:", error);
    res.status(500).json({ error: "Ocorreu um erro ao criar o produto." });
  }
}
