<script setup lang="ts">
import { ref } from 'vue';

const imageLoaded = ref(false);
const imageError = ref(false);

const handleImageLoad = () => {
  imageLoaded.value = true;
};

const handleImageError = () => {
  imageError.value = true;
};
</script>

<template>
  <section class="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden px-6">
    <!-- Ambient Studio Background Glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-[#86EFAC]/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

      <!-- Text Column -->
      <div class="lg:col-span-8 space-y-6 text-left">
        <!-- Warm Greeting Badge -->
        <div class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#86EFAC]/25 shadow-lg">
          <span class="w-2 h-2 rounded-full bg-[#86EFAC] animate-pulse"></span>
          <span class="text-xs sm:text-sm font-medium text-slate-300">
            Halo, saya <span class="text-white font-semibold">Natanael Metio Panjaitan</span>.
          </span>
        </div>

        <!-- Main Headline -->
        <h1 class="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-100 font-normal leading-[1.2] tracking-tight">
          Saya memecahkan masalah melalui <span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-sky-300 to-sky-400 font-semibold">analisis sosial</span>, komunikasi strategis, dan <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-[#86EFAC] to-[#FEF08A] font-semibold">rekayasa sistem digital</span>.
        </h1>

        <!-- Subheadline -->
        <p class="text-base sm:text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
          Sarjana Sosiologi (S.Sos.) dari Universitas Sumatera Utara (IPK 3.75) yang menjembatani kedalaman perilaku manusia dengan eksekusi produk teknologi dan operasional bisnis.
        </p>

        <!-- CTA Action Buttons -->
        <div class="pt-4 flex flex-wrap gap-4 items-center">
          <a
            href="#works"
            class="px-7 py-3.5 rounded-full bg-sky-400 text-slate-950 font-semibold text-sm hover:bg-[#FEF08A] hover:shadow-[0_0_25px_rgba(254,240,138,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Lihat Portofolio
          </a>
          <a
            href="#about"
            class="px-7 py-3.5 rounded-full bg-[#1A1A1A] text-slate-300 font-medium text-sm border border-white/10 hover:border-[#86EFAC]/40 hover:text-white transition-all duration-300 cursor-pointer"
          >
            Pelajari Filosofi Kerja
          </a>
        </div>
      </div>

      <!-- Profile Avatar Column with Studio Ring Glow -->
      <div class="lg:col-span-4 flex justify-center lg:justify-end">
        <div class="relative group">
          <!-- Subtle Backdrop Aura -->
          <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400/30 via-[#86EFAC]/20 to-[#FEF08A]/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-700"></div>

          <!-- Circular Frame -->
          <div class="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1.5 bg-gradient-to-b from-[#86EFAC]/40 via-white/10 to-sky-400/40 shadow-2xl">
            <div class="w-full h-full rounded-full overflow-hidden bg-[#1A1A1A] relative flex items-center justify-center">

              <!-- Actual Image if available -->
              <img
                v-if="!imageError"
                src="/assets/profile-placeholder.jpg"
                alt="Natanael Metio Panjaitan"
                @load="handleImageLoad"
                @error="handleImageError"
                class="w-full h-full object-cover object-center transition-all duration-700 filter grayscale hover:grayscale-0 group-hover:scale-105"
              />

              <!-- Luxurious Fallback Visual Avatar if image missing -->
              <div
                v-if="imageError || !imageLoaded"
                class="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1A1A] via-[#121212] to-[#262626] p-6 text-center select-none"
              >
                <div class="w-20 h-20 rounded-full border border-[#86EFAC]/30 flex items-center justify-center mb-3 bg-sky-400/5 group-hover:border-[#FEF08A]/50 transition-colors duration-500">
                  <span class="font-serif text-3xl font-bold text-sky-400 group-hover:text-[#FEF08A] transition-colors">NMP</span>
                </div>
                <p class="font-serif italic text-sm text-slate-300">Natanael M. Panjaitan</p>
                <p class="text-xs text-[#86EFAC]/80 font-mono mt-1">S.Sos. | System Orchestrator</p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Scroll Down Hint -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity">
      <a href="#about" class="text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-sky-400 flex flex-col items-center gap-1">
        <span>Eksplorasi Rekam Jejak</span>
        <svg class="w-4 h-4 animate-bounce text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </div>
  </section>
</template>
