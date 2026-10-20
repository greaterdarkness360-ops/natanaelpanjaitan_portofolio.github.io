# Panduan Pengembang dan Arsitektur Proyek (AGENTS.md)

## Deskripsi Proyek
Portofolio Single-Page berbasis Vue 3 (Composition API dengan `<script setup lang="ts">`), Vite, TypeScript, dan Tailwind CSS. Portofolio ini menampilkan rekam jejak Natanael Metio Panjaitan (S.Sos.), seorang arsitek sistem digital dan praktisi operasional bisnis dengan latar belakang Sosiologi.

## Aturan Penulisan Ketat (Hard Constraint)
1. DILARANG KERAS menggunakan karakter em dash (U+2014) atau en dash (U+2013) di seluruh repositori.
2. Seluruh bagian dokumen, teks konten, komentar kode, judul, subtitle, maupun file AGENTS.md wajib menggunakan tanda koma, titik dua, tanda kurung, atau struktur kalimat mengalir.

## Arsitektur & Pedoman Desain Visual (Dark Studio Luxury)
1. Tema Utama: Matte Black (#121212) sebagai latar belakang utama, #1A1A1A untuk permukaan kartu.
2. Palet Warna:
   - Teks Utama: Putih bersih (#F8FAFC) dan Abu-abu lembut (#94A3B8).
   - Aksen Primer: Biru Langit (#38BDF8 / Sky-400) untuk indikator aktif, badge, dan fokus.
   - Aksen Interaksi: Kuning Lembut (#FEF08A / Yellow-200) untuk sorotan hover dan glow.
   - Aksen Struktur: Hijau Muda Dove (#86EFAC dengan opacity 20% hingga 30%) untuk batas border tipis.
3. Tipografi:
   - Playfair Display (Serif) untuk Judul dan Heading.
   - Plus Jakarta Sans / Inter (Sans-serif) untuk Body dan UI.

## Struktur Direktori
- `src/components/`: Komponen modular Vue (`Navbar.vue`, `HeroSection.vue`, `AboutSection.vue`, `ProjectGallery.vue`, `ProjectModal.vue`, `FooterSection.vue`).
- `src/types/portfolio.ts`: Kontrak data portofolio.
- `src/data/portfolioData.ts`: Data terpusat item portofolio.
- `public/assets/`: Aset media statis dan resume PDF.
- `.github/workflows/deploy.yml`: Konfigurasi CI/CD deploy ke GitHub Pages.

## Kontrak Data (src/types/portfolio.ts)
```typescript
export type ProjectCategory = 'ALL' | 'TECH' | 'HUMAN_OPS';

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'TECH' | 'HUMAN_OPS';
  imagePlaceholder: string;
  sociologicalContext: string;
  solutionExecution: string;
  stackOrSkills: string[];
  highlightMetric?: string;
}
```
