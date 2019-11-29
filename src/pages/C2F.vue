<template>
  <div class="row mt-5">
    <div class="col-md-5 offset-md-4">
      <div class="card">
        <div class="card-head">
          <h2>Temperature Conversion</h2>
          <input id="toggleTemperature" type="checkbox" v-model="isCelsius"/>
          <label for="toggleTemperature">切換: {{ toggleTemperature }}</label>
          <div class="celsius form-inline">
            <span v-show="!isCelsius">攝氏：</span>
            <span class="" v-show="isCelsius">華氏：</span>
            <input class="form-control col-md-3" type="number" v-model="userInput"/>
            <span v-show="!isCelsius">℃</span>
            <span v-show="isCelsius">℉</span>
          </div>
          <h3 v-if="isCelsius">攝氏： {{ celsius }} ℃ </h3>
          <h3 v-if="!isCelsius">華氏： {{ fahrenheit }} ℉ </h3>
          <button class="btn btn-outline-primary" @click="temperatureConversion()">Temperature Conversion</button>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userInput: 0,
      isCelsius: false
    }
  },
  computed: {
    fahrenheit () {
      return this.userInput * 9/5 + 32;
    },
    celsius () {
      return (this.userInput-32)  * 5/9;
    },
    toggleTemperature () {
      return this.isCelsius ? "攝氏 轉換 華氏" : "華氏 轉換 攝氏";
    }
  }
}
</script>
<style>
  .celsius {
    font-size: 1.5em;
  }
</style>
