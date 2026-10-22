<script setup lang="ts">
import { computed } from 'vue';
import type { PortfolioItem } from '../types/portfolio';

const props = defineProps<{
  item: PortfolioItem | null;
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const allImages = computed(() => {
  if (!props.item) return [];
  const list: string[] = [];
  if (props.item.imagePlaceholder) {
    list.push(props.item.imagePlaceholder);
  }
  if (props.item.galleryImages && props.item.galleryImages.length > 0) {
    list.push(...props.item.galleryImages);
  }
  return list;
});
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen && item"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      @click.self="emit('close')"
    >
      <div
        class="bg-[#1A1A1A] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative my-8"
      >
        <!-- Tombol Tutup -->
        <button
          class="absolute top-5 right-5 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          @click="emit('close')"
          aria-label="Tutup modal"
        >
          ✕
        </button>

        <!-- Judul & Kategori -->
        <div class="mb-6 pr-8">
          <span
            class="inline-block px-3 py-1 text-xs tracking-wider uppercase rounded-full mb-3 font-medium"
            :class="
              item.category === 'TECH'
                ? 'bg-sky-400/10 text-sky-400 border border-sky-400/20'
                : 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20'
            "
          >
            {{ item.category === 'TECH' ? 'Rekayasa Perangkat Lunak' : 'Relasi Manusia & Operasional' }}
          </span>
          <h2 class="text-2xl md:text-3xl font-serif text-white mb-1">
            {{ item.title }}
          </h2>
          <p class="text-sm text-yellow-200/80 font-sans">
            {{ item.subtitle }}
          </p>
        </div>

        <!-- Galeri Gambar Proyek (Menampilkan Semua Foto) -->
        <div class="mb-8">
          <h3 class="text-xs uppercase tracking-wider text-gray-400 font-sans mb-3">
            Dokumentasi & Tangkapan Layar ({{ allImages.length }} Gambar)
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="(img, idx) in allImages"
              :key="idx"
              class="rounded-xl overflow-hidden border border-white/10 bg-[#121212] group relative aspect-video flex items-center justify-center"
            >
              <img
                :src="img"
                :alt="`${item.title} - Foto ${idx + 1}`"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- Detail: Konteks & Masalah -->
        <div class="mb-6 bg-white/[0.02] border border-white/5 rounded-xl p-5">
          <h4 class="text-sm font-semibold text-white mb-2 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-sky-400"></span>
            Konteks Masalah & Realitas Lapangan
          </h4>
          <p class="text-gray-300 text-sm leading-relaxed font-sans">
            {{ item.sociologicalContext }}
          </p>
        </div>

        <!-- Detail: Solusi & Eksekusi -->
        <div class="mb-6 bg-white/[0.02] border border-white/5 rounded-xl p-5">
          <h4 class="text-sm font-semibold text-white mb-2 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-yellow-200"></span>
            Solusi Nyata & Eksekusi
          </h4>
          <p class="text-gray-300 text-sm leading-relaxed font-sans">
            {{ item.solutionExecution }}
          </p>
        </div>

        <!-- Keahlian / Tech Stack -->
        <div>
          <h4 class="text-xs uppercase tracking-wider text-gray-400 font-sans mb-3">
            Instrumen & Keahlian
          </h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(skill, idx) in item.stackOrSkills"
              :key="idx"
              class="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-200"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
