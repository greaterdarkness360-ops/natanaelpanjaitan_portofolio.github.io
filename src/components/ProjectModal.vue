<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import type { PortfolioItem } from '../types/portfolio';

const props = defineProps<{
  item: PortfolioItem | null;
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close');
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOpen && item"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
      >
        <!-- Backdrop Blur Overlay -->
        <div
          @click="emit('close')"
          class="fixed inset-0 bg-[#121212]/80 backdrop-blur-md transition-opacity"
        ></div>

        <!-- Modal Dialog Box -->
        <div
          class="relative w-full max-w-3xl bg-[#1A1A1A] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-slate-100 max-h-[90vh] flex flex-col"
        >
          <!-- Modal Header -->
          <div class="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between bg-[#121212]/50">
            <div class="space-y-2 pr-6">
              <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/30">
                <span class="w-2 h-2 rounded-full bg-sky-400"></span>
                <span class="text-xs font-semibold text-sky-400 tracking-wide uppercase">
                  {{ item.category === 'TECH' ? 'Rekayasa Perangkat Lunak' : 'Relasi Manusia & Bisnis' }}
                </span>
              </div>
              <h3 class="font-serif text-2xl sm:text-3xl font-semibold leading-snug text-white">
                {{ item.title }}
              </h3>
              <p class="text-sm text-slate-400 font-light">
                {{ item.subtitle }}
              </p>
            </div>

            <!-- Close Button -->
            <button
              @click="emit('close')"
              class="p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
              aria-label="Tutup Dialog"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Modal Body (3 Structured Sections) -->
          <div class="p-6 sm:p-8 space-y-8 overflow-y-auto">

            <!-- Section 1: Konteks Sosiologis & Masalah -->
            <div class="space-y-3">
              <div class="flex items-center space-x-2 text-[#FEF08A]">
                <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <h4 class="font-serif text-lg font-medium text-[#FEF08A]">
                  Konteks Sosiologis & Masalah
                </h4>
              </div>
              <div class="p-4 rounded-2xl bg-[#121212] border border-white/5 text-slate-300 text-sm leading-relaxed font-light">
                {{ item.sociologicalContext }}
              </div>
            </div>

            <!-- Section 2: Solusi & Eksekusi -->
            <div class="space-y-3">
              <div class="flex items-center space-x-2 text-[#86EFAC]">
                <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 class="font-serif text-lg font-medium text-[#86EFAC]">
                  Solusi & Eksekusi
                </h4>
              </div>
              <div class="p-4 rounded-2xl bg-[#121212] border border-white/5 text-slate-300 text-sm leading-relaxed font-light">
                {{ item.solutionExecution }}
              </div>
            </div>

            <!-- Section 3: Instrumen & Keahlian -->
            <div class="space-y-3">
              <div class="flex items-center space-x-2 text-sky-400">
                <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.11a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <h4 class="font-serif text-lg font-medium text-sky-400">
                  Instrumen & Keahlian
                </h4>
              </div>
              <div class="flex flex-wrap gap-2 pt-1">
                <span
                  v-for="skill in item.stackOrSkills"
                  :key="skill"
                  class="px-3 py-1.5 rounded-xl bg-[#121212] border border-[#86EFAC]/20 text-xs font-medium text-slate-200"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Highlight Metric Badge if available -->
            <div v-if="item.highlightMetric" class="pt-2">
              <div class="p-3 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-between">
                <span class="text-xs text-slate-300 font-medium">Highlight Hasil Eksekusi:</span>
                <span class="text-xs font-bold text-sky-400 font-mono">{{ item.highlightMetric }}</span>
              </div>
            </div>

          </div>

          <!-- Modal Footer -->
          <div class="p-6 border-t border-white/10 bg-[#121212]/80 flex justify-end">
            <button
              @click="emit('close')"
              class="px-6 py-2.5 rounded-full bg-sky-400 text-slate-950 font-semibold text-sm hover:bg-[#FEF08A] transition-colors cursor-pointer"
            >
              Tutup Ringkasan
            </button>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>
