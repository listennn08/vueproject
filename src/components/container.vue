<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="item in list" :key="item.idx">
        <h2> {{ item.title }}</h2>
        <p>{{ item.info }}</p>
        <p><a class="btn btn-default" href="#" role="button">{{ item.btntext }}</a></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: Array
  },
}
</script>
