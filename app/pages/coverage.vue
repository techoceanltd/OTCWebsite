<template>
  <div class="coverage-page">

    <!-- ══ HERO ══════════════════════════════════════════════ -->
    <section class="hero card">
      <div class="hero__wrap">
        <div class="hero__bg"></div>
        <div class="hero__inner">
          <span class="hero__badge">Our Story</span>
          <div class="hero__copy">
            <h1 class="hero__heading">Wherever Nigeria Does<br />Business, We Are There.</h1>
            <p class="hero__sub">
              OTC Courier & Logistics operates across all 36 states and the Federal Capital Territory
              and Africa. If it is in Nigeria or Africa as a whole, we can reach it.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ NATIONWIDE KNOWLEDGE ═══════════════════════════════ -->
    <section class="knowledge card">
      <div class="knowledge__wrap">
        <div class="knowledge__inner">
          <h2 class="knowledge__heading">Nationwide Coverage. Built on Ground-Level Knowledge.</h2>
          <div class="knowledge__body">
            <p class="knowledge__para">
              Covering Nigeria is not simply a matter of having trucks. It is about knowing the roads — the
              fast ones and the ones that flood in July. It is about knowing which checkpoints require which
              documentation and in what format. It is about having contingency routes when the direct path
              is blocked and reliable local contacts in cities we operate in regularly.
            </p>
            <p class="knowledge__para">
              OTC has built that knowledge over years of active operations across the country. Our route
              decisions are informed by data and hard-won operational experience — not just a navigation
              app. That translates directly into more reliable delivery windows, fewer surprises, and better
              outcomes for your cargo, whether it is moving 20 kilometres or 1,200 kilometres.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ MAP + BANNER + STATES — shared container ══════════ -->
    <section class="blocks-section card">
      <div class="blocks-section__wrap">
        <div class="blocks-inner">

          <!-- 1. Map card -->
          <div class="map-card">
            <img
              src="/images/nigeria-map.png"
              alt="Map of Nigeria showing all 36 states and the FCT"
              class="map-card__img"
              loading="lazy"
            />
          </div>

          <!-- 2. Orange info banner -->
          <div class="map-banner">
            <p class="map-banner__text">
              We deliver to all 36 states and the FCT and Africa as a whole. Our operations allow us to
              serve the full national network with efficient route planning and competitive transit times.
            </p>
          </div>

          <!-- 3. States list card -->
          <div class="states-card">
            <div class="states-grid">
              <div v-for="state in nigerianStates" :key="state" class="state-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
                <span>{{ state }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
useHead({
  title: 'Coverage — OTC Logistics',
  meta: [{ name: 'description', content: 'OTC Logistics covers all 36 states and the FCT across Nigeria and Africa. Nationwide logistics you can count on.' }],
})

const nigerianStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa',
  'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo',
  'Ekiti', 'Enugu', 'FCT (Abuja)', 'Gombe', 'Imo', 'Jigawa',
  'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
  'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun',
  'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
]
</script>

<style scoped>

/* ══ PAGE BACKGROUND ═══════════════════════════════════════ */
.coverage-page {
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

/* ══ HERO ══════════════════════════════════════════════════ */
.hero {
  background: #ffffff;
  padding: 32px;
  border-radius: 32px;
  box-sizing: border-box;
  position: relative;
  min-height: 100vh;
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
}

.hero__bg {
  position: absolute;
  inset: 0;
  background-image: url('/images/otc-coverage.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero__inner {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 36px 44px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero__badge {
  align-self: flex-start;
  background: #f47920;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 16px;
  border-radius: 50px;
}

.hero__copy {
  margin-top: auto;
  max-width: 620px;
}

.hero__heading {
  font-size: 50px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 18px;
}

.hero__sub {
  font-size: 14.5px;
  color: rgba(255,255,255,0.7);
  line-height: 1.7;
  margin: 0;
  max-width: 500px;
}

/* ══ KNOWLEDGE SECTION ═════════════════════════════════════ */
.knowledge {
  background: #ffffff;
  padding: 32px;
}

.knowledge__wrap {
  border-radius: 24px;
  overflow: hidden;
  background: #ffffff;
}

.knowledge__inner {
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
  padding: 96px 24px;
}

.knowledge__heading {
  font-size: clamp(24px, 3.5vw, 38px);
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.2;
  margin: 0 0 44px;
  letter-spacing: -0.4px;
}

.knowledge__body { display: flex; flex-direction: column; gap: 20px; }

.knowledge__para {
  font-size: 15px;
  color: #555;
  line-height: 1.8;
  margin: 0;
}

/* ══ SHARED BLOCKS SECTION ═════════════════════════════════ */
.blocks-section {
  background: #ffffff;
  padding: 32px;
}

.blocks-section__wrap {
  border-radius: 24px;
  overflow: hidden;
  background: #f6f7f9;
}

.blocks-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 48px 24px 88px;
}

/* ══ MAP CARD ══════════════════════════════════════════════ */
.map-card {
  background: #eef0f6;
  border-radius: 20px;
  padding: 32px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 24px rgba(0,0,0,0.05);
}

.map-card__img {
  width: 100%;
  max-width: 680px;
  height: auto;
  display: block;
  object-fit: contain;
}

/* ══ ORANGE BANNER ═════════════════════════════════════════ */
.map-banner {
  background: #f47920;
  border-radius: 14px;
  padding: 28px 36px;
}

.map-banner__text {
  font-size: 15px;
  color: #ffffff;
  line-height: 1.7;
  text-align: center;
  margin: 0 auto;
  max-width: 700px;
}

/* ══ STATES CARD ═══════════════════════════════════════════ */
.states-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 52px 60px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.05);
  background-image: url('/images/state-text.png');
  background-size: cover;
  background-position: center;
}

.states-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px 24px;
  position: relative;
  z-index: 1;
}

.state-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14.5px;
  color: #1a1a1a;
  font-weight: 500;
}

.state-item svg { flex-shrink: 0; }

/* ── Responsive ─────────────────────────────────────────── */
@media (max-width: 900px) {
  .hero { padding: 20px; min-height: 560px; }
  .knowledge, .blocks-section { padding: 20px; }
  .hero__wrap { border-radius: 18px; }
  .knowledge__wrap, .blocks-section__wrap { border-radius: 18px; }
  
  .hero__inner { padding: 28px 28px 48px; }
  .hero__copy { max-width: 100%; }
  .hero__sub { max-width: 100%; }
  .states-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 640px) {
  .coverage-page { gap: 10px; padding: 10px; }
  .card { border-radius: 24px; }

  .hero { padding: 12px; min-height: 440px; border-radius: 24px; }
  .knowledge, .blocks-section { padding: 12px; }
  .hero__wrap { border-radius: 18px; }
  .knowledge__wrap, .blocks-section__wrap { border-radius: 18px; }
  
  .hero__inner { padding: 22px 20px 36px; }
  .hero__heading { font-size: clamp(24px, 7vw, 34px); margin: 0 0 14px; }
  .hero__sub { font-size: 13.5px; }

  .blocks-inner { padding: 32px 16px 64px; gap: 20px; }
  .states-card { padding: 36px 24px; }
  .states-grid { grid-template-columns: repeat(2, 1fr); gap: 14px 16px; }
  .map-banner { padding: 20px; }
  
  .knowledge__inner { padding: 48px 16px; }
}

@media (max-width: 400px) {
  .hero { padding: 10px; border-radius: 20px; }
  .knowledge, .blocks-section { padding: 10px; }
  .hero__wrap { border-radius: 16px; }
  .knowledge__wrap, .blocks-section__wrap { border-radius: 16px; }
}
</style>