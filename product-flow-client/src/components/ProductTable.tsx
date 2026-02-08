'use client';

import { Product } from '@/types/product';
import { productService } from '@/services/productService';

interface Props {
    products: Product[];
    onProductDeleted: (id: number) => void; 
}

export default function ProductTable({ products, onProductDeleted }: Props) {
    
    const handleDelete = async (id: number, name: string) => {
        const confirmDelete = confirm(`"${name}" isimli ürünü silmek istediğinize emin misiniz?`);
        
        if (confirmDelete) {
            try {
                await productService.delete(id); 
                onProductDeleted(id); 
                alert("Ürün başarıyla silindi.");
            } catch (error) {
                console.error("Silme hatası:", error);
                alert("Ürün silinirken bir hata oluştu.");
            }
        }
    };

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th className="px-6 py-3">Ürün Adı</th>
                        <th className="px-6 py-3">Ürün Kodu</th>
                        <th className="px-6 py-3">Fiyat</th>
                        <th className="px-6 py-3">Stok</th>
                        <th className="px-6 py-3 text-right">İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                            <td className="px-6 py-4">{product.productCode}</td>
                            <td className="px-6 py-4">{product.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</td>
                            <td className="px-6 py-4">{product.quantity}</td>  
                            <td className="px-6 py-4 text-right">
                                <button className="text-blue-600 hover:underline mr-3">Düzenle</button>
                                <button 
                                    onClick={() => handleDelete(product.id, product.name)}
                                    className="text-red-600 hover:underline"
                                >
                                    Sil
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}