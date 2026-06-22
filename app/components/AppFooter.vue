<template>
  <footer class="footer">
    <!-- CTA Banner -->
    <div class="footer__cta card">
      <div class="footer__cta-inner">
        <h2 class="footer__cta-heading">Let's Move Your Business Forward</h2>
        <p class="footer__cta-text">
          Get a personalised quote from our team today. Transparent pricing.<br />
          No hidden charges. No vague timelines. Just honest logistics done right.
        </p>
        <NuxtLink to="/contact" class="footer__cta-btn">Contact Us Today</NuxtLink>
      </div>
    </div>

    <!-- Footer Body -->
    <div class="footer__body card">
      <div class="footer__grid">
        <!-- Column 1: Brand -->
        <div class="footer__col footer__col--brand">
          <NuxtLink to="/" class="footer__logo">
            <img 
              src="/images/otc-logistics-logo.png" 
              alt="OTC Logistics Logo" 
              class="navbar__logo-img"
              loading="lazy"
            />
          </NuxtLink>
          <p class="footer__brand-desc">
            OTC Courier &amp; Logistics Limited is a full-service logistics company delivering
            reliability and professionalism from individual parcels to industrial supply chains.
          </p>
          <div class="footer__socials">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__social-icon"
            >
              <span v-html="social.svg"></span>
            </a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="footer__col">
          <h3 class="footer__col-heading">Quick Links</h3>
          <ul class="footer__link-list">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink :to="link.path" class="footer__link">{{ link.name }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Services -->
        <div class="footer__col">
          <h3 class="footer__col-heading">Our Services</h3>
          <ul class="footer__link-list">
            <li v-for="service in services" :key="service.name">
              <NuxtLink :to="service.path" class="footer__link">{{ service.name }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 4: Get in Touch -->
        <div class="footer__col">
          <h3 class="footer__col-heading">Get in Touch</h3>
          <ul class="footer__contact-list">
            <li v-for="item in contactInfo" :key="item.label" class="footer__contact-item">
              <span class="footer__contact-icon" v-html="item.icon" aria-hidden="true"></span>
              <span class="footer__contact-text">{{ item.value }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- Footer Bottom Bar -->
      <div class="footer__bottom ">
        <div class="footer__bottom-inner">
          <p class="footer__copyright">
            &copy; {{ currentYear }} OTC Courier &amp; Logistics Limited. All Rights Reserved.
          </p>
          <div class="footer__bottom-links">
            <!-- <NuxtLink to="#" class="footer__bottom-link">Privacy Policy</NuxtLink>
            <NuxtLink to="#" class="footer__bottom-link">Terms of Service</NuxtLink> -->
          </div>
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Coverage', path: '/coverage' },
  { name: 'Track Shipment', path: '/track' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Privacy Policy', path: '#' },
]

const services = [
  { name: 'Haulage & Courier', path: '/services' },
  { name: 'Oil & Gas Supply', path: '/services' },
  { name: 'Agro Supplies', path: '/services' },
  { name: 'Cold Chain Service', path: '/services' },
  { name: 'Supply Chain Service', path: '/services' },
  { name: 'Blockchain Logistics', path: '/services' },
  { name: 'Manufacturing Logistics', path: '/services' },
  { name: 'Procurement Logistics', path: '/services' },
]

const contactInfo = [
  {
    label: 'Address',
    value: '36, Akin Osiyemi Street, off Allen Avenue, Ikeja, Lagos State, Nigeria',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  },
  {
    label: 'Phone',
    value: `
      UK: +44 7350 161379
      Israel: +972 559 841 750
      Nigeria: +234 803 832 3941
      Nigeria: +234 907 295 9624
        `,
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.37 2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/></svg>`,
  },
  {
    label: 'WhatsApp',
    value: 'WhatsApp: +234 814 051 2369',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
  },
  {
    label: 'Email',
    value: 'support@otccourierlogistics.com',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  },
  {
    label: 'Hours',
    value: 'Mon - Sat: 8am - 6pm',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  },
]

const socials = [
  {
    name: 'Facebook',
    href: null,
    svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/otccourierlogistics/',
    svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  },
  {
    name: 'LinkedIn',
    href: null,
    svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="white"/></svg>`,
  },
  {
    name: 'X (Twitter)',
    href: null,
    svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  },
]
</script>

<style scoped>
/* ─── Variables ──────────────────────────────────────── */
:root {
  --otc-orange: #f47920;
  --otc-dark: #1a1a1a;
}

.footer {
  background: #000000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px 16px 16px;
  box-sizing: border-box;
}

.card {
  border-radius: 32px;
  overflow: hidden;
}

/* ─── CTA Banner ─────────────────────────────────────── */
.footer__cta {
  background: url('/images/orange-arrow.png') no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.footer__cta-inner {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 60px 24px 64px;
  max-width: 680px;
  margin: 0 auto;
}

.footer__cta-heading {
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 16px;
  letter-spacing: -0.5px;
  line-height: 1.2;
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
}

.footer__cta-text {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin: 0 0 32px;
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
}

.footer__cta-btn {
  display: inline-block;
  text-decoration: none;
  background: #ffffff;
  color: #1a1a1a;
  font-size: 15px;
  font-weight: 700;
  padding: 14px 36px;
  border-radius: 50px;
  transition: background 0.2s, transform 0.15s;
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
}

.footer__cta-btn:hover {
  background: #f5f5f5;
  transform: translateY(-2px);
}

/* ─── Footer Body ────────────────────────────────────── */
.footer__body {
  background: #ffffff;
  padding: 56px 24px 40px;
}

.footer__grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.2fr 1.4fr;
  gap: 40px 32px;
}

/* ─── Brand Column ───────────────────────────────────── */
.footer__col--brand {
  padding-right: 16px;
}

.footer__logo {
  text-decoration: none;
  display: inline-block;
  margin-bottom: 20px;
}

.footer__logo-img {
  height: 42px;
  width: auto;
  display: block;
  object-fit: contain;
}

.footer__brand-desc {
  font-size: 13.5px;
  color: #555555;
  line-height: 1.75;
  margin: 0 0 24px;
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
}

.footer__socials {
  display: flex;
  gap: 10px;
}

.footer__social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: #1a1a1a;
  border-radius: 50%;
  color: #ffffff;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}

.footer__social-icon:hover {
  background: #f47920;
  transform: translateY(-2px);
}

/* ─── Column Headings ────────────────────────────────── */
.footer__col-heading {
  font-size: 15px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 20px;
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 0.2px;
}

/* ─── Link Lists ─────────────────────────────────────── */
.footer__link-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__link {
  text-decoration: none;
  color: #555555;
  font-size: 13.5px;
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  transition: color 0.2s;
}

.footer__link:hover {
  color: #f47920;
}

/* ─── Contact List ───────────────────────────────────── */
.footer__contact-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer__contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.footer__contact-icon {
  flex-shrink: 0;
  margin-top: 1px;
  display: flex;
}

.footer__contact-text {
  font-size: 13.5px;
  color: #555555;
  line-height: 1.3;
  white-space: pre-line;
}

/* ─── Bottom Bar ─────────────────────────────────────── */
.footer__bottom {
  background: #ffffff;
  margin-top: 20px;
  margin-right: 50px;
}

.footer__bottom-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.footer__copyright {
  font-size: 13px;
  color: #888888;
  margin: 0;
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
}

.footer__bottom-links {
  display: flex;
  gap: 24px;
}

.footer__bottom-link {
  text-decoration: none;
  font-size: 13px;
  color: #888888;
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  transition: color 0.2s;
}

.footer__bottom-link:hover {
  color: #f47920;
}

/* ─── Responsive ─────────────────────────────────────── */
@media (max-width: 1024px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: 36px 32px;
  }
  .footer__col--brand {
    grid-column: 1 / -1;
    padding-right: 0;
  }
}

@media (max-width: 640px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .footer__bottom-inner {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
}
</style>