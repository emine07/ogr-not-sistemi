# 🎓 Öğrenci Not Sistemi

Bu proje, öğrencilerin adlarını ve sınav notlarını kaydeden, harf notlarını otomatik hesaplayan, liste üzerinde düzenleme/silme işlemleri yapabilen ve sınıf istatistiklerini anlık olarak güncelleyen dinamik bir web uygulamasıdır.

Proje, frontend geliştirme sürecinde **Vanilla JavaScript (Düz JavaScript)** kullanarak DOM manipülasyonu, dizi metotları ve koşullu döngü mantığını pekiştirmek amacıyla geliştirilmiştir.

---

## 🚀 Özellikler

- **Öğrenci Ekleme & Giriş Doğrulama:** Boş isim girişleri engellenir; not alanının `0-100` arasında sayısal bir değer olması zorunlu tutulur.
- **Otomatik Harf Notu & Durum Hesaplama:** Girilen nota göre dinamik olarak harf notu (`AA` - `FF`) belirlenir ve `50` barajına göre Geçti/Kaldı durumu atanır.
- **Anlık Tablo Çizimi (Render):** Her veri değişiminde tablo döngüler yardımıyla ekrana dinamik olarak yeniden basılır.
- **Satır İçi Düzenleme (Update):** Düzenleme moduna geçildiğinde form "Kaydet" moduna evrilir, "İptal" butonu belirir ve seçili satır görsel olarak vurgulanır.
- **Güvenli Silme (Delete):** Öğrenci silindiğinde diziler güncellenir ve eğer silinen eleman aktif olarak düzenlenen sıranın üzerindeyse indeks kayması otomatik tolere edilir.
- **Canlı İstatistik Paneli:** Sınıf ortalaması (`toFixed(1)` hassasiyetiyle), en yüksek not, en düşük not ve toplamda kaç öğrencinin sınıfı geçtiği anlık olarak kartlar üzerinden hesaplanır.

---

## 🛠️ Kullanılan Teknolojiler

- **HTML5:** Sayfa yapısı ve veri giriş formları.
- **CSS3:** Geçen/kalan durum renklendirmeleri, form elementleri ve düzenleme modu satır vurguları.
- **JavaScript (ES6+):** Temel veri yapıları (Diziler), Koşullu Durumlar, `for` Döngüleri, Ternary Operatörleri, DOM Seçicileri ve `splice` / `push` dizi metotları.

---

## 💻 Kod Yapısı Hakkında Teknik Detaylar

Projenin kalbini oluşturan ana JavaScript fonksiyonları ve görevleri şu şekildedir:

- `harfNotuBul(not)`: Sayısal not değerini koşul bloklarından geçirerek harf karşılığını döndürür.
- `ogrenciEkle()`: Hem yeni öğrenci push eder hem de `duzenlenen` indeksi kontrol ederek var olan kaydı günceller.
- `notDuzenle(i)` / `duzenlemeyiIptalEt()`: Form durumunu, buton yazılarını ve `display: none` / `inline-block` geçişlerini yöneterek düzenleme modunu kontrol eder.
- `ogrenciSil(i)`: `splice()` metoduyla veriyi temizler ve sıra kaymalarını önleyen indeks kontrol mekanizmasını çalıştırır.
- `tabloyuCiz()`: JavaScript dizilerini dönerek dinamik string HTML çıktısı hazırlar ve ekrana basar.
- `istatistikHesapla()`: Matematiksel hesaplama döngülerini işleterek en yüksek, en düşük ve ortalama değerleri bulur.

---

## 🔧 Kurulum ve Çalıştırma

1. Projeyi bilgisayarınıza klonlayın veya indirin:
   ```bash
   git clone https://github.com
   ```
2. Proje klasörünün içine gidin.
3. `index.html` dosyasını tarayıcınızda çift tıklayarak doğrudan çalıştırabilirsiniz.

<img width="581" height="460" alt="image" src="https://github.com/user-attachments/assets/99cbbc58-662f-498f-87c4-4ead2a50268f" />
