<template>
  <div class="container-fluid">
      <div id="countdown" class="col-md-6 alert-success">
        {{ mm }} : {{ ss }}
      </div>
      <button class="col-md-3 btn btn-lg btn-outline-primary" @click="getStart()"> Start </button>
      <button class="col-md-3 btn btn-lg btn-outline-danger" @click="resetCount()"> Reset </button>

      <audio id="audio" src="/vueproject/static/bell.wav"></audio>
  </div>
</template>
<script>
  import { mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        timer: null,
      }
    },
    computed: {
      ...mapGetters({
         mm: 'getCountMinute',
         ss: 'getCountSecond',
        }),
    },

    methods: {
      ...mapActions({
        reset: 'resetCount',
        start: 'startCount',
      }),
      getStart () {
        this.timer = setInterval( ()=> {
          let count = document.getElementById('countdown').innerHTML.trim();
          if (count == "00 : 01") clearInterval(this.timer)
          this.start()
        },1000)
      },
      resetCount () {
        clearInterval(this.timer);
        this.reset();
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
