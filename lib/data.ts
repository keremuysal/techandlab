import React from 'react';
import { Code, Smartphone, BarChart3, Palette } from 'lucide-react';

export interface Service {
    icon: React.ReactElement;
    title: string;
    description: string;
    details: string;
}

export const services: Service[] = [
  {
    icon: React.createElement(Code, { className: "w-10 h-10 text-indigo-400" }),
    title: "Web Tasarım & Geliştirme",
    description: "Modern, hızlı ve mobil uyumlu web siteleri ile dijital dünyada markanızı en iyi şekilde temsil ediyoruz.",
    details: "Kullanıcı odaklı arayüz (UI) ve deneyim (UX) tasarımı prensipleriyle, markanızın kimliğine uygun, estetik ve işlevsel web siteleri oluşturuyoruz. En son web teknolojilerini kullanarak (React, Next.js, etc.) performanslı ve SEO uyumlu projeler teslim ediyoruz."
  },
  {
    icon: React.createElement(Smartphone, { className: "w-10 h-10 text-green-400" }),
    title: "Mobil Uygulama",
    description: "Kullanıcı dostu ve performans odaklı iOS ve Android mobil uygulamaları tasarlıyor ve geliştiriyoruz.",
    details: "İhtiyaçlarınıza yönelik, sezgisel ve etkileyici mobil uygulamalar geliştiriyoruz. Native (Swift, Kotlin) veya cross-platform (React Native) çözümlerle, fikrinizi App Store ve Google Play'de hayata geçiriyoruz."
  },
  {
    icon: React.createElement(BarChart3, { className: "w-10 h-10 text-sky-400" }),
    title: "Dijital Pazarlama",
    description: "Veriye dayalı stratejilerle hedef kitlenize ulaşmanızı ve marka bilinirliğinizi artırmanızı sağlıyoruz.",
    details: "SEO, SEM, sosyal medya yönetimi ve içerik pazarlaması gibi kanalları kullanarak markanızın dijital görünürlüğünü artırıyoruz. Kampanyalarınızı optimize ederek yatırım getirinizi (ROI) maksimize ediyoruz."
  },
  {
    icon: React.createElement(Palette, { className: "w-10 h-10 text-rose-400" }),
    title: "Marka Kimliği",
    description: "Markanızın özünü yansıtan, akılda kalıcı logo ve kurumsal kimlik tasarımlarıyla sizi ayrıştırıyoruz.",
    details: "Markanızın hikayesini ve değerlerini yansıtan, bütünsel bir marka kimliği oluşturuyoruz. Logo tasarımından renk paletine, tipografiden kurumsal materyallere kadar markanızın her görsel unsurunu özenle tasarlıyoruz."
  }
];
