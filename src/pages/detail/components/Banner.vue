<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img
                class="banner-img"
                src="//img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_600x330_866232e3.jpg"/>
            <div class="banner-info">
                <div class="banner-title">
                    上海玛雅海滩水公园
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe626;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClick"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_r_800x800_47582402.jpg',
        'http://img1.qunarzz.com/sight/p0/1506/dd/7659217cc529114eba75b42ace21ca4a.water.jpg_r_800x800_9456bcaa.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClick () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner{
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img{
        width: 100%
    }
    .banner-info{
        display: flex
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .6rem
        color: #fff
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
        .banner-title{
            flex: 1
            font-size: .32rem
            padding 0 .2rem
        }
        .banner-number{
            height: .32rem
            line-height: .32rem
            margin-top: .14rem
            padding: 0 .4rem
            border-radius: .2rem
            background: rgba(0, 0, 0, .8)
            font-size: .24rem
            .banner-icon{
                font-size: .24rem
            }
        }
    }
}
</style>
