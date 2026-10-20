<script setup lang="ts">
import { ref } from 'vue';

interface ActivityCard {
  id: string;
  image: string;
  label: string;
  sublabel: string;
  iconSvg: string;
}

const activities: ActivityCard[] = [
  {
    id: 'activity-1',
    image: '/assets/activity-1.jpg',
    label: 'Riset & Diskusi Kualitatif',
    sublabel: 'Pemetaan Perilaku & Problematika Manusia',
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />`
  },
  {
    id: 'activity-2',
    image: '/assets/activity-2.jpg',
    label: 'Operasional & Relasi Klien',
    sublabel: 'Eksekusi Komunikasi Persuasif B2C',
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />`
  },
  {
    id: 'activity-3',
    image: '/assets/activity-3.jpg',
    label: 'Eksplorasi Sistem Digital',
    sublabel: 'Vibe Coding & AI System Orchestration',
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />`
  }
];

const failedImages = ref<Record<string, boolean>>({});

const handleImageError = (id: string) => {
  failedImages.value[id] = true;
};
</script>

<template>
  <section id="about" class="py-24 px-6 relative bg-[#121212] overflow-hidden">
    <!-- Ambient Background Lighting -->
    <div class="absolute top-1/2 left-0 w-96 h-96 bg-[#86EFAC]/5 rounded-full blur-[140px] pointer-events-none"></div>

    <div class="max-w-6xl mx-auto space-y-16">

      <!-- Section Header -->
      <div class="space-y-4">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#86EFAC]/20">
          <span class="text-xs font-mono uppercase tracking-widest text-[#86EFAC]">Filosofi & Pendekatan</span>
        </div>
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-100 font-normal">
          Evolusi Logis Sosial dan Kualitatif
        </h2>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

        <!-- Left Text Narrative (7 Cols) -->
        <div class="lg:col-span-7 bg-[#1A1A1A] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-xl flex flex-col justify-between relative group hover:border-[#86EFAC]/30 transition-all duration-500">
          <div class="space-y-6 text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            <p class="first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-sky-400 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              Sebagai seorang lulusan Sosiologi, inti keahlian saya adalah memahami manusia, mulai dari apa yang mereka butuhkan, apa yang mereka keluhkan, hingga bagaimana mereka berinteraksi di dalam sebuah struktur.
            </p>
            <p>
              Saya menerjemahkan ketajaman riset kualitatif ini ke dalam dua bentuk eksekusi nyata: membangun komunikasi strategis yang menjembatani produk dengan pelanggan (Sales, B2C Operations, dan Konsultasi), serta merancang sistem perangkat lunak yang tepat guna melalui Vibe Coding dan AI System Orchestration.
            </p>
            <p class="text-slate-200 font-normal border-l-2 border-[#86EFAC]/50 pl-4 py-1 italic bg-[#121212]/40 rounded-r-lg">
              Bagi saya, kode pemrograman, negosiasi bisnis, dan pelayanan pelanggan adalah instrumen yang saling melengkapi untuk satu tujuan yang sama: menghadirkan solusi yang membumi bagi manusia.
            </p>
          </div>

          <!-- Highlight Metric Badges -->
          <div class="pt-8 border-t border-white/5 grid grid-cols-2 gap-4 mt-8">
            <div class="space-y-1">
              <p class="text-2xl sm:text-3xl font-serif font-bold text-sky-400">3.75 <span class="text-xs font-sans text-slate-400">/ 4.00</span></p>
              <p class="text-xs text-slate-400 font-medium">IPK S.Sos. Universitas Sumatera Utara</p>
            </div>
            <div class="space-y-1">
              <p class="text-2xl sm:text-3xl font-serif font-bold text-[#FEF08A]">Multi<span class="text-xs font-sans text-slate-400">-Domain</span></p>
              <p class="text-xs text-slate-400 font-medium">Human Ops & AI Systems Orchestration</p>
            </div>
          </div>
        </div>

        <!-- Right Asymmetric Collage Grid (5 Cols) -->
        <div class="lg:col-span-5 grid grid-cols-1 gap-4">
          <div
            v-for="item in activities"
            :key="item.id"
            class="relative rounded-2xl overflow-hidden bg-[#1A1A1A] border border-white/10 group hover:border-[#FEF08A]/40 transition-all duration-700 shadow-lg min-h-[140px] flex flex-col justify-end p-5"
          >
            <!-- Background Image or Luxurious Fallback -->
            <div class="absolute inset-0 z-0 bg-slate-900 overflow-hidden">
              <img
                v-if="!failedImages[item.id]"
                :src="item.image"
                :alt="item.label"
                @error="handleImageError(item.id)"
                class="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />

              <!-- Dark Fallback Pattern if image is missing -->
              <div
                v-else
                class="w-full h-full bg-gradient-to-br from-[#1A1A1A] via-[#121212] to-[#222222] opacity-80 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center p-4"
              >
                <svg
                  class="w-16 h-16 text-sky-400/20 group-hover:text-[#FEF08A]/30 transition-colors duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  v-html="item.iconSvg"
                ></svg>
              </div>

              <!-- Gradient Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent"></div>
            </div>

            <!-- Content Capsule Label -->
            <div class="relative z-10 space-y-1">
              <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121212]/80 backdrop-blur-md border border-white/15 group-hover:border-[#FEF08A]/50 transition-colors">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:bg-[#FEF08A] transition-colors"></span>
                <span class="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {{ item.label }}
                </span>
              </div>
              <p class="text-xs text-slate-400 font-light pl-1">
                {{ item.sublabel }}
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
