<template>
  <div class="page">

    <section class="hero card">
      <div class="hero__img-wrap">
          <img src="/images/otc-hub.png" alt="OTC Logistics Hub" class="hero__img" loading="lazy" />
          <div class="hero__text">
            <h1 class="hero__heading">
              One Partner.<br />
              <span class="hero__heading--orange">Every Logistics Need.</span>
            </h1>
            <p class="hero__sub">
              From a single parcel to a full industrial supply chain. OTC has the team, the infrastructure, and the experience to handle it.
            </p>
          </div>
      </div>  
    </section>

    <section class="intro card">
      <div class="intro__inner">
        <h2 class="intro__heading">
          {{ intro.headingLine1 }}<br />
          {{ intro.headingLine2 }}
        </h2>
        <p v-for="(paragraph, index) in intro.paragraphs" :key="index" class="intro__body">
          {{ paragraph }}
        </p>
      </div>
    </section>

    <section v-for="(service, index) in services" :key="index" class="service card">
      <div class="service__img-wrap">
        <img :src="service.image" :alt="service.alt" class="service__img" loading="lazy" />
      </div>
      <div class="service__content">
        <h2 class="service__title">{{ service.title }}</h2>
        <p class="service__desc">{{ service.description }}</p>
        
        <div v-for="(block, bIndex) in service.blocks" :key="bIndex" class="service__block">
          <h3 class="service__block-heading">{{ block.heading }}</h3>
          <ul class="service__list">
            <li v-for="(item, iIndex) in block.items" :key="iIndex">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

// Intro Section Data
const intro = ref({
  headingLine1: 'Built for Every Industry.',
  headingLine2: 'Designed Around Your Needs.',
  paragraphs: [
    'No two logistics challenges are the same. The e-commerce merchant shipping 300 orders a day has different needs from the manufacturer coordinating a national distribution run. The oil and gas company moving industrial equipment across three states needs a different approach from the pharmaceutical business managing a temperature controlled distribution network.',
    'OTC was built to serve all of them well. Each of our service divisions has its own team, its own expertise, and its own operational protocols so that the specialist knowledge your shipment requires is always present, never assumed.'
  ]
})

