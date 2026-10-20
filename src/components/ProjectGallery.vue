<template>
  <section id="works" class="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
      <div>
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#86EFAC]/20 bg-[#1A1A1A] text-[#86EFAC] text-xs font-semibold uppercase tracking-widest mb-3">
          Portofolio Terpilih
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#F8FAFC]">
          Karya & Eksekusi Sistem
        </h2>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap gap-2">
        <button
          v-for="cat in categories"
          :key="cat.key"
          @click="activeCategory = cat.key"
          class="px-4 py-2 rounded-full text-xs font-medium transition-all duration-300"
          :class="activeCategory === cat.key
            ? 'bg-[#38BDF8] text-[#121212] font-semibold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
            : 'bg-[#1A1A1A] text-[#94A3B8] hover:text-[#F8FAFC] border border-white/10 hover:border-white/20'"
        >
          {{ cat.label }}
        </button>
      </div>
    </div>

    <!-- Bento Grid Gallery -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(item, index) in filteredItems"
        :key="item.id"
        @click="openModal(item)"
        class="group relative rounded-2xl bg-[#1A1A1A] border border-white/10 hover:border-[#86EFAC]/30 p-6 flex flex-col justify-between cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden"
        :class="{
          'md:col-span-2 lg:col-span-2': index === 0 && activeCategory === 'ALL',
        }"
      >
        <!-- Subtle Glow Background Effect on Hover -->
        <div class="absolute -inset-px bg-gradient-to-r from-[#38BDF8]/0 via-[#FEF08A]/0 to-[#86EFAC]/0 group-hover:from-[#38BDF8]/10 group-hover:via-[#FEF08A]/5 group-hover:to-[#86EFAC]/10 rounded-2xl transition-all duration-500 pointer-events-none"></div>

        <div>
          <!-- Top Row: Category Badge & Metric -->
          <div class="flex items-center justify-between gap-2 mb-4">
            <span
              class="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide border"
              :class="item.category === 'TECH'
                ? 'bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/20'
                : 'bg-[#FEF08A]/10 text-[#FEF08A] border-[#FEF08A]/20'"
            >
              {{ item.category === 'TECH' ? 'Rekayasa Perangkat Lunak' : 'Relasi Manusia & Bisnis' }}
            </span>
            <span v-if="item.highlightMetric" class="text-[11px] text-[#86EFAC] font-medium">
              {{ item.highlightMetric }}
            </span>
          </div>

          <!-- Title & Subtitle -->
          <h3 class="text-xl font-serif font-semibold text-[#F8FAFC] group-hover:text-[#FEF08A] transition-colors duration-300 leading-snug mb-2">
            {{ item.title }}
          </h3>
          <p class="text-xs sm:text-sm text-[#94A3B8] line-clamp-2 mb-6">
            {{ item.subtitle }}
          </p>
        </div>

        <!-- Card Bottom: Stack Tags & Action -->
        <div>
          <div class="flex flex-wrap gap-1.5 mb-4">
            <span
              v-for="skill in item.stackOrSkills.slice(0, 3)"
              :key="skill"
              class="px-2.5 py-0.5 rounded-md bg-[#121212] border border-white/5 text-[11px] text-[#94A3B8]"
            >
              {{ skill }}
            </span>
            <span v-if="item.stackOrSkills.length > 3" class="px-2 py-0.5 text-[11px] text-[#94A3B8]">
              +{{ item.stackOrSkills.length - 3 }}
            </span>
          </div>

          <div class="flex items-center gap-1 text-xs font-semibold text-[#38BDF8] group-hover:text-[#FEF08A] transition-colors duration-300">
            <span>Pelajari Lebih Lanjut</span>
            <span class="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Component -->
    <ProjectModal
      :is-open="isModalOpen"
      :item="selectedItem"
      @close="closeModal"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { portfolioItems } from '../data/portfolioData';
import type { PortfolioItem, ProjectCategory } from '../types/portfolio';
import ProjectModal from './ProjectModal.vue';

const activeCategory = ref<ProjectCategory>('ALL');
const isModalOpen = ref(false);
const selectedItem = ref<PortfolioItem | null>(null);

const categories = [
  { key: 'ALL' as ProjectCategory, label: 'Semua Karya' },
  { key: 'HUMAN_OPS' as ProjectCategory, label: 'Relasi Manusia & Bisnis' },
  { key: 'TECH' as ProjectCategory, label: 'Rekayasa Perangkat Lunak' },
];

const filteredItems = computed(() => {
  if (activeCategory.value === 'ALL') return portfolioItems;
  return portfolioItems.filter(item => item.category === activeCategory.value);
});

const openModal = (item: PortfolioItem) => {
  selectedItem.value = item;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedItem.value = null;
};
</script>
