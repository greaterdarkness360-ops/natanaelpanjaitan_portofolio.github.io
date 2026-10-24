<script setup lang="ts">
import { ref } from 'vue';

const coreSkills = [
  'Analisis Sosial & Interpersonal',
  'Komunikasi Strategis',
  'B2C Operations',
  'Vibe Coding',
  'AI System Orchestration'
];

interface ActivityCard {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
  subtitle: string;
  previewTitle: string;
  dotColor: string;
  hoverBorder: string;
  badgeText: string;
  badgeClass: string;
}

const activityCards: ActivityCard[] = [
  {
    id: 'riset-kualitatif',
    type: 'video',
    src: './assets/field-research.mp4',
    title: 'Riset Kualitatif',
    subtitle: 'Wawancara Warga',
    previewTitle: 'Riset Kualitatif: Observasi & Wawancara Mendalam bersama Warga',
    dotColor: 'bg-emerald-400 animate-pulse',
    hoverBorder: 'hover:border-emerald-400/40',
    badgeText: '▶ Perbesar Video',
    badgeClass: 'bg-emerald-500/80 border-white/20 backdrop-blur-sm font-medium'
  },
  {
    id: 'diskusi-kualitatif',
    type: 'video',
    src: './assets/team-discussion.mp4',
    title: 'Diskusi Kualitatif',
    subtitle: 'Briefing Tim',
    previewTitle: 'Diskusi Kualitatif: Koordinasi & Briefing Tim Peneliti di Lapangan',
    dotColor: 'bg-sky-400 animate-pulse',
    hoverBorder: 'hover:border-sky-400/40',
    badgeText: '▶ Perbesar Video',
    badgeClass: 'bg-sky-500/80 border-white/20 backdrop-blur-sm font-medium'
  },
  {
    id: 'operasional-relasi',
    type: 'image',
    src: './assets/activity-2.jpg',
    title: 'Operasional & Relasi',
    subtitle: 'Layanan B2C',
    previewTitle: 'Operasional & Relasi Pelanggan E-Commerce',
    dotColor: 'bg-yellow-200',
    hoverBorder: 'hover:border-yellow-200/40',
    badgeText: 'Perbesar ⤢',
    badgeClass: 'bg-black/75 border-white/15'
  },
  {
    id: 'eksplorasi-sistem',
    type: 'image',
    src: './assets/activity-3.jpg',
    title: 'Eksplorasi Sistem',
    subtitle: 'Otomasi & Kode',
    previewTitle: 'Eksplorasi Sistem & Rekayasa Perangkat Lunak',
    dotColor: 'bg-purple-400',
    hoverBorder: 'hover:border-purple-400/40',
    badgeText: 'Perbesar ⤢',
    badgeClass: 'bg-black/75 border-white/15'
  }
];

interface MediaPreview {
  type: 'image' | 'video';
  src: string;
  title: string;
}

const activePreview = ref<MediaPreview | null>(null);

const openPreview = (card: ActivityCard) => {
  activePreview.value = {
    type: card.type,
    src: card.src,
    title: card.previewTitle
  };
};

const closePreview = () => {
  activePreview.value = null;
};
</script>

