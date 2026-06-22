<template>
  <div class="track-page">

    <!-- ── Hero Section ──────────────────────────────── -->
    <section class="hero card">
      <div class="hero__wrap">
        <div class="hero__content">
          <span class="hero__badge">Track Shipment</span>
          <h1 class="hero__heading">Know Exactly Where<br />Your Shipment Is.</h1>
          <!-- <p class="hero__sub">Enter your tracking number below to see the current status of your delivery.</p> -->

          <!-- <div class="hero__card">
            <p class="hero__card-label">Full Online Tracking Portal</p>
            <p class="hero__card-desc">
              Full self-service shipment tracking system that lets you track your OTC
              shipment in real time, 24 hours a day, without needing to contact our team.
            </p>
            <div class="hero__search">
              <input
                v-model="trackingInput"
                type="text"
                class="hero__input"
                placeholder="OTC-2026-04-008471"
                @keyup.enter="handleTrack"
              />
              <button class="hero__btn" :disabled="loading" @click="handleTrack">
                <span v-if="loading" class="hero__btn-spinner"></span>
                <span v-else>Track Result</span>
              </button>
            </div>
            <p v-if="error" class="hero__error">{{ error }}</p>
          </div> -->
        </div>
      </div>
    </section>

    <!-- ── Results Section ───────────────────────────── -->
    <Transition name="results-fade">
      <section v-if="result" class="results card">
        <div class="results__wrap">
          <div class="results__inner">

            <!-- Meta row -->
            <div class="results__meta">
              <div class="results__meta-block">
                <span class="results__meta-label">SHIPMENT REFERENCE</span>
                <span class="results__meta-value results__meta-value--bold">{{ result.reference }}</span>
              </div>
              <div class="results__meta-block">
                <span class="results__meta-label">ESTIMATED DELIVERY</span>
                <span class="results__meta-value results__meta-value--orange">{{ result.estimatedDelivery }}</span>
              </div>
              <div class="results__meta-block">
                <span class="results__meta-label">STATUS</span>
                <span class="results__status-badge" :class="`results__status-badge--${result.statusColor}`">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  {{ result.status }}
                </span>
              </div>
            </div>

            <!-- Timeline -->
            <div class="timeline">
              <div
                v-for="(step, index) in result.steps"
                :key="index"
                class="timeline__item"
                :class="{
                  'timeline__item--completed': step.state === 'completed',
                  'timeline__item--current': step.state === 'current',
                  'timeline__item--pending': step.state === 'pending',
                }"
              >
                <!-- Node -->
                <div class="timeline__node-wrap">
                  <div class="timeline__node">
                    <svg v-if="step.state === 'completed'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <div v-else-if="step.state === 'current'" class="timeline__node-dot"></div>
                  </div>
                  <div v-if="index < result.steps.length - 1" class="timeline__line"></div>
                </div>

                <!-- Content -->
                <div class="timeline__content">
                  <div class="timeline__header">
                    <h3 class="timeline__title">{{ step.title }}</h3>
                    <span class="timeline__time">{{ step.time }}</span>
                  </div>
                  <div v-if="step.location" class="timeline__location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {{ step.location }}
                  </div>
                  <p v-if="step.desc" class="timeline__desc">{{ step.desc }}</p>
                  <span v-if="step.state === 'pending'" class="timeline__pending-tag">Pending</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Transition>

    <!-- ── Three Ways Section ────────────────────────── -->
    <section class="ways card">
      <div class="ways__wrap">
        <div class="ways__inner">
          <div class="ways__header">
            <div class="ways__heading-wrap">
              <span class="ways__accent-bar" aria-hidden="true"></span>
              <h2 class="ways__heading">Three Ways to Track<br />Your Shipment Right Now</h2>
            </div>
            <p class="ways__desc">
              Our operations team monitors shipments around the clock. Contact us on any of these
              channels with your reference number and we will give you a live update within minutes.
            </p>
          </div>
          <div class="ways__cards">
            <div v-for="channel in channels" :key="channel.title" class="ways__card">
              <div class="ways__card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>
              <h3 class="ways__card-title">{{ channel.title }}</h3>
              <p class="ways__card-desc">{{ channel.desc }}</p>
              <a :href="channel.href" target="_blank" rel="noopener noreferrer" class="ways__card-btn">
                {{ channel.cta }}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          <ul class="ways__notes">
            <li v-for="note in notes" :key="note" class="ways__note">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <span>{{ note }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'


useHead({
  title: 'Track Shipment — OTC Logistics',
  meta: [{ name: 'description', content: 'Track your OTC Courier & Logistics shipment in real time.' }],
})

const trackingInput = ref('')
const loading = ref(false)
const error = ref('')
const result = ref(null) 

// ── Mock shipment database ──────────────────────────────
const mockShipments = {
  'OTC-2026-04-008471': {
    reference: 'OTC-2026-04-008471',
    estimatedDelivery: '13 Apr 2026 — by 5:00pm',
    status: 'In Transit',
    statusColor: 'green',
    steps: [
      {
        state: 'completed',
        title: 'ORDER RECEIVED',
        time: '12 Apr 2026 — 9:00am',
        location: 'Lagos, Ikeja',
        desc: 'Your booking has been confirmed and assigned reference OTC-2026-04-008471.',
      },
      {
        state: 'completed',
        title: 'PICKUP SCHEDULED',
        time: '12 Apr 2026 — 9:45am',
        location: 'Lagos, Ikeja',
        desc: 'A driver has been assigned for pickup between 10:00am and 12:00pm.',
      },
      {
        state: 'completed',
        title: 'PICKED UP',
        time: '12 Apr 2026 — 11:23am',
        location: 'Lagos, Ikeja — Pickup Address',
        desc: 'Package collected by Driver Emmanuel O. Vehicle: OTC-LG-047.',
      },
      {
        state: 'completed',
        title: 'IN TRANSIT — DEPARTED LAGOS HUB',
        time: '12 Apr 2026 — 1:15pm',
        location: 'OTC Lagos Hub, Ojodu Berger',
        desc: 'Shipment departed Lagos hub. En route to Abuja via A1 highway.',
      },
      {
        state: 'current',
        title: 'IN TRANSIT — CHECKPOINT CLEARED',
        time: '12 Apr 2026 — 4:42pm (Current)',
        location: 'Lokoja Checkpoint, Kogi State',
        desc: 'Shipment cleared checkpoint. Estimated arrival at Abuja Hub: 8:30pm today.',
      },
      {
        state: 'pending',
        title: 'ARRIVING AT ABUJA HUB',
        time: 'Expected: 12 Apr — ~8:30pm',
        location: 'OTC Abuja Hub, Kubwa',
        desc: null,
      },
      {
        state: 'pending',
        title: 'OUT FOR DELIVERY',
        time: 'Expected: 13 Apr — Morning',
        location: 'Abuja — Wuse 2',
        desc: null,
      },
      {
        state: 'pending',
        title: 'DELIVERED',
        time: 'Expected: 13 Apr — by 5:00pm',
        location: 'Wuse 2, Abuja',
        desc: null,
      },
    ],
  },
}

async function handleTrack() {
  error.value = ''
  result.value = null
  const ref = trackingInput.value.trim().toUpperCase()

  if (!ref) {
    error.value = 'Please enter a tracking reference number.'
    return
  }

  loading.value = true
  // Simulate network delay
  await new Promise((r) => setTimeout(r, 900))

  const shipment = mockShipments[ref]
  if (shipment) {
    result.value = shipment
  } else {
    error.value = `No shipment found for "${ref}". Please check the reference and try again.`
  }
  loading.value = false
}

// ── Channels & notes ────────────────────────────────────
const channels = [
  {
    title: 'Track via WhatsApp',
    desc: 'The fastest way to get a live status update. Send your reference number directly to our WhatsApp number and our operations team will respond with current location, status, and estimated delivery.',
    cta: 'Open WhatsApp Chat',
    href: 'https://wa.me/2348140512369',
  },
  {
    title: 'Track by Phone',
    desc: 'Call our operations line directly. Have your shipment reference number ready and we will pull your live status in real time while you are on the call.',
    cta: 'Call Operations Line',
    href: 'tel:+2348034691377',
  },
  {
    title: 'Track via Email',
    desc: 'Email us your reference number and we will reply with a full status update including current location and estimated delivery window, within one business hour during working hours.',
    cta: 'Email a Tracking Request',
    href: 'mailto:support@otccourierlogistics.com?subject=Tracking Request',
  },
]

const notes = [
  'Your shipment reference number is included in the booking confirmation we sent you. Check your email or WhatsApp message from us at the time of booking.',
  'If you do not have a reference number, provide your name, pickup date, and route and we will locate your shipment manually.',
  'For urgent shipments, WhatsApp is the fastest channel. Our team monitors it throughout the working day.',
]
</script>

<style scoped>
/* ══ PAGE BACKGROUND ═══════════════════════════════════════ */
.track-page {
  background: #000000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  box-sizing: border-box;
}

.card {
  border-radius: 32px;
  overflow: hidden;
}
/* ── Variables ─────────────────────────────────────────── */
:root {
  --otc-orange: #f47920;
  --otc-dark: #0d1b2a;
  --otc-navy: #0f2744;
}

/* ── Hero ──────────────────────────────────────────────── */
.hero {
  background: #ffffff;
  padding: 32px;
  border-radius: 32px;
  box-sizing: border-box;
  position: relative;
  min-height: 700px;
  display: flex;
  overflow: hidden;
}

.hero__wrap {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/otc-track.png'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 80px 24px 100px;
}

/* .hero__map-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
} */

/* .hero__map-svg 
  width: 100%;
  height: 100%;
} */

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 680px;
  width: 100%;
}

