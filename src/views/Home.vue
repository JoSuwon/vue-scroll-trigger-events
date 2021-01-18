<template>
  <div class="wrap">
    <div class="section section1">section1</div>
    <div class="section section2">section2</div>
    <div class="section section3">section3</div>
    <div class="section section4">section4</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    const subject = document.querySelector('.wrap');
    const section2 = document.querySelector('.section2');
    const section3 = document.querySelector('.section3');
    const section4 = document.querySelector('.section4');

    this.$scroll.setSubject(subject, 50); //주체의 상위 30% 까지 왔을때

    // 섹션 2가 주체(wrap)의 상위기준 30% 까지 왔을때 실행될 메서드
    this.$scroll.addEvent(subject, section2, this.section_2_trigger);
    // 섹션 3가 주체(wrap)의 상위기준 30% 까지 왔을때 실행될 메서드
    this.$scroll.addEvent(subject, section3, this.section_3_trigger);
    // 섹션 4가 주체(wrap)의 상위기준 30% 까지 왔을때 실행될 메서드
    this.$scroll.addEvent(subject, section4, this.section_4_trigger);
    // 주체의 스크롤이벤트 시작
    this.$scroll.eventsOn(subject);

    // 주체의 스크롤 이벤트 제거 및 하위 섹션 콜백 이벤트 제거
    // this.$scroll.clearEvent(subject);
  },
  methods: {
    section_2_trigger() {
      document.querySelector('.section2').style.fontSize = '100px';
      document.querySelector('.section2').style.color = 'white';
    },
    section_3_trigger() {
      document.querySelector('.section3').style.fontSize = '100px';
      document.querySelector('.section3').style.color = 'white';
    },
    section_4_trigger() {
      document.querySelector('.section4').style.fontSize = '100px';
      document.querySelector('.section4').style.color = 'white';
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  height: 500px;
  width: 500px;
  overflow: auto;
  .section {
    height: 900px;
    font-size: 40px;
  }
  .section1 {
    background-color: red;
  }
  .section2 {
    background-color: blue;
  }
  .section3 {
    background-color: green;
  }
  .section4 {
    background-color: orange;
  }
}
</style>