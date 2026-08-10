<template>
    <div class="relative bg-img  flex items-start">
        <div class="container w-full z-10 mt-44">
            <div class="hero flex flex-col lg:flex-row justify-between items-start w-full mb-20">
                <!--  -->
                <div class="text-left w-full lg:w-1/2">
                    <h1 class="text-xl lg:text-4xl light">О компании<br></br> <span
                            class="text-4xl lg:text-6xl uppercase bl">lava property</span>
                    </h1>

                </div>
                <!--  -->
                <div class="buttons-right flex text-white flex-wrap lg:gap-4 w-full lg:w-1/2 my-4 lg:my-0">
                    <p>
                        Lava Property — экспертная команда, сопровождающая покупателей на каждом этапе приобретения
                        недвижимости в Тайланде.<br></br>
                        Мы создаём прозрачный, комфортный и безопасный процесс — от подбора объектов и проверки
                        застройщиков до регистрации собственности и последующего управления.
                        <br></br> <br></br>
                        С нами вы получаете не просто сделку, а высокий уровень сервиса и внимание к каждой детали —
                        чтобы покупка в Таиланде была спокойной и уверенной.
                    </p>
                </div>
                <!--  -->
            </div>
        </div>
        <!-- <img src="/img/palm.webp" alt="фон" class="absolute" data-aos="fade-right" data-aos-delay="200"
            data-aos-duration="1200" data-aos-easing="ease-out-cubic" /> -->
    </div>
    <TheAbout />
    <TheWhy />
    <TheChoouse />
</template>
<style lang="css" scoped>
.bg-img {
    background-image: url('/img/a-bg.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
}

h1 {
    color: white;

}

@media (max-width:441px) {
    .bg-img {
        min-height: 70vh;
        background-position: -24em 0em;
        mask-image: linear-gradient(to right,
                rgb(0, 0, 0),
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 1) 100%,
                rgb(0, 0, 0))
    }

}
</style>