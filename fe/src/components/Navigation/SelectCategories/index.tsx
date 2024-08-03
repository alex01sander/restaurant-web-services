import { useState } from 'react';
import { CategoryContainer, Container, Icon } from './styles';
import categories from '../../../mocks/categories';

interface CategoriesProps {
    onSelectCategory: (categoryId: string) => Promise<void>;
}

export function SelectCategories({ onSelectCategory }: CategoriesProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const handleSelectCategory = (categoryId: string) => {
        const newSelection = selectedCategory === categoryId ? '' : categoryId;
        setSelectedCategory(newSelection);
        onSelectCategory(newSelection);
    };

    return (
        <Container>
            {categories.map(category => {
                const isSelected = selectedCategory === category._id;

                return (
                    <CategoryContainer
                        key={category._id}
                        onClick={() => handleSelectCategory(category._id)}
                        isSelected={isSelected}
                    >
                        <Icon>
                            <span>{category.icon}</span>
                        </Icon>
                        <span>{category.name}</span>
                    </CategoryContainer>
                );
            })}
        </Container>
    );
}
