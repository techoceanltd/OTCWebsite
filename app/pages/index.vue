<template>
  <div class="home">

    <!-- ══ HERO ══════════════════════════════════════════════ -->
    <section class="hero card">
      <div class="hero__wrap">
        <img src="/images/otc-home.png" alt="OTC Logistics" class="hero__img" loading="lazy" />
        <div class="hero__overlay"></div>
        <div class="hero__inner">
          <div class="hero__copy">
            <h1 class="hero__heading">
              Delivering What Matters,<br />
              <span class="hero__heading--orange">When It Matters Most</span>
            </h1>
            <p class="hero__sub">
              At OTC Logistics, we don't just move goods, we move businesses forward. From
              express deliveries to complex supply chain solutions, we provide reliable,
              efficient, and tailored logistics services you can trust.
            </p>
            <div class="hero__actions">
              <NuxtLink to="/contact" class="hero__btn hero__btn--solid">Speak to Our Team</NuxtLink>
              <NuxtLink to="/services" class="hero__btn hero__btn--ghost">Explore our services</NuxtLink>
            </div>
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
    </section>

    <!-- ══ WHO WE ARE ════════════════════════════════════════ -->
    <section class="about card">
      <div class="about__wrap">
        <div class="about__inner">
          <div class="about__copy">
            <span class="section-eyebrow">WHO WE ARE</span>
            <h2 class="about__heading">More Than a Courier Company. We Are your Logistics Backbone.</h2>
            <p class="about__para">
              At OTC Logistics, we don't just move cargo; we move businesses forward. Born in Nigeria but
              with a growing fleet, real-time visibility, and a team that treats every delivery like it's going to
              our own family, we make logistics simple, reliable, and on time.
            </p>
            <p class="about__para">
              We started with courier and haulage and grew because our clients kept coming back. Today
              we operate across the full logistics spectrum in Africa: express parcel delivery, bulk cargo
              haulage, oil and gas supply chain management, agricultural commodity transport, cold chain
              services, Blockchain verified logistics documentation, manufacturing support, and
              procurement logistics. Multiple services. One company. One consistent standard.
            </p>
            <p class="about__para">
              Every shipment that leaves our hands carries our reputation with it and we protect that with
              everything we have, on every job, every single day.
            </p>
            <NuxtLink to="/about" class="btn-orange">Our Full Story</NuxtLink>
          </div>
          <div class="about__image">
            <img src="/images/warehouse.png" alt="OTC Warehouse" class="about__img" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- ══ SERVICES ══════════════════════════════════════════ -->
    <section class="services card">
      <div class="services__wrap">
        <div class="services__inner">
          <div class="services__header">
            <div>
              <h2 class="services__heading">Our Comprehensive<br />Logistics Solutions</h2>
            </div>
            <p class="services__desc">
              Delivering seamless, end-to-end logistics services designed to move your business
              forward—efficiently, reliably, and on time.
            </p>
          </div>

          <div class="services__grid">
            <NuxtLink
              v-for="svc in services"
              :key="svc.name"
              :to="`/services/${svc.slug}`"
              class="svc-card"
            >
              <div class="svc-card__img-wrap">
                <img :src="`/images/${svc.image}`" :alt="svc.name" class="svc-card__img" loading="lazy" />
                <span class="svc-card__label">{{ svc.name }}</span>
              </div>
              <div class="svc-card__body">
                <span class="svc-card__icon-sm" v-html="svc.icon"></span>
                <p class="svc-card__desc">{{ svc.desc }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ STATS BANNER ══════════════════════════════════════ -->
    <section class="stats card">
      <img src="/images/story.png" alt="" class="stats__img" aria-hidden="true" loading="lazy" />
      <div class="stats__overlay"></div>
        <div class="stats__inner">
          <div class="stats__left">
            <div class="stats__copy">
              <h2 class="stats__heading">Numbers That Tell the Story</h2>
              <p class="stats__sub">
                Every figure below represents a deadline met, a promise kept, and a client who
                trusted us with something important.
              </p>
            </div>
            <div class="stats__grid">
              <div v-for="s in stats" :key="s.label" class="stats__item">
                <span class="stats__value">{{ s.value }}</span>
                <span class="stats__label">{{ s.label }}</span>
              </div>
            </div>
          </div>

          <NuxtLink to="/quote" class="stats__cta">Join the stat</NuxtLink>
        </div>
    </section>

    <!-- ══ WHY OTC ════════════════════════════════════════════ -->
    <section class="why card">
      <div class="why__wrap">
        <div class="why__inner">
          <div class="why__header">
            <h2 class="why__heading">Why Businesses Choose OTC</h2>
            <p class="why__sub">
              We could list our fleet size and how many vehicles we run. But what our clients actually care
              about is simpler than that:
            </p>
          </div>

        <div class="why__grid">
          <div class="why__col why__col--left">
            <div v-for="(card) in whyCards.filter((_, i) => i % 2 === 0)" :key="card.title" class="why-card">
              <div class="why-card__icon" v-html="card.icon"></div>
              <h3 class="why-card__title">{{ card.title }}</h3>
              <p class="why-card__desc">{{ card.desc }}</p>
            </div>
          </div>
          <div class="why__col why__col--right">
            <div v-for="(card) in whyCards.filter((_, i) => i % 2 !== 0)" :key="card.title" class="why-card">
              <div class="why-card__icon" v-html="card.icon"></div>
              <h3 class="why-card__title">{{ card.title }}</h3>
              <p class="why-card__desc">{{ card.desc }}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    <!-- ══ SECTORS ════════════════════════════════════════════ -->
    <section class="sectors card">
      <div class="sectors__wrap">
        <div class="sectors__inner">
          <h2 class="sectors__heading">Trusted Across Every Sector</h2>
          <p class="sectors__sub">
            Our experience spans multiple industries, each with its own demands,
            timelines, and compliance requirements. We understand your sector, not just
            your shipment.
          </p>
          <div class="sectors__pills">
            <div v-for="sector in sectors" :key="sector.name" class="sector-pill">
                <img
                  :src="sector.icon"
                  :alt="sector.name"
                  class="sector-pill__icon"
                  loading="lazy"
                />
              <span>{{ sector.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ TESTIMONIALS ══════════════════════════════════════ -->
    <section class="testimonials card">
      <div class="testimonials__wrap">
        <div class="testimonials__inner">
          <div class="testimonials__header">
            <h2 class="testimonials__heading">When trust<br />meets results</h2>
            <p class="testimonials__desc">
              We don't ask you to take our word for it. Here is what the people who actually use
              our services have to say.
            </p>
          </div>

          <div class="testimonials__grid">
            <div
              v-for="t in testimonials"
              :key="t.name"
              class="testi-card"
            >
              <div class="testi-card__stars">
                <span v-for="i in 5" :key="i" class="testi-card__star">&#9733;</span>
              </div>

              <blockquote class="testi-card__quote">
                {{ t.quote }}
              </blockquote>

              <div class="testi-card__author">
                <div class="testi-card__avatar">
                  <img 
                    src="~/assets/img/svgs/arrowIcon.svg"
                    alt="Arrow Icon" 
                    class="testi-card__icon"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p class="testi-card__name">{{ t.name }}</p>
                  <p class="testi-card__company">{{ t.company }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import agro from '@/assets/img/svgs/agro.svg'
import oil from '@/assets/img/svgs/oil.svg'
import fmcg from '@/assets/img/svgs/fmcg.svg'
import commerce from '@/assets/img/svgs/commerce.svg'
import government from '@/assets/img/svgs/government.svg'
import healthcare from '@/assets/img/svgs/healthcare.svg'
import manufacture from '@/assets/img/svgs/manufacture.svg'
import construction from '@/assets/img/svgs/construction.svg'

useHead({
  title: 'OTC Courier & Logistics — Reliable Logistics Across Nigeria',
  meta: [{ name: 'description', content: 'OTC Logistics delivers reliable, on-time logistics services across Nigeria and Africa — from courier to supply chain management.' }],
})

const trustItems = [
  'GPS-Tracked on Every Route',
  'Fully Insured Shipments',
  'Reliable. Responsive. Results-driven.',
  'Same-Day & Scheduled Delivery',
  'On Time, Every Time, Everywhere',
]

const services = [
  {
    name: 'Haulage & Courier', slug: 'haulage', image: 'haulage.png',
    desc: "Fast, flexible, and dependable delivery solutions tailored to your needs. Whether it's a single package or large-scale cargo.",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8zM5.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM18.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>`,
  },
  {
    name: 'Oil & Gas Supply', slug: 'oil-gas', image: 'gas-supply.png',
    desc: 'Critical supply chains leave no room for error. We manage procurement, storage, and distribution of petroleum products.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 0 1 5 5c0 3-5 11-5 11S7 10 7 7a5 5 0 0 1 5-5z"/><circle cx="12" cy="7" r="2"/></svg>`,
  },
  {
    name: 'Agro Supplies', slug: 'agro', image: 'agro-supplies.png',
    desc: "Nigeria's agricultural sector moves at the pace of the season. We match that pace; transporting goods with speed and care.",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 1 0 20"/><path d="M12 2C6.48 2 2 6.48 2 12"/><path d="M12 12c-2 2-4 3-6 3"/></svg>`,
  },
  {
    name: 'Supply Chain Service', slug: 'supply-chain', image: 'chain-supply.png',
    desc: "We don't just move goods; we manage the entire flow. From supplier coordination to final delivery, we keep it running.",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>`,
  },
  {
    name: 'Blockchain Logistics', slug: 'blockchain', image: 'blockchain.png',
    desc: 'Transparency that cannot be faked. Tamper-proof, real-time record of every step your shipment takes in the supply chain.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  },
  {
    name: 'Manufacturing Logistics', slug: 'manufacturing', image: 'manufacture.png',
    desc: 'We synchronise raw material inbound, in-plant movement coordination, and finished goods distribution efficiently.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  },
  {
    name: 'Cold Chain Service', slug: 'cold-chain', image: 'cold-chain.png',
    desc: 'Our cold chain infrastructure maintains precise temperature control from origin to destination, with continuous monitoring.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  },
  {
    name: 'Procurement Logistics', slug: 'procurement', image: 'procurement.png',
    desc: 'We manage the sourcing, purchasing, and inbound logistics of your materials so you get what you need, at the right cost.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  },
]

const stats = [
  { value: '100+',     label: 'Packages Tracked' },
  { value: '10,000+', label: 'Deliveries Completed' },
  { value: '36',       label: 'States & FCT Covered' },
  { value: '500+',     label: 'Clients Served' },
]

const whyCards = [
  {
    title: 'We Show Up. Every Time.',
    desc: 'Roads, Traffic and Distance … We have built our operations around all of it. Our dispatch team tracks every shipment in real time, and when challenges arise, we handle them quietly without passing the stress down to you. You sent the goods. We deliver them.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  },
  {
    title: 'Complete Visibility. Pickup to Delivery.',
    desc: 'Every truck in our fleet is tracked. You know where your shipment is at any point in its journey not from a vague driver update, but from a live location. No guessing. No "he says he is almost there." Real information, available to you on demand.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  },
  {
    title: 'Your Cargo Is Covered.',
    desc: 'All goods in our care are covered by Goods-In-Transit insurance. In the unlikely event that something goes wrong, you are protected. That is not something every logistics company can honestly say. We can and we do it in writing.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  },
  {
    title: 'Someone Always Answers.',
    desc: 'Try calling some logistics companies at 7pm on a Friday. With OTC, someone picks up. Our team is available when your business needs us, not just within office hours because cargo does not wait for Monday morning, and neither do we.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
  },
]

const sectors = [
  { name: 'Oil & Gas', icon: oil },
  { name: 'Agriculture & Agro-Processing', icon: agro },
  { name: 'E-Commerce & Retail', icon: commerce },
  { name: 'Manufacturing & Industrial', icon: manufacture },
  { name: 'Pharmaceuticals & Healthcare', icon: healthcare },
  { name: 'FMCG & Consumer Goods', icon: fmcg },
  { name: 'Construction & Infrastructure', icon: construction },
  { name: 'Government & Public Sector', icon: government },
]

const testimonials = [
  {
    quote: '"We have worked with several logistics companies and OTC is the first one that communicates proactively. When there was a delay on one of our haulage runs, they called us before we even knew there was a problem. That level of professionalism is genuinely rare in this industry."',
    name: 'Supply Chain Manager',
    company: 'FMCG Distributor',
  },
  {
    quote: '"I run a physical store and ship to customers all over Nigeria daily. OTC handles my last-mile deliveries and I have never had to deal with a customer complaint about delivery timing or condition. The packages arrive right, the drivers are professional, and someone always picks up when I call."',
    name: 'Chibuike Emeniru',
    company: 'CEO, JOE-MARTEC',
  },
    {
    quote: '"I run a physical store and ship to customers all over Nigeria daily. OTC handles my last-mile deliveries and I have never had to deal with a customer complaint about delivery timing or condition. The packages arrive right, the drivers are professional, and someone always picks up when I call."',
    name: 'Chibuike Emeniru',
    company: 'CEO, JOE-MARTEC',
  },
    {
    quote: '"I run a physical store and ship to customers all over Nigeria daily. OTC handles my last-mile deliveries and I have never had to deal with a customer complaint about delivery timing or condition. The packages arrive right, the drivers are professional, and someone always picks up when I call."',
    name: 'Chibuike Emeniru',
    company: 'CEO, JOE-MARTEC',
  },
]
</script>

<style scoped>

.section-eyebrow {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #999;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.btn-orange {
  display: inline-block;
  background: #f47920;
  color: #fff;
  font-size: 14.5px;
  font-weight: 700;
  padding: 13px 28px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
}
.btn-orange:hover { background: #d96a10; transform: translateY(-1px); }

/* ══ PAGE BACKGROUND ═══════════════════════════════════════ */
.home {
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

.hero__img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.50) 60%, rgba(0,0,0,0.72) 100%);
  pointer-events: none;
}

.hero__inner {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 44px 60px;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 24px;
}

.hero__copy { flex: 1; min-width: 300px; }

.hero__heading {
  font-size: clamp(28px, 4vw, 50px);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  margin: 0 0 18px;
  letter-spacing: -0.5px;
}
.hero__heading--orange { color: #f47920; }

.hero__sub {
  font-size: 15px;
  color: rgba(255,255,255,0.65);
  line-height: 1.7;
  max-width: 500px;
  margin: 0 0 32px;
}

.hero__actions { display: flex; gap: 14px; flex-wrap: wrap; }

.hero__btn {
  text-decoration: none;
  font-size: 14.5px;
  font-weight: 600;
  padding: 13px 24px;
  border-radius: 100px;
  transition: all 0.2s;
  white-space: nowrap;
}
.hero__btn--solid { background: #ffffff; color: #1a1a1a; }
.hero__btn--solid:hover { background: #f0f0f0; }
.hero__btn--ghost { color: #ffffff; border: 1px solid rgba(255,255,255,0.35); }
.hero__btn--ghost:hover { background: rgba(255,255,255,0.08); }

.hero__trust-card {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  padding: 24px 28px;
  min-width: 280px;
  max-width: 360px;
}
.hero__trust-title { font-size: 14px; font-weight: 700; color: #ffffff; margin: 0 0 16px; }
.hero__trust-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; }
.hero__trust-item { display: flex; align-items: center; gap: 10px; font-size: 13.5px; color: rgba(255,255,255,0.85); }

/* ══ WHO WE ARE ════════════════════════════════════════════ */
.about {
  background: #ffffff;
  padding: 32px;
}

.about__wrap {
  border-radius: 24px;
  overflow: hidden;
  background: #ffffff;
}

.about__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
  padding: 96px 24px;
}

.about__heading {
  font-size: clamp(24px, 3.2vw, 38px);
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.15;
  margin: 0 0 28px;
  letter-spacing: -0.4px;
}

.about__para { font-size: 14.5px; color: #555; line-height: 1.75; margin: 0 0 16px; }
.about__para:last-of-type { margin-bottom: 32px; }
.btn-orange{border-radius: 100px}
.about__image { border-radius: 16px; overflow: hidden; background: #1a2535; }
.about__img { width: 100%; height: auto; display: block; object-fit: contain; }

/* ══ SERVICES ══════════════════════════════════════════════ */
.services {
  background: #ffffff;
  padding: 32px;
}

.services__wrap {
  border-radius: 24px;
  overflow: hidden;
  background: #f8f8f8;
}

.services__inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 88px 24px;
}

.services__header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 60px;
  margin-bottom: 52px;
  align-items: start;
}

.services__heading {
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.15;
  margin: 0;
  letter-spacing: -0.4px;
}

.services__desc { font-size: 15px; color: #666; line-height: 1.75; margin: 0; padding-top: 4px; }

.services__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }

.svc-card {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: transform 0.22s, box-shadow 0.22s;
  border: none;
}
.svc-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,0.1); }

.svc-card__img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.svc-card__label {
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

.svc-card__body {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 10px;
  padding: 12px 14px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  z-index: 2;
}
.svc-card__icon-sm { flex-shrink: 0; color: #f47920; margin-top: 2px; }
.svc-card__desc { font-size: 12.5px; color: #555; line-height: 1.6; margin: 0; }

/* ══ STATS BANNER ══════════════════════════════════════════ */
.stats { position: relative; background: #0e1520; overflow: hidden; }

.stats__img { width: 100%; height: auto; display: block; object-fit: contain; }

.stats__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.55);
  pointer-events: none;
}

.stats__inner {
  position: absolute;
  inset: 0;
  width: 100%;
  margin: 0 auto;
  padding: 0 44px 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
}
.stats__left {
  display: flex;
  flex-direction: column;
  gap: 0;
  flex: 0 0 auto;
  margin-bottom: 60px;
}

.stats__copy { margin-bottom: 40px; }
.stats__heading { font-size: clamp(22px, 3.5vw, 38px); font-weight: 700; color: #ffffff; margin: 0 0 12px; }
.stats__sub { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.65; max-width: 520px; margin: 0; }

.stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-left: 20px;
  align-items: stretch;
}

.stats__item {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 28px;
  font-family: 'Montserrat'; font-weight: 800;
}

/* divider between items */
.stats__item:not(:last-child)::after {
  content: "";
  position: absolute;
  top: -12px;
  right: 0;
  width: 1px;
  height: 120px;
  background: rgba(255,255,255,0.12);
}

.stats__value { font-size: clamp(36px, 5vw, 60px); font-weight: 900; color: #f47920; line-height: 1; letter-spacing: -1px; }
.stats__label { font-size: 13px; color: rgba(255,255,255,0.9);  font-family: 'Montserrat'; font-weight: 500;}

.stats__cta {
  display: inline-block;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  color: #ffffff;
  font-size: 13.5px;
  font-weight: 600;
  padding: 10px 22px;
  border-radius: 50px;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.2);
  transition: background 0.2s;
  white-space: nowrap;
  flex-shrink: 0;
  margin-bottom: 60px;
}
.stats__cta:hover { background: rgba(255,255,255,0.25); }



/* ══ WHY OTC ════════════════════════════════════════════════ */
.why {
  background: #ffffff;
  padding: 32px;
}

.why__wrap {
  background: #ffffff url('/images/white-arrow.png') no-repeat center;
  background-size: 100% auto;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
}

.why__inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; padding: 96px 24px; }

.why__header { text-align: center; margin-bottom: 56px; }
.why__heading { font-size: clamp(26px, 3.5vw, 40px); font-weight: 300; color: #1a1a1a; letter-spacing: -0.5px; margin: 0 0 16px; }
.why__sub { font-size: 15px; color: #888; max-width: 560px; margin: 0 auto; line-height: 1.65; }

.why__grid {
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: flex-start;
}

.why__col {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
}

.why__col--right {
  margin-top: 80px;
}

.why-card {
  background: #FFF3EA;
  border-radius: 16px;
  padding: 32px 28px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

/* Remove old nth-child offsets */
.why-card--offset { margin-top: 0 !important; }

.why-card__icon {
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  flex-shrink: 0;
}
.why-card__title { font-size: 17px; font-weight: 700; color: #1a1a1a; margin: 0 0 10px; letter-spacing: -0.2px; }
.why-card__desc { font-size: 13.5px; color: #666; line-height: 1.7; margin: 0; }

/* ══ SECTORS ════════════════════════════════════════════════ */
.sectors {
  background: #ffffff;
  padding: 32px;
}

.sectors__wrap {
  border-radius: 24px;
  overflow: hidden;
  background: #f3f4f5;
}

.sectors__inner {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 80px 24px;
}

.sectors__heading { font-size: clamp(24px, 3vw, 36px); font-weight: 300; color: #1a1a1a; margin: 0 0 16px; letter-spacing: -0.3px; }
.sectors__sub { font-size: 14.5px; color: #888; line-height: 1.7; max-width: 560px; margin: 0 auto 44px; }
.sectors__pills { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }

.sector-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 13.5px;
  color: #333;
  font-weight: 500;
  transition: border-color 0.2s, box-shadow 0.2s;
  cursor: default;
}
.sector-pill:hover { border-color: #f47920; box-shadow: 0 2px 12px rgba(244,121,32,0.1); }

/* ══ TESTIMONIALS ═══════════════════════════════════════════ */
.testimonials {
  background: #ffffff;
  padding: 32px;
}

.testimonials__wrap {
  border-radius: 24px;
  overflow: hidden;
  background: #ffffff;
}

.testimonials__inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 88px 24px 96px;
}

.testimonials__header { display: grid; grid-template-columns: 1fr 1fr; gap: 32px 72px; margin-bottom: 52px; align-items: start; }
.testimonials__heading { font-size: clamp(26px, 3.5vw, 40px); font-weight: 300; color: #1a1a1a; line-height: 1.2; margin: 0; letter-spacing: -0.4px; }
.testimonials__desc { font-size: 16px; color: #666; line-height: 1.7; margin: 0; padding-top: 8px; }

.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: stretch;
}

.testi-card {
  height: 100%;
}

.testi-card { background: #f6f7f9; border-radius: 16px; padding: 28px 28px 24px; display: flex; flex-direction: column; gap: 16px; }
.testi-card--featured { min-height: 360px; justify-content: space-between; }
.testi-card__stars { display: flex; gap: 4px; }
.testi-card__star { color: #f5a623; font-size: 20px; }
.testi-card__quote { font-size: 14px; color: #333; line-height: 1.7; margin: 0; font-style: normal; flex: 1; }
.testi-card__quote--large { font-size: 17px; font-weight: 500; }
.testi-card__author { display: flex; align-items: center; gap: 12px; }
.testi-card__avatar { width: 36px; height: 36px; border-radius: 50%; background: #f47920; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.testi-card__name { font-size: 13.5px; font-weight: 700; color: #1a1a1a; margin: 0; }
.testi-card__company { font-size: 12px; color: #999; margin: 0; }

/* ── Responsive ──────────────────────────────────────────── */
@media (max-width: 1025px) {
  .services__grid { grid-template-columns: repeat(2, 1fr); }
  .stats__grid    { grid-template-columns: repeat(2, 1fr); gap:10px;}
  .stats__left {
  display: flex;
  flex-direction: column;
  /* gap: 10; */
  /* flex: 0 0 auto; */
  margin-bottom: 60px; 
  }
}

@media (max-width: 900px) {
  .hero { padding: 20px; }
  .about, .services, .stats, .why, .sectors, .testimonials { padding: 20px; }
  .hero__wrap { border-radius: 18px; }
  .about__wrap, .services__wrap, .stats__wrap, .why__wrap, .sectors__wrap, .testimonials__wrap { border-radius: 18px; }
  
  .hero__heading    { font-size: clamp(22px, 5vw, 32px); }
  .hero__sub        { font-size: 13.5px; }
  .hero__btn        { font-size: 13px; padding: 11px 18px; }
  .about__inner         { grid-template-columns: 1fr; }
  .services__header     { grid-template-columns: 1fr; }
  .why__grid            { grid-template-columns: 1fr; }
  .stats__cta     { margin-bottom: 0; font-size: 12px; padding: 8px 19px; }
  .why-card--offset     { margin-top: 0; }
  .testimonials__header { grid-template-columns: 1fr; }
  .testimonials__grid   { grid-template-columns: 1fr; }
  .why                  { background-size: 70% auto; }
}

@media (max-width: 640px) {
  /* Hero image: taller crop so it stretches downward */
  .hero { padding: 12px; border-radius: 24px; }
  .about, .services, .stats, .why, .sectors, .testimonials { padding: 12px; }
  .hero__wrap { border-radius: 18px; }
  .about__wrap, .services__wrap, .stats__wrap, .why__wrap, .sectors__wrap, .testimonials__wrap { border-radius: 18px; }
  
  .hero__img {
    height: 520px;
    object-fit: cover;
    object-position: center top;
  }

  /* Inner: keep all content pinned to the bottom */
  .hero__inner {
    padding: 10% 20px 32px; /* top padding pushes content down */
    align-items: flex-end;
    flex-direction: column;
    justify-content: flex-end;
  }

  /* Smaller heading & body text */
  .hero__heading    { font-size: 18px; letter-spacing: -0.3px; margin-bottom: 10px; }
  .hero__sub        { font-size: 12px; line-height: 1.6; max-width: 100%; margin-bottom: 20px; }

  /* Buttons */
  .hero__actions    { gap: 8px; }
  .hero__btn        { font-size: 12px; padding: 9px 14px; }

  /* Trust card: full-width, compact */
  .hero__trust-card { max-width: 100%; width: 100%; padding: 14px 16px; }
  .hero__trust-title { font-size: 11.5px; margin-bottom: 10px; }
  .hero__trust-list  { gap: 8px; }
  .hero__trust-item  { font-size: 11.5px; }

  .services__grid { grid-template-columns: 1fr; }
  .stats__img {
    height: 560px;
    object-fit: cover;
  }
  .stats__inner {
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 16px;
  }
  .stats__left    { margin-bottom: 0; width: 100%; }
  .stats__copy    { margin-bottom: 20px; }
  .stats__heading { font-size: 20px; }
  .stats__sub     { font-size: 12px; }
    .stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats__item {
    margin-right: 0px;
    padding: 16px;
  }

  .stats__item::after {
    display: none;
  }

  .stats__item:nth-child(odd) {
    border-right: 1px solid rgba(255,255,255,0.12);
  }

  .stats__item:nth-child(-n+2) {
    border-bottom: 1px solid rgba(255,255,255,0.12);
  }
  /* .stats__grid    { grid-template-columns: repeat(2, 1fr); gap: 12px; margin-left: 0; } */
  .stats__value   { font-size: 32px; }
  .stats__label   { font-size: 11px; }
  .stats__cta     { margin-bottom: 0; font-size: 12px; padding: 8px 16px; }
.why__grid {
  flex-direction: column;
}

.why__col--right {
  margin-top: 0;
}
  .about__inner { padding: 48px 16px; }
  .services__inner { padding: 48px 16px; }
  .why__inner { padding: 48px 16px; }
  .sectors__inner { padding: 48px 16px; }
  .testimonials__inner { padding: 48px 16px 56px; }
}

@media (max-width: 400px) {
  .hero { padding: 10px; border-radius: 20px; }
  .about, .services, .stats, .why, .sectors, .testimonials { padding: 10px; }
  .hero__wrap { border-radius: 16px; }
  .about__wrap, .services__wrap, .stats__wrap, .why__wrap, .sectors__wrap, .testimonials__wrap { border-radius: 16px; }
  
  .hero__img      { height: 480px; }
  .hero__heading  { font-size: 16px; }
  .hero__sub      { font-size: 11.5px; }
  .hero__actions  { flex-direction: column; }
  .hero__btn      { text-align: center; font-size: 12px; }
  .hero__trust-title { font-size: 11px; }
  .hero__trust-item  { font-size: 11px; }
}
@media (min-width: 327px) and (max-width: 393px) {
  .hero__inner {
    padding: 10% 14px 24px;
    align-items: stretch;
    justify-content: flex-end;
    flex-direction: column;
    gap: 12px;
  }

  .hero__copy {
    min-width: 0;
    width: 100%;
  }

  .hero__actions {
    width: 100%;
    flex-direction: column;
    gap: 8px;
  }

  .hero__btn {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }

  .hero__trust-card {
    width: 100%;
    min-width: 0;
    max-width: 100%;
    box-sizing: border-box;
    padding: 14px 14px;
  }

  .hero__trust-item {
    font-size: 11px;
  }
}
@media (max-width: 321px) {
  .hero__img {
    height: 480px;
    object-fit: cover;
    object-position: center top;
  }
  .hero__inner {
    padding: 10% 10px 32px;
    align-items: stretch;        /* was flex-end — caused right-edge clipping */
    flex-direction: column;
    justify-content: flex-end;
  }
  .hero__copy {
    min-width: 0;                /* override base 300px so it doesn't overflow */
  }
  .hero__actions {
    width: 100%;                 /* was 80% — now fills the padded frame */
    flex-direction: column;
    gap: 8px;
  }
  .hero__btn {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }
  .hero__trust-card {
    width: 100%;
    max-width: 100%;
    min-width: 0;                /* override base 280px */
    margin-right: 0;             /* remove 25px push-out */
    padding: 14px 12px;
    box-sizing: border-box;
  }
  .hero__trust-item {
    font-size: 11px;
  }
}
</style>