<template>
<div class="header">
   <div class="header-left">
       <div class="iconfont back-icon">&#xe624;</div>
   </div>
   <div class="header-input">
       <span class="iconfont">&#xe632;</span>
       输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
        <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </router-link>
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
@import '~styles/varibles.styl';

.header {
    display: flex;
    // ??
    line-height: $headerHeight
    background: $bgColor;
    // 字体颜色
    color: #fff;

    .header-left {
        width: 0.64rem;
        float: left;

        .back-icon {
            text-align: center;
            font-size: 0.4rem;
        }
    }

    .header-input {
        flex: 1;
        height: 0.62rem;
        line-height: 0.62rem;
        margin-top: 0.12rem;
        margin-left: 0.2rem;
        padding-left: 0.2rem;
        background: #fff;
        border-radius: 0.1rem;
        color: #ccc;
    }

    .header-right {
        width: 1.24rem;
        float: right;
        text-align: center;
        color: #fff
        .arrow-icon {
            font-size: 0.24rem;
            margin-left: -0.04rem;
        }
    }
}
</style>
