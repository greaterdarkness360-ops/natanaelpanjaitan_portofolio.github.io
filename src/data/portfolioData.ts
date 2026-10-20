import type { PortfolioItem } from '../types/portfolio';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'ecommerce-omni-channel',
    title: 'E-Commerce Omni-Channel Operations & Client Relations',
    subtitle: 'Operasional Bisnis Souvenir Pernikahan Kota Medan di Shopee dan Lazada',
    category: 'HUMAN_OPS',
    imagePlaceholder: '/assets/project-1.jpg',
    sociologicalContext: 'Membeli souvenir pernikahan adalah keputusan emosional dengan tingkat kecemasan pelanggan yang tinggi terkait ketepatan waktu, kustomisasi produk, dan efisiensi anggaran.',
    solutionExecution: 'Mengelola operasional bisnis secara menyeluruh di dua marketplace besar (Shopee dan Lazada), menangani negosiasi B2C dengan pendekatan empatik, menjaga kecepatan respons Customer Service, menyelesaikan keluhan pelanggan secara persuasif, dan mengoptimalkan konversi penjualan toko.',
    stackOrSkills: ['B2C Sales', 'Customer Service & Retention', 'Shopee & Lazada Seller Center', 'Negosiasi Klien', 'Manajemen Logistik'],
    highlightMetric: 'Tingkat Kepuasan Klien Tinggi'
  },
  {
    id: 'academic-research-consultant',
    title: 'Academic Research Consultant & Thesis Advisor',
    subtitle: 'Konsultasi Metodologi Kualitatif dan Pendampingan Sidang Akademik',
    category: 'HUMAN_OPS',
    imagePlaceholder: '/assets/project-2.jpg',
    sociologicalContext: 'Banyak peneliti mahasiswa mengalami kebuntuan kognitif saat harus menerjemahkan fenomena sosial di lapangan ke dalam struktur metodologi ilmiah dan kerangka teori yang sistematis.',
    solutionExecution: 'Membimbing mahasiswa secara intensif dalam menyusun struktur riset kualitatif, menerapkan analisis tematik model Braun dan Clarke, membedah teori sosiologi klasik maupun modern (Bourdieu, Weber, Berger dan Luckmann), serta melatih retorika komunikasi publik untuk persiapan sidang.',
    stackOrSkills: ['Analisis Tematik (Braun & Clarke)', 'Konsultasi Akademik', 'Komunikasi Persuasif', 'Problem Framing', 'Mentoring'],
    highlightMetric: 'Kelulusan Riset 100%'
  },
  {
    id: 'towr-ai-assistant',
    title: 'TOWR: On-Device Local AI Assistant',
    subtitle: 'Asisten AI Privat Berbasis Android',
    category: 'TECH',
    imagePlaceholder: '/assets/project-3.jpg',
    sociologicalContext: 'Ketergantungan pengguna pada AI berbasis cloud sering memicu kekhawatiran privasi data pribadi dan kendala aksesibilitas saat koneksi internet tidak stabil.',
    solutionExecution: 'Mengorkestrasi pembangunan aplikasi asisten AI lokal yang berjalan langsung di perangkat Android menggunakan model Gemma melalui LiteRT-LM, dipadukan dengan arsitektur hybrid Google Gemini API dan antarmuka reaktif.',
    stackOrSkills: ['Kotlin', 'Jetpack Compose', 'LiteRT-LM (Gemma On-Device)', 'Gemini API', 'AI Orchestration'],
    highlightMetric: '100% Offline AI Execution'
  },
  {
    id: 'dimensional-vektor-hid',
    title: 'Dimensional & Vektor: Bluetooth HID Controllers',
    subtitle: 'Transformasi Smartphone menjadi Periferal Produktivitas',
    category: 'TECH',
    imagePlaceholder: '/assets/project-4.jpg',
    sociologicalContext: 'Pekerja mobile yang menggunakan tablet atau laptop sering mengalami hambatan ergonomi saat membutuhkan trackpad presisi dan pintasan keyboard cepat di ruang kerja terbatas.',
    solutionExecution: 'Merancang sepasang aplikasi Android menggunakan protokol BluetoothHidDevice asli untuk mengubah layar ponsel menjadi mouse, landscape touchpad, dan pengirim pintasan kerja (Copy, Paste, Cut, Select All, Save) secara real-time tanpa memerlukan instalasi aplikasi tambahan di perangkat penerima.',
    stackOrSkills: ['Android BluetoothHidDevice API', 'Kotlin', 'Jetpack Compose', 'Hardware-Software Integration', 'UX Ergonomi'],
    highlightMetric: 'Zero Server Installation'
  },
  {
    id: 'memora-note-taking',
    title: 'Memora: Offline-First Hybrid Note-Taking',
    subtitle: 'Ruang Tangkap Ide Visual Tanpa Hambatan Jaringan',
    category: 'TECH',
    imagePlaceholder: '/assets/project-5.jpg',
    sociologicalContext: 'Ide penting sering muncul secara spontan di situasi tanpa sinyal internet, sementara aplikasi pencatat modern sering kali terlalu berat dan lambat saat dibuka.',
    solutionExecution: 'Membangun aplikasi pencatatan hybrid dengan tata letak masonry yang estetis dan penyimpanan lokal penuh di perangkat, serta mengotomatisasi proses kompilasinya hingga menjadi APK siap pasang melalui pipeline CI/CD.',
    stackOrSkills: ['Vue 3', 'TypeScript', 'Vite', 'Capacitor', 'IndexedDB', 'GitHub Actions'],
    highlightMetric: 'Instant Load Offline'
  },
  {
    id: 'run-vpn-firewall',
    title: 'RUN: Local VPN Firewall for Android',
    subtitle: 'Kendali Penuh Privasi dan Fokus Digital Pengguna',
    category: 'TECH',
    imagePlaceholder: '/assets/project-6.jpg',
    sociologicalContext: 'Banyak aplikasi latar belakang menguras kuota data dan memecah fokus pengguna tanpa mekanisme kontrol yang transparan.',
    solutionExecution: 'Mengimplementasikan firewall jaringan lokal menggunakan antarmuka VpnService Android untuk memblokir atau mengizinkan akses Wi-Fi dan data seluler secara spesifik per aplikasi.',
    stackOrSkills: ['Android VpnService', 'Jetpack Compose', 'Network Interception', 'Kotlin', 'GitHub Actions'],
    highlightMetric: 'Per-App Traffic Control'
  },
  {
    id: 'panat-kas-treasury',
    title: 'Panat Kas: Role-Based Treasury Management',
    subtitle: 'Transparansi Keuangan Komunitas dan Organisasi',
    category: 'TECH',
    imagePlaceholder: '/assets/project-7.jpg',
    sociologicalContext: 'Pengelolaan kas kelompok sering terkendala oleh pencatatan manual yang rawan selisih dan kurangnya pembagian wewenang administratif yang jelas.',
    solutionExecution: 'Mengembangkan aplikasi manajemen kas lintas platform dengan backend cloud real-time, dilengkapi sistem otorisasi berbasis peran (admin dan anggota) serta alur pemulihan data terhapus (soft-delete recycle bin).',
    stackOrSkills: ['Flutter', 'Dart', 'Supabase (PostgreSQL & Auth)', 'Role-Based Access Control'],
    highlightMetric: 'Real-Time Audit Trail'
  },
  {
    id: 'automated-job-intelligence',
    title: 'Automated Job & Opportunity Intelligence Agent',
    subtitle: 'Kurasi Peluang Karier Lintas Bidang Berbasis AI',
    category: 'TECH',
    imagePlaceholder: '/assets/project-8.jpg',
    sociologicalContext: 'Informasi lowongan kerja tersebar di berbagai portal dengan format yang berantakan, sehingga menguras waktu pencari kerja di bidang HR, Sales, Customer Service, dan Teknologi.',
    solutionExecution: 'Membangun agen otomatisasi terjadwal yang memindai, menyaring, dan merangkum peluang kerja menggunakan AI generatif, lalu mengirimkan laporan terstruktur langsung ke Telegram.',
    stackOrSkills: ['Python', 'Google GenAI SDK', 'Telegram Bot API', 'GitHub Actions Cron Workflow'],
    highlightMetric: 'Automated Cron Delivery'
  }
];
