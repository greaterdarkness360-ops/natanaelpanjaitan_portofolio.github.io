<template>
  <footer id="contact" class="py-24 px-6 border-t border-white/5 bg-gradient-to-b from-[#121212] to-[#0A0A0A] relative overflow-hidden">
    <!-- Ambient Footer Glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#38BDF8]/5 rounded-full blur-[140px] pointer-events-none"></div>

    <div class="max-w-4xl mx-auto text-center space-y-8 relative z-10">
      <!-- Section Title -->
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#F8FAFC]">
        Setiap Sistem Memiliki Cerita Selanjutnya.
      </h2>

      <!-- Persuasive Summary Narrative -->
      <p class="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
        Baik itu merancang alur komunikasi yang memenangkan kepercayaan pelanggan, membedah struktur masalah manusia, maupun mengorkestrasi baris kode menjadi produk nyata, saya selalu tertarik pada ruang di mana empati bertemu dengan eksekusi. Mari berdiskusi tentang bagaimana kita bisa membangun sesuatu yang berdampak.
      </p>

      <!-- Two Primary Action Buttons (CTAs) -->
      <div class="pt-4 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        <!-- Button 1: Talk to Me (Primary CTA) -->
        <a
          href="mailto:natanaelpanjaitan74@gmail.com"
          class="px-8 py-3.5 rounded-full bg-[#38BDF8] text-[#121212] font-semibold text-base hover:bg-[#FEF08A] transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(254,240,138,0.4)] flex items-center gap-2"
        >
          <span>Talk to Me</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        <!-- Button 2: My Resume (Secondary CTA) -->
        <a
          href="./resume_natanael_metio_panjaitan.pdf"
          target="_blank"
          download
          class="px-8 py-3.5 rounded-full border border-[#86EFAC]/40 bg-[#1A1A1A] text-[#F8FAFC] font-medium text-base hover:border-[#86EFAC] hover:text-[#86EFAC] transition-all duration-300 flex items-center gap-2"
        >
          <span>My Resume</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>

      <!-- Divider -->
      <div class="pt-16 pb-8 border-t border-white/5 my-8"></div>

      <!-- Philosophical Easter Egg (At the very bottom of the page) -->
      <p class="font-serif italic text-xs sm:text-sm text-white/30 hover:text-white/70 transition-colors duration-1000 max-w-xl mx-auto leading-relaxed px-4">
        "Manusia begitu dalam, namun juga begitu rapuh. Kedalaman yang tak mendasar dari manusia, tak bisa di isi penuh dengan segala sesuatu di dunia. Hanya dengan Tuhan lah itu bisa terpenuhi."
      </p>

      <!-- Copyright line -->
      <p class="text-[11px] text-[#94A3B8]/60 pt-4">
        &copy; {{ new Date().getFullYear() }} Natanael Metio Panjaitan, S.Sos. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