// Services Array
const services = ref([
  {
    image: '/images/service1.png',
    alt: 'Haulage and Courier',
    title: 'HAULAGE & COURIER SERVICES',
    description: 'We provide reliable and efficient delivery solutions for both parcels and large cargo. From express shipments to scheduled deliveries, our services are designed to ensure safe handling, timely arrival, and complete peace of mind for every client.',
    blocks: [
      {
        heading: 'Express Delivery Service',
        items: [
          'Same-day delivery nationwide',
          'Next-day delivery on major routes.',
          'Real-time GPS tracking -- you see exactly where your package is at any point',
          'Delivery confirmation: signature, timestamp, and photo captured at the point of delivery',
          'Available 7 days a week including public holidays (advance booking required for holidays)',
          'Suitable for documents, parcels, small packages, electronics, and medical supplies'
        ]
      }
    ]
  },
  {
    image: '/images/service2.png',
    alt: 'Oil and Gas Supply',
    title: 'OIL & GAS SUPPLY',
    description: 'We support industrial and commercial operations with the timely delivery of essential petroleum products, including diesel, petrol, and kerosene. Our focus on safety, quality, and consistency ensures an uninterrupted energy supply for your business.',
    blocks: [
      {
        heading: 'Supply Chain Management',
        items: [
          'End-to-end coordination of petroleum product procurement and distribution',
          'Supplier identification, vetting, and ongoing performance management',
          'Inbound logistics for industrial materials, consumables, and operational supplies',
          'Just-in-time delivery to minimise on-site inventory holding costs'
        ]
      },
      {
        heading: 'Transportation & Delivery',
        items: [
          'Specialised fleet configured for petroleum and industrial cargo movement',
          'Compliant transportation for hazardous and regulated materials with full documentation',
          'Door-to-facility delivery to rigs, refineries, and field site locations'
        ]
      },
      {
        heading: 'Documentation & Compliance',
        items: [
          'Full documentation support: delivery notes, cargo manifests, waybills, inspection records',
          'Compliance with DPR/NUPRC regulations and applicable industry safety standards',
          'Goods-In-Transit insurance with documentation for all cargo movements',
          'Chain-of-custody records from source to destination for full audit traceability'
        ]
      }
    ]
  },
  {
    image: '/images/service3.png',
        alt: 'Agro Supplies',
    title: 'AGRO SUPPLIES',
    description: 'We source and distribute high-quality agricultural products to support businesses across the agro value chain. Our reliable logistics network ensures timely delivery and consistent supply to meet your operational needs.',
    blocks: [
      {
        heading: 'Agricultural Commodities We Handle',
        items: [
          'Grains: maize, rice, wheat, sorghum -- both bagged and bulk',
          'Roots and tubers: yam, cassava, sweet potatoes',
          'Fruits and vegetables -- with cold chain integration available for perishable produce',
          'Legumes: soybeans, cowpea, groundnuts',
          'Industrial crops: cotton, rubber, sugarcane'
        ]
      },
      {
        heading: 'Farm Inputs & Agro-Chemical Movement',
        items: [
          'Fertilisers (bagged and bulk) with safe handling and stacking protocols',
          'Pesticides and herbicides -- compliant packaging and full documentation',
          'Certified seeds and planting materials requiring careful handling',
          'Irrigation equipment and farming machinery'
        ]
      },
      {
        heading: 'Agro-Processing Supply Chains',
        items: [
          'Raw material inbound logistics for food processing and milling plants',
          'Finished goods distribution from processing facilities to distributors and markets',
          'Cross-docking solutions for high-volume seasonal commodity movements'
        ]
      }
    ]
  },

  {
    image: '/images/service4.png',
    alt: 'Supply Chain Service',
    title: 'SUPPLY CHAIN SERVICE',
    description: 'Our supply chain solutions are designed to streamline operations, improve coordination, and reduce delays. We help businesses manage the movement of goods efficiently from sourcing to final delivery.',
    blocks: [
      {
        heading: 'Our Supply Chain Services Include',
        items: [
          'Supply chain mapping and redesign -- we analyse your current flow and propose a leaner, more resilient alternative',
          'Supplier coordination and inbound logistics management',
          'Warehousing and inventory management at key transit hubs across Nigeria',
          'Order fulfilment coordination -- matching inbound supply with live outbound demand',
          'Demand forecasting support to help you plan cargo volume against sales projections',
          'Cross-docking and distribution centre management',
          'Returns management and reverse logistics handling',
          'Real-time reporting and operational dashboards accessible to your team',
          'Monthly performance reviews with on-time delivery data and improvement recommendations'
        ]
      }
    ]
  },

  {
    image: '/images/service5.png',
    alt: 'Blockchain Logistics',
    title: 'BLOCKCHAIN LOGISTICS SERVICE',
    description: 'We integrate modern technology into logistics operations to enhance transparency and accountability. Our blockchain-enabled solutions improve traceability and build trust across the supply chain.',
    blocks: [
      {
        heading: 'Immutable Documentation',
        items: [
          'Every shipment event -- pickup, transit checkpoint, handoff, delivery -- recorded on blockchain',
          'Tamper-proof audit trail accessible to all authorised parties in real time',
          'Permanently eliminates disputes over what was shipped, when, in what condition, and to whom'
        ]
      },
      {
        heading: 'Smart Contract Capabilities',
        items: [
          'Automated payment release tied to verified, on-chain delivery confirmation',
          'Automatic alerts triggered by specific supply chain milestones or exceptions',
          'Milestone-based documentation for multi-leg or complex international shipments'
        ]
      },
      {
        heading: 'Chain-of-Custody Verification',
        items: [
          'Continuous custody verification at every transfer and handoff point',
          'Particularly critical for pharmaceuticals, luxury goods, and all regulated materials',
          'Full exportable audit trail for regulatory compliance, legal proceedings, or investor due diligence'
        ]
      }
    ]
  },


  {
    image: '/images/service6.png',
    alt: 'Cold Chain Service',
    title: 'COLD CHAIN SERVICE',
    description: 'We provide temperature-controlled logistics for perishable and sensitive goods. Our systems ensure that products are stored and transported under the right conditions, maintaining quality from origin to destination.',
    blocks: [
      {
        heading: 'Temperature Range Capabilities',
        items: [
          'Ambient controlled: 15C to 25C -- for temperature-sensitive consumer goods, cosmetics, and certain nutraceuticals',
          'Chilled: 2C to 8C -- for vaccines, biologics, fresh produce, dairy, and most injectable pharmaceuticals',
          'Frozen: -18C to -25C -- for frozen food products, ice cream, and certain pharmaceutical formulations',
          'Deep frozen: Below -40C -- available on specific routes, confirm requirements at enquiry stage'
        ]
      },
      {
        heading: 'Industries and Products Served',
        items: [
          'Pharmaceuticals and vaccines: compliant with WHO and NAFDAC cold chain handling guidelines',
          'Fresh fruits and vegetables requiring controlled-atmosphere transport',
          'Meat, fish, and poultry -- fresh and frozen product lines',
          'Dairy products and chilled beverages',
          'Biotechnology specimens and laboratory samples',
          'FMCG chilled consumer goods: juices, dairy beverages, chilled snacks'
        ]
      },
      {
        heading: 'Temperature Monitoring and Control Protocols',
        items: [
          'Continuous electronic temperature logging throughout every transit -- not interval sampling only',
          'Real-time temperature excursion alerts sent immediately to OTC operations team and client if any deviation occurs',
          'Complete temperature excursion reports provided with every single shipment',
          'Cold chain handlers trained to pharmaceutical-grade handling protocols',
          'Qualified cold storage holding facilities available at key transit hubs for extended or multi-day runs'
        ]
      }
    ]
  },
  {
    image: '/images/service7.png',
    alt: 'Manufacturing Logistics',
    title: 'MANUFACTURING LOGISTICS',
    description: 'We support manufacturing operations with the efficient movement of raw materials and finished goods. Our services are tailored to reduce downtime and keep production processes running smoothly.',
    blocks: [
      {
        heading: 'Inbound Raw Material Logistics',
        items: [
          'Scheduled and unscheduled pickups from multiple suppliers coordinated against your production windows',
          'Supplier consolidation: combining runs from multiple suppliers into efficient, single delivery sequences',
          'Just-in-time delivery to your production gates -- reducing on-site inventory holding costs',
          'Quality check coordination at inbound receipt to confirm materials meet specification before entering production'
        ]
      },
      {
        heading: 'Finished Goods Distribution',
        items: [
          'Factory gate to distribution centre, retailer network, or end customer -- coordinated against your dispatch schedule',
          'High-volume outbound coordination for production run completions',
          'Product segregation, labelling compliance, and manifesting at outbound',
          'Synchronised dispatch with your sales order or ERP system'
        ]
      },
      {
        heading: 'Operational Partnership',
        items: [
          'Dedicated account manager with deep knowledge of your production cycle and seasonal patterns',
          'Flexible fleet allocation that scales up and down with your production volume',
          'Real-time exception management: if a delivery is going to miss your window, you know immediately -- not after',
          'Monthly performance reviews with on-time delivery data, volume analysis, and forward planning'
        ]
      }
    ]
  },

  {
    image: '/images/service8.png',
    alt: 'Procurement Logistics',
    title: 'PROCUREMENT LOGISTICS',
    description: 'We handle the sourcing, coordination, and delivery of essential goods for businesses. Our procurement logistics services ensure timely availability of resources, helping you maintain consistent operations without disruption.',
    blocks: [
      {
        heading: 'Supplier Sourcing and Management',
        items: [
          'Identification and due diligence vetting of reliable suppliers for your required materials',
          'Supplier relationship management and ongoing performance tracking',
          'Alternative supplier identification for critical materials -- eliminating single-source dependency risk',
          'Purchase order management support and supplier communication on your behalf'
        ]
      },
      {
        heading: 'Inbound Logistics Coordination',
        items: [
          'Scheduled pickups from supplier locations across Nigeria and coordinated at our hubs',
          'Cargo consolidation: combining inbound from multiple suppliers into efficient delivery sequences',
          'Customs documentation and import clearance coordination for internationally sourced materials',
          'Receipt inspection and quality verification before delivery to your facility'
        ]
      },
      {
        heading: 'Cost and Compliance Management',
        items: [
          'Procurement cost benchmarking and total landed cost calculations',
          'Compliance documentation for regulated and controlled materials',
          'Audit-ready procurement records, receipt logs, and consolidated spending reports',
          'Savings identification: regularly reviewing supplier options to reduce your material costs'
        ]
      }
    ]
  }
])
</script>

