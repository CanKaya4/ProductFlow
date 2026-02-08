'use client';
import { useEffect, useState } from 'react';
import { Product } from '@/types/product';
import { productService } from '@/services/productService';
import ProductTable from '@/components/ProductTable';
import Link from 'next/link';
export default function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await productService.getAll();
                setProducts(data);
            } catch (error) {
                console.error("Ürünler yüklenirken hata oluştu:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <main className="container mx-auto p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Ürün Listesi</h1>
                <Link 
                    href="/create" 
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                >
                    Yeni Ürün Ekle
                </Link>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <p className="text-xl font-semibold">Yükleniyor...</p>
                </div>
            ) : (
                <ProductTable products={products} />
            )}
        </main>
    );
}