<template>
  <section id="about" class="py-20 px-4 max-w-6xl mx-auto">
    <!-- Header Section -->
    <div class="mb-12">
      <span class="text-xs uppercase tracking-widest text-yellow-200/80 font-sans font-medium">
        Kilas Balik & Fondasi Kerja
      </span>
      <h2 class="text-3xl md:text-4xl font-sans font-bold tracking-tight text-white mt-1">
        Tentang Diri & Realitas Lapangan
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <!-- Kolom Kiri: Narasi Profil (3 Paragraf Seimbang) & Skill Tags -->
      <div class="lg:col-span-5 space-y-5">
        <p class="text-gray-300 font-sans leading-relaxed text-sm md:text-base">
          Berangkat dari latar belakang Sosiologi dan pemahaman interaksi manusia, saya memadukan kepekaan riset kualitatif dengan ketangkasan eksekusi teknis modern. Bagi saya, teknologi dan strategi bisnis bukan sekadar baris kode atau target angka, melainkan sarana untuk merespons kebutuhan nyata manusia di lapangan.
        </p>
        <p class="text-gray-300 font-sans leading-relaxed text-sm md:text-base">
          Pengalaman turun langsung ke pemukiman warga untuk menggali data, berkoordinasi dengan tim di medan terbuka, hingga menghadapi ratusan pesan pembeli di operasional toko daring membentuk cara kerja yang tenang, adaptif, dan solutif. Setiap keberatan pelanggan maupun dinamika kelompok selalu saya dekati dengan komunikasi yang menenangkan dan negosiasi yang adil.
        </p>
        <p class="text-gray-400 font-sans leading-relaxed text-sm">
          Empati sosial tersebut kemudian diterjemahkan ke dalam rancangan sistem digital yang ringkas dan tepat guna. Ketika alur kerja manual terasa lambat atau aplikasi yang ada terlalu rumit bagi pengguna awam, saya merancang dan mengotomatisasi solusinya secara mandiri agar operasional harian berjalan lebih efisien, transparan, dan berdampak nyata.
        </p>

        <!-- Skill Tags -->
        <div class="pt-3">
          <h3 class="text-xs uppercase tracking-wider text-gray-400 font-sans mb-3 font-semibold">
            Fokus Kompetensi
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(skill, index) in coreSkills"
              :key="index"
              class="px-3 py-1.5 rounded-lg text-xs font-sans bg-white/5 border border-white/10 text-gray-200 hover:border-yellow-200/40 transition-colors"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Kolom Kanan: Galeri Aktivitas Lapangan & Teknis (2x2 Grid Utuh) -->
      <div class="lg:col-span-7 space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs uppercase tracking-wider text-gray-400 font-sans">
            Dokumentasi Aktivitas Nyata
          </span>
          <span class="text-[11px] text-yellow-200/80 font-sans">
            🔍 Ketuk kartu untuk memperbesar
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="card in activityCards"
            :key="card.id"
            class="rounded-2xl overflow-hidden border border-white/10 bg-[#141414] transition-all duration-300 flex flex-col cursor-pointer group shadow-lg"
            :class="card.hoverBorder"
            @click="openPreview(card)"
          >
            <div class="w-full h-56 bg-[#0d0d0d] flex items-center justify-center p-2 overflow-hidden relative">
              <img
                v-if="card.type === 'image'"
                :src="card.src"
                :alt="card.title"
                class="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <video
                v-else
                :src="card.src"
                autoplay
                loop
                muted
                playsinline
                class="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
              ></video>
              <span
                class="absolute top-3 right-3 text-white text-[10px] px-2 py-0.5 rounded border"
                :class="card.badgeClass"
              >
                {{ card.badgeText }}
              </span>
            </div>

            <div class="p-3.5 bg-[#1A1A1A] border-t border-white/5 flex items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full shrink-0" :class="card.dotColor"></span>
                <span class="text-xs font-medium text-white font-sans">{{ card.title }}</span>
              </div>
              <span class="text-[11px] text-gray-400 font-sans">{{ card.subtitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Preview (Gambar & Video Tanpa Suara) -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="activePreview"
        class="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-lg"
        @click="closePreview"
      >
        <button
          class="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-lg bg-white/15 hover:bg-white/25 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
          @click.stop="closePreview"
          aria-label="Tutup pratinjau"
        >
          ✕
        </button>

        <p class="text-sm text-white font-medium mb-3 text-center px-8">
          {{ activePreview.title }}
        </p>

        <img
          v-if="activePreview.type === 'image'"
          :src="activePreview.src"
          :alt="activePreview.title"
          class="w-auto h-auto max-w-[95vw] max-h-[80vh] object-contain rounded-xl border border-white/10 shadow-2xl"
        />

        <!-- Video Preview Berjalan Otomatis Tanpa Suara (Silent Loop) -->
        <video
          v-else
          :src="activePreview.src"
          autoplay
          loop
          muted
          playsinline
          class="w-auto h-auto max-w-[95vw] max-h-[80vh] object-contain rounded-xl border border-white/10 shadow-2xl"
        ></video>

        <p class="text-xs text-gray-400 mt-4 font-sans bg-white/10 px-3 py-1 rounded-full">
          Ketuk di mana saja untuk menutup
        </p>
      </div>
    </Transition>
  </section>
</template>
