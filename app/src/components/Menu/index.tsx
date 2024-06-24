import { FlatList, TouchableOpacity } from "react-native";
import { Text } from "../../components/Text";
import { ProductContainer, ProductDetails, ProductImage, Separator, AddToCartButton } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import { useState } from "react";
import { Product } from "../../types/Product";

interface MenuProps{
    onAddToCart: (product: Product) => void;
    products: Product[];
}


export function Menu({onAddToCart, products}: MenuProps){
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<null | Product>(null)

    function handleOpenModal(product: Product){
        setIsModalVisible(true);
        setSelectedProduct(product);
    }
    return(
        <>
            <ProductModal
             visible={isModalVisible}
             onClose={() => setIsModalVisible(false)}
             product={selectedProduct}
             onAddToCart={onAddToCart}
            />
            <FlatList
                data={products}
                style={{marginTop: 32}}
                contentContainerStyle={{ paddingHorizontal: 24 }}
                keyExtractor={product => product._id}
                ItemSeparatorComponent={Separator}
                renderItem={( {item: product} ) => (
                <ProductContainer onPress={() => handleOpenModal(product)}>
                    <ProductImage

                        source={{
                         uri: `http://192.168.1.104:3001/uploads/${product.imagePath}`

                        }}
            />
                        <ProductDetails>
                            <Text weight="600">{product.name}</Text>
                            <Text size={14} color='#666' style={{ marginVertical: 8}}>{product.description}</Text>
                            <Text size={14} weight="600">{formatCurrency(product.price ?? 0)}</Text>
                        </ProductDetails>

                    <AddToCartButton onPress={() => onAddToCart(product)}>
                        <PlusCircle/>
                    </AddToCartButton>
                </ProductContainer>
            )}
        />
        </>
    )
}
