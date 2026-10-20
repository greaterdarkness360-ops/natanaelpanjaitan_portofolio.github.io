<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-4"
    :class="{ 'bg-[#121212]/80 backdrop-blur-md border-b border-white/10 shadow-2xl': isScrolled }"
  >
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <!-- Logo / Initials -->
      <a
        href="#"
        class="group flex items-center gap-2 text-xl font-serif font-bold tracking-wider text-white hover:text-[#FEF08A] transition-colors duration-300"
      >
        <span class="text-[#38BDF8] group-hover:text-[#FEF08A] transition-colors duration-300">NMP.</span>
      </a>

      <!-- Navigation Links -->
      <nav class="flex items-center gap-6 sm:gap-8 text-sm font-medium">
        <a
          href="#about"
          class="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#38BDF8] hover:after:w-full after:transition-all after:duration-300"
        >
          About
        </a>
        <a
          href="#works"
          class="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#38BDF8] hover:after:w-full after:transition-all after:duration-300"
        >
          Works
        </a>
        <a
          href="#contact"
          class="px-4 py-2 rounded-full border border-white/10 bg-[#1A1A1A] text-white hover:border-[#86EFAC]/40 hover:text-[#FEF08A] hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] transition-all duration-300"
        >
          Contact
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
