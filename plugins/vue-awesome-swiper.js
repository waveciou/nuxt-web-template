import Vue from 'vue';
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay, Navigation } from 'swiper/swiper.esm';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';

SwiperClass.use([Pagination, Mousewheel, Autoplay, Navigation]);
Vue.use(getAwesomeSwiper(SwiperClass));