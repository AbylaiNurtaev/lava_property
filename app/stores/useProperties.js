import { defineStore } from 'pinia'

export const usePropertyStore = defineStore('propertyStore', {
  state: () => ({
    properties: [
                                                                                                                {
        id: 67,
        city: 'phuket',
        new: true,
        name: 'Garden of Eden',
        priceDollars: '275 371 $',
        priceTHB: 'THB  8 900 000',
        location: 'Банг Тао, Пхукет',
        coordinates: [98.291792, 8.023875],
        firstImg: '/img/objects/67/start.webp',
        bgImg: '/img/objects/67/bgImg.webp',
        bigImg: '/img/objects/67/bigImg.webp',
        genImg: '/img/objects/67/genplan.webp',
        description: 'Gardens of Eden (Eden Residence) — премиальный жилой комплекс на Пхукете, расположенный в престижном районе Банг Тао, в пешей доступности от пляжа Bang Tao. Проект сочетает современную архитектуру, курортную инфраструктуру и природное окружение одного из самых популярных районов острова.  <br>Комплекс разработан по концепции «жизни среди природы». Более 70% территории занимает озеленение: тропические сады, прогулочные зоны и водные пространства. Благодаря этому создаётся атмосфера приватного курорта, где жильцы могут наслаждаться спокойствием и комфортом рядом с морем.',
        genDesc: 'Генеральный план Gardens of Eden разработан с акцентом на просторную благоустроенную территорию и гармоничное сочетание архитектуры с природным окружением. Значительная часть участка отведена под тропические сады, водные элементы и прогулочные пространства, благодаря чему комплекс формирует атмосферу приватного курортного пространства. <br>Жилые здания расположены таким образом, чтобы обеспечить комфортное расстояние между корпусами, хорошие виды из апартаментов и удобный доступ к инфраструктуре комплекса. Центральная часть территории объединяет основные общественные пространства, включая бассейны с зонами отдыха, террасы для загара и ландшафтные сады.',
        descriptionExterior: 'Инфраструктура проекта соответствует уровню курортной недвижимости. На территории комплекса расположены бассейны, фитнес-центр, wellness-зоны, spa-пространства, зоны отдыха и прогулочные сады. Пространства комплекса спроектированы так, чтобы жильцы могли вести комфортный образ жизни, не покидая территорию. <br>Локация комплекса считается одной из самых востребованных на Пхукете. Район Банг Тао активно развивается и привлекает как инвесторов, так и покупателей недвижимости для собственного проживания. В непосредственной близости находятся Laguna Phuket, Boat Avenue, Porto de Phuket, международные школы, гольф-клубы, рестораны и пляжные клубы.',
        specs: {
          readyDate: '2026-2027',          // срок сдачи
          areaTotal: '45 м² - 250 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '1-4',                   // кол-во спален
          bathrooms: '1-4',
          developer: 'Amal Development'
        },
        amenities: [
          'Бассейны с зонами отдыха', 'панорамные бассейны','фитнес-центр','spa-комплекс','сауна и парная', 'йога-зона', 'ресторан и лаунж-бар', 'прогулочные тропические сады', 'лаунж-пространства','детская игровая площадка', 'коворкинг', 'круглосуточная охрана и видеонаблюдение',], 
        galleryExterior: [
          '/img/objects/67/exterior/obj1.webp',
          '/img/objects/67/exterior/obj2.webp',
          '/img/objects/67/exterior/obj3.webp',
          '/img/objects/67/exterior/obj4.webp',
          '/img/objects/67/exterior/obj5.webp',
          '/img/objects/67/exterior/obj6.webp',

        ],
        galleryInterior: [
          '/img/objects/67/interior/obj1.webp',
          '/img/objects/67/interior/obj2.webp',
          '/img/objects/67/interior/obj3.webp',
          '/img/objects/67/interior/obj1.webp',


        ],
        units: [
     {
    id: '1',
    title: '1 Cпальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 45, max: 70},         // м²
    floor: { min: 2, max: 7 },
    // priceTHB: 33000000,
  //  cover: '/img/objects/65/plans/unit2.webp'
          },
                        {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 70, max: 120},         // м²
    floor: { min: 2, max: 7},
    // priceTHB: 38000000,
    //  cover: '/img/objects/65/plans/unit3.webp'
          },
                                                {
    id: '4',
    title: '3 спальни',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 120, max: 180},         // м²
    floor: { min: 2, max: 7},
    // priceTHB: 38000000,
    //  cover: '/img/objects/65/plans/unit3.webp'
          },
                                                                                                {
    id: '5',
    title: '5 спальни',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 250, max: 250},         // м²
    floor: { min: 2, max: 7},
    // priceTHB: 38000000,
    //  cover: '/img/objects/65/plans/unit3.webp'
          },

],
     bookingConditions: [
    { id: 1, title: 'Депозит бронирования 200 000 THB ', type: 'amount',  },
    { id: 2, title: '20-30% — при подписании контракта',  },
    { id: 3, title: '40-50% — рассрочка на период строительства',  },
    { id: 4, title: 'Финальный платеж: при передаче недвижимости', type: 'percent', value: 30  },


            ],
   infrastructure: [
          { id: 1, title: 'Bang Tao Beach', time: '' },
          { id: 2, title: 'Laguna Phuket', time: '' },
         { id: 3, title: 'Boat Avenue', time: '' },
        { id: 4, title: 'Porto de Phuket', time: '' },
         { id: 5, title: 'Laguna Golf Phuket', time: '' },
         { id: 7, title: 'Blue Tree Phuket', time: '' },

        ]
      },
                                                                                                            {
        id: 66,
        city: 'phuket',
        new: true,
        status: 'best',
        name: 'Wallaya Residence Naiharn',
        priceDollars: '123 798 $',
        priceTHB: 'THB 4 000 000',
        location: 'Най Харн, Пхукет',
        coordinates: [98.316663, 7.778967],
        firstImg: '/img/objects/66/start.webp',
        bgImg: '/img/objects/66/bgImg.webp',
        bigImg: '/img/objects/66/bigImg.webp',
        genImg: '/img/objects/66/genplan.webp',
        description: 'Wallaya Residence Nai Harn выполнен в современном минималистичном архитектурном стиле с использованием натуральных материалов и спокойной цветовой палитры. Архитектура проекта адаптирована к природному ландшафту Пхукета и гармонично сочетается с тропической растительностью. Комплекс состоит из трёх семиэтажных зданий, в которых размещено 285 апартаментов. В проекте представлены студии, а также квартиры с одной, двумя и тремя спальнями площадью от 36 до 94 м². Планировки разработаны с акцентом на функциональное зонирование, естественное освещение и комфорт для повседневной жизни.',
        genDesc: 'Генеральный план Wallaya Residence Nai Harn включает три семиэтажных жилых корпуса, объединённых благоустроенной закрытой территорией. В центральной части комплекса расположен основной бассейн с зоной отдыха, рядом — детский бассейн и детский клуб. <br>Общественные пространства, включая фитнес-центр, спа, коворкинг и ресторан, размещены внутри территории и удобно связаны пешеходными маршрутами. Озеленённые зоны и прогулочные дорожки формируют спокойную и упорядоченную жилую среду. На крышах зданий предусмотрены зоны отдыха и пространства для занятий йогой. Парковка вынесена в подземную и крытую часть комплекса, что сохраняет территорию свободной от движения транспорта.',
        descriptionExterior: 'Территория комплекса благоустроена и озеленена, с чётким разделением жилых, общественных и рекреационных зон.',
        specs: {
          readyDate: 'Q3 2027',          // срок сдачи
          areaTotal: '36 м² - 94 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '1-3',                   // кол-во спален
          bathrooms: '1-3',
          developer: 'Wallaya Villas Developments'
        },
        amenities: [
          'Большой бассейн с зоной отдыха', 'детский бассейн','фитнес-центр','спа-центр','коворкинг', 'детский клуб', 'ресторан и лаунж-бар', 'кинотеатр под открытым небом на крыше', 'зоны для отдыха и занятий йогой','ресепшн и консьерж', 'парковка', 'круглосуточная охрана и видеонаблюдение',], 
        galleryExterior: [
          '/img/objects/66/exterior/obj1.webp',
          '/img/objects/66/exterior/obj2.webp',
          '/img/objects/66/exterior/obj3.webp',
          '/img/objects/66/exterior/obj4.webp',
          '/img/objects/66/exterior/obj5.webp',
          '/img/objects/66/exterior/obj6.webp',
          '/img/objects/66/exterior/obj7.webp',
          '/img/objects/66/exterior/obj8.webp',
          '/img/objects/66/exterior/obj9.webp',

        ],
        galleryInterior: [
          '/img/objects/66/interior/obj1.webp',
          '/img/objects/66/interior/obj2.webp',
          '/img/objects/66/interior/obj3.webp',
          '/img/objects/66/interior/obj1.webp',


        ],
        units: [
             {
    id: '11',
    title: 'Cтудии',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 36, max: 36 },         // м²
    floor: { min: 2, max: 7 },
    // priceTHB: 33000000,
    // cover: '/img/objects/65/plans/unit1.webp'
          },
     {
    id: '1',
    title: '1 Cпальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 54, max: 54 },         // м²
    floor: { min: 2, max: 7 },
    // priceTHB: 33000000,
  //  cover: '/img/objects/65/plans/unit2.webp'
          },
                        {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 90, max: 90},         // м²
    floor: { min: 2, max: 7},
    // priceTHB: 38000000,
    //  cover: '/img/objects/65/plans/unit3.webp'
          },
                                                {
    id: '4',
    title: '3 спальни',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 90, max: 90},         // м²
    floor: { min: 2, max: 7},
    // priceTHB: 38000000,
    //  cover: '/img/objects/65/plans/unit3.webp'
          },

],
     bookingConditions: [
    { id: 1, title: 'Депозит бронирования 200 000 THB ', type: 'amount',  },
    { id: 2, title: '20-30% — при подписании контракта',  },
    { id: 3, title: '40%-50% — рассрочка на период строительства', },
    { id: 4, title: 'Финальный платеж — при передаче апартамента',   },


            ],
   infrastructure: [
          { id: 1, title: 'Nai Harn Beach', time: '' },
          { id: 2, title: 'Rawai Beach', time: '' },
         { id: 3, title: 'Nai Harn Lake', time: '' },
         { id: 4, title: 'Promthep Cape Viewpoint', time: '' },
         { id: 7, title: 'Рестораны и кафе района Най Харн', time: '' },

        ]
      },
                                                                                                        {
        id: 65,
        city: 'pattaya',
        new: true,
        name: 'The Coral Pattaya',
        priceDollars: '86 000 $',
        priceTHB: 'THB 3 125 000',
        location: 'Наклуа, Паттайя',
        coordinates: [100.916248, 12.974162],
        firstImg: '/img/objects/65/start.webp',
        bgImg: '/img/objects/65/bgImg.webp',
        bigImg: '/img/objects/65/bigImg.webp',
        genImg: '/img/objects/65/genplan.webp',
        description: 'The Coral Pattaya — масштабный жилой комплекс в северной части Паттайи, выполненный в концепции бутик-курорта с современной архитектурой и природными мотивами. Дизайн проекта вдохновлён формами коралловых рифов, что отражается в плавных линиях зданий и общей атмосфере пространства, создающего ощущение спокойствия и курортного уюта. <br>Проект сочетает комфортное городское проживание с элементами курортной инфраструктуры. Благодаря продуманным общественным зонам, зеленым пространствам и разнообразию сервисов комплекс подходит как для постоянного проживания, так и для инвестиционной покупки с целью аренды.',
        genDesc: 'Генеральный план проекта предусматривает размещение нескольких малоэтажных зданий высотой до 8 этажей, объединённых общей благоустроенной территорией. В центральной части комплекса расположены бассейны и зоны отдыха, окружённые зелёными пространствами. Инфраструктурные объекты — фитнес-центр, сауна, коворкинг и лаунж-зоны — равномерно распределены внутри комплекса для удобства жителей. На верхних уровнях размещены панорамные зоны отдыха и Sky Garden. Отдельные уровни предусмотрены для парковки и сервисных помещений, что позволяет сохранить внутреннюю территорию комплекса максимально спокойной и безопасной.',
        descriptionExterior: 'Архитектурная концепция комплекса вдохновлена природными формами коралловых рифов. Плавные линии фасадов, мягкие переходы между пространствами и сочетание современных материалов создают уникальный визуальный стиль. Проект разработан как жилой комплекс с атмосферой курортного отдыха. Территория включает множество общественных пространств, зон отдыха и озеленённых участков. Большое внимание уделено созданию мест для расслабления и общения: уютные лаунжи, сады и панорамные площадки формируют комфортную среду для жизни.',
        specs: {
          readyDate: '2026–2027',          // срок сдачи
          areaTotal: '25 м² - 56 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '0-2',                   // кол-во спален
          bathrooms: '1-2',
          developer: 'Richly Field International Company Limited'
        },
        amenities: [
          'Бассейн с солёной водой', 'большой основной бассейн','детский бассейн','Sky Garden на крыше','фитнес-центр', 'зал бокса', 'сауна', 'коворкинг и рабочие пространства', 'библиотека','лаунж-зоны', 'мини-кинотеатр', 'спортивный симулятор гольфа', 'высокоскоростной интернет','доступ по ключ-картам'], 
        galleryExterior: [
          '/img/objects/65/exterior/obj1.webp',
          '/img/objects/65/exterior/obj2.webp',
          '/img/objects/65/exterior/obj3.webp',
          '/img/objects/65/exterior/obj4.webp',
          '/img/objects/65/exterior/obj5.webp',
          '/img/objects/65/exterior/obj6.webp',

        ],
        galleryInterior: [
          '/img/objects/65/interior/obj1.webp',
          '/img/objects/65/interior/obj2.webp',
          '/img/objects/65/interior/obj3.webp',
          '/img/objects/65/interior/obj1.webp',


        ],
        units: [
             {
    id: '11',
    title: 'Cтудии',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 25, max: 29 },         // м²
    floor: { min: 1, max: 8 },
    // priceTHB: 33000000,
    cover: '/img/objects/65/plans/unit1.webp'
          },
     {
    id: '1',
    title: '1 Cпальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 33, max: 48 },         // м²
    floor: { min: 1, max: 8 },
    // priceTHB: 33000000,
   cover: '/img/objects/65/plans/unit2.webp'
          },
                        {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 53, max: 56},         // м²
    floor: { min: 1, max: 8},
    // priceTHB: 38000000,
     cover: '/img/objects/65/plans/unit3.webp'
          },

],
     bookingConditions: [
    { id: 1, title: 'Депозит бронирования 50 000 THB ', type: 'amount',  },
    { id: 2, title: '30% — при подписании контракта', type: 'percent', value: 30  },
    { id: 3, title: '40% — рассрочка на период строительства', type: 'percent', value: 40  },
    { id: 4, title: '30% — при передаче апартамента', type: 'percent', value: 30  },


            ],
   infrastructure: [
          { id: 1, title: 'Naklua Beach', time: '' },
          { id: 2, title: 'Sanctuary of Truth (Храм Истины)', time: '' },
         { id: 3, title: 'Terminal 21 Pattaya', time: '' },
         { id: 4, title: 'Central Marina Pattaya ', time: '' },
         { id: 7, title: 'Bangkok Hospital Pattaya', time: '' },
        { id: 8, title: 'Pattaya Beach Road', time: '' },
            { id: 9, title: 'Koh Larn (Coral Island) ', time: '' },
        ]
      },
                                                                                                    {
        id: 64,
        city: 'pattaya',
        new: true,
        name: 'Avenue Boutique Condominium',
        priceDollars: '64 000 $',
        priceTHB: 'THB 2 300 000',
        location: 'Джомтьен, Паттайя',
        coordinates: [100.888258, 12.928104],
        firstImg: '/img/objects/64/start.webp',
        bgImg: '/img/objects/64/bgImg.webp',
        bigImg: '/img/objects/64/bigImg.webp',
        genImg: '/img/objects/64/genplan.webp',
        description: 'Avenue Boutique Condominium — современный бутик-кондоминиум в самом центре Паттайи, созданный для комфортной городской жизни рядом с ключевыми локациями курорта. Проект сочетает компактный формат резиденций, удобную инфраструктуру и выгодное расположение в пешей доступности от пляжа, торговых центров и развлекательных районов. <br>Комплекс состоит из двух восьмиэтажных зданий с ограниченным количеством апартаментов, что создаёт более приватную и спокойную атмосферу по сравнению с крупными жилыми проектами. Архитектура выполнена в современном стиле с лаконичными фасадами, а внутренняя инфраструктура ориентирована на повседневный комфорт жителей.',
        genDesc: 'Генеральный план комплекса включает два восьмиэтажных корпуса, объединённых внутренней территорией с рекреационной инфраструктурой. Центральным элементом общественной зоны является бассейн с зонами отдыха и лежаками .Вокруг бассейна расположены зелёные пространства и прогулочные зоны. Фитнес-центр и оздоровительная зона с сауной размещены внутри комплекса, обеспечивая жителям доступ к инфраструктуре в любое время. Парковочные зоны расположены на отдельном уровне, что позволяет сохранить внутреннюю территорию комплекса спокойной и безопасной для отдыха.',
        descriptionExterior: 'Avenue Boutique Condominium выполнен в концепции компактного городского резиденциального комплекса с акцентом на функциональность и удобство. Современные фасады зданий сочетаются с продуманными общественными пространствами и зелёными зонами. Территория проекта организована так, чтобы жители могли комфортно отдыхать внутри комплекса: предусмотрены зоны для релаксации у бассейна, прогулочные пространства и садовые участки. Архитектура зданий ориентирована на максимальное естественное освещение апартаментов и рациональное использование площади.',
        specs: {
          readyDate: 'Май 2029',          // срок сдачи
          areaTotal: '34 м² - 84 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '0-2',                   // кол-во спален
          bathrooms: '1-2',
          developer: 'Cosy Beach View'
        },
        amenities: [
          'Большой бассейн', 'зона джакузи','сауна и паровая комната','современный фитнес-центр','тренажерный зал', 'озеленённый сад и зоны отдыха', 'детская игровая площадка', 'джакузи', 'детская игровая комната','детская комната', 'подземная и наземная парковка', 'Wi-Fi в общественных зонах', 'высокоскоростной интернет','доступ по ключ-картам'], 
        galleryExterior: [
          '/img/objects/64/exterior/obj1.webp',
          '/img/objects/64/exterior/obj2.webp',
          '/img/objects/64/exterior/obj3.webp',
          '/img/objects/64/exterior/obj4.webp',
          '/img/objects/64/exterior/obj5.webp',
          '/img/objects/64/exterior/obj6.webp',

        ],
        galleryInterior: [
          '/img/objects/64/interior/obj1.webp',
          '/img/objects/64/interior/obj2.webp',
          '/img/objects/64/interior/obj3.webp',
          '/img/objects/64/interior/obj4.webp',


        ],
        units: [
             {
    id: '11',
    title: 'Cтудии',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 34, max: 35 },         // м²
    floor: { min: 1, max: 8 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
     {
    id: '1',
    title: '1 Cпальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 43, max: 45 },         // м²
    floor: { min: 1, max: 8 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
                        {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 55, max: 84},         // м²
    floor: { min: 1, max: 8},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },

],
     bookingConditions: [
    { id: 1, title: 'Депозит бронирования 100 000 THB ', type: 'amount',  },
    { id: 2, title: '30% — при подписании контракта', type: 'percent', value: 30  },
    { id: 3, title: '40% — рассрочка на период строительства', type: 'percent', value: 40  },
    { id: 4, title: '30% — при передаче апартамента', type: 'percent', value: 30  },


            ],
   infrastructure: [
          { id: 1, title: 'Avenue Shopping Center', time: '' },
          { id: 2, title: 'Soi Buakhao', time: '' },
         { id: 3, title: 'Walking Street Pattaya', time: '' },
         { id: 4, title: 'Pattaya Beach', time: '' },
         { id: 7, title: 'Central Festival Pattaya', time: '' },
        { id: 8, title: 'Terminal 21 Pattaya', time: '' },
            { id: 9, title: 'angkok Hospital Pattaya ', time: '' },
        ]
      },
                                                                                                {
        id: 63,
        city: 'pattaya',
        new: true,
        name: 'HARMONIA CITY GARDEN',
        priceDollars: '95 000 $',
        priceTHB: 'THB 3 447 000',
        location: 'Центр, Паттайя',
        coordinates: [100.875128, 12.918621],
        firstImg: '/img/objects/63/start.webp',
        bgImg: '/img/objects/63/bgImg.webp',
        bigImg: '/img/objects/63/bigImg.webp',
        genImg: '/img/objects/63/genplan.webp',
        description: 'Harmonia City Garden — современный жилой комплекс в районе Джомтьен в Паттайе, расположенный примерно в 1,3 км от пляжа Jomtien Beach. Локация сочетает спокойную атмосферу курортного района с удобным доступом к инфраструктуре города. <br> Проект включает четыре жилых здания высотой по 8 этажей и в общей сложности 656 апартаментов. Комплекс ориентирован на комфортное проживание и предлагает широкий выбор планировок — от компактных студий до более просторных квартир с несколькими спальнями.<br><br>Harmonia City Garden создан как жилое пространство с курортной атмосферой: на территории предусмотрены бассейны, зоны отдыха, зелёные сады и общественные пространства для жителей. Благодаря удобному расположению рядом с рынками, супермаркетами и автобусной станцией проект подходит как для проживания, так и для инвестиционной покупки.',
        genDesc: 'Генеральный план комплекса предусматривает чёткое разделение жилых и рекреационных зон. Четыре здания по 8 этажей расположены вокруг центральной территории, где сосредоточена основная инфраструктура проекта. В центре комплекса находится большая водная зона с бассейнами, детским бассейном и зонами отдыха. Вдоль территории проходят прогулочные дорожки, соединяющие корпуса с общественными пространствами и зонами отдыха. На крыше одного из зданий предусмотрен бар и сад с панорамными видами, создающий дополнительное пространство для отдыха жителей. Под каждым зданием размещена подземная парковка, обеспечивающая удобный доступ к лифтам и инфраструктуре комплекса.',
        descriptionExterior: 'Архитектурная концепция Harmonia City Garden вдохновлена европейским стилем жилых комплексов, где большое внимание уделяется эстетике и функциональности общественных пространств. Невысокая этажность зданий создаёт более уютную атмосферу проживания и позволяет сохранить ощущение приватности. Четыре корпуса комплекса расположены вокруг внутренней территории, где сформирована основная зона отдыха. Здесь размещены бассейны, декоративные водные элементы, прогулочные дорожки и зелёные сады с тропическим озеленением. Такое планирование создаёт ощущение закрытого курортного пространства внутри города.',
        specs: {
          readyDate: 'Q2 2027',          // срок сдачи
          areaTotal: '20 м² - 50,5 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '1-2',                   // кол-во спален
          bathrooms: '1-2',
          developer: 'Global Top Group'
        },
        amenities: [
          'Большой бассейн вокруг комплекса', 'детский бассейн','бассейн с водопадом','бар на крыше с садом','тренажерный зал', 'зал для йоги', 'сауна и парная', 'джакузи', 'детская игровая комната','зоны барбекю', 'подземная парковка', 'Wi-Fi в общественных зонах', 'высокоскоростные лифты'], 
        galleryExterior: [
          '/img/objects/63/exterior/obj1.webp',
          '/img/objects/63/exterior/obj2.webp',
          '/img/objects/63/exterior/obj3.webp',
          '/img/objects/63/exterior/obj4.webp',

        ],
        galleryInterior: [
          // '/img/objects/62/interior/obj1.webp',
          // '/img/objects/62/interior/obj2.webp',
          // '/img/objects/62/interior/obj3.webp',
          // '/img/objects/62/interior/obj4.webp',
          // '/img/objects/62/interior/obj5.webp',

        ],
        units: [
             {
    id: '11',
    title: 'Cтудии',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 20, max: 20 },         // м²
    floor: { min: 1, max: 8 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
     {
    id: '1',
    title: '1 Cпальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 25, max: 25 },         // м²
    floor: { min: 1, max: 8 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
                        {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 50, max: 50},         // м²
    floor: { min: 1, max: 8},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },

],
     bookingConditions: [
    { id: 1, title: 'Депозит бронирования 100 000 THB ', type: 'amount',  },
    { id: 2, title: '30% — при подписании контракта', type: 'percent', value: 30  },
    { id: 3, title: '50% — рассрочка на период строительства', type: 'percent', value: 50  },
    { id: 4, title: '20% — при получении ключей', type: 'percent', value: 20  },


            ],
   infrastructure: [
          { id: 1, title: 'Jomtien Beach', time: '' },
          { id: 2, title: 'Jomtien Night Market', time: '' },
         { id: 3, title: 'Pattaya Floating Market', time: '' },
         { id: 4, title: 'Underwater World Pattaya', time: '' },
         { id: 7, title: 'Terminal 21 Pattaya', time: '' },
        { id: 8, title: 'Central Festival Pattaya', time: '' },
            { id: 9, title: 'Bangkok Hospital Pattaya', time: '' },
        ]
      },
                                                                                            {
        id: 62,
        city: 'pattaya',
        new: true,
        name: 'CELINE WONGAMAT',
        priceDollars: '89 000 $',
        priceTHB: 'THB 3 120 000',
        location: 'Вонгамат, Паттайя',
        coordinates: [100.888061, 12.961079],
        firstImg: '/img/objects/62/start.webp',
        bgImg: '/img/objects/62/bgImg.webp',
        bigImg: '/img/objects/62/bigImg.webp',
        genImg: '/img/objects/62/genplan.webp',
        description: 'Celine Wongamat — камерный бутик-кондоминиум в престижном районе Wongamat – Naklua, одном из самых спокойных и востребованных жилых районов Северной Паттайи. Проект расположен примерно в 650 метрах от пляжа Wong Amat, который считается одним из самых чистых и ухоженных пляжей города. Комплекс ориентирован на формат приватной резиденции: всего 126 апартаментов в одном здании высотой 8 этажей. Такой масштаб проекта создаёт атмосферу клубного жилья и отличается от крупных кондоминиумов Паттайи, где количество юнитов может превышать тысячу.',
        genDesc: 'Комплекс занимает участок площадью около 3 181 м² и состоит из одного жилого корпуса, вокруг которого организована основная инфраструктура. На уровне первого этажа расположены лобби, коммерческие помещения и общественные пространства. Центральную часть занимает садовый бассейн с зонами отдыха, формирующий основную рекреационную зону комплекса. Верхний уровень здания отведён под панорамный инфинити-бассейн, откуда открываются виды на район Вонгамат и побережье. Подземный уровень включает парковку и технические помещения.',
        descriptionExterior: 'Celine Wongamat спроектирован как компактный курортный комплекс, где основное внимание уделено приватности и зелёной среде.Центральное пространство территории занимает ландшафтный внутренний двор, где размещены бассейн, водные элементы Aqua Court и зоны отдыха. Озеленение выполнено в тропическом стиле с использованием пальм, декоративных кустарников и теневых деревьев. Невысокая этажность здания позволяет сохранить более спокойную атмосферу проживания и улучшает естественную вентиляцию территории. Большие балконы и панорамные окна создают визуальную связь между апартаментами и зелёными зонами комплекса.',
        specs: {
          readyDate: '2029',          // срок сдачи
          areaTotal: '40 м² - 83 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '1-2',                   // кол-во спален
          bathrooms: '1-2',
          developer: 'Shuen Jit Co., Ltd.'
        },
        amenities: [
          'Инфинити-бассейн на крыше', 'бассейн на уровне сада','wellness pool','тренажерный зал','студия йоги', 'сауна', 'Aqua Court с водными элементами', 'лаунж-пространства', 'сад и прогулочные зоны', 'подземная парковка', 'Wi-Fi в общественных зонах', 'высокоскоростные лифты'], 
        galleryExterior: [
          '/img/objects/62/exterior/obj1.webp',
          '/img/objects/62/exterior/obj2.webp',
          '/img/objects/62/exterior/obj3.webp',
          '/img/objects/62/exterior/obj4.webp',
          '/img/objects/62/exterior/obj5.webp',
          '/img/objects/62/exterior/obj6.webp',
          '/img/objects/62/exterior/obj7.webp',
          '/img/objects/62/exterior/obj8.webp',
          '/img/objects/62/exterior/obj9.webp',
          '/img/objects/62/exterior/obj10.webp',

        ],
        galleryInterior: [
          '/img/objects/62/interior/obj1.webp',
          '/img/objects/62/interior/obj2.webp',
          '/img/objects/62/interior/obj3.webp',
          '/img/objects/62/interior/obj4.webp',
          '/img/objects/62/interior/obj5.webp',

        ],
        units: [
     {
    id: '1',
    title: '1 Cпальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 40, max: 54 },         // м²
    floor: { min: 1, max: 8 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
                        {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 60, max: 83},         // м²
    floor: { min: 1, max: 8},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },

],
           bookingConditions: [
    { id: 1, title: 'Депозит бронирования 100 000 THB ', type: 'amount',  },
    { id: 2, title: '20% — платеж на подписание контракта', type: 'percent', value: 30  },
    { id: 3, title: '30% — рассрочка на период строительства', type: 'percent', value: 30  },
    { id: 4, title: '50% — платеж при передаче объекта', type: 'percent', value: 50  },


            ],
   infrastructure: [
          { id: 1, title: 'Wongamat Beach', time: '' },
          { id: 2, title: 'Pattaya Beach', time: '' },
         { id: 3, title: 'Terminal 21 Pattaya', time: '' },
         { id: 4, title: 'Central Festival Pattaya Beach', time: '' },
         { id: 7, title: 'Bangkok Hospital Pattaya', time: '' },
         { id: 8, title: 'Lavat International School', time: '' },
        ]
      },
                                                                                        {
        id: 61,
        city: 'pattaya',
        new: true,
        name: 'The Riviera Palm Beach',
        priceDollars: '89 000 $',
        priceTHB: 'THB 3 120 000',
        location: 'Вонгамат, Паттайя',
        coordinates: [100.890348, 12.971414],
        firstImg: '/img/objects/61/start.webp',
        bgImg: '/img/objects/61/bgImg.webp',
        bigImg: '/img/objects/61/bigImg.webp',
        genImg: '/img/objects/61/genplan.webp',
        description: 'The Riviera Palm Beach — новый флагманский проект премиум-класса от девелопера Riviera Group, расположенный на первой линии пляжа Wongamat Beach — одной из самых престижных и закрытых локаций города Pattaya. Проект создаётся в формате boutique private residence — это означает ограниченное количество резиденций, высокий уровень приватности и инфраструктуру уровня премиального курорта. В 47-этажной башне предусмотрено всего 298 апартаментов, что делает комплекс заметно более камерным по сравнению с большинством новых высотных проектов Паттайи.',
        genDesc: 'Проект включает одну высотную башню, расположенную на участке рядом с первой линией пляжа Wongamat. Клубная инфраструктура размещена в отдельном многоуровневом блоке, где находятся бассейны, ресторан, фитнес-центр и spa-пространства. На нескольких этажах здания расположены sky-сады и зоны отдыха. На 28 этаже размещён панорамный infinity-бассейн с лаунж-баром и видами на Сиамский залив. Верхние этажи занимают жилые резиденции и видовые общественные пространства. Подземный уровень комплекса предназначен для парковки резидентов.',
        descriptionExterior: 'Secret Garden сочетает современную архитектуру, функциональные планировки и курортную атмосферу. Апартаменты предлагаются с полной меблировкой и дизайнерской отделкой. Панорамные окна от пола до потолка наполняют пространство естественным светом, а просторные балконы позволяют наслаждаться видом на зелёные сады комплекса. Проект отлично подходит как для личного проживания, так и для инвестиций. Район Наклуа и Вонгамат традиционно считается одной из самых престижных и спокойных локаций Паттайи, где сосредоточены качественные жилые комплексы, пятизвёздочные отели и развитая инфраструктура.',
        specs: {
          readyDate: 'Q4 2029',          // срок сдачи
          areaTotal: '39 м² - 295 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '1-3',                   // кол-во спален
          bathrooms: '1-3',
          developer: 'Riviera Group'
        },
        amenities: [
          'Океанский бассейн на территории комплекса', 'панорамный infinity-бассейн на 28 этаже','sky-лаунж и бар с видом на море','фитнес-центр 24/7','spa-комплекс', 'онсен', 'сауны и парные', 'лаунж-пространства', 'сад и прогулочные зоны', 'подземная парковка', 'Wi-Fi в общественных зонах', 'высокоскоростные лифты'], 
        galleryExterior: [
          '/img/objects/61/exterior/obj1.webp',
          '/img/objects/61/exterior/obj2.webp',
          '/img/objects/61/exterior/obj3.webp',
          '/img/objects/61/exterior/obj4.webp',
          '/img/objects/61/exterior/obj5.webp',
          '/img/objects/61/exterior/obj6.webp',
            '/img/objects/61/exterior/obj7.webp',

        ],
        galleryInterior: [
          '/img/objects/61/interior/obj1.webp',
          '/img/objects/61/interior/obj2.webp',
          '/img/objects/61/interior/obj3.webp',
          '/img/objects/61/interior/obj1.webp',

        ],
        units: [
     {
    id: '1',
    title: '1 Cпальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 39, max: 69 },         // м²
    floor: { min: 2, max: 47 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
                        {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 61, max: 86},         // м²
    floor: { min: 2, max: 47},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                                             {
    id: '4',
    title: '3 спальни',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 104, max: 104},         // м²
    floor: { min: 2, max: 47},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                                                                                          {
    id: '5',
    title: 'Пентхаус',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 239, max: 254},         // м²
    floor: { min: 2, max: 47},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                                                                                                                                                                                    {
    id: '6',
    title: 'Дуплекс',
    bedrooms: 4,
    bathrooms: 4,
    area: { min: 386, max: 386},         // м²
    floor: { min: 2, max: 47},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
  
],
           bookingConditions: [
    { id: 1, title: '1BR: 200 000 THB ', type: 'amount',  },
    { id: 2, title: '2BR: 300 000 THB', },
    { id: 3, title: '3BR: 500 000 THB', },
    { id: 4, title: '35% — первый платеж', },
    { id: 5, title: '15% — рассрочка до конца строительства', },
    { id: 6, title: '50% — при завершении',  },


            ],
   infrastructure: [
          { id: 1, title: 'Wongamat Beach', time: '' },
          { id: 2, title: 'Sanctuary of Truth', time: '' },
         { id: 3, title: 'Terminal 21 Pattaya', time: '' },
         { id: 4, title: 'Central Festival Pattaya Beach', time: '' },
         { id: 7, title: 'Bangkok Hospital Pattaya', time: '' },
         { id: 8, title: 'Naklua Fish Market', time: '' },
        ]
      },
                                                                                    {
        id: 60,
        city: 'pattaya',
        new: true,
        name: 'Secret Garden Condominium',
        priceDollars: '89 000 $',
        priceTHB: 'THB 3 120 000',
        location: 'Наклуа, Паттайя',
        coordinates: [100.867986, 12.920199],
        firstImg: '/img/objects/60/start.webp',
        bgImg: '/img/objects/60/bgImg.webp',
        bigImg: '/img/objects/60/bigImg.webp',
        genImg: '/img/objects/60/genplan.webp',
        description: 'Secret Garden Condominium — камерный жилой комплекс в одном из самых престижных районов северной Паттайи. Проект расположен в районе Naklua, рядом с пляжем Wongamat Beach, который считается одним из самых спокойных и чистых в городе. <br> Концепция проекта основана на идее приватного жилого пространства среди тропической зелени. Комплекс состоит всего из 160 апартаментов, что создаёт более тихую и комфортную атмосферу по сравнению с крупными высотными кондоминиумами Паттайи. Небольшая этажность здания и продуманное благоустройство территории формируют ощущение закрытого резиденциального пространства.',
        genDesc: 'Проект включает одно восьмиэтажное здание, расположенное на благоустроенной территории с внутренним озеленением. Основная инфраструктура комплекса распределена между первым этажом и крышей здания. На уровне первого этажа размещены бассейны, зоны отдыха, коворкинг-пространство и общественные зоны комплекса. Крыша здания оборудована дополнительной зоной отдыха и пространствами для релаксации. Подземный уровень предназначен для парковки резидентов. Ландшафтная концепция проекта предполагает создание приватного зелёного пространства с тропическими садами и прогулочными зонами.',
        descriptionExterior: 'Secret Garden сочетает современную архитектуру, функциональные планировки и курортную атмосферу. Апартаменты предлагаются с полной меблировкой и дизайнерской отделкой. Панорамные окна от пола до потолка наполняют пространство естественным светом, а просторные балконы позволяют наслаждаться видом на зелёные сады комплекса. Проект отлично подходит как для личного проживания, так и для инвестиций. Район Наклуа и Вонгамат традиционно считается одной из самых престижных и спокойных локаций Паттайи, где сосредоточены качественные жилые комплексы, пятизвёздочные отели и развитая инфраструктура.',
        specs: {
          readyDate: '2028',          // срок сдачи
          areaTotal: '22 м² - 100 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '1-3',                   // кол-во спален
          bathrooms: '1-3',
          developer: 'SLR Development Co., Ltd'
        },
        amenities: [
          'Два бассейна', 'бассейн на крыше',' зона для загара и отдыха','фитнес-центр','сауна', 'коворкинг', 'детская зона', 'лаунж-пространства', 'сад и прогулочные зоны', 'подземная парковка'], 
        galleryExterior: [
          '/img/objects/60/exterior/obj1.webp',
          '/img/objects/60/exterior/obj2.webp',
          '/img/objects/60/exterior/obj3.webp',
          '/img/objects/60/exterior/obj4.webp',
            '/img/objects/60/exterior/obj5.webp',
          '/img/objects/60/exterior/obj6.webp',

        ],
        galleryInterior: [
          '/img/objects/60/interior/obj10.webp',
          '/img/objects/60/interior/obj9.webp',
          '/img/objects/60/interior/obj8.webp',
          '/img/objects/60/interior/obj7.webp',
          '/img/objects/60/interior/obj1.webp',
          '/img/objects/60/interior/obj2.webp',
          '/img/objects/60/interior/obj3.webp',
          '/img/objects/60/interior/obj4.webp',
          '/img/objects/60/interior/obj5.webp',
          '/img/objects/60/interior/obj6.webp',

        ],
        units: [
     {
    id: '1',
    title: '1 Cпальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 34, max: 66 },         // м²
    floor: { min: 2, max: 50 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
                        {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 72, max: 82},         // м²
    floor: { min: 2, max: 8},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
  
],
           bookingConditions: [
    { id: 1, title: 'Депозит 100 000 THB ', type: 'amount',  },
    { id: 2, title: '30% — при подписании контракта', type: 'percent', value: 30 },
    { id: 3, title: '60% — рассрочка равными платежами на период строительства', type: 'percent', value: 60 },
    { id: 4, title: '10% — при передаче апартаментов и получении ключей', type: 'percent', value: 10 },


            ],
   infrastructure: [
          { id: 1, title: 'Wongamat Beach', time: '' },
          { id: 2, title: 'Sanctuary of Truth', time: '' },
         { id: 3, title: 'Terminal 21 Pattaya', time: '' },
         { id: 4, title: 'Central Festival Pattaya Beach', time: '' },
         { id: 7, title: 'Bangkok Hospital Pattaya', time: '' },
         { id: 8, title: 'рестораны и кафе района Naklua', time: '' },
          { id: 9, title: 'международные школы и детские сады', time: '' },


        ]
      },
                                                                                 {
        id: 59,
        city: 'pattaya',
        new: true,
        name: 'Grand Solaire Noble',
        priceDollars: '61 457$',
        priceTHB: 'THB 2 590 000',
        location: 'Центр, Паттайя',
        coordinates: [100.867986, 12.920199],
        firstImg: '/img/objects/59/start.webp',
        bgImg: '/img/objects/59/bgImg.webp',
        bigImg: '/img/objects/59/bigImg.webp',
        genImg: '/img/objects/59/genplan.webp',
        description: 'Grand Solaire Noble — новый высотный жилой комплекс премиум-класса в Паттайе, предлагающий современный формат жизни в сочетании с курортной атмосферой. Проект разработан известным девелопером SLR Development, который специализируется на строительстве масштабных кондоминиумов с развитой внутренней инфраструктурой.<br>Комплекс представляет собой эффектную высотную башню, возвышающуюся над городской застройкой и открывающую панорамные виды на город, холмы Пратамнак и побережье Сиамского залива. Архитектура здания выполнена в современном стиле с большим количеством стекла и плавными линиями фасада, что создаёт ощущение лёгкости и пространства.',
        genDesc: 'Проект Grand Solaire Noble включает одну высотную жилую башню, расположенную на благоустроенной территории с развитой внутренней инфраструктурой. Здание размещено в центральной части участка, благодаря чему вокруг него сформированы зоны отдыха, бассейны и ландшафтные пространства для жителей.Территория комплекса включает прогулочные зоны с тропическим озеленением, площадки для отдыха и общественные пространства. Инфраструктура комплекса распределена на нескольких уровнях здания: нижние этажи занимают лобби и сервисные помещения, средние уровни отведены под жилые апартаменты, а верхние этажи включают панорамные зоны отдыха и бассейны с видами на город и море.',
        descriptionExterior: 'Архитектура комплекса выполнена в современном высотном стиле. Башня отличается выразительным силуэтом и панорамным остеклением, благодаря чему большинство апартаментов получают открытые виды на город и побережье. Особое внимание уделено общественным пространствам комплекса. Территория включает зоны отдыха, бассейны, прогулочные дорожки и тропическое озеленение. Общественные зоны оформлены в современном стиле с элементами курортного дизайна и просторными лаунж-пространствами.',
        specs: {
          readyDate: '2028',          // срок сдачи
          areaTotal: '22 м² - 100 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '1-3',                   // кол-во спален
          bathrooms: '1-3',
          developer: 'SLR Development Co., Ltd'
        },
        amenities: [
          'Панорамный инфинити-бассейн', 'несколько бассейнов и зон отдыха','современный фитнес-центр','сауна и паровые комнаты','SPA-пространство', 'коворкинг и бизнес-зона', 'лаунж-террасы', 'лаунж-пространства', 'кафе и коммерческие помещения', 'детская игровая зона'], 
        galleryExterior: [
          '/img/objects/59/exterior/obj1.webp',
          '/img/objects/59/exterior/obj2.webp',
          '/img/objects/59/exterior/obj3.webp',
          '/img/objects/59/exterior/obj1.webp',

        ],
        galleryInterior: [
          '/img/objects/59/interior/obj1.webp',
          '/img/objects/59/interior/obj2.webp',
          '/img/objects/59/interior/obj3.webp',
          '/img/objects/59/interior/obj4.webp',
          '/img/objects/59/interior/obj5.webp',
          '/img/objects/59/interior/obj6.webp',

        ],
        units: [
           {
    id: '11',
    title: 'Cтудия',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 22, max: 30 },         // м²
    floor: { min: 2, max:  50},
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
     {
    id: '1',
    title: '1 Cпальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 34, max: 45 },         // м²
    floor: { min: 2, max: 50 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
                        {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 60, max: 80},         // м²
    floor: { min: 2, max: 8},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                                                {
    id: '4',
    title: '3 спальни',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 100, max: 100},         // м²
    floor: { min: 2, max: 50},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                                                                                             {
    id: '5',
    title: '4 спальни',
    bedrooms: 4,
    bathrooms: 4,
    area: { min: 131, max: 268},         // м²
    floor: { min: 2, max: 8},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
  
],
           bookingConditions: [
    { id: 1, title: 'Депозит 100 000 THB ', type: 'amount',  },
    { id: 2, title: '30% — при подписании контракта', type: 'percent', value: 30 },
    { id: 3, title: '60% — можно разбить на равные платежи на период строительства', type: 'percent', value: 60 },
    { id: 4, title: '10% — при получении ключей ', type: 'percent', value: 10 },


            ],
   infrastructure: [
          { id: 1, title: 'Pratumnak Hill', time: '' },
          { id: 2, title: 'Пляжи Паттайи', time: '' },
         { id: 3, title: 'Terminal 21 Pattaya', time: '' },
         { id: 4, title: 'Госпитали и медицинские центры', time: '' },
         { id: 7, title: 'Central Festival Pattaya', time: '' },
         { id: 8, title: 'Рестораны и кафе', time: '' },


        ]
      },
                                                                             {
        id: 58,
        city: 'pattaya',
        new: true,
        name: 'Siam Oriental Oasis',
        priceDollars: '61 457$',
        priceTHB: 'THB 1 990 000',
        location: 'Пратумнак, Паттайя',
        coordinates: [100.869416, 12.9198334],
        firstImg: '/img/objects/58/start.webp',
        bgImg: '/img/objects/58/bgImg.webp',
        bigImg: '/img/objects/58/bigImg.webp',
        genImg: '/img/objects/58/genplan.webp',
        description: 'Комплекс расположен между Pratumnak Soi 4 и Soi 5 — одним из самых престижных и спокойных районов Паттайи. Район Пратамнак находится между Центральной Паттайей и Джомтьеном и считается одной из самых комфортных локаций для проживания благодаря зелёной атмосфере, близости к морю и развитой инфраструктуре. До ближайшего пляжа — около 500 метров, что позволяет добраться до моря пешком всего за несколько минут. Рядом находятся рестораны, кафе, супермаркеты, смотровые площадки и основные достопримечательности города.',
        genDesc: 'Проект занимает участок площадью около 4 000 м² и включает три жилых корпуса — A, B и C. На первом уровне комплекса расположен большой бассейн с зонами отдыха, шезлонгами и зелёным садом. Основная общественная инфраструктура комплекса размещена на крыше здания A, откуда открываются панорамные виды на район Пратамнак и море.Также предусмотрены озеленённые зоны на крышах зданий и подземная парковка для автомобилей.',
        descriptionExterior: 'Siam Oriental Oasis — современный жилой кондоминиум в престижном районе Пратамнак в Паттайе. Проект реализуется известным девелопером Siam Oriental Trading Co., Ltd. и является двенадцатым проектом компании в городе.Комплекс состоит из трёх восьмиэтажных зданий и включает 377 апартаментов различных планировок — от компактных студий до просторных квартир с несколькими спальнями.',
        specs: {
          readyDate: 'Q4 2027',          // срок сдачи
          areaTotal: '26 м² - 268 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '1-3',                   // кол-во спален
          bathrooms: '1-3',
          developer: 'Siam Oriental Trading Co., Ltd.'
        },
         amenities: [
          'два бассейна', 'фитнес-центр','финская сауна','турецкая паровая сауна','coworking-пространств', 'зоны отдыха', 'сад и благоустроенная территория', 'лаунж-пространства', 'коворкинг', 'подземная парковка'], 
        galleryExterior: [
          '/img/objects/58/exterior/obj1.webp',
          '/img/objects/58/exterior/obj2.webp',
          '/img/objects/58/exterior/obj3.webp',
          '/img/objects/58/exterior/obj4.webp',
          '/img/objects/58/exterior/obj5.webp',
          '/img/objects/58/exterior/obj6.webp',
        ],
        galleryInterior: [
          '/img/objects/58/interior/obj1.webp',
          '/img/objects/58/interior/obj2.webp',
          '/img/objects/58/interior/obj1.webp',
          '/img/objects/58/interior/obj2.webp',

        ],
        units: [
           {
    id: '11',
    title: ' Cтудия',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 26, max: 32 },         // м²
    floor: { min: 2, max: 8 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
     {
    id: '1',
    title: '1 Cпальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 35, max: 48 },         // м²
    floor: { min: 2, max: 8 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
                        {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 43, max: 78},         // м²
    floor: { min: 2, max: 8},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                                                {
    id: '4',
    title: '3 спальни',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 106, max: 131},         // м²
    floor: { min: 2, max: 8},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                                                                                             {
    id: '5',
    title: '4 спальни',
    bedrooms: 4,
    bathrooms: 4,
    area: { min: 131, max: 268},         // м²
    floor: { min: 2, max: 8},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
  
],
           bookingConditions: [
    { id: 1, title: 'Депозит 100 000 THB ', type: 'amount',  },
    { id: 2, title: '20% — при подписании контракта', type: 'percent', value: 20 },
    { id: 3, title: '20% — при начале строительства', type: 'percent', value: 20 },
    { id: 4, title: '20% — на этапе строительства', type: 'percent', value: 20 },
    { id: 5, title: '20% — на поздней стадии строительства',  type: 'percent', value: 20  },

            ],
   infrastructure: [
          { id: 1, title: 'Пляж Pratumnak Beach', time: '' },
          { id: 2, title: 'Смотровая площадка Pattaya View Point', time: '' },
         { id: 3, title: 'Храм Big Buddha', time: '' },
         { id: 4, title: 'Пирс Bali Hai', time: '' },
         { id: 7, title: 'Central Festival Pattaya', time: '' },
         { id: 8, title: 'Рестораны и кафе', time: '' },


        ]
      },
                                                                         {
        id: 57,
        city: 'pattaya',
        new: true,
        name: 'THE RIVIERA CALIFORNIA',
        priceDollars: '73 000$',
        priceTHB: 'THB 2 600 000',
        location: 'Пратумнак, Паттайя',
        coordinates: [100.869416, 12.9198334],
        firstImg: '/img/objects/57/start.webp',
        bgImg: '/img/objects/57/bgImg.webp',
        bigImg: '/img/objects/57/bigImg.webp',
        genImg: '/img/objects/57/genplan.webp',
        description: 'The Riviera California — современный жилой комплекс премиум-класса от известного девелопера Riviera Group, расположенный в районе Пратамнак на улице Thappraya Road в Паттайе. Район считается одним из самых удобных для проживания благодаря близости к центру города, пляжам и развитой инфраструктуре. Проект сочетает современную архитектуру, курортную атмосферу и высокий уровень комфорта. Комплекс подходит как для постоянного проживания, так и для инвестиций с целью получения дохода от аренды.',
        genDesc: 'Генеральный план комплекса предусматривает одну высотную жилую башню с многоуровневой инфраструктурой. Основная зона бассейнов и общественных пространств расположена на нижних уровнях комплекса и включает зоны отдыха, террасы и озеленённые пространства. Дополнительные зоны отдыха и панорамные площадки размещены на верхних этажах здания. Подземный уровень комплекса используется для парковки и технических помещений. Территория комплекса закрытая и охраняемая.',
        descriptionExterior: 'Здание представляет собой 33-этажную высотную башню с современным дизайном и панорамным остеклением. Архитектурная концепция вдохновлена атмосферой Калифорнии — сочетанием лёгкости, света и курортного образа жизни. В комплексе предусмотрено более 120 апартаментов различных форматов — от компактных квартир с одной спальней до просторных резиденций с несколькими спальнями. Большинство апартаментов имеют панорамные виды на море, холмы Пратамнака и город.',
        specs: {
          readyDate: '2029',          // срок сдачи
          areaTotal: '32 м² - 180 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '1-3',                   // кол-во спален
          bathrooms: '1-3',
          developer: 'The Riviera Group'
        },
         amenities: [
          'панорамный бассейн','инфинити-бассейн', 'фитнес-центр','SPA и wellness-зона','сауна и парная','джакузи', 'йога-зона', 'сад и прогулочные зоны', 'лаунж-пространства', 'коворкинг', 'подземная парковка'], 
        galleryExterior: [
          '/img/objects/57/exterior/obj1.webp',
          '/img/objects/57/exterior/obj2.webp',
          '/img/objects/57/exterior/obj3.webp',
          '/img/objects/57/exterior/obj1.webp',
        ],
        galleryInterior: [
          // '/img/objects/56/interior/obj1.webp',
          // '/img/objects/56/interior/obj2.webp',
          // '/img/objects/56/interior/obj3.webp',
        ],
        units: [
     {
    id: '1',
    title: ' Cпальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 32, max: 45 },         // м²
    floor: { min: 3, max: 33 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
            {
    id: '2',
    title: '1 спальня Plus ',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 45, max: 60},         // м²
    floor: { min: 3, max: 33},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                        {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 60, max: 95},         // м²
    floor: { min: 3, max: 33},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                                                {
    id: '4',
    title: '3 спальни',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 95, max: 180},         // м²
    floor: { min: 3, max: 33},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
  
],
           bookingConditions: [
    { id: 1, title: 'Депозит 100 000 THB ', type: 'amount',  },
    { id: 2, title: '20-30% — при подписании контракта', type: 'percent', value: 20 },
    { id: 3, title: '30% — рассрочка на период строительства', type: 'percent', value: 30 },
    { id: 4, title: '50% — оплата при передаче объекта',  type: 'percent', value: 50  },

            ],
   infrastructure: [
          { id: 1, title: 'Pratumnak Beach', time: '' },
          { id: 2, title: 'Walking Street Pattaya', time: '' },
         { id: 3, title: 'Central Festival Pattaya', time: '' },
         { id: 4, title: 'Terminal 21 Pattaya', time: '' },
         { id: 7, title: 'Bangkok Hospital Pattaya', time: '' },
         { id: 8, title: 'BBali Hai Pier', time: '' },


        ]
      },
                                                                       {
        id: 56,
        city: 'pattaya',
        new: true,
        name: 'Riviera SANTA MONICA',
        priceDollars: '60 000$',
        priceTHB: 'THB 2 100 000',
        location: 'Джомтьен, Паттайя',
        coordinates: [100.9126511, 12.8241034],
        firstImg: '/img/objects/56/start.webp',
        bgImg: '/img/objects/56/bgImg.webp',
        bigImg: '/img/objects/56/bigImg.webp',
        genImg: '/img/objects/56/genplan.webp',
        description: 'The Riviera Santa Monica — современный жилой комплекс премиум-класса от одного из самых известных девелоперов Паттайи — Riviera Group. Проект расположен в районе Джомтьен, одном из самых популярных районов города среди инвесторов и покупателей недвижимости. <br>Комплекс находится всего в нескольких минутах от пляжа Jomtien Beach и предлагает комфортную курортную атмосферу в сочетании с развитой городской инфраструктурой. Район активно развивается и считается одним из наиболее перспективных направлений для инвестиций в недвижимость Паттайи.',
        genDesc: 'Генеральный план комплекса предусматривает одну высотную жилую башню с курортной инфраструктурой, распределённой по нескольким уровням здания. Центральную часть территории занимает основной бассейн с зонами отдыха, водными террасами и зелёными садами. Общественные пространства включают фитнес-центр, SPA-комплекс, лаунжи и коворкинг-зоны. На верхних уровнях комплекса расположены панорамные зоны отдыха и инфинити-бассейн с видами на Сиамский залив и город. Подземный уровень используется для парковки и технических помещений.',
        descriptionExterior: 'Архитектура комплекса выполнена в современном стиле с панорамным остеклением и элегантными фасадами. Здание представляет собой высотную башню с впечатляющими видами на море, город и окрестности. Большое внимание уделено общественным зонам и курортной инфраструктуре, благодаря чему проект подходит как для проживания, так и для сдачи в аренду. В комплексе представлены различные типы апартаментов — от компактных квартир с одной спальней до просторных семейных резиденций с несколькими спальнями. Все апартаменты имеют современные планировки, панорамные окна и просторные балконы.',
        specs: {
          readyDate: '2028',          // срок сдачи
          areaTotal: '29 м² - 170 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '1-3',                   // кол-во спален
          bathrooms: '1-3',
          developer: 'The Riviera Group'
        },
         amenities: [
          ' большой бассейн в курортном стиле','панорамный бассейн на крыше', 'фитнес-центр','SPA и wellness-зона','сауна и парная','джакузи', 'йога-зона', 'сад и прогулочные зоны', 'лаунж-пространства', 'коворкинг', 'подземная парковка'], 
        galleryExterior: [
          '/img/objects/56/exterior/obj1.webp',
          '/img/objects/56/exterior/obj2.webp',
          '/img/objects/56/exterior/obj3.webp',
          '/img/objects/56/exterior/obj4.webp',
          
        ],
        galleryInterior: [
          // '/img/objects/56/interior/obj1.webp',
          // '/img/objects/56/interior/obj2.webp',
          // '/img/objects/56/interior/obj3.webp',
          //  '/img/objects/56/interior/obj4.webp',
          // '/img/objects/56/interior/obj5.webp',
          // '/img/objects/56/interior/obj6.webp',
        ],
        units: [
     {
    id: '1',
    title: ' Cпальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 29, max: 40 },         // м²
    floor: { min: 2, max: 34 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
            {
    id: '2',
    title: '1 спальня Plus ',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 40, max: 50},         // м²
    floor: { min: 2, max: 34},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                        {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 60, max: 90},         // м²
    floor: { min: 2, max: 34},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                                                {
    id: '4',
    title: '3 спальни',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 90, max: 170},         // м²
    floor: { min: 2, max: 34},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
  
],
           bookingConditions: [
    { id: 1, title: 'Депозит 100 000 THB ', type: 'amount',  },
    { id: 2, title: '20-30% — при подписании контракта', type: 'percent', value: 20 },
    { id: 3, title: '30% — рассрочка на период строительства', type: 'percent', value: 30 },
    { id: 4, title: '50% — оплата при передаче объекта',  type: 'percent', value: 50  },

            ],
   infrastructure: [
          { id: 1, title: 'Jomtien Beach', time: '' },
          { id: 2, title: 'Pattaya Floating Market', time: '' },
         { id: 3, title: 'Underwater World Pattaya', time: '' },
         { id: 4, title: 'Central Festival Pattaya', time: '' },
         { id: 7, title: 'Terminal 21 Pattaya', time: '' },
         { id: 8, title: 'Bangkok Hospital Pattaya', time: '' },


        ]
      },
                                                                   {
        id: 55,
        city: 'pattaya',
        new: true,
        name: 'The Panora Estuaria',
        priceDollars: '214 283$',
        priceTHB: 'THB  6 907 000',
        location: 'Джомтьен, Паттайя',
        coordinates: [100.9126511, 12.8241034],
        firstImg: '/img/objects/55/start.webp',
        bgImg: '/img/objects/55/bgImg.webp',
        bigImg: '/img/objects/55/bigImg.webp',
        genImg: '/img/objects/55/genplan.webp',
        description: 'The Panora Estuaria — это премиальный жилой комплекс на первой линии моря в районе Na Jomtien, Паттайя. Проект расположен рядом с пляжем Ban Amphur и сочетает уединённую атмосферу курортной жизни с удобным доступом к городской инфраструктуре. Комплекс разработан как luxury beachfront condominium с панорамными видами на Сиамский залив. Архитектура проекта ориентирована на максимальное использование природного окружения: из большинства апартаментов открываются виды на море, а сама территория включает зелёные зоны отдыха и курортную инфраструктуру. <br>The Panora Estuaria подходит как для собственного проживания у моря, так и для инвестиций благодаря востребованной локации и формату курортной недвижимости.',
        genDesc: 'The Panora Estuaria состоит из нескольких малоэтажных зданий высотой до 8 этажей, расположенных на благоустроенной территории рядом с морем. Архитектурная концепция проекта сочетает современный дизайн с элементами курортной архитектуры. Планировки апартаментов разработаны с акцентом на простор, естественное освещение и виды на море. В комплексе предусмотрены открытые террасы, зелёные зоны и пространства для отдыха, создающие атмосферу приватного курорта.',
        descriptionExterior: 'Генеральный план комплекса предусматривает функциональное зонирование территории. В центральной части расположен основной бассейн с зонами отдыха и солнечными террасами. Инфраструктура комплекса включает фитнес-центр, wellness-зоны, сауну и spa-пространства. Озеленённая территория объединяет прогулочные дорожки, лаунж-пространства и места для отдыха. На территории предусмотрены общественные зоны, а также подземная парковка и сервисные помещения.',
        specs: {
          readyDate: '2026',          // срок сдачи
          areaTotal: '32 м² - 282 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '1-3',                   // кол-во спален
          bathrooms: '1-3',
          developer: 'MIDA Assets / Silvan Property'
        },
         amenities: [
          'бассейн с зонами отдыха','панорамный бассейн', 'фитнес-центр','spa-комплекс','сауна и парная','джакузи', 'йога-зона', 'сад и прогулочные зоны', 'лаунж-пространства', 'коворкинг', 'подземная парковка'], 
        galleryExterior: [
          '/img/objects/55/exterior/obj1.webp',
          '/img/objects/55/exterior/obj2.webp',
          '/img/objects/55/exterior/obj3.webp',
          '/img/objects/55/exterior/obj4.webp',
          '/img/objects/55/exterior/obj5.webp',
          '/img/objects/55/exterior/obj6.webp',
          '/img/objects/55/exterior/obj7.webp',             
        ],
        galleryInterior: [
          '/img/objects/55/interior/obj1.webp',
          '/img/objects/55/interior/obj2.webp',
          '/img/objects/55/interior/obj3.webp',
           '/img/objects/55/interior/obj4.webp',
          '/img/objects/55/interior/obj5.webp',
          '/img/objects/55/interior/obj6.webp',
        ],
        units: [
     {
    id: '1',
    title: ' Cтудия',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 32, max: 33 },         // м²
    floor: { min: 2, max: 8 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
            {
    id: '2',
    title: '1 спальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 47, max: 53},         // м²
    floor: { min: 2, max: 8},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                        {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 93, max: 117},         // м²
    floor: { min: 2, max: 8},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                                                {
    id: '4',
    title: '3 спальни',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 153, max: 164},         // м²
    floor: { min: 2, max: 8},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                                                                 {
    id: '5',
    title: 'Penthouse / Duplex',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 153, max: 282},         // м²
    floor: { min: 2, max: 8},
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },  
  
],
           bookingConditions: [
    { id: 1, title: 'Депозит 100 000 THB ', type: 'amount',  },
    { id: 2, title: '20-30% — при подписании контракта', type: 'percent', value: 20 },
    { id: 3, title: 'Рассрочка на период строительства: около 30–50%',  },

            ],
   infrastructure: [
          { id: 1, title: 'Ban Amphur Beach', time: '' },
          { id: 2, title: 'яхт-клуб Ocean Marina', time: '' },
         { id: 3, title: 'Nong Nooch Tropical Garden', time: '' },
         { id: 4, title: 'международные школы и гольф-клубы', time: '' },
         { id: 7, title: 'Pattaya Floating Market', time: '' },
         { id: 8, title: 'Central Festival Pattaya', time: '' },
          { id: 9, title: 'Bangkok Hospital Pattaya', time: '' },

        ]
      },
                                                                {
        id: 54,
        city: 'pattaya',
        new: true,
        name: 'Zenith Pattaya',
        priceDollars: '63 235$',
        priceTHB: 'THB  1 990 000',
        location: 'Пратумнак, Паттайя',
        coordinates: [100.898734, 12.873842],
        firstImg: '/img/objects/54/start.webp',
        bgImg: '/img/objects/54/bgImg.webp',
        bigImg: '/img/objects/54/bigImg.webp',
        genImg: '/img/objects/54/genplan.webp',
        description: 'Zenith Pattaya — жилой комплекс в районе Нонгпруе, ориентированный на формат комфортного городского проживания с элементами курортной инфраструктуры. Проект реализуется как малоэтажная резиденция с приватной территорией и развитой внутренней средой.<br>Комплекс рассчитан на покупателя, который ищет баланс между стоимостью входа, инфраструктурой и ликвидностью. Благодаря компактным форматам и доступному бюджету входа проект подходит для инвестиционной покупки с расчётом на долгосрочную и краткосрочную аренду.',
        genDesc: 'Генеральный план построен по принципу внутреннего двора. Жилые корпуса размещены по периметру участка. В центре расположены бассейн и зоны отдыха, формирующие рекреационное ядро проекта. Парковочные и технические зоны вынесены в отдельную часть комплекса, что позволяет разделить транспортные и пешеходные потоки. Общественные пространства равномерно распределены между уровнями комплекса, обеспечивая удобный доступ резидентов ко всей инфраструктуре.',
        descriptionExterior: 'Проект выполнен в современной стилистике с акцентом на горизонтальные линии и лаконичные фасады. Комплекс состоит из нескольких корпусов средней этажности, формирующих внутреннее закрытое пространство. Архитектурное решение ориентировано на приватность и визуальное разделение жилых блоков. Центральная часть территории отведена под рекреационную зону с бассейном и озеленением. Особенностью проекта является интеграция wellness-инфраструктуры (онсэн и SPA-зоны), что усиливает позиционирование комплекса как жилого формата с элементами курорта.',
        specs: {
          readyDate: 'Q4 2028',          // срок сдачи
          areaTotal: '30 м² - 74 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '1-2',                   // кол-во спален
          bathrooms: '1-2',
          developer: 'Strong Family Home Co., Ltd.'
        },
         amenities: [
          ' основной бассейн','детский бассейн', 'зоны джакузи','японский онсэн','сауна и парная','фитнес-центр', 'йога-пространство', 'зелёные сады', 'лаунж-зоны', 'коворкинг', 'подземная парковка'], 
        galleryExterior: [
          '/img/objects/54/exterior/obj1.webp',
          '/img/objects/54/exterior/obj2.webp',
          '/img/objects/54/exterior/obj3.webp',
          '/img/objects/54/exterior/obj4.webp',
          '/img/objects/54/exterior/obj5.webp',
          '/img/objects/54/exterior/obj6.webp',
          '/img/objects/54/exterior/obj7.webp',
          '/img/objects/54/exterior/obj8.webp',
          '/img/objects/54/exterior/obj9.webp',
          '/img/objects/54/exterior/obj10.webp',
          '/img/objects/54/exterior/obj11.webp',
          '/img/objects/54/exterior/obj12.webp',
          '/img/objects/54/exterior/obj13.webp',
             
        ],
        galleryInterior: [
          // '/img/objects/53/interior/obj1.webp',
          // '/img/objects/53/interior/obj2.webp',
          // '/img/objects/53/interior/obj3.webp',
        ],
        units: [
     {
    id: '1',
    title: ' Cтудия',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 30, max: 32 },         // м²
    floor: { min: 2, max: 7 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
            {
    id: '2',
    title: '1 спальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 34, max: 45},         // м²
    floor: { min: 2, max: 50 },
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                   
  
],
           bookingConditions: [
    { id: 1, title: 'Депозит 100 000 THB ', type: 'amount',  },
    { id: 2, title: '20% — при подписании контракта', type: 'percent', value: 20 },
    { id: 3, title: '40% — поэтапные платежи в период строительства', type: 'percent', value: 40 },
    { id: 4, title: ' 40% — при передаче права собственности', type: 'percent', value: 40 },
            ],
   infrastructure: [
          { id: 1, title: 'Jomtien Beach', time: '' },
          { id: 2, title: 'Pattaya Beach', time: '' },
          { id: 3, title: 'Central Festival Pattaya', time: '' },
        { id: 7, title: 'Terminal 21 Pattaya', time: '' },
         { id: 8, title: 'Bangkok Hospital Pattaya', time: '' },
               { id: 9, title: 'Walking Street', time: '' },

        ]
      },
                                                                 {
        id: 53,
        city: 'pattaya',
        new: true,
        name: 'Copacabana Coral Reef',
        priceDollars: '75 950$',
        priceTHB: 'THB  2 390 000',
        location: 'Джомтьен, Паттайя',
        coordinates: [100.898734, 12.873842],
        firstImg: '/img/objects/53/start.webp',
        bgImg: '/img/objects/53/bgImg.webp',
        bigImg: '/img/objects/53/bigImg.webp',
        genImg: '/img/objects/53/genplan.webp',
        description: 'Copacabana Coral Reef — новый высотный жилой комплекс в районе Джомтьен, ориентированный на формат современного курортного проживания. Проект сочетает панорамную архитектуру, расширенную внутреннюю инфраструктуру и локацию в пешей доступности от пляжа Джомтьен.<br>Комплекс позиционируется в сегменте resort-condominium: значительная часть общественных пространств вынесена на верхние уровни с видами на море и город. Проект подходит как для собственного проживания, так и для инвестиционной стратегии с акцентом на краткосрочную и среднесрочную аренду.',
        genDesc: 'Генеральная концепция проекта построена по вертикальному принципу.Нижние уровни занимают лобби, коммерческие помещения и парковка. Средняя часть здания отведена под жилые этажи с повторяющейся планировочной сеткой. Верхние уровни формируют общественное ядро комплекса — здесь размещены бассейны, лаунж-зоны и панорамные пространства с видами на море. Такое распределение позволяет разделить приватные и общественные зоны, обеспечивая комфортное проживание.',
        descriptionExterior: 'Проект выполнен в формате современной высотной башни с панорамным остеклением. Архитектурная концепция ориентирована на максимальное раскрытие видов на Сиамский залив. Вертикальные линии фасада подчёркивают статус проекта и визуально выделяют его на фоне застройки района. Входная группа оформлена в современном стиле с увеличенной высотой потолков. Общественные зоны распределены по уровням здания, что формирует курортную атмосферу внутри комплекса.',
        specs: {
          readyDate: '2027',          // срок сдачи
          areaTotal: '28 м² - 80 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '1-2',                   // кол-во спален
          bathrooms: '1-2',
          developer: 'Copacabana Group'
        },
         amenities: [
          'панорамный инфинити-бассейн','sky pool на верхних этажах', 'фитнес-центр','spa-зона','сауна','лаунж-пространства', 'коворкинг', 'детская зона', 'ресторан и коммерческие помещения',], 
        galleryExterior: [
          '/img/objects/53/exterior/obj1.webp',
          '/img/objects/53/exterior/obj2.webp',
          '/img/objects/53/exterior/obj3.webp',
          '/img/objects/53/exterior/obj4.webp',
          '/img/objects/53/exterior/obj5.webp',
             
        ],
        galleryInterior: [
          // '/img/objects/53/interior/obj1.webp',
          // '/img/objects/53/interior/obj2.webp',
          // '/img/objects/53/interior/obj3.webp',
        ],
        units: [
     {
    id: '1',
    title: ' Cтудия',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 28, max: 30 },         // м²
    floor: { min: 2, max: 50 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
            {
    id: '2',
    title: '1 спальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 34, max: 45},         // м²
    floor: { min: 2, max: 50 },
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                     {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 55, max: 80},         // м²
    floor: { min: 2, max: 50 },
    // priceTHB: 49000000,
    // cover: '/img/objects/23/plans/unit3.webp'
          },
  
],
           bookingConditions: [
    { id: 1, title: 'Депозит 100 000 THB ', type: 'amount',  },
    { id: 2, title: '30% — при подписании контракта', type: 'percent', value: 30 },
    { id: 3, title: '40% — поэтапные платежи в период строительства', type: 'percent', value: 40 },
    { id: 4, title: ' 30% — при передаче права собственности', type: 'percent', value: 30 },
            ],
   infrastructure: [
          { id: 1, title: 'Jomtien Beach', time: '' },
          { id: 2, title: 'Dongtan Beach', time: '' },
          { id: 3, title: 'Pattaya Park Tower', time: '' },
          { id: 4, title: 'Jomtien Night Market', time: '' },
          { id: 5, title: 'Underwater World Pattaya', time: '' },
         { id: 6, title: 'Central Festival Pattaya', time: '' },
        { id: 7, title: 'Terminal 21 Pattaya', time: '' },
         { id: 8, title: 'Bangkok Hospital Pattaya', time: '' },
            

        ]
      },
                                                             {
        id: 52,
        city: 'pattaya',
        new: true,
        name: 'Pristine Park 3',
        priceDollars: '74 675$',
        priceTHB: 'THB  2 350 000',
        location: 'Джомтьен, Паттайя',
        coordinates: [100.887739, 12.900973],
        firstImg: '/img/objects/52/start.png',
        bgImg: '/img/objects/52/bgImg.webp',
        bigImg: '/img/objects/52/bigImg.webp',
        genImg: '/img/objects/52/genplan.webp',
        description: 'Pristine Park 3 — жилой кондоминиум в районе Джомтьен, Паттайя, разработанный девелопером Dusit Group / Dusit Thani. Комплекс представляет собой среднеэтажное жилое здание со сбалансированным набором жилых форматов и развитой внутренней инфраструктурой для повседневной жизни и отдыха в курортной среде. <br>Проект ориентирован на собственное проживание и инвестиционную покупку (аренда), благодаря удачному расположению рядом с пляжем Джомтьен и близости к ключевым объектам инфраструктуры Паттайи.',
        genDesc: 'Генеральный план комплекса распределяет пространства по функциональным зонам: 1. центральная зона отведена под бассейн и прилегающие к нему террасы для отдыха; 2. корпуса размещены вокруг центральной площадки, обеспечивая удобный доступ ко всем сервисам; 3. парковка и вспомогательные технические зоны организованы так, чтобы минимизировать пересечение транспортных и пешеходных потоков; 4. озеленённые пространства и дорожки образуют рекреационные коридоры по всему участку.',
        descriptionExterior: 'Комплекс выполнен в современном стиле с акцентом на функциональность и визуальную простоту. Фасадное решение предполагает нейтральную светлую палитру с большими оконными проёмами для естественного освещения помещений. Территория проекта благоустроена: предусмотрены прогулочные зоны с зелёными насаждениями, отдыхательные уголки и открытые пространства, обеспечивающие комфортное взаимодействие жильцов внутри комплекса.',
        specs: {
          readyDate: '2024-2025',          // срок сдачи
          areaTotal: '28 м² - 80 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '1-2',                   // кол-во спален
          bathrooms: '1-2',
          developer: 'Dusit Group'
        },
         amenities: [
          'открытый бассейн','фитнес-центр', 'зона отдыха','ресепшн','парковка','круглосуточная охрана', 'ландшафтные озеленённые зоны', 'общие лаунж-пространства', ], 
        galleryExterior: [
          '/img/objects/52/exterior/obj1.webp',
          '/img/objects/52/exterior/obj2.webp',
          '/img/objects/52/exterior/obj3.webp',
          '/img/objects/52/exterior/obj4.webp',
          '/img/objects/52/exterior/obj5.webp',
          '/img/objects/52/exterior/obj6.webp',
          '/img/objects/52/exterior/obj7.webp',
          '/img/objects/52/exterior/obj8.webp',
          '/img/objects/52/exterior/obj9.webp',
            
           

        
        ],
        galleryInterior: [
          '/img/objects/52/interior/obj1.webp',
          '/img/objects/52/interior/obj2.webp',
          '/img/objects/52/interior/obj3.webp',
        ],
        units: [
     {
    id: '1',
    title: ' Cтудия',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 28, max: 35 },         // м²
    floor: { min: 2, max: 8 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
            {
    id: '2',
    title: '1 спальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 36, max: 55},         // м²
    floor: { min: 2, max: 8 },
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                     {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 56, max: 80},         // м²
    floor: { min: 2, max: 8 },
    // priceTHB: 49000000,
    // cover: '/img/objects/23/plans/unit3.webp'
          },
  
],
           bookingConditions: [
    { id: 1, title: 'Депозит 100 000 THB ', type: 'amount',  },
    { id: 2, title: '30% — при подписании контракта', type: 'percent', value: 30 },
    { id: 3, title: '40% — поэтапные платежи в период строительства', type: 'percent', value: 40 },
    { id: 4, title: ' 30% — при передаче права собственности', type: 'percent', value: 30 },
            ],
   infrastructure: [
          { id: 1, title: 'Jomtien Beach', time: '' },
          { id: 2, title: 'Dongtan Beach', time: '' },
          { id: 3, title: 'Pattaya Park Tower', time: '' },
          { id: 4, title: 'Jomtien Night Market', time: '' },
          { id: 5, title: 'Underwater World Pattaya', time: '' },
         { id: 6, title: 'Central Festival Pattaya', time: '' },
        { id: 7, title: 'Terminal 21 Pattaya', time: '' },
         { id: 8, title: 'Bangkok Hospital Pattaya', time: '' },
            

        ]
      },
                                                          {
        id: 51,
        city: 'pattaya',
        new: true,
        name: 'The Riviera Beverly Hills Residences',
        priceDollars: '74 675$',
        priceTHB: 'THB  2 350 000',
        location: 'Джомтьен, Паттайя',
        coordinates: [100.864181, 12.906519],
        firstImg: '/img/objects/51/start.webp',
        bgImg: '/img/objects/51/bgImg.webp',
        bigImg: '/img/objects/51/bigImg.webp',
        genImg: '/img/objects/51/genplan.webp',
        description: 'The Riviera Beverly Hills Residences — жилой комплекс премиального класса в районе Джомтьен, реализуемый девелопером The Riviera Group. Проект выполнен в формате трёх среднеэтажных зданий, объединённых общей благоустроенной территорией с курортной инфраструктурой. <br>Концепция ориентирована на сочетание приватности и насыщенной внутренней среды: закрытая территория, продуманная система общественных пространств и разнообразие планировок позволяют использовать объект как для постоянного проживания, так и для инвестиционной аренды. Архитектурный стиль выдержан в современной интерпретации luxury-сегмента с акцентом на свет, пропорции и отделочные материалы.',
        genDesc: 'Генеральный план построен по принципу внутреннего курортного ядра. Центральную часть занимает основной бассейн с прилегающими террасами и зонами отдыха. Корпуса расположены по периметру участка, формируя приватное пространство внутри. <br>Общественные функции распределены по уровням зданий: часть инфраструктуры находится на первом уровне, дополнительные рекреационные зоны вынесены на крышу. Парковка и технические помещения интегрированы таким образом, чтобы минимизировать пересечение транспортных и пешеходных потоков. Планировка территории обеспечивает визуальную изоляцию от внешней застройки и формирует закрытую жилую среду.',
        descriptionExterior: 'Проект состоит из трёх восьмиэтажных корпусов, расположенных на участке около 5 rai. Здания размещены таким образом, чтобы формировать внутренний приватный двор с бассейнами и рекреационными зонами. Фасады выполнены в современном стиле с использованием стеклянных панелей, балконных ограждений из прозрачных материалов и светлой цветовой палитры. Архитектура подчёркивает горизонтальные линии, что визуально снижает плотность застройки и усиливает ощущение пространства.',
        specs: {
          readyDate: '2028',          // срок сдачи
          areaTotal: '27 м² - 130+ м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '1-3',                   // кол-во спален
          bathrooms: '1-3',
          developer: 'The Riviera Group'
        },
         amenities: [
          'несколько бассейнов с зонами отдыха','основной бассейн с лаунж-зонами', 'детский бассейн','sky lounge',' фитнес-центр с видом на море','сауна', 'онсен', 'йога-пространство', 'коворкинг-зона', 'конференц-комната', 'детская игровая комната'], 
        galleryExterior: [
          '/img/objects/51/exterior/obj1.webp',
          '/img/objects/51/exterior/obj2.webp',
          '/img/objects/51/exterior/obj3.webp',
          '/img/objects/51/exterior/obj4.webp',
          '/img/objects/51/exterior/obj5.webp',
          '/img/objects/51/exterior/obj6.webp',

        
        ],
        galleryInterior: [
          // '/img/objects/50/interior/obj4.webp',
          // '/img/objects/50/interior/obj5.webp',
          // '/img/objects/50/interior/obj6.webp',
        ],
        units: [
     {
    id: '1',
    title: ' Cтудия',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 27, max: 30 },         // м²
    floor: { min: 2, max: 8 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
            {
    id: '2',
    title: '1 спальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 31, max: 45},         // м²
    floor: { min: 2, max: 8 },
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                     {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 55, max: 90},         // м²
    floor: { min: 2, max: 8 },
    // priceTHB: 49000000,
    // cover: '/img/objects/23/plans/unit3.webp'
          },
                             {
    id: '4',
    title: '3 спальни',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 110, max: 135},         // м²
    floor: { min: 6, max: 8 },
    // priceTHB: 49000000,
    // cover: '/img/objects/23/plans/unit3.webp'
          },
],
           bookingConditions: [
    { id: 1, title: 'Депозит 100 000 THB ', type: 'amount',  },
    { id: 2, title: '20% — при подписании контракта', type: 'percent', value: 20 },
    { id: 3, title: '30% — рассрочка на период строительства', type: 'percent', value: 30 },
    { id: 4, title: '50% — при передаче объекта', type: 'percent', value: 50 },
            ],
   infrastructure: [
          { id: 1, title: 'Jomtien Beach', time: '' },
          { id: 2, title: 'Dongtan Beach', time: '' },
          { id: 3, title: 'Pattaya Park Tower', time: '' },
          { id: 4, title: 'Jomtien Night Market', time: '' },
          { id: 5, title: 'Underwater World Pattaya', time: '' },
         { id: 6, title: 'Central Festival Pattaya', time: '' },
        { id: 7, title: 'Terminal 21 Pattaya', time: '' },
            

        ]
      },
                                                      {
        id: 50,
        city: 'pattaya',
        new: true,
        name: 'Sea Spire Jomtien',
        priceDollars: '133 000$',
        priceTHB: 'THB  4 200 000 ',
        location: 'Джомтьен, Паттайя',
        coordinates: [100.872635, 12.893149],
        firstImg: '/img/objects/50/start.webp',
        bgImg: '/img/objects/50/bgImg.webp',
        bigImg: '/img/objects/50/bigImg.webp',
        genImg: '/img/objects/50/genplan.webp',
        description: 'Sea Spire Jomtien — высотный жилой комплекс премиального уровня, расположенный на первой линии пляжа Джомтьен в Паттайе. Проект реализуется в формате единой 49-этажной башни с панорамными видами на Сиамский залив и прямым выходом к морю. <br>Комплекс ориентирован на покупателя, рассматривающего как собственное проживание у моря, так и инвестиционную стратегию с перспективой аренды. Формат проекта предполагает высокую плотность сервисной инфраструктуры внутри здания при сохранении приватности жилых этажей.',
        genDesc: 'Генеральная концепция предполагает чёткое вертикальное зонирование. Нижние уровни занимают парковка, технические помещения и часть сервисной инфраструктуры. Средняя часть здания отведена под жилые этажи с повторяющимися планировочными решениями. Верхние этажи формируют общественное ядро комплекса — здесь размещены панорамный бассейн, фитнес-зона и лаунж-пространства. Такое распределение позволяет отделить приватную жилую часть от активных зон отдыха. Лобби расположено на уровне входа и служит связующим пространством между жилой и сервисной частями комплекса. Потоки резидентов и гостей разделены.',
        descriptionExterior: 'Sea Spire Jomtien выполнен в современном высотном стиле с акцентом на стеклянные фасады и максимальную открытость к морю. Архитектура ориентирована на создание панорамных видов практически из каждой резиденции. <br>Фасад здания сочетает вертикальные линии и прозрачные элементы, что визуально облегчает массив башни. В проекте предусмотрены просторные входные группы, высокие потолки в общественных зонах и современные лифтовые холлы.',
        specs: {
          readyDate: '2028',          // срок сдачи
          areaTotal: '29 м² - 77 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '1-2',                   // кол-во спален
          bathrooms: '1-2',
          developer: 'Dusit Group'
        },
         amenities: [
          'панорамный инфинити-бассейн на крыше','основной бассейн с лаунж-зонами', 'детский бассейн','sky lounge',' фитнес-центр с видом на море','сауна', 'онсен', 'йога-пространство', 'коворкинг-зона', 'конференц-комната', 'детская игровая комната'], 
        galleryExterior: [
          '/img/objects/50/exterior/obj1.webp',
          '/img/objects/50/exterior/obj2.webp',
          '/img/objects/50/exterior/obj3.webp',
          '/img/objects/50/exterior/obj4.webp',
          '/img/objects/50/exterior/obj5.webp',
          '/img/objects/50/exterior/obj6.webp',
          '/img/objects/50/exterior/obj7.webp',
        
        ],
        galleryInterior: [
          '/img/objects/50/interior/obj4.webp',
          '/img/objects/50/interior/obj5.webp',
          '/img/objects/50/interior/obj6.webp',
        ],
        units: [
     {
    id: '1',
    title: ' Cтудия',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 29, max: 31 },         // м²
    floor: { min: 5, max: 45 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
            {
    id: '2',
    title: '1 спальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 37, max: 54 },         // м²
    floor: { min: 5, max: 45 },
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                     {
    id: '2',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 66, max: 77},         // м²
    floor: { min: 5, max: 45 },
    // priceTHB: 49000000,
    // cover: '/img/objects/23/plans/unit3.webp'
          },
],
           bookingConditions: [
    { id: 1, title: 'Депозит 100 000 THB ', type: 'amount',  },
    { id: 2, title: '20% — при подписании контракта', type: 'percent', value: 20 },
    { id: 3, title: '30% — рассрочка на период строительства', type: 'percent', value: 30 },
    { id: 4, title: '50% — при передаче объекта', type: 'percent', value: 50 },
            ],
   infrastructure: [
          { id: 1, title: 'Jomtien Beach', time: '' },
          { id: 2, title: 'Dongtan Beach', time: '' },
          { id: 3, title: 'Pattaya Park Tower', time: '' },
          { id: 4, title: 'Jomtien Night Market', time: '' },
          { id: 5, title: 'Underwater World Pattaya', time: '' },
         { id: 6, title: 'Central Festival Pattaya', time: '' },
        { id: 7, title: 'Terminal 21 Pattaya', time: '' },
            

        ]
      },
                                                  {
        id: 49,
        city: 'pattaya',
        new: true,
        name: 'Aquarous jomtien pattaya',
        priceDollars: '142 122$',
        priceTHB: 'THB 5 020 000',
        location: 'Джомтьен, Паттайя',
        coordinates: [100.882347, 12.888814],
        firstImg: '/img/objects/49/start.webp',
        bgImg: '/img/objects/49/bgImg.webp',
        bigImg: '/img/objects/49/bigImg.webp',
        genImg: '/img/objects/49/genplan.webp',
        description: 'Aquarous Jomtien Pattaya — современный высотный жилой комплекс в 500 метрах от пляжа Джомтьен. Проект реализуется девелопером AssetWise и представляет формат resort residence с полноценной внутренней инфраструктурой и панорамными видами на Сиамский залив. <br>Комплекс состоит из двух башен высотой 44 и 47 этажей и включает 606 апартаментов различных форматов. Архитектурная концепция вдохновлена динамикой воды и песчаных линий побережья, что отражается в плавных формах фасадов и организации общественных пространств. Около 85% резиденций ориентированы в сторону моря.',
        genDesc: 'Генеральный план комплекса предусматривает размещение двух башен на общей благоустроенной территории с распределением инфраструктуры по уровням. На 3-м этаже расположен Aqua Club — центральная зона водной инфраструктуры с бассейнами и детским пространством. На 43–44 этажах размещён Cloud Club с панорамным бассейном-инфинити, фитнес-зоной и лаунж-пространствами.',
        descriptionExterior: 'Aquarous спроектирован как вертикальный жилой комплекс с многоуровневым зонированием инфраструктуры. Пространства распределены по этажам таким образом, чтобы разделить активные зоны отдыха и приватные жилые блоки. Интерьеры апартаментов выполнены в современном стиле. Квартиры передаются с полной меблировкой, встроенной техникой, отделкой стен, шторами и готовыми санузлами. Планировки ориентированы на функциональность и эффективное использование пространства.',
        specs: {
          readyDate: 'QQ4 2027',          // срок сдачи
          areaTotal: '34,7 м² - 315,9 м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '3-4',                   // кол-во спален
          bathrooms: '3-4',
          developer: 'AssetWise'
        },
         amenities: [
          'Aqua Club с тремя бассейнами','Cloud Club на 43–44 этажах', 'панорамный бассейн на крыше','фитнес-центр',' зона для йоги','зал для бокса', 'Bike simulator', 'японский онсен', 'сауна и парная', 'большой детский клуб', 'игровая зона'], 
        galleryExterior: [
          '/img/objects/49/exterior/obj1.webp',
          '/img/objects/49/exterior/obj2.webp',
          '/img/objects/49/exterior/obj3.webp',
          '/img/objects/49/exterior/obj4.webp',
          '/img/objects/49/exterior/obj5.webp',
          '/img/objects/49/exterior/obj6.webp',
          '/img/objects/49/exterior/obj7.webp',
        
        ],
        galleryInterior: [
          // '/img/objects/48/interior/obj3.webp',
          // '/img/objects/48/interior/obj4.webp',
          // '/img/objects/48/interior/obj3.webp',
        ],
        units: [
     {
    id: '1',
    title: '1 спальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min:34, max: 76 },         // м²
    floor: { min: 1, max: 1 },
    // priceTHB: 33000000,
    // cover: '/img/objects/23/plans/unit1.webp'
          },
            {
    id: '2',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 79, max: 141 },         // м²
    floor: { min: 1, max: 1 },
    // priceTHB: 38000000,
    // cover: '/img/objects/23/plans/unit2.webp'
          },
                     {
    id: '4',
    title: '4 спальни',
    bedrooms: 4,
    bathrooms: 4,
    area: { min: 315, max: 315},         // м²
    floor: { min: 1, max: 1 },
    // priceTHB: 49000000,
    // cover: '/img/objects/23/plans/unit3.webp'
          },
],
           bookingConditions: [
    { id: 1, title: 'Депозит от 100 000 - 300 000', type: 'amount',  },
    { id: 2, title: '30% — при подписании контракта (в течение 15 дней)', type: 'percent', value: 30 },
    { id: 3, title: '50% — рассрочка до окончания строительства (5 платежей по 10%)', type: 'percent', value: 50 },
    { id: 4, title: '20% — при получении ключей', type: 'percent', value: 20 },
    { id: 5, title: 'Амортизационный фонд — 500 THB / м² (разовый платёж)', },
    { id: 6, title: 'Обслуживание — 67 THB / м² в месяц', },
    { id: 7, title: 'Регистрация в Земельном департаменте — 1% от стоимости', type: 'percent', value: 1 }
            ],
   infrastructure: [
          { id: 1, title: 'Jomtien Beach', time: '' },
          { id: 2, title: 'Jomtien Night Market', time: '' },
          { id: 3, title: 'Pattaya Floating Market', time: '' },
          { id: 4, title: 'Underwater World Pattaya', time: '' },
          { id: 5, title: 'Terminal 21 Pattaya', time: '' },
         { id: 6, title: 'Central Festival Pattaya', time: '' },
        { id: 7, title: 'Bangkok Hospital Pattaya', time: '' },
            

        ]
      },
                                              {
        id: 48,
        city: 'phuket',
        new: true,
        name: 'Botanica Four Seasons ',
        priceDollars: '636 000$',
        priceTHB: 'THB 20 593 680',
        location: 'Пхукет, ТхаЛанг,',
        coordinates: [98.319803, 8.046106],
        firstImg: '/img/objects/48/start.png',
        bgImg: '/img/objects/48/bgImg.webp',
        bigImg: '/img/objects/48/bigImg.webp',
        genImg: '/img/objects/48/genplan.webp',
        description: 'Botanica Four Seasons — масштабный закрытый вилловый комплекс премиального уровня, расположенный в районе Тхеп Красаттри, Таланг, на севере Пхукета. Проект реализован девелопером Botanica Luxury Phuket и объединяет концепцию приватной резиденции, тропической среды и архитектурной вариативности. Общая территория комплекса превышает 154 000 кв.м и включает 174 виллы, распределённые по тематическим зонам, вдохновлённым временами года.',
        genDesc: 'Проект реализован как низкоплотный жилой кластер с разделением на тематические зоны: Spring, Summer и Autumn. Каждая зона функционирует как самостоятельный жилой сектор с собственной внутренней средой и пространственной логикой. Основу планировочной структуры формируют широкие внутренние дороги, пешеходные маршруты и зелёные буферные зоны. Значительная часть территории отведена под ландшафт, сады и приватные участки, что снижает визуальную плотность и усиливает ощущение уединения.',
        descriptionExterior: 'Проект ориентирован на низкую плотность застройки, просторные земельные участки и высокий уровень приватности. Виллы предлагаются в нескольких архитектурных и планировочных решениях — от дзен-минимализма до современного лофта и тропического балийского стиля. Все резиденции одноэтажные, с собственными бассейнами, садами и полной внутренней отделкой. Формат комплекса сочетает уединённую жилую среду с быстрым доступом к ключевым инфраструктурным объектам северной части острова и международному аэропорту Пхукета.',
        specs: {
          readyDate: '2026',          // срок сдачи
          areaTotal: '547м² - 1276м²',           // площадь (общая)
          propertyType: 'Вилла',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '3-4',                   // кол-во спален
          bathrooms: '3-4',
          developer: 'Botanica'
        },
         amenities: [
          'Клубная территория','Мини-гольф', 'Теннисный корт','Амфитеатр','Детская игровая площадка','Внутренние прогулочные зоны', 'лаунж-пространства для отдыха', 'Ландшафтные сады', 'Парковочные пространства'], 
        galleryExterior: [
          '/img/objects/48/exterior/obj1.webp',
          '/img/objects/48/exterior/obj2.webp',
          '/img/objects/48/exterior/obj3.webp',
          '/img/objects/48/exterior/obj4.webp',
        
        ],
        galleryInterior: [
          '/img/objects/48/interior/obj3.webp',
          '/img/objects/48/interior/obj4.webp',
          '/img/objects/48/interior/obj3.webp',
        ],
//         units: [
//      {
//     id: '1',
//     title: 'Вилла 3 спальни',
//     bedrooms: 3,
//     bathrooms: 3,
//     area: { min:473, max: 473 },         // м²
//     floor: { min: 1, max: 1 },
//     priceTHB: 33000000,
//     cover: '/img/objects/23/plans/unit1.webp'
//           },
//             {
//     id: '2',
//     title: 'Вилла 4 спальни',
//     bedrooms: 4,
//     bathrooms: 4,
//     area: { min:529, max:529 },         // м²
//     floor: { min: 1, max: 1 },
//     priceTHB: 38000000,
//     cover: '/img/objects/23/plans/unit2.webp'
//           },
//                 {
//     id: '3',
//     title: 'Вилла 4 спальни',
//     bedrooms: 4,
//     bathrooms: 4,
//     area: { min:709, max: 709 },         // м²
//     floor: { min: 1, max: 1 },
//     priceTHB: 49000000,
//     cover: '/img/objects/23/plans/unit3.webp'
//           },
// ],
           bookingConditions: [
    { id: 1, title: 'Резервация (депозит) — при бронировании юнита', type: 'amount', type: 'percent', value: 2  },
    { id: 2, title: '1-й взнос (подписание контракта / SPA) в течение 30 дней после брони', type: 'percent', value: 28 },
    { id: 3, title: '2-й взнос — после завершения фундамента', type: 'percent', value: 15 },
    { id: 4, title: '3-й взнос — после завершения бетонной конструкции', type: 'percent', value: 15 },
    { id: 5, title: '4-й взнос — после завершения стен и кровельной плитки', type: 'percent', value: 15 },
    { id: 6, title: '5-й взнос — после завершения укладки плитки/интерьера', type: 'percent', value: 15 },
    { id: 7, title: '6-й  - финальный взнос (handover / передача)', type: 'percent', value: 10 }
            ],
   infrastructure: [
          { id: 1, title: 'Пляж Nai Yang', time: '' },
          { id: 2, title: 'Пляж Naithon', time: '' },
          { id: 3, title: 'Пляж Layan', time: '' },
          { id: 4, title: 'Пляж Bang Tao', time: '' },
          { id: 5, title: 'Laguna Golf Club', time: '' },
          { id: 6, title: 'Blue Tree Lagoon \& Family Park', time: '' },
          { id: 7, title: 'Porto de Phuket', time: '' },
        ]
      },
                                          {
        id: 47,
        city: 'phuket',
        new: true,
        name: 'The Victory Villas',
        priceDollars: '1 374 112$',
        priceTHB: 'THB 44 614 000',
        location: 'Лаян, Пхукет',
        coordinates: [98.3496, 7.988222],
        firstImg: '/img/objects/47/start.png',
        bgImg: '/img/objects/47/bgImg.webp',
        bigImg: '/img/objects/47/bigImg.webp',
        genImg: '/img/objects/47/genplan.webp',
        description: 'The Victory Villas — премиальный комплекс частных резиденций, расположенный в районе Лаян, Пхукет, рядом с курортной зоной Laguna и западным побережьем острова. Проект формирует закрытое жилое сообщество вилл уровня luxury, ориентированное на приватность, архитектурную выразительность и высокий уровень комфорта проживания.',
        genDesc: 'Архитектурная концепция проекта выполнена в современном премиальном стиле с акцентом на пространство, свет и приватность. Виллы спроектированы с использованием открытых планировок, панорамного остекления и интеграции внутренних и внешних пространств, создавая ощущение курортного проживания в формате private residence. В комплексе представлены виллы с 3–4 спальнями (в отдельных конфигурациях до 5), каждая с собственной территорией и продуманной архитектурой.',
        descriptionExterior: 'Комплекс включает 40 двухэтажных вилл с частными бассейнами, создавая формат low-density luxury community. Локация сочетает спокойствие природной среды, престиж района и удобный доступ к ключевой инфраструктуре западного побережья, что делает проект востребованным как для проживания, так и для владения премиальной недвижимостью на Пхукете.',
        specs: {
          readyDate: '2026',          // срок сдачи
          areaTotal: '388м² - 600м²',           // площадь (общая)
          propertyType: 'Вилла',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '3-4',                   // кол-во спален
          bathrooms: '3-4',
          developer: 'Andaman Asset Solution '
        },
         amenities: [
          'Два приватных бассейна ','просторные лаунж-террасы', 'большие гостиные open-plan','ресторан и private dining','спа и wellness-зона','фитнес-центр', 'лаунж-пространства для отдыха', 'беговые и прогулочные дорожки', 'общий бассейн', 'прогулочная и беговая дорожка', 'закрытая территория'], 
        galleryExterior: [
          '/img/objects/47/exterior/obj2.webp',
          '/img/objects/47/exterior/obj3.webp',
          '/img/objects/47/exterior/obj4.webp',
          '/img/objects/47/exterior/obj5.webp',
          '/img/objects/47/exterior/obj6.webp',
          '/img/objects/47/exterior/obj7.webp',
                

        ],
        galleryInterior: [
          // '/img/objects/47/interior/obj5.webp',
          // '/img/objects/47/interior/obj6.webp',
          // '/img/objects/47/interior/obj7.webp',
          // '/img/objects/47/interior/obj8.webp',

        ],
//         units: [
//      {
//     id: '1',
//     title: 'Вилла 3 спальни',
//     bedrooms: 3,
//     bathrooms: 3,
//     area: { min:473, max: 473 },         // м²
//     floor: { min: 1, max: 1 },
//     priceTHB: 33000000,
//     cover: '/img/objects/23/plans/unit1.webp'
//           },
//             {
//     id: '2',
//     title: 'Вилла 4 спальни',
//     bedrooms: 4,
//     bathrooms: 4,
//     area: { min:529, max:529 },         // м²
//     floor: { min: 1, max: 1 },
//     priceTHB: 38000000,
//     cover: '/img/objects/23/plans/unit2.webp'
//           },
//                 {
//     id: '3',
//     title: 'Вилла 4 спальни',
//     bedrooms: 4,
//     bathrooms: 4,
//     area: { min:709, max: 709 },         // м²
//     floor: { min: 1, max: 1 },
//     priceTHB: 49000000,
//     cover: '/img/objects/23/plans/unit3.webp'
//           },
// ],
           bookingConditions: [
    { id: 1, title: 'Резервация (депозит) — при бронировании юнита', type: 'amount', type: 'percent', value: 2  },
    { id: 2, title: '1-й взнос (подписание контракта / SPA) в течение 30 дней после брони', type: 'percent', value: 28 },
    { id: 3, title: '2-й взнос — после завершения фундамента', type: 'percent', value: 15 },
    { id: 4, title: '3-й взнос — после завершения бетонной конструкции', type: 'percent', value: 15 },
    { id: 5, title: '4-й взнос — после завершения стен и кровельной плитки', type: 'percent', value: 15 },
    { id: 6, title: '5-й взнос — после завершения укладки плитки/интерьера', type: 'percent', value: 15 },
    { id: 7, title: '6-й  - финальный взнос (handover / передача)', type: 'percent', value: 10 }
            ],
   infrastructure: [
          { id: 1, title: 'Layan Beach', time: '' },
          { id: 2, title: 'Bang Tao Beach', time: '' },
          { id: 3, title: 'Laguna Phuket', time: '' },
          { id: 4, title: 'Laguna Golf Phuket', time: '' },
          { id: 5, title: 'Boat Avenue', time: '' },
          { id: 6, title: 'Porto de Phuket', time: '' },
          { id: 7, title: 'Robinson Lifestyle Thalang', time: '' },
        ]
      },
                                      {
        id: 46,
        city: 'phuket',
        new: true,
        name: 'Wallaya Hill',
        priceDollars: '1 174 920$',
        priceTHB: 'THB 38 043 911',
        location: 'Пхукет, Камала',
        coordinates: [98.303056, 8.014803],
        firstImg: '/img/objects/46/start.webp',
        bgImg: '/img/objects/46/bgImg.webp',
        bigImg: '/img/objects/46/bigImg.webp',
        genImg: '/img/objects/46/genplan.webp',
        description: 'Камерный проект современных вилл с частными бассейнами, расположенный в холмистой части Камалы, район Кату, Пхукет. Комплекс разработан девелопером Wallaya Villas и ориентирован на приватное проживание в спокойной природной среде с удобным доступом к инфраструктуре западного побережья. Завершение строительства запланировано на декабрь 2026 года. Проект относится к формату low-density residential и предлагает ограниченное количество резиденций, создавая атмосферу уединения, приватности и спокойной жизни среди зелёных холмов Камалы.',
        genDesc: 'Генеральный план предусматривает размещение вилл на отдельных участках внутри приватного жилого комплекса. Низкая плотность застройки обеспечивает максимальную приватность каждой резиденции и отсутствие визуального давления соседних построек. Внутренние подъездные пути минимизируют транзитное движение, сохраняя тихую и комфортную среду проживания. Ландшафтная интеграция с природным рельефом формирует камерный формат проекта.',
        descriptionExterior: 'Формат комплекса — приватное сообщество вилл с ограниченным количеством резиденций. Архитектура проекта выполнена в современном стиле с использованием натуральных текстур, спокойной цветовой палитры и элементов тропического дизайна. Виллы спроектированы с акцентом на естественное освещение, вентиляцию и плавную связь внутренних пространств с внешними зонами отдыха. Средняя площадь виллы составляет около 370–600 м². Планировки предусматривают функциональное зонирование и комфортное проживание.',
        specs: {
          readyDate: '2026',          // срок сдачи
          areaTotal: '360м² - 600м²',           // площадь (общая)
          propertyType: 'Вилла',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '4-5',                   // кол-во спален
          bathrooms: '5-8',
          developer: ' T.H. Group Phuket'
        },
         amenities: [
          'Крытая парковка','круглосуточная охрана', 'видеонаблюдение','сад и озеленённые зоны','сервис управления','фитнес-центр', 'общественные зелёные зоны и парк', 'беговые и прогулочные дорожки', 'общая парковка', 'управляющая компания и сервис обслуживания'], 
        galleryExterior: [
          '/img/objects/46/exterior/obj1.webp',
          '/img/objects/46/exterior/obj2.webp',
          '/img/objects/46/exterior/obj3.webp',
          '/img/objects/46/exterior/obj4.webp',
          '/img/objects/46/exterior/obj5.webp',

        ],
        galleryInterior: [
          '/img/objects/46/interior/obj5.webp',
          '/img/objects/46/interior/obj6.webp',
          '/img/objects/46/interior/obj7.webp',
          '/img/objects/46/interior/obj8.webp',

        ],
//         units: [
//      {
//     id: '1',
//     title: 'Вилла 3 спальни',
//     bedrooms: 3,
//     bathrooms: 3,
//     area: { min:473, max: 473 },         // м²
//     floor: { min: 1, max: 1 },
//     priceTHB: 33000000,
//     cover: '/img/objects/23/plans/unit1.webp'
//           },
//             {
//     id: '2',
//     title: 'Вилла 4 спальни',
//     bedrooms: 4,
//     bathrooms: 4,
//     area: { min:529, max:529 },         // м²
//     floor: { min: 1, max: 1 },
//     priceTHB: 38000000,
//     cover: '/img/objects/23/plans/unit2.webp'
//           },
//                 {
//     id: '3',
//     title: 'Вилла 4 спальни',
//     bedrooms: 4,
//     bathrooms: 4,
//     area: { min:709, max: 709 },         // м²
//     floor: { min: 1, max: 1 },
//     priceTHB: 49000000,
//     cover: '/img/objects/23/plans/unit3.webp'
//           },
// ],
           bookingConditions: [
    { id: 1, title: 'Резервация (депозит) — при бронировании юнита', type: 'amount', type: 'percent', value: 2  },
    { id: 2, title: '1-й взнос (подписание контракта / SPA) в течение 30 дней после брони', type: 'percent', value: 28 },
    { id: 3, title: '2-й взнос — после завершения фундамента', type: 'percent', value: 15 },
    { id: 4, title: '3-й взнос — после завершения бетонной конструкции', type: 'percent', value: 15 },
    { id: 5, title: '4-й взнос — после завершения стен и кровельной плитки', type: 'percent', value: 15 },
    { id: 6, title: '5-й взнос — после завершения укладки плитки/интерьера', type: 'percent', value: 15 },
    { id: 7, title: '6-й  - финальный взнос (handover / передача)', type: 'percent', value: 10 }
            ],
   infrastructure: [
          { id: 1, title: 'Kamala Beach', time: '' },
          { id: 2, title: 'Café del Mar', time: '' },
          { id: 3, title: 'Phuket Fantasea', time: '' },
          { id: 4, title: 'Patong Beach', time: '' },
          { id: 5, title: 'Blue Tree Phuket', time: '' },
          { id: 6, title: 'Boat Avenue', time: '' },
          { id: 7, title: 'Porto de Phuket', time: '' },
        ]
      },
                                  {
        id: 45,
        city: 'phuket',
        new: true,
        name: 'Botanica Grand Avenue',
        priceDollars: '1 374 305$',
        priceTHB: 'THB 44 500 000',
        location: 'Пхукет, Банг Тао',
        coordinates: [98.303056, 8.014803],
        firstImg: '/img/objects/45/start.webp',
        bgImg: '/img/objects/45/bgImg.webp',
        bigImg: '/img/objects/45/bigImg.webp',
        genImg: '/img/objects/45/genplan.webp',
        description: 'Botanica Grand Avenue — премиальный комплекс частных вилл, расположенный в районе Чернг Талай, в престижной зоне Laguna на западном побережье Пхукета. Проект разработан компанией Botanica Luxury Phuket и ориентирован на приватное проживание в окружении природы, рядом с курортной инфраструктурой, гольф-полями и одними из лучших пляжей острова. Локация сочетает уединённость, зелёные пейзажи и удобный доступ к ключевым объектам западного побережья. Формат комплекса — приватное сообщество вилл с низкой плотностью застройки и спокойной жилой средой.',
        genDesc: 'Генеральный план Botanica Grand Avenue предусматривает размещение вилл на отдельных участках внутри закрытого охраняемого комплекса. Планировка ориентирована на максимальную приватность каждой резиденции, визуальную открытость пространства и удобную навигацию внутри территории. Внутренние дороги обеспечивают доступ к виллам, при этом жилые зоны остаются изолированными от транзитного движения. Центральное озеро, парковые пространства и прогулочные маршруты создают упорядоченную и гармоничную среду проживания.',
        descriptionExterior: 'Комплекс включает 51 эксклюзивную виллу с частными бассейнами, просторными участками и архитектурой уровня luxury. Завершение строительства запланировано на сентябрь 2026 года. Проект формирует закрытое жилое сообщество с низкой плотностью застройки и спокойной атмосферой проживания.',
        specs: {
          readyDate: '2026',          // срок сдачи
          areaTotal: '850м² - 20000м²',           // площадь (общая)
          propertyType: 'Вилла',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: '4-5',                   // кол-во спален
          bathrooms: '5-8',
          developer: ' T.H. Group Phuket'
        },
         amenities: [
          'Закрытая охраняемая территория','круглосуточная охрана', 'видеонаблюдение','клубный дом','кухня западного типа с островом','фитнес-центр', 'общественные зелёные зоны и парк', 'беговые и прогулочные дорожки', 'общая парковка', 'управляющая компания и сервис обслуживания'], 
        galleryExterior: [
          '/img/objects/45/exterior/obj1.webp',
          '/img/objects/45/exterior/obj2.webp',
          '/img/objects/45/exterior/obj3.webp',
          '/img/objects/45/exterior/obj4.webp',
          '/img/objects/45/exterior/obj5.webp',
          '/img/objects/45/exterior/obj6.webp',
          '/img/objects/45/exterior/obj7.webp',
          '/img/objects/45/exterior/obj8.webp',
        ],
        galleryInterior: [
          '/img/objects/45/interior/obj1.webp',
          '/img/objects/45/interior/obj2.webp',
          '/img/objects/45/interior/obj3.webp',
          '/img/objects/45/interior/obj4.webp',
          '/img/objects/45/interior/obj5.webp',
        ],
//         units: [
//      {
//     id: '1',
//     title: 'Вилла 3 спальни',
//     bedrooms: 3,
//     bathrooms: 3,
//     area: { min:473, max: 473 },         // м²
//     floor: { min: 1, max: 1 },
//     priceTHB: 33000000,
//     cover: '/img/objects/23/plans/unit1.webp'
//           },
//             {
//     id: '2',
//     title: 'Вилла 4 спальни',
//     bedrooms: 4,
//     bathrooms: 4,
//     area: { min:529, max:529 },         // м²
//     floor: { min: 1, max: 1 },
//     priceTHB: 38000000,
//     cover: '/img/objects/23/plans/unit2.webp'
//           },
//                 {
//     id: '3',
//     title: 'Вилла 4 спальни',
//     bedrooms: 4,
//     bathrooms: 4,
//     area: { min:709, max: 709 },         // м²
//     floor: { min: 1, max: 1 },
//     priceTHB: 49000000,
//     cover: '/img/objects/23/plans/unit3.webp'
//           },
// ],
           bookingConditions: [
    { id: 1, title: 'Резервация (депозит) — при бронировании юнита', type: 'amount', type: 'percent', value: 2  },
    { id: 2, title: '1-й взнос (подписание контракта / SPA) в течение 30 дней после брони', type: 'percent', value: 28 },
    { id: 3, title: '2-й взнос — после завершения фундамента', type: 'percent', value: 15 },
    { id: 4, title: '3-й взнос — после завершения бетонной конструкции', type: 'percent', value: 15 },
    { id: 5, title: '4-й взнос — после завершения стен и кровельной плитки', type: 'percent', value: 15 },
          { id: 6, title: '5-й взнос — после завершения укладки плитки/интерьера', type: 'percent', value: 15 },
        { id: 7, title: '6-й  - финальный взнос (handover / передача)', type: 'percent', value: 10 }
            ],
   infrastructure: [
          { id: 1, title: 'Layan Beach', time: '' },
          { id: 2, title: 'Bang Tao Beach', time: '' },
          { id: 3, title: 'Laguna Phuket', time: '' },
          { id: 4, title: 'Laguna Golf Phuket', time: '' },
          { id: 5, title: 'Boat Avenue', time: '' },
          { id: 6, title: 'Porto de Phuket', time: '' },
          { id: 7, title: 'Blue Tree Phuket', time: '' },
        ]
      },
                              {
        id: 44,
        city: 'phuket',
        new: true,
        name: 'Ayana Soluna Luxury Villas',
        priceDollars: '831 439$',
        priceTHB: 'THB 26 922 000',
        location: 'Тхаланг, Пхукет',
        coordinates: [98.3450263, 7.9679484],
        firstImg: '/img/objects/44/start.webp',
        bgImg: '/img/objects/44/bgImg.webp',
        bigImg: '/img/objects/44/bigImg.webp',
        genImg: '/img/objects/44/genplan.webp',
        description: 'Ayana Soluna Luxury Villas — закрытый жилой комплекс современных вилл, расположенный на склоне Маник в районе Чернг Талай, Пхукет. Проект ориентирован на приватное проживание в спокойной природной среде и сочетает формат резиденций с комфортом курортного уровня. Локация Маник считается одной из наиболее востребованных жилых зон центральной части острова благодаря сочетанию уединённости, природы и удобного доступа к инфраструктуре западного побережья. Комплекс включает 84 виллы с частными бассейнами, создавая камерную жилую среду с низкой плотностью застройки. Проект рассчитан на семейное проживание, длительное пребывание и владение недвижимостью в спокойной зелёной локации.',
        genDesc: 'Генеральный план Ayana Soluna предусматривает размещение вилл на отдельных участках внутри закрытого охраняемого комплекса. Планировка ориентирована на приватность, визуальную открытость пространства и удобство передвижения внутри территории.Внутренние дороги обеспечивают доступ к каждой вилле, при этом жилые зоны остаются изолированными от транзитного движения. Озеленённые пространства, природный рельеф и садовые зоны формируют спокойную и упорядоченную среду, характерную для формата приватного residential community.',
        descriptionExterior: 'Архитектурная концепция проекта основана на сочетании современной геометрии и природных материалов. В отделке используются элементы, вдохновлённые тропической архитектурой — дерево, камень и натуральная цветовая палитра, что позволяет гармонично интегрировать виллы в природный ландшафт холмов Маник. В комплексе представлены виллы с 3–5 спальнями в конфигурациях 2 и 3 этажа, рассчитанные на комфортное проживание и функциональное использование пространства. Планировки предусматривают чёткое разделение общественных и приватных зон.',
        specs: {
          readyDate: 'Q4 2027',          // срок сдачи
          areaTotal: '473м² - 1325м²',           // площадь (общая)
          propertyType: 'Вилла',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 3',                   // кол-во спален
          bathrooms: '3-5',
          developer: ' T.H. Group Phuket'
        },
         amenities: [
          'Частный бассейн и просторная терраса','внутренняя парковка', 'благоустроенные прогулочные зоны','гостиная и столовая открытой планировки','кухня западного типа с островом','мастер-спальня с гардеробной и ванной комнатой', 'панорамные окна и естественное освещение', 'прачечная и кладовые помещения', 'приватный сад и озеленённый участок', 'крытая парковка на 2–3 автомобиля'], 
        galleryExterior: [
          '/img/objects/44/exterior/obj1.webp',
          '/img/objects/44/exterior/obj2.webp',
          '/img/objects/44/exterior/obj3.webp',
          '/img/objects/44/exterior/obj4.webp',
          '/img/objects/44/exterior/obj5.webp',
          '/img/objects/44/exterior/obj6.webp',
          '/img/objects/44/exterior/obj7.webp',
        ],
        galleryInterior: [
          // '/img/objects/44/interior/obj1.webp',
          // '/img/objects/44/interior/obj2.webp',
          // '/img/objects/44/interior/obj3.webp',
          // '/img/objects/44/interior/obj4.webp',
          // '/img/objects/44/interior/obj5.webp',
          // '/img/objects/44/interior/obj6.webp',
        ],
//         units: [
//      {
//     id: '1',
//     title: 'Вилла 3 спальни',
//     bedrooms: 3,
//     bathrooms: 3,
//     area: { min:473, max: 473 },         // м²
//     floor: { min: 1, max: 1 },
//     priceTHB: 33000000,
//     cover: '/img/objects/23/plans/unit1.webp'
//           },
//             {
//     id: '2',
//     title: 'Вилла 4 спальни',
//     bedrooms: 4,
//     bathrooms: 4,
//     area: { min:529, max:529 },         // м²
//     floor: { min: 1, max: 1 },
//     priceTHB: 38000000,
//     cover: '/img/objects/23/plans/unit2.webp'
//           },
//                 {
//     id: '3',
//     title: 'Вилла 4 спальни',
//     bedrooms: 4,
//     bathrooms: 4,
//     area: { min:709, max: 709 },         // м²
//     floor: { min: 1, max: 1 },
//     priceTHB: 49000000,
//     cover: '/img/objects/23/plans/unit3.webp'
//           },
// ],
           bookingConditions: [
    { id: 1, title: 'Резервация (депозит) — при бронировании юнита', type: 'amount', type: 'percent', value: 2  },
    { id: 2, title: '1-й взнос (подписание контракта / SPA) в течение 30 дней после брони', type: 'percent', value: 28 },
    { id: 3, title: '2-й взнос — после завершения фундамента', type: 'percent', value: 15 },
    { id: 4, title: '3-й взнос — после завершения бетонной конструкции', type: 'percent', value: 15 },
    { id: 5, title: '4-й взнос — после завершения стен и кровельной плитки', type: 'percent', value: 15 },
          { id: 6, title: '5-й взнос — после завершения укладки плитки/интерьера', type: 'percent', value: 15 },
        { id: 7, title: '6-й  - финальный взнос (handover / передача)', type: 'percent', value: 10 }
            ],
   infrastructure: [
          { id: 1, title: 'Blue Tree Phuket', time: '' },
          { id: 2, title: 'Boat Avenue', time: '' },
          { id: 3, title: 'Porto de Phuket', time: '' },
          { id: 4, title: 'Laguna Phuket', time: '' },
          { id: 5, title: 'Laguna Golf Phuket', time: '' },
          { id: 6, title: 'Robinson Lifestyle Thalang', time: '' },
          { id: 7, title: 'Boat Lagoon Marina', time: '' },
        ]
      },
                          {
      id: 43,
      city: 'phuket',
      new: true,
      status: 'best',
      name: 'The Title Biancana',
      priceDollars: '169 825$',
      priceTHB: 'THB 5 270 000',
      location: 'Surin Beach, Пхукет',
      coordinates: [98.281175, 7.975279],
      firstImg: '/img/objects/43/start.webp',
      bgImg: '/img/objects/43/bgImg.webp',
      bigImg: '/img/objects/43/bigImg.webp',
      genImg: '/img/objects/43/genplan.webp',
      description: 'The Title Biancana Surin — современный малоэтажный жилой комплекс курортного формата, расположенный в престижном районе Сурин на западном побережье Пхукета, примерно в 200 метрах от пляжа Surin Beach. Проект реализуется девелопером Rhom Bho Property под брендом The Title и формирует закрытое жилое сообщество с приватной атмосферой, курортной архитектурой и удобным доступом к инфраструктуре западного побережья.<br>Комплекс ориентирован на спокойное проживание рядом с морем, длительное пребывание и владение недвижимостью в одной из наиболее стабильных и востребованных локаций острова. Низкая плотность застройки и формат gated community создают более приватную и упорядоченную жилую среду по сравнению с типичными курортными проектами.',
      specs: {
          readyDate: 'Q3 2029',          // срок сдачи
          areaTotal: '31м² - 94м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'The Title'
        },
      amenities: [
          'несколько бассейнов для взрослых и детей', 'фитнес-центр', 'коворкинг и рабочие пространства',  'лаунж и общественные зоны', 'детская игровая зона', 'озеленённые сады', 'прогулочные пространства', 'pet-friendly зоны ', 'парковка','24/7 охрана', 'видеонаблюдение'
        ], 
      genDesc: 'Генеральный план The Title Biancana построен по принципу компактного и логичного зонирования. Четыре жилых корпуса расположены вокруг внутренних общественных пространств, формируя закрытую и приватную территорию. В центральной части размещены бассейны и зоны отдыха. Фитнес, коворкинг и общественные пространства распределены внутри комплекса без перегруженности. Пешеходные маршруты проходят через озеленённые участки, соединяя корпуса между собой и обеспечивая удобную навигацию. <br>Парковка вынесена в отдельные зоны, что позволяет сохранить внутреннюю территорию спокойной и свободной от движения транспорта.',
      descriptionExterior: 'Архитектурная концепция проекта выполнена в современном resort-стиле с акцентом на открытые пространства, естественное освещение и интеграцию с тропическим окружением. Четыре жилых корпуса высотой 5 этажей формируют камерную, визуально лёгкую застройку без ощущения плотности.<br>Планировки ориентированы на функциональность и комфорт повседневного проживания. Панорамные окна увеличивают естественное освещение, а открытые балконы создают связь с внешней средой. Из части резиденций открываются виды на Андаманское море, холмы Пхукета и окружающие бухты. <br>Территория комплекса благоустроена и включает зелёные зоны, внутренние дворы, прогулочные пространства и приватные общественные зоны. Концепция проекта ориентирована на спокойную жилую среду с курортным характером.',
      galleryExterior: [
          //  '/img/objects/23/exterior/obj01.jpg',
          '/img/objects/43/exterior/obj1.webp',
          '/img/objects/43/exterior/obj2.webp',
          '/img/objects/43/exterior/obj3.webp', 

        ],
        galleryInterior: [
          '/img/objects/43/interior/obj2.webp',
          '/img/objects/43/interior/obj3.webp',
          '/img/objects/43/interior/obj4.webp',

        ],
    bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: '10% — в течение 14 дней после резервации', type: 'percent', value: 10 },
    { id: 3, title: '15% — в течение 30 дней после резервации', type: 'percent', value: 15 },
    { id: 4, title: '75% — по завершении строительства', type: 'percent', value: 75},

            ],
        infrastructure: [
        { id: 1, title: 'Surin Beach', time: '' },
        { id: 2, title: 'Bang Tao Beach', time: '' },
        { id: 3, title: 'Kamala Beach', time: '' },
        { id: 4, title: 'Laguna Phuket', time: '' },
        { id: 5, title: 'Laguna Golf Phuket', time: '' },
        { id: 6, title: 'Boat Avenue', time: '' },
        { id: 7, title: 'Catch Beach Club', time: '' },
        { id: 8, title: 'Blue Tree Phuket', time: '' },

        ],
        units: [
  {
    id: '1',
    title: '1 комната',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 31, max: 41 },         // м²
    floor: { min: 1, max: 5 },
    // priceTHB: 39600000,
    cover: '/img/objects/43/plans/unit1.webp'
  },
  {
    id: '2',
    title: '1 комната PLUS',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 49, max: 51 },
    floor: { min: 1, max: 5 },
    // priceTHB: 6480000,
        cover: '/img/objects/43/plans/unit2.webp'

  },
  {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 62, max: 76 },
    floor: { min: 1, max: 5 },
    cover: '/img/objects/43/plans/unit3.webp',
    // priceTHB: 10350000,

          },
   {
    id: '4',
    title: '2 спальни PLUS',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 88, max: 104 },
    floor: { min: 1, max: 5 },
    cover: '/img/objects/43/plans/unit4.webp',
    // priceTHB: 10350000,

          },

        ]
 },
                      {
      id: 42,
      city: 'phuket',
      new: true,
      // status: 'best',
      name: 'SO Origin Bangtao Beach',
      priceDollars: '138 245$',
      priceTHB: 'THB 4 290 000',
      location: 'Банг Тао, Пхукет',
      coordinates: [98.293325, 7.987083],
      firstImg: '/img/objects/42/start.webp',
      bgImg: '/img/objects/42/bgImg.webp',
      bigImg: '/img/objects/42/bigImg.webp',
      genImg: '/img/objects/42/genplan.webp',
      description: 'So Origin Bangtao Beach — современный малоэтажный жилой комплекс на западном побережье Пхукета, расположенный примерно в 400 метрах от пляжа Бангтао. Проект входит в состав крупного курортного кластера Origin Resort World Bangtao Beach и формирует полноценную жилую среду рядом с морем, инфраструктурой и курортной зоной Laguna.<br> Комплекс ориентирован на проживание, длительное пребывание и владение недвижимостью в одной из наиболее устойчивых и развитых локаций острова.',
      specs: {
          readyDate: 'Q3 2028',          // срок сдачи
          areaTotal: '36м² - 94м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'So Origin Bangtao'
        },
      amenities: [
          'большой бассейн с зоной отдыха', 'панорамный бассейн на крыше', 'фитнес-центр', 'коворкинг и рабочие пространства',  'клубный дом и лаунж-зоны', 'пляжный клуб', 'озеленённые сады', 'прогулочные пространства', 'стильное лобби', 'парковка','24/7 охрана', 'видеонаблюдение'
        ], 
      genDesc: 'Генеральный план комплекса построен по принципу компактного и логичного зонирования. Жилые корпуса расположены вокруг центральных общественных пространств, обеспечивая равномерный доступ к инфраструктуре и удобную навигацию внутри комплекса.<br>В центральной части расположены бассейны, зоны отдыха и клубный дом. Фитнес, коворкинг и лаунж-пространства распределены внутри территории без перегруженности. Озеленённые прогулочные зоны соединяют корпуса, формируя спокойную внутреннюю среду. Парковка вынесена в отдельные зоны, что сохраняет жилое пространство свободным от транспорта.',
      descriptionExterior: 'Проект выполнен в современном архитектурном стиле с акцентом на функциональность, компактность и удобство повседневного использования. В состав комплекса входят три восьмиэтажных жилых корпуса и отдельный клубный дом, объединённые благоустроенной территорией.<br>Планировки ориентированы на рациональное использование площади, естественное освещение и комфорт проживания. Панорамные окна и современные инженерные решения адаптированы к климату Пхукета. Территория комплекса организована как единая жилая среда с зелёными зонами, внутренними дворами и общественными пространствами.',
      galleryExterior: [
          //  '/img/objects/23/exterior/obj01.jpg',
          '/img/objects/42/exterior/obj1.webp',
          '/img/objects/42/exterior/obj2.webp',
          '/img/objects/42/exterior/obj3.webp', 
          '/img/objects/42/exterior/obj4.webp',
          '/img/objects/42/exterior/obj5.webp',
          '/img/objects/42/exterior/obj6.webp', 
          '/img/objects/42/exterior/obj7.webp',
          '/img/objects/42/exterior/obj8.webp', 
        ],
        galleryInterior: [
          '/img/objects/42/interior/obj1.webp',
          '/img/objects/42/interior/obj2.webp',
          '/img/objects/42/interior/obj3.webp',

        ],
    bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: '10% — в течение 14 дней после резервации', type: 'percent', value: 10 },
    { id: 3, title: '15% — в течение 30 дней после резервации', type: 'percent', value: 15 },
    { id: 4, title: '75% — по завершении строительства', type: 'percent', value: 75},

            ],
        infrastructure: [
        { id: 1, title: 'Bang Tao Beach', time: '' },
        { id: 2, title: 'Surin Beach', time: '' },
        { id: 3, title: 'Laguna Phuket', time: '' },
        { id: 4, title: 'Laguna Golf Phuket', time: '' },
        { id: 5, title: 'Boat Avenue', time: '' },
        { id: 6, title: 'Porto de Phuket', time: '' },
        { id: 7, title: 'Catch Beach Club', time: '' },
        { id: 8, title: 'Blue Tree Phuket', time: '' },

        ],
        units: [
  {
    id: '1',
    title: 'Cтудия',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 26, max: 26 },         // м²
    floor: { min: 1, max: 8 },
    // priceTHB: 39600000,
    cover: '/img/objects/42/plans/unit1.webp'
  },
  {
    id: '2',
    title: '1 комната',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 32, max: 32 },
    floor: { min: 1, max: 8 },
    // priceTHB: 6480000,
        cover: '/img/objects/42/plans/unit2.webp'

  },
  {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 50, max: 50 },
    floor: { min: 1, max: 8 },
    cover: '/img/objects/42/plans/unit3.webp',
    // priceTHB: 10350000,

          },

        ]
 },
//                   {
//       id: 41,
//       city: 'phuket',
//       new: true,
//       // status: 'best',
//       name: 'Wallaya Residence Naiharn',
//       priceDollars: '128 000$',
//       priceTHB: 'THB 4 003 840',
//       location: 'Найхарн, Пхукет',
//       coordinates: [98.316591, 7.779286],
//       firstImg: '/img/objects/41/start.webp',
//       bgImg: '/img/objects/41/bgImg.webp',
//       bigImg: '/img/objects/41/bigImg.webp',
//       genImg: '/img/objects/41/genplan.webp',
//       description: 'Wallaya Residence Nai Harn — современный малоэтажный жилой кондоминиум, расположенный в тихом районе Най Харн на юге Пхукета. Проект разработан в концепции «неспешной жизни и изысканности» и ориентирован на спокойный ритм проживания в окружении природы. <br>Комплекс подойдёт для комфортного проживания, длительного отдыха и долгосрочного владения недвижимостью в одном из самых живописных районов острова.',
//       specs: {
//           readyDate: 'Q2 2028',          // срок сдачи
//           areaTotal: '36м² - 94м²',           // площадь (общая)
//           propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
//           finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
//           bedrooms: 'от 1',                   // кол-во спален
//           bathrooms: 'от 1',
//           developer: 'Wallaya Villas Developments'
//         },
//       amenities: [
//           'большой бассейн с зоной отдыха', 'детский бассейн', 'фитнес-центр', 'спа-центр',  'коворкинг', 'детский клуб', 'ресторан и лаунж-бар', 'кинотеатр под открытым небом на крыше', 'зоны для отдыха и занятий йогой', 'парковка', 'ресепшн и консьерж', '24/7 охрана', 'видеонаблюдение'
//         ], 
//       genDesc: 'Генеральный план Wallaya Residence Nai Harn включает три семиэтажных жилых корпуса, объединённых благоустроенной закрытой территорией. В центральной части комплекса расположен основной бассейн с зоной отдыха, рядом — детский бассейн и детский клуб. <br>Общественные пространства, включая фитнес-центр, спа, коворкинг и ресторан, размещены внутри территории и удобно связаны пешеходными маршрутами. Озеленённые зоны и прогулочные дорожки формируют спокойную и упорядоченную жилую среду. <br>На крышах зданий предусмотрены зоны отдыха и пространства для занятий йогой. Парковка вынесена в подземную и крытую часть комплекса, что сохраняет территорию свободной от движения транспорта.',
//       descriptionExterior: 'Wallaya Residence Nai Harn выполнен в современном минималистичном архитектурном стиле с использованием натуральных материалов и спокойной цветовой палитры. Архитектура проекта адаптирована к природному ландшафту Пхукета и гармонично сочетается с тропической растительностью. <br>Комплекс состоит из трёх семиэтажных зданий, в которых размещено 285 апартаментов. В проекте представлены студии, а также квартиры с одной, двумя и тремя спальнями площадью от 36 до 94 м². Планировки разработаны с акцентом на функциональное зонирование, естественное освещение и комфорт для повседневной жизни. Территория комплекса благоустроена и озеленена, с чётким разделением жилых, общественных и рекреационных зон.',
//       galleryExterior: [
//           //  '/img/objects/23/exterior/obj01.jpg',
//           '/img/objects/41/exterior/obj1.webp',
//           '/img/objects/41/exterior/obj2.webp',
//           '/img/objects/41/exterior/obj3.webp', 
//           '/img/objects/41/exterior/obj4.webp',
//           '/img/objects/41/exterior/obj5.webp',
//           '/img/objects/41/exterior/obj6.webp', 
//           '/img/objects/41/exterior/obj7.webp',
//           '/img/objects/41/exterior/obj8.webp', 
//         ],
//         galleryInterior: [
//           '/img/objects/41/interior/obj1.webp',
//           '/img/objects/41/interior/obj2.webp',
//           '/img/objects/41/interior/obj3.webp',
//           '/img/objects/41/interior/obj4.webp',
//           '/img/objects/41/interior/obj5.webp',
//           '/img/objects/41/interior/obj6.webp',
//           '/img/objects/41/interior/obj7.webp',
//           '/img/objects/41/interior/obj8.webp',
//         ],
//     bookingConditions: [
//     { id: 1, title: 'Депозит бронирования', type: 'amount', value: 200000, currency: 'THB' },
//     { id: 2, title: '30% — платеж на подписание контракта', type: 'percent', value: 30 },
//     { id: 3, title: '20% — рассрочка на весь период строительства', type: 'percent', value: 20 },
//     { id: 4, title: '50% - третий платеж', type: 'percent', value: 50},

//             ],
//         infrastructure: [
//         { id: 1, title: 'Nai Harn Beach', time: '' },
//         { id: 2, title: 'Rawai Beach', time: '' },
//         { id: 3, title: 'Nai Harn Lake', time: '' },
//         { id: 4, title: 'Promthep Cape Viewpoint', time: '' },
//         { id: 5, title: 'Рестораны и кафе района Най Харн', time: '' },
//         { id: 6, title: 'Супермаркеты и сервисная инфраструктура Раваи', time: '' },

//         ],
//         units: [
//   {
//     id: '1',
//     title: 'Cтудия',
//     bedrooms: 1,
//     bathrooms: 1,
//     area: { min: 36, max: 36 },         // м²
//     floor: { min: 1, max: 7 },
//     priceTHB: 39600000,
//     cover: '/img/objects/41/plans/unit1.webp'
//   },
//   {
//     id: '2',
//     title: '1 комната',
//     bedrooms: 1,
//     bathrooms: 1,
//     area: { min: 54, max: 54 },
//     floor: { min: 1, max: 7 },
//     priceTHB: 6480000,
//         cover: '/img/objects/41/plans/unit2.webp'

//   },
//   {
//     id: '3',
//     title: '2 спальни',
//     bedrooms: 2,
//     bathrooms: 2,
//     area: { min: 90, max: 90 },
//     floor: { min: 1, max: 7 },
//        cover: '/img/objects/41/plans/unit3.webp',
//     priceTHB: 10350000,

//           },
//   {
//     id: '4',
//     title: '3  cпальни',
//     bedrooms: 3,
//     bathrooms: 2,
//     area: { min: 94, max: 94 },
//     floor: { min: 1, max: 7 },
//     cover: '/img/objects/41/plans/unit4.webp',
//     priceTHB: 11750000,
//     // cover: '/img/objects/7/plans/unit4.webp'
//   },
//         ]
//  },
              {
      id: 40,
      city: 'phuket',
      new: true,
      status: 'best',
      name: 'RHEA by Sansiri',
      priceDollars: '91 841$',
      priceTHB: 'THB 2 850 000',
      location: 'Сурин, Пхукет',
      coordinates: [98.2812, 7.9736],
      firstImg: '/img/objects/40/start.webp',
      bgImg: '/img/objects/40/bgImg.webp',
      bigImg: '/img/objects/40/bigImg.webp',
      genImg: '/img/objects/40/genplan.webp',
      description: 'Rhea by Sansiri — современный жилой комплекс, расположенный в районе Сурин на западном побережье Пхукета. Проект ориентирован на спокойное проживание рядом с морем и подойдёт для личного использования, длительного отдыха и долгосрочного владения недвижимостью. <br><br>Комплекс реализуется застройщиком Sansiri и представляет собой закрытую жилую территорию с собственной инфраструктурой и продуманной внутренней средой. Формат проекта ориентирован на комфорт повседневной жизни, а не на активный туристический поток.',
      specs: {
          readyDate: '2027',          // срок сдачи
          areaTotal: '30м² - 60м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'Sansiri'
        },
      amenities: [
          'бассейн с зоной отдыха', 'фитнес-зал', 'зона для занятий йогой', 'коворкинг-пространство',  'благоустроенные сады', 'прогулочные зоны', 'прачечная', 'зоны отдыха с массажными креслами', 'парк для домашних животных', 'охраняемая закрытая территория', 'pet-friendly'
        ], 
      genDesc: 'Генеральный план Rhea by Sansiri отражает компактную и логичную организацию территории: жилые корпуса расположены по периметру участка, в центральной части комплекса размещён основной бассейн, предусмотрены дополнительные зоны отдыха и озеленённые пространства, общественные функции вынесены в отдельное здание, пешеходные дорожки связывают все зоны комплекса между собой, движение транспорта и зоны отдыха разделены. Такое планировочное решение создаёт упорядоченную и комфортную жилую среду для повседневного проживания.',
      descriptionExterior: 'Архитектура Rhea by Sansiri выполнена в современном стиле с акцентом на функциональность, простые формы и интеграцию зелёных зон в жилое пространство. Проект занимает участок площадью около 7 rai и включает три пятиэтажных жилых корпуса, а также отдельное двухэтажное здание общественных пространств. <br>Всего в комплексе предусмотрено 295 апартаментов с планировками от 29 до 65 м². Форматы квартир включают варианты с одной и двумя спальнями, рассчитанные на комфортное проживание и рациональное использование площади. <br>Территория комплекса благоустроена и озеленена, с чётким разделением жилых и общественных зон. Пространство организовано таким образом, чтобы обеспечить приватность, удобную навигацию и спокойную атмосферу внутри комплекса.',
      galleryExterior: [
          //  '/img/objects/23/exterior/obj01.jpg',
          '/img/objects/40/exterior/obj1.webp',
          '/img/objects/40/exterior/obj2.webp',
          '/img/objects/40/exterior/obj3.webp',              
        ],
        // galleryInterior: [
        //   '/img/objects/40/interior/obj1.webp',
        //   '/img/objects/40/interior/obj2.webp',
        //   '/img/objects/40/interior/obj3.webp',
        // ],
    bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 200000, currency: 'THB' },
    { id: 2, title: '30% — платеж на подписание контракта', type: 'percent', value: 30 },
    { id: 3, title: '20% — рассрочка на весь период строительства', type: 'percent', value: 20 },
    { id: 4, title: '50% - третий платеж', type: 'percent', value: 50},

            ],
        infrastructure: [
        { id: 1, title: 'Surin Beach', time: '' },
        { id: 2, title: 'Bang Tao Beach', time: '' },
        { id: 3, title: 'Laguna Phuket', time: '' },
        { id: 4, title: 'Cherng Talay', time: '' },
        { id: 5, title: 'Boat Avenue', time: '' },
        { id: 6, title: 'Porto de Phuket', time: '' },

        ],
        units: [
  {
    id: '1',
    title: '1A',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 29, max: 30 },         // м²
    floor: { min: 1, max: 5 },
    // priceTHB: 10800000,
    cover: '/img/objects/40/plans/unit1.webp'
  },
  {
    id: '2',
    title: '1B(Pet)',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 30, max: 30 },
    floor: { min: 1, max: 5 },
    // priceTHB: 18315000,
        cover: '/img/objects/40/plans/unit1.webp'

  },
  {
    id: '3',
    title: '2А',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 40, max: 40 },
    floor: { min: 1, max: 5 },
       cover: '/img/objects/40/plans/unit2.webp'
    // priceTHB: 140925000,
    // cover: '/img/objects/7/plans/unit4.webp'
          },
  {
    id: '4',
    title: '2В',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 59, max: 60 },
    floor: { min: 1, max: 5 },
       cover: '/img/objects/40/plans/unit3.webp'
    // priceTHB: 140925000,
    // cover: '/img/objects/7/plans/unit4.webp'
  },
        ]
 },
          {
      id: 39,
      city: 'pattaya',
      new: true,
      status: 'best',
      name: 'Embassy Life Jomtien',
      priceDollars: '90 000$',
      priceTHB: 'THB 2 850 000',
      location: 'Нонгпруе, Паттайя',
      coordinates: [100.883843, 12.886664],
      firstImg: '/img/objects/39/start.webp',
      bgImg: '/img/objects/39/bgImg.webp',
      bigImg: '/img/objects/39/bigImg.webp',
      genImg: '/img/objects/39/genplan.webp',
      description: 'Embassy Life Jomtien — современный жилой комплекс, расположенный на улице Джомтьен 2-я в Паттайе, примерно в 450 метрах от пляжа Джомтьен. Проект сочетает городской формат проживания с курортной инфраструктурой и ориентирован на комфортную повседневную жизнь рядом с морем.<br>Комплекс включает три жилые башни высотой до 24 этажей и предлагает более 900 апартаментов различных форматов.Embassy Life выполнен в современном стиле с архитектурной концепцией, вдохновлённой дипломатическими кварталами. Проект занимает участок около 6–7 rai и включает три здания (A, B и C), объединённых общей благоустроенной территорией.',
      specs: {
          readyDate: 'Q1 2029',          // срок сдачи
          areaTotal: '28м² - 448м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'Matrix Development'
        },
      amenities: [
          '70-метровый бассейн', 'панорамный бассейн на крыше', 'фитнес-центр', 'спа-комплекс',  'соляная пещера', 'сауна и парная', 'йога-дек', 'джакузи', 'коворкинг', 'лаунж-зона', 'розничные магазины', 'подземная парковка', 'ресепшн и консьерж', '24/7 охрана'
        ], 
      genDesc: 'Генеральный план Embassy Life предусматривает зонирование территории с распределением инфраструктуры по уровням комплекса. В центральной части расположен основной бассейн длиной около 70 метров с зонами отдыха и водными террасами. <br>Общественные пространства включают фитнес-центр, спа-комплекс, коворкинг и зоны отдыха, равномерно распределённые по этажам. Озеленённые сады, прогулочные зоны и открытые пространства формируют удобную и спокойную среду внутри комплекса.<br>На верхнем уровне здания A размещён панорамный бассейн-инфинити с видами на город и море. Подземный уровень включает парковку и оздоровительный комплекс.',
      descriptionExterior: 'Планировки ориентированы на функциональность и эффективное использование пространства. Апартаменты предлагаются с современной отделкой и меблировкой. Территория комплекса включает озеленённые зоны, общественные пространства и инфраструктуру для повседневного использования.',
      galleryExterior: [
          //  '/img/objects/23/exterior/obj01.jpg',
          '/img/objects/39/exterior/obj1.webp',
          '/img/objects/39/exterior/obj2.webp',
          '/img/objects/39/exterior/obj3.webp',
          '/img/objects/39/exterior/obj4.webp',
          '/img/objects/39/exterior/obj5.webp',
          '/img/objects/39/exterior/obj6.webp',
           '/img/objects/39/exterior/obj7.webp',
           '/img/objects/39/exterior/obj8.webp',
          '/img/objects/39/exterior/obj9.webp',
          '/img/objects/39/exterior/obj10.webp',
          '/img/objects/39/exterior/obj11.webp',
                         
        ],
        galleryInterior: [
          '/img/objects/39/interior/obj1.webp',
          '/img/objects/39/interior/obj2.webp',
          '/img/objects/39/interior/obj3.webp',
          '/img/objects/39/interior/obj4.webp',
          '/img/objects/39/interior/obj5.webp',
          '/img/objects/39/interior/obj6.webp',
          '/img/objects/39/interior/obj7.webp',
          '/img/objects/39/interior/obj8.webp',
          '/img/objects/39/interior/obj9.webp',
        ],
    bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: '20% — платеж на подписание контракта', type: 'percent', value: 20 },
    { id: 3, title: '30% — рассрочка на весь период строительства', type: 'percent', value: 30 },
    { id: 4, title: '30% — рассрочка на весь период строительства', type: 'percent', value: 50},

            ],
        infrastructure: [
        { id: 1, title: 'Jomtien Beach', time: '' },
        { id: 2, title: 'Jomtien Night Market', time: '' },
        { id: 3, title: 'Pattaya Floating Market', time: '' },
        { id: 4, title: 'Underwater World Pattaya', time: '' },
        { id: 5, title: 'Central Festival Pattaya', time: '' },
        { id: 6, title: 'Terminal 21 Pattaya', time: '' },
        { id: 7, title: 'Bangkok Hospital Pattaya', time: '' },
        ],
        units: [
  {
    id: '1',
    title: 'Студии',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 22, max: 22 },         // м²
    floor: { min: 2, max: 24 },
    // priceTHB: 10800000,
    cover: '/img/objects/39/plans/unit1.webp'
  },
  {
    id: '2',
    title: '1 спальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 34, max: 52 },
    floor: { min: 2, max: 24 },
    // priceTHB: 18315000,
        cover: '/img/objects/39/plans/unit2.webp'

  },
  {
    id: '3',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 51, max: 77 },
    floor: { min: 2, max: 24 },
       cover: '/img/objects/39/plans/unit3.webp'
    // priceTHB: 140925000,
    // cover: '/img/objects/7/plans/unit4.webp'
  },
        ]
 },
      {
      id: 38,
      city: 'pattaya',
      new: true,
      status: 'best',
      name: 'Once Wongamat',
      priceDollars: '219 258$',
      priceTHB: 'THB 6 804 000',
      location: 'Вонгамат, Паттайя',
      coordinates: [100.889257, 12.952425],
      firstImg: '/img/objects/38/start.webp',
      bgImg: '/img/objects/38/bgImg.webp',
      bigImg: '/img/objects/38/bigImg.webp',
      genImg: '/img/objects/38/genplan.webp',
      description: 'Once Wongamat — современный высотный жилой комплекс, расположенный в районе Вонгамат на севере Паттайи, примерно в 200 метрах от пляжа. Проект сочетает городской формат проживания с панорамными морскими видами и развитой внутренней инфраструктурой.',
      specs: {
          readyDate: 'Q1 2028',          // срок сдачи
          areaTotal: '28м² - 448м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'Honour Group'
        },
      amenities: [
          '2 бассейна', 'фитнес-центр', 'cтудия', 'спа',  'онсен', 'сауна и парная', 'коворкинг', 'рабочие пространства', 'частный лаунж', 'детская зона', 'панорамная терраса', 'ночной театр', 'ресепшн и консьерж', '24/7 охрана'
        ], 
      genDesc: ' Генеральный план Once Wongamat построен на вертикальной организации пространства одной жилой башни. Общественные зоны распределены по уровням здания, формируя удобную и логичную внутреннюю инфраструктуру. <br>В нижней части комплекса размещены лобби и сервисные пространства. Средние уровни включают бассейны, зоны отдыха, фитнес и спа. Панорамные лаунж-зоны и рекреационные пространства расположены на верхних этажах, обеспечивая открытые виды на море и город.',
      descriptionExterior: 'Комплекс представляет собой одну жилую башню высотой 56 этажей и включает 548 резиденций различных форматов. <br> Башня выполнена в современном архитектурном стиле с акцентом на вертикальную панораму и открытые виды. Проект спроектирован таким образом, чтобы обеспечить максимальное естественное освещение и визуальный доступ к морю и городской панораме. Апартаменты предлагаются с современной отделкой, панорамным остеклением и функциональной планировкой.',
      galleryExterior: [
          //  '/img/objects/23/exterior/obj01.jpg',
          '/img/objects/38/exterior/obj1.webp',
          '/img/objects/38/exterior/obj2.webp',
          '/img/objects/38/exterior/obj3.webp',
          '/img/objects/38/exterior/obj4.webp',
          '/img/objects/38/exterior/obj5.webp',
          '/img/objects/38/exterior/obj6.webp',
          '/img/objects/38/exterior/obj7.webp',
                         
        ],
        galleryInterior: [
          '/img/objects/38/interior/obj1.webp',
          '/img/objects/38/interior/obj2.webp',
          '/img/objects/38/interior/obj3.webp',
          '/img/objects/38/interior/obj4.webp',
          '/img/objects/38/interior/obj5.webp',
          '/img/objects/38/interior/obj6.webp',
          '/img/objects/38/interior/obj7.webp',
          '/img/objects/38/interior/obj8.webp',
          '/img/objects/38/interior/obj10.webp',
          '/img/objects/38/interior/obj11.webp',
          '/img/objects/38/interior/obj12.webp',
          '/img/objects/38/interior/obj13.webp',
          '/img/objects/38/interior/obj14.webp',
        ],
    bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: '20% — платеж на подписание контракта', type: 'percent', value: 20 },
    { id: 3, title: '30% — рассрочка на весь период строительства', type: 'percent', value: 30 },
    { id: 4, title: '30% — рассрочка на весь период строительства', type: 'percent', value: 50},

            ],
        infrastructure: [
        { id: 1, title: 'Wongamat Beach', time: '' },
        { id: 2, title: 'Terminal 21 Pattaya', time: '' },
        { id: 3, title: 'Naklua', time: '' },
        { id: 4, title: 'Рестораны и кафе района Вонгамат', time: '' },
        { id: 5, title: 'Торговые центры северной Паттайи', time: '' },
        ],
        units: [
  {
    id: '1',
    title: '1 Cпальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 34, max: 56 },         // м²
    floor: { min: 2, max: 56 },
    // priceTHB: 10800000,
    // cover: '/img/objects/7/plans/unit1.webp'
  },
  {
    id: '2',
    title: '2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 73, max: 89 },
    floor: { min: 2, max: 56 },
    // priceTHB: 18315000,

  },
  {
    id: '3',
    title: '3 спальни',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 123, max: 171 },
    floor: { min: 2, max: 56 },
    // priceTHB: 140925000,
    // cover: '/img/objects/7/plans/unit4.webp'
  },
   {
    id: '4',
    title: 'Пентхаус',
    bedrooms: 4,
    bathrooms: 4,
    area: { min: 358, max: 448 },
    floor: { min: 2, max: 56 },
    // priceTHB: 140925000,
    // cover: '/img/objects/7/plans/unit5.webp'
          },
        ]
 },
        
         {
        id: 27,
        city: 'phuket',
        new: true,
        status: 'best',
        name: 'Vibe Residence Karon',
        priceDollars: '102 896$',
        priceTHB: 'THB 3 304 000',
        location: 'Карон, Пхукет',
        coordinates: [98.295778, 7.850417],
        firstImg: '/img/objects/27/start.webp',
        bgImg: '/img/objects/27/bgImg.webp',
        bigImg: '/img/objects/27/bigImg.png',
        genImg: '/img/objects/27/genplan.webp',
        genDesc: 'Vibe Residence Karon — это не просто дом. Это инвестиция в ваше будущее и в ваш комфорт. <br>Спрос на аренду в Кароне стабильно высокий, и этот проект не исключение. С загрузкой до 90% в высокий сезон и потенциальным ростом стоимости на 20-30% к моменту сдачи, инвестиции в Vibe Residence Karon обещают быть не только прибыльными, но и безопасными. Предлагаем гибкую рассрочку на 2 года, а доходность на аренде составит от 6 до 9% годовых — отличная возможность для долгосрочных инвестиций.',
        //         genLegend: [
        //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior: 'Vibe Residence Karon — это не просто жильё, а продуманное пространство для жизни и отдыха. В проекте три элегантных корпуса, в которых расположены 309 апартаментов. Выберите студию или квартиру с одной или двумя спальнями (от 28 до 72 м²), чтобы жить в окружении панорамных окон, просторных балконов и тщательно подобранных отделочных материалов. Архитектура комплекса продумана до мельчайших деталей, чтобы вы могли наслаждаться каждой минутой, проведённой в вашем новом доме.<br>Только 180 метров отделяют вас от пляжа Карон, где белоснежный песок и прозрачные воды создают атмосферу райского отдыха круглый год. Прогулка до пляжа — это всего 3 минуты пешком, а рядом с комплексом расположены все удобства для комфортной жизни: рестораны, кафе, магазины, парки и международные школы. Приезжайте на отдых или оставайтесь на постоянное место жительства — местоположение предлагает идеальный баланс уединения и развитой инфраструктуры.',
        galleryExterior: [
          //  '/img/objects/23/exterior/obj01.jpg',
          '/img/objects/27/exterior/obj1.webp',
          '/img/objects/27/exterior/obj2.webp',
          '/img/objects/27/exterior/obj3.webp',
          '/img/objects/27/exterior/obj4.webp',
          '/img/objects/27/exterior/obj5.webp',
          '/img/objects/27/exterior/obj6.webp',
          '/img/objects/27/exterior/obj7.webp',
          '/img/objects/27/exterior/obj8.webp',
          '/img/objects/27/exterior/obj9.webp',
          '/img/objects/27/exterior/obj10.webp',
          '/img/objects/27/exterior/obj11.webp',
          '/img/objects/27/exterior/obj12.webp',
          '/img/objects/27/exterior/obj13.webp',
          '/img/objects/27/exterior/obj14.webp',
          '/img/objects/27/exterior/obj15.webp',
                         
        ],
        galleryInterior: [
          '/img/objects/27/interior/obj1.webp',
          '/img/objects/27/interior/obj2.webp',
          '/img/objects/27/interior/obj3.webp',
          '/img/objects/27/interior/obj4.webp',
          '/img/objects/27/interior/obj5.webp',
          '/img/objects/27/interior/obj6.webp',
          '/img/objects/27/interior/obj7.webp',
          '/img/objects/27/interior/obj8.webp',
          '/img/objects/27/interior/obj9.webp',

        ],
        description: 'Vibe Residence Karon( апартаменты) — Ваш идеальный уголок у моря с максимальной отдачей. Представьте, что каждый день начинается с волн, лёгкого бриза и ярких впечатлений. В Vibe Residence Karon вы не просто живёте — вы наслаждаетесь жизнью у моря, в самом сердце одного из самых востребованных и динамично развивающихся районов Пхукета.<br>Инвестиционный потенциал: высокие доходы и стабильный спрос',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q4 2028',          // срок сдачи
          areaTotal: '28м² - 72м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'ESM Construction Group'
        },
        amenities: [
         '2 бассейна','Infinity pool на крыше с видом на море','Фитнес-зал','Коворкинг','Рестораны','Зелёные зоны', 'Кинотеатр'], 

        bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 200000, currency: 'THB' },
    { id: 2, title: 'Подписание договора (SPA) в течение ~30 дней после брони', type: 'percent', value: 35 },
    { id: 3, title: '60% по этапам строительства: Q3 2026 — 15%, Q1 2027 — 15%, Q3 2027 — 15% , Q2 2028 — 15% (пример из прайс-плана)' },
    { id: 4, title: 'Финальный взнос (handover / передача) при сдаче юнита / handover', type: 'percent', value: 5},

            ],
        infrastructure: [
        { id: 1, title: 'Karon Beach', time: '' },
        { id: 2, title: 'Kata Beach', time: '' },
        { id: 3, title: 'Patong Beach', time: '' },
        { id: 4, title: 'Karon View Point', time: '' },
        { id: 5, title: 'Big Buddha Phuket', time: '' },
        { id: 6, title: 'Wat Suwan Khiri Khet', time: '' },
    ]
      },
                 {
        id: 7,
        city: 'phuket',
        new: false,
        status: 'best',
        name: 'The Title Coralina', 
        priceDollars: '100 741$', 
        priceTHB: 'THB 3 400 000', 
        location: 'Камала, Пхукет',
        coordinates: [98.286874,7.954927],
        firstImg: '/img/objects/7/start.webp',
        bgImg: '/img/objects/7/bgImg.webp',
        bigImg: '/img/objects/7/bigImg.webp',
        genImg: '/img/objects/7/genplan.jpg',
        genDesc: 'Проект включает восемь 7-этажных корпусов, гармонично вписанных в тропический ландшафт. Среди квартир есть не только классические форматы, но и расширенные варианты с дополнительным пространством — 1BR Plus и 2BR Plus. Пентхаусы в ограниченном количестве — с прямым выходом на собственную крышу и захватывающими видами на море или горы.',
         //         genLegend: [
         //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior:'На территории — целый курорт: бассейны, фитнес, коворкинг, кинотеатр, магазины, кафе, лаундж-зоны и зеленые дворы. Есть корпуса, где можно жить с питомцами. Предусмотрена парковка, зарядки для электрокаров, а в будущем — даже шаттл до пляжа и соседних районов. <br><br>Проект особенно интересен тем, кто ищет недвижимость у моря не на словах, а в реальности — до пляжа всего 400 метров. Это отличное место как для переезда, так и для инвестиций: район Камала стабильно популярен, новых проектов здесь почти нет, а спрос на аренду — высокий круглый год ',
        galleryExterior: [
        '/img/objects/7/exterior/obj1.webp',
        '/img/objects/7/exterior/obj2.webp',
        '/img/objects/7/exterior/obj3.webp',
        '/img/objects/7/exterior/obj4.webp',
        '/img/objects/7/exterior/obj5.webp',
        '/img/objects/7/exterior/obj6.webp',
        '/img/objects/7/exterior/obj7.webp',
        '/img/objects/7/exterior/obj8.webp',
        '/img/objects/7/exterior/obj9.webp',
],
        description: 'The Title Coralina Kamala — это современный жилой комплекс, созданный для тех, кто ценит сочетание природы, уюта и функциональности. Здесь — просторные апартаменты с 1, 2 или 3 спальнями, а также пентхаусы с террасами и панорамными видами. Площадь — от 26 до 128 м², продуманные планировки, светлые интерьеры и максимум естественного света.',
        // ✅ Параметры объекта
          specs: {
          readyDate: 'Q4 2027',          // срок сдачи
          areaTotal: '35м² - 270м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Cовременный ремонт',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1-4',                   // кол-во спален
          bathrooms: '1-4',
          developer: 'AssetWise'
        },
        amenities: [
          'Охраняемая территория', 'Зона для прогулки питомцев', 'Бассейн на крыше', 'Фитнес',' Коворкинг','Зона готовки для мероприятий', 'Пляж в нескольких минутах', 
        ], 
units: [
  {
    id: '1',
    title: '1 bedroom S',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 27, max: 27 },         // м²
    floor: { min: 2, max: 6 },
    // priceTHB: 10800000,
    cover: '/img/objects/7/plans/unit1.webp'
  },
  {
    id: '2',
    title: '1 bedroom M',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 31, max: 31 },
    floor: { min: 2, max: 7 },
    // priceTHB: 18315000,
    cover: '/img/objects/7/plans/unit2.webp'
  },
  {
    id: '3',
    title: '1 bedroom L',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 41, max: 41 },
    floor: { min: 6, max: 6 },
    // priceTHB: 140925000,
    cover: '/img/objects/7/plans/unit4.webp'
  },
   {
    id: '4',
    title: '1 bedroom PLUS',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 46, max: 46 },
    floor: { min: 6, max: 6 },
    // priceTHB: 140925000,
    cover: '/img/objects/7/plans/unit5.webp'
  },
   {
    id: '5',
    title: '2 bedroom',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 64, max: 64 },
    floor: { min: 6, max: 6 },
    // priceTHB: 140925000,
    cover: '/img/objects/7/plans/unit6.webp'
  },
    {
    id: '6',
    title: '2 bedroom Plus',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 98, max: 98 },
    floor: { min: 6, max: 6 },
    // priceTHB: 140925000,
    cover: '/img/objects/7/plans/unit7.webp'
  },
     {
    id: '7',
    title: 'PH 2 bedroom Plus',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 93, max: 3 },
    floor: { min: 6, max: 6 },
    // priceTHB: 140925000,
    cover: '/img/objects/7/plans/unit8.webp'
  }
],
          bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: '1-й оплачивается в течение ~30 дней после брони', type: 'percent', value: 25 },
    { id: 3, title: '2-й взнос (первый этап) примерно через 7 месяцев после подписания', type: 'percent', value: 25 },
    { id: 4, title: '3-й взнос (второй этап)', type: 'percent', value: 25 },
    { id: 5, title: 'Финальный взнос (handover / передача)', type: 'percent', value: 25 },
          ],
   infrastructure: [
        { id: 1, title: 'Kamala Beach', time: '' },
        { id: 2, title: 'Phuket FantaSea', time: '' },
        { id: 3, title: 'Surin Beach', time: '' },
        { id: 4, title: 'Patong Beach', time: '' },
        { id: 5, title: 'Millionaire’s Mile', time: '' },
        { id: 6, title: 'Cafe del Mar Phuket', time: '' },

    ]
      },
                                                            {
        id: 26,
       city: 'phuket',
        new: true,
        status: 'best',
        name: 'The Title Balcony',
        priceDollars: '151 662$',
        priceTHB: 'THB 4 929 000',
        location: 'Найянг, Пхукет',
        coordinates: [98.299278, 8.091389],
        firstImg: '/img/objects/26/start.webp',
        bgImg: '/img/objects/26/bgImg.webp',
        bigImg: '/img/objects/26/bigImg.webp',
        genImg: '/img/objects/26/genplan.jpg',
        genDesc: 'Инфраструктура The Title Balcony включает три большие тематические зоны отдыха. В зоне Costa расположен 250-метровый лагуна-бассейн, джакузи, лаунж-остров и песчаная зона у воды. Зона Laguna предлагает 25-метровый спортивный бассейн, терапевтические гидрозоны и места для релаксации. В зоне Foresta создан семейный парк с домиком на дереве, водная игровая площадка, бассейн с водными элементами и обзорная терраса. На территории комплекса также есть современный фитнес-центр, сауна, парная, коворкинг, детский клуб, кафе, ресторан, барбекю-площадки, прачечная и сервис консьержа. Для жителей предусмотрено 182 парковочных места и круглосуточная охрана.',
        //         genLegend: [
        //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior: 'Локация является одним из ключевых преимуществ проекта. В нескольких шагах расположен пляж Nai Yang с ровным заходом и спокойным морем круглый год. Неподалёку находится национальный парк Sirinat, множество кафе, магазинов и сервисов. Международный аэропорт расположен всего в двух километрах, а популярные пляжи Май Као и Най Тон находятся в нескольких минутах езды. В районе активно развивается инфраструктура: строится международная больница Bumrungrad и крупный торговый центр, что повышает инвестиционную привлекательность локации.<br>Проект предлагает разнообразие планировок: студии площадью 30–39 м², однокомнатные формата 1+ от 45 м², двухспальные резиденции 50–70 м² и пентхаусы площадью до 139 м². Все квартиры оснащены панорамными окнами, имеют балконы или террасы и продуманную внутреннюю эргономику. Предусмотрена качественная отделка, встроенная мебель, системы кондиционирования, высокоскоростной интернет и кабельное ТВ.',
        galleryExterior: [
          //  '/img/objects/23/exterior/obj01.jpg',
          '/img/objects/26/exterior/obj1.jpg',
          '/img/objects/26/exterior/obj01.webp',
          '/img/objects/26/exterior/obj02.webp',
          '/img/objects/26/exterior/obj04.webp',
          '/img/objects/26/exterior/obj05.webp',
          '/img/objects/26/exterior/obj06.webp',
          '/img/objects/26/exterior/obj07.webp',
          '/img/objects/26/exterior/obj08.webp',
          '/img/objects/26/exterior/obj09.webp',
          '/img/objects/26/exterior/obj2.jpg',
          '/img/objects/26/exterior/obj3.webp',
          '/img/objects/26/exterior/obj4.webp',
          '/img/objects/26/exterior/obj5.webp',
          '/img/objects/26/exterior/obj6.webp',
          '/img/objects/26/exterior/obj7.webp',
          '/img/objects/26/exterior/obj8.webp',
          '/img/objects/26/exterior/obj9.webp',
        ],
        galleryInterior: [
          '/img/objects/26/interior/obj1.webp',
          '/img/objects/26/interior/obj2.webp',
          '/img/objects/26/interior/obj3.webp',
          '/img/objects/26/interior/obj4.webp',
          '/img/objects/26/interior/obj5.webp',
          '/img/objects/26/interior/obj6.webp',
        ],
        description: 'The Title Balcony — современный курортный beachfront-комплекс в 50 метрах от спокойного пляжа Nai Yang, одного из самых комфортных для купания мест на западном побережье Пхукета. Проект находится в закрытой предпродаже и станет значимой точкой развития района к моменту сдачи в 2027 году. Всего в комплексе предусмотрено десять малоэтажных корпусов с приватными зелёными зонами и общей инфраструктурой уровня пятизвёздочного отеля. Доступно 542 резиденции — от компактных студий до просторных пентхаусов с панорамными видами. Два корпуса полностью адаптированы для проживания с домашними животными.<br>Закрытая предпродажа предоставляет возможность зафиксировать наиболее выгодные цены на раннем этапе. Гибкие условия покупки, разнообразные планировки, сильная локация и премиальная инфраструктура делают The Title Balcony оптимальным выбором для тех, кто ищет резиденцию у моря для жизни, отдыха или инвестиций. ',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q4 2027',          // срок сдачи
          areaTotal: '26м² - 105м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'The Title'
        },
        amenities: [
         'Прямой выход к морю','Йога-зона','Детский аквапарк','24/7 охрана', 'Бассейн', 'Детская плошадка', ], 
        units: [
     {
    id: '1',
    title: '1-ые апартаменты',
    bedrooms: 1,
    bathrooms: 1,
    area: { min:34, max: 42 },         // м²
    floor: { min: 1, max: 5 },
    priceTHB: '7534000',
    // cover: '/img/objects/24/plans/unit.webp'
          },
               {
    id: '2',
    title: '2-ые апартаменты',
    bedrooms: 2,
    bathrooms: 2,
    area: { min:50, max: 90 },         // м²
    floor: { min: 1, max: 5 },
    priceTHB: '8067100',
    // cover: '/img/objects/24/plans/unit.webp'
          },
             {
    id: '3',
    title: 'Пентхаус',
    bedrooms: 3,
    bathrooms: 3,
    area: { min:90, max: 140 },         // м²
    floor: { min: 1, max: 5 },
    priceTHB: '26625000',
    // cover: '/img/objects/24/plans/unit.webp'
          },
             

],
        bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: 'Подписание договора (SPA / контракт)', type: 'percent', value: 25 },
    { id: 3, title: '1-й взнос (дальнейший платёж) (1-я часть по графику строительства / этап)', type: 'percent', value: 25 },
    { id: 4, title: '2-й взнос (2-я часть по графику строительства / этап)', type: 'percent', value: 25 },
    { id: 5, title: 'Финальный взнос (handover / передача)', type: 'percent', value: 25 },

            ],
        infrastructure: [
        { id: 1, title: 'До моря', time: '' },
        { id: 2, title: 'Пляжа Сурин', time: '' },
        { id: 3, title: 'Boat Avenue и Porto de Phuket', time: '' },
        { id: 4, title: 'HeadStart International School', time: '' },
        { id: 5, title: 'Bangkok Hospital Clinic Bangtao', time: '' },
  
    ]
      },
                       {
        id: 16,
        city: 'phuket',
        new: false,
        status: 'best',
        name: 'Ayana Heights Seaview Residence',
        priceDollars: '113 176$',
        priceTHB: 'THB 3 819 706',
        location: 'Бангтао, Пхукет',
        coordinates: [98.298470, 8.023388],
        firstImg: '/img/objects/16/start.webp',
        bgImg: '/img/objects/16/bgImg.webp',
        bigImg: '/img/objects/16/bigImg.webp',
        genImg: '/img/objects/16/genplan.webp',
        genDesc: 'Проект занимает территорию почти 5 гектаров и построен с минимальной плотностью застройки. Вас ждут не просто апартаменты — это целый приватный микромир с зелёными аллеями, атриум-садом площадью 8000 м², зонами отдыха и водопадом. Более 60% квартир открывают вид на Андаманское море, другие — на тропические холмы и садовые террасы.<br><br>Комплекс находится в нескольких минутах от пляжей Лаян и Бангтао, рядом — элитный район Laguna, гольф-клубы, торговые центры (Porto de Phuket, Boat Avenue), школы международного уровня и медицинские клиники. До международного аэропорта — 25 минут.',
        //         genLegend: [
        //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior: 'Благодаря каскадной застройке, даже с нижних уровней открываются захватывающие панорамы. Отдельные квартиры имеют прямой выход к бассейну, а пентхаусы — собственную террасу с бескрайним видом на закаты над морем.',
        galleryExterior: [
          '/img/objects/16/exterior/obj1.webp',
          '/img/objects/16/exterior/obj2.webp',
          '/img/objects/16/exterior/obj3.webp',
          '/img/objects/16/exterior/obj4.webp',
          '/img/objects/16/exterior/obj5.webp',
          '/img/objects/16/exterior/obj6.webp',
          '/img/objects/16/exterior/obj7.webp',
          '/img/objects/16/exterior/obj8.webp',
          '/img/objects/16/exterior/obj9.webp',
          '/img/objects/16/exterior/obj10.webp',
          '/img/objects/16/exterior/obj11.webp',
        ],
        galleryInterior: [
          '/img/objects/16/interior/obj1.webp',
          '/img/objects/16/interior/obj2.webp',
          '/img/objects/16/interior/obj3.webp',
          '/img/objects/16/interior/obj4.webp',
          '/img/objects/16/interior/obj5.webp',
          '/img/objects/16/interior/obj6.webp',
          '/img/objects/16/interior/obj7.webp',


        ],
        description: 'AYANA Heights — жизнь на вершине Пхукета.<br>Добро пожаловать в AYANA Heights, современный жилой комплекс, расположенный в одном из самых престижных районов Пхукета — Лаян. Это место, где архитектура, природа и комфорт соединяются в единую гармоничную концепцию, созданную для тех, кто ищет больше, чем просто квадратные метры.',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q4 2026',          // срок сдачи
          areaTotal: '37м² - 120м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1-3',                   // кол-во спален
          bathrooms: '1-3',
          developer: 'T.H. Group Phuket'
        },
        amenities: [
          'Близость к пляжу','Безопасный район', 'Вид на Андаманское море' , 'Вид на горы','Спа и релакс-зоны','Общий бассейн', 'Детская площадка', 'Лаунж-зоны', 'Детская площадка', 'Парковка', '24/7 охрана', 
        ], 
//         units: [
//      {
//     id: '1',
//     title: 'Односпальные апартаменты',
//     bedrooms: 1,
//     bathrooms: 1,
//     area: { min: 32, max: 42 },         // м²
//     floor: { min: 1, max: 7 },
//     // priceTHB: 4123000,
//     cover: '/img/objects/15/plans/unit1.png'
//           },
// ],
        bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 200000, currency: 'THB' },
    { id: 2, title: 'Подписание договора (SPA / Contract signing) — в течение ~20 дней после брони', type: 'percent', value: 35 },
    { id: 3, title: '2-й взнос (начало строительства) — при старте строительства (01/11/2024)', type: 'percent', value: 20 },
    { id: 4, title: '3-й взнос (Foundation completion) — после завершения фундамента (30/04/2025)', type: 'percent', value: 10 },
    { id: 5, title: '4-й взнос (Structural completion) — после завершения конструктивных работ (31/10/2025)', type: 'percent', value: 10 },
     { id: 6, title: '5-й взнос (Architecture work start) — при начале архитектурных / внутренних работ (01/03/2026)', type: 'percent', value: 15 },
      { id: 7, title: 'Финальный взнос (handover / передача квартиры)', type: 'percent', value: 10 },
            ],
   infrastructure: [
        { id: 1, title: 'Layan Beach', time: '' },
        { id: 2, title: 'Laguna Phuket', time: '' },
        { id: 3, title: 'Bang Tao Beach', time: '' },
        { id: 4, title: 'Boat Avenue', time: '' },
        { id: 5, title: 'Porto de Phuket', time: '' },
        { id: 6, title: 'Blue Tree Phuket', time: '' },
    ]
      },
          {
        id: 11,
        city: 'phuket',
        new: false,
        name: 'The Title - ViVi', 
        status: 'best',
        priceDollars: '96 340$', 
        priceTHB: 'THB 3 161 011', 
        location: 'Банг Тао, Пхукет',
        coordinates: [98.292248,7.990883],
        firstImg: '/img/objects/11/start.webp',
        bgImg: '/img/objects/11/bgImg.webp',
        bigImg: '/img/objects/11/bigImg.webp',
        genImg: '/img/objects/11/genplan.webp',
        genDesc: ' Комплекс состоит из восьми семиэтажных корпусов, предлагая более 700 квартир различных планировок — от уютных студий до просторных двухкомнатных апартаментов с высокими потолками и современной отделкой. Все квартиры полностью меблированы и оборудованы встроенными кухнями, кондиционерами и современной сантехникой.',
         //         genLegend: [
         //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior:'Инфраструктура комплекса удовлетворит любые потребности: несколько бассейнов, включая infinity-бассейн с зоной отдыха, фитнес-центр и SPA-зона, коворкинг, кинотеатр, детские игровые площадки и даже специальные территории для домашних питомцев. Безопасность обеспечивают охраняемая территория и видеонаблюдение. <br><br>Расположение Katabello рядом с популярными торговыми центрами Porto de Phuket и Boat Avenue, а также с ресторанами и развлекательными заведениями, создает максимальное удобство для жителей. Благодаря постоянному спросу на аренду недвижимости в этом районе, проект гарантирует высокую инвестиционную привлекательность с доходностью до 7-10% годовых.',
        galleryExterior: [
        '/img/objects/11/exterior/obj1.webp',
        '/img/objects/11/exterior/obj2.webp',
        '/img/objects/11/exterior/obj3.webp',
        '/img/objects/11/exterior/obj4.webp',
        '/img/objects/11/exterior/obj5.webp',
],
        galleryInterior: [
        '/img/objects/11/interior/obj0.webp',
        '/img/objects/11/interior/obj01.webp',
        '/img/objects/11/interior/obj02.webp',
        '/img/objects/11/interior/obj1.webp',
        '/img/objects/11/interior/obj2.webp',
        '/img/objects/11/interior/obj3.webp',
        '/img/objects/11/interior/obj4.webp',
     
],
        description: 'Современный Жилой Комплекс в Сердце Пляжа Ката. Расположенный всего в 300 метрах от знаменитого пляжа Ката, The Title Katabello представляет собой масштабный жилой комплекс, объединяющий стильный дизайн, комфорт и продуманную инфраструктуру. Этот проект идеально подходит как для жизни, так и для выгодных инвестиций в одном из самых востребованных районов Пхукета.<br><br>The Title Katabello — это возможность жить у моря в комфорте и стиле, а также надежно инвестировать в перспективный рынок недвижимости Пхукета.',
        // ✅ Параметры объекта
          specs: {
          readyDate: 'Q4 2027',          // срок сдачи
          areaTotal: '28м² - 37м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1-4',                   // кол-во спален
          bathrooms: '1-4',
          developer: 'AssetWise Public Company Limited'
        },
        amenities: [
          'Бассейн на крыше', 'Cпортзал', 'Спа', 'Кинотеатр','Игровая зона','Коворкинг', 'Парковка', 'Видеонаблюдение', 'Ресепшн', 
        ], 
        units: [
     {
    id: '1',
    title: '1 bedroom S',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 27, max: 28.09 },         // м²
    floor: { min: 1, max: 8 },
    priceTHB: 3500000,
    cover: '/img/objects/11/plans/unit1.webp'
  },
  {
    id: '2',
    title: '1 bedroom M',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 29, max: 30.45 },         // м²
    floor: { min: 1, max: 8 },
    priceTHB: 4000000,
    cover: '/img/objects/11/plans/unit2.webp'
  },
  {
    id: '3',
    title: '1 bedroom PLUS',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 46, max: 52.30 },         // м²
    floor: { min: 1, max: 0 },
    priceTHB: 6500000,
    cover: '/img/objects/11/plans/unit3.webp'
  },

],
        bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: 'Подписание договора (SPA / Contract signing)', type: 'percent', value: 25 },
    { id: 3, title: '1-й взнос (initial payment part 1) первая часть рассрочки до handover', type: 'percent', value: 25 },
    { id: 4, title: '2-й взнос (initial payment part 2)', type: 'percent', value: 25 },
    { id: 5, title: 'Финальный взнос (handover / transfer of ownership)', type: 'percent', value: 25 },

            ],
    infrastructure: [
      { id: 1, title: 'Пляж Bang Tao Beach', time: '700 метров' },
      { id: 2, title: 'ТЦ Porto de Phuket and Boat Avenue', time: '' },
      { id: 3, title: 'Maya Beach Club', time: '2-5 минуты' },
      { id: 4, title: 'Междунарожная школа', time: '' },
      { id: 5, title: 'Медицинский центр', time: '' },
  
    ]
      },
            {
        id: 31,
        city: 'phuket',
        new: true,
        status: 'best',
        name: 'Origin Place Centre',
        priceDollars: '91 592$',
        priceTHB: 'THB 2 920 000 ',
        location: 'Вичит, Пхукет',
        coordinates: [98.361450, 7.890849],
        firstImg: '/img/objects/31/start.webp',
        bgImg: '/img/objects/31/bgImg.webp',
        bigImg: '/img/objects/31/bigImg.png',
        genImg: '/img/objects/31/genplan.jpg',
        genDesc: 'Комплекс состоит из трёх жилых зданий и клубного дома, предлагая 587 квартир: студии и апартаменты с 1–2 спальнями. Все единицы сдаются с отделкой, встроенной мебелью и продуманными планировками. На территории созданы зоны для отдыха и работы: большой бассейн, фитнес-центр, сауна, коворкинг, зелёные пространства, детская комната, подземная парковка, охрана 24/7 и Wi-Fi. Инфраструктура рядом включает Central Phuket, Bangkok Hospital, HeadStart International School и другие ключевые объекты.',
        descriptionExterior: 'Origin Place Centre Phuket отличается высоким инвестиционным потенциалом благодаря растущему спросу на аренду в центральной части острова. Стоимость квартир начинается от 2.96 млн бат, завершение строительства прогнозируется на первый квартал 2027 года. Стильная архитектура, функциональный дизайн, клубные удобства и абсолютная доступность города делают этот проект выгодным выбором и для личного проживания, и для долгосрочных вложений.',
        galleryExterior: [
          '/img/objects/31/exterior/obj1.webp',
          '/img/objects/31/exterior/obj2.webp',
          '/img/objects/31/exterior/obj3.jpg',
          '/img/objects/31/exterior/obj4.jpg',
          '/img/objects/31/exterior/obj5.jpg',
                        
        ],
        galleryInterior: [
          '/img/objects/31/interior/obj1.jpg',
          '/img/objects/31/interior/obj2.jpg',
          '/img/objects/31/interior/obj3.jpg',
          '/img/objects/31/interior/obj4.jpg',
        ],
        description: 'Origin Place Centre Phuket — современный жилой комплекс в самом центре Пхукета, созданный для тех, кто ценит комфорт, стиль и практичность. Проект расположен в районе Муанг, в шаговой доступности от Central Phuket, крупных бизнес-центров, международных школ и частных госпиталей. До пляжа Патонг — всего 20 минут, до аэропорта — около 30 минут, что делает локацию идеальной как для жизни, так и для инвестиций.',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q1 2027',          // срок сдачи
          areaTotal: '26м² - 75м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'Origin Property PCL'
        },
        amenities: [
          'Большой бассейн', 'Современный фитнес-центр', 'Коворкинг-зоны', 'Сад и зона для отдыха', 'Сауна и паровая комната', 'Подземная парковка и зарядные станции для электромобилей', '24/7 охрана и видеонаблюдение', 'Wi-Fi на территории', 'Бассейн', ' Парк', 'Тренажерный зал',],
        // units: [
        //   {
        //     id: '1',
        //     title: 'Студия',
        //     bedrooms: 1,
        //     bathrooms: 1,
        //     area: { min: 26, max: 26 },         // м²
        //     floor: { min: 1, max: 8 },
        //     // priceTHB: '3 905 000',
        //     // cover: '/img/objects/29/plans/unit1.jpg'
        //   },
        //   {
        //     id: '2',
        //     title: '1-ые апартаменты',
        //     bedrooms: 1,
        //     bathrooms: 1,
        //     area: { min: 30, max: 40.65 },         // м²
        //     floor: { min: 1, max: 8 },
        //     // priceTHB: '3 062 000',
        //     // cover: '/img/objects/29/plans/unit2.jpg'
        //   },

        //   {
        //     id: '4',
        //     title: '2-ые апартаменты',
        //     bedrooms: 1,
        //     bathrooms: 1,
        //     area: { min: 74.85, max: 74.85 },         // м²
        //     floor: { min: 1, max: 8 },
        //     // priceTHB: '5 471 000',
        //     // cover: '/img/objects/29/plans/unit4.jpg'
        //   },
            

        // ],
        bookingConditions: [
          { id: 1, title: 'ДРезервация (депозит) при бронировании', type: 'amount', value: 100000, currency: 'THB' },
          { id: 2, title: '7–14 дней после бронирования (подписание SPA)', type: 'percent', value: 15 },
          { id: 3, title: '30 дней после контракта', type: 'percent', value: 15 },
          { id: 4, title: 'Финальный взнос при handover / передаче квартиры', type: 'percent', value: 70 },
     
        ],
    infrastructure: [
        { id: 1, title: 'Central Phuket / Central Floresta', time: '' },
        { id: 2, title: 'Bangkok Hospital Phuket', time: '' },
        { id: 3, title: 'Vachira Phuket Hospital', time: '' },
        { id: 4, title: 'Makro / Big C / Lotus’s', time: '' },
        { id: 5, title: 'HeadStart International School', time: '' },
        { id: 6, title: 'Торговые зоны и услуги Чалонг / Phuket Town', time: '' },
    ]
      },
      // 4
                                                                           {
        id: 30,
        city: 'phuket',
        new: true,
        status: 'best',
        name: 'So Origin Kata Phuket',
        priceDollars: '122 839$',
        priceTHB: 'THB 3 920 000 ',
        location: 'Ката, Пхукет',
        coordinates: [98.304721, 7.825805],
        firstImg: '/img/objects/30/start.webp',
        bgImg: '/img/objects/30/bgImg.webp',
        bigImg: '/img/objects/30/bigImg.webp',
        genImg: '/img/objects/30/genplan.jpg',
        genDesc: 'So Origin Kata Phuket - современный кондоминиум в сердце пляжа Ката.Откройте для себя гармонию современного комфорта и умиротворяющей природы на Пхукете. SO Origin Kata Phuket расположен всего в 500–950 метрах от пляжа Ката и в шаговой доступности от Kata Night Plaza, SC Plaza и Karon Shopping Mall — всё необходимое для активной и комфортной жизни у вас под рукой.',
        descriptionExterior: 'Удобства SO Origin Kata Phuket создают атмосферу курортного комфорта и продуманного образа жизни. Жильцам доступны бассейны, фитнес-зал, сауна, спа-процедуры, паровые бани, лаундж-зоны и детские площадки. Для удалённой работы предусмотрено современное коворкинг-пространство, а для вечернего отдыха — терраса для наблюдения за закатами. Круглосуточная охрана обеспечивает безопасность, а все квартиры продаются с премиальной отделкой, мебелью и техникой, что делает комплекс привлекательным не только для проживания, но и как объект инвестиций с высоким потенциалом аренды.',
        galleryExterior: [
          '/img/objects/30/exterior/obj1.jpg',
          '/img/objects/30/exterior/obj2.jpg',
          '/img/objects/30/exterior/obj3.jpg',            
        ],
        galleryInterior: [
           '/img/objects/30/interior/obj1.jpg',
          '/img/objects/30/interior/obj2.jpg',
          '/img/objects/30/interior/obj3.jpg',
          '/img/objects/30/interior/obj4.jpg',
        ],
        description: '',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q4 2027',          // срок сдачи
          areaTotal: '26м² - 75м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'Origin Property PCL'
        },
        amenities: [
         'Встроенный пакет техники','Вид на город','Вид на бассейн', ' Кровать большая','Полная мебелировка','Текстиль',' Сауна-хамам','Парковка','Бассейн',' Парк', 'Тренажерный зал', ], 
        units: [
     {
    id: '1',
    title: 'Студия',
    bedrooms: 1,
    bathrooms: 1,
    area: { min:26, max: 26 },         // м²
    floor: { min: 1, max: 8 },
    // priceTHB: '3 905 000',
    // cover: '/img/objects/29/plans/unit1.jpg'
          },
               {
    id: '2',
    title: '1-ые апартаменты',
    bedrooms: 1,
    bathrooms: 1,
    area: { min:30, max: 40.65 },         // м²
    floor: { min: 1, max: 8 },
    // priceTHB: '3 062 000',
    // cover: '/img/objects/29/plans/unit2.jpg'
          },

                          {
    id: '4',
    title: '2-ые апартаменты',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 74.85, max: 74.85 },         // м²
    floor: { min: 1, max: 8 },
    // priceTHB: '5 471 000',
    // cover: '/img/objects/29/plans/unit4.jpg'
          },
            

],
        bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: 'Подписание договора (SPA) 7–14 дней после бронирования', type: 'percent', value: 15 },
    { id: 3, title: '30 дней после подписания договора', type: 'percent', value: 15 },
    { id: 4, title: 'Финальный взнос при handover / передаче квартиры:', type: 'percent', value: 70 },

            ],
      infrastructure: [
        { id: 1, title: 'Kata Beach', time: '' },
        { id: 2, title: 'Karon Beach', time: '' },
        { id: 3, title: 'Kata Night Plaza', time: '' },
        { id: 4, title: 'SC Plaza / Karon Shopping Mall', time: '' },
        { id: 5, title: 'Surf House Phuket (пляж Ката)', time: '' },
        { id: 6, title: 'Кафе и рестораны района KATA / KARON', time: '' },
        { id: 7, title: 'Wat Kitti Sangkharam (Kata Temple)', time: '' },
    ]
      },
        ///////////////////////////   

  ///////////////////////////   
          {
        id: 6,
        city: 'phuket',
        new: false,
        name: 'Next Point Condominium', //имя 
        priceDollars: '98 069$', //цена в долларах
        priceTHB: 'THB 3 150 000', //цена в батах
        location: 'Раваи, Пхукет',
        coordinates: [98.331162,7.803275],
        firstImg: '/img/objects/6/start.webp',
        bgImg: '/img/objects/6/bgImg.webp',
        bigImg: '/img/objects/6/bigImg.webp',
        genImg: '/img/objects/6/genplan.webp',
        genDesc: 'На территории площадью 0.8 га расположено 379 современных юнитов — от студий до просторных апартаментов с одной спальней. Подземный паркинг на 42% машиномест оснащён зарядками для электрокаров. Для удобства резидентов — мобильное приложение и русско- и англоговорящий персонал. ',
         //         genLegend: [
         //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior:'В комплексе есть инфинити-бассейн на крыше с лаунж-зоной, фитнес-зал (200 кв.м.), СПА с сауной и хамамом, детский клуб с видеонаблюдением, кинотеатр и коворкинг.',
        galleryExterior: [
        '/img/objects/6/exterior/obj1.webp',
        '/img/objects/6/exterior/obj2.webp',
        '/img/objects/6/exterior/obj3.webp',
        '/img/objects/6/exterior/obj4.webp',
        '/img/objects/6/exterior/obj5.webp',
        '/img/objects/6/exterior/obj6.webp',
        '/img/objects/6/exterior/obj7.webp',
        '/img/objects/6/exterior/obj8.webp',
],
        galleryInterior: [
        '/img/objects/6/interior/obj1.webp',
        '/img/objects/6/interior/obj2.webp',
        '/img/objects/6/interior/obj3.webp',
        '/img/objects/6/interior/obj4.webp',
],
        description: 'Next Point Condominium — инновационный жилой комплекс в экологичном районе Раваи на юге Пхукета. Уникальная X-образная архитектура и панорамные окна обеспечивают великолепные виды на тропическую природу и море — 90% квартир имеют обзор, а в зданиях B и C вид на море открывается с третьего этажа.',
        // ✅ Параметры объекта
          specs: {
          readyDate: '2027',          // срок сдачи
          areaTotal: '35м² - 270м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Cовременный ремонт',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1-4',                   // кол-во спален
          bathrooms: '1-2',
          developer: 'SOUTH POINT GROUP'
        },
        amenities: [
          'Инфинити-бассейн на крыше', 'Лаунж-зона', 'Фитнес-зал (200 кв.м.)', 'СПА с сауной и хамамом', 'Детский клуб с видеонаблюдение', 'Кинотеатр', 'Коворкинг', 
        ], 
units: [
  {
    id: '1',
    title: 'Cтудия',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 35, max: 51 },         // м²
    floor: { min: 2, max: 6 },
    priceTHB: 10800000,
    // опционально:
    priceUSD: 120000,
    cover: '/img/objects/6/plans/unit1.svg'
  },
  {
    id: '2',
    title: '1-комнатные апартаменты',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 50.4, max: 40.5 },
    floor: { min: 2, max: 7 },
    // priceTHB: 18315000,
    cover: '/img/objects/6/plans/unit2.webp'
  },
  {
    id: '4',
    title: '2км. апартаменты',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 70, max: 104.6 },
    floor: { min: 6, max: 6 },
    // priceTHB: 140925000,
    cover: '/img/objects/6/plans/unit3.webp'
  },
   {
    id: '5',
    title: 'Угловые апартаменты',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 48.7, max: 114.22 },
    floor: { min: 6, max: 6 },
    // priceTHB: 140925000,
    cover: '/img/objects/6/plans/unit4.webp'
  },
   {
    id: '6',
    title: 'Пентхаус',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 131.85, max: 269.75 },
    floor: { min: 6, max: 6 },
    // priceTHB: 140925000,
    cover: '/img/objects/6/plans/unit5.webp'
  }
],
        bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: 'Подписание договора / SPA (down payment) ~14–30 дней после брони', type: 'percent', value: 30 },
    { id: 3, title: 'Оплачивается до handover / при завершении строительства / transfer ownership.', type: 'percent', value: 70 },

            ],
      infrastructure: [
        { id: 1, title: 'Rawai Beach', time: '' },
        { id: 2, title: 'Nai Harn Beach', time: '' },
        { id: 3, title: 'Yanui Beach', time: '' },
        { id: 4, title: 'Promthep Cape', time: '' },
        { id: 5, title: 'Windmill Viewpoint', time: '' },
        { id: 6, title: 'Chalong Pier', time: '' },

    ]
      },
                 {
        id: 35,
        city: 'phuket',
        new: false,
        name: 'Dcondo Cove',
        priceDollars: '76 524$',
        priceTHB: 'THB 2 435 000',
        location: 'Катху, Патонг',
        coordinates: [98.348482, 7.911320],
        firstImg: '/img/objects/35/start.webp',
        bgImg: '/img/objects/35/bgImg.webp',
        bigImg: '/img/objects/35/bigImg.webp',
        genImg: '/img/objects/35/genplan.webp',
        genDesc: 'Dcondo Cove находится в идеальном месте, всего в 15 минутах от пляжа Патонг и рядом с ключевыми точками острова: торговыми центрами Central Festival и Tesco Lotus, полями для гольфа и главными магистралями. Это обеспечит вам удобный доступ ко всем популярным районам и развлечениям, а до международного аэропорта Пхукета всего 40 минут.',
        descriptionExterior: 'Комплекс состоит из четырёх 8-этажных зданий, предлагающих 862 квартиры, включая студии и апартаменты с 1 и 2 спальнями. Площадь жилых помещений варьируется от 28 м² до 52 м². Каждая квартира снабжена частичной мебелировкой, а также возможностью выбора отделки, чтобы вы могли сделать ваше жильё именно таким, как хотите. Все квартиры имеют балкон, откуда открывается живописный вид на территорию комплекса и природные окрестности.',
        galleryExterior: [
          '/img/objects/35/exterior/obj1.jpg',
          '/img/objects/35/exterior/obj2.jpg',
          '/img/objects/35/exterior/obj3.jpg',
          '/img/objects/35/exterior/obj4.jpg',
          '/img/objects/35/exterior/obj5.jpg',
                        
        ],
        galleryInterior: [
          '/img/objects/35/interior/obj1.jpg',
          '/img/objects/35/interior/obj2.jpg',
          '/img/objects/35/interior/obj3.jpg',
          '/img/objects/35/interior/obj4.jpg',
        ],
        description: 'Dcondo Cove Phuket – это новый жилой комплекс премиум-класса, расположенный в сердце Пхукета, в районе Кату, который идеально сочетает комфорт, доступность и стратегическое расположение. Этот проект от знаменитого девелопера Sansiri гарантирует высокое качество и привлекательность как для проживания, так и для инвестиций. С завершением строительства в июне 2027 года, Dcondo Cove представляет собой уникальную возможность стать частью роскошной жизни на Пхукете.<br>Этот комплекс подойдёт как для молодых профессионалов, ищущих удобное жильё в центре Пхукета, так и для семей, которым важно иметь доступ к лучшим школам, медицинским учреждениям и развлекательным зонам острова. Также это отличный выбор для инвесторов, которые хотят иметь недвижимость в одном из самых динамично развивающихся регионов Таиланда.  ',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q4 2027',          // срок сдачи
          areaTotal: '25м² - 52м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'Sansiri '
        },
        amenities: [
          'Бассейн с джакузии', 'Фитнес-центр и йога-зона', 'Коворкинг-пространство', 'Зона отдыха с ландшафтными садами', 'Прачечная', 'Парковка с зарядными станциями ', 'Круглосуточная охрана ',  ],
        units: [
          {
            id: '1',
            title: '1 Bedroom',
            bedrooms: 1,
            bathrooms: 1,
            area: { min: 28, max: 28 },         // м²
            floor: { min: 1, max: 8 },
            priceTHB: '2435000',
            cover: '/img/objects/35/plans/unit1.jpg'
          },
          {
            id: '2',
            title: 'Cтудия',
            bedrooms: 2,
            bathrooms: 2,
            area: { min: 25, max: 25 },         // м²
            floor: { min: 1, max: 8 },
            priceTHB: '2455000',
             cover: '/img/objects/35/plans/unit2.jpg'
          },

          {
            id: '3',
            title: '2Bedroom ',
            bedrooms: 2,
            bathrooms: 2,
            area: { min: 51, max: 51 },         // м²
            floor: { min: 1, max: 8 },
            priceTHB: '4576000',
            cover: '/img/objects/35/plans/unit3.jpg'
          },
           {
            id: '4',
            title: '1Bedroom ',
            bedrooms: 1,
            bathrooms: 1,
            area: { min: 34, max: 34 },         // м²
            floor: { min: 1, max: 8 },
            priceTHB: '3121000',
            cover: '/img/objects/35/plans/unit4.jpg'
          },
        
            

        ],
        bookingConditions: [
          { id: 1, title: 'Депозит бронирования для 1-bed юнита', type: 'amount', value: 100000, currency: 'THB' },
          { id: 2, title: 'Депозит бронирования для 2-bed юнита', type: 'amount', value: 200000, currency: 'THB' },
          { id: 3, title: 'В течение ~ 2 недель после депозита (подписание SPA / Sales)', type: 'percent', value: 30 },
          { id: 4, title: 'В середине строительства (примерно в июне 2026)', type: 'percent', value: 20 },
          { id: 5, title: 'При завершении проекта (около июля 2027)', type: 'percent', value: 50 },

        ],
 infrastructure: [
        { id: 1, title: 'Patong Beach', time: '' },
        { id: 2, title: 'Loch Palm Golf Club', time: '' },
        { id: 3, title: 'Red Mountain Golf Club', time: '' },
        { id: 4, title: 'Tesco Lotus / Villa Market', time: '' },
        { id: 5, title: 'Удобный выезд в сторону Патонга и Пхукет-тауна', time: '' },
    ]
      },
            {
        id: 5,
        city: 'phuket',
        new: false,
        name: 'HYTHE by botanica', //имя 
        priceDollars: '329 052$', //цена в долларах
        priceTHB: 'THB 10 800 000', //цена в батах
        location: 'Банг Тао, Пхукет',
        coordinates: [98.303927,8.016068],
        firstImg: '/img/objects/5/start.webp',
        bgImg: '/img/objects/5/bgImg.webp',
        bigImg: '/img/objects/5/bigImg.webp',
        genImg: '/img/objects/5/genplan.webp',
        genDesc: 'Каждый аспект HYTHE тщательно продуман, чтобы создать оазис роскоши, органично сочетающийся с пышной зеленью, частным озером и бассейнами в курортном стиле.',
         //         genLegend: [
         //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior:'На территории площадью 0.8 га расположено 379 современных юнитов — от студий до просторных апартаментов с одной спальней. Подземный паркинг на 42% машиномест оснащён зарядками для электрокаров. Для удобства резидентов — мобильное приложение и русско- и англоговорящий персонал.',
        galleryExterior: [
         '/img/objects/5/exterior/obj4.webp',
        '/img/objects/5/exterior/obj6.webp',
        '/img/objects/5/exterior/obj5.webp',
        '/img/objects/5/exterior/obj1.webp',
        '/img/objects/5/exterior/obj2.webp',
        '/img/objects/5/exterior/obj3.webp',
],
        galleryInterior: [
        '/img/objects/5/interior/obj1.webp',
        '/img/objects/5/interior/obj2.webp',
          '/img/objects/5/interior/obj3.webp',
         '/img/objects/5/interior/obj4.webp',
        '/img/objects/5/interior/obj5.webp',
          '/img/objects/5/interior/obj6.webp',
         '/img/objects/5/interior/obj7.webp',
      
],
        description: 'Next Point Condominium — инновационный жилой комплекс в экологичном районе Раваи на юге Пхукета. Уникальная X-образная архитектура и панорамные окна обеспечивают великолепные виды на тропическую природу и море — 90% квартир имеют обзор, а в зданиях B и C вид на море открывается с третьего этажа.',
        // ✅ Параметры объекта
          specs: {
          readyDate: 'Q4 2025',          // срок сдачи
          areaTotal: 'от 60 до 716м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Cовременный ремонт',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1-4',                   // кол-во спален
          bathrooms: '1-2',
          developer: 'Botanica Luxury Phuket'
        },
        amenities: [
          'Фитнес-центр с видом на зелень', 'Коворкинги', 'Беговые дорожки', 'Библиотека ', 'Спа', 'Детская площадка', 'Рестораны и кафе', 'Магазины'
        ], 
units: [
  {
    id: '1',
    title: '1-комн.кв',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 60, max: 60 },         // м²
    floor: { min: 2, max: 6 },
    priceTHB: 10800000,
    // опционально:
    priceUSD: 120000,
    // cover: '/img/objects/4/plans/unit1.webp'
  },
  {
    id: '2',
    title: '2-комн.кв',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 88, max: 88 },
    floor: { min: 2, max: 7 },
    priceTHB: 18315000,
    // cover: '/img/objects/4/plans/unit2.png'
  },
  {
    id: '3',
    title: '3-комн.кв',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 127, max: 186 },
    floor: { min: 3, max: 6 },
    priceTHB: 27146250,
    // cover: '/img/objects/4/plans/unit3.png'
  },
  {
    id: '4',
    title: '4-комн.кв',
    bedrooms: 4,
    bathrooms: 4,
    area: { min: 702, max: 702 },
    floor: { min: 6, max: 6 },
    priceTHB: 140925000,
    // cover: '/img/objects/4/plans/unit3.png'
  }
],
        bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 200000, currency: 'THB' },
    { id: 2, title: '1-й взнос (подписание договора / SPA)', type: 'percent', value: 35 },
    { id: 3, title: '2-й взнос (после фундамента)', type: 'percent', value: 20 },
    { id: 4, title: '3-й взнос (конструкция / крыша)', type: 'percent', value: 20 },
    { id: 5, title: '4-й взнос (интерьер / отделка)', type: 'percent', value: 10 },
    { id: 6, title: 'После установки стен, окон, плитки, потолков и работ по отделке', type: 'percent', value: 10 }
            ],
      infrastructure: [
        { id: 1, title: 'Bang Tao Beach', time: '' },
        { id: 2, title: 'Layan Beach', time: '' },
        { id: 3, title: 'Boat Avenue', time: '' },
        { id: 4, title: 'Porto de Phuket', time: '' },
        { id: 5, title: 'Laguna Phuket', time: '' },
        { id: 6, title: 'Blue Tree Phuket', time: '' },

    ]
      },
                     {
        id: 15,
        city: 'phuket',
        new: false,
        name: 'The Ozone Signature',
        priceDollars: '117 926$',
        priceTHB: 'THB 3 980 000',
        location: 'Бангтао, Пхукет',
        coordinates: [98.298994, 8.004682],
        firstImg: '/img/objects/15/start.webp',
        bgImg: '/img/objects/15/bgImg.webp',
        bigImg: '/img/objects/15/bigImg.webp',
        genImg: '/img/objects/15/genplan.webp',
        genDesc: 'Комплекс спроектирован как сочетание современного городского стиля и курортной атмосферы. Лаконичная архитектура, продуманные детали интерьеров, панорамные окна и вид на зелёные ландшафты создают ощущение уюта и лёгкости.',
        //         genLegend: [
        //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior: 'В инфраструктуру входят: два бассейна (в том числе — в стиле лагуны), теннисные корты и беговая дорожка, фитнес-центры с современным оборудованием, рестораны и кафе, коворкинг и детские зоны, озеленённые лаундж-пространства и оазис-сад, круглосуточная охрана и подземная парковка. Поблизости находятся топовые отели Banyan Tree, Dusit Thani, Mövenpick, а также пляжные клубы Catch, Xana, Maya, торговые центры Boat Avenue и Porto de Phuket, международные школы, медицинские центры и СПА.<br><br>Поблизости находятся топовые отели Banyan Tree, Dusit Thani, Mövenpick, а также пляжные клубы Catch, Xana, Maya, торговые центры Boat Avenue и Porto de Phuket, международные школы, медицинские центры и СПА.<br><br>В продаже — квартиры с 1, 2 и 3 спальнями (площадь от 32 до 111 м²), каждая из которых сдается с полной отделкой и меблировкой, включая европейские кухни, премиальные материалы и дизайнерские решения в интерьере.',
        galleryExterior: [
          '/img/objects/15/exterior/obj1.webp',
          '/img/objects/15/exterior/obj2.webp',
          '/img/objects/15/exterior/obj3.webp',
          '/img/objects/15/exterior/obj4.webp',
          '/img/objects/15/exterior/obj5.jpg',
          '/img/objects/15/exterior/obj6.webp',
          '/img/objects/15/exterior/obj7.webp',
        ],
        galleryInterior: [
          '/img/objects/15/interior/obj0.webp',
          '/img/objects/15/interior/obj1.webp',
          '/img/objects/15/interior/obj3.webp',
          '/img/objects/15/interior/obj4.webp',
          '/img/objects/15/interior/obj2.webp',
          '/img/objects/15/interior/obj7.webp',


        ],
        description: 'Ozone Signature — стиль, энергия и перспективы в сердце Банг Тао. Ozone Signature — это современный жилой комплекс бизнес-класса в одном из самых перспективных районов Пхукета — Банг Тао, всего в 5 минутах от пляжа и в окружении всей курортной инфраструктуры: гольф-клубов, пляжных клубов, ресторанов, отелей и торговых центров. <br>Ozone Signature — это проект для тех, кто ценит современную эстетику, комфорт и разумные инвестиции в быстроразвивающемся районе Пхукета.',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q4 2026',          // срок сдачи
          areaTotal: '32м² - 122м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1-3',                   // кол-во спален
          bathrooms: '1-3',
          developer: 'TION STAR GROUP'
        },
        amenities: [
          'Много магазинов','Курортные бассейны', 'Современный фитнес-зал' , 'Спа и релакс-зоны','Ресторан и бар у бассейна', 'Детская площадка', 'Лаунж-зоны', 'Детская площадка', 'библиотека', 'Парковка', '24/7 охрана', 
        ], 
        units: [
     {
    id: '1',
    title: 'Односпальные апартаменты',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 32, max: 42 },         // м²
    floor: { min: 1, max: 7 },
    // priceTHB: 4123000,
    cover: '/img/objects/15/plans/unit1.png'
          },
            {
    id: '2',
    title: 'Двухспальные апартаменты',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 56, max: 64 },         // м²
    floor: { min: 1, max: 7 },
    // priceTHB: 7342000,
    cover: '/img/objects/15/plans/unit2.png'
          },
                {
    id: '3',
    title: 'Трехспальные апартаменты',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 111, max: 111 },         // м²
    floor: { min: 1, max: 7 },
    // priceTHB: 7342000,
    cover: '/img/objects/15/plans/unit3.png'
          },
],
        bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: '1-й взнос — в течение 14 дней после бронирования (подписание договора / SPA)', type: 'percent', value: 35 },
    { id: 3, title: '2-й взнос — при начале строительства', type: 'percent', value: 25 },
    { id: 4, title: '3-й взнос — по завершении строительства (construction completion).', type: 'percent', value: 25 },
    { id: 5, title: '4-й взнос — когда внутренние отделочные работы завершены (interior completion)', type: 'percent', value: 10 },
    { id: 6, title: 'Финальный взнос — при handover / передаче собственности', type: 'percent', value: 5 }
            ],
  infrastructure: [
        { id: 1, title: 'Bang Tao Beach', time: '' },
        { id: 2, title: 'Laguna Phuket', time: '' },
        { id: 3, title: 'Bang Tao Beach', time: '' },
        { id: 4, title: 'Porto de Phuket', time: '' },
        { id: 5, title: 'Blue Tree Phuket', time: '' },
        { id: 6, title: 'Catch Beach Club', time: '' },
    ]
      },
                 {
        id: 14,
        city: 'phuket',
        new: false,
        name: 'The Ozone Oasis Condominium',
        priceDollars: '128 000$',
        priceTHB: 'THB 4 320 000',
        location: 'Бангтао, Пхукет',
        coordinates: [98.298994, 8.004682],
        firstImg: '/img/objects/14/start.webp',
        bgImg: '/img/objects/14/bgImg.webp',
        bigImg: '/img/objects/14/bigImg.webp',
        genImg: '/img/objects/14/genplan.webp',
        genDesc: 'Проект состоит из трёх современных зданий по 8 этажей, где размещено 328 апартаментов с 1, 2 и 3 спальнями. Просторные планировки, панорамные окна, природные виды на горы и зелёные зоны делают каждую квартиру светлой и уютной. Площади варьируются от 36 до 122 м² — оптимально как для жизни, так и для инвестиций. ',
        //         genLegend: [
        //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior: 'В инфраструктуру входят: два бассейна (в том числе — в стиле лагуны), теннисные корты и беговая дорожка, фитнес-центры с современным оборудованием, рестораны и кафе, коворкинг и детские зоны, озеленённые лаундж-пространства и оазис-сад, круглосуточная охрана и подземная парковка. Поблизости находятся топовые отели Banyan Tree, Dusit Thani, Mövenpick, а также пляжные клубы Catch, Xana, Maya, торговые центры Boat Avenue и Porto de Phuket, международные школы, медицинские центры и СПА.<br><br>Поблизости находятся топовые отели Banyan Tree, Dusit Thani, Mövenpick, а также пляжные клубы Catch, Xana, Maya, торговые центры Boat Avenue и Porto de Phuket, международные школы, медицинские центры и СПА.',
        galleryExterior: [
          '/img/objects/14/exterior/obj1.webp',
          '/img/objects/14/exterior/obj2.webp',
          '/img/objects/14/exterior/obj3.webp',
          '/img/objects/14/exterior/obj4.webp',
          '/img/objects/14/exterior/obj5.webp',
          '/img/objects/14/exterior/obj6.webp',
          '/img/objects/14/exterior/obj7.webp',
          '/img/objects/14/exterior/obj8.webp',
          '/img/objects/14/exterior/obj9.webp',
          '/img/objects/14/exterior/obj10.webp',
          '/img/objects/14/exterior/obj11.webp',
          '/img/objects/14/exterior/obj13.webp',
        ],
        galleryInterior: [
          '/img/objects/14/interior/obj1.webp',
          '/img/objects/14/interior/obj2.webp',
          '/img/objects/14/interior/obj3.webp',
          '/img/objects/14/interior/obj5.webp',
          '/img/objects/14/interior/obj6.webp',
          '/img/objects/14/interior/obj7.webp',
          '/img/objects/14/interior/obj8.webp',
        ],
        description: 'Ozone Oasis – современный ритм жизни в самом сердце Банг Тао. <br> The Ozone Oasis Phuket — это жилой комплекс премиум-класса, расположенный в элитном районе Лагуна, в окружении природы, гольф-полей и инфраструктуры мирового уровня. Всего в 5 минутах езды — знаменитый пляж Банг Тао с протяжённой береговой линией, ресторанами, клубами и развлечениями.',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q1/Q2 2026',          // срок сдачи
          areaTotal: '36м² - 122м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1-3',                   // кол-во спален
          bathrooms: '1-3',
          developer: 'TION STAR GROUP'
        },
        amenities: [
          'Оазисный сад', 'Просторные бассейны' , 'Беговая дорожка','Теннисный корт', 'Тренажерный зал', 'Бассейн', 'Детская площадка', 'Виды на поля для гольфа', 'Вид на горный ландшафт', 
        ], 
        units: [
     {
    id: '1',
    title: 'Односпальные апартаменты A',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 36, max: 36 },         // м²
    floor: { min: 1, max: 8 },
    // priceTHB: 4123000,
    cover: '/img/objects/14/plans/unit1.webp'
          },
            {
    id: '2',
    title: 'Односпальные апартаменты B',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 40, max: 40 },         // м²
    floor: { min: 1, max: 8 },
    // priceTHB: 7342000,
    cover: '/img/objects/14/plans/unit2.webp'
          },
],
          bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: '1-й взнос — в течение 14 дней после бронирования (подписание договора / SPA)', type: 'percent', value: 35 },
    { id: 3, title: '2-й взнос — при начале строительства', type: 'percent', value: 25 },
    { id: 4, title: 'По завершении конструкции / бетонных работ (internal finishing / interior completion)', type: 'percent', value: 25 },
    { id: 5, title: '4-й взнос — когда внутренние отделочные работы завершены (interior completion)', type: 'percent', value: 10 },
    { id: 6, title: 'Финальный взнос — при handover / передаче собственности', type: 'percent', value: 5 }
            ],
  infrastructure: [
        { id: 1, title: 'Bang Tao Beach', time: '' },
        { id: 2, title: 'Laguna Phuket', time: '' },
        { id: 3, title: 'Bang Tao Beach', time: '' },
        { id: 4, title: 'Boat Avenue', time: '' },
        { id: 5, title: 'Porto de Phuket', time: '' },
        { id: 6, title: 'Blue Tree Phuket', time: '' },
    ]
      },
                {
        id: 36,
        city: 'phuket',
        new: false,
        name: 'The Forest Patong Residences',
        priceDollars: '289 126$',
        priceTHB: 'THB  9 200 000',
        location: 'Патонг, Пхукет',
        coordinates: [98.286367, 7.884748],
        firstImg: '/img/objects/36/start.webp',
        bgImg: '/img/objects/36/bgImg.webp',
        bigImg: '/img/objects/36/bigImg.webp',
        genImg: '/img/objects/36/genplan.jpg',
        genDesc: 'Резиденция находится на склоне холма, окруженного национальным заповедником Кхао Пхра Тхео. Это гарантирует абсолютное спокойствие и живописные виды, при этом все важные объекты — пляж Патонг, торговые центры (Jungceylon, Central Patong), рестораны и развлекательные комплексы — всего в нескольких минутах езды. Дорога до международного аэропорта Пхукета займет около 45 минут, что добавляет удобства для владельцев недвижимости, а близость к основным туристическим маршрутам делает объект привлекательным для аренды.',
        descriptionExterior: 'The Forest Patong Residence включает 320 квартир в 13 пятиэтажных зданиях. Каждая квартира спроектирована с учетом потребностей современных жителей и инвесторов, предлагая различные планировки: от уютных студий до просторных квартир с одной или двумя спальнями, а также пентхаусы с роскошными видами. Многие квартиры оснащены частным бассейном, что является идеальным решением для тех, кто ценит уединение и комфорт в своей личной резиденции.',
        galleryExterior: [
          '/img/objects/36/exterior/obj1.jpg',
          '/img/objects/36/exterior/obj2.jpg',
          '/img/objects/36/exterior/obj3.jpg',
                        
        ],
        galleryInterior: [
          '/img/objects/36/interior/obj1.jpg',
          '/img/objects/36/interior/obj2.jpg',
          '/img/objects/36/interior/obj1.jpg',
          '/img/objects/36/interior/obj2.jpg',
        ],
        description: 'The Forest Patong Residence – Жилой комплекс премиум-класса на Пхукете.The Forest Patong Residence — это уникальный проект, расположенный в самом сердце Пхукета, всего в нескольких минутах от знаменитого пляжа Патонг. Он предлагает идеальное сочетание уединения среди природы и удобства близости к городской инфраструктуре и туристическим объектам. Это престижный кондоминиум, который гарантирует своим жильцам не только комфорт, но и эксклюзивные виды на тропические леса, горы и Андаманское море. ',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q4 2026',          // срок сдачи
          areaTotal: '44м² - 109м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'Above Patong Residence Co.,Ltd',
        },
        amenities: [
          'Infinity-бассейн с видом на море', 'Современный фитнес-центр', 'Зона для йоги и релаксации', 'Зона отдыха с ландшафтными садами', 'Зона для барбекю', 'Детская игровая площадка', 'Коворкинг-зона','Круглосуточная охрана','Видеонаблюдение'  ],
        units: [
          {
            id: '1',
            title: '2 Спальни',
            bedrooms: 2,
            bathrooms: 2,
            area: { min: 109.75, max: 109.75 },         // м²
            floor: { min: 1, max: 5 },
            priceTHB: '22100000',
            cover: '/img/objects/36/plans/unit1.jpg'
          },
           {
            id: '2',
            title: '1 Спальня',
            bedrooms: 1,
            bathrooms: 1,
            area: { min: 50.89, max: 50.89 },         // м²
            floor: { min: 1, max: 5 },
            priceTHB: '9400000',
            cover: '/img/objects/36/plans/unit2.jpg'
          },
            {
            id: '3',
            title: '1 Спальня',
            bedrooms: 1,
            bathrooms: 1,
            area: { min: 50.89, max: 50.89 },         // м²
            floor: { min: 1, max: 5 },
            priceTHB: '9200000',
            cover: '/img/objects/36/plans/unit3.jpg'
          },
            {
            id: '4',
            title: '1 Спальня',
            bedrooms: 1,
            bathrooms: 1,
            area: { min: 53.22, max:  53.22 },         // м²
            floor: { min: 1, max: 5 },
            priceTHB: '10200000',
            cover: '/img/objects/36/plans/unit4.jpg'
          },
        ],
        bookingConditions: [
          { id: 1, title: 'Депозит — при бронировании квартиры', type: 'amount', value: 200000, currency: 'THB' },
          { id: 2, title: 'При подписании Sales & Purchase Agreement (контракт)', type: 'percent', value: 40 },
          { id: 3, title: 'После завершения 3 этажа здания', type: 'percent', value: 10 },
          { id: 4, title: 'После завершения 5 этажа/стройки всего корпуса', type: 'percent', value: 30 },
          { id: 5, title: 'Финальный платеж при передаче квартиры и регистрации права собственности', type: 'percent', value: 20 },
   
        ],
 infrastructure: [
        { id: 1, title: 'Пляж Патонг / Калим', time: '3 минуты пешком' },
        { id: 2, title: 'Patong Beach Road (кафе, рестораны)', time: '' },
        { id: 3, title: 'Jungceylon Shopping Center', time: '' },
        { id: 4, title: 'Bangla Road & nightlife-зона', time: '' },
        { id: 5, title: 'Kalim Viewpoint', time: '' },

    ]
      },
            {
        id: 37,
        city: 'phuket',
        new: false,
        name: 'Ever Prime Residences',
        priceDollars: '213 461$',
        priceTHB: 'THB  6 792 360',
        location: 'Карон, Пхукет',
        coordinates: [98.300774, 7.828890],
        firstImg: '/img/objects/37/start.webp',
        bgImg: '/img/objects/37/bgImg.webp',
        bigImg: '/img/objects/37/bigImg.webp',
        genImg: '/img/objects/37/genplan.webp',
        genDesc: 'Высокий потенциал прироста капитала: благодаря отличному расположению и растущему спросу на элитную недвижимость в этом районе. Стабильный доход от аренды: Карон — популярное место для туристов, что гарантирует высокий спрос на аренду жилья. Полная юридическая защита: иностранные владельцы могут оформить недвижимость на правах Freehold с максимальной юридической защитой.Профессиональное управление: профессиональная команда на месте, которая обеспечивает бесперебойную работу комплекса, включая аренду и обслуживание.',
        descriptionExterior: 'Ever Prime Residences находится в нескольких минутах от популярного пляжа Карон и близко к другим известным местам отдыха, таким как пляж Ката и мыс Промтхеп. Район предлагает широкий выбор ресторанов, магазинов, торговых центров и медицинских учреждений, таких как международные больницы и школы. Международный аэропорт Пхукета находится всего в 45 минутах езды.',
        galleryExterior: [
          '/img/objects/37/exterior/obj1.webp',
          '/img/objects/37/exterior/obj2.webp',
          '/img/objects/37/exterior/obj3.webp',
           '/img/objects/37/exterior/obj4.webp',
          '/img/objects/37/exterior/obj5.webp',
          '/img/objects/37/exterior/obj6.webp',
           '/img/objects/37/exterior/obj7.webp',
          '/img/objects/37/exterior/obj8.webp',
          '/img/objects/37/exterior/obj9.webp',
           '/img/objects/37/exterior/obj10.webp',
                        
        ],
        galleryInterior: [
          '/img/objects/37/interior/obj1.jpg',
          '/img/objects/37/interior/obj2.jpg',
          '/img/objects/37/interior/obj3.jpg',
          '/img/objects/37/interior/obj4.jpg',
          '/img/objects/37/interior/obj5.jpg',
          '/img/objects/37/interior/obj6.jpg',
        ],
        description: 'Ever Prime Residences: роскошный комплекс на Пхукете.<br>Ever Prime Residences — это современный жилой комплекс премиум-класса, расположенный на живописном холме в районе Карон на Пхукете, всего в нескольких минутах от известных пляжей Карон и Ката. Проект включает четыре стильных здания с панорамными видами на Андаманское море, горы и зелень острова, предлагая уникальное сочетание уединения и комфорта в одном из самых привлекательных уголков Пхукета.<br>Комплекс состоит из 449 роскошных апартаментов с различными планировками: от компактных студий до просторных трехспальных апартаментов. Каждая единица недвижимости выполнена с использованием высококачественных материалов и оснащена всем необходимым для комфортной жизни: от современных кухонь и ванных комнат до мульти-сплит системы кондиционирования и энергоэффективных решений.',
        // ✅ Параметры объекта
        specs: {
          readyDate: '2028',          // срок сдачи
          areaTotal: '51м² - 188м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'Ever Prime Condo Phuket',
        },
        amenities: [
          'Infinity-бассейн на крыше', 'Бассейн с видом на океан', 'Современный фитнес-центр', 'йога-студия', 'Спа-салон', 'Кинотеатр', 'Корт для сквоша', 'Комната для симулятора гольф', 'Детская зона', 'Детский бассейн', 'Подземный паркинг' ],
        units: [
          {
            id: '1',
            title: '2 Спальни',
            bedrooms: 2,
            bathrooms: 2,
            area: { min: 51.67, max: 59.48 },         // м²
            floor: { min: 1, max: 8 },
            // priceTHB: '22100000',
            cover: '/img/objects/37/plans/unit1.webp'
          },
           {
            id: '2',
            title: '3 Спальни',
            bedrooms: 3,
            bathrooms: 3,
            area: { min: 88.06, max: 102.05 },         // м²
            floor: { min: 1, max: 8 },
            // priceTHB: '9400000',
            cover: '/img/objects/37/plans/unit2.webp'
          },
            {
            id: '3',
            title: '4 Спальни',
            bedrooms: 1,
            bathrooms: 1,
      area: { min: 178.85, max: 188.41 },        // м²
            floor: { min: 1, max: 8 },
            // priceTHB: '9200000',
            cover: '/img/objects/37/plans/unit3.webp'
          },

        ],
        bookingConditions: [
          { id: 1, title: 'Депозит бронирования', type: 'amount', value: 200000, currency: 'THB' },
          { id: 2, title: 'При подписании Sales & Purchase Agreement (SPA)', type: 'percent', value: 35 },
          { id: 3, title: 'После завершения фундамента корпуса', type: 'percent', value: 10 },
          { id: 4, title: 'После завершения основной структуры (каркас)', type: 'percent', value: 15 },
          { id: 5, title: 'После окончания внутренних систем и архитектурных работ', type: 'percent', value: 15 },
          { id: 6, title: 'Фин.взнос — при сдаче и передаче /hand over', type: 'percent', value: 25 }
        ],
        infrastructure: [
          { id: 1, title: 'Karon Beach', time: '' },
          { id: 2, title: 'Kata Beach', time: '' },
          { id: 3, title: 'Kata Viewpoint ', time: '' },
          { id: 4, title: 'Wat Suwan Khiri Khet', time: '' },
          { id: 5, title: 'Karon Night Market', time: '' },
          { id: 6, title: 'Dino Park Mini Golf Phuket', time: '' },
        ]
      },
    
              {
        id: 34,
        city: 'phuket',
        new: true,
        name: 'The Element by Anocha',
        priceDollars: '129 069$',
        priceTHB: 'THB 4 107 000',
        location: 'Камала, Пхукет',
        coordinates: [98.290883, 7.950281],
        firstImg: '/img/objects/34/start.webp',
        bgImg: '/img/objects/34/bgImg.webp',
        bigImg: '/img/objects/34/bigImg.webp',
        genImg: '/img/objects/34/genplan.jpg',
        genDesc: 'Комплекс находится всего в нескольких минутах от пляжа Камала с его мягким белым песком и кристально чистыми водами. Вокруг — зелёные горы и тихая природа, создающие атмосферу уединения, но при этом вы находитесь в удобной близости от ключевых районов Пхукета. Патонг, Лагуна и Сурин — всего в нескольких минутах, предлагая разнообразие ресторанов, магазинов и активных развлечений.',
        descriptionExterior: 'The Element by Anocha включает 4 жилых блока по 7 этажей, предлагающих 278 роскошных апартаментов с различными планировками — от компактных студий до просторных пентхаусов с собственными бассейнами. Площадь квартир варьируется от 29,87 м² до 168,61 м², что даёт возможность выбрать идеальное жильё для разных потребностей. Современный архитектурный стиль и высококачественная отделка создают атмосферу элегантности и уюта.',
        galleryExterior: [
          '/img/objects/34/exterior/obj1.webp',
          '/img/objects/34/exterior/obj2.webp',
          '/img/objects/34/exterior/obj3.webp',
          '/img/objects/34/exterior/obj4.webp',
          '/img/objects/34/exterior/obj5.webp',
          '/img/objects/34/exterior/obj6.webp',
          '/img/objects/34/exterior/obj7.webp',
          '/img/objects/34/exterior/obj8.webp',
                        
        ],
        galleryInterior: [
          '/img/objects/34/interior/obj1.webp',
          '/img/objects/34/interior/obj2.webp',
          '/img/objects/34/interior/obj3.webp',
          '/img/objects/34/interior/obj4.webp',
          '/img/objects/34/interior/obj5.webp',
          '/img/objects/34/interior/obj6.webp',
          '/img/objects/34/interior/obj7.webp',
          '/img/objects/34/interior/obj8.webp',
          '/img/objects/34/interior/obj9.webp',
          '/img/objects/34/interior/obj10.webp',
          '/img/objects/34/interior/obj11.webp',
        ],
        description: 'The Element by Anocha — это роскошный жилой комплекс, расположенный в живописном и спокойном районе Камала на западном побережье Пхукета. Этот проект сочетает в себе природную гармонию, эксклюзивный стиль и современные удобства, предлагая идеальные условия для жизни и отдыха.<br>Высокий инвестиционный потенциал: Пхукет — один из самых востребованных курортных направлений, что обеспечивает стабильный рост цен на недвижимость и высокий спрос на аренду.',
        // ✅ Параметры объекта
        specs: {
          readyDate: '2027',          // срок сдачи
          areaTotal: '30м² - 130м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'Siamese Stone'
        },
        amenities: [
          'Бассейны с живописными видами', 'Фитнес-центр с тренажёрным залом', 'Зона для занятий муай тай', 'Теннисный корт', 'Беговая дорожка', 'Сауна и спа-зона', 'Бизнес-центр', 'Торговая площадь и кафе', 'Детская игровая площадка', 'Иога-зоны', 'Площадка для домашних животных', ],
        units: [
          {
            id: '1',
            title: 'Type A 1 Bedroom',
            bedrooms: 1,
            bathrooms: 1,
            area: { min: 29, max: 52.95 },         // м²
            floor: { min: 1, max: 7 },
            // priceTHB: '3 905 000',
            // cover: '/img/objects/29/plans/unit1.jpg'
          },
          {
            id: '2',
            title: 'Type B 2 Bedroom',
            bedrooms: 2,
            bathrooms: 2,
            area: { min: 49, max: 57.25 },         // м²
            floor: { min: 1, max: 7 },
            // priceTHB: '3 062 000',
            // cover: '/img/objects/29/plans/unit2.jpg'
          },

          {
            id: '3',
            title: 'Type C 1 Bedroom + бассейн',
            bedrooms: 1,
            bathrooms: 1,
            area: { min: 74.15, max: 92.61 },         // м²
            floor: { min: 1, max: 7 },
            // priceTHB: '5 471 000',
            // cover: '/img/objects/29/plans/unit4.jpg'
          },
            {
            id: '4',
            title: 'Type D 2 Bedroom + бассейн',
            bedrooms: 2,
            bathrooms: 2,
            area: { min: 124.74, max: 124.74 },         // м²
            floor: { min: 1, max: 7 },
            // priceTHB: '5 471 000',
            // cover: '/img/objects/29/plans/unit4.jpg'
          },
              {
            id: '5',
            title: 'Type Е 2 Bedroom + бассейн',
            bedrooms: 2,
            bathrooms: 2,
            area: { min: 168.61, max: 168.61 },         // м²
            floor: { min: 1, max: 7 },
            // priceTHB: '5 471 000',
            // cover: '/img/objects/29/plans/unit4.jpg'
          },
            

        ],
        bookingConditions: [
          { id: 1, title: 'Депозит бронирования', type: 'amount', value: 200000, currency: 'THB' },
          { id: 2, title: 'Подписание Sales & Purchase Agreement (SPA)', type: 'percent', value: 35 },
          { id: 3, title: 'После завершения фундамента корпуса', type: 'percent', value: 10 },
          { id: 4, title: 'По завершению основной структуры здания', type: 'percent', value: 15 },
          { id: 5, title: 'По завершению внутренних систем и отделки (internal works)', type: 'percent', value: 15 },
          { id: 6, title: 'Финальный взнос - после окончания строительства', type: 'percent', value: 25 }
        ],
  infrastructure: [
        { id: 1, title: 'Café Del Mar Kamala', time: '' },
        { id: 2, title: 'Phuket FantaSea', time: '' },
        { id: 3, title: 'Главная улица Kamala', time: '' },
        { id: 4, title: 'Surin Beacht', time: '' },
        { id: 5, title: 'Patong Beach & Jungceylon', time: '' },
    ]
      },
           {
        id: 33,
        city: 'phuket',
        new: true,
        name: 'Siamese Bangtao',
        priceDollars: '115 336$',
        priceTHB: 'THB 3 670 000',
        location: 'Банг Тао, Пхукет',
        coordinates: [98.295552, 7.996469],
        firstImg: '/img/objects/33/start.webp',
        bgImg: '/img/objects/33/bgImg.webp',
        bigImg: '/img/objects/33/bigImg.webp',
        genImg: '/img/objects/33/genplan.webp',
        genDesc: 'Комплекс находится в живописном районе с развитой инфраструктурой и всего в 6 минутах от пляжей. Рядом — магазины, рестораны, спа-салоны и фитнес-центры. В шаговой доступности — элитные школы (UWC, Headstart), гольф-клубы, аквапарки и заповедники, а также популярные курорты и пляжные клубы, такие как Catch Beach Club и Carpe Diem.',
        descriptionExterior: 'Комплекс идеально подходит для семей с детьми, предлагая безопасную среду и близость к лучшим образовательным учреждениям. Также это отличное решение для тех, кто ищет выгодную инвестицию с возможностью дохода от краткосрочной аренды.<br>Просторные квартиры с дизайнерской отделкой, полностью оборудованные кухни, высококачественная техника и мебель. ',
        galleryExterior: [
          '/img/objects/33/exterior/obj1.jpg',
          '/img/objects/33/exterior/obj2.jpg',
          '/img/objects/33/exterior/obj3.jpg',
                        
        ],
        galleryInterior: [
          '/img/objects/33/interior/obj1.jpg',
          '/img/objects/33/interior/obj2.jpg',
          '/img/objects/33/interior/obj3.jpg',
          '/img/objects/33/interior/obj4.jpg',
        ],
        description: 'Siamese Bang Tao — это эксклюзивный жилой комплекс в престижном районе Банг Тао, Пхукет, всего в нескольких минутах от пляжей Банг Тао и Лагуна-Бич. Комплекс состоит из современных зданий с 95 юнитами, предлагающими идеальное сочетание роскоши, комфорта и функциональности. Разработанный ведущими тайскими застройщиками, проект воплощает высокие стандарты качества, инновации и экологическую устойчивость.',
        // ✅ Параметры объекта
        specs: {
          readyDate: '2027',          // срок сдачи
          areaTotal: '30м² - 130м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'Anocha Development'
        },
        amenities: [
          '5 бассейнов', 'Современный фитнес-центр', 'Гольф-симулятор', 'Теннисный корт', 'Беговая дорожка', 'Коворкинг-пространства', 'Ресторан, кафе, и лаунж-зоны', 'Кинотеатр под открытым небом', 'зона для барбекю на крыше', ],
        // units: [
        //   {
        //     id: '1',
        //     title: 'Студия',
        //     bedrooms: 1,
        //     bathrooms: 1,
        //     area: { min: 26, max: 26 },         // м²
        //     floor: { min: 1, max: 8 },
        //     // priceTHB: '3 905 000',
        //     // cover: '/img/objects/29/plans/unit1.jpg'
        //   },
        //   {
        //     id: '2',
        //     title: '1-ые апартаменты',
        //     bedrooms: 1,
        //     bathrooms: 1,
        //     area: { min: 30, max: 40.65 },         // м²
        //     floor: { min: 1, max: 8 },
        //     // priceTHB: '3 062 000',
        //     // cover: '/img/objects/29/plans/unit2.jpg'
        //   },

        //   {
        //     id: '4',
        //     title: '2-ые апартаменты',
        //     bedrooms: 1,
        //     bathrooms: 1,
        //     area: { min: 74.85, max: 74.85 },         // м²
        //     floor: { min: 1, max: 8 },
        //     // priceTHB: '5 471 000',
        //     // cover: '/img/objects/29/plans/unit4.jpg'
        //   },
            

        // ],
        bookingConditions: [
          { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
          { id: 2, title: 'При подписании Sales & Purchase Agreement (SPA) с застройщиком', type: 'percent', value: 30 },
          { id: 3, title: 'После завершения фундамента корпуса', type: 'percent', value: 15 },
          { id: 4, title: 'После завершения основной структуры (строение)', type: 'percent', value: 15 },
          { id: 5, title: 'Финальный взнос при сдаче проекта и handover', type: 'percent', value: 40 },
   
        ],
  infrastructure: [
        { id: 1, title: 'Bang Tao Beach', time: '' },
        { id: 2, title: 'Layan Beach', time: '' },
        { id: 3, title: 'Boat Avenue', time: '' },
        { id: 4, title: 'Porto de Phuket', time: '' },
        { id: 5, title: 'Laguna Phuket', time: '' },
        { id: 6, title: 'Laguna Golf Phuket', time: '' },
    ]
      },
       {
        id: 32,
        city: 'phuket',
        new: true,
        name: 'VIP TROPIKA-VIP Tropika',
        priceDollars: '108 248$',
        priceTHB: 'THB 3 444 451 ',
        location: 'Банг Тао , Пхукет',
        coordinates: [98.294855, 7.997890],
        firstImg: '/img/objects/32/start.webp',
        bgImg: '/img/objects/32/bgImg.webp',
        bigImg: '/img/objects/32/bigImg.webp',
        genImg: '/img/objects/32/genplan.jpg',
        genDesc: 'VIP Tropika — это не только удобное место для жизни, но и надежный актив для инвесторов. Пхукет продолжает привлекать внимание туристов и экспатов, а спрос на аренду недвижимости в таких районах, как Банг Тао, стабильно растет. Развитая инфраструктура, близость к пляжу и комфортные условия для аренды делают проект привлекательным для долгосрочных инвестиций.<br>VIP Tropika — это стильный жилой комплекс, расположенный всего в 800 метрах от пляжа Банг Тао на Пхукете. В этом районе прекрасно сочетаются курортная атмосфера и развитая инфраструктура: рядом находятся пляжные клубы, рестораны, торговые центры и водные виды спорта. Также в шаговой доступности пляж Лаян — тихое место для уединенного отдыха, а известные торговые центры, такие как Central Porto De Phuket и Boat Avenue, предлагают все для шопинга и развлечений.',
        descriptionExterior: 'VIP Tropika предлагает разнообразные варианты жилья: от уютных студий площадью от 30 м² до просторных апартаментов с 1–3 спальнями (от 45 до 130 м²) и таунхаусов площадью 112 м². Пространства продуманы до мелочей, сочетая функциональность и эстетику, чтобы обеспечить идеальные условия для жизни и отдыха.',
        galleryExterior: [
          '/img/objects/32/exterior/obj1.jpg',
          '/img/objects/32/exterior/obj2.jpg',
          '/img/objects/32/exterior/obj3.jpg',
          '/img/objects/32/exterior/obj4.jpg',
          '/img/objects/32/exterior/obj5.jpg',
                        
        ],
        galleryInterior: [
          '/img/objects/32/interior/obj1.jpg',
          '/img/objects/32/interior/obj2.jpg',
          '/img/objects/32/interior/obj1.jpg',
          '/img/objects/32/interior/obj2.jpg',
        ],
        description: 'Кондоминиум у самого моря с идеальными условиями для жизни и инвестиций.VIP Tropika предлагает разнообразные варианты жилья: от уютных студий площадью от 30 м² до просторных апартаментов с 1–3 спальнями (от 45 до 130 м²) и таунхаусов площадью 112 м². Пространства продуманы до мелочей, сочетая функциональность и эстетику, чтобы обеспечить идеальные условия для жизни и отдыха.',
        // ✅ Параметры объекта
        specs: {
          readyDate: '2028',          // срок сдачи
          areaTotal: '45м² - 130м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'Dzen Property '
        },
        amenities: [
          '2 бассейна', 'Современный фитнес-центр', 'Коворкинг-зоны', 'Детский клуб', 'Сауна и паровая комната', 'Подземная парковка', '24/7 охрана и видеонаблюдение', 'Wi-Fi на территории', 'Бассейн', ' Парк', 'Тренажерный зал',],
        units: [
          {
            id: '1',
            title: 'Студия',
            bedrooms: 1,
            bathrooms: 1,
            area: { min: 30, max: 30 },         // м²
            floor: { min: 1, max: 7 },
            priceTHB: '3352500',
            // cover: '/img/objects/29/plans/unit1.jpg'
          },
            {
            id: '2',
            title: '1-комнатная А/B',
            bedrooms: 1,
            bathrooms: 1,
            area: { min: 45, max: 45 },         // м²
            floor: { min: 1, max: 7 },
            priceTHB: '5050000',
            // cover: '/img/objects/29/plans/unit1.jpg'
          },
             {
            id: '3',
            title: '2-комнатная ',
            bedrooms: 1,
            bathrooms: 1,
            area: { min: 60, max: 60 },         // м²
            floor: { min: 1, max: 7 },
            priceTHB: '7270000',
            // cover: '/img/objects/29/plans/unit1.jpg'
          },
              {
            id: '4',
            title: '3-комнатная ',
            bedrooms: 1,
            bathrooms: 1,
            area: { min: 90, max: 90 },         // м²
            floor: { min: 1, max: 7 },
            priceTHB: '11000000',
            // cover: '/img/objects/29/plans/unit1.jpg'
          },
                  {
            id: '5',
            title: 'Люкс ',
            bedrooms: 1,
            bathrooms: 1,
            area: { min: 130, max: 130 },         // м²
            floor: { min: 1, max: 7 },
            // priceTHB: '11 000 000',
            // cover: '/img/objects/29/plans/unit1.jpg'
          },
                         {
            id: '6',
            title: 'Дуплекс',
            bedrooms: 1,
            bathrooms: 1,
            area: { min: 224, max: 224 },         // м²
            floor: { min: 1, max: 7 },
            // priceTHB: '11 000 000',
            // cover: '/img/objects/29/plans/unit1.jpg'
          },
            

        ],
        bookingConditions: [
          { id: 1, title: 'Резерв/депозит при бронировании ', type: 'amount', value: 100000, currency: 'THB' },
          { id: 2, title: 'При подписании Sales & Purchase Agreement (SPA)', type: 'percent', value: 30 },
          { id: 3, title: 'Платежи по строительным этапам: проценты разбиваются на несколько этапов по мере прогресса стройки — обычно два-три этапа до сдачи'},
          { id: 4, title: 'Финальный взнос: остаток (примерно ~30–40% стоимости) при передаче квартиры (handover) и регистрации прав собственности' }
        ],
        infrastructure: [
          { id: 1, title: 'Банг Тао и Лаян', time: 'рядом' },
          { id: 2, title: 'ТЦ Boat Avenue', time: 'близко' },
          { id: 3, title: 'Central Porto De Phuket', time: 'близко' },
          { id: 4, title: 'UWC Thailandt', time: 'близко' },
          { id: 5, title: 'HeadStart International School', time: 'близко' },


    
        ]
      },
                                                                 {
        id: 29,
        city: 'phuket',
        new: true,
        status: 'best',
        name: 'Arise Vibe',
        priceDollars: '95 747$',
        priceTHB: 'THB 3 062 000',
        location: 'Таланг, Пхукет',
        coordinates: [98.358445, 7.982356],
        firstImg: '/img/objects/29/start.webp',
        bgImg: '/img/objects/29/bgImg.webp',
        bigImg: '/img/objects/29/bigImg.webp',
        genImg: '/img/objects/29/genplan.webp',
        genDesc: 'Резиденция выполнена в клубном формате и идеально подходит как для спокойной жизни, так и для удалённой работы или семейного отдыха. На территории предусмотрен современный коворкинг, оборудованный всем необходимым для продуктивного рабочего дня — отличный выбор для digital-номадов и тех, кто совмещает отдых с делами.',
        descriptionExterior: 'Функциональные пространства, продуманная архитектура и окружение премиальных инфраструктур делают этот проект отличным вариантом как для личного проживания, так и для инвестиций.',
        galleryExterior: [
          '/img/objects/29/exterior/obj1.jpg',
          '/img/objects/29/exterior/obj2.jpeg',
          '/img/objects/29/exterior/obj3.webp',
          '/img/objects/29/exterior/obj4.jpg',
          '/img/objects/29/exterior/obj5.jpg',
          '/img/objects/29/exterior/obj6.jpg',
           '/img/objects/29/exterior/obj7.jpg',
          '/img/objects/29/exterior/obj8.jpg',
          '/img/objects/29/exterior/obj9.jpg',
          '/img/objects/29/exterior/obj10.jpg',
            '/img/objects/29/exterior/obj11.jpg',
          '/img/objects/29/exterior/obj12.jpg',
            '/img/objects/29/exterior/obj13.jpg',
                         
        ],
        // galleryInterior: [

        //   '/img/objects/28/interior/obj2.webp',
        //   '/img/objects/28/interior/obj3.webp',
        //   '/img/objects/28/interior/obj4.webp',
        //   '/img/objects/28/interior/obj5.webp',
        // ],
        description: 'Arise Vibe - cовременная резиденция комфорт-класса расположена в спокойном и зеленом районе Таланг — одном из самых уютных и быстроразвивающихся районов Северного Пхукета. Это идеальное место для тех, кто ценит уединение, комфорт европейского уровня и атмосферу настоящих тропиков.',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q4 2026',          // срок сдачи
          areaTotal: '26м² - 91м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'Ornsirin Group'
        },
        amenities: [
         'Лобби','Ресепшн','Коворкинг-зал', 'Детский клуб','Бар','Беговые дорожки','Сад','Джакузи','Бассейн','Студия йоги', 'Тренажерный зал', 'Зарядка электромобилей'], 
        units: [
     {
    id: '1',
    title: '1-ые апартаменты',
    bedrooms: 1,
    bathrooms: 1,
    area: { min:41, max: 41 },         // м²
    floor: { min: 1, max: 8 },
    priceTHB: '3905000',
    cover: '/img/objects/29/plans/unit1.jpg'
          },
               {
    id: '2',
    title: '1-ые апартаменты',
    bedrooms: 1,
    bathrooms: 1,
    area: { min:34, max: 34 },         // м²
    floor: { min: 1, max: 8 },
    priceTHB: '3062000',
    cover: '/img/objects/29/plans/unit2.jpg'
          },
             {
    id: '3',
    title: 'Студия',
    bedrooms: 1,
    bathrooms: 1,
    area: { min:26, max: 26 },         // м²
    floor: { min: 1, max:  8},
    priceTHB: '2363000',
    cover: '/img/objects/29/plans/unit3.jpg'
          },
                          {
    id: '4',
    title: '2-ые апартаменты',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 59, max: 59 },         // м²
    floor: { min: 1, max: 8 },
    priceTHB: '5471000',
    cover: '/img/objects/29/plans/unit4.jpg'
          },
            

],
        bookingConditions: [
    { id: 1, title: 'Депозит при бронировании: ฿100,000 или ฿200,000', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: '1-й взнос (при контракте / SPA)', type: 'percent', value: 30 },
    { id: 3, title: '2-й взнос (в рассрочку) payable in 18 installments', type: 'percent', value: 30 },
    { id: 4, title: 'Финальный взнос (handover) on handover', type: 'percent', value: 40 },

            ],
    infrastructure: [
        { id: 1, title: 'Robinson Lifestyle Thalang', time: '' },
        { id: 2, title: 'Lotus’s Thalang', time: '' },
        { id: 3, title: 'Makro Thalang', time: '' },
        { id: 4, title: 'Kajonkiet Thalang School', time: '' },
        { id: 5, title: 'British International School Phuket', time: '' },
        { id: 6, title: 'UWC Thailand', time: '' },
        { id: 7, title: 'Thalang Hospital', time: '' },
        { id: 8, title: 'Bang Tao Beach', time: '' },
    ]
      },
                                                             {
        id: 28,
        city: 'phuket',
        new: true,
        name: 'The Zero Naiyang',
        priceDollars: '99 657$',
        priceTHB: 'THB 3 200 000',
        location: 'Найянг, Пхукет',
        coordinates: [98.301007, 8.089552],
        firstImg: '/img/objects/28/start.webp',
        bgImg: '/img/objects/28/bgImg.webp',
        bigImg: '/img/objects/28/bigImg.webp',
        genImg: '/img/objects/28/genplan.webp',
        genDesc: 'Экологичность и стиль на первом месте. <br>The Zero Naiyang включает два элегантных здания с 150 апартаментами, среди которых представлены студии, квартиры с одной и двумя спальнями, а также эксклюзивные пентхаусы. Вдохновлённый тропической природой, проект сочетает минимализм и элементы природных материалов, создавая атмосферу уюта и гармонии с окружающим миром. Каждая резиденция наполнена естественным светом благодаря панорамным окнам, а просторные террасы открывают захватывающий вид на зелёные зоны или море.',
        //         genLegend: [
        //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior: 'Проект акцентирует внимание на устойчивости и энергоэффективности: системы умного дома, солнечные панели и атермальные покрытия снижают эксплуатационные расходы, делая жильё не только экологически чистым, но и выгодным в долгосрочной перспективе.<br>Идеальная локация для жизни и инвестиций. <br>Расположение The Zero Naiyang — это золотая середина между уединением и удобствами. Рядом с проектом находится один из самых красивых пляжей Пхукета — Най Янг, а также знаменитый национальный парк Sirinat, что делает этот район привлекательным для отдыха и инвестиций. Ближайшие рестораны, рынки и спа-центры создают идеальную атмосферу для комфортной жизни, а 5 минут до международного аэропорта делают проект удобным для тех, кто часто путешествует.',
        galleryExterior: [
          //  '/img/objects/23/exterior/obj01.jpg',
          '/img/objects/28/exterior/obj1.webp',
          '/img/objects/28/exterior/obj2.webp',
          '/img/objects/28/exterior/obj3.webp',
          '/img/objects/28/exterior/obj4.webp',
          '/img/objects/28/exterior/obj5.webp',
          '/img/objects/28/exterior/obj6.webp',
                         
        ],
        galleryInterior: [

          '/img/objects/28/interior/obj2.webp',
          '/img/objects/28/interior/obj3.webp',
          '/img/objects/28/interior/obj4.webp',
          '/img/objects/28/interior/obj5.webp',
        ],
        description: ' The Zero Naiyang — cовершенство у моря на Пхукете. <br>The Zero Naiyang — это уникальный бутик-комплекс на Пхукете, который идеально сочетает природу, роскошь и современные технологии. С расположением всего в 380 метрах от пляжа Най Янг, этот проект предлагает не просто жильё, а стиль жизни в окружении природных красот и первоклассных удобств.',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q4 2027',          // срок сдачи
          areaTotal: '29м² - 91м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'Zero Developments Co., Ltd'
        },
        amenities: [
         'Престижный район','Детский бассейн','Закрытый дрор', 'Вид на море','Сауна','Конференс-зал','Дом 5 этажей','Охрана и видеонаблюдение','Финтнес-зал','Зелёные зоны', 'Парковка'], 
        bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: 'После бронирования / при подписании договора', type: 'percent', value: 35 },
    { id: 3, title: 'В процессе строительства: 55% (разбивается по construction stages, не одной суммой)', type: 'percent', value: 55},
    { id: 4, title: 'Финальный взнос при handover / передаче квартиры', type: 'percent', value: 10 },

            ],
           infrastructure: [
        { id: 1, title: 'Yang Beach', time: '' },
        { id: 2, title: 'Sirinat National Park', time: '' },
        { id: 3, title: 'Mingle Mall / Nai Yang Village Market', time: '' },
        { id: 4, title: 'Phuket International Airport', time: '' },
        { id: 5, title: 'Локальные кафе и рестораны Nai Yang Road', time: '' },
        { id: 6, title: 'Blue Canyon Golf Course', time: '' },
        { id: 7, title: 'UWC Thailand International School', time: '' },
    ]
      },


                                                  {
        id: 25,
        city: 'phuket',
        new: true,
        name: 'SO Lagoon Cherngtalay',
        priceDollars: '115 812$',
        priceTHB: 'THB 3 750 000',
        location: 'Бангтао, Пхукет',
        coordinates: [98.319356, 7.996296],
        firstImg: '/img/objects/25/start.webp',
        bgImg: '/img/objects/25/bgImg.webp',
        bigImg: '/img/objects/25/bigImg.webp',
        genImg: '/img/objects/25/genplan.png',
        genDesc: 'Местоположение: В самом центре Банг Тао, в пешей доступности от Boat Avenue и пляжей, с отличной транспортной доступностью. <br>Типы недвижимости: Апартаменты от 29 до 105 м² и просторные виллы с 4 спальнями.<br>Архитектура: Современные линии и тропический стиль, гармонично вписывающиеся в природное окружение.',
        //         genLegend: [
        //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior: 'SO Lagoon Cherngtalay — это комплекс, который объединяет комфорт, стиль и природу, предоставляя жильцам идеальные условия для постоянного проживания или отдыха на Пхукете.<br>Апартаменты и виллы, подходящие для индивидуального проживания или семей, с просторными планировками и современным дизайном. 4-спальные виллы, предлагающие максимальное уединение и пространство для комфортной жизни.',
        galleryExterior: [
          //  '/img/objects/23/exterior/obj01.jpg',
          '/img/objects/25/exterior/obj1.jpg',
          '/img/objects/25/exterior/obj2.jpg',
          '/img/objects/25/exterior/obj3.jpg',
          '/img/objects/25/exterior/obj4.jpg',
        ],
        galleryInterior: [
          '/img/objects/25/interior/obj1.jpg',
          '/img/objects/25/interior/obj2.jpg',
          '/img/objects/25/interior/obj3.jpg',
          '/img/objects/25/interior/obj4.jpg',
          '/img/objects/25/interior/obj5.jpg',
        ],
        description: 'SO Lagoon Cherngtalay — это роскошный жилой комплекс, расположенный в самом центре динамичного района Банг Тао, Пхукет. Этот проект идеально сочетает в себе стильный современный дизайн и элементы тропической архитектуры, создавая комфортное и уютное пространство для жизни и отдыха.',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q4 2027',          // срок сдачи
          areaTotal: '26м² - 105м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'Origin Property PCL'
        },
        amenities: [
         'Вид на город и бассейн','Сауна-хамам', 'Джакузи', 'Просторное лобби', 'Рестораны/кафе','Фитнес-центр','Игровые комнаты','Искусственная лагуна', 'Прогулочные зоны'], 
        units: [
     {
    id: '1',
    title: 'SO Superior',
    bedrooms: 1,
    bathrooms: 1,
    area: { min:26, max: 26 },         // м²
    floor: { min: 1, max: 7 },
    priceTHB: '',
    // cover: '/img/objects/24/plans/unit.webp'
          },
            {
    id: '2',
    title: 'SO Signature Апартаменты с 1 спальней',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 28, max: 28 },         // м²
    floor: { min: 1, max: 7 },
    priceTHB: '',
    // cover: '/img/objects/24/plans/unit2.webp'
          },
                {
    id: '3',
    title: 'SO Suite Апартаменты с 2 спальнями',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 60, max: 60 },         // м²
    floor: { min: 1, max: 7 },
    priceTHB: '',
    // cover: '/img/objects/24/plans/unit2.webp'
          },
                 {
    id: '4',
    title: 'SO Serene, SO Infinite, SO Serenity',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 85, max: 105 },         // м²
    floor: { min: 1, max: 7 },
    priceTHB: '',
    // cover: '/img/objects/24/plans/unit2.webp'
          },

],
        bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: '30 дней после брони (contract payment)', type: 'percent', value: 30 },
    { id: 3, title: '2-й взнос (down payment) примерно через 60 дней после брони (после contract payment)', type: 'percent', value: 20 },
    { id: 4, title: 'Финальный взнос (handover / на завершение строительства)', type: 'percent', value: 50 },

            ],
        infrastructure: [
        { id: 1, title: 'Пляж Банг Тао', time: '' },
        { id: 2, title: 'Пляжа Сурин', time: '' },
        { id: 3, title: 'Boat Avenue и Porto de Phuket', time: '' },
        { id: 4, title: 'HeadStart International School', time: '' },
        { id: 5, title: 'Bangkok Hospital Clinic Bangtao', time: '' },
  
    ]
      },
                                              {
        id: 24,
        city: 'phuket',
        new: true,
        name: 'Canvas Cherng Talay',
        priceDollars: '252 999$',
        priceTHB: 'THB 8 000 000',
        location: 'Чернг Талай, Пхукет',
        coordinates: [98.296611, 8.000472],
        firstImg: '/img/objects/24/start.webp',
        bgImg: '/img/objects/24/bgImg.webp',
        bigImg: '/img/objects/24/bigImg.webp',
        genImg: '/img/objects/24/genplan.webp',
        genDesc: 'Местоположение: Чернг Талай, Пхукет, на улице Pasak-Khoktanod Rd, в нескольких минутах от пляжа Банг Тао. Типы квартир: 1- и 2-спальные апартаменты и пентхаусы, от 39,25 до 105,00 м². Этажность: 5 этажей в 4 зданиях и 7 этажей в одном здании. Количество квартир: 175.',
        //         genLegend: [
        //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior: 'Canvas Cherng Talay предлагает широкий спектр удобств для комфортного проживания. Современные зоны отдыха: Welcome Cabana (лобби) в стиле роскошного пляжного клуба, Sky Living Lounge для работы и отдыха. Фитнес и активный отдых: Современный фитнес-центр, гольф-симулятор, два больших бассейна, зона для загара, детский сад с водной горкой.<br>Каждое жилое помещение в Canvas Cherng Talay спроектировано с учетом максимального комфорта и эстетики. Просторные квартиры с высококачественной отделкой идеально подходят для семей, а пентхаусы с приватными террасами предлагают захватывающие виды на окрестности. Canvas Cherng Talay — это не просто дом, это место, где каждый уголок пропитан спокойствием и вдохновением. Если вы ищете гармоничное сочетание природы, удобства и стильного жилья, этот проект станет отличным выбором. ',
        galleryExterior: [
          //  '/img/objects/23/exterior/obj01.jpg',
          '/img/objects/24/exterior/obj1.webp',
          '/img/objects/24/exterior/obj2.webp',
          '/img/objects/24/exterior/obj4.webp',
          '/img/objects/24/exterior/obj5.webp',
          '/img/objects/24/exterior/obj6.webp',
          '/img/objects/24/exterior/obj7.webp',
          '/img/objects/24/exterior/obj8.webp',
          '/img/objects/24/exterior/obj9.webp',
          '/img/objects/24/exterior/obj10.webp',
        ],
        galleryInterior: [
          '/img/objects/24/interior/obj1.webp',
          '/img/objects/24/interior/obj2.webp',
          '/img/objects/24/interior/obj1.webp',

        ],
        description: 'Canvas Cherng Talay — это не просто место для проживания, но и идеальное место для отдыха и инвестиций. Комплекс находится в самом центре Чернг Талай, в шаговой доступности от Boat Avenue, Porto de Phuket, международных школ и здравоохранительных учреждений. Близость к пляжному клубу Catch, ресторанам и рынкам делает этот проект привлекательным как для постоянного проживания, так и для аренды.',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q4 2026',          // срок сдачи
          areaTotal: '39,25м² - 105м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: 'от 1',
          developer: 'Sansiri'
        },
        amenities: [
          'Просторный сад','Терраса для барбекю','Гольф-симулятор','Два больших бассейна', 'Зона для загара', 'Детский сад с водной горкой', 'Парковка', 'Прачечная', 'wi-fi в общественных зонах'], 
        units: [
     {
    id: '1',
    title: 'Апартаменты с 1 спальней',
    bedrooms: 1,
    bathrooms: 1,
    area: { min:41, max: 49 },         // м²
    floor: { min: 1, max: 7 },
    priceTHB: 6713000,
    cover: '/img/objects/24/plans/unit.webp'
          },
            {
    id: '2',
    title: 'Апартаменты с 2 спальнями',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 59, max: 105 },         // м²
    floor: { min: 1, max: 1 },
    priceTHB: 9110000,
    cover: '/img/objects/24/plans/unit2.webp'
          },

],
        bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: 'Контракт', type: 'percent', value: 30 },
    { id: 3, title: 'Прочий предварительный платёж (≈ до июнь 2025)', type: 'percent', value: 20 },
    { id: 4, title: 'Handover', type: 'percent', value: 50 },

            ],
 infrastructure: [
        { id: 1, title: 'Bang Tao Beach', time: '' },
        { id: 2, title: 'Surin Beach', time: '' },
        { id: 3, title: 'Boat Avenue', time: '' },
        { id: 4, title: 'Porto de Phuket', time: '' },
        { id: 5, title: 'Laguna Phuket', time: '' },
        { id: 6, title: 'HeadStart International School', time: '' },
    ]
      },
                                          {
         id: 23,
        city: 'phuket',
        new: false,
        name: 'Anchan Mountain Breeze',
        priceDollars: '908 000$',
        priceTHB: 'THB 32 688 000',
        location: 'Таланг, Пхукет',
        coordinates: [98.316973, 8.053008],
        firstImg: '/img/objects/23/start.webp',
        bgImg: '/img/objects/23/bgImg.webp',
        bigImg: '/img/objects/23/bigImg.webp',
        genImg: '/img/objects/23/genplan.webp',
        genDesc: 'Расположенный в уединённом уголке Пхукета, рядом с национальным парком Као Пра Тэо и международной школой UWC, жилой комплекс Anchan Mountain Breeze предлагает гармоничное сочетание тропической природы и современного комфорта. Этот проект от опытного застройщика Anchan воплощает уникальный стиль, объединяя балийские и традиционные тайские архитектурные мотивы.',
        //         genLegend: [
        //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior: 'Расположенный в уединённом уголке Пхукета, рядом с национальным парком Као Пра Тэо и международной школой UWC, жилой комплекс Anchan Mountain Breeze предлагает гармоничное сочетание тропической природы и современного комфорта. Этот проект от опытного застройщика Anchan воплощает уникальный стиль, объединяя балийские и традиционные тайские архитектурные мотивы.<br><br>Расположенный в уединённом уголке Пхукета, рядом с национальным парком Као Пра Тэо и международной школой UWC, жилой комплекс Anchan Mountain Breeze предлагает гармоничное сочетание тропической природы и современного комфорта. Этот проект от опытного застройщика Anchan воплощает уникальный стиль, объединяя балийские и традиционные тайские архитектурные мотивы.',
        galleryExterior: [
          //  '/img/objects/23/exterior/obj01.jpg',
          '/img/objects/23/exterior/obj1.webp',
          '/img/objects/23/exterior/obj2.webp',
          '/img/objects/23/exterior/obj3.webp',
          '/img/objects/23/exterior/obj4.webp',
        ],
        galleryInterior: [
          '/img/objects/23/interior/obj1.webp',
          '/img/objects/23/interior/obj2.webp',
          '/img/objects/23/interior/obj3.webp',
          '/img/objects/23/interior/obj4.webp',
          '/img/objects/23/interior/obj5.webp',
          '/img/objects/23/interior/obj6.webp',
        ],
        description: 'Anchan Mountain Breeze — эксклюзивные виллы с видом на горы в Таланге, Пхукет. <br><br>Расположенный в уединённом уголке Пхукета, рядом с национальным парком Као Пра Тэо и международной школой UWC, жилой комплекс Anchan Mountain Breeze предлагает гармоничное сочетание тропической природы и современного комфорта. Этот проект от опытного застройщика Anchan воплощает уникальный стиль, объединяя балийские и традиционные тайские архитектурные мотивы.',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q4 2027',          // срок сдачи
          areaTotal: '473м² - 1325м²',           // площадь (общая)
          propertyType: 'Вилла',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 3',                   // кол-во спален
          bathrooms: '3-5',
          developer: 'Anchan Burgundy'
        },
        amenities: [
          ' Панорамный вид на 270 градусов','Панорамные окна','Большой бассейн','Сад', 'Крытая парковка'], 
        units: [
     {
    id: '1',
    title: 'Вилла 3 спальни',
    bedrooms: 3,
    bathrooms: 3,
    area: { min:473, max: 473 },         // м²
    floor: { min: 1, max: 1 },
    priceTHB: 33000000,
    cover: '/img/objects/23/plans/unit1.webp'
          },
            {
    id: '2',
    title: 'Вилла 4 спальни',
    bedrooms: 4,
    bathrooms: 4,
    area: { min:529, max:529 },         // м²
    floor: { min: 1, max: 1 },
    priceTHB: 38000000,
    cover: '/img/objects/23/plans/unit2.webp'
          },
                {
    id: '3',
    title: 'Вилла 4 спальни',
    bedrooms: 4,
    bathrooms: 4,
    area: { min:709, max: 709 },         // м²
    floor: { min: 1, max: 1 },
    priceTHB: 49000000,
    cover: '/img/objects/23/plans/unit3.webp'
          },
],
           bookingConditions: [
    { id: 1, title: 'Резервация (депозит) — при бронировании юнита', type: 'amount', type: 'percent', value: 2  },
    { id: 2, title: '1-й взнос (подписание контракта / SPA) в течение 30 дней после брони', type: 'percent', value: 28 },
    { id: 3, title: '2-й взнос — после завершения фундамента', type: 'percent', value: 15 },
    { id: 4, title: '3-й взнос — после завершения бетонной конструкции', type: 'percent', value: 15 },
    { id: 5, title: '4-й взнос — после завершения стен и кровельной плитки', type: 'percent', value: 15 },
          { id: 6, title: '5-й взнос — после завершения укладки плитки/интерьера', type: 'percent', value: 15 },
        { id: 7, title: '6-й  - финальный взнос (handover / передача)', type: 'percent', value: 10 }
            ],
   infrastructure: [
          { id: 1, title: 'UWC Thailand (UWC)', time: '' },
          { id: 2, title: 'Thanyapura Sports & Health', time: '' },
          { id: 3, title: 'Phuket International Airport', time: '' },
          { id: 4, title: 'Nai Yang Beach', time: '' },
          { id: 5, title: 'Bang Tao / Laguna Phuket', time: '' },
          { id: 6, title: 'Mission Hills / Blue Canyon (гольф-клубы)', time: '' },
        ]
      },
                                      {
        id: 22,
        city: 'phuket',
        new: false,
        name: 'Anchan Burgundy',
        priceDollars: '1 134 000$',
        priceTHB: 'THB  37 800 000',
        location: 'Таланг, Пхукет',
        coordinates: [98.316973, 8.053008],
        firstImg: '/img/objects/22/start.webp',
        bgImg: '/img/objects/22/bgImg.webp',
        bigImg: '/img/objects/22/bigImg.webp',
        genImg: '/img/objects/22/genplan.webp',
        genDesc: 'Проект реализует признанный девелопер Pearl Island Property, за плечами которого более 10 успешных жилых комплексов под брендом Anchan и множество профессиональных наград, включая титул «Лучший застройщик элитных вилл Таиланда» (Dot Property Thailand Awards 2024).',
        //         genLegend: [
        //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior: 'Каждая вилла Anchan Burgundy создаётся на заказ и завершена с особым вниманием к деталям: 🌿 Площадь от 574 до 751 м², 4–5 спален, 2–3 парковочных места . 🏊‍♂️ Собственные бассейны с джакузи и террасы для отдыха. 🪵 Натуральная отделка: тиковое дерево, испанский сланец Sukabumi, кедровая черепица. 🌞 Высокие потолки до 6 метров и панорамные окна, обеспечивающие естественное освещение. 🏡 Просторные участки с тропическими садами.<br><br>Проект интегрирован в природную среду и спроектирован так, чтобы каждый дом сохранял максимальную приватность, при этом был открыт солнцу, воздуху и зелени.',
        galleryExterior: [
          '/img/objects/22/exterior/obj1.webp',
          '/img/objects/22/exterior/obj2.webp',
          '/img/objects/22/exterior/obj3.webp',
          '/img/objects/22/exterior/obj4.webp',
        ],
        galleryInterior: [
          '/img/objects/22/interior/obj1.webp',
          '/img/objects/22/interior/obj2.webp',
          '/img/objects/22/interior/obj3.webp',
          '/img/objects/22/interior/obj4.webp',
          '/img/objects/22/interior/obj5.webp',
          '/img/objects/22/interior/obj6.webp',
        ],
        description: 'Anchan Burgundy — роскошные виллы в тропическом стиле в престижном районе Таланг, Пхукет. <br>Anchan Burgundy — это эксклюзивный жилой комплекс премиальных вилл с частными бассейнами, расположенный в зелёном районе Таланг на севере Пхукета. Проект представляет собой элегантное сочетание современного тропического дизайна, природного уединения и доступа к лучшей инфраструктуре острова.',
        // ✅ Параметры объекта
        specs: {
          readyDate: '2027',          // срок сдачи
          areaTotal: '548м² - 751м²',           // площадь (общая)
          propertyType: 'Вилла',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 4',                   // кол-во спален
          bathrooms: '4-5',
          developer: 'Anchan Burgundy'
        },
        amenities: [
          'Личный бассейн','Панорамные окна','Ресепшн','Сад', 'Парковка'], 
        units: [
     {
    id: '1',
    title: 'Виллы',
    bedrooms: 4,
    bathrooms: 4,
    area: { min:574, max: 751 },         // м²
    floor: { min: 1, max: 1 },
    priceTHB: 37800000,
    cover: '/img/objects/22/plans/unit.webp'
          },
],
           bookingConditions: [
    { id: 1, title: 'Резервация (депозит) — при бронировании юнита', type: 'amount', type: 'percent', value: 2  },
    { id: 2, title: '1-й взнос (подписание контракта / SPA) в течение 30 дней после брони', type: 'percent', value: 28 },
    { id: 3, title: '2-й взнос — после завершения фундамента', type: 'percent', value: 15 },
    { id: 4, title: '3-й взнос — после завершения бетонной конструкции', type: 'percent', value: 15 },
    { id: 5, title: '4-й взнос — после завершения стен и кровельной плитки', type: 'percent', value: 15 },
          { id: 6, title: '5-й взнос — после завершения укладки плитки/интерьера', type: 'percent', value: 15 },
        { id: 7, title: '6-й  - финальный взнос (handover / передача)', type: 'percent', value: 10 }
            ],
   infrastructure: [
          { id: 1, title: 'UWC Thailand (UWC)', time: '' },
          { id: 2, title: 'Thanyapura Sports & Health', time: '' },
          { id: 3, title: 'Phuket International Airport', time: '' },
          { id: 4, title: 'Nai Yang Beach', time: '' },
          { id: 5, title: 'Bang Tao / Laguna Phuket', time: '' },
          { id: 6, title: 'Mission Hills / Blue Canyon (гольф-клубы)', time: '' },
        ]
      },
                                   {
        id: 21,
        city: 'phuket',
        new: false,
        name: 'The Title - Villa Estella',
        priceDollars: '558 000$',
        priceTHB: 'THB 18 600 000',
        location: 'Найянг, Пхукет',
        coordinates: [98.299435, 8.084402],
        firstImg: '/img/objects/21/start.webp',
        bgImg: '/img/objects/21/bgImg.webp',
        bigImg: '/img/objects/21/bigImg.webp',
        genImg: '/img/objects/21/genplan.webp',
        genDesc: 'Виллы площадью около 265 кв.м с тремя спальнями, каждая из которых оснащена собственной ванной комнатой, включают просторную главную спальню с гардеробной и уютным балконом. Гостиная и столовая открытой планировки плавно переходят на террасу с личным бассейном 3х12 м, создавая идеальное пространство для отдыха и встреч с семьей и друзьями. В отделке использованы качественные материалы и современные технологии, включая элементы умного дома, что обеспечивает удобство и стиль в каждой детали. ',
        //         genLegend: [
        //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior: ' Жителям доступен клубный дом с фитнес-центром, сауной, паровой баней и коворкинг-зоной, а также детская площадка, парк для прогулок с домашними животными и зоны отдыха на территории. Круглосуточная охрана и видеонаблюдение гарантируют безопасность и спокойствие. Комплекс находится всего в нескольких минутах ходьбы от пляжа Найянг и национального парка Сиринат, рядом с магазинами, ресторанами и спа-салонами, а международный аэропорт всего в 2,2 км, что обеспечивает удобство для постоянного проживания и туристической аренды. Высокий инвестиционный потенциал подкрепляется услугами управления недвижимостью, включая аренду, уход за бассейнами и садом, позволяя владельцам наслаждаться владением без забот.',
        galleryExterior: [
          '/img/objects/21/exterior/obj1.webp',
          '/img/objects/21/exterior/obj2.webp',
          '/img/objects/21/exterior/obj3.webp',
          '/img/objects/21/exterior/obj4.webp',
          '/img/objects/21/exterior/obj5.webp',
          '/img/objects/21/exterior/obj6.webp',
          '/img/objects/21/exterior/obj7.webp',
          '/img/objects/21/exterior/obj8.webp',
          '/img/objects/21/exterior/obj9.webp',
          '/img/objects/21/exterior/obj10.webp',
          '/img/objects/21/exterior/obj11.webp',
  
        ],
        galleryInterior: [
          '/img/objects/21/interior/obj1.webp',
          '/img/objects/21/interior/obj2.webp',
          '/img/objects/21/interior/obj3.webp',
          '/img/objects/21/interior/obj4.webp',
          '/img/objects/21/interior/obj5.webp',

        ],
        description: 'Эксклюзивный жилой комплекс из 26 приватных вилл премиум-класса расположен в спокойном районе Найянг на севере Пхукета. Здесь сочетаются современный комфорт и тропическая атмосфера острова — идеальное место для комфортного проживания и выгодных инвестиций. ',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q1 2027',          // срок сдачи
          areaTotal: '265м² - 265м²',           // площадь (общая)
          propertyType: 'Вилла',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 3',                   // кол-во спален
          bathrooms: '3-4',
          developer: 'Rhom Bho Property PLC'
        },
        amenities: [
          'Личный бассейн','Панорамные окна','Терраса с видом','Круглосуточная охрана','Сад', 'Парковка','Cауна', 'Детская площадка','Pet зона'], 
        units: [
     {
    id: '1',
    title: 'Виллы',
    bedrooms: 3,
    bathrooms: 3,
    area: { min:265, max: 265 },         // м²
    floor: { min: 1, max: 2 },
    priceTHB: 18600000,
    cover: '/img/objects/21/plans/unit.webp'
          },
],
           bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 200000, currency: 'THB' },
    { id: 2, title: '1-й взнос — Sales & Purchase Agreement (SPA)', type: 'percent', value: 25 },
    { id: 3, title: '2-й взнос — начало строительства / concrete start', type: 'percent', value: 15 },
    { id: 4, title: '3-й взнос — конструкция завершена', type: 'percent', value: 15 },
    { id: 5, title: '4-й взнос — стены 50% завершены', type: 'percent', value: 15 },
    { id: 6, title: '5-й взнос — потолок и отделка (finishing)', type: 'percent', value: 15 },
    { id: 7, title: '6-й взнос — ландшафт / внешние работы', type: 'percent', value: 15 }
            ],
   infrastructure: [
          { id: 1, title: 'Nai Yang Beach', time: '' },
          { id: 2, title: 'Sirinat National Park', time: '' },
          { id: 3, title: 'Phuket International Airport', time: '' },
          { id: 4, title: 'Nai Yang Beach', time: '' },
          { id: 5, title: 'Mingle Mall Phuket', time: '' },
          { id: 6, title: 'Blue Canyon Country Club', time: '' },
        ]
      },
                                  {
        id: 20,
        city: 'phuket',
        new: false,
        name: 'The Title - Villa Kirara',
        priceDollars: '917 290$',
        priceTHB: 'THB  30 000 000',
        location: 'Банг Тао, Пхукет',
        coordinates: [98.325431, 7.978450],
        firstImg: '/img/objects/20/start.webp',
        bgImg: '/img/objects/20/bgImg.webp',
        bigImg: '/img/objects/20/bigImg.webp',
        genImg: '/img/objects/20/genplan.webp',
        genDesc: 'Особенности комплекса: виллы площадью от 265 м² с современным дизайном и личными садами. Просторные 1- и 2-этажные дома с индивидуальными бассейнами и парковками. Разнообразие планировок, позволяющих подобрать вариант под любые потребности.',
        //         genLegend: [
        //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior: 'Проект находится рядом с новым торгово-развлекательным центром Mingle Mall, где доступны рестораны, магазины и развлекательные объекты. В шаговой доступности — международная школа Head Start и популярный досуговый центр Blue Tree, что делает комплекс особенно привлекательным для семей с детьми.<br><br>Благодаря престижной локации, качественной реализации и близости к ключевой инфраструктуре, виллы The Title Villa Kirara отлично подходят для собственного проживания, сезонного отдыха и сдачи в аренду. Ожидаемая доходность от аренды достигает 9%, а стоимость объектов имеет высокий потенциал роста. <br><br> Безопасность и комфорт: круглосуточная охрана и огороженная территория. Большой клубный дом с бассейном, спортзалом, детской площадкой и лаунж-зонами для отдыха и общения. Уникальная инфраструктура: фэмили онсен (семейная японская баня), амфитеатр, общая кухня и бьюти-салон.',
        galleryExterior: [
          '/img/objects/20/exterior/obj1.webp',
          '/img/objects/20/exterior/obj2.webp',
          '/img/objects/20/exterior/obj3.webp',
          '/img/objects/20/exterior/obj4.webp',
          '/img/objects/20/exterior/obj5.webp',
          '/img/objects/20/exterior/obj6.webp',
          '/img/objects/20/exterior/obj7.webp',
          '/img/objects/20/exterior/obj8.webp',
          '/img/objects/20/exterior/obj9.webp',
          '/img/objects/20/exterior/obj10.webp',
  
        ],
        galleryInterior: [
          '/img/objects/20/interior/obj1.webp',
          '/img/objects/20/interior/obj2.webp',
          '/img/objects/20/interior/obj3.webp',
          '/img/objects/20/interior/obj4.webp',
          '/img/objects/20/interior/obj5.webp',
          '/img/objects/20/interior/obj6.webp',
          '/img/objects/20/interior/obj7.webp',
          '/img/objects/20/interior/obj8.webp', 
           '/img/objects/20/interior/obj9.webp',
          '/img/objects/20/interior/obj10.webp',

        ],
        description: 'The Title Villa Kirara — эксклюзивный проект вилл в Чернг Талай, Пхукет. <br><br>Расположенный в живописном районе северного Пхукета, всего в 5–15 минутах от пляжа Банг Тао, The Title Villa Kirara представляет собой комплекс из 85 современных вилл с 2–4 спальнями и просторными земельными участками. Проект отличается продуманными планировками, высококачественной отделкой и приватностью — идеальное сочетание для комфортной жизни и выгодных инвестиций.',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q1 2027',          // срок сдачи
          areaTotal: '174м² - 380м²',           // площадь (общая)
          propertyType: 'Вилла',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 3',                   // кол-во спален
          bathrooms: '3-6',
          developer: 'Rhom Bho Property PLC'
        },
        amenities: [
          'Близко к центру','Вид на горы','Много ресторанов рядом','Рядом госпиталь','Сад', ' Зоны для детей', 'Фитнес', 'Сауна'], 
        units: [
     {
    id: '1',
    title: 'Виллы',
    bedrooms: 3,
    bathrooms: 3,
    area: { min:174.38, max: 174.38 },         // м²
    floor: { min: 1, max: 2 },
    priceTHB: 32000000,
    cover: '/img/objects/20/plans/unit5.webp'
          },
           {
    id: '2',
    title: 'Виллы',
    bedrooms: 3,
    bathrooms: 3,
    area: { min:208.67 , max: 208.67  },         // м²
    floor: { min: 1, max: 2 },
    priceTHB: 45000000,
    cover: '/img/objects/20/plans/unit4.webp'
          },
                    {
    id: '3',
    title: 'Виллы',
    bedrooms: 3,
    bathrooms: 3,
    area: { min: 181.78, max: 181.78},         // м²
    floor: { min: 1, max: 2 },
    priceTHB: 30000000,
    cover: '/img/objects/20/plans/unit2.webp'
          },
                                        {
    id: '4',
    title: 'Виллы',
    bedrooms: 4,
    bathrooms: 4,
    area: { min: 	267.48, max:	267.48},         // м²
    floor: { min: 1, max: 2 },
    priceTHB: 55000000,
    cover: '/img/objects/20/plans/unit3.webp'
          },
                                                                           {
    id: '5',
    title: 'Виллы',
    bedrooms: 4,
    bathrooms: 4,
    area: { min: 350.81, max: 350.81},         // м²
    floor: { min: 1, max: 2 },
    priceTHB: 67000000,
    cover: '/img/objects/20/plans/unit1.webp'
          },
],
        bookingConditions: [
    { id: 1, title: 'Депозит бронирования - — резерв юнита', type: 'amount', value: 200000, currency: 'THB' },
    { id: 2, title: '1-й взнос — Sales & Purchase Agreement (SPA) оплачивается в течение ≈30 дней после брони', type: 'percent', value: 25 },
    { id: 3, title: '2-й взнос (start of concrete structure)', type: 'percent', value: 15 },
    { id: 4, title: '3-й взнос (structure is completed)', type: 'percent', value: 15 },
    { id: 5, title: '4-й взнос (wall is 50% completed)', type: 'percent', value: 15 },
    { id: 6, title: '5-й взнос (ceiling and finishing completed)', type: 'percent', value: 15 },
    { id: 7, title: '6-й взнос (handover / transfer & registration) — при handover / передаче собственности', type: 'percent', value: 15 }
            ],
   infrastructure: [
          { id: 1, title: 'Bang Tao Beach', time: '' },
          { id: 2, title: 'Layan Beach', time: '' },
          { id: 3, title: 'Laguna Phuket', time: '' },
          { id: 4, title: 'Boat Avenue', time: '' },
          { id: 5, title: 'Porto de Phuket', time: '' },
          { id: 6, title: 'Robinson Lifestyle Thalang', time: '' },
          { id: 7, title: 'Blue Tree Phuket', time: '' },
          { id: 8, title: 'UWC Thailand International School', time: '' },
        ]
      },
                              {
        id: 19,
        city: 'phuket',
        new: false,
        name: 'ENIGMA RESIDENCE',
        priceDollars: '120 747$',
        priceTHB: 'THB  3 944 850',
        location: 'Равай, Пхукет',
        coordinates: [98.318256, 7.775321],
        firstImg: '/img/objects/19/start.webp',
        bgImg: '/img/objects/19/bgImg.webp',
        bigImg: '/img/objects/19/bigImg.webp',
        genImg: '/img/objects/19/genplan.webp',
        genDesc: 'В проекте — три семиэтажных здания с панорамными окнами, светлыми интерьерами в стиле минимализм и системой «умный дом». В каждой квартире уже включена встроенная кухня, техника, мебель и сантехника. На крыше размещены солнечные панели, снижающие энергозатраты и повышающие экологичность комплекса.',
        //         genLegend: [
        //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior: 'Жителям доступны бассейн-инфинити с видом на море, два тренажёрных зала, сауна, коворкинг, подземная парковка с зарядками для электромобилей, круглосуточная охрана и шаттл до пляжей и ключевых точек района. <br><br>Enigma Residence идеально подойдёт как для жизни, так и для инвестиций. Район активно развивается, а комплекс предлагает гарантированный доход 7% в год на протяжении трёх лет. Высокий спрос на аренду и рост цен делают покупку стратегически выгодной.',
        galleryExterior: [
          '/img/objects/19/exterior/obj2.webp',
          '/img/objects/19/exterior/obj3.webp',
          '/img/objects/19/exterior/obj4.webp',
          '/img/objects/19/exterior/obj5.webp',
          '/img/objects/19/exterior/obj6.webp',
  
        ],
        galleryInterior: [
          '/img/objects/19/interior/obj1.webp',
          '/img/objects/19/interior/obj2.webp',
          '/img/objects/19/interior/obj3.webp',
          '/img/objects/19/interior/obj4.webp',
          '/img/objects/19/interior/obj5.webp',
          '/img/objects/19/interior/obj6.webp',
          '/img/objects/19/interior/obj7.webp',
          '/img/objects/19/interior/obj8.webp',

        ],
        description: 'Enigma Residence — это сочетание современного стиля, природы и продуманных технологий в одном из лучших районов Пхукета. Комплекс расположен в престижной части Раваи, на возвышенности всего в 600 метрах от набережной и рядом с пляжем Nai Harn. Благодаря расположению открываются захватывающие виды на заливы Раваи и Чалонг, а также на зелёные холмы, создающие атмосферу уединения и гармонии.',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q4 2027',          // срок сдачи
          areaTotal: '35м² - 125м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1-3',                   // кол-во спален
          bathrooms: '1-3',
          developer: 'East Wind Thai'
        },
        amenities: [
          'Близко к пляжу','Бассейн на крыше с видом на море','Система "Умный дом"','Cолнечные батареи','Ресепшн','Парковка', 
        ], 
//         units: [
//      {
//     id: '1',
//     title: '1-комнатные апартаменты',
//     bedrooms: 1,
//     bathrooms: 1,
//     area: { min: 34, max: 34 },         // м²
//     floor: { min: 1, max: 7 },
//     priceTHB: 48828000,
//     cover: '/img/objects/18/plans/unit0.webp'
//           },
// ],
        bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 200000, currency: 'THB' },
    { id: 2, title: 'Подписание договора (SPA / Contract signing) в течение 21 дня после брони', type: 'percent', value: 35 },
    { id: 3, title: '2-й взнос (этап строительства) Foundation completion', type: 'percent', value: 15 },
    { id: 4, title: '3-й взнос (этап строительства) Structure completion', type: 'percent', value: 20 },
    { id: 5, title: '4-й взнос (этап строительства) Lock up stage', type: 'percent', value: 20 },
    { id: 6, title: 'Финальный взнос (handover / передача)', type: 'percent', value: 10 }
            ],
 infrastructure: [
        { id: 1, title: 'Rawai Beach', time: '' },
        { id: 2, title: 'Nai Harn Beach', time: '' },
        { id: 3, title: 'Promthep Cape', time: '' },
        { id: 4, title: 'Windmill Viewpoint', time: '' },
        { id: 5, title: 'Chalong Pier', time: '' },
        { id: 6, title: 'Residence-Rawai-Phuket', time: '' },
    ]
      },
                          {
        id: 18,
        city: 'phuket',
        new: false,
        name: 'Fantasea Condo Rawai',
        priceDollars: '147 266$',
        priceTHB: 'THB 4 828 000',
        location: 'Равай, Пхукет',
        coordinates: [98.336123, 7.800952],
        firstImg: '/img/objects/18/start.webp',
        bgImg: '/img/objects/18/bgImg.webp',
        bigImg: '/img/objects/18/bigImg.webp',
        genImg: '/img/objects/18/genplan.webp',
        genDesc: 'Апартаменты с 1 и 2 спальнями (от 34 до 52 м²) — идеальны для комфортной жизни, отпуска или инвестиций. С верхних этажей открываются виды на море, а на крыше расположен панорамный инфинити-бассейн с лаунж-зоной и небесным садом.',
        //         genLegend: [
        //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior: 'На территории: тренажёрный зал, кафе, детский клуб, коворкинг, ресепшен, парковка, охрана 24/7. Комплекс находится рядом с Robinson, Makro, пирсом Чалонг и международными школами.',
        galleryExterior: [
          '/img/objects/18/exterior/obj1.webp',
          '/img/objects/18/exterior/obj2.webp',
          '/img/objects/18/exterior/obj3.webp',
          '/img/objects/18/exterior/obj4.webp',
          '/img/objects/18/exterior/obj5.webp',
          '/img/objects/18/exterior/obj6.webp',
          '/img/objects/18/exterior/obj7.webp',
          '/img/objects/18/exterior/obj8.webp',
          '/img/objects/18/exterior/obj9.webp',
          '/img/objects/18/exterior/obj10.webp',
          '/img/objects/18/exterior/obj11.webp',
        ],
        galleryInterior: [
          '/img/objects/18/interior/obj1.webp',
          '/img/objects/18/interior/obj2.webp',
          '/img/objects/18/interior/obj1.webp',

        ],
        description: 'Современные апартаменты в 600 метрах от моря, Пхукет. <br>Fantasea Condo Rawai — это стильный жилой комплекс в тропическом районе Равай, всего в нескольких минутах от лучших пляжей южного Пхукета. Проект сочетает функциональную архитектуру, продуманные планировки и отельный уровень инфраструктуры.',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q4 2027',          // срок сдачи
          areaTotal: '34м² - 52м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1-3',                   // кол-во спален
          bathrooms: '1-3',
          developer: 'Fantasea Plus'
        },
        amenities: [
          'Бассейн','Sky Lounge & Bar','Ресепшн','Охрана на территории', 'Сад' , 'Ресторан','Детская площадка','Cпорт-зал', '24/7 охрана','Подземный паркинг', 
        ], 
        units: [
     {
    id: '1',
    title: '1-комнатные апартаменты',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 34, max: 34 },         // м²
    floor: { min: 1, max: 8 },
    priceTHB: 48828000,
    cover: '/img/objects/18/plans/unit0.webp'
          },
            {
    id: '2',
    title: '2-комнатные апартаменты',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 52, max: 52 },         // м²
    floor: { min: 1, max: 8 },
    priceTHB: 7384000,
    cover: '/img/objects/18/plans/unit1.webp'
          },
],
        bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 200000, currency: 'THB' },
    { id: 2, title: 'Подписание договора (SPA / Contract signing) оплачивается при подписании контракта / обычно ~30 дней', type: 'percent', value: 35 },
    { id: 3, title: '1-й взнос (этап строительства) — 15 января 2026', type: 'percent', value: 15 },
    { id: 4, title: '2-й взнос (этап строительства) — 15 июня 2026', type: 'percent', value: 15 },
    { id: 5, title: '3-й взнос (этап строительства) — 15 февраля 2027', type: 'percent', value: 15 },
    { id: 6, title: '4-й взнос (этап строительства) — 15 июня 2027', type: 'percent', value: 10 },
    { id: 7, title: 'Финальный взнос (handover / передача квартиры)', type: 'percent', value: 10 }
            ],
 infrastructure: [
        { id: 1, title: 'Rawai Beach', time: '' },
        { id: 2, title: 'Nai Harn Beach', time: '' },
        { id: 3, title: 'Promthep Cape', time: '' },
        { id: 4, title: 'Windmill Viewpoint', time: '' },
        { id: 5, title: 'Chalong Pier', time: '' },
        { id: 6, title: 'Ao Sane Beach', time: '' },
    ]
      },
                       {
        id: 17,
        city: 'phuket',
        new: false,
        name: 'Fantasea Condo Chalong',
        priceDollars: '81 495$',
        priceTHB: 'THB 2 670 756',
        location: 'Чалонг, Пхукет',
        coordinates: [98.353059, 7.846577],
        firstImg: '/img/objects/17/start.webp',
        bgImg: '/img/objects/17/bgImg.webp',
        bigImg: '/img/objects/17/bigImg.webp',
        genImg: '/img/objects/17/genplan.webp',
        genDesc: 'Апартаменты с 1, 2 и 3 спальнями. Площади — от 28 до 92 м². Все квартиры с мебелью, балконами, кухонными зонами и кондиционерами. Подходят как для проживания, так и для аренды.<br>Территория комплекса спроектирована в курортной концепции. Просторный бассейн, тренажёрный зал, коворкинг, ресторан, лобби, охрана, подземная и наземная парковка. Всё готово для комфортной жизни или вложений.',
        //         genLegend: [
        //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior: 'Проект управляется по стандартам Wyndham. Современные апартаменты в зелёном районе Чалонг, Пхукет.',
        galleryExterior: [
          '/img/objects/17/exterior/obj1.webp',
          '/img/objects/17/exterior/obj2.webp',
          '/img/objects/17/exterior/obj3.webp',
          '/img/objects/17/exterior/obj4.webp',
          '/img/objects/17/exterior/obj5.webp',
          '/img/objects/17/exterior/obj6.webp',
        ],
        galleryInterior: [
          '/img/objects/17/interior/obj1.webp',
          '/img/objects/17/interior/obj3.webp',
          '/img/objects/17/interior/obj5.webp',
          '/img/objects/17/interior/obj6.webp',
        ],
        description: 'Новый жилой комплекс на юге острова — в окружении природы и городской инфраструктуры. В пешей доступности Robinson Lifestyle Chalong, международные школы, фитнес-центры и спортивные клубы. До популярных пляжей Найхарн, Раваи и Ката — 7–10 минут на автомобиле.',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q4 2026',          // срок сдачи
          areaTotal: '28м² - 92м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1-3',                   // кол-во спален
          bathrooms: '1-3',
          developer: 'Fantasea Plus'
        },
        amenities: [
          'Большой Инфинити бассейн','Sky Lounge & Bar','Ресепшн','Охрана на территории', 'Сад' , 'Ресторан','Детская площадка','Cпорт-зал', '24/7 охрана','Подземный паркинг', 
        ], 
        units: [
     {
    id: '1',
    title: 'Студия',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 28, max: 28 },         // м²
    floor: { min: 1, max: 8 },
    // priceTHB: 4123000,
    cover: '/img/objects/17/plans/unit1.webp'
          },
            {
    id: '2',
    title: '1-комнатные апартаменты',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 56, max: 56 },         // м²
    floor: { min: 1, max: 8 },
    // priceTHB: 4123000,
    cover: '/img/objects/17/plans/unit2.webp'
          },
             {
    id: '3',
    title: '2-комнатные апартаменты',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 90, max: 90 },         // м²
    floor: { min: 1, max: 8 },
    // priceTHB: 4123000,
    cover: '/img/objects/17/plans/unit3.webp'
          },
],
        bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 200000, currency: 'THB' },
    { id: 2, title: 'Подписание договора (SPA / Contract signing) — в течение ~20 дней после брони', type: 'percent', value: 35 },
    { id: 3, title: '2-й взнос (начало строительства) — при старте строительства (01/11/2024)', type: 'percent', value: 20 },
    { id: 4, title: '3-й взнос (Foundation completion) — после завершения фундамента (30/04/2025)', type: 'percent', value: 10 },
    { id: 5, title: '4-й взнос (Structural completion) — после завершения конструктивных работ (31/10/2025)', type: 'percent', value: 10 },
    { id: 6, title: '5-й взнос (Architecture work start) — при начале архитектурных / внутренних работ (01/03/2026)', type: 'percent', value: 15 },
    { id: 7, title: 'Финальный взнос (handover / передача квартиры)', type: 'percent', value: 10 }
            ],
 infrastructure: [
        { id: 1, title: 'Robinson Lifestyle Chalong', time: '' },
        { id: 2, title: 'Wat Chalong', time: '' },
        { id: 3, title: 'Chalong Pier', time: '' },
        { id: 4, title: 'RIS Phuket International School', time: '' },
        { id: 5, title: 'Dibuk Hospital', time: '' },
        { id: 6, title: 'Central Phuket', time: '' },
    ]
      },
  /////////////////////////// 
  
  /////////////////////////// 

  /////////////////////////// 

  /////////////////////////// 
          {
        id: 13,
        city: 'phuket',
        new: false,
        name: 'The Title - Cielo Rawai',
        priceDollars: '128 593$',
        priceTHB: 'THB 4 340 000',
        location: 'Раваи, Пхукет',
        coordinates: [98.318871, 7.772591],
        firstImg: '/img/objects/13/start.webp',
        bgImg: '/img/objects/13/bgImg.webp',
        bigImg: '/img/objects/13/bigImg.webp',
        genImg: '/img/objects/13/genplan.jpg',
        genDesc: 'Комплекс состоит из четырёх малоэтажных зданий высотой 7 этажей, где каждая деталь продумана для создания комфортного и стильного пространства. В архитектуре сочетаются белоснежные фасады, изящные арки и панорамные окна, наполняющие интерьеры светом и воздухом. Вдохновение амальфитанским побережьем ощущается в каждом элементе — от средиземноморских садов с оливковыми деревьями до современных фресок, создающих живую и атмосферную среду.',
        //         genLegend: [
        //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior: 'Для жителей доступны семь бассейнов, включая бар у бассейна на крыше, фитнес-зал с современным оборудованием, спа-центр, коворкинг-зона, библиотека, кинозал и игровые площадки для детей. Пространства для отдыха с зелёными садами и лаундж-зонами обеспечивают идеальные условия для расслабления и общения. Комплекс работает под круглосуточной охраной, гарантируя безопасность и спокойствие. <br><br>Расположение The Title Cielo Rawai — ещё одно его преимущество. В нескольких шагах — пляж Раваи с его кристально чистой водой и атмосферой рыбацкой деревушки, а также множество ресторанов с морепродуктами, кафе и магазинов. Вблизи находится знаменитый мыс Промтеп — одно из самых живописных мест на острове, идеальное для прогулок и наслаждения закатами.',
        galleryExterior: [
          '/img/objects/13/exterior/obj1.webp',
          '/img/objects/13/exterior/obj2.webp',
          '/img/objects/13/exterior/obj3.webp',
          '/img/objects/13/exterior/obj4.webp',
          '/img/objects/13/exterior/obj5.webp',
          '/img/objects/13/exterior/obj6.webp',
          '/img/objects/13/exterior/obj7.webp',
          '/img/objects/13/exterior/obj8.webp',
          '/img/objects/13/exterior/obj9.webp',
        ],
        galleryInterior: [
          '/img/objects/13/interior/obj1.webp',
          '/img/objects/13/interior/obj2.webp',
          '/img/objects/13/interior/obj3.webp',
        ],
        description: 'The Title Cielo Rawai — это эксклюзивный жилой комплекс на южном побережье Пхукета, всего в 50 метрах от пляжа Раваи. Проект объединяет элегантность средиземноморского стиля с живописной атмосферой острова, предлагая 171 полностью меблированную квартиру с функциональными планировками от студий до 3-спальных апартаментов площадью 30–120 м². <br>The Title Cielo Rawai — это не просто дом, это стиль жизни, в котором сочетаются комфорт, красота и инвестиционный потенциал. Идеальный выбор для тех, кто ищет гармонию природы, архитектуры и современного удобства на Пхукете.',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q3 2026',          // срок сдачи
          areaTotal: '31м² - 56м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1-3',                   // кол-во спален
          bathrooms: '1-3',
          developer: 'Rhom Bho Property'
        },
        amenities: [
          '7 бассейнов', 'Спа-центр', 'Фитнес-зал', 'Зона Коворкинга', 'Библиотека', 'Сад', 'Коворкинг', 'Детская площадка', 'Парковка', 'Круглосуточная охрана', 
        ], 
        units: [
     {
    id: '1',
    title: 'Односпальные апартаменты',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 42, max: 42 },         // м²
    floor: { min: 1, max: 3 },
    priceTHB: 4123000,
    cover: '/img/objects/13/plans/unit1.webp'
          },
            {
    id: '2',
    title: 'Односпальные апартаменты',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 56, max: 56 },         // м²
    floor: { min: 1, max: 2 },
    priceTHB: 7342000,
    cover: '/img/objects/13/plans/unit2.webp'
          },
              {
    id: '3',
    title: 'Двухспальные апартаменты',
    bedrooms: 2,
    bathrooms: 3,
    area: { min: 87, max: 87 },         // м²
    floor: { min: 1, max: 2 },
    priceTHB: 9713000,
    cover: '/img/objects/13/plans/unit3.webp'
  },
],
         bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: 'Подписание договора / SPA в течение 14-30 дней после бронирования', type: 'percent', value: 25 },
    { id: 3, title: '1-й взнос (pre-construction payment)(1-я часть down payment / intermediate payment)', type: 'percent', value: 25 },
    { id: 4, title: '2-й взнос (по ходу строительства) (2-я часть down payment / before handover)', type: 'percent', value: 25 },
    { id: 5, title: 'Финальный взнос — при handover / передаче собственности', type: 'percent', value: 25 }
            ],
  infrastructure: [
        { id: 1, title: 'Rawai Beach', time: '' },
        { id: 2, title: 'Nai Harn Beach', time: '' },
        { id: 3, title: 'Yanui Beach', time: '' },
        { id: 4, title: 'Promthep Cape', time: '' },
        { id: 5, title: 'Windmill Viewpoint', time: '' },
        { id: 6, title: 'Rawai Pier', time: '' },
    ]
      },
  /////////////////////////// 
      {
        id: 12,
        city: 'phuket',
        new: false,
        name: 'The Title - Serenity',
        priceDollars: '95 943$',
        priceTHB: 'THB 3 148 011',
        location: 'Банг Тао, Пхукет',
        coordinates: [98.297836, 8.089086],
        firstImg: '/img/objects/12/start.webp',
        bgImg: '/img/objects/12/bgImg.webp',
        bigImg: '/img/objects/12/bigImg.webp',
        genImg: '/img/objects/12/genplan.jpg',
        genDesc: 'Выбирайте среди уютных однокомнатных квартир площадью от 30 кв.м до просторных двухкомнатных апартаментов на 56 кв.м — здесь найдётся идеальное решение для любого образа жизни.<br>Комплекс порадует жильцов несколькими бассейнами, фитнес-центрами, зонами для йоги и барбекю, а также спа-зоной с джакузи. Для детей предусмотрены игровые площадки, а любители развлечений оценят театральный зал и караоке. Многофункциональные лаундж-зоны создают атмосферу уюта и удобства круглый год.',
        //         genLegend: [
        //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior: 'Живя в The Title Serenity, вы получаете доступ к тишине и красоте национального парка Сиринат, а также к великолепным пляжам Найянг и Май Као. Международный аэропорт Пхукет находится всего в нескольких минутах езды, а поблизости — рестораны, магазины, спа-салоны и культурные объекты, что делает проживание здесь максимально комфортным и разнообразным.<br><br>Проект обещает стабильный рост стоимости недвижимости благодаря выгодному расположению, высоким стандартам качества и насыщенной инфраструктуре. The Title Serenity — это не просто жильё, а место, где природа встречается с комфортом и стилем жизни.',
        galleryExterior: [
          '/img/objects/12/exterior/obj1.webp',
          '/img/objects/12/exterior/obj2.webp',
          '/img/objects/12/exterior/obj3.webp',
          '/img/objects/12/exterior/obj4.webp',
          '/img/objects/12/exterior/obj5.webp',
          '/img/objects/12/exterior/obj6.webp',
          '/img/objects/12/exterior/obj7.webp',
          '/img/objects/12/exterior/obj8.webp',
          '/img/objects/12/exterior/obj9.webp',
          '/img/objects/12/exterior/obj10.webp',
          '/img/objects/12/exterior/obj11.webp',
          '/img/objects/12/exterior/obj12.webp',
          '/img/objects/12/exterior/obj13.webp',
          '/img/objects/12/exterior/obj14.webp',
          '/img/objects/12/exterior/obj15.webp',
          '/img/objects/12/exterior/obj16.webp',
          '/img/objects/12/exterior/obj17.webp',
          '/img/objects/12/exterior/obj18.webp',
          '/img/objects/12/exterior/obj19.webp',
          '/img/objects/12/exterior/obj20.webp',
          '/img/objects/12/exterior/obj21.webp',
          '/img/objects/12/exterior/obj22.webp',
          '/img/objects/12/exterior/obj23.webp',
          '/img/objects/12/exterior/obj24.webp',
          
        ],
        galleryInterior: [
          '/img/objects/12/interior/obj1.webp',
          '/img/objects/12/interior/obj2.webp',
          '/img/objects/12/interior/obj3.webp',
          '/img/objects/12/interior/obj4.webp',
          '/img/objects/12/interior/obj5.webp',
        ],
        description: 'The Title Serenity Naiyang — современный оазис комфорта и природы в сердце Пхукета. Расположенный всего в 400 метрах от живописного пляжа Найянг и рядом с национальным парком Сиринат, жилой комплекс The Title Serenity предлагает уникальное сочетание природы и современных удобств. Этот проект премиум-класса включает 814 апартаментов в шести элегантных семиэтажных зданиях, идеально подходящих как для жизни, так и для инвестиций.',
        // ✅ Параметры объекта
        specs: {
          readyDate: '2026',          // срок сдачи
          areaTotal: '30м² - 56м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1-2',                   // кол-во спален
          bathrooms: '1-2',
          developer: 'Rhom Bho Property PLC'
        },
        amenities: [
          'Несколько бассейнов', 'Бассейн на крыше', 'Бар у бассейна', 'Джакузи', 'Кинотеатр', 'Сад', 'Коворкинг', 'Зона для барбекю','Караоке','Театр', 'Детская площадка', 
        ], 
//         units: [
//      {
//     id: '1',
//     title: '1 bedroom S',
//     bedrooms: 1,
//     bathrooms: 1,
//     area: { min: 27, max: 28.09 },         // м²
//     floor: { min: 1, max: 7 },
//     priceTHB: 3500000,
//     cover: '/img/objects/11/plans/unit1.webp'
//   },
// ],
         bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: '1-й взнос (подписание договора / контракт)', type: 'percent', value: 25 },
    { id: 3, title: '2-й взнос (construction 25%)', type: 'percent', value: 25 },
    { id: 4, title: '3-й взнос (construction 50%)', type: 'percent', value: 50 },
    { id: 5, title: 'Когда строительство достигло 50% завершения', type: 'percent', value: 25 },
    { id: 6, title: 'Когда строительство достигло 75% завершения', type: 'percent', value: 25 }
            ],
 infrastructure: [
        { id: 1, title: 'Nai Yang Beach', time: '' },
        { id: 2, title: 'Sirinat National Park', time: '' },
        { id: 3, title: 'Phuket International Airport', time: '' },
        { id: 4, title: 'Nai Thon Beach', time: '' },
        { id: 5, title: 'Blue Canyon Country Club', time: '' },
        { id: 6, title: 'Splash Jungle Water Park', time: '' },
    ]
      },
  /////////////////////////// 

  /////////////////////////// 
                   {
        id: 10,
        city: 'phuket',
        new: false,
        name: 'The Title - KataBello ', 
        priceDollars: '127 961$', 
        priceTHB: 'THB 4 200 000 ', 
        location: 'Ката, Карон, Пхукет',
        coordinates: [98.303720,7.818808],
        firstImg: '/img/objects/10/start.webp',
        bgImg: '/img/objects/10/bgImg.webp',
        bigImg: '/img/objects/10/bigImg.webp',
        genImg: '/img/objects/10/genplan.webp',
        genDesc: ' Комплекс состоит из восьми семиэтажных корпусов, предлагая более 700 квартир различных планировок — от уютных студий до просторных двухкомнатных апартаментов с высокими потолками и современной отделкой. Все квартиры полностью меблированы и оборудованы встроенными кухнями, кондиционерами и современной сантехникой. Инфраструктура комплекса удовлетворит любые потребности: несколько бассейнов, включая infinity-бассейн с зоной отдыха, фитнес-центр и SPA-зона, коворкинг, кинотеатр, детские игровые площадки и даже специальные территории для домашних питомцев. Безопасность обеспечивают охраняемая территория и видеонаблюдение.',
         //         genLegend: [
         //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior:'Расположение Katabello рядом с популярными торговыми центрами Porto de Phuket и Boat Avenue, а также с ресторанами и развлекательными заведениями, создает максимальное удобство для жителей. Благодаря постоянному спросу на аренду недвижимости в этом районе, проект гарантирует высокую инвестиционную привлекательность с доходностью до 7-10% годовых. The Title Katabello — это возможность жить у моря в комфорте и стиле, а также надежно инвестировать в перспективный рынок недвижимости Пхукета.',
        galleryExterior: [
        '/img/objects/10/exterior/obj1.webp',
        '/img/objects/10/exterior/obj2.webp',
        '/img/objects/10/exterior/obj3.webp',
        '/img/objects/10/exterior/obj4.webp',
        '/img/objects/10/exterior/obj5.webp',
        '/img/objects/10/exterior/obj6.webp',
        '/img/objects/10/exterior/obj7.webp',
        '/img/objects/10/exterior/obj9.webp',
        '/img/objects/10/exterior/obj10.webp',
        '/img/objects/10/exterior/obj11.webp',
        '/img/objects/10/exterior/obj12.webp',
        '/img/objects/10/exterior/obj13.webp',
        '/img/objects/10/exterior/obj14.webp',
        '/img/objects/10/exterior/obj15.webp',
        '/img/objects/10/exterior/obj16.webp',
        '/img/objects/10/exterior/obj17.webp',
        '/img/objects/10/exterior/obj18.webp',
        '/img/objects/10/exterior/obj19.webp',
        '/img/objects/10/exterior/obj20.webp',
        '/img/objects/10/exterior/obj21.webp',
        '/img/objects/10/exterior/obj22.webp',
        '/img/objects/10/exterior/obj23.webp',
],
        galleryInterior: [
        '/img/objects/10/interior/obj1.webp',
        '/img/objects/10/interior/obj2.webp',
        '/img/objects/10/interior/obj1.webp',
     
],
        description: 'The Title Artrio Bang Tao — искусство современного комфорта и инвестиций в сердце Пхукета. Расположенный всего в 300 метрах от знаменитого пляжа Ката, The Title Katabello представляет собой масштабный жилой комплекс, объединяющий стильный дизайн, комфорт и продуманную инфраструктуру. Этот проект идеально подходит как для жизни, так и для выгодных инвестиций в одном из самых востребованных районов Пхукета.',
        // ✅ Параметры объекта
          specs: {
          readyDate: 'Q4 2027',          // срок сдачи
          areaTotal: '28м² - 37м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1-4',                   // кол-во спален
          bathrooms: '1-4',
          developer: 'AssetWise Public Company Limited'
        },
        amenities: [
          'Кинотеатр', 'Фитнес-центр', 'Залы для йоги и тайского бокса', 'Сайны',' СПА-центр','Коворкинг', 'Детский сад', 'Игровая для собак', 
        ], 
        units: [
     {
    id: '3',
    title: '1 bedroom S',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 28, max: 28 },         // м²
    floor: { min: 1, max: 6 },
    priceTHB: 4200000,
    cover: '/img/objects/10/plans/unit3.jpg'
  },
  {
    id: '1',
    title: '1 bedroom MC',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 32, max: 32 },         // м²
    floor: { min: 1, max: 6 },
    priceTHB: 4672000,
    cover: '/img/objects/10/plans/unit1.jpg'
  },
  {
    id: '2',
    title: '1 bedroom L',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 37, max: 37 },         // м²
    floor: { min: 1, max: 6 },
    priceTHB: 5513000,
    cover: '/img/objects/10/plans/unit3.jpg'
  },

],
        bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: 'Оплата после подписания договора', type: 'percent', value: 25 },
    { id: 3, title: '2-й взнос (первый этап)', type: 'percent', value: 25 },
    { id: 4, title: '3-й взнос (второй этап)', type: 'percent', value: 25 },
    { id: 5, title: 'Финальный взнос (handover / передача)', type: 'percent', value: 25 },

            ],
    infrastructure: [
      { id: 1, title: 'Laguna Golf', time: '' },
      { id: 2, title: 'Blue Tree Water Park', time: '' },
      { id: 3, title: 'Пляж Банг Тао', time: '3 минуты' },
      { id: 4, title: 'Porto de Phuket и Boat Avenue', time: '' },
      { id: 5, title: ' До аэропорта', time: '25 минут' },
  
    ]
      },
  ///////////////////////////  
               {
        id: 9,
        city: 'phuket',
        new: false,
        name: 'The Title - The Modeva', 
        priceDollars: '137 880$', 
        priceTHB: 'THB 4 524 000', 
        location: 'Банг Тао, Пхукет',
        coordinates: [98.293227,7.987910],
        firstImg: '/img/objects/9/start.webp',
        bgImg: '/img/objects/9/bgImg.webp',
        bigImg: '/img/objects/9/bigImg.webp',
        genImg: '/img/objects/9/genplan.webp',
        genDesc: 'Проект состоит из 7 зданий по 7 этажей, объединённых общей концепцией — архитектура вдохновлена формой морской волны и природным ландшафтом Пхукета. Всего предусмотрено 859 апартаментов: от компактных студий до просторных резиденций и пентхаусов площадью до 148 м². Все квартиры сдаются с отделкой, мебелью, встроенной кухней и бытовой техникой. Каждое жилое пространство спроектировано так, чтобы в нём было светло, функционально и эстетично. Просторные балконы, продуманная эргономика, мягкие линии и натуральные материалы создают атмосферу спокойствия и уюта.',
         //         genLegend: [
         //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior:'Площадь территории позволяет создать ощущение уединения и приватности даже в высокий сезон. Просторные аллеи, ландшафтный парк, зона для пробежек и велодорожки делают проект комфортным и для отдыха, и для постоянного проживания.',
        galleryExterior: [
        '/img/objects/9/exterior/obj0.webp',
        '/img/objects/9/exterior/obj1.webp',
        '/img/objects/9/exterior/obj2.webp',
        '/img/objects/9/exterior/obj3.webp',
        '/img/objects/9/exterior/obj4.webp',
        '/img/objects/9/exterior/obj5.webp',
        '/img/objects/9/exterior/obj6.webp',
        '/img/objects/9/exterior/obj7.webp',
        '/img/objects/9/exterior/obj8.webp',
        '/img/objects/9/exterior/obj9.webp',
        '/img/objects/9/exterior/obj10.webp',
        '/img/objects/9/exterior/obj11.webp',
        '/img/objects/9/exterior/obj12.webp',
        '/img/objects/9/exterior/obj13.webp',
        '/img/objects/9/exterior/obj14.webp',
        '/img/objects/9/exterior/obj15.webp',
        '/img/objects/9/exterior/obj16.webp',
        '/img/objects/9/exterior/obj17.webp',
        '/img/objects/9/exterior/obj11.webp',
        '/img/objects/9/exterior/obj18.webp',
        '/img/objects/9/exterior/obj19.webp',
        '/img/objects/9/exterior/obj20.webp',
        '/img/objects/9/exterior/obj21.webp',
],
        galleryInterior: [
        '/img/objects/9/interior/obj1.webp',
        '/img/objects/9/interior/obj2.webp',
        '/img/objects/9/interior/obj3.webp',
        '/img/objects/9/interior/obj4.webp',

],
        description: 'The Modeva — это современный жилой комплекс, расположенный всего в 5 минутах ходьбы от одного из лучших пляжей Пхукета — Банг Тао. Проект объединяет продуманный дизайн, насыщенную инфраструктуру и исключительное внимание к деталям, создавая пространство, где легко сочетать комфорт, работу и отдых.',
        // ✅ Параметры объекта
          specs: {
          readyDate: 'Q1 2026',          // срок сдачи
          areaTotal: '29м² - 148м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1-4',                   // кол-во спален
          bathrooms: '1-4',
          developer: 'AssetWise Public Company Limited'
        },
        amenities: [
          'Кинотеатр', 'Фитнес-центр', 'Залы для йоги и тайского бокса', 'Сайны',' СПА-центр','Коворкинг', 'Детский сад', 'Игровая для собак', 
        ], 
// units: [
//   {
//     id: '1',
//     title: '1 bedroom S',
//     bedrooms: 1,
//     bathrooms: 1,
//     area: { min: 27, max: 27 },         // м²
//     floor: { min: 2, max: 6 },
//     // priceTHB: 10800000,
//     cover: '/img/objects/7/plans/unit1.webp'
//   },
// ],
           bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: 'Оплата после подписания договора', type: 'percent', value: 25 },
    { id: 3, title: '2-й взнос (первый этап)', type: 'percent', value: 25 },
    { id: 4, title: '3-й взнос (второй этап)', type: 'percent', value: 25 },
    { id: 5, title: 'Финальный взнос (handover / передача)', type: 'percent', value: 25 },
           ],
  infrastructure: [
        { id: 1, title: 'Bang Tao Beach', time: '' },
        { id: 2, title: 'Boat Avenue', time: '' },
        { id: 3, title: 'Porto de Phuket', time: '' },
        { id: 4, title: 'Laguna Phuket', time: '' },
        { id: 5, title: 'Laguna Golf Phuket', time: '' },
        { id: 6, title: 'Blue Tree Phuket', time: '' },
        { id: 7, title: 'Villa Market Bang Tao', time: '' },
    ]
      },
  ///////////////////////////  
           {
        id: 8,
        city: 'phuket',     
        new: false,
        name: 'The Title - Adora', 
        priceDollars: '113 376$', 
        priceTHB: 'THB 3 720 000', 
        location: 'Раваи, Пхукет',
        coordinates: [98.333344,7.779345],
        firstImg: '/img/objects/8/start.webp',
        bgImg: '/img/objects/8/bgImg.webp',
        bigImg: '/img/objects/8/bigImg.webp',
        genImg: '/img/objects/8/genplan.webp',
        genDesc: 'Комплекс включает 8 корпусов с 210 апартаментами площадью от 30 до 87 кв.м. Варианты жилья — от компактных 1-спальных квартир до просторных 2-спальных, а также опция 1+ спальни для дополнительного пространства. <br><br>Все квартиры сдаются с качественной отделкой, встроенной мебелью и современной техникой.',
         //         genLegend: [
         //   { n: 1,  title: 'Лобби корпуса A' },
        // ],
        descriptionExterior:'The Title Adora предлагает полный набор комфортных услуг: олимпийский бассейн 50 м и Sky Pool на крыше с панорамным видом, фитнес-центр, сауны и зоны для йоги, коворкинг и переговорные комнаты для продуктивной работы, Bike Café и лаунж-зоны для отдыха и общения, детские игровые комнаты и безопасные территории для семей, парковка с зарядками для электрокаров, планируется шаттл-бас до пляжа и ключевых районов.',
        galleryExterior: [
        '/img/objects/8/exterior/obj1.webp',
        '/img/objects/8/exterior/obj2.webp',
        '/img/objects/8/exterior/obj3.webp',
        '/img/objects/8/exterior/obj4.webp',
        '/img/objects/8/exterior/obj5.webp',
        '/img/objects/8/exterior/obj6.webp',
        '/img/objects/8/exterior/obj7.webp',
        '/img/objects/8/exterior/obj8.webp',
        '/img/objects/8/exterior/obj9.webp',
        '/img/objects/8/exterior/obj10.webp',
        '/img/objects/8/exterior/obj11.webp',
        '/img/objects/8/exterior/obj12.webp',
        '/img/objects/8/exterior/obj13.webp',
        '/img/objects/8/exterior/obj14.webp',
],
        galleryInterior: [
        '/img/objects/8/interior/obj1.webp',
        '/img/objects/8/interior/obj2.webp',
        '/img/objects/8/interior/obj3.webp',
          '/img/objects/8/interior/obj4.webp',
        '/img/objects/8/interior/obj5.webp',
],
        description: 'The Title Adora Rawai — Ваш уютный дом на Пхукете. Cовременный жилой комплекс в районе Равай, всего в 400 метрах от пляжа и рядом с живописной рыбацкой деревней. Здесь гармонично сочетаются природная красота, комфорт городской жизни и продуманная инфраструктура. Проект создан для тех, кто ценит уют, безопасность и удобство.',
        // ✅ Параметры объекта
          specs: {
          readyDate: 'Q1 2027',          // срок сдачи
          areaTotal: '30м² - 87м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1-4',                   // кол-во спален
          bathrooms: '1-4',
          developer: 'Rhom Bho Property'
        },
        amenities: [
          'Близко к пляжу', 'Экологически чистый район', 'Вид на море', 'Крытый бассейн',' СПА-центр','Зона отдыха', 'Детская игровая', 'Комната хобби', 
        ], 
// units: [
//   {
//     id: '1',
//     title: '1 bedroom S',
//     bedrooms: 1,
//     bathrooms: 1,
//     area: { min: 27, max: 27 },         // м²
//     floor: { min: 2, max: 6 },
//     // priceTHB: 10800000,
//     cover: '/img/objects/7/plans/unit1.webp'
//   },
// ],
          bookingConditions: [
    { id: 1, title: 'Депозит бронирования', type: 'amount', value: 100000, currency: 'THB' },
    { id: 2, title: 'Оплата после подписания договора', type: 'percent', value: 25 },
    { id: 3, title: '2-й взнос (первый этап)', type: 'percent', value: 25 },
    { id: 4, title: '3-й взнос (второй этап)', type: 'percent', value: 25 },
    { id: 5, title: 'Финальный взнос (handover / передача)', type: 'percent', value: 25 },

            ],
 infrastructure: [
        { id: 1, title: 'Rawai Beach', time: '' },
        { id: 2, title: 'Nai Harn Beach', time: '' },
        { id: 3, title: 'Yanui Beach', time: '' },
        { id: 4, title: 'Promthep Cape', time: '' },
        { id: 5, title: 'Windmill Viewpoint', time: '' },
        { id: 6, title: 'Rawai Pier', time: '' },

    ]
      },

  ///////////////////////////    

  ///////////////////////////    
      {
        id: 4,
        city: 'phuket',
        new: false,
        name: 'BAMBOO FOREST', //имя 
        priceDollars: '171 646$', //цена в долларах
        priceTHB: 'THB 5 650 000', //цена в батах
        location: 'Банг Тао, Пхукет',
        coordinates: [98.297270,8.032288],
        firstImg: '/img/objects/4/start.webp',
        bgImg: '/img/objects/4/bgImg.webp',
        bigImg: '/img/objects/4/bigImg.webp',
        genImg: '/img/objects/4/genplan.webp',
        genDesc: 'Комплекс состоит из трёх корпусов: один — отельный, два — жилые. Их объединяет продуманная инфраструктура и благоустройство — от коворкинга и фитнес-зон до площадки для выгула собак — благодаря чему проект полностью самодостаточен и удобен для жизни и отдыха.',
        genLegend: [
  { n: 1,  title: 'Лобби корпуса A' },
  { n: 2,  title: 'Ресторан и бар' },
  { n: 3,  title: 'Коворкинг' },
  { n: 4,  title: 'Спортзал' },
  { n: 5,  title: 'Входная группа для жильцов' },
  { n: 6,  title: 'Лобби корпуса B' },
  { n: 7,  title: 'Рецепция' },
  { n: 8,  title: 'Зона отдыха для гостей' },
  { n: 9,  title: 'Бассейн для детей' },
  { n: 10, title: 'Бассейн для жителей' },
  { n: 11, title: 'Бассейн для гостей' },
  { n: 12, title: 'Игровая зона для детей' },
  { n: 13, title: 'Зона отдыха при отеле' },
  { n: 14, title: 'Входная группа отеля' },
  { n: 15, title: 'Зона для выгула собак' }
],
        images: [
          '/img/objects/4/gallery/obj4.webp',
          '/img/objects/4/gallery/obj5.webp',
          '/img/objects/4/gallery/obj6.webp',
          '/img/objects/4/gallery/obj1.webp',
          '/img/objects/4/gallery/obj2.webp',
          '/img/objects/4/gallery/obj3.webp',
          // '/img/objects/4/gallery/obj7.webp'
        ],
        // в объекте BAMBOO FOREST
galleryExterior: [
  '/img/objects/4/exterior/obj1.webp',
  '/img/objects/4/exterior/obj2.webp',
  '/img/objects/4/exterior/obj3.webp',
   '/img/objects/4/exterior/obj4.webp',
  '/img/objects/4/exterior/obj5.webp',
  '/img/objects/4/exterior/obj6.webp',
],
galleryInterior: [
  '/img/objects/4/interior/obj1.webp',
  '/img/objects/4/interior/obj2.webp',
  '/img/objects/4/interior/obj3.webp',
   '/img/objects/4/interior/obj5.webp',
  '/img/objects/4/interior/obj6.webp',
  '/img/objects/4/interior/obj7.webp',
  '/img/objects/4/interior/obj8.webp',
],
        description: 'Bamboo Forest — это уникальный жилой комплекс на Пхукете из 3 корпусов, вдохновлённый гармонией природы и современными технологиями. <br>Архитектура в стиле бамбукового леса, панорамные виды и система «умный дом» создают атмосферу уюта и премиального комфорта. Комплекс расположен всего в 1,3 км от пляжа Лаян и предлагает апартаменты с авторским дизайном, фитнес-залом, тремя бассейнами и зелёными аллеями. <br><br>Здесь идеально сочетаются стиль, функциональность и выгодные инвестиционные возможности с доходностью до 12% годовых.',
        // ✅ Параметры объекта
        specs: {
          readyDate: 'Q4 2027',          // срок сдачи
          areaTotal: 'от 42 до 74м²',           // площадь (общая)
          propertyType: 'Апартаменты',   // тип объекта: Вилла/Апартаменты/Кондо/Таунхаус
          finishing: 'Под ключ',         // отделка: черновая/white box/под ключ/меблирован
          bedrooms: 'от 1',                   // кол-во спален
          bathrooms: '1-2',
          developer: 'Harmony Group'
          // при желании можно вынести сюда
        },
        amenities: [                     // удобства (иконки/чипсы)
          'Три бассейна (включая детский)', 'Парковка', 'Система "умного дома"', 'Фитнес', 'Детская зона', 'Коворкинг', 'прогулочные аллеи', 'Pet-friendly'
        ], 
        // в объекте BAMBOO FOREST
units: [
  {
    id: 'studio',
    title: 'Bamboo Forest – cтудия',
    bedrooms: 0,
    bathrooms: 1,
    area: { min: 42, max: 52 },         // м²
    floor: { min: 2, max: 7 },
    priceTHB: 5650000,
    // опционально:
    priceUSD: 120000,
    cover: '/img/objects/4/plans/unit1.webp'
  },
  {
    id: '1br',
    title: 'Bamboo Forest – 1 спальня',
    bedrooms: 1,
    bathrooms: 1,
    area: { min: 50, max: 83 },
    floor: { min: 2, max: 7 },
    priceTHB: 7000000,
    cover: '/img/objects/4/plans/unit2.png'
  },
  {
    id: '2br',
    title: 'Bamboo Forest – 2 спальни',
    bedrooms: 2,
    bathrooms: 2,
    area: { min: 74, max: 144 },
    floor: { min: 2, max: 7 },
    priceTHB: 9900000,
    cover: '/img/objects/4/plans/unit3.png'
  }
],
        //условия оплаты
        bookingConditions: [
    { id: 1, title: 'Резервация (депозит) — при бронировании юнита', type: 'amount', type: 'percent', value: 2  },
    { id: 2, title: '1-й взнос (подписание контракта / SPA)', type: 'percent', value: 33 },
    { id: 3, title: '2-й взнос — до 30 сентября 2025', type: 'percent', value: 15 },
    { id: 4, title: '3-й взнос — до 30 июня 2026', type: 'percent', value: 15 },
    { id: 5, title: '4-й взнос — до 30 декабря 2026', type: 'percent', value: 15 },
          { id: 6, title: '5-й взнос — до 30 июня 2027', type: 'percent', value: 10 },
        { id: 7, title: '6-й / Финальный взнос (handover) при получении ключей (30 декабря 2027)', type: 'percent', value: 10 }
            ],
                //  Инфраструктура рядом
       infrastructure: [
        { id: 1, title: 'Layan Beach', time: '' },
        { id: 2, title: 'Bang Tao Beach', time: '' },
        { id: 3, title: 'Boat Avenue', time: '' },
        { id: 4, title: 'Porto de Phuket', time: '' },
        { id: 5, title: 'Laguna Phuket', time: '' },
        { id: 6, title: 'Blue Tree Phuket', time: '' },

    ]
      },
    ],
    selectedProperty: null,
    propertiesLoaded: false
  }),

  getters: {
    propertiesByPriceRange: (state) => (min, max) =>
    state.properties.filter(p => {
      const price = Number(p.priceDollars.replace(/\s|\$/g, ''))
      return price >= min && price <= max
    }),
    getBestProperties: (state) => state.properties.filter(p => p.status === 'best'),
    getAllBestProperties: (state) => state.properties,
    propertyCount: (state) => state.properties.length,
    hasSelectedProperty: (state) => state.selectedProperty !== null
  },

  actions: {
    async loadPropertiesFromJSON(path = '/api/properties') {
      try {
        const requestFetch = useRequestFetch()
        const data = await requestFetch(path)
        if (Array.isArray(data) && data.length) {
          this.properties = data
          this.propertiesLoaded = true
        }
      } catch (e) {
        console.error('Ошибка при загрузке данных:', e)
      }
    },
    async ensureLoaded() {
      if (!this.propertiesLoaded) await this.loadPropertiesFromJSON()
    },
    setProperties(list) { this.properties = list },
    selectProperty(p) { this.selectedProperty = p },
    clearSelectedProperty() { this.selectedProperty = null }
  }
})
