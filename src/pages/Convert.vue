<template>
    <div class="mt-5">
        <div class="col-md-10 offset-md-1">
            <h1>中英文大寫金額轉換器</h1>
            <h3>Chinese and English Numbers to Words Converter</h3>
            <div class="form-group">
                <div class="row border form-inline">
                    <div class="col-sm-2 col-form-label border-right p-3">
                        <label for="" class="form-text">金額</label>
                    </div>
                    <input
                        type="text"
                        v-model="currency"
                        class="form-control col-sm-8 ml-2"
                        placeholder=""
                        maxlength="19"/>
                </div>
                <div class="row border border-top-0 form-inline">
                    <div class="col-sm-2 col-form-label border-right p-3">
                        <label for="" class="form-text">英文金額</label>
                    </div>
                    <div class="col-md-5">
                        {{ changetoEng }}
                    </div>
                </div>
                <div class="row border border-top-0 form-inline">
                    <div class="col-sm-2 col-form-label border-right p-3">
                        <label for="" class="form-text">中文大寫</label>
                    </div>
                    <div class="col-md-5">
                        {{ changeToTC }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {currency: null}
        },
        computed: {
            changetoEng () {
                let num = this.currency
                if (num == 0)
                    return "Zero dollar"
                if (num === "" || !num)
                    return ""
                num = (~ num.indexOf(','))
                    ? num.replace(/,/g, '')
                    : +num
                const singles = [
                    '',
                    'One',
                    'Two',
                    'Three',
                    'Four',
                    'Five',
                    'Six',
                    'Seven',
                    'Eight',
                    'Nine',
                    'Ten',
                    'Eleven',
                    'Twelve',
                    'Thirteen',
                    'Fourteen',
                    'Fifteen',
                    'Sixteen',
                    'Seventeen',
                    'Eighteen',
                    'Nineteen'
                ];
                const seconds = [
                    '',
                    'Ten',
                    'Twenty',
                    'Thrity',
                    'Fourty',
                    'Fifty',
                    'Sixty',
                    'Seventy',
                    'Eighty',
                    'Ninety'
                ];
                const units = [
                    '',
                    'Thousand',
                    'Million',
                    'Billion',
                    'Trillion',
                    'Quadrillion',
                    'Quintillion'
                ];

                const _Hundred = (num) => {
                    if (num < 20) {
                        return singles[num];
                    } else if (num < 100) {
                        return `${seconds[Math.floor(num / 10)]} ${_Hundred(num % 10)}`
                    } else {
                        return `${singles[Math.floor(num / 100)]} Hundred ${_Hundred(num % 100)}`
                    }
                }

                let res = [],
                    i = 0;
                while (num > 0) {
                    let num3 = _Hundred(num % 1000)
                    if (num3) {
                        // res = `${num3.trim()} ${units[i]} ${res}`;
                        res.unshift(`${num3.trim()} ${units[i]}`)
                    }
                    num = Math.floor(num / 1000);
                    i++
                }

                return `${res.join(' , ')} dollars`;
            },
            changeToTC() {
                let num = this.currency;
                if (num > Number.MAX_VALUE) return "Too Large Currency";
                if (num == 0) return "零元";
                if (num == "" || !num) return ""
                num = (~num.indexOf(',')) ? num.replace(/,/g, '') : +num;
                let digits = [
                    '',
                    '壹',
                    '貳',
                    '參',
                    '肆',
                    '伍',
                    '陸',
                    '柒',
                    '捌',
                    '玖'
                ];
                let tenDigits = [
                    '',
                    '拾',
                    '貳拾',
                    '參拾',
                    '肆拾',
                    '伍拾',
                    '陸拾',
                    '柒拾',
                    '捌拾',
                    '玖拾'
                ];
                let units = ['', '萬', '億', '兆', '京'];

                const _Thousand = num => {
                    if (num < 10) {
                        return `${digits[num]}`
                    } else if (num < 100) {
                        return `${tenDigits[Math.floor(num / 10)]}${_Thousand(num % 10)}`
                    } else if (num < 1000) {
                        return `${digits[Math.floor(num / 100)]}佰${_Thousand(num % 100)}`
                    } else if (num < 10000) {
                        return `${digits[Math.floor(num / 1000)]}仟${_Thousand(num % 1000)}`
                    } else {
                        return `${digits[Math.floor(num / 10000)]}萬${_Thousand(num % 10000)}`
                    }
                }
                let result = '',
                    i = 0;
                while (num > 0) {
                    let num3 = _Thousand(num % 10000);
                    if (num3) result = `${num3}${units[i]}${result}`
                    num = Math.floor(num / 10000)
                    i++
                }
                return `${result}元整`
            }
        }
    }
</script>

<style lang="sass">
    #title
        text-align: center
</style>
