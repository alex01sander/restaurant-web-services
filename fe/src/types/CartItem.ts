import { Product } from "../Type/Product";



export interface CartItem {
    product: Product;
    quantity: number;
    selectedIngredients: string[];  // Adicionando ingredientes selecionados
}
