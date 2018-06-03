<template>
<div class="header">
   <div class="header-left">
       <div class="iconfont back-icon">&#xe624;</div>
   </div>
   <div class="header-input">
       <span class="iconfont">&#xe632;</span>
       输入城市/景点/游玩主题
    </div>
   <div class="header-right">
       {{this.city}}
       <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
</div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

// 使用stylus来写样式
// scoped使样式不对其他组件产生影响
<style lang="stylus" scoped>
// 1rem = html font-size = 50px
@import '~styles/varibles.styl'
.header {
    display: flex
    // ??
    line-height: 0.86rem
    background: $bgColor
    // 字体颜色
    color: #fff

    .header-left {
        width: 0.64rem
        float: left
        .back-icon{
            text-align: center
            font-size: .4rem
        }
    }

    .header-input {
        flex: 1
        height: .62rem
        line-height: .62rem
        margin-top: .12rem
        margin-left: .2rem
        padding-left: .2rem
        background: #fff
        border-radius: .1rem
        color: #ccc
    }

    .header-right{
        width: 1.24rem
        float: right
        text-align: center
        .arrow-icon{
            font-size: .24rem
            margin-left: -.04rem
        }
    }
}
</style>