.hero__badge {
  display: inline-block;
  background: #f47920;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 5px 16px;
  border-radius: 50px;
  margin-bottom: 28px;
}

.hero__heading {
  font-size: clamp(28px, 5vw, 46px);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  margin: 0 0 16px;
  letter-spacing: -0.5px;
}

.hero__sub {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 36px;
}

/* Hero Card */
.hero__card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 32px 28px 28px;
}

.hero__card-label {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 10px;
}

.hero__card-desc {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.65;
  margin: 0 0 24px;
}

.hero__search {
  display: flex;
  gap: 10px;
}

.hero__input {
  flex: 1;
  height: 50px;
  padding: 0 18px;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.95);
  font-size: 15px;
  color: #1a1a1a;
  outline: none;
  transition: border-color 0.2s;
}

.hero__input:focus {
  border-color: #f47920;
}

.hero__input::placeholder {
  color: #aaaaaa;
}

.hero__btn {
  height: 50px;
  padding: 0 28px;
  background: #f47920;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s, transform 0.15s;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 130px;
  justify-content: center;
}

.hero__btn:hover:not(:disabled) {
  background: #d96a10;
  transform: translateY(-1px);
}

.hero__btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.hero__btn-spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.hero__error {
  margin: 14px 0 0;
  font-size: 13px;
  color: #ff7c7c;
  text-align: left;
}

