<template>
  <div class="contact-page">

    <!-- ══ HERO ══════════════════════════════════════════════ -->
    <section class="hero card">
      <div class="hero__wrap">
        <div class="hero__bg"></div>

        <div class="hero__inner">
          <span class="hero__badge">Our Story</span>
          <div class="hero__bottom">
            <div class="hero__copy">
              <h1 class="hero__heading">
                We Are Here.<br />
                <span class="hero__heading--orange">Let's Talk</span>
              </h1>
              <p class="hero__sub">
                Whether you have a logistics question, a quote request, a partnership enquiry, or
                something you just need to discuss with a real person. Our team is available and we
                pick up.
              </p>
            </div>
            <NuxtLink to="/quote" class="hero__quote-btn">Get a quote</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ MESSAGE FORM + MAP ══════════════════════════════════ -->
    <section class="message-section card">
      <div class="message-section__wrap">
        <div class="message-section__inner">

          <!-- Left: Form -->
          <div class="message-form-wrap">
            <Transition name="fade">
              <div v-if="submitted" class="success-box">
                <div class="success-box__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 class="success-box__title">Message Sent!</h3>
                <p class="success-box__text">Thank you, <strong>{{ form.name }}</strong>. We'll get back to you at <strong>{{ form.email }}</strong> shortly.</p>
                <button class="success-box__btn" @click="resetForm">Send Another</button>
              </div>
            </Transition>

            <Transition name="fade">
              <form v-if="!submitted" class="message-form" novalidate @submit.prevent="handleSubmit">
                <h2 class="message-form__title">Send Us a Message</h2>
                <p class="message-form__sub">Not ready for a call? Fill in the form below and a member of our team will respond shortly.</p>

                <!-- Row 1 -->
                <div class="field-row">
                  <div class="field" :class="{ 'field--error': errors.name }">
                    <label class="field__label">Your Full Name <span class="req">*</span></label>
                    <input v-model="form.name" type="text" class="field__input" placeholder="e.g. Ngozi Adeyemi" @blur="validate('name')" />
                    <span v-if="errors.name" class="field__err">{{ errors.name }}</span>
                  </div>
                  <div class="field" :class="{ 'field--error': errors.email }">
                    <label class="field__label">Email Address <span class="req">*</span></label>
                    <input v-model="form.email" type="email" class="field__input" placeholder="e.g. ngozi@company.com" @blur="validate('email')" />
                    <span v-if="errors.email" class="field__err">{{ errors.email }}</span>
                  </div>
                </div>

                <!-- Phone -->
                <div class="field">
                  <label class="field__label">Phone Number <span class="field__opt">(Optional)</span></label>
                  <input v-model="form.phone" type="tel" class="field__input" placeholder="e.g. 09098765432" />
                </div>

                <!-- Subject -->
                <div class="field" :class="{ 'field--error': errors.subject }">
                  <label class="field__label">Subject of Enquiry <span class="req">*</span></label>
                  <div class="field__select-wrap">
                    <select v-model="form.subject" class="field__select" @blur="validate('subject')">
                      <option value="">General Enquiry</option>
                      <option>Quote Request</option>
                      <option>Shipment Tracking</option>
                      <option>Partnership / Business</option>
                      <option>Complaint</option>
                      <option>Other</option>
                    </select>
                    <svg class="field__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                  <span v-if="errors.subject" class="field__err">{{ errors.subject }}</span>
                </div>

                <!-- Message -->
                <div class="field" :class="{ 'field--error': errors.message }">
                  <label class="field__label">Your Message <span class="req">*</span></label>
                  <textarea v-model="form.message" class="field__textarea" rows="5" placeholder="Tell us what you need. The more detail you share, the better we can help you." @blur="validate('message')"></textarea>
                  <span v-if="errors.message" class="field__err">{{ errors.message }}</span>
                </div>

                <!-- Submit -->
                <button type="submit" class="submit-btn" :disabled="submitting">
                  <span v-if="submitting" class="submit-btn__spinner"></span>
                  <span v-else>Send Message</span>
                </button>

                <p class="form-privacy">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </form>
            </Transition>
          </div>

          <!-- Right: Map + Info -->
          <div class="office-panel">
            <h2 class="office-panel__title">Find <span class="office-panel__title--orange">Our Office</span></h2>

            <!-- Embedded Google Map -->
            <div class="office-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3545014971014!2d3.350877210939376!3d6.602792822208531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b923130c81701%3A0x63e51aa05553958!2s39%20Akin%20Osiyemi%20St%2C%20Allen%2C%20Ikeja%20100001%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1778143390394!5m2!1sen!2sus" 
                width="100%"
                height="260" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

            <div class="office-info">
              <div class="office-info__item">
                <div class="office-info__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p class="office-info__label">Address</p>
                  <p class="office-info__value">39, Akin Osiyemi Street,<br />off Allen Avenue, Ikeja,<br />Lagos State, Nigeria</p>
                </div>
              </div>
              <div class="office-info__item">
                <div class="office-info__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <p class="office-info__label">Business Hours</p>
                  <p class="office-info__value">
                    <strong>Monday to Saturday:</strong> 8:00am to 6:00pm<br />
                    <strong>Sunday:</strong> Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ══ FAQ ════════════════════════════════════════════════ -->
    <section class="faq card">
      <div class="faq__wrap">
        <div class="faq__inner">
          <h2 class="faq__heading">
            Frequently asked <span class="faq__heading--orange">questions</span>
          </h2>

          <div class="faq__list">
            <div
              v-for="(item, i) in faqs"
              :key="i"
              class="faq-item"
              :class="{ 'faq-item--open': openFaq === i }"
              @click="toggleFaq(i)"
            >
              <div class="faq-item__header">
                <span class="faq-item__question">{{ item.q }}</span>
                <svg
                  class="faq-item__chevron"
                  width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                >
                  <polyline :points="openFaq === i ? '18 15 12 9 6 15' : '6 9 12 15 18 9'"/>
                </svg>
              </div>
              <Transition name="faq-expand">
                <p v-if="openFaq === i" class="faq-item__answer">{{ item.a }}</p>
              </Transition>
            </div>
          </div>

          <div class="faq__footer">
            <p class="faq__footer-text">Still have questions?</p>
            <a href="mailto:support@otccourierlogistics.com" class="faq__support-btn">Contact Support</a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

