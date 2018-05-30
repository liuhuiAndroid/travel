<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // 显示指示器
        pagination: '.swiper-pagination',
        // 支持轮播循环
        loop: true
      },
      swiperList: [
        {
          id: '001',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg'
        },
        {
          id: '002',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1805/61/2fd7aba11a23cf02.jpg_750x200_c99aad75.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
// style穿透
.wrapper >>> .swiper-pagination-bullet-active {
    background: #fff !important;
}

.wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.66%;
    background: #eee;

    .swiper-img {
        width: 100%;
    }
}
</style>
