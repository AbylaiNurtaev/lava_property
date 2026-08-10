<script setup lang="ts">
const props = defineProps<{
    page: string
    pageTitle: string
}>()

const rating = ref(4)
const hoverRating = ref(0)
const comment = ref('')
const sent = ref(false)
const pending = ref(false)
const errorMessage = ref('')

const visibleRating = computed(() => hoverRating.value || rating.value)
const isLowRating = computed(() => rating.value <= 3)

const setRating = (value: number) => {
    rating.value = value
    sent.value = false
    errorMessage.value = ''
}

const submitRating = async () => {
    pending.value = true
    errorMessage.value = ''

    try {
        await $fetch('/api/page-feedback', {
            method: 'POST',
            body: {
                page: props.page,
                pageTitle: props.pageTitle,
                rating: rating.value,
                comment: isLowRating.value ? comment.value : '',
            },
        })

        sent.value = true
        comment.value = ''
    } catch (error: any) {
        errorMessage.value = error?.data?.message || error?.message || 'Не удалось отправить оценку'
    } finally {
        pending.value = false
    }
}
</script>

<template>
    <section class="page-rating">
        <div>
            <p>Оценка страницы</p>
            <h2>Пожалуйста, оцените пользу информации на этой странице</h2>
        </div>

        <div class="rating-control" aria-label="Оценка страницы">
            <button v-for="star in 5" :key="star" type="button" :class="{ active: star <= visibleRating }"
                :aria-label="`${star} из 5`" @click="setRating(star)" @mouseenter="hoverRating = star"
                @mouseleave="hoverRating = 0">
                ★
            </button>
        </div>

        <form class="rating-form" @submit.prevent="submitRating">
            <label v-if="isLowRating">
                Чего не хватило?
                <input v-model="comment" type="text" placeholder="Коротко напишите, что добавить">
            </label>

            <button type="submit" :disabled="pending">
                {{ pending ? 'Отправляем...' : 'Отправить' }}
            </button>
        </form>

        <p v-if="sent" class="rating-ok">Спасибо, оценка отправлена.</p>
        <p v-if="errorMessage" class="rating-error">{{ errorMessage }}</p>
    </section>
</template>

<style scoped>
.page-rating {
    display: grid;
    gap: 16px;
    margin: 28px auto 0;
    border: 1px solid rgba(43, 41, 37, 0.08);
    border-radius: 8px;
    background: #fff;
    padding: 22px;
    box-shadow: 0 14px 34px rgba(43, 41, 37, 0.06);
}

.page-rating > div:first-child {
    display: grid;
    gap: 4px;
}

.page-rating p:first-child {
    color: #0F5C43;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
}

.page-rating h2 {
    color: #2B2925;
    font-size: 22px;
    line-height: 1.2;
}

.rating-control {
    display: flex;
    gap: 4px;
}

.rating-control button {
    color: #E3E1DA;
    font-size: 34px;
    line-height: 1;
    transition: color 0.15s ease, transform 0.15s ease;
}

.rating-control button:hover,
.rating-control button.active {
    color: #0F5C43;
    transform: translateY(-1px);
}

.rating-form {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: end;
}

.rating-form label {
    display: grid;
    flex: 1 1 320px;
    gap: 7px;
    color: #6B6864;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
}

.rating-form input {
    min-height: 44px;
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    padding: 0 12px;
    color: #2B2925;
    font-size: 14px;
}

.rating-form button {
    min-height: 44px;
    border-radius: 999px;
    padding: 0 18px;
    background: #0F5C43;
    color: #fff;
    font-family: 'Montserrat-Bold', sans-serif;
}

.rating-form button:hover {
    background: #0B4433;
}

.rating-ok,
.rating-error {
    font-size: 13px;
}

.rating-ok {
    color: #2f7d32;
}

.rating-error {
    color: #d84f55;
}

@media (max-width: 640px) {
    .page-rating {
        padding: 18px;
    }

    .rating-form button {
        width: 100%;
    }
}
</style>
