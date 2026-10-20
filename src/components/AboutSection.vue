<template>
  <section id="about" class="py-24 px-6 max-w-6xl mx-auto border-t border-white/5 relative">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <!-- Text Narrative Column -->
      <div class="lg:col-span-7 space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#38BDF8]/20 bg-[#1A1A1A] text-[#38BDF8] text-xs font-semibold uppercase tracking-widest">
          Latar Belakang & Filosofi
        </div>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#F8FAFC] leading-tight">
          Evolusi Logis Sosial dan Kualitatif
        </h2>

        <p class="text-[#94A3B8] text-base sm:text-lg leading-relaxed font-normal">
          Sebagai seorang lulusan Sosiologi, inti keahlian saya adalah memahami manusia, mulai dari apa yang mereka butuhkan, apa yang mereka keluhkan, hingga bagaimana mereka berinteraksi di dalam sebuah struktur. Saya menerjemahkan ketajaman riset kualitatif ini ke dalam dua bentuk eksekusi nyata: membangun komunikasi strategis yang menjembatani produk dengan pelanggan (Sales, B2C Operations, dan Konsultasi), serta merancang sistem perangkat lunak yang tepat guna melalui Vibe Coding dan AI System Orchestration. Bagi saya, kode pemrograman, negosiasi bisnis, dan pelayanan pelanggan adalah instrumen yang saling melengkapi untuk satu tujuan yang sama: menghadirkan solusi yang membumi bagi manusia.
        </p>

        <!-- Skill Badges Quick Summary -->
        <div class="pt-4 flex flex-wrap gap-2">
          <span class="px-3 py-1.5 rounded-md bg-[#1A1A1A] border border-white/10 text-xs font-medium text-[#F8FAFC]">Analisis Sosial</span>
          <span class="px-3 py-1.5 rounded-md bg-[#1A1A1A] border border-white/10 text-xs font-medium text-[#F8FAFC]">Komunikasi Strategis</span>
          <span class="px-3 py-1.5 rounded-md bg-[#1A1A1A] border border-white/10 text-xs font-medium text-[#F8FAFC]">B2C Operations</span>
          <span class="px-3 py-1.5 rounded-md bg-[#1A1A1A] border border-white/10 text-xs font-medium text-[#F8FAFC]">Vibe Coding</span>
          <span class="px-3 py-1.5 rounded-md bg-[#1A1A1A] border border-white/10 text-xs font-medium text-[#F8FAFC]">AI System Orchestration</span>
        </div>
      </div>

      <!-- Asymmetrical Visual Collage Grid Column -->
      <div class="lg:col-span-5 grid grid-cols-2 gap-4">
        <!-- Item 1: Large Card spanning 2 rows or full width -->
        <div class="col-span-2 relative group overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A] hover:border-[#86EFAC]/40 transition-all duration-700">
          <div class="aspect-[16/9] w-full bg-gradient-to-br from-[#262626] to-[#121212] relative overflow-hidden flex items-center justify-center">
            <img
              v-if="!img1Failed"
              src="/assets/activity-1.jpg"
              alt="Riset & Diskusi Kualitatif"
              class="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              @error="img1Failed = true"
            />
            <div v-if="img1Failed" class="absolute inset-0 flex flex-col items-center justify-center p-4 text-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
              <span class="font-serif text-2xl font-bold text-[#38BDF8] mb-1">Qualitative Research</span>
              <span class="text-xs text-[#94A3B8]">Deep Human & Structural Insight</span>
            </div>
            <!-- Overlay Gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80"></div>
          </div>
          <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span class="px-3 py-1 rounded-full bg-[#121212]/90 border border-[#86EFAC]/30 text-[#86EFAC] text-xs font-medium backdrop-blur-sm">
              Riset & Diskusi Kualitatif
            </span>
          </div>
        </div>

        <!-- Item 2: Small Card -->
        <div class="col-span-1 relative group overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A] hover:border-[#FEF08A]/40 transition-all duration-700">
          <div class="aspect-square w-full bg-gradient-to-br from-[#262626] to-[#121212] relative overflow-hidden flex items-center justify-center">
            <img
              v-if="!img2Failed"
              src="/assets/activity-2.jpg"
              alt="Operasional & Relasi Klien"
              class="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              @error="img2Failed = true"
            />
            <div v-if="img2Failed" class="absolute inset-0 flex flex-col items-center justify-center p-3 text-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
              <span class="font-serif text-lg font-bold text-[#FEF08A] mb-1">Client Relations</span>
              <span class="text-[10px] text-[#94A3B8]">B2C & Stakeholder Ops</span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80"></div>
          </div>
          <div class="absolute bottom-3 left-3 right-3">
            <span class="px-2.5 py-1 rounded-full bg-[#121212]/90 border border-[#FEF08A]/30 text-[#FEF08A] text-[11px] font-medium backdrop-blur-sm block truncate">
              Operasional & Relasi Klien
            </span>
          </div>
        </div>

        <!-- Item 3: Small Card -->
        <div class="col-span-1 relative group overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A] hover:border-[#38BDF8]/40 transition-all duration-700">
          <div class="aspect-square w-full bg-gradient-to-br from-[#262626] to-[#121212] relative overflow-hidden flex items-center justify-center">
            <img
              v-if="!img3Failed"
              src="/assets/activity-3.jpg"
              alt="Eksplorasi Sistem Digital"
              class="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              @error="img3Failed = true"
            />
            <div v-if="img3Failed" class="absolute inset-0 flex flex-col items-center justify-center p-3 text-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
              <span class="font-serif text-lg font-bold text-[#38BDF8] mb-1">Digital Systems</span>
              <span class="text-[10px] text-[#94A3B8]">AI & App Orchestration</span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80"></div>
          </div>
          <div class="absolute bottom-3 left-3 right-3">
            <span class="px-2.5 py-1 rounded-full bg-[#121212]/90 border border-[#38BDF8]/30 text-[#38BDF8] text-[11px] font-medium backdrop-blur-sm block truncate">
              Eksplorasi Sistem Digital
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const img1Failed = ref(false);
const img2Failed = ref(false);
const img3Failed = ref(false);
</script>
