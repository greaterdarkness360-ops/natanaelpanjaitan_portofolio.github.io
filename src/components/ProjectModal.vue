<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen && item"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
        @click.self="close"
      >
        <div class="relative w-full max-w-3xl bg-[#1A1A1A] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-left my-8 overflow-hidden">
          <!-- Close Button -->
          <button
            @click="close"
            class="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-[#121212] border border-white/10 text-[#94A3B8] hover:text-white hover:border-[#38BDF8] transition-all flex items-center justify-center"
            aria-label="Close modal"
          >
            ✕
          </button>

          <!-- Category Badge & Highlight -->
          <div class="flex flex-wrap items-center gap-3 pr-10">
            <span
              class="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border"
              :class="item.category === 'TECH'
                ? 'bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/30'
                : 'bg-[#FEF08A]/10 text-[#FEF08A] border-[#FEF08A]/30'"
            >
              {{ item.category === 'TECH' ? 'Rekayasa Perangkat Lunak' : 'Relasi Manusia & Bisnis' }}
            </span>
            <span v-if="item.highlightMetric" class="text-xs text-[#86EFAC] font-medium border border-[#86EFAC]/20 bg-[#86EFAC]/10 px-3 py-1 rounded-full">
              {{ item.highlightMetric }}
            </span>
          </div>

          <!-- Title & Subtitle -->
          <div>
            <h3 class="text-2xl sm:text-3xl font-serif font-semibold text-[#F8FAFC]">
              {{ item.title }}
            </h3>
            <p class="text-sm sm:text-base text-[#94A3B8] mt-1 italic">
              {{ item.subtitle }}
            </p>
          </div>

          <!-- Visual Cover Frame in Modal -->
          <div class="w-full h-48 sm:h-64 rounded-xl border border-white/10 bg-gradient-to-br from-[#262626] to-[#121212] relative overflow-hidden flex items-center justify-center">
            <img
              v-if="!modalImgFailed"
              :src="item.imagePlaceholder"
              :alt="item.title"
              class="w-full h-full object-cover"
              @error="modalImgFailed = true"
            />
            <div v-if="modalImgFailed" class="text-center p-6">
              <span class="font-serif text-3xl font-bold text-[#38BDF8] block mb-2">{{ item.title }}</span>
              <span class="text-xs text-[#94A3B8] uppercase tracking-widest">{{ item.subtitle }}</span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60"></div>
          </div>

          <!-- Structured Sections -->
          <div class="space-y-6 pt-2">
            <!-- 1. Konteks Sosiologis & Masalah -->
            <div class="p-4 rounded-xl bg-[#121212] border border-white/5 space-y-2">
              <h4 class="text-xs font-semibold text-[#38BDF8] uppercase tracking-wider flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                Konteks Sosiologis & Masalah
              </h4>
              <p class="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {{ item.sociologicalContext }}
              </p>
            </div>

            <!-- 2. Solusi & Eksekusi -->
            <div class="p-4 rounded-xl bg-[#121212] border border-white/5 space-y-2">
              <h4 class="text-xs font-semibold text-[#FEF08A] uppercase tracking-wider flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[#FEF08A]"></span>
                Solusi & Eksekusi
              </h4>
              <p class="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {{ item.solutionExecution }}
              </p>
            </div>

            <!-- 3. Instrumen & Keahlian -->
            <div class="p-4 rounded-xl bg-[#121212] border border-white/5 space-y-3">
              <h4 class="text-xs font-semibold text-[#86EFAC] uppercase tracking-wider flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[#86EFAC]"></span>
                Instrumen & Keahlian
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in item.stackOrSkills"
                  :key="skill"
                  class="px-3 py-1 rounded-full bg-[#1A1A1A] border border-white/10 text-xs text-[#F8FAFC] font-medium"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>

          <!-- Bottom Action -->
          <div class="pt-2 flex justify-end">
            <button
              @click="close"
              class="px-6 py-2.5 rounded-full bg-[#38BDF8] text-[#121212] font-semibold text-sm hover:bg-[#FEF08A] transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { PortfolioItem } from '../types/portfolio';

const props = defineProps<{
  isOpen: boolean;
  item: PortfolioItem | null;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const modalImgFailed = ref(false);

watch(() => props.item, () => {
  modalImgFailed.value = false;
});

const close = () => {
  emit('close');
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
