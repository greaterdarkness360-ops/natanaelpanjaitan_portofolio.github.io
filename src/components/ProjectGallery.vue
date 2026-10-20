<script setup lang="ts">
import { ref, computed } from 'vue';
import type { PortfolioItem, ProjectCategory } from '../types/portfolio';
import { portfolioItems } from '../data/portfolioData';
import ProjectModal from './ProjectModal.vue';

const selectedCategory = ref<ProjectCategory>('ALL');
const activeModalItem = ref<PortfolioItem | null>(null);
const isModalOpen = ref(false);
const failedImages = ref<Record<string, boolean>>({});

const categories: { label: string; value: ProjectCategory }[] = [
  { label: 'Semua Karya', value: 'ALL' },
  { label: 'Relasi Manusia & Bisnis', value: 'HUMAN_OPS' },
  { label: 'Rekayasa Perangkat Lunak', value: 'TECH' },
];

const filteredItems = computed(() => {
  if (selectedCategory.value === 'ALL') {
    return portfolioItems;
  }
  return portfolioItems.filter(item => item.category === selectedCategory.value);
});

const openModal = (item: PortfolioItem) => {
  activeModalItem.value = item;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(() => {
    activeModalItem.value = null;
  }, 300);
};

const handleImageError = (id: string) => {
  failedImages.value[id] = true;
};
</script>

<template>
  <section id="works" class="py-24 px-6 relative bg-[#121212]">
    <div class="max-w-6xl mx-auto space-y-12">

      <!-- Section Header & Filter Controls -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
        <div class="space-y-4">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#86EFAC]/20">
            <span class="text-xs font-mono uppercase tracking-widest text-[#86EFAC]">Galeri Portofolio Terpilih</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-100 font-normal">
            Arsitektur Solusi & Hasil Eksekusi
          </h2>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat.value"
            @click="selectedCategory = cat.value"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border"
            :class="[
              selectedCategory === cat.value
                ? 'bg-sky-400 text-slate-950 border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                : 'bg-[#1A1A1A] text-slate-300 border-white/10 hover:border-[#FEF08A]/50 hover:text-[#FEF08A]'
            ]"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Bento Grid Portfolio Gallery -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in filteredItems"
          :key="item.id"
          @click="openModal(item)"
          class="group relative bg-[#1A1A1A] rounded-3xl overflow-hidden border border-white/10 hover:border-[#86EFAC]/50 hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500 cursor-pointer flex flex-col justify-between shadow-xl hover:shadow-[0_10px_30px_rgba(134,239,172,0.1)]"
          :class="[
            index % 7 === 0 ? 'lg:col-span-2' : '',
            index % 5 === 0 ? 'md:col-span-2 lg:col-span-1' : ''
          ]"
        >
          <!-- Card Image Header or Luxurious Fallback -->
          <div class="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
            <img
              v-if="!failedImages[item.id]"
              :src="item.imagePlaceholder"
              :alt="item.title"
              @error="handleImageError(item.id)"
              class="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />

            <!-- Fallback Design -->
            <div
              v-else
              class="w-full h-full bg-gradient-to-br from-[#1A1A1A] via-[#121212] to-[#262626] p-6 flex flex-col justify-between border-b border-white/5"
            >
              <div class="flex justify-between items-center">
                <span class="font-serif italic text-2xl font-bold text-sky-400/40 group-hover:text-sky-400/80 transition-colors">
                  0{{ index + 1 }}
                </span>
                <span class="text-xs font-mono text-[#86EFAC]/60 uppercase">
                  {{ item.category }}
                </span>
              </div>
              <p class="font-serif text-sm text-slate-400 line-clamp-2 italic">
                "{{ item.subtitle }}"
              </p>
            </div>

            <!-- Gradient Mask Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>

            <!-- Category Capsule Badge -->
            <div class="absolute top-4 left-4 z-10">
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-[#121212]/80 backdrop-blur-md border border-white/15 text-slate-200 group-hover:border-[#FEF08A]/50 transition-colors">
                {{ item.category === 'TECH' ? 'Rekayasa Sistem' : 'Relasi Manusia' }}
              </span>
            </div>
          </div>

          <!-- Card Body -->
          <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div class="space-y-2">
              <h3 class="font-serif text-xl sm:text-2xl font-medium text-slate-100 group-hover:text-sky-300 transition-colors leading-snug">
                {{ item.title }}
              </h3>
              <p class="text-xs sm:text-sm text-slate-400 font-light line-clamp-2 leading-relaxed">
                {{ item.subtitle }}
              </p>
            </div>

            <!-- Stack / Skill Pills -->
            <div class="space-y-4 pt-2">
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="skill in item.stackOrSkills.slice(0, 3)"
                  :key="skill"
                  class="px-2.5 py-1 rounded-lg bg-[#121212] border border-white/5 text-[11px] font-medium text-slate-300 group-hover:border-[#86EFAC]/20 transition-colors"
                >
                  {{ skill }}
                </span>
                <span v-if="item.stackOrSkills.length > 3" class="px-2 py-1 rounded-lg bg-[#121212] border border-white/5 text-[11px] text-slate-400">
                  +{{ item.stackOrSkills.length - 3 }}
                </span>
              </div>

              <!-- Action Link Hint -->
              <div class="flex items-center justify-between text-xs font-medium text-sky-400 group-hover:text-[#FEF08A] transition-colors pt-2 border-t border-white/5">
                <span>Pelajari Detail Analisis</span>
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <!-- Modal Dialog -->
    <ProjectModal
      :item="activeModalItem"
      :is-open="isModalOpen"
      @close="closeModal"
    />
  </section>
</template>
