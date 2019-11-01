<template>
  <div>
    <navbar />
    <container :list="list" />
    <!-- <jumbotron /> -->
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
//import NavBar from '../components/NavBar.vue'
import Hello from './Hello.vue';
import container from '../components/container.vue'
export default {
  components: {
    Navbar,
    Hello,
    container,
  },
  data () {
    return {
      list: [
        {
          idx: 0,
          title: 'Heading',
          info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
          btntext: 'View details »'
        },
        {
          idx:1,
          title: 'Heading',
          info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
          btntext: 'View details »'
        },
        {
          idx:2,
          title: 'Heading',
          info: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
          btntext: 'View details »'
        },
      ]
    }
  },
}
</script>