useHead({
  title: 'Contact Us — OTC Logistics',
  meta: [{ name: 'description', content: 'Get in touch with OTC Courier & Logistics. Call, WhatsApp, email, or visit our office in Ikeja, Lagos.' }],
})


// ── Contact form ─────────────────────────────────────────────
const submitted  = ref(false)
const submitting = ref(false)

const form = reactive({ name: '', email: '', phone: '', subject: '', message: '' })
const errors = reactive({ name: '', email: '', subject: '', message: '' })

const rules = {
  name:    (v) => v.trim().length >= 2 ? '' : 'Please enter your name.',
  email:   (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Please enter a valid email.',
  message: (v) => v.trim().length >= 10 ? '' : 'Please enter your message (at least 10 characters).',
}

function validate(field) {
  if (rules[field]) errors[field] = rules[field](form[field])
}

function validateAll() {
  let valid = true
  for (const f of Object.keys(rules)) {
    errors[f] = rules[f](form[f])
    if (errors[f]) valid = false
  }
  return valid
}

async function handleSubmit() {
  if (!validateAll()) return
  submitting.value = true
  await new Promise(r => setTimeout(r, 1100))
  submitting.value = false
  submitted.value  = true
}

function resetForm() {
  submitted.value = false
  Object.keys(form).forEach(k => (form[k] = ''))
  Object.keys(errors).forEach(k => (errors[k] = ''))
}

// ── FAQ ──────────────────────────────────────────────────────
const openFaq = ref(0)

function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
}

const faqs = [
  { q: 'What areas do you cover?',
    a: 'We provide logistics services across all 36 states and the FCT in Nigeria, including major routes like Lagos–Abuja, Lagos–Port Harcourt, and Kano–Lagos. Contact us to confirm coverage for your specific area or route.' },
  { q: 'How long does delivery take?',
    a: 'Delivery times depend on the route, service type, and cargo. Same-day delivery is available within Lagos. Interstate deliveries typically take 1–3 business days. We always provide an estimated delivery window at the time of booking.' },
  { q: 'Do you handle large shipments?',
    a: 'Yes. We handle everything from individual parcels to full truckloads and industrial cargo. Our fleet includes small vans, trucks, and heavy-duty haulage vehicles. Request a quote and our team will recommend the best option for your cargo.' },
  { q: 'How do I request a quote?',
    a: 'You can request a quote by filling out the form on our Quote page, calling us directly, or sending a WhatsApp message. We aim to respond with a personalised quote within 30 minutes during business hours.' },
  { q: 'How can i track my package?',
    a: 'Once your shipment is booked, you will receive a unique reference number. You can enter that reference on our Track Shipment page for real-time updates, or contact our team via WhatsApp or phone for a live status.' },
  { q: 'Will i receive alerts about my package?',
    a: 'Yes. We send WhatsApp or SMS notifications at key milestones — pickup confirmation, dispatch, transit updates, and delivery confirmation. You can also opt in to email updates when requesting your quote.' },
  { q: 'Does the tracking system show the estimated arrival time?',
    a: 'Yes. Our tracking page shows the estimated delivery window alongside current shipment status and location. Times are updated in real-time as the shipment progresses.' },
  { q: 'What should i do if i need to change my address?',
    a: 'Contact us as soon as possible via WhatsApp or phone. If the shipment has not yet been dispatched, we can update the delivery address at no charge. Changes after dispatch may incur a redirection fee.' },
  { q: 'What should i do when my package is delayed?',
    a: 'First, check the tracking page for an updated delivery window. If the delay is unexpected or there is no update, contact our team directly — we monitor all shipments and can provide immediate clarity on the situation.' },
  { q: 'How do i contact you?',
    a: 'You can reach us by phone (+234 803 832 3941), WhatsApp (+234 814 051 2369), email (support@otccourierlogistics.com), or by visiting our office in Ikeja, Lagos. All channels are monitored Monday to Saturday, 8am–6pm.' },
]
</script>

