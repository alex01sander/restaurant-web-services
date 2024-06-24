import { categories } from '../../mocks/categories';
import { CategoryContainer, Icon } from './styles';
import { Text } from "../../components/Text";
import { FlatList } from 'react-native';
import { useState } from 'react';
import { Category } from '../../types/Category';

interface CategoriesProps{
    categories: Category[];
    onSelectCategory: (categoryId: string) => Promise<void>
}


export function Categories({categories, onSelectCategory}: CategoriesProps) {

    const [selectedCategory, setSelectedCategory] = useState('')

    function handleSelectCategory(categoryId: string){
        const category = selectedCategory === categoryId ? '' : categoryId;

        onSelectCategory(category)
        setSelectedCategory(category)
    }

    return (

        <FlatList
                horizontal
                data={categories}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingRight: 24}}
                keyExtractor={category => category._id}
                renderItem={({ item: category}) => {
                    const isSelected = selectedCategory === category._id

                    return(
                    <CategoryContainer onPress={() =>handleSelectCategory(category._id)}>
                        <Icon>
                            <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
                        </Icon>
                        <Text size={14} weight='700' opacity={isSelected ? 1 : 0.5}>{category.name}</Text>
                    </CategoryContainer>

                    )
                }}
        />



    );
}
