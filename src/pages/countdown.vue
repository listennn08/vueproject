<template>
  <div class="container-fluid">
      <div id="countdown" class="col-md-6 alert-success" v-bind="count" :key="count.idx">
        {{ count.mm }} : {{ count.ss }}
      </div>
      <button class="col-md-3 bnt-lg btn-primary" @click="start"> Start </button>
      <button class="col-md-3 bnt-lg btn-danger" @click="reset"> Reset </button>

      <audio id="audio" src="../static/bell.wav"></audio>
  </div>
</template>
<script>
export default {
  data () {
    return {
      count: {
        idx: 1,
        mm: '06',
        ss: '01',
      },
      time: null,
    }
  },
  methods: {
    Timer () {
      this.time = setInterval( () => {
        if (+this.count.ss == 0) {
          this.count.mm = '0' + --this.count.mm;
          this.count.ss = 59;
        } else {
          this.count.ss--;
        }
        if (this.count.ss < 10) {
           this.count.ss = '0' + this.count.ss;
         }
        if ( +this.count.mm <= 6 && +this.count.ss == 0) {
          document.getElementById('countdown').className = 'col-md-6 alert-warning'
          this.playAudio();
        }
        if (+this.count.mm == 0 && +this.count.ss == 0) {
          document.getElementById('countdown').className = 'col-md-6 alert-danger'
          clearInterval(this.time);
          this.playAudio();
        }
      }, 1000);
    },
    start () {
      this.Timer();
    },
    reset () {
      this.count.mm = '06';
      this.count.ss = '01';
      document.getElementById('countdown').className = 'col-md-6 alert-success'
      if (this.time) {
        clearInterval(this.time);
      }
    },
    playAudio() {
      document.getElementById('audio').play();
    }
  }

}
</script>
<style>
.container-fluid {
  position: fixed;
  top: 40%;
  left: 25%;
  width: 100%;
}
#countdown {
  text-align: center;
  font-size: 80px;

}

#audio {
  display: none;
}
</style>
