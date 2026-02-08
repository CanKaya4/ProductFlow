'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { productService } from '@/services/productService';
import { ProductUpdateDto } from '@/types/product';
import Link from 'next/link';
export default function EditProductPage() {
    const router = useRouter();
    const { id } = useParams();  
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState<ProductUpdateDto>({
        id: Number(id),
        name: '',
        productCode: '',
        price: 0,
        quantity: 0
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await productService.getById(Number(id));
                setProduct(data); 
            } catch (error) {
                console.error("Ürün yüklenemedi:", error);
                alert("Ürün bilgileri getirilemedi.");
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await productService.update(product);
            alert("Ürün başarıyla güncellendi!");
            router.push('/');
        } catch (error) {
            console.error("Güncelleme hatası:", error);
            alert("Güncelleme sırasında bir hata oluştu.");
        }
    };

    if (loading) return <div className="p-8">Yükleniyor...</div>;

    return (
        
        <main className="container mx-auto p-8 max-w-lg">
              <div className="mb-6">
                <Link href="/" className="text-blue-600 hover:underline">← Listeye Dön</Link>
                 <h1 className="text-2xl font-bold mb-6">Ürünü Düzenle (ID: {id})</h1>
            </div>
          
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow border">
                <div className="mb-4">
                    <label className="block text-sm font-medium">Ürün Adı</label>
                    <input
                        type="text"
                        className="w-full border p-2 rounded"
                        value={product.name}
                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                    />
                </div>
                 <div className="mb-4">
                    <label className="block text-sm font-medium">Ürün Kodu</label>
                    <input
                        type="text"
                        className="w-full border p-2 rounded"
                        value={product.productCode}
                        onChange={(e) => setProduct({ ...product, productCode: e.target.value })}
                    />
                </div>
                 <div className="mb-4">
                    <label className="block text-sm font-medium">Fiyat</label>
                    <input
                        type="text"
                        className="w-full border p-2 rounded"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) || 0 })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Miktar</label>
                    <input
                        type="text"
                        className="w-full border p-2 rounded"
                        value={product.quantity}
                        onChange={(e) => setProduct({ ...product, quantity: parseFloat(e.target.value) || 0 })}
                    />
                </div>
                
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Değişiklikleri Kaydet
                </button>
            </form>
        </main>
    );
}