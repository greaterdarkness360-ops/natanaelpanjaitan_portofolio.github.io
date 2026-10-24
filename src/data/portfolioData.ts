import type { PortfolioItem } from '../types/portfolio';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'ecommerce-ops',
    title: 'Operasional E-Commerce & Pelayanan Pelanggan',
    subtitle: 'Pengelolaan Toko Daring Multikanal (Shopee)',
    category: 'HUMAN_OPS',
    imagePlaceholder: './assets/project-1.jpg',
    galleryImages: [
      './assets/project-1-1.jpg',
      './assets/project-1-2.jpg',
      './assets/project-1-3.jpg'
    ],
    sociologicalContext:
      'Membeli souvenir pernikahan bukanlah belanja barang harian biasa. Pembeli biasanya adalah calon pengantin yang mudah cemas karena menyangkut hari pernikahan mereka, ketepatan waktu pengiriman barang, hasil sablon nama, serta biaya yang pas dengan anggaran. Balasan pesan yang lambat atau jawaban penjual yang kaku bisa langsung membuat calon pembeli pindah ke toko lain.',
    solutionExecution:
      'Mengelola operasional harian toko Souvenir Pernikahan Kota Medan di Shopee dan Lazada secara terpadu. Mengedepankan cara berkomunikasi yang ramah, cepat tanggap, dan menenangkan kekhawatiran pembeli. Setiap kendala pengiriman dan keluhan diselesaikan dengan memberi jalan keluar yang adil, sehingga performa toko tetap memiliki reputasi tinggi dan penjualan terus berjalan stabil.',
    stackOrSkills: [
      'Komunikasi Pelanggan',
      'Negosiasi Penjualan B2C',
      'Penanganan Komplain',
      'Shopee & Lazada Seller Center',
      'Manajemen Pengiriman'
    ],
    highlightMetric: 'Shopee & Lazada Active Operations'
  },
  {
    id: 'academic-consultant',
    title: 'Konsultan Riset Akademik & Pembimbing Skripsi',
    subtitle: 'Pendampingan Metodologi Penelitian dan Persiapan Ujian Sidang',
    category: 'HUMAN_OPS',
    imagePlaceholder: './assets/project-2.jpg',
    sociologicalContext:
      'Banyak mahasiswa tingkat akhir merasa buntu ketika menyusun tugas akhir penelitian. Mereka memiliki rekaman wawancara yang sangat banyak dari lapangan, tetapi bingung bagaimana menyaring obrolan tersebut menjadi bab pembahasan yang rapi, logis, dan sesuai dengan teori ilmiah saat diuji oleh dosen penguji.',
    solutionExecution:
      'Memberikan pendampingan intensif satu per satu untuk membantu mahasiswa menyusun alur berpikir riset mereka. Mengajarkan cara mengelompokkan hasil wawancara menggunakan metode analisis tematik Braun dan Clarke, mengaitkannya dengan teori ilmu sosial yang tepat (seperti Bourdieu, Weber, serta Berger dan Luckmann), serta melatih cara berbicara yang meyakinkan di depan penguji sidang.',
    stackOrSkills: [
      'Analisis Tematik (Braun & Clarke)',
      'Penataan Alur Pikir Masalah',
      'Bimbingan Akademik',
      'Komunikasi Persuasif',
      'Penguasaan Teori Sosial'
    ],
    highlightMetric: 'Qualitative Research & Defense Mentoring'
  },
  {
    id: 'panat-kas',
    title: 'Panat Kas: Pengelola Kas Komunitas Lintas Perangkat',
    subtitle: 'Transparansi Keuangan Komunitas di Android dan Web (iPhone Ready)',
    category: 'TECH',
    imagePlaceholder: './assets/project-3.jpg',
    galleryImages: [
      './assets/project-3-1.jpg',
      './assets/project-3-2.jpg',
      './assets/project-3-3.jpg'
    ],
    sociologicalContext:
      'Mengurus uang kas organisasi sering kali membuat pusing. Masalah nyata muncul ketika aplikasi Android selesai dibuat, ternyata bendahara utama menggunakan iPhone yang tidak mengizinkan pemasangan aplikasi dari luar toko resmi. Ditambah lagi, aplikasi pencatat uang biasa umumnya hanya bisa diakses satu orang dan rawan memicu salah paham jika ada catatan yang terhapus tanpa jejak.',
    solutionExecution:
      'Menjawab kendala tersebut, sistem langsung dikembangkan agar bisa dibuka lewat website secara fleksibel. Bendahara yang memakai iPhone bisa membuka lewat browser, sementara wakil bendahara menggunakan aplikasi Android, dan data keduanya langsung tersambung otomatis saat itu juga. Dibuat pula pembagian wewenang yang jelas serta fitur tempat sampah pemulihan agar riwayat keuangan tetap transparan.',
    stackOrSkills: [
      'Flutter',
      'Dart',
      'Supabase Cloud Sync',
      'Pengaturan Hak Akses (RBAC)',
      'Web & Mobile Deployment'
    ],
    highlightMetric: 'Cross-Platform Android & iOS Web Sync'
  },
  {
    id: 'buku-barang',
    title: 'Buku Barang: Pencatatan Stok dan Alur Produk Bebas Selisih',
    subtitle: 'Manajemen Inventaris Sederhana dan Kontrol Keluar Masuk Barang',
    category: 'TECH',
    imagePlaceholder: './assets/project-4.jpg',
    sociologicalContext:
      'Mengelola stok barang dagangan sering kali menjadi sumber kebocoran modal terbesar bagi pelaku usaha kecil. Kebanyakan aplikasi pencatat stok di pasar memiliki alur yang terlalu rumit dan penuh istilah akuntansi yang membingungkan. Akibatnya, pemilik usaha kembali menggunakan buku tulis manual yang rawan hilang, tercecer, atau mengalami selisih hitung antara stok gudang dan catatan penjualan.',
    solutionExecution:
      'Merancang sistem pencatatan inventaris barang yang mengutamakan kecepatan input dan kemudahan pemakaian harian. Pengguna bisa langsung melihat sisa stok secara akurat, mencatat barang masuk dan barang keluar dalam hitungan detik, serta mendapatkan peringatan dini saat persediaan barang mulai menipis agar operasional toko tidak terhenti.',
    stackOrSkills: [
      'Manajemen Inventaris',
      'Perancangan Alur Pengguna Sederhana',
      'Database Produk Lokal',
      'Efisiensi Operasional Bisnis'
    ],
    highlightMetric: 'Zero-Friction Inventory Tracking'
  },
  {
    id: 'money-tracker',
    title: 'Money Tracker: Pencatat Arus Kas Personal dan Usaha Ringan',
    subtitle: 'Pemantauan Keuangan Harian Tanpa Distraksi Fitur Rumit',
    category: 'TECH',
    imagePlaceholder: './assets/project-5.jpg',
    sociologicalContext:
      'Banyak orang gagal menjaga konsistensi mencatat keuangan bukan karena malas, melainkan karena aplikasi keuangan modern saat ini terlalu ramai dengan iklan, tawaran pinjaman daring, dan grafik yang membingungkan. Ketika ingin mencatat pengeluaran kecil seperti makan siang atau beli bensin, aplikasi membutuhkan waktu buka yang lama dan meminta terlalu banyak kolom isian.',
    solutionExecution:
      'Membangun aplikasi pencatat pengeluaran dan pemasukan harian yang fokus pada esensi utamanya: cepat dibuka, minim klik, dan langsung menyajikan ringkasan saldo bersih secara transparan. Pengguna dapat dengan mudah memisahkan pos kebutuhan harian dan modal operasional, sehingga pola pengeluaran yang boros bisa langsung disadari tanpa perlu belajar rumus akuntansi.',
    stackOrSkills: [
      'Perancangan Antarmuka Minimalis',
      'Analisis Pola Belanja Pengguna',
      'Penyimpanan Data Mandiri',
      'Evaluasi Anggaran Keuangan'
    ],
    highlightMetric: 'Fast Daily Cashflow Logging'
  },
  {
    id: 'towr-ai',
    title: 'TOWR: Asisten Cerdas Mandiri di Perangkat Android',
    subtitle: 'Kecerdasan Buatan Tanpa Bergantung Penuh pada Server Luar',
    category: 'TECH',
    imagePlaceholder: './assets/project-6.jpg',
    sociologicalContext:
      'Sebagian besar asisten pintar masa kini mengharuskan kita terus terhubung ke internet dan mengirimkan data pribadi kita ke server perusahaan lain. Bagi pengguna yang sering berada di tempat susah sinyal atau sangat menjaga privasi catatannya, ketergantungan pada internet ini sering kali merepotkan.',
    solutionExecution:
      'Membangun aplikasi asisten cerdas yang mesin pemikirnya (model Gemma) bisa bekerja langsung di dalam memori ponsel pengguna tanpa harus selalu membuka jaringan internet. Ketika butuh mengerjakan tugas yang lebih rumit dan ada koneksi, aplikasi bisa berpindah secara cerdas ke jaringan Google Gemini API, dibalut tampilan yang ringan dan hemat baterai.',
    stackOrSkills: [
      'Kotlin',
      'Jetpack Compose',
      'LiteRT-LM (Gemma On-Device)',
      'Gemini API',
      'AI Orchestration'
    ],
    highlightMetric: 'Hybrid On-Device & Cloud AI'
  },
  {
    id: 'run-firewall',
    title: 'RUN: Pengontrol Lalu Lintas Data & Pelindung Kuota',
    subtitle: 'Pengaturan Privasi dan Internet Aplikasi Mandiri di Android',
    category: 'TECH',
    imagePlaceholder: './assets/project-7.jpg',
    sociologicalContext:
      'Banyak aplikasi di ponsel diam-diam tetap memakai kuota internet dan mengirimkan aktivitas pengguna di latar belakang, bahkan saat layar ponsel sedang mati. Kebanyakan pengguna biasa tidak tahu aplikasi apa saja yang sedang menghabiskan paket data dan memecah fokus mereka secara sembunyi-sembunyi.',
    solutionExecution:
      'Membuat aplikasi pelindung yang bertindak seperti pintu gerbang internet di dalam ponsel menggunakan teknologi VpnService lokal. Tanpa perlu mengirim data ke pihak lain, aplikasi ini memungkinkan pengguna memilih aplikasi mana saja yang boleh memakai internet Wi-Fi atau data seluler dan aplikasi mana yang harus diputus koneksinya hanya dengan satu tombol sakelar.',
    stackOrSkills: [
      'Android VpnService',
      'Kotlin',
      'Jetpack Compose',
      'Pengamanan Jaringan Ponsel',
      'Efisiensi Data'
    ],
    highlightMetric: 'Local Per-App Network Control'
  },
  {
    id: 'dimensional-vektor',
    title: 'Dimensional & Vektor: Pengubah Ponsel Menjadi Mouse dan Touchpad',
    subtitle: 'Pemanfaatan Smartphone Sebagai Alat Kendali Produktivitas',
    category: 'TECH',
    imagePlaceholder: './assets/project-8.jpg',
    galleryImages: [
      './assets/project-8-1.jpg',
      './assets/project-8-2.jpg'
    ],
    sociologicalContext:
      'Saat bepergian dan bekerja menggunakan tablet atau laptop di tempat sempit seperti kafe atau meja kecil, membawa banyak perangkat tambahan seperti mouse fisik sering kali merepotkan dan menghambat kecepatan kerja.',
    solutionExecution:
      'Merancang sepasang aplikasi yang mengubah layar ponsel menjadi trackpad sentuh serta pengirim tombol pintasan kerja (Copy, Paste, Cut, Select All, Save) secara langsung lewat koneksi Bluetooth. Komputer atau tablet langsung mendeteksi ponsel layaknya mouse nirkabel asli tanpa perlu memasang aplikasi tambahan apa pun di komputer penerima.',
    stackOrSkills: [
      'Android BluetoothHidDevice API',
      'Kotlin',
      'Jetpack Compose',
      'Integrasi Perangkat Keras',
      'Ergonomi Kerja Mobile'
    ],
    highlightMetric: 'Zero-Receiver Bluetooth HID'
  },
  {
    id: 'memora-notes',
    title: 'Memora: Buku Catatan Visual Serba Cepat Tanpa Sinyal',
    subtitle: 'Aplikasi Catatan Offline dengan Tampilan Masonry Dinamis',
    category: 'TECH',
    imagePlaceholder: './assets/project-9.jpg',
    sociologicalContext:
      'Ide bagus sering muncul tiba-tiba saat kita berada di tempat tanpa jaringan internet. Kebanyakan aplikasi catatan masa kini terasa berat, lama terbuka, dan menuntut akun harus terhubung ke internet terlebih dahulu hanya untuk menulis satu kalimat singkat.',
    solutionExecution:
      'Membangun aplikasi catatan hibrida yang sangat ringan dengan penataan kotak-kotak visual (masonry) yang rapi. Seluruh data tulisan disimpan langsung di dalam memori perangkat agar bisa langsung dicatat kapan saja tanpa jeda waktu tunggu, lalu proses perakitannya dibuat otomatis menjadi APK siap pasang melalui GitHub Actions.',
    stackOrSkills: [
      'Vue 3',
      'TypeScript',
      'Vite & Capacitor',
      'IndexedDB Local Storage',
      'GitHub Actions CI/CD'
    ],
    highlightMetric: 'Instant Offline-First Capture'
  },
  {
    id: 'job-intel-agent',
    title: 'Asisten Otomatis Pencari Lowongan Kerja',
    subtitle: 'Kurasi Peluang Karier Lintas Bidang Berbasis AI ke Telegram',
    category: 'TECH',
    imagePlaceholder: './assets/project-10.jpg',
    sociologicalContext:
      'Mencari peluang kerja di internet sering kali membuang waktu karena info lowongan tersebar di puluhan situs yang berbeda dengan tampilan yang berantakan, baik untuk bidang layanan pelanggan, penjualan, sumber daya manusia, maupun teknologi.',
    solutionExecution:
      'Membuat sistem robot otomatis yang secara berkala membaca situs lowongan kerja, merangkum poin kualifikasi yang paling penting menggunakan kecerdasan buatan, lalu mengirimkan daftar lowongan yang paling sesuai langsung ke pesan Telegram pribadi setiap hari.',
    stackOrSkills: [
      'Python',
      'Google GenAI SDK',
      'Telegram Bot API',
      'GitHub Actions Cron Automation'
    ],
    highlightMetric: 'Automated Daily Career Digest'
  }
];
