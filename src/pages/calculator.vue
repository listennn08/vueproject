<template>
    <div id="main" class="col-md-3 mt-5 offset-md-4 border">
        <h1>{{ title }}</h1>
        <div class="row res col-md-10">
            <div class="col-md-1 lead resChild">
                <!-- <span class="lead"> -->
                    {{ Ope }}
                <!-- </span> -->
            </div>
            <div class="col lead resChild">
                <!-- <span class="lead"> -->
                    {{ disp }}
                <!-- </span> -->
            </div>
        </div>

        <div class="container">
            <div class="row">
                <template v-for="v in btnvalue">
                    <button
                        class="col-md-3 btn btn-outline-primary"
                        @click="chkBtn(v.engVal)"
                        v-if="v.idx % 5 == 4"
                        :key="v.idx">
                        {{ v.val }}
                    </button>
                </template>
            </div>
            <div class="row">
                <template v-for="v in btnvalue">
                    <button
                        class="col-md-3 btn btn-outline-primary"
                        @click="chkBtn(v.engVal)"
                        v-if="v.idx % 5 == 3"
                        :key="v.idx">
                        {{ v.val }}
                    </button>
                </template>
            </div>
            <div class="row">
                <template v-for="v in btnvalue">
                    <button
                        class="col-md-3 btn btn-outline-primary"
                        @click="chkBtn(v.engVal)"
                        v-if="v.idx % 5 == 2"
                        :key="v.idx">
                        {{ v.val }}
                    </button>
                </template>
            </div>
            <div class="row">
                <template v-for="v in btnvalue">
                    <button
                        class="col-md-3 btn btn-outline-primary"
                        @click="chkBtn(v.engVal)"
                        v-if="v.idx % 5 == 1"
                        :key="v.idx">
                        {{ v.val }}
                    </button>
                </template>
            </div>
            <div class="row">
                <template v-for="v in btnvalue">
                    <button
                        class="col-md-3 btn btn-outline-primary"
                        @click="chkBtn(v.engVal)"
                        v-if="v.idx % 5 == 0"
                        :key="v.idx">
                        {{ v.val }}
                    </button>
                </template>
            </div>
        </div>
    </div>
    <!--//- div Set Number: //- input#userIn(v-model="userInput") -->
</template>
<script>
    export default {
        data() {
            return {
                title: "Calculater",
                disp: 0,
                usrInput: 0,
                sum: 0,
                Ope: '',
                tmpOpe: '',
                tmpEql: '',
                btnvalue: [
                    {
                        idx: 0,
                        val: '±',
                        engVal: 'pnchange'
                    }, {
                        idx: 1,
                        val: '1',
                        engVal: '1'
                    }, {
                        idx: 2,
                        val: '4',
                        engVal: '4'
                    }, {
                        idx: 3,
                        val: '7',
                        engVal: '7'
                    }, {
                        idx: 4,
                        val: 'CE',
                        engVal: 'reset'
                    }, {
                        idx: 5,
                        val: '0',
                        engVal: '0'
                    }, {
                        idx: 6,
                        val: '2',
                        engVal: '2'
                    }, {
                        idx: 7,
                        val: '5',
                        engVal: '5'
                    }, {
                        idx: 8,
                        val: '8',
                        engVal: '8'
                    }, {
                        idx: 9,
                        val: 'C',
                        engVal: 'clear'
                    }, {
                        idx: 10,
                        val: '.',
                        engVal: '.'
                    }, {
                        idx: 11,
                        val: '3',
                        engVal: '3'
                    }, {
                        idx: 12,
                        val: '6',
                        engVal: '6'
                    }, {
                        idx: 13,
                        val: '9',
                        engVal: '9'
                    }, {
                        idx: 14,
                        val: '<-',
                        engVal: 'back'
                    }, {
                        idx: 15,
                        val: '=',
                        engVal: 'eql'
                    }, {
                        idx: 16,
                        val: '+',
                        engVal: 'plus'
                    }, {
                        idx: 17,
                        val: '-',
                        engVal: 'min'
                    }, {
                        idx: 18,
                        val: '*',
                        engVal: 'mul'
                    }, {
                        idx: 19,
                        val: '/',
                        engVal: 'div'
                    }
                ]
            }
        },
        created () {
            let self = this;
            window.addEventListener("keydown", function (e) {
                e.preventDefault;
                if(e.keyCode == 13) {
                    console.log(e.keyCode)
                    console.log("this is keyCode")
                    self.operate("eql");
                }
            })
        },
        computed () {
            this.usrInput
        },
        methods: {
            chkBtn (v) {
                if (+v || +v === 0) {
                    if (this.Ope !== '') {
                        if (this.tmpOpe !== '') {
                            this.disp = v;
                            this.tmpOpe = '';
                        } else {
                            this.disp += v;
                        }
                    } else {
                        if (+(this.disp) === 0) {
                            this.disp = v;
                        } else {
                            this.disp += v;
                        }
                    }

                } else {
                    switch (v) {
                        case 'back':
                            if (this.disp.length == 1 || this.disp == 0) {
                                this.disp = '0';
                            } else {
                                this.disp = this
                                    .disp
                                    .slice(0, this.disp.length-1)
                            }
                            break;
                        case 'reset':
                            this.reset();
                            break;
                        default:
                            break;
                    };
                    this.operate(v);
                }
            },
            operate (oper) {
                if (oper != 'eql')
                    this.tmpEql = '';
                switch (oper) {
                    case 'plus':
                        this.Ope = this.tmpOpe = '+';
                        this.sum = +(this.disp);
                        break;
                    case 'min':
                        this.Ope = this.tmpOpe = '-';
                        this.sum = +(this.disp);
                        break;
                    case 'mul':
                        this.Ope = this.tmpOpe = '*';
                        this.sum = +(this.disp);
                        break;
                    case 'div':
                        this.Ope = this.tmpOpe = '/';
                        this.sum = +(this.disp);
                        break;
                    case 'eql':
                        if (this.tmpEql == '') {
                            this.tmpEql = '=';
                            this.usrInput = this.disp;
                        }
                        this.sum = this.comp(this.sum, this.Ope, this.usrInput);
                        this.disp = this.sum.toString();
                }

            },
            comp (sum, o, cur) {
                console.log(sum + o + cur);
                switch (o) {
                    case '+':
                        return sum + +(cur);
                    case '-':
                        return sum - +(cur);
                    case '*':
                        return sum * +(cur);
                    case '/':
                        return sum / +(cur);
                }

            },
            reset () {
                this.Ope = this.tmpOpe = this.tmpEql = '';
                this.sum = 0;
                this.disp = 0;
                this.usrInput = 0;
            }
        }
    }
</script>
<style scoped="scoped">
    [v-cloak] {
        display: none;
    }
    #app {
        text-align: center;
    }
    #main {
        text-align: center;
    }
    .res {
        position: relative;
        left: 7%;
        border: 1px solid black;
        height: 30px;
        font-size: 36px;
        font-weight: bold;
        color: red;
        text-align: right;
        padding: 5px;
        margin: 2px;
    }
    .resChild {
        height: 20px;
    }
    #userIn {
        width: 30px;
    }
    .row {
        margin: 5px;
    }
</style>
