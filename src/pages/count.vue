<template>
    <div class="row mt-5">
        <div class="col-md-5 offset-md-5">
            <h2>count:<span class="count">{{ count }}</span>
            </h2>
            <button class="btn btn-dark" @mousedown="longclickIncrease" @mouseup="stop">
                +
            </button>
            <button class="btn btn-dark" @mousedown="longclickDecrease" @mouseout="stop">
                -
            </button>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        data () {
            return {t: null}
        },
        computed: {
            ...mapGetters({
                count: 'getCount'
            })
        },
        methods: {
            ...mapActions({
                increase: 'actionIncrease',
                decrease: 'actionDecrease'
            }),
            longclickIncrease () {
                this.increase();
                console.log(this.count)
                let st = new Date().getTime();
                clearInterval(this.t);
                this.t = setInterval( () => {
                    let et = new Date().getTime();
                    if (et - st > 1000) {
                        this.increase()
                    }
                }, 100);
            },
            longclickDecrease () {
                this.decrease();
                let st = new Date().getTime();
                clearInterval(this.t);
                this.t = setInterval( () => {
                    let et = new Date().getTime();
                    if (et - st > 1000) {
                        this.decrease()
                    }
                }, 100)
            },
            stop () {
                clearInterval(this.t);
            }
        }
    }
</script>