<style scoped>

/* ══ PAGE BACKGROUND ═══════════════════════════════════════ */
.contact-page {
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
  background-image: url('/images/otc-contact.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Inner */
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

.hero__bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 40px;
}

.hero__copy { 
  max-width: 560px;
    margin: 0 0 -50px 0;
}

.hero__heading {
  font-size: clamp(28px, 4vw, 52px);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: -0.5px;
}

.hero__heading--orange { color: #f47920; }

.hero__sub {
  font-size: 14.5px;
  color: rgba(255,255,255,0.65);
  line-height: 1.7;
  margin: 0;
  max-width: 460px;
}

.hero__quote-btn {
  display: inline-block;
  background: #ffffff;
  color: #1a1a1a;
  font-size: 14px;
  font-weight: 700;
  padding: 13px 28px;
  border-radius: 50px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s;
  flex-shrink: 0;
}
.hero__quote-btn:hover { background: #f0f0f0; }


/* ══ MESSAGE + MAP ═════════════════════════════════════════ */
.message-section {
  background: #ffffff;
  padding: 32px;
}

.message-section__wrap {
  border-radius: 24px;
  overflow: hidden;
  background: #ffffff;
}

.message-section__inner {
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: start;
  padding: 80px 24px 88px;
}

/* Success box */
.success-box {
  background: #fff;
  border-radius: 16px;
  padding: 52px 32px;
  text-align: center;
}

.success-box__icon {
  width: 68px; height: 68px;
  background: #f0fdf4;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 18px;
}

.success-box__title { font-size: 22px; font-weight: 800; color: #1a1a1a; margin: 0 0 10px; }
.success-box__text  { font-size: 14.5px; color: #555; line-height: 1.65; margin: 0 0 24px; }

.success-box__btn {
  background: #f47920; color: #fff; font-size: 14px; font-weight: 700;
  padding: 11px 24px; border-radius: 8px; border: none; cursor: pointer;
  transition: background 0.2s;
}
.success-box__btn:hover { background: #d96a10; }

/* Message form */
.message-form { display: flex; flex-direction: column; gap: 0; }

.message-form__title {
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 8px;
  letter-spacing: -0.3px;
}

.message-form__sub {
  font-size: 14px;
  color: #888;
  line-height: 1.6;
  margin: 0 0 28px;
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
}

.field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }
.field:last-of-type { margin-bottom: 0; }

.field__label { font-size: 13px; font-weight: 600; color: #333; }
.field__opt   { color: #bbb; font-weight: 400; }
.req          { color: #f47920; }

.field__input,
.field__select,
.field__textarea {
  width: 100%;
  padding: 12px 14px;
  background: #f6f7f9;
  border: 1.5px solid #e5e5e5;
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
.field__textarea::placeholder { color: #bbb; }

.field__input:focus,
.field__select:focus,
.field__textarea:focus { border-color: #f47920; background: #fff; }

.field__textarea { resize: vertical; min-height: 130px; line-height: 1.65; }

.field__select-wrap { position: relative; }
.field__select { padding-right: 38px; cursor: pointer; }
.field__chevron {
  position: absolute; right: 12px; top: 50%;
  transform: translateY(-50%); pointer-events: none; color: #999;
}

.field--error .field__input,
.field--error .field__select,
.field--error .field__textarea { border-color: #e53e3e; background: #fff8f8; }

.field__err { font-size: 12px; color: #e53e3e; }

.submit-btn {
  width: 100%;
  background: #1a1a1a;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  padding: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background 0.2s;
  font-family: inherit;
}
.submit-btn:hover:not(:disabled) { background: #333; }
.submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }

.submit-btn__spinner {
  width: 18px; height: 18px;
  border: 2.5px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.form-privacy {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  color: #bbb;
  margin: 12px 0 0;
  line-height: 1.5;
}

/* Office panel */
.office-panel__title {
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 24px;
  letter-spacing: -0.3px;
}

.office-panel__title--orange { color: #f47920; }

.office-map {
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.office-info {
  background: #f6f7f9;
  border-radius: 12px;
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.office-info__item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.office-info__icon {
  width: 36px; height: 36px;
  background: #fff;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}

.office-info__label {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 4px;
}

.office-info__value {
  font-size: 13.5px;
  color: #555;
  line-height: 1.65;
  margin: 0;
}

/* ══ FAQ ═══════════════════════════════════════════════════ */
.faq {
  background: #ffffff;
  padding: 32px;
}

.faq__wrap {
  border-radius: 24px;
  overflow: hidden;
  background: #f3f4f5;
}

.faq__inner {
  max-width: 760px;
  margin: 0 auto;
  padding: 88px 24px 96px;
}

.faq__heading {
  font-size: clamp(24px, 3.5vw, 38px);
  font-weight: 300;
  color: #1a1a1a;
  text-align: center;
  margin: 0 0 48px;
  letter-spacing: -0.3px;
}

.faq__heading--orange { color: #f47920; font-weight: 300; }

.faq__list { display: flex; flex-direction: column; gap: 10px; }

/* FAQ item */
.faq-item {
  background: #ffffff;
  border-radius: 12px;
  padding: 18px 22px;
  cursor: pointer;
  transition: box-shadow 0.2s;
  user-select: none;
}

.faq-item:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
.faq-item--open { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }

.faq-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.faq-item__question {
  font-size: 14.5px;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.4;
}

.faq-item__chevron {
  flex-shrink: 0;
  color: #888;
  transition: transform 0.2s;
}

.faq-item--open .faq-item__chevron { color: #f47920; }

.faq-item__answer {
  font-size: 13.5px;
  color: #666;
  line-height: 1.7;
  margin: 14px 0 0;
  padding-top: 14px;
  border-top: 1px solid #f0f0f0;
}

/* FAQ expand transition */
.faq-expand-enter-active, .faq-expand-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.faq-expand-enter-from, .faq-expand-leave-to { opacity: 0; transform: translateY(-6px); }

/* FAQ footer */
.faq__footer {
  text-align: center;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.faq__footer-text { font-size: 14px; color: #888; margin: 0; }

.faq__support-btn {
  display: inline-block;
  background: #1a1a1a;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding: 13px 32px;
  border-radius: 50px;
  text-decoration: none;
  transition: background 0.2s;
}
.faq__support-btn:hover { background: #333; }

/* ── Transitions ───────────────────────────────────────────── */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* ── Responsive ────────────────────────────────────────────── */
@media (max-width: 1024px) {
  .channels__cards { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 900px) {
  .hero { padding: 20px; min-height: 560px; }
  .message-section, .faq { padding: 20px; }
  .hero__wrap { border-radius: 18px; }
  .message-section__wrap, .faq__wrap { border-radius: 18px; }
  
  .hero__inner {
    padding: 28px 28px 44px;
  }

  .hero__bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
    padding-top: 32px;
  }

  .hero__copy {
    max-width: 100%;
    margin: 0; 
  }

  .hero__sub {
    max-width: 100%;
    margin-top: 10px;
  }
  .channels__header      { grid-template-columns: 1fr; }
  .message-section__inner { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .hero { padding: 12px; border-radius: 24px; min-height: 480px; }
  .message-section, .faq { padding: 12px; }
  .hero__wrap { border-radius: 18px; }
  .message-section__wrap, .faq__wrap { border-radius: 18px; }
  
  .hero__inner {
    padding: 22px 20px 36px;
  }

  .hero__bottom {
    gap: 22px;
    padding-top: 24px;
  }

  .hero__heading {
    font-size: clamp(26px, 7vw, 36px);
    letter-spacing: -0.3px;
  }

  .hero__sub {
    font-size: 13.5px;
    color: #fff;
  }

  .hero__quote-btn {
    width: 100%;
    text-align: center;
    padding: 14px 24px;
  }
  .channels__cards       { grid-template-columns: 1fr; }
  .field-row             { grid-template-columns: 1fr; gap: 0; }
  .hero__contact-label   { letter-spacing: 8px; }
}

@media (max-width: 400px) {
  .hero { padding: 10px; border-radius: 20px; }
  .message-section, .faq { padding: 10px; }
  .hero__wrap { border-radius: 16px; }
  .message-section__wrap, .faq__wrap { border-radius: 16px; }
  
  .hero__inner { padding: 16px; }
}
</style>