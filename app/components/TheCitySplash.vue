<script setup>
const emit = defineEmits(['select'])

const scrollToDirections = () => {
  document.getElementById('directions')?.scrollIntoView({ behavior: 'smooth' })
}

const cities = [
  {
    key: 'phuket',
    label: 'Пхукет',
    title: 'Виллы и апартаменты у Андаманского моря',
    meta: 'Островная приватность, курортная аренда, спокойный премиум-сегмент',
    image: '/img/bg-phuket.webp',
  },
  {
    key: 'pattaya',
    label: 'Паттайя',
    title: 'Городская недвижимость на первой линии',
    meta: 'Ликвидные комплексы, развитая инфраструктура, быстрый вход в рынок',
    image: '/img/bg-pattaya.webp',
  },
]
</script>

<template>
  <main class="city-entry">
    <section class="entry-hero">
      <div class="hero-media" aria-hidden="true">
        <img src="/img/bg-phuket.webp" alt="" class="hero-image hero-image-main" />
        <img src="/img/bg-pattaya.webp" alt="" class="hero-image hero-image-second" />
      </div>

      <div class="hero-overlay"></div>

      <div class="hero-content">
        <p class="hero-kicker">Lava Property Thailand</p>
        <h1>Недвижимость в Таиланде с ощущением личного доступа</h1>
        <p class="hero-copy">
          Выберите направление и перейдите к объектам, которые подходят под ваш сценарий:
          инвестиции, переезд, отдых или управление арендой.
        </p>

        <div class="hero-actions">
          <button type="button" class="hero-primary" @click="scrollToDirections">
            Выбрать направление
          </button>
          <button type="button" class="hero-secondary" @click="emit('select', 'phuket')">
            Смотреть Пхукет
          </button>
        </div>
      </div>

      <button type="button" class="scroll-cue" aria-label="Перейти к выбору города" @click="scrollToDirections">
        <span></span>
      </button>
    </section>

    <section id="directions" class="directions-section">
      <div class="directions-inner">
        <div class="section-heading">
          <p>Два рынка, два темпа жизни</p>
          <h2>Куда проваливаемся дальше?</h2>
        </div>

        <div class="city-grid">
          <article
            v-for="city in cities"
            :key="city.key"
            class="destination"
            :style="{ '--city-image': `url(${city.image})` }"
          >
            <button type="button" class="destination-hit" @click="emit('select', city.key)">
              <span class="destination-index">{{ city.key === 'phuket' ? '01' : '02' }}</span>
              <span class="destination-content">
                <span class="destination-name">{{ city.label }}</span>
                <span class="destination-title">{{ city.title }}</span>
                <span class="destination-meta">{{ city.meta }}</span>
              </span>
              <span class="destination-arrow">Перейти</span>
            </button>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="css" scoped>
.city-entry {
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
  background: #0d1616;
  color: #fff;
}

.entry-hero {
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: 126px 24px 82px;
}

.hero-media,
.hero-overlay {
  position: absolute;
  inset: 0;
}

.hero-media {
  background: #101819;
}

.hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  filter: saturate(0.92) contrast(1.04);
}

.hero-image-main {
  animation: heroDrift 18s ease-in-out infinite alternate;
}

.hero-image-second {
  opacity: 0;
  animation: heroFade 16s ease-in-out infinite;
}

