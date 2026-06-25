<template>
  <div class="quote-page">

    <!-- ══ HERO ══════════════════════════════════════════════ -->
    <section class="hero card">
      <div class="hero__wrap">
        <div class="hero__bg">
          <div class="hero__overlay"></div>
        </div>

        <div class="hero__inner">
          <span class="hero__badge">Our Story</span>

          <div class="hero__bottom-row">
            <div class="hero__copy">
              <h1 class="hero__heading">
                Tell Us What You're Moving.<br />
                <span class="hero__heading--orange">We'll Handle the Rest.</span>
              </h1>
              <p class="hero__sub">
                Fill in the form below and our team will respond with a personalised,
                transparent quote within one business hour.
              </p>
            </div>

            <div class="hero__promises-card">
              <div v-for="p in promises" :key="p" class="hero__promise">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
                <span>{{ p }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ QUOTE FORM ═════════════════════════════════════════ -->
    <section class="form-section card">
      <div class="form-section__wrap">
        <div class="form-section__inner">

          <Transition name="fade">
            <div v-if="submitted" class="success-box">
              <div class="success-box__icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h2 class="success-box__title">Quote Request Received!</h2>
              <p class="success-box__text">
                Thank you, <strong>{{ form.fullName }}</strong>. Our team will review your request
                and respond to <strong>{{ form.email }}</strong> within one business hour.
              </p>
              <button class="success-box__btn" @click="resetForm">Submit Another Request</button>
            </div>
          </Transition>

          <Transition name="fade">
            <form v-if="!submitted" class="quote-form" novalidate @submit.prevent="handleSubmit">
              <div class="form-header">
                <h2 class="form-header__title">Request a Quote</h2>
                <p class="form-header__sub">Fields marked <span class="req">*</span> are required.</p>
              </div>

              <!-- Row 1: Name + Company -->
              <div class="field-row">
                <div class="field" :class="{ 'field--error': errors.fullName }">
                  <label class="field__label">Full Name <span class="req">*</span></label>
                  <input v-model="form.fullName" type="text" class="field__input" placeholder="e.g. Chidi Okafor" @blur="validate('fullName')" />
                  <span v-if="errors.fullName" class="field__err">{{ errors.fullName }}</span>
                </div>
                <div class="field">
                  <label class="field__label">Company Name <span class="field__opt">(Optional)</span></label>
                  <input v-model="form.company" type="text" class="field__input" placeholder="e.g. Okafor & Sons Limited" />
                </div>
              </div>

              <!-- Row 2: Email + Phone -->
              <div class="field-row">
                <div class="field" :class="{ 'field--error': errors.email }">
                  <label class="field__label">Email Address <span class="req">*</span></label>
                  <input v-model="form.email" type="email" class="field__input" placeholder="e.g. chidi@yourcompany.com" @blur="validate('email')" />
                  <span v-if="errors.email" class="field__err">{{ errors.email }}</span>
                </div>
                <div class="field" :class="{ 'field--error': errors.phone }">
                  <label class="field__label">Phone Number <span class="req">*</span></label>
                  <input v-model="form.phone" type="tel" class="field__input" placeholder="e.g. 08012345678 or +2348012345678" @blur="validate('phone')" />
                  <span v-if="errors.phone" class="field__err">{{ errors.phone }}</span>
                </div>
              </div>

              <!-- Row 3: Pickup + Delivery -->
              <div class="field-row">
                <div class="field" :class="{ 'field--error': errors.pickupLocation }">
                  <label class="field__label">Pickup Location (State &amp; City) <span class="req">*</span></label>
                  <input v-model="form.pickupLocation" type="text" class="field__input" placeholder="e.g. Lagos — Ikeja" @blur="validate('pickupLocation')" />
                  <span v-if="errors.pickupLocation" class="field__err">{{ errors.pickupLocation }}</span>
                </div>
                <div class="field" :class="{ 'field--error': errors.deliveryDestination }">
                  <label class="field__label">Delivery Destination (State &amp; City) <span class="req">*</span></label>
                  <input v-model="form.deliveryDestination" type="text" class="field__input" placeholder="e.g. Abuja — Wuse 2" @blur="validate('deliveryDestination')" />
                  <span v-if="errors.deliveryDestination" class="field__err">{{ errors.deliveryDestination }}</span>
                </div>
              </div>

              <!-- Service Required -->
              <div class="field" :class="{ 'field--error': errors.service }">
                <label class="field__label">Service Required <span class="req">*</span></label>
                <div class="field__select-wrap">
                  <select v-model="form.service" class="field__select" @blur="validate('service')">
                    <option value="">-- Select a Service --</option>
                    <option>Haulage &amp; Courier</option>
                    <option>Oil &amp; Gas Supply</option>
                    <option>Agro Supplies</option>
                    <option>Cold Chain Service</option>
                    <option>Supply Chain Service</option>
                    <option>Blockchain Logistics</option>
                    <option>Manufacturing Logistics</option>
                    <option>Procurement Logistics</option>
                  </select>
                  <svg class="field__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                <span v-if="errors.service" class="field__err">{{ errors.service }}</span>
              </div>

              <!-- What Are You Shipping -->
              <div class="field" :class="{ 'field--error': errors.cargo }">
                <label class="field__label">What Are You Shipping? <span class="req">*</span></label>
                <textarea v-model="form.cargo" class="field__textarea" rows="4" placeholder="Describe the goods clearly. e.g. 50 bags of rice, 2 industrial generators, pharmaceutical shipment. More detail gives you a more accurate quote." @blur="validate('cargo')"></textarea>
                <span v-if="errors.cargo" class="field__err">{{ errors.cargo }}</span>
              </div>

              <!-- Row 4: Weight + Date -->
              <div class="field-row">
                <div class="field" :class="{ 'field--error': errors.weight }">
                  <label class="field__label">Estimated Weight <span class="req">*</span></label>
                  <div class="field__select-wrap">
                    <select v-model="form.weight" class="field__select" @blur="validate('weight')">
                      <option value="">-- Select weight range --</option>
                      <option>Under 5kg</option>
                      <option>5kg – 20kg</option>
                      <option>20kg – 100kg</option>
                      <option>100kg – 500kg</option>
                      <option>500kg – 1 tonne</option>
                      <option>1 tonne – 5 tonnes</option>
                      <option>5 tonnes – 20 tonnes</option>
                      <option>Over 20 tonnes</option>
                    </select>
                    <svg class="field__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                  <span v-if="errors.weight" class="field__err">{{ errors.weight }}</span>
                </div>
                <div class="field">
                  <label class="field__label">Preferred Pickup Date <span class="field__opt">(Optional)</span></label>
                  <input v-model="form.pickupDate" type="date" class="field__input" :min="minDate" />
                </div>
              </div>

              <!-- Additional Notes -->
              <div class="field">
                <label class="field__label">Additional Notes <span class="field__opt">(Optional)</span></label>
                <textarea v-model="form.notes" class="field__textarea" rows="3" placeholder="Any special handling needs, fragile items, access restrictions at pickup or delivery, urgency details, or anything else we should know."></textarea>
              </div>

              <!-- How Did You Find Us -->
              <div class="field">
                <label class="field__label">How Did You Find Us? <span class="field__opt">(Optional)</span></label>
                <div class="field__select-wrap field__select-wrap--half">
                  <select v-model="form.source" class="field__select">
                    <option value="">-- Select --</option>
                    <option>Google Search</option>
                    <option>Social Media</option>
                    <option>Referral / Word of Mouth</option>
                    <option>WhatsApp</option>
                    <option>LinkedIn</option>
                    <option>Other</option>
                  </select>
                  <svg class="field__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              </div>

              <!-- Submit -->
              <div class="form-footer"> 
                <button type="submit" class="submit-btn" :disabled="submitting">
                  <span v-if="submitting" class="submit-btn__spinner"></span>
                  <span v-else>Submit My Quote Request</span>
                </button>
                <p class="form-footer__legal">
                  By submitting this form, you agree to our
                  <NuxtLink to="#" class="form-footer__link">Privacy Policy</NuxtLink>.
                  We will never share your information with third parties.
                </p>
              </div>
            </form>
          </Transition>

        </div>
      </div>
    </section>

    <!-- ══ CONTACT CHANNELS ═══════════════════════════════════ -->
    <section class="contact-section card">
      <div class="contact-section__wrap">
        <div class="contact-section__inner">
          <div class="contact-header">
            <h2 class="contact-header__heading">Prefer to Speak to<br />Someone First?</h2>
            <p class="contact-header__desc">
              Our team is available Monday to Saturday during business hours.
              Call, WhatsApp, or email — whatever works best for you.
            </p>
          </div>

          <div class="contact-cards">
            <div v-for="ch in channels" :key="ch.title" class="contact-card">
              <div class="contact-card__icon" v-html="ch.icon"></div>
              <h3 class="contact-card__title">{{ ch.title }}</h3>
              <div class="contact-card__lines">
                <p v-for="(line, i) in ch.lines" :key="i" class="contact-card__line" :class="{ 'contact-card__line--primary': i < ch.primaryCount, 'contact-card__line--muted': i >= ch.primaryCount }">
                  {{ line }}
                </p>
              </div>
              <a v-if="ch.cta" :href="ch.href" target="_blank" rel="noopener noreferrer" class="contact-card__cta">
                {{ ch.cta }}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

useHead({
  title: 'Get a Quote — OTC Logistics',
  meta: [{ name: 'description', content: 'Request a personalised logistics quote from OTC Courier & Logistics.' }],
})

const promises = [
  'Response within 1 business hour',
  'No obligation. Completely free.',
  'Transparent pricing. No hidden fees.',
]

// ── Form ────────────────────────────────────────────────────
const submitted  = ref(false)
const submitting = ref(false)

const form = reactive({
  fullName: '', company: '', email: '', phone: '',
  pickupLocation: '', deliveryDestination: '',
  service: '', cargo: '', weight: '',
  pickupDate: '', notes: '', source: '',
})

const errors = reactive({
  fullName: '', email: '', phone: '',
  pickupLocation: '', deliveryDestination: '',
  service: '', cargo: '', weight: '',
})

const minDate = computed(() => new Date().toISOString().split('T')[0])

const rules = {
  fullName:            (v) => v.trim().length >= 2 ? '' : 'Please enter your full name.',
  email:               (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Please enter a valid email address.',
  phone:               (v) => v.trim().length >= 7 ? '' : 'Please enter a valid phone number.',
  pickupLocation:      (v) => v.trim().length >= 2 ? '' : 'Please enter a pickup location.',
  deliveryDestination: (v) => v.trim().length >= 2 ? '' : 'Please enter a delivery destination.',
  service:             (v) => v !== '' ? '' : 'Please select a service.',
  cargo:               (v) => v.trim().length >= 5 ? '' : 'Please describe what you are shipping.',
  weight:              (v) => v !== '' ? '' : 'Please select an estimated weight.',
}

function validate(field) {
  if (rules[field]) errors[field] = rules[field](form[field])
}

function validateAll() {
  let valid = true
  for (const field of Object.keys(rules)) {
    errors[field] = rules[field](form[field])
    if (errors[field]) valid = false
  }
  return valid
}

async function handleSubmit() {
  if (!validateAll()) return
  submitting.value = true
  await new Promise((r) => setTimeout(r, 1200))
  submitting.value = false
  submitted.value  = true
}

function resetForm() {
  submitted.value = false
  Object.keys(form).forEach((k) => (form[k] = ''))
  Object.keys(errors).forEach((k) => (errors[k] = ''))
}

// ── Contact channels ─────────────────────────────────────────
const channels = [
{
  title: 'Call Us Directly',
  icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.37 2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/></svg>`,
  lines: [
    'UK: +44 7350 161379',
    'Israel: +972 559 841 750',
    'Nigeria: +234 803 832 3941',
    'Nigeria: +234 907 295 9624',
    'Available Monday–Saturday, 8am–6pm'
  ],
  primaryCount: 4,
  cta: null,
  href: null,
},
  {
    title: 'Chat on WhatsApp',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
    lines: ['+234 814 051 2369', 'Fastest response for urgent enquiries'],
    primaryCount: 1,
    cta: 'Open WhatsApp Chat',
    href: 'https://wa.me/2348140512369',
  },
  {
    title: 'Send an Email',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    lines: ['support@otccourierlogistics.com', 'Replies within 1 business hour'],
    primaryCount: 1,
    cta: 'Send Email',
    href: 'mailto:support@otccourierlogistics.com?subject=Quote Request',
  },
  {
    title: 'Visit Our Office',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    lines: ['39, Akin Osiyemi Street, off Allen Avenue, Ikeja, Lagos', 'Walk-ins welcome during business hours'],
    primaryCount: 1,
    cta: 'Get Directions',
    href: 'https://maps.google.com/?q=39+Akin+Osiyemi+Street+Ikeja+Lagos',
  },
]
</script>

<style scoped>

.quote-page {
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
  background-image: url('/images/otc-quote.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* .hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.62) 100%);
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
  gap: 40px;
}

.hero__badge {
  align-self: flex-start;
  background: #f47920;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.4px;
  padding: 5px 16px;
  border-radius: 50px;
}

.hero__bottom-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.hero__copy { flex: 1; min-width: 280px; }

.hero__heading {
  font-size: clamp(22px, 3.8vw, 44px);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  margin: 0 0 16px;
  letter-spacing: -0.5px;
}

.hero__heading--orange { color: #f47920; }

.hero__sub {
  font-size: 14.5px;
  color: rgba(255,255,255,0.65);
  line-height: 1.7;
  margin: 0;
  max-width: 420px;
}

.hero__promises-card {
  background: #FFFFFF1A;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  padding: 22px 26px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  min-width: 280px;
  max-width: 360px;
}

.hero__promise {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13.5px;
  color: rgba(255,255,255,0.88);
  line-height: 1.4;
}

/* ══ FORM SECTION ══════════════════════════════════════════ */
.form-section {
  background: #ffffff;
  padding: 32px;
}

.form-section__wrap {
  border-radius: 24px;
  overflow: hidden;
  background: #f6f7f9;
}

.form-section__inner {
  max-width: 840px;
  margin: 0 auto;
  padding: 72px 24px 80px;
}

/* Success */
.success-box {
  background: #fff;
  border: 1px solid #e8f5e9;
  border-radius: 16px;
  padding: 60px 40px;
  text-align: center;
}

.success-box__icon {
  width: 74px;
  height: 74px;
  background: #f0fdf4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 22px;
}

.success-box__title {
  font-size: 24px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 12px;
}

.success-box__text {
  font-size: 15px;
  color: #555;
  line-height: 1.7;
  margin: 0 0 28px;
}

.success-box__btn {
  background: #f47920;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 28px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}
.success-box__btn:hover { background: #d96a10; }

/* Form card */
.quote-form {
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #ebebeb;
  padding: 44px 44px 40px;
  box-shadow: 0 4px 28px rgba(0,0,0,0.05);
}

.form-header {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f0f0f0;
}

.form-header__title {
  font-size: 22px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 6px;
}

.form-header__sub {
  font-size: 13.5px;
  color: #999;
  margin: 0;
}

/* Fields */
.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
}

.field__label {
  font-size: 13px;
  font-weight: 600;
  color: #f47920;
}

.field__opt { color: #b0b0b0; font-weight: 400; }
.req { color: #f47920; }

.field__input,
.field__select,
.field__textarea {
  width: 100%;
  padding: 12px 14px;
  background: #f6f7f9;
  border: 1.5px solid #e8e8e8;
  border-radius: 8px;
  font-size: 14px;
  color: #1a1a1a;
  outline: none;
  transition: border-color 0.2s, background 0.2s;
  appearance: none;
  -webkit-appearance: none;
  font-family: inherit;
}

.field__input::placeholder,
.field__textarea::placeholder { color: #b8b8b8; }

.field__input:focus,
.field__select:focus,
.field__textarea:focus {
  border-color: #f47920;
  background: #ffffff;
}

.field__textarea { resize: vertical; min-height: 110px; line-height: 1.65; }

.field__select-wrap {
  position: relative;
}

.field__select-wrap--half { max-width: 300px; }

.field__select { padding-right: 38px; cursor: pointer; }

.field__chevron {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #999;
}

/* Error */
.field--error .field__input,
.field--error .field__select,
.field--error .field__textarea {
  border-color: #e53e3e;
  background: #fff8f8;
}

.field__err {
  font-size: 12px;
  color: #e53e3e;
}

/* Submit */
.form-footer {
  margin-top: 32px;
  padding-top: 28px;
  border-top: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.submit-btn {
  background: #f47920;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  padding: 15px 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  width: 100%;
  max-width: 320px;   /* desktop cap */
  min-width: unset;   /* IMPORTANT FIX */

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background 0.2s, transform 0.15s;
  font-family: inherit;
}

.submit-btn:hover:not(:disabled) { background: #d96a10; transform: translateY(-1px); }
.submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }

.submit-btn__spinner {
  width: 18px;
  height: 18px;
  border: 2.5px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.form-footer__legal {
  font-size: 12.5px;
  color: #bbb;
  text-align: center;
  line-height: 1.65;
  max-width: 440px;
  margin: 0;
}

.form-footer__link { color: #f47920; text-decoration: none; }
.form-footer__link:hover { text-decoration: underline; }

/* ══ CONTACT SECTION ═══════════════════════════════════════ */
.contact-section {
  background: #ffffff;
  padding: 32px;
}

.contact-section__wrap {
  border-radius: 24px;
  overflow: hidden;
  background: #ffffff;
}

.contact-section__inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 24px 88px;
}

.contact-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 72px;
  margin-bottom: 52px;
  align-items: start;
}

.contact-header__heading {
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.2;
  margin: 0;
  letter-spacing: -0.3px;
}

.contact-header__desc {
  font-size: 15px;
  color: #7a8a9a;
  line-height: 1.75;
  margin: 0;
  padding-top: 4px;
}

/* Cards */
.contact-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.contact-card {
  background: #f6f7f9;
  border-radius: 16px;
  padding: 28px 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: box-shadow 0.2s, transform 0.2s;
}

.contact-card:hover {
  box-shadow: 0 10px 32px rgba(0,0,0,0.08);
  transform: translateY(-3px);
}

.contact-card__icon {
  width: 48px;
  height: 48px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.contact-card__title {
  font-size: 15px;
  font-weight: 700;
  color: #f47920;
  margin: 0 0 4px;
}

.contact-card__lines {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
}

.contact-card__line {
  margin: 0;
  line-height: 1.55;
}

.contact-card__line--primary {
  font-size: 14.5px;
  font-weight: 700;
  color: #1a1a1a;
}

.contact-card__line--muted {
  font-size: 13px;
  color: #888;
  font-weight: 400;
}

.contact-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #f47920;
  font-size: 13.5px;
  font-weight: 700;
  text-decoration: none;
  margin-top: 10px;
  transition: gap 0.2s;
}

.contact-card__cta:hover { gap: 10px; }

/* ── Transitions ─────────────────────────────────────────── */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* ── Responsive ──────────────────────────────────────────── */
@media (max-width: 900px) {
  .hero { padding: 20px; min-height: 560px; }
  .form-section, .contact-section { padding: 20px; }
  .contact-header { grid-template-columns: 1fr; gap: 16px; }
  .contact-cards  { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 640px) {
  .hero { padding: 12px; border-radius: 24px; min-height: 480px; }
  .form-section, .contact-section { padding: 12px; }
  .hero__wrap { border-radius: 18px; }
  .form-section__wrap, .contact-section__wrap { border-radius: 18px; }
  .hero__inner  { padding: 24px 20px 40px; }
  .hero__promises-card { max-width: 100%; min-width: unset; }
  .quote-form   { padding: 28px 20px; }
  .field-row    { grid-template-columns: 1fr; gap: 0; }
  .contact-cards { grid-template-columns: 1fr; }
  .field__select-wrap--half { max-width: 100%; }
    .submit-btn {
    width: 100%;
    max-width: 100%;
    padding: 14px 18px;
    font-size: 14px;
  }

  .form-footer__legal {
    font-size: 11.5px;
    line-height: 1.6;
  }
}

@media (max-width: 400px) {
  .hero { padding: 10px; border-radius: 20px; }
  .hero__sub{font-size: 12.1px;}
  .form-section, .contact-section { padding: 10px; }
  .hero__wrap { border-radius: 16px; }
  .form-section__wrap, .contact-section__wrap { border-radius: 16px; }
}
</style>