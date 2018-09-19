<template>
  <div id="app">
    <transition name="fadePage">
      <router-view></router-view> 
    </transition>
    <div class="custom-mouse">
      <i class="fas fa-caret-left"></i>
      <i class="fas fa-caret-right"></i>
    </div>
  </div>
</template>

<script>
export default {
    name:'home',
      data () {
        return {
          show:true
        }
      },
      beforeRouteLeave (to, from, next) {
      function onPageLeave(){

      }
      onPageLeave();
      
      next();
    },
    mounted: function () {
      this.$nextTick(function () {

      })
    }
}
</script>

<style lang="scss">

.fadePage-enter-active, .fadePage-leave-active {
  visibility:hidden;
  transition: visibility 0s;
  transition-delay: 1.5s;
}

@font-face {
    font-family: Butler-Black;
    src: url("assets/fonts/butler_black-webfont.woff2") format("woff2"),
    url("assets/fonts/butler_black-webfont.woff") format("woff");
}

@font-face {
    font-family: Butler-Regular;
    src: url("assets/fonts/butler_regular-webfont.woff2") format("woff2"),
    url("assets/fonts/butler_regular-webfont.woff") format("woff");
}

@font-face {
    font-family: Butler-ExtraBold;
    src: url("assets/fonts/butler_extrabold-webfont.woff2") format("woff2"),
    url("assets/fonts/butler_extrabold-webfont.woff") format("woff");
}

@font-face {
    font-family: Butler-Bold;
    src: url("assets/fonts/butler_bold-webfont.woff2") format("woff2"),
    url("assets/fonts/butler_bold-webfont.woff") format("woff");
}

@font-face {
    font-family: Brandon-Bold;
    src: url("assets/fonts/brandon_bld-webfont.woff2") format("woff2"),
    url("assets/fonts/brandon_bld-webfont.woff") format("woff");
}

@font-face {
    font-family: Brandon-Black;
    src: url("assets/fonts/brandon_blk-webfont.woff2") format("woff2"),
    url("assets/fonts/brandon_blk-webfont.woff") format("woff");
}

@font-face {
    font-family: Brandon-Regular;
    src: url("assets/fonts/brandon_reg-webfont.woff2") format("woff2"),
    url("assets/fonts/brandon_reg-webfont.woff") format("woff");
}

@font-face {
    font-family: Gilroy-Extrabold;
    src: url("assets/fonts/gilroy/gilroy-extrabold-webfont.woff2") format("woff2"),
    url("assets/fonts/gilroy/gilroy-extrabold-webfont.woff") format("woff");
}
@font-face {
    font-family: Gilroy-Regular;
    src: url("assets/fonts/gilroy/gilroy-regular-webfont.woff2") format("woff2"),
    url("assets/fonts/gilroy/gilroy-regular-webfont.woff") format("woff");
}

body{
  margin:0;
  padding:0;
  width:100%;
  height:100vh;
  //background-color:#F9F9F9;
}
.menu-link{
  opacity:0;
}
.works-link{
  font-family:"Brandon-Regular";
  position:absolute;
  overflow:hidden;
  top:8vh;
  left:7vh;
  z-index:2;
  animation: enterLink 1s;
  animation-delay:1s;
  animation-play-state: paused;
  animation-fill-mode: forwards;
  &::before{
    content:"";
    display:block;
    position:absolute;
    // top: 50%;
    top:0;
    // transform: translate3d(-100%, -50%, 0);
    //width:100%;
    height:100%;
    background-color:black;
    transition:0.5s ease;
  }
  &:hover::before{
    width:100%;
    transform: translate3d(100%, 0, 0);
  }
  &::after{
    content:"";
    display:block;
    position:absolute;
    bottom: 0;
    transform: translate3d(100%, 0, 0);
    width:100%;
    height:8px;
    right:0;
    background-color:#E0DAD5;
    transition:0.5s ease;
    z-index:-2;
  }
  &:hover::after{
    transition-delay:0.6s;
    transform: translate3d(0px, 0, 0);
  }
}
.contact-link{
  font-family:"Brandon-Regular";
  position:absolute;
  overflow:hidden;
  bottom:8vh;
  left:7vh;
  z-index:2;
  animation: enterLink 1s;
  animation-delay:1s;
  animation-play-state: paused;
  animation-fill-mode: forwards;
  &::before{
    content:"";
    display:block;
    position:absolute;
    // top: 50%;
    top:0;
    // transform: translate3d(-100%, -50%, 0);
    //width:100%;
    height:100%;
    background-color:black;
    transition:0.5s ease;
  }
  &:hover::before{
    width:100%;
    transform: translate3d(102%, 0, 0);
  }
  &::after{
    content:"";
    display:block;
    position:absolute;
    bottom: 0;
    transform: translate3d(105%, 0, 0);
    width:100%;
    height:8px;
    right:0;
    background-color:#E0DAD5;
    transition:0.5s ease;
    z-index:-2;
  }
  &:hover::after{
    transition-delay:0.6s;
    transform: translate3d(0px, 0, 0);
  }
}
.burger-menu{
  position:absolute;
  top:7vh;
  right:7vh;
  opacity:1;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:36px;
  cursor:none;
  z-index:3;
}
.circle{
  width:8px;
  height:8px;
  border-radius:50px;
  border:1px solid black;
}
</style>
