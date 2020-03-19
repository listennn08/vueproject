<template>
    <div class="mt-5 row">
      {{ data }}
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      data: ""
    }
  },
  created () {
    this.getData();
  },
  methods: {
    async getData() {
      const url = 'https://raw.githubusercontent.com/kiang/pharmacies/master/'+
      'json/points.json?fbclid=IwAR0jokvot6wvsC1w1d42s-rF7TtqNZYB58Bv88pMG8JJ-8jbS751HRQUxZ0';
      return await axios.get(url)
        .then( res => {
            // console.log(res.data.features.county)
            return $.grep(res.data.features, item => item.county = '高雄市')
        })
        .then( res => {
          console.log(res.features[0])
          this.data = res

        })
    }
  }
}
</script>
