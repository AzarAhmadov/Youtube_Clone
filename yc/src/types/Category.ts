export type CategoryButton = {
    name: string;
}

export type Category = {
    selectedCategory: string;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}