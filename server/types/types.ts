type Info = {
    id: number,
    title: string;
    description: string;
}

export type Product = {
    id: number;
    name: string;
    price: number;
    volume: number;
    img?: string;
    typeId: number;
    brandId: number;
    info: Info
};