.hero-overlay {
  background:
    linear-gradient(90deg, rgba(5, 12, 14, 0.88) 0%, rgba(5, 12, 14, 0.62) 42%, rgba(5, 12, 14, 0.16) 100%),
    linear-gradient(180deg, rgba(5, 12, 14, 0.34) 0%, rgba(5, 12, 14, 0.1) 46%, #0d1616 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: min(100%, 1120px);
  margin: 0 auto;
}

.hero-kicker,
.section-heading p {
  font-family: 'Montserrat-Bold', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0;
}

.hero-kicker {
  margin-bottom: 18px;
  color: #0F5C43;
  font-size: 13px;
}

.hero-content h1 {
  max-width: 760px;
  color: #fff;
  font-family: 'Montserrat-Black', sans-serif;
  font-size: clamp(38px, 5.8vw, 76px);
  line-height: 0.98;
}

.hero-copy {
  max-width: 620px;
  margin-top: 22px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 18px;
  line-height: 1.65;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.hero-primary,
.hero-secondary {
  min-height: 52px;
  border-radius: 999px;
  padding: 0 24px;
  font-family: 'Montserrat-Bold', sans-serif;
  transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;
}

.hero-primary {
  background: #0F5C43;
  color: #2B2925;
}

.hero-secondary {
  border: 1px solid rgba(255, 255, 255, 0.36);
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
}

.hero-primary:hover,
.hero-secondary:hover {
  transform: translateY(-2px);
}

.scroll-cue {
  position: absolute;
  z-index: 3;
  left: 50%;
  bottom: 28px;
  width: 34px;
  height: 54px;
  border: 1px solid rgba(255, 255, 255, 0.46);
  border-radius: 999px;
  transform: translateX(-50%);
}

.scroll-cue span {
  display: block;
  width: 4px;
  height: 10px;
  margin: 11px auto 0;
  border-radius: 999px;
  background: #0F5C43;
  animation: cueDrop 1.7s ease-in-out infinite;
}

.directions-section {
  padding: 92px 24px 104px;
  background:
    linear-gradient(180deg, #0d1616 0%, #14201e 100%);
}

.directions-inner {
  width: min(100%, 1200px);
  margin: 0 auto;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 28px;
  margin-bottom: 34px;
}

.section-heading p {
  color: #0F5C43;
  font-size: 12px;
}

.section-heading h2 {
  max-width: 620px;
  color: #fff;
  text-align: right;
  font-size: clamp(30px, 5vw, 58px);
  line-height: 1;
}

.city-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.destination {
  position: relative;
  min-height: 520px;
  overflow: hidden;
  border-radius: 8px;
  background: #101819;
  isolation: isolate;
}

.destination::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(180deg, rgba(6, 12, 14, 0.08) 0%, rgba(6, 12, 14, 0.4) 48%, rgba(6, 12, 14, 0.9) 100%),
    linear-gradient(90deg, rgba(6, 12, 14, 0.68) 0%, rgba(6, 12, 14, 0.06) 100%);
  transition: background 0.35s ease;
}

.destination::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image: var(--city-image);
  background-size: cover;
  background-position: center;
  transform: scale(1.02);
  transition: transform 0.65s ease;
}

.destination:hover::after {
  transform: scale(1.08);
}

.destination-hit {
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px;
  color: #fff;
  text-align: left;
}

.destination-index {
  color: rgba(255, 255, 255, 0.58);
  font-family: 'Montserrat-Bold', sans-serif;
  font-size: 14px;
}

.destination-content {
  display: grid;
  gap: 14px;
}

.destination-name {
  font-family: 'Montserrat-Black', sans-serif;
  font-size: clamp(42px, 6vw, 74px);
  line-height: 0.92;
  text-transform: uppercase;
}

.destination-title {
  max-width: 480px;
  font-family: 'Montserrat-Bold', sans-serif;
  font-size: 22px;
  line-height: 1.2;
}

.destination-meta {
  max-width: 480px;
  color: rgba(255, 255, 255, 0.74);
  font-size: 15px;
  line-height: 1.55;
}

.destination-arrow {
  align-self: flex-end;
  border: 1px solid rgba(255, 255, 255, 0.36);
  border-radius: 999px;
  padding: 12px 18px;
  background: rgba(255, 255, 255, 0.1);
  font-family: 'Montserrat-Bold', sans-serif;
  font-size: 13px;
  transition: background 0.25s ease, color 0.25s ease;
}

.destination:hover .destination-arrow {
  background: #0F5C43;
  color: #2B2925;
}

@keyframes heroDrift {
  from {
    transform: scale(1.05) translate3d(0, 0, 0);
  }

  to {
    transform: scale(1.11) translate3d(-1.5%, 1%, 0);
  }
}

@keyframes heroFade {
  0%,
  44% {
    opacity: 0;
  }

  56%,
  88% {
    opacity: 0.58;
  }

  100% {
    opacity: 0;
  }
}

@keyframes cueDrop {
  0% {
    opacity: 0;
    transform: translateY(0);
  }

  35% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(18px);
  }
}

@media (max-width: 860px) {
  .entry-hero {
    min-height: 92svh;
    padding: 108px 18px 72px;
  }

  .hero-overlay {
    background:
      linear-gradient(180deg, rgba(5, 12, 14, 0.38) 0%, rgba(5, 12, 14, 0.38) 34%, #0d1616 100%),
      linear-gradient(90deg, rgba(5, 12, 14, 0.84) 0%, rgba(5, 12, 14, 0.3) 100%);
  }

  .hero-copy {
    font-size: 15px;
    line-height: 1.55;
  }

  .hero-actions {
    margin-top: 28px;
  }

  .hero-primary,
  .hero-secondary {
    width: 100%;
  }

  .directions-section {
    padding: 62px 18px 76px;
  }

  .section-heading {
    display: block;
  }

  .section-heading h2 {
    margin-top: 12px;
    text-align: left;
  }

  .city-grid {
    grid-template-columns: 1fr;
  }

  .destination,
  .destination-hit {
    min-height: 440px;
  }

  .destination-hit {
    padding: 22px;
  }
}

@media (max-width: 460px) {
  .hero-content h1 {
    font-size: 36px;
  }

  .destination,
  .destination-hit {
    min-height: 390px;
  }

  .destination-name {
    font-size: 38px;
  }

  .destination-title {
    font-size: 18px;
  }
}
</style>
