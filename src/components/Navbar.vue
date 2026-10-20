<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollToSection = (id: string) => {
  isMobileMenuOpen.value = false;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-8 py-4"
  >
    <div
      class="max-w-6xl mx-auto rounded-full transition-all duration-500 px-6 py-3 flex items-center justify-between border"
      :class="[
        isScrolled
          ? 'bg-[#121212]/80 backdrop-blur-md border-white/10 shadow-2xl shadow-black/50'
          : 'bg-[#1A1A1A]/40 backdrop-blur-sm border-white/5'
      ]"
    >
      <!-- Logo / Monogram -->
      <a
        href="#"
        class="font-serif font-bold text-xl tracking-wider text-slate-100 hover:text-sky-400 transition-colors duration-300"
      >
        NMP<span class="text-sky-400">.</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center space-x-8 text-sm font-medium">
        <button
          @click="scrollToSection('about')"
          class="text-slate-300 hover:text-[#FEF08A] transition-colors duration-300 cursor-pointer"
        >
          About
        </button>
        <button
          @click="scrollToSection('works')"
          class="text-slate-300 hover:text-[#FEF08A] transition-colors duration-300 cursor-pointer"
        >
          Works
        </button>
        <button
          @click="scrollToSection('contact')"
          class="px-5 py-2 rounded-full border border-[#86EFAC]/30 text-sky-400 hover:text-[#FEF08A] hover:border-[#FEF08A]/50 hover:shadow-[0_0_15px_rgba(254,240,138,0.2)] transition-all duration-300 font-semibold cursor-pointer"
        >
          Contact
        </button>
      </nav>

      <!-- Mobile Menu Toggle -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden text-slate-300 hover:text-sky-400 focus:outline-none p-1"
        aria-label="Toggle Navigation"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden max-w-6xl mx-auto mt-2 p-6 rounded-2xl bg-[#1A1A1A]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col space-y-4 text-center"
      >
        <button
          @click="scrollToSection('about')"
          class="text-slate-300 hover:text-[#FEF08A] transition-colors py-2 font-medium"
        >
          About
        </button>
        <button
          @click="scrollToSection('works')"
          class="text-slate-300 hover:text-[#FEF08A] transition-colors py-2 font-medium"
        >
          Works
        </button>
        <button
          @click="scrollToSection('contact')"
          class="px-5 py-2.5 rounded-full border border-[#86EFAC]/30 text-sky-400 hover:text-[#FEF08A] hover:border-[#FEF08A]/50 transition-all font-semibold"
        >
          Contact
        </button>
      </div>
    </transition>
  </header>
</template>