<style scoped>
.page {
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

/* ── HERO ─────────────────────────────────────────────── */
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

.hero__img-wrap {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  width: 100%;
  min-height: 100%;
}

.hero__img {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: block;
  object-fit: cover;
  object-position: center;
}

.hero__img-wrap::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(0,0,0,0.08) 0%,
      rgba(0,0,0,0.18) 30%,
      rgba(0,0,0,0.72) 100%
    );
}

.hero__text {
  position: absolute;
  bottom: 4rem;
  left: 5rem;
  right: 2rem;
  z-index: 2;
  max-width: 620px;
}

.hero__heading {
  font-size: clamp(42px, 5vw, 60px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -1px;
  color: #ffffff;
  margin: 0 0 18px;
}

.hero__heading--orange {
  color: #F57010;
  display: block;
}

.hero__sub {
  font-size: 15px;
  line-height: 1.8;
  color: rgba(255,255,255,0.78);
  max-width: 520px;
  margin: 0;
}

/* ── INTRO ────────────────────────────────────────────── */
.intro {
  background: #ffffff;
  padding: 5rem 4rem;
  text-align: center;
}

.intro__heading {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.25;
  color: #1a1a1a;
  margin-bottom: 1.75rem;
}

.intro__body {
  font-size: 0.9rem;
  line-height: 1.75;
  color: #444444;
  margin-bottom: 1rem;
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
}

.intro__body:last-child {
  margin-bottom: 0;
}

/* ── SERVICE SECTION ──────────────────────────────────── */
.service {
  background: #ffffff;
  display: flex;
  align-items: stretch;
  border-top: 1px solid #f0f0f0;
}


/* Image column */
.service__img-wrap {
  flex: 0 0 650px;
  width: 650px;
  overflow: hidden;
}

.service__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* Content column */
.service__content {
  flex: 1;
  padding: 3.5rem 4rem 3.5rem 3.5rem;
}

.service__title {
  font-size: 40px;
  font-weight: 700;
  color: #F57010;
}

.service__desc {
  font-size: 0.9rem;
  line-height: 1.75;
  color: #333333;
  margin-bottom: 1.75rem;
  max-width: 680px;
}

/* Sub-blocks */
.service__block {
  margin-bottom: 1.5rem;
}

.service__block:last-child {
  margin-bottom: 0;
}

.service__block-heading {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.6rem;
}

.service__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.service__list li {
  font-size: 0.875rem;
  line-height: 1.6;
  color: #333333;
  padding-left: 1.1rem;
  position: relative;
}

.service__list li::before {
  content: '-';
  position: absolute;
  left: 0;
  color: #333333;
}

/* ── RESPONSIVE ───────────────────────────────────────── */
@media (max-width: 900px) {
  .service {
    flex-direction: column;
  }

  .service__img-wrap {
    flex: none;
    width: 100%;
    height: 280px;
  }

  .service__content {
    padding: 2.5rem 1.5rem;
  }

  .intro {
    padding: 3.5rem 1.5rem;
  }

  .hero {
    min-height: auto;
    padding: 18px;
    border-radius: 24px;
  }

  .hero__img-wrap {
    border-radius: 20px;
  }

  .hero__img {
    min-height: 680px;
  }

  .hero__text {
    left: 2rem;
    right: 2rem;
    bottom: 2.5rem;
    max-width: 100%;
  }

  .hero__heading {
    font-size: 42px;
    line-height: 1.08;
    margin-bottom: 14px;
  }

  .hero__sub {
    font-size: 14px;
    max-width: 95%;
  }

}

@media (max-width: 600px) {
  .page {
    padding: 10px;
    gap: 12px;
  }

  .card {
    border-radius: 22px;
  }

  .hero {
    padding: 10px;
    border-radius: 22px;
    min-height: auto;
  }

  .hero__img-wrap {
    border-radius: 18px;
  }

  .hero__img {
    min-height: 560px;
    object-position: center;
  }

  .hero__img-wrap::after {
    background:
      linear-gradient(
        180deg,
        rgba(0,0,0,0.1) 10%,
        rgba(0,0,0,0.2) 35%,
        rgba(0,0,0,0.82) 100%
      );
  }

  .hero__text {
    left: 1.25rem;
    right: 1.25rem;
    bottom: 1.5rem;
    max-width: 100%;
  }

  .hero__heading {
    font-size: 32px;
    line-height: 1.08;
    letter-spacing: -0.8px;
    margin-bottom: 12px;
  }

  .hero__sub {
    font-size: 13px;
    line-height: 1.75;
    max-width: 100%;
    color: rgba(255,255,255,0.82);
  }

  .service__title {
    font-size: 1.15rem;
  }
}
@media (max-width: 400px) {
  .hero {
    padding: 8px;
    border-radius: 18px;
  }

  .hero__img-wrap {
    border-radius: 16px;
  }

  .hero__img {
    min-height: 500px;
  }

  .hero__text {
    left: 1rem;
    right: 1rem;
    bottom: 1.25rem;
  }

  .hero__heading {
    font-size: 26px;
    line-height: 1.1;
    margin-bottom: 10px;
  }

  .hero__sub {
    font-size: 12.5px;
    line-height: 1.7;
  }
}

</style>