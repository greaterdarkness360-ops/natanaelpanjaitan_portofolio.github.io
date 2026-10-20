<script setup lang="ts">
// Footer Section
</script>

<template>
  <footer id="contact" class="pt-24 pb-16 px-6 bg-[#121212] border-t border-white/10 relative overflow-hidden">
    <!-- Ambient Glow background -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="max-w-6xl mx-auto space-y-16 relative z-10">

      <!-- Call to Action Box -->
      <div class="bg-[#1A1A1A] p-8 sm:p-12 lg:p-16 rounded-3xl border border-white/10 text-center space-y-8 shadow-2xl relative group hover:border-[#86EFAC]/30 transition-all duration-500">

        <!-- Closing Headline -->
        <h2 class="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-100 font-normal leading-tight">
          Setiap Sistem Memiliki Cerita Selanjutnya.
        </h2>

        <!-- Persuasive Narrative -->
        <p class="text-base sm:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
          Baik itu merancang alur komunikasi yang memenangkan kepercayaan pelanggan, membedah struktur masalah manusia, maupun mengorkestrasi baris kode menjadi produk nyata, saya selalu tertarik pada ruang di mana empati bertemu dengan eksekusi. Mari berdiskusi tentang bagaimana kita bisa membangun sesuatu yang berdampak.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap justify-center items-center gap-4 pt-4">
          <!-- Primary CTA Button "Talk to Me" -->
          <a
            href="mailto:natanaelmetiopanjaitan@gmail.com"
            class="px-8 py-4 rounded-full bg-sky-400 text-slate-950 font-bold text-sm sm:text-base hover:bg-[#FEF08A] hover:shadow-[0_0_30px_rgba(254,240,138,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer inline-flex items-center space-x-2"
          >
            <span>Talk to Me</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <!-- Secondary CTA Button "My Resume" -->
          <a
            href="./assets/resume_natanael_metio_panjaitan.pdf"
            target="_blank"
            download="Resume_Natanael_Metio_Panjaitan.pdf"
            class="px-8 py-4 rounded-full bg-[#121212] text-slate-200 border border-[#86EFAC]/40 hover:border-[#FEF08A]/60 hover:text-[#FEF08A] transition-all duration-300 font-semibold text-sm sm:text-base inline-flex items-center space-x-2 cursor-pointer"
          >
            <svg class="w-5 h-5 text-[#86EFAC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>My Resume</span>
          </a>
        </div>
      </div>

      <!-- Copyright & Social Links Row -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 text-xs text-slate-400">
        <div class="space-y-1 text-center sm:text-left">
          <p class="font-medium text-slate-300">
            Natanael Metio Panjaitan (S.Sos.)
          </p>
          <p class="text-slate-500">
            Senior Systems Orchestrator & B2C Operations Architect
          </p>
        </div>

        <div class="flex items-center space-x-6 text-slate-400">
          <a href="https://github.com/natanaelpanjaitan" target="_blank" class="hover:text-sky-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/natanaelpanjaitan" target="_blank" class="hover:text-sky-400 transition-colors">LinkedIn</a>
          <a href="mailto:natanaelmetiopanjaitan@gmail.com" class="hover:text-sky-400 transition-colors">Email</a>
        </div>
      </div>

      <!-- Philosophical Easter Egg -->
      <div class="pt-8 text-center border-t border-white/5">
        <p class="font-serif italic text-xs sm:text-sm text-white/30 hover:text-white/70 transition-colors duration-1000 max-w-2xl mx-auto leading-relaxed select-none">
          "Manusia begitu dalam, namun juga begitu rapuh. Kedalaman yang tak mendasar dari manusia, tak bisa di isi penuh dengan segala sesuatu di dunia. Hanya dengan Tuhan lah itu bisa terpenuhi."
        </p>
      </div>

    </div>
  </footer>
</template>
