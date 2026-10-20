<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ProjectGallery from './components/ProjectGallery.vue';
import FooterSection from './components/FooterSection.vue';
</script>

<template>
  <div class="min-h-screen bg-[#121212] text-[#F8FAFC] font-sans selection:bg-sky-400 selection:text-slate-950">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectGallery />
    </main>
    <FooterSection />
  </div>
</template>
