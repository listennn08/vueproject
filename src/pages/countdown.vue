<template>
  <div class="container-fluid">
      <div id="countdown" class="col-md-6 alert-success">
        {{ count.mm }} : {{ count.ss }}
      </div>
      <button class="col-md-3 btn btn-lg btn-outline-primary" @click="start"> Start </button>
      <button class="col-md-3 btn btn-lg btn-outline-danger" @click="resetCountdown"> Reset </button>

      <audio id="audio" src="../static/bell.wav"></audio>
  </div>
</template>
<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      // mm: 'getCountdownmm',
      // ss: 'getCountdownss',
      count: 'getCountA'
    }),
  },
  methods: {
    
    start () {
      setInterval(this.startCountdown, 1000)
    },
    
    playAudio() {
      document.getElementById('audio').play();
    },
    ...mapActions([
      'resetCountdown'
    ]),
    ...mapActions({startCountdown:'startCountdown',})
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
