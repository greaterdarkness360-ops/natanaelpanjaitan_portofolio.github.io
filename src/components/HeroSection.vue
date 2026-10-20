<template>
  <section class="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 max-w-6xl mx-auto overflow-hidden">
    <!-- Ambient Studio Background Glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#38BDF8]/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#86EFAC]/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
      <!-- Text Content -->
      <div class="lg:col-span-8 flex flex-col items-start space-y-6 text-left">
        <!-- Warm Greeting Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#86EFAC]/20 bg-[#1A1A1A]/80 text-[#86EFAC] text-xs font-medium tracking-wide">
          <span class="w-2 h-2 rounded-full bg-[#86EFAC] animate-pulse"></span>
          Halo, saya Natanael Metio Panjaitan.
        </div>

        <!-- Main Headline -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#F8FAFC] leading-[1.15] tracking-tight">
          Saya memecahkan masalah melalui <span class="text-[#38BDF8] italic">analisis sosial</span>, komunikasi strategis, dan rekayasa sistem digital.
        </h1>

        <!-- Sub headline -->
        <p class="text-base sm:text-lg text-[#94A3B8] font-normal leading-relaxed max-w-2xl">
          Sarjana Sosiologi (S.Sos.) dari Universitas Sumatera Utara (IPK 3.75) yang menjembatani kedalaman perilaku manusia dengan eksekusi produk teknologi dan operasional bisnis.
        </p>

        <!-- CTAs -->
        <div class="pt-4 flex flex-wrap gap-4 items-center">
          <a
            href="#works"
            class="px-6 py-3 rounded-full bg-[#38BDF8] text-[#121212] font-semibold text-sm hover:bg-[#FEF08A] transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_25px_rgba(254,240,138,0.35)]"
          >
            Lihat Portfolio
          </a>
          <a
            href="#about"
            class="px-6 py-3 rounded-full border border-white/10 bg-[#1A1A1A] text-[#F8FAFC] font-medium text-sm hover:border-[#86EFAC]/40 hover:text-[#FEF08A] transition-all duration-300"
          >
            Evolusi Sosial & Digital
          </a>
        </div>
      </div>

      <!-- Profile Image Frame -->
      <div class="lg:col-span-4 flex justify-center lg:justify-end">
        <div class="relative group">
          <!-- Outer Ring Studio Glow -->
          <div class="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#38BDF8] via-[#86EFAC] to-[#FEF08A] opacity-30 group-hover:opacity-70 blur-md transition-all duration-700"></div>

          <!-- Image Container with Thin Dove Green Border -->
          <div class="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-1 bg-[#1A1A1A] border border-[#86EFAC]/30 overflow-hidden shadow-2xl">
            <img
              v-if="!imageFailed"
              src="/assets/profile-placeholder.jpg"
              alt="Natanael Metio Panjaitan"
              class="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              @error="imageFailed = true"
            />
            <!-- Fallback Visual Badge if image missing -->
            <div
              v-if="imageFailed"
              class="w-full h-full rounded-full bg-gradient-to-br from-[#1A1A1A] via-[#262626] to-[#121212] flex flex-col items-center justify-center p-4 text-center border border-white/10"
            >
              <span class="font-serif text-3xl font-bold text-[#38BDF8] mb-1">NMP</span>
              <span class="text-xs text-[#94A3B8]">S.Sos. | System Orchestrator</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const imageFailed = ref(false);
</script>
