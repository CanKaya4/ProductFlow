import axios from "axios";
import { Product,ProductCreateDto,ProductUpdateDto } from "@/types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const productService = {
    getAll: async (): Promise<Product[]> => {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    },
    getById: async (id: number): Promise<Product> => {
        const response = await axios.get(`${API_URL}/products/${id}`);
        return response.data;
    },
    create: async (product: ProductCreateDto): Promise<void> => {
        await axios.post(`${API_URL}/products`, product);
    },
    update: async (product: ProductUpdateDto): Promise<void> => {
        
        await axios.put(`${API_URL}/products/${product.id}`, product);
    },
    delete: async (id: number): Promise<void> => {
        await axios.delete(`${API_URL}/products/${id}`);
    }
};