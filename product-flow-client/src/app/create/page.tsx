'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { productService } from '@/services/productService';
import { ProductCreateDto } from '@/types/product';
import Link from 'next/link';
export default function CreateProductPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState<ProductCreateDto>({
        name: '',
        productCode: '',
        price: 0,
        quantity: 0 
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await productService.create(product);
            router.push('/');  
        } catch (error) {
            console.error("Ekleme hatası:", error);
            alert("Ürün eklenirken bir hata oluştu.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="container mx-auto p-8 max-w-lg">
            <div className="mb-6">
                <Link href="/" className="text-blue-600 hover:underline">← Listeye Dön</Link>
                <h1 className="text-2xl font-bold mt-2">Yeni Ürün Ekle</h1>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Ürün Adı</label>
                    <input
                        type="text"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        value={product.name}
                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                    />
                </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Ürün Kodu</label>
                    <input
                        type="text"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        value={product.productCode}
                        onChange={(e) => setProduct({ ...product, productCode: e.target.value })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Fiyat (TL)</label>
                    <input
                        type="number"
                        step="0.01"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Miktar (Quantity)</label>
                    <input
                        type="number"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        value={product.quantity}
                        onChange={(e) => setProduct({ ...product, quantity: parseInt(e.target.value) })}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-300 transition"
                >
                    {loading ? 'Kaydediliyor...' : 'Ürünü Kaydet'}
                </button>
            </form>
        </main>
    );
}