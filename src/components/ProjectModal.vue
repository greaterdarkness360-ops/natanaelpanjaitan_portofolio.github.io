<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { PortfolioItem } from '../types/portfolio';

const props = defineProps<{
  item: PortfolioItem | null;
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const previewImage = ref<string | null>(null);

// Reset pratinjau otomatis jika modal utama ditutup
watch(
  () => props.isOpen,
  (newVal) => {
    if (!newVal) {
      previewImage.value = null;
    }
  }
);

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

const openPreview = (img: string) => {
  previewImage.value = img;
};

const closePreview = () => {
  previewImage.value = null;
};
</script>

<template>
  <!-- Modal Utama -->
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
        <!-- Tombol Tutup Modal -->
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

        <!-- Galeri Gambar Utuh (Tidak Terpotong) -->
        <div class="mb-8">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xs uppercase tracking-wider text-gray-400 font-sans">
              Dokumentasi & Tangkapan Layar ({{ allImages.length }} Gambar)
            </h3>
            <span class="text-[11px] text-yellow-200/70 font-sans">
              🔍 Ketuk gambar untuk perbesar
            </span>
          </div>

          <div
            class="grid gap-4"
            :class="allImages.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'"
          >
            <div
              v-for="(img, idx) in allImages"
              :key="idx"
              class="rounded-xl overflow-hidden border border-white/10 bg-[#111111] cursor-pointer group relative flex items-center justify-center min-h-[220px] max-h-[380px] p-3 hover:border-yellow-200/50 transition-all duration-300"
              @click="openPreview(img)"
            >
              <img
                :src="img"
                :alt="`${item.title} - Foto ${idx + 1}`"
                class="w-auto h-auto max-w-full max-h-[350px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div
                class="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-md border border-white/15 opacity-80 group-hover:opacity-100 transition-opacity"
              >
                Perbesar ⤢
              </div>
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

  <!-- Lightbox Overlay (Layar Penuh Saat Gambar Diketuk) -->
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="previewImage"
      class="fixed inset-0 z-[70] flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-lg cursor-zoom-out"
      @click="closePreview"
    >
      <button
        class="absolute top-5 right-5 text-white text-lg bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
        @click.stop="closePreview"
        aria-label="Tutup pratinjau"
      >
        ✕
      </button>
      <img
        :src="previewImage"
        alt="Pratinjau Layar Penuh"
        class="max-w-[95vw] max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
      />
      <p class="text-xs text-gray-400 mt-3 font-sans">
        Ketuk di mana saja untuk menutup
      </p>
    </div>
  </Transition>
</template>
