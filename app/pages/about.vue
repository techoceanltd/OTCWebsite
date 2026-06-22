<template>
  <div class="about-page">

    <!-- ══ HERO 1: Driven by Reliability ══════════════════════ -->
    <section class="hero card">
      <div class="hero__wrap">
        <div class="hero__bg hero__bg--truck">
          <div class="hero__overlay"></div>
        </div>
        <div class="hero__inner">
          <span class="hero__badge">Our Story</span>
          <div class="hero__bottom">
            <div class="hero__copy">
              <h1 class="hero__heading">
                Driven by Reliability.<br />
                <span class="hero__heading--orange">Powered by Excellence.</span>
              </h1>
              <p class="hero__sub">
                Every route we run, every deadline we meet, every call we answer; it all adds up to
                one thing: proving that professional, accountable logistics is possible.
              </p>
            </div>
            <div class="hero__trust-card">
              <p class="hero__trust-title">A Logistics Partner You Can Depend On</p>
              <ul class="hero__trust-list">
                <li v-for="item in trustItems" :key="item" class="hero__trust-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ WHO WE ARE + VALUES GLANCE ════════════════════════ -->
    <section class="intro-section card">
      <div class="intro-section__wrap">
        <div class="intro-section__inner">
          <div class="intro__copy">
            <h2 class="intro__heading">Delivering tailored solutions<br />across multiple industries.</h2>
            <p class="intro__para">OTC Logistics is a forward thinking logistics and supply company committed to delivering reliable, efficient, and tailored solutions across multiple industries.</p>
            <p class="intro__para">We understand that logistics is more than just transportation; it's about trust, timing, and precision. That's why we approach every project with a focus on efficiency, accountability, and customer satisfaction.</p>
            <p class="intro__para">From courier services to complex supply chain operations, we provide solutions that are designed to meet the evolving needs of modern businesses.</p>
            <p class="intro__para">Our mission is to make logistics stress-free so you can focus on what you do best which is growing your business.</p>
          </div>
          <div class="values-glance">
            <h3 class="values-glance__title">Our Values at a Glance</h3>
            <ul class="values-glance__list">
              <li v-for="v in glanceValues" :key="v.name" class="values-glance__item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <div>
                  <p class="values-glance__name">{{ v.name }}</p>
                  <p class="values-glance__desc">{{ v.desc }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ WHAT DRIVES US (Mission + Vision) ══════════════════ -->
    <section class="drives-section card">
      <div class="drives-section__wrap">
        <div class="drives-section__inner">
          <div class="drives__header">
            <h2 class="drives__heading">What Drives Us</h2>
            <p class="drives__desc">
              Powered by our mission and guided by our vision, we are redefining logistics through
              innovation, reliability, and unmatched service delivery.
            </p>
          </div>

          <div class="drives__cards">
            <!-- Mission card -->
            <div class="mv-card mv-card--mission">
              <div class="mv-card__content">
                <span class="mv-card__eyebrow mv-card__eyebrow--orange">OUR MISSION</span>
                <h3 class="mv-card__title">Why We Exist</h3>
                <p class="mv-card__text">
                  To provide every client : individual or corporation with logistics solutions that are reliable, transparent, and professionally executed at every stage. We exist to move what matters, to places that matter, on time and in perfect condition.
                </p>
              </div>
            </div>

            <!-- Vision card -->
            <div class="mv-card mv-card--vision">
              <div class="mv-card__content">
                <span class="mv-card__eyebrow">OUR VISION</span>
                <h3 class="mv-card__title">Where We Are Going</h3>
                <p class="mv-card__text">
                  To become the most trusted and technologically integrated logistics company in Africa ; a business known not just for moving goods, but for setting the benchmark of what professional logistics looks like on this continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ SIX VALUES GRID ════════════════════════════════════ -->
    <section class="values-section card">
      <div class="values-section__wrap">
        <div class="values-section__inner">
          <div class="values__header">
            <div>
              <h2 class="values__heading">Six Values That Run<br />Through Everything We Do</h2>
            </div>
            <p class="values__desc">
              Delivering seamless, end-to-end logistics services designed to move your business
              forward—efficiently, reliably, and on time.
            </p>
          </div>

          <div class="values__grid">
            <div v-for="val in coreValues" :key="val.name" class="val-card">
              <div class="val-card__img">
                <img :src="`/images/${val.img}`" :alt="val.name" class="val-card__bg" loading="lazy"/>
                <!-- Name pill — top left (same as before) -->
                <span class="val-card__label">{{ val.name }}</span>
                <!-- Description overlay — bottom, same position as label -->
                <div class="val-card__desc-overlay">
                  <span class="val-card__icon" v-html="val.icon"></span>
                  <p class="val-card__desc">{{ val.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ HERO 2: Born Out of Frustration ════════════════════ -->
    <section class="hero--story card">
      <div class="hero__wrap">
        <img src="/images/history.png" class="hero__img" loading="lazy" />
        <div class="hero__bg hero__bg--warehouse">
          <div class="hero__overlay hero__overlay--heavy"></div>
        </div>
        <div class="hero__inner hero__inner--story">
          <span class="hero__badge hero__badge--outline">Our Story</span>
          <div class="story__copy">
            <h2 class="story__heading">Born Out of Frustration. Built on Principle.</h2>
            <p class="story__para">
              OTC Courier & Logistics was founded because its founders experienced firsthand what bad logistics does to a business. Missed deliveries. Damaged goods. No communication from drivers. The deep frustration of dealing with companies that treated your cargo as just another number on a manifest: nothing special, nothing personal, not their problem if it goes wrong.
            </p>
            <p class="story__para">
              So we decided to build something different. OTC started as a focused courier and haulage operation rooted in one non-negotiable commitment: when we say your goods will arrive, they arrive. We invested in GPS tracking before it was standard practice. We trained drivers to handle every package as if it belonged to a family member. We made sure someone always answered the phone.
            </p>
            <p class="story__para">
              That commitment earned us our first clients. Then more. Then the calls began coming from larger businesses: oil and gas operators, agro-processing companies, manufacturers, pharmaceutical distributors who had heard that OTC actually delivers on what it says. Today we offer a complete portfolio of logistics services across Nigeria and Africa; but the heart of who we are has not changed. We are a company that shows up.
            </p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
useHead({
  title: 'About Us — OTC Logistics',
  meta: [{ name: 'description', content: 'Learn about OTC Courier & Logistics — our story, mission, vision and the six values that drive everything we do.' }],
})

const trustItems = [
  'GPS-Tracked on Every Route',
  'Fully Insured Shipments',
  'Reliable. Responsive. Results-driven.',
  'Same-Day & Scheduled Delivery',
  'On Time, Every Time, Everywhere',
]

const glanceValues = [
  { name: 'Reliability',    desc: 'We do what we say.' },
  { name: 'Speed',          desc: 'When you need it fast, we move faster.' },
  { name: 'Transparency',   desc: 'You always know where your goods are.' },
  { name: 'Partnership',    desc: 'Your success is our success.' },
]

const coreValues = [
  {
    name: 'Reliability',
    img: 'reliability.png',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
    desc: 'A promise made is a promise kept. We do not commit to timelines we cannot honour, and when we say something will happen, our clients set their calendars by it. Reliability is not a department in this company; it is everyone\'s job.',
  },
  {
    name: 'Transparency',
    img: 'transparency.png',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    desc: 'No hidden costs, no vague updates, no "it will get there soon." You have a right to know exactly what is happening with your shipment, your invoice, and your account at all times and we build every process around that right.',
  },
  {
    name: 'Client First',
    img: 'client-first.png',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    desc: 'Every decision we make from which routes we run to how we handle delays is made with the client\'s outcome in mind. Your business success is what makes ours possible, and we never forget that for a single day.',
  },
  {
    name: 'Innovation',
    img: 'innovation.png',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>`,
    desc: 'The logistics industry is changing fast — blockchain, cold chain technology, real-time tracking, digital documentation. We stay ahead of those changes so our clients benefit from the best modern logistics has to offer.',
  },
  {
    name: 'Safety',
    img: 'safety.png',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    desc: 'Every driver trained. Every vehicle maintained. Every cargo insured. Safety is not a policy document for us but it is a daily operating principle that protects our team, our clients\' goods, and the communities we move through.',
  },
  {
    name: 'Integrity',
    img: 'integrity.png',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
    desc: 'We do what is right, especially when no one is watching. If something goes wrong, we own it immediately and fix it. Our reputation is built on years of honest conduct, and we protect it on every single job.',
  },
]
</script>

<style scoped>

/* ══ PAGE BACKGROUND ═══════════════════════════════════════ */
.about-page {
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

/* ══ SHARED HERO BASE ══════════════════════════════════════ */
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
  background-size: cover;
  background-position: center;
}

/* Truck hero */
.hero__bg--truck {
  background-image: url('/images/otc-quote.png');
  background-size: cover;
  background-position: center;
}

/* Warehouse / story hero */
/* .hero__bg--warehouse {
  background-image: url('/images/history.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
} */

.hero__inner {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 36px 44px 56px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 560px;
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

.hero__badge--outline {
  background: transparent;
  border: 1.5px solid rgba(255,255,255,0.4);
  color: rgba(255,255,255,0.8);
}

.hero__bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 40px;
}

.hero__copy { max-width: 580px; }

.hero__heading {
  font-size: clamp(28px, 4vw, 50px);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  margin: 0 0 18px;
  letter-spacing: -0.5px;
}

.hero__heading--orange { color: #f47920; display: block; }

.hero__sub {
  font-size: 14.5px;
  color: rgba(255,255,255,0.65);
  line-height: 1.7;
  margin: 0;
  max-width: 480px;
}

/* Trust card */
.hero__trust-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  padding: 22px 28px;
  min-width: 280px;
  max-width: 360px;
}

.hero__trust-title {
  font-size: 13.5px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 14px;
}

.hero__trust-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }

.hero__trust-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: rgba(255,255,255,0.85);
}

/* ══ STORY HERO ════════════════════════════════════════════ */
.hero--story {
  position: relative;
}

.hero__img {
  width: 100%;
  height: auto;
  display: block;
}

.hero--story .hero__overlay,
.hero--story .hero__inner {
  position: absolute;
  inset: 0;
}

.hero__inner--story {
  justify-content: flex-start;
  gap: 0;
  margin-left: 0;
  margin-right: auto;
}

.story__copy {
  margin-top: auto;
  margin-left: 0;
  align-self: flex-start;
}

.story__heading {
  font-size: clamp(24px, 4vw, 44px);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.5;
  margin: 0 0 24px;
  letter-spacing: -0.4px;
}

.story__para {
  font-size: 14px;
  color: rgba(255,255,255,0.72);
  line-height: 1.8;
  margin: 0 0 14px;
}

/* ══ INTRO + VALUES GLANCE ═════════════════════════════════ */
.intro-section {
  background: #ffffff;
  padding: 32px;
}

.intro-section__wrap {
  border-radius: 24px;
  overflow: hidden;
  background: #ffffff;
}

.intro-section__inner {
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
  padding: 88px 24px;
}

.intro__heading {
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.2;
  margin: 0 0 24px;
  letter-spacing: -0.3px;
}

.intro__para {
  font-size: 14px;
  color: #555;
  line-height: 1.78;
  margin: 0 0 14px;
}

/* Values glance card */
.values-glance {
  background: rgba(241, 245, 249, 1);
  border-radius: 16px;
  padding: 32px 28px;
}

.values-glance__title {
  font-size: 35.33px;
  font-weight: 700;
  color: #F57010;
  margin: 0 0 24px;
}

.values-glance__list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 18px; }

.values-glance__item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.values-glance__item svg { flex-shrink: 0; margin-top: 10px; margin-right: 17.66px; }

.values-glance__name {
  font-size: 23.55px;
  font-weight: 500;
  color: #082552;
  margin: 0 0 2px;
}

.values-glance__desc {
  font-size: 17.66px;
  color: #262727;
  margin: 0;
}

/* ══ WHAT DRIVES US ════════════════════════════════════════ */
.drives-section {
  background: #ffffff;
  padding: 32px;
}

.drives-section__wrap {
  border-radius: 24px;
  overflow: hidden;
  background: #f8f8f8;
}

.drives-section__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 88px 24px;
}

.drives__header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 80px;
  margin-bottom: 52px;
  align-items: start;
}

.drives__heading {
  font-size: clamp(26px, 3.5vw, 40px);
  font-weight: 800;
  color: #082552;
  margin: 0;
  letter-spacing: -0.4px;
  line-height: 1.15;
}

.drives__desc {
  font-size: 15px;
  color: #7a8a9a;
  line-height: 1.75;
  margin: 0;
  padding-top: 6px;
}

.drives__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  background-image: url('/images/drives-card.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 20px;
  padding: 40px;
}

/* Mission / Vision card */
.mv-card {
  background: #ffffff;
  border-radius: 14px;
  padding: 44px 40px 40px;
  position: relative;
  overflow: hidden;
  min-height: 320px;
  display: flex;
  align-items: flex-end;
}

.mv-card__content { position: relative; z-index: 1; }

.mv-card__eyebrow {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #888;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.mv-card__eyebrow--orange { color: #f47920; }

.mv-card__title {
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 16px;
  letter-spacing: -0.3px;
}

.mv-card__text {
  font-size: 14.5px;
  color: #555;
  line-height: 1.75;
  margin: 0;
  max-width: 440px;
}

/* ══ SIX VALUES GRID ═══════════════════════════════════════ */
.values-section {
  background: #ffffff;
  padding: 32px;
}

.values-section__wrap {
  border-radius: 24px;
  overflow: hidden;
  background: #ffffff;
}

.values-section__inner {
  max-width: 1160px;
  margin: 0 auto;
  padding: 88px 24px 96px;
}

.values__header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 80px;
  margin-bottom: 52px;
  align-items: start;
}

.values__heading {
  font-size: clamp(24px, 3.5vw, 38px);
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: -0.4px;
  line-height: 1.15;
}

.values__desc {
  font-size: 15px;
  color: #7a8a9a;
  line-height: 1.75;
  margin: 0;
  padding-top: 6px;
}

.values__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Value card */
.val-card {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: transform 0.22s, box-shadow 0.22s;
  border: none;
}

.val-card:hover { box-shadow: 0 12px 36px rgba(0,0,0,0.12); transform: translateY(-4px); }

.val-card__bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Name pill — top left, exactly as before */
.val-card__label {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(255,255,255,0.85);
  color: #1a1a1a;
  font-size: 11.5px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 50px;
  backdrop-filter: blur(4px);
}

/* Description overlay — bottom left, mirrors label position */
.val-card__desc-overlay {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  padding: 16px 20px 20px;
  background: #ffffff;
  border-radius: 10px;
  padding: 12px 14px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  z-index: 2;
}

.val-card__icon { flex-shrink: 0; margin-top: 2px; }

.val-card__desc {
  font-size: 11.5px;
  color: #1a1a1a;
  line-height: 1.6;
  margin: 0;
}

/* ── Responsive ────────────────────────────────────────────── */
@media (max-width: 1024px) {
  .values__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 900px) {
  .hero {
    min-height: auto;
    padding: 18px;
  }

  .hero__inner {
    padding: 28px 24px 36px;
    min-height: 520px;
  }

  .hero__bottom {
    gap: 24px;
    align-items: flex-start;
  }

  .hero__copy {
    max-width: 100%;
  }

  .hero__heading {
    font-size: 38px;
    line-height: 1.15;
    margin-bottom: 16px;
  }

  .hero__sub {
    font-size: 15px;
    line-height: 1.7;
    max-width: 100%;
  }

  .hero__trust-card {
    width: 100%;
    max-width: 100%;
    padding: 20px;
  }

  .hero__trust-title {
    font-size: 14px;
  }

  .hero__trust-item {
    font-size: 13px;
  }

  /* STORY HERO */
  .hero__inner--story {
    padding: 28px 24px 36px;
    justify-content: flex-end;
  }

  .story__copy {
    margin-top: auto;
    width: 100%;
  }

  .story__heading {
    font-size: 34px;
    line-height: 1.2;
    margin-bottom: 18px;
  }

  .story__para {
    font-size: 12px;
    line-height: 1.75;
  }
  .intro-section, .drives-section, .values-section { padding: 20px; }
  .hero__wrap { border-radius: 18px; }
  .intro-section__wrap, .drives-section__wrap, .values-section__wrap { border-radius: 18px; }
  
  .intro-section__inner { grid-template-columns: 1fr; }
  .drives__header { grid-template-columns: 1fr; gap: 16px; }
  .drives__cards { grid-template-columns: 1fr; }
  .values__header { grid-template-columns: 1fr; gap: 16px; }
}

@media (max-width: 640px) {
.about-page {
    gap: 12px;
    padding: 12px;
  }

  .hero {
    padding: 10px;
    border-radius: 22px;
    min-height: auto;
  }

  .hero__wrap {
    border-radius: 18px;
  }

  .hero__inner {
    padding: 22px 18px 28px;
    min-height: 520px;
  }

  .hero__badge {
    font-size: 11px;
    padding: 5px 14px;
  }

  .hero__bottom {
    gap: 18px;
    padding-top: 24px;
  }

  .hero__heading {
    font-size: 30px;
    line-height: 1.08;
    letter-spacing: -0.6px;
    margin-bottom: 14px;
  }

  .hero__heading--orange {
    margin-top: 4px;
  }

  .hero__sub {
    font-size: 13.5px;
    line-height: 1.75;
    color: rgba(255,255,255,0.78);
  }

  .hero__trust-card {
    padding: 18px 16px;
    border-radius: 14px;
    min-width: 100%;
  }

  .hero__trust-title {
    font-size: 13px;
    margin-bottom: 12px;
  }

  .hero__trust-list {
    gap: 12px;
  }

  .hero__trust-item {
    font-size: 12.5px;
    line-height: 1.5;
    align-items: flex-start;
  }

  .hero__trust-item svg {
    margin-top: 2px;
    flex-shrink: 0;
  }

  /* STORY HERO MOBILE */
  .hero--story {
    min-height: auto;
  }

  .hero--story .hero__img {
    min-height: 760px;
    object-fit: cover;
  }

  .hero__inner--story {
    padding: 22px 18px 28px;
    justify-content: flex-end;
  }

  .story__copy {
    /* width: 100%; */
    padding-top: 60px;
  }

  .story__heading {
    font-size: 28px;
    line-height: 1.15;
    margin-bottom: 16px;
    max-width: 100%;
  }

  .story__para {
    font-size: 12.3px;
    line-height: 1.8;
    color: rgba(255,255,255,0.82);
    margin-bottom: 0px;
  }
  .intro-section, .drives-section, .values-section { padding: 12px; }
  .intro-section__wrap, .drives-section__wrap, .values-section__wrap { border-radius: 18px; }
  .values__grid { grid-template-columns: 1fr; }
  .mv-card { padding: 32px 24px 28px; }
  .values-glance__title { font-size: 25px; }
  .values-glance__name { font-size: 18px; }
  .values-glance__desc { font-size: 14px; }
  
  .intro-section__inner { padding: 48px 16px; }
  .drives-section__inner { padding: 48px 16px; }
  .values-section__inner { padding: 48px 16px 56px; }
}

@media (max-width: 400px) {
  .hero {
    padding: 8px;
    border-radius: 18px;
  }

  .hero__inner {
    padding: 18px 16px 24px;
    min-height: 500px;
  }

  .hero__heading {
    font-size: 26px;
  }

  .hero__sub {
    font-size: 13px;
  }

  .hero__trust-card {
    padding: 16px 14px;
  }

  .hero__trust-item {
    font-size: 12px;
  }

  .hero--story .hero__img {
    min-height: 860px;
  }

  .hero__inner--story {
    padding: 18px 16px 24px;
  }

  .story__copy {
    padding-top: 55px;
  }

  .story__heading {
    font-size: 24px;
    line-height: 1.2;
  }

  .story__para {
    font-size: 11.5px;
    line-height: 1.75;
  }
  .intro-section, .drives-section, .values-section { padding: 10px; }
  .hero__wrap { border-radius: 16px; }
  .intro-section__wrap, .drives-section__wrap, .values-section__wrap { border-radius: 16px; }
}
</style>