<template>
     <div class="container">
        <h1>匯率試算</h1>
        <div class="col-md-5 mt-5 offset-md-3">
            <div class="row">
                <div class="form-group">
                    <select id="From" class="custom-select">
                        <option :value="item.CurrencyCode" v-for="(item, index) in options" :key="index">{{ item.CurrencyCnName }}</option>
                    </select>
                    <button id="changebtn" class="btn btn-outline-success offset-5">↑↓</button>
                    <select id="To" class="custom-select">
                        <option :value="item.CurrencyCode" v-for="(item, index) in options" :key="index">{{ item.CurrencyCnName }}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="form-inline mb-2 col-md-5 offset-2">
                    <input id="FromNum" class="form-control mr-5" type="number" :value="fromNum"> 
                    <input id="ToNum" class="form-control" disabled="disabled" type="number" v-model="toNum">
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
            API: "https://cors-anywhere.herokuapp.com/https://tw.rter.info/capi.php"
            
        }
    },
    created () {
        axios.get('../static/currencies.json')//.get('/vueproject/static/currencies.json')
            .then(async response => this.options = await response.data)
    },
    computed: {
        /*
        toNum () {
            let from = document.getElementById('From').options[document.getElementById('From').selectedIndex].value;
            let To = document.getElementById('To').options[document.getElementById('To').selectedIndex].value;
            let tmpTo, rate, fromN;
            if (from != "USD") {
                tmpTo = from;
                from = "USD"
                rate = this.getRate(from, tmpTo);
                console.log(rate)
                fromN = parseInt(this.fromNum) / parseFloat(rate);
            }
            tmpTo = To;
            console.log(from+" " + tmpTo)
            rate = this.getRate(from, tmpTo) // .then(async data=>await data);
            return parseFloat(fromN) * parseFloat(rate);
        }
        */
    },
    methods: {
        async getRate (from, to) {
            return await axios(this.API)
                .then( response => response.data)
                .then( data => data[from+to].Exrate)
                .then(exrate=> exrate)
        }
    }
}
</script>