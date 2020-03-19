<template>
     <div class="container">
        <h1>匯率試算</h1>
        <div class="col-md-5 mt-5 offset-md-3">
            <div class="row">
                <div class="form-group">
                    <select id="From" class="custom-select" @change="changeCurrency()">
                        <option :value="item.CurrencyCode" v-for="(item, index) in options" :key="index">{{ item.CurrencyCnName }}</option>
                    </select>
                    <button id="changebtn" class="btn btn-outline-success offset-5" @click="changeSelect()">↑↓</button>
                    <select id="To" class="custom-select" @change="changeCurrency()">
                        <option :value="item.CurrencyCode" v-for="(item, index) in options" :key="index">{{ item.CurrencyCnName }}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="form-inline mb-2 col-md-5 offset-2">
                    <input id="FromNum" class="form-control mr-5" type="number" :placeholder="fromNum" v-model="fromNum" min="0">
                    <input id="ToNum" class="form-control" disabled="disabled" type="number" :value="toNum">
                </div>
            </div>
            <div class="row">
                <button @click="changeCurrency()" class="btn btn-outline-primary offset-5">convert</button>
            </div>
        </div>
     </div>
</template>
<script>
import axios from 'axios';
export default {
    data () {
        return {
            options: '',
            fromNum: 0,
            toNum: 0,
            API: "https://cors-anywhere.herokuapp.com/https://tw.rter.info/capi.php"

        }
    },
    created () {
        axios.get('/vueproject/static/currencies.json')//.get('/vueproject/static/currencies.json')
            .then(async response => this.options = await response.data)
    },
    watch: {
      fromNum: {
        async handler (val) {
          this.changeCurrency(val);
        },
        deep: true
      }
    },
    methods: {
        async changeCurrency (val) {
            this.fromNum = this.fromNum ? parseFloat(this.fromNum) : 0;
            val = val ? val : this.fromNum;
            let from = document.getElementById('From').options[document.getElementById('From').selectedIndex].value;
            let To = document.getElementById('To').options[document.getElementById('To').selectedIndex == -1 ? 0 : document.getElementById('To').selectedIndex].value;
            let tmpTo, rate, fromN;
            if (from == To) {
              this.toNum = this.fromNum;
              return;
            }
            if (from != "USD") {
              tmpTo = from;
              from = "USD"
              rate = await this.getRate(from, tmpTo);
              fromN = parseFloat(val) / parseFloat(rate);
            }
            tmpTo = To;
            rate = await this.getRate(from, tmpTo)
            this.toNum = parseFloat(fromN) * parseFloat(rate);
        },
        async getRate (from, to) {
            return await axios(this.API)
                .then( response => response.data)
                .then( data => data[from+to].Exrate)
                .then(exrate=> exrate)
        },
        changeSelect () {
          let tmp = document.getElementById('From').selectedIndex;
          document.getElementById('From').options[document.getElementById('To').selectedIndex].selected = true;
          document.getElementById('To').options[tmp].selected = true;
          this.changeCurrency();
        }
    }
}
</script>
