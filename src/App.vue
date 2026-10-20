<template>
  <div class="min-h-screen bg-[#121212] text-[#F8FAFC] font-sans antialiased selection:bg-[#38BDF8] selection:text-[#121212]">
    <!-- Floating Navbar -->
    <Navbar />

    <!-- Main Content Sections -->
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectGallery />
    </main>

    <!-- Footer Section -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ProjectGallery from './components/ProjectGallery.vue';
import FooterSection from './components/FooterSection.vue';
</script>
