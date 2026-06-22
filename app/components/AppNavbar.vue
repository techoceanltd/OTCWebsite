<template>
  <header class="navbar">
    <div class="navbar__inner">
      <!-- Logo -->
      <NuxtLink to="/" class="navbar__logo">
        <img 
          src="/images/otc-logistics-logo.png" 
          alt="OTC Logistics Logo" 
          class="navbar__logo-img"
          loading="lazy"
        />
      </NuxtLink>

      <!-- Desktop Nav Links -->
      <nav class="navbar__nav" aria-label="Main navigation">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          class="navbar__link"
          :class="{ 'navbar__link--active': isActive(link.path) }"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <!-- CTA Actions -->
      <div class="navbar__actions">
        <NuxtLink to="/quote" class="navbar__quote-link">
          Get a Quote
        </NuxtLink>
        <NuxtLink to="/track" class="navbar__track-btn">
          Track Shipment
        </NuxtLink>
      </div>
      <!-- Mobile Hamburger -->
      <button
        class="navbar__hamburger"
        :class="{ 'navbar__hamburger--open': menuOpen }"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="menuOpen" class="navbar__mobile">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          class="navbar__mobile-link"
          :class="{ 'navbar__mobile-link--active': isActive(link.path) }"
          @click="menuOpen = false"
        >
          {{ link.name }}
        </NuxtLink>
        <div class="navbar__mobile-actions">
          <NuxtLink to="/quote" class="navbar__mobile-quote" @click="menuOpen = false">
            Get a Quote
          </NuxtLink>
          <NuxtLink to="/track" class="navbar__track-btn" @click="menuOpen = false">
            Track Shipment
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Coverage', path: '/coverage' },
  { name: 'Contact', path: '/contact' },
]


const isActive = (path) => route.path === path


</script>

<style scoped>
/* ─── Variables ─────────────────────────────────────── */
:root {
  --otc-orange: #f47920;
  --otc-dark: #1a1a1a;
  --otc-text: #333333;
  --otc-muted: #666666;
  --navbar-height: 68px;
}

/* ─── Navbar Shell ───────────────────────────────────── */
.navbar {
  height: 68px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
}

.navbar__inner {
  max-width: 1280px;
  margin: 0 auto;
    height: 68px;
  padding: 0 45px;
  display: flex;
  align-items: center;
  gap: 32px;
}

/* ─── Logo ───────────────────────────────────────────── */
.navbar__logo {
  text-decoration: none;
  flex-shrink: 0;
}

.navbar__logo-img {
  height: 42px;   /* adjust if needed */
  width: auto;
  display: block;
  object-fit: contain;
  /* margin-left: 45px; */
}

/* ─── Nav Links ──────────────────────────────────────── */
.navbar__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  flex: 20 0 auto; /* important */
  min-width: 420px; /* reserve space */
}

.navbar__link {
  text-decoration: none;
  color: var(--otc-text);
  font-size: 14.5px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 4px;
  transition: color 0.2s ease;
  position: relative;
  white-space: nowrap;
}

.navbar__link:hover {
  color: #f47920;
}

.navbar__link--active {
  color: #1a1a1a;
  font-weight: 700;
}

.navbar__link--active::after {
  content: '';
  position: absolute;
  bottom: 3px;
  left: 12px;
  right: 12px;
  height: 2px;
  background: #1a1a1a;
  border-radius: 2px;
}

/* ─── CTA Actions ────────────────────────────────────── */
.navbar__actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  margin-left: auto;
}

.navbar__quote-link {
  text-decoration: none;
  color: var(--otc-text);
  font-size: 14.5px;
  font-weight: 500;
  white-space: nowrap;
  transition: color 0.2s;
}

.navbar__quote-link:hover {
  color: #f47920;
}

.navbar__track-btn {
  text-decoration: none;
  background: #f47920;
  color: #ffffff;
  font-size: 14.5px;
  font-weight: 600;
  padding: 10px 22px;
  border-radius: 50px;
  white-space: nowrap;
  transition: background 0.2s ease, transform 0.15s ease;
  display: inline-block;
  text-align: center
}

.navbar__track-btn:hover {
  background: #d96a10;
  transform: translateY(-1px);
}

.navbar__track-btn:active {
  transform: translateY(0);
}

/* ─── Hamburger ──────────────────────────────────────── */
.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}

.navbar__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #1a1a1a;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.navbar__hamburger--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.navbar__hamburger--open span:nth-child(2) {
  opacity: 0;
}
.navbar__hamburger--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ─── Mobile Menu ────────────────────────────────────── */
.navbar__mobile {
  display: flex;
  flex-direction: column;
  padding: 16px 24px 24px;
  background: #ffffff;
  border-top: 1px solid #eeeeee;
  gap: 4px;
}

.navbar__mobile-link {
  text-decoration: none;
  color: var(--otc-text);
  font-size: 15px;
  font-weight: 500;
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
  transition: color 0.2s;
}

.navbar__mobile-link:hover,
.navbar__mobile-link--active {
  color: #f47920;
}

.navbar__mobile-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
}

.navbar__mobile-quote {
  text-decoration: none;
  color: var(--otc-text);
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 50px;
  transition: border-color 0.2s, color 0.2s;
}

.navbar__mobile-quote:hover {
  border-color: #f47920;
  color: #f47920;
}

/* ─── Mobile Menu Transition ─────────────────────────── */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ─── Responsive ─────────────────────────────────────── */
@media (max-width: 900px) {
  .navbar__nav,
  .navbar__actions {
    display: none;
  }
  .navbar__hamburger {
    display: flex;
  }
}
</style>