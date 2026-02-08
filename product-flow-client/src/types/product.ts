export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface ProductCreateDto {
    name: string;
    price: number;
    quantity: number;
}

export interface ProductUpdateDto {
    id: number;
    name: string;
    price: number;
    quantity: number;
}