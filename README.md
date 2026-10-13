# Tech&Lab (T&L)

> **Fikirden Gerçeğe, Dijitalin Ötesinde**  
> Resmi Kurumsal Web Sitesi: [https://www.techandlab.com/](https://www.techandlab.com/)  
> Resmi Blog: [https://blog.techandlab.com/](https://blog.techandlab.com/)

---

## 🚀 Proje Hakkında

Tech&Lab (T&L), yazılım mimarisi, gömülü sistemler, Ar-Ge ve yeni nesil dijital teknoloji çözümleri üreten yenilikçi bir teknoloji laboratuvarıdır. Bu depo, Tech&Lab kurumsal açılış ve tanıtım sitesinin kaynak kodlarını ve statik dağıtım dosyalarını barındırır.

## ✨ Özellikler

* **Modern & Minimalist Tasarım:** Tailwind CSS tabanlı, akıcı mikro etkileşimler ve animasyonlar.
* **İki Dilli Mimari (TR / EN & Otomatik Sistem Dili Algılama):** Ziyaretçinin sistem ve tarayıcı diline (`navigator.language`) göre otomatik Türkçe veya İngilizce sunum; ayrı bağlantılara veya URL karmaşasına gerek kalmadan navbar üzerinden anlık TR / EN dil değişimi ve yerel depolama (`localStorage`) kalıcılığı.
* **Karanlık / Aydınlık Mod (Dark/Light Mode):** Sistem tercihi ve yerel depolama (`localStorage`) senkronizasyonu ile sıfır parlama (FOUC önleyici betik).
* **Tek Sayfa Mimarisi (SPA):** React Router ve Vite destekli kesintisiz rota geçişleri (`/`, `/hakkimizda`, `/hizmetler`, `/referanslar`, `/iletisim`).
* **SEO & Sosyal Medya Uyumluluğu:**
  * Her statik rota için özel `canonical`, `og:title`, `og:description`, `og:image` ve `twitter:card` meta etiketleri.
  * Google Arama Motoru ve Bilgi Grafiği uyumlu Schema.org `Organization` JSON-LD yapısal verisi.
  * Arama motorları için optimize edilmiş `sitemap.xml` ve `robots.txt`.
* **Çoklu Cihaz ve PWA Varlıkları:** Yüksek çözünürlüklü SVG/PNG faviconlar, `apple-touch-icon` ve `site.webmanifest` desteği.

## 📁 Sayfalar & Rotalar

| Rota | Açıklama |
| :--- | :--- |
| `/` | Anasayfa & Vizyon Tanıtımı |
| `/hakkimizda` | Vizyon, Misyon ve Ar-Ge Yaklaşımı |
| `/hizmetler` | Yazılım, Gömülü Sistemler ve Mühendislik Hizmetleri |
| `/referanslar` | Projeler ve Açık Kaynak Çalışmalar |
| `/iletisim` | Proje ve İş Birlikleri İletişim Formu & Bilgileri |
| `/404` | GitHub Pages Uyumlu Özel Hata Sayfası |

## 🛠️ Teknolojiler

* **Frontend:** React, Tailwind CSS, Framer Motion, Lucide Icons
* **Dağıtım (Hosting):** GitHub Pages (`CNAME: www.techandlab.com`)
* **Alan Adı & DNS:** Cloudflare / Özel Alan Adı Entegrasyonu

## 📬 İletişim

* **E-posta:** [info@techandlab.com](mailto:info@techandlab.com)
* **Kişisel Web:** [keremuysal.com](https://keremuysal.com)
* **Blog:** [blog.techandlab.com](https://blog.techandlab.com)
* **GitHub:** [@keremuysal](https://github.com/keremuysal)