/* ── Results ───────────────────────────────────────────── */
.results {
  background: #ffffff;
  padding: 32px;
}

.results__wrap {
  border-radius: 24px;
  overflow: hidden;
  background: #ffffff;
}

.results__inner {
  max-width: 820px;
  margin: 0 auto;
  padding: 56px 24px 64px;
}

.results__meta {
  display: flex;
  gap: 48px;
  margin-bottom: 48px;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-bottom: 32px;
  border-bottom: 1px solid #f0f0f0;
}

.results__meta-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.results__meta-label {
  font-size: 11px;
  letter-spacing: 1px;
  color: #999999;
  text-transform: uppercase;
  font-weight: 600;
}

.results__meta-value {
  font-size: 18px;
  color: #1a1a1a;
}

.results__meta-value--bold {
  font-weight: 800;
  font-size: 20px;
  letter-spacing: -0.3px;
}

.results__meta-value--orange {
  color: #f47920;
  font-weight: 700;
}

.results__status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 16px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 700;
  margin-top: 4px;
}

.results__status-badge--green {
  background: #16a34a;
  color: #ffffff;
}

.results__status-badge--orange {
  background: #f47920;
  color: #ffffff;
}

.results__status-badge--grey {
  background: #888888;
  color: #ffffff;
}

/* ── Timeline ──────────────────────────────────────────── */
.timeline {
  display: flex;
  flex-direction: column;
}

.timeline__item {
  display: flex;
  gap: 20px;
  position: relative;
}

/* Node column */
.timeline__node-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.timeline__node {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.timeline__item--completed .timeline__node {
  background: #f47920;
}

.timeline__item--current .timeline__node {
  background: #ffffff;
  border: 2.5px solid #f47920;
}

.timeline__item--pending .timeline__node {
  background: #ffffff;
  border: 2px solid #d4d4d4;
}

.timeline__node-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f47920;
}

.timeline__line {
  flex: 1;
  width: 2px;
  background: #e5e5e5;
  margin: 4px 0;
  min-height: 24px;
}

.timeline__item--completed .timeline__line {
  background: #f47920;
}

/* Content column */
.timeline__content {
  flex: 1;
  padding-bottom: 32px;
  min-width: 0;
}

.timeline__item:last-child .timeline__content {
  padding-bottom: 0;
}

