<script setup lang="ts">
import { ref } from 'vue';

const coreSkills = [
  'Analisis Sosial & Interpersonal',
  'Komunikasi Strategis',
  'B2C Operations',
  'Vibe Coding',
  'AI System Orchestration'
];

interface MediaPreview {
  type: 'image' | 'video';
  src: string;
  title: string;
}

const activePreview = ref<MediaPreview | null>(null);

const openPreview = (type: 'image' | 'video', src: string, title: string) => {
  activePreview.value = { type, src, title };
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
      <h2 class="text-3xl md:text-4xl font-serif text-white mt-1">
        Tentang Diri & Realitas Lapangan
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <!-- Kolom Kiri: Narasi Profil & Skill Tags -->
      <div class="lg:col-span-5 space-y-6">
        <p class="text-gray-300 font-sans leading-relaxed text-sm md:text-base">
          Berangkat dari latar belakang Sosiologi dan pemahaman interaksi manusia, saya memadukan pendekatan kualitatif dengan eksekusi teknis modern. Dari mendengarkan kebutuhan nyata masyarakat dan pelanggan hingga merancang alur perangkat lunak yang solutif.
        </p>
        <p class="text-gray-400 font-sans leading-relaxed text-sm">
          Setiap proyek dibangun dengan empati sosial: mengurai persoalan nyata di lapangan, memetakan kebutuhan manusia di dalamnya, lalu mengeksekusinya secara disiplin lewat sistem digital yang cepat dan efisien.
        </p>

        <!-- Skill Tags -->
        <div class="pt-2">
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
          
          <!-- Kartu 1: Riset Kualitatif (Wawancara Narasumber) -->
          <div
            class="rounded-2xl overflow-hidden border border-white/10 bg-[#141414] hover:border-emerald-400/40 transition-all duration-300 flex flex-col cursor-pointer group shadow-lg"
            @click="openPreview('image', './assets/activity-1.jpg', 'Riset Kualitatif: Wawancara Lapangan bersama Narasumber')"
          >
            <div class="w-full h-52 bg-[#0d0d0d] flex items-center justify-center p-2 overflow-hidden relative">
              <img
                src="./assets/activity-1.jpg"
                alt="Wawancara Riset Kualitatif"
                class="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <span class="absolute top-3 right-3 bg-black/75 text-white text-[10px] px-2 py-0.5 rounded border border-white/15">
                Perbesar ⤢
              </span>
            </div>
            <div class="p-3.5 bg-[#1A1A1A] border-t border-white/5 flex items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                <span class="text-xs font-medium text-white font-sans">Riset Kualitatif</span>
              </div>
              <span class="text-[11px] text-gray-400 font-sans">Wawancara Warga</span>
            </div>
          </div>

          <!-- Kartu 2: Diskusi Kualitatif (Video Briefing Rekan Tim) -->
          <div
            class="rounded-2xl overflow-hidden border border-white/10 bg-[#141414] hover:border-sky-400/40 transition-all duration-300 flex flex-col cursor-pointer group shadow-lg"
            @click="openPreview('video', './assets/field-research.mp4', 'Diskusi Kualitatif: Briefing & Koordinasi Rekan Tim')"
          >
            <div class="w-full h-52 bg-[#0d0d0d] flex items-center justify-center p-2 overflow-hidden relative">
              <video
                src="./assets/field-research.mp4"
                poster="./assets/activity-1.jpg"
                autoplay
                loop
                muted
                playsinline
                class="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
              ></video>
              <span class="absolute top-3 right-3 bg-sky-500/80 text-white text-[10px] font-medium px-2 py-0.5 rounded border border-white/20 backdrop-blur-sm">
                ▶ Putar Video
              </span>
            </div>
            <div class="p-3.5 bg-[#1A1A1A] border-t border-white/5 flex items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-sky-400 animate-pulse shrink-0"></span>
                <span class="text-xs font-medium text-white font-sans">Diskusi Kualitatif</span>
              </div>
              <span class="text-[11px] text-gray-400 font-sans">Briefing Tim</span>
            </div>
          </div>

          <!-- Kartu 3: Operasional & Relasi Pelanggan -->
          <div
            class="rounded-2xl overflow-hidden border border-white/10 bg-[#141414] hover:border-yellow-200/40 transition-all duration-300 flex flex-col cursor-pointer group shadow-lg"
            @click="openPreview('image', './assets/activity-2.jpg', 'Operasional & Relasi Pelanggan E-Commerce')"
          >
            <div class="w-full h-52 bg-[#0d0d0d] flex items-center justify-center p-2 overflow-hidden relative">
              <img
                src="./assets/activity-2.jpg"
                alt="Operasional & Relasi Pelanggan"
                class="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <span class="absolute top-3 right-3 bg-black/75 text-white text-[10px] px-2 py-0.5 rounded border border-white/15">
                Perbesar ⤢
              </span>
            </div>
            <div class="p-3.5 bg-[#1A1A1A] border-t border-white/5 flex items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-yellow-200 shrink-0"></span>
                <span class="text-xs font-medium text-white font-sans">Operasional & Relasi</span>
              </div>
              <span class="text-[11px] text-gray-400 font-sans">Layanan B2C</span>
            </div>
          </div>

          <!-- Kartu 4: Eksplorasi Sistem & Arsitektur -->
          <div
            class="rounded-2xl overflow-hidden border border-white/10 bg-[#141414] hover:border-purple-400/40 transition-all duration-300 flex flex-col cursor-pointer group shadow-lg"
            @click="openPreview('image', './assets/activity-3.jpg', 'Eksplorasi Sistem & Rekayasa Perangkat Lunak')"
          >
            <div class="w-full h-52 bg-[#0d0d0d] flex items-center justify-center p-2 overflow-hidden relative">
              <img
                src="./assets/activity-3.jpg"
                alt="Eksplorasi Sistem & Arsitektur"
                class="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <span class="absolute top-3 right-3 bg-black/75 text-white text-[10px] px-2 py-0.5 rounded border border-white/15">
                Perbesar ⤢
              </span>
            </div>
            <div class="p-3.5 bg-[#1A1A1A] border-t border-white/5 flex items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-purple-400 shrink-0"></span>
                <span class="text-xs font-medium text-white font-sans">Eksplorasi Sistem</span>
              </div>
              <span class="text-[11px] text-gray-400 font-sans">Otomasi & Kode</span>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Lightbox Preview untuk Foto & Video Aktivitas -->
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

        <video
          v-else
          :src="activePreview.src"
          controls
          autoplay
          playsinline
          class="w-auto h-auto max-w-[95vw] max-h-[80vh] object-contain rounded-xl border border-white/10 shadow-2xl"
          @click.stop
        ></video>

        <p class="text-xs text-gray-400 mt-4 font-sans bg-white/10 px-3 py-1 rounded-full">
          Ketuk area luar untuk menutup
        </p>
      </div>
    </Transition>
  </section>
</template>
