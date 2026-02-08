
## Teknik Özellikler

### Backend (.NET Core Web API)
* **Veritabanı:** MSSQL ve Entity Framework Core.
* **Fonksiyonlar:** Temel CRUD işlemleri `async/await` yapısıyla asenkron olarak gerçekleştirilmiştir.

### Frontend (Next.js)
* **Teknolojiler:** Next.js 14+ (App Router), TypeScript ve TailwindCSS.

---

## Kurulum ve Çalıştırma

### 1. Backend Kurulumu
1.  `backend` dizinine gidin:
    ```bash
    cd backend
    ```
2.  `appsettings.json` dosyasında MSSQL bağlantı dizesini (**Connection String**) güncelleyin.
3.  Veritabanı tablolarını ve şemasını oluşturmak için migration'ları uygulayın:
    ```bash
    dotnet ef database update
    ```
4.  Projeyi çalıştırın:
    ```bash
    dotnet run
    ```

### 2. Frontend Kurulumu
1.  `frontend` dizinine gidin:
    ```bash
    cd frontend
    ```
2.  Bir `.env` dosyası oluşturun ve Backend API adresini tanımlayın:
    ```env
    NEXT_PUBLIC_API_URL=https://localhost:XXXX
    ```
3.  Bağımlılıkları yükleyin ve projeyi geliştirme modunda başlatın:
    ```bash
    npm install
    npm run dev
    ```