.timeline__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 6px;
  flex-wrap: wrap;
}

.timeline__title {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.timeline__item--completed .timeline__title {
  color: #aaaaaa;
}

.timeline__item--current .timeline__title {
  color: #f47920;
}

.timeline__item--pending .timeline__title {
  color: #555555;
}

.timeline__time {
  font-size: 12.5px;
  color: #aaaaaa;
  white-space: nowrap;
 }

.timeline__item--current .timeline__time {
  color: #888888;
}

.timeline__location {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12.5px;
  color: #aaaaaa;
  margin-bottom: 6px;
 }

.timeline__item--current .timeline__location {
  color: #888888;
}

.timeline__desc {
  font-size: 13.5px;
  color: #555555;
  line-height: 1.6;
 }

.timeline__pending-tag {
  display: inline-block;
  font-size: 12px;
  color: #aaaaaa;
  margin-top: 4px;
 }

/* ── Three Ways ────────────────────────────────────────── */
.ways {
  background: #ffffff;
  padding: 32px;
}

.ways__wrap {
  border-radius: 24px;
  overflow: hidden;
  background: #f8f8f8;
}

.ways__inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 24px 88px;
}

.ways__header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 60px;
  margin-bottom: 52px;
  align-items: start;
}

.ways__heading-wrap {
  position: relative;
  padding-left: 20px;
}

.ways__accent-bar {
  position: absolute;
  left: 0;
  top: 6px;
  width: 4px;
  height: calc(100% - 12px);
  background: #f47920;
  border-radius: 4px;
}

.ways__heading {
  font-size: clamp(24px, 3.5vw, 36px);
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.2;
  margin: 0;
  letter-spacing: -0.5px;
  font-family: 'Georgia', 'Times New Roman', serif;
}

.ways__desc {
  font-size: 15px;
  color: #7a8a9a;
  line-height: 1.75;
  margin: 0;
   padding-top: 8px;
}

/* Cards */
.ways__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 44px;
}

.ways__card {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 14px;
  padding: 28px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: box-shadow 0.2s, transform 0.2s;
}

.ways__card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transform: translateY(-3px);
}

.ways__card-icon {
  width: 44px;
  height: 44px;
  background: #fff5ec;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}

.ways__card-title {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
 }

.ways__card-desc {
  font-size: 13.5px;
  color: #666666;
  line-height: 1.65;
  margin: 0;
  flex: 1;
 }

.ways__card-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px 20px;
  border: 1.5px solid #f47920;
  border-radius: 8px;
  color: #f47920;
  font-size: 13.5px;
  font-weight: 700;
  text-decoration: none;
  margin-top: 4px;
  transition: background 0.2s, color 0.2s;
 }

.ways__card-btn:hover {
  background: #f47920;
  color: #ffffff;
}

/* Notes */
.ways__notes {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.ways__note {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 13.5px;
  color: #555555;
  line-height: 1.6;
 }

.ways__note svg {
  flex-shrink: 0;
  margin-top: 2px;
}

/* ── Transitions ───────────────────────────────────────── */
.results-fade-enter-active,
.results-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.results-fade-enter-from,
.results-fade-leave-to {
  opacity: 0;
  transform: translateY(16px);
}

.results-fade-enter-to,
.results-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* ── Responsive ────────────────────────────────────────── */
@media (max-width: 900px) {
  .hero { padding: 20px; min-height: 560px; }
  .results, .ways { padding: 20px; }
  .hero__wrap { border-radius: 18px; padding: 60px 20px 80px; }
  .results__wrap, .ways__wrap { border-radius: 18px; }
  
  .ways__header {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .ways__cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .hero { padding: 12px; border-radius: 24px; min-height: unset; }
  .results, .ways { padding: 12px; }
  .hero__wrap { border-radius: 18px; padding: 60px 20px 80px; }
  .results__wrap, .ways__wrap { border-radius: 18px; }
  
  .hero__search {
    flex-direction: column;
  }

  .hero__input {
    height: 50px;
    width: 100%;
  }

  .hero__btn {
    width: 100%;
    min-width: unset;
    height: 50px;
  }

  .results__meta {
    gap: 24px;
  }
  
  .results__inner { padding: 36px 16px 44px; }
  .ways__inner { padding: 48px 16px 56px; }
}

@media (max-width: 400px) {
  .hero { padding: 10px; border-radius: 20px; }
  .results, .ways { padding: 10px; }
  .hero__wrap { border-radius: 16px; }
  .results__wrap, .ways__wrap { border-radius: 16px; }
}
</style>