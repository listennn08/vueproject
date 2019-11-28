<template>
  <div class="container-fluid">
      <div id="countdown" class="col-md-6 alert-success">
<<<<<<< HEAD
        {{ mm }} : {{ ss }}
      </div>
      <button class="col-md-3 btn btn-lg btn-outline-primary" @click="start()"> Start </button>
      <button class="col-md-3 btn btn-lg btn-outline-danger" @click="reset()"> Reset </button>
=======
        {{ count.mm }} : {{ count.ss }}
      </div>
      <button class="col-md-3 btn btn-lg btn-outline-primary" @click="start"> Start </button>
      <button class="col-md-3 btn btn-lg btn-outline-danger" @click="resetCountdown"> Reset </button>
>>>>>>> b3d935a3d567701eca7861e5f4a1b18758c18c57

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
  computed: mapGetters({
      mm: 'getCountMinute',
      ss: 'getCountSecond',
      time: 'getCountTimer',
      countA: 'getCountA',
      // {
      //   get() {
      //
      //   },
      //   set() {
      //     start
      //   }
      // }
  }),
  methods: {
<<<<<<< HEAD
    ...mapActions({
      reset: 'resetCount',
      start: 'startCount'
    }),
    // start () {
    //   this.Timer();
    // },
    // reset () {
    //   this.count.mm = '08';
    //   this.count.ss = '00';
    //   document.getElementById('countdown').className = 'col-md-6 alert-success'
    //   if (this.time) {
    //     clearInterval(this.time);
    //   }
    // },
=======

    start () {
      setInterval(this.startCountdown, 1000)
    },

>>>>>>> b3d935a3d567701eca7861e5f4a1b18758c18c57
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
