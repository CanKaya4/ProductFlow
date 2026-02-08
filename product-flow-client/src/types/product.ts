export interface Product {
    id: number;
    name: string;
    productCode: string;
    price: number;
    quantity: number;
}

export interface ProductCreateDto {
    name: string;
    productCode: string;
    price: number;
    quantity: number;
}

export interface ProductUpdateDto {
    id: number;
    name: string;
    productCode: string;
    price: number;
    quantity: number;
}