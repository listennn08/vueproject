<template>
  <div>
    <div class="mapContainer">
      <div class="taiwan-map" ref="map">
        <div id="map">
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"></svg>
        </div>
      </div>
      <div class="shop-list">
          <h1 class="mapH1"> {{ h1 }}</h1>
          <h2 class="mapH2"> {{ h2 }}</h2>
      </div>
    </div>
  </div>
</template>
<script>
import * as d3 from 'd3';
export default {
  data () {
    return {
      h1: '',
      h2: '',
    }
  },
  methods: {
    async getTaiwanMap () {
      const width = (this.$refs.map.offsetWidth).toFixed(),
            height = (this.$refs.map.offsetHeight).toFixed();
      let mercatorScale, w = window.screen.width;

      if (w > 1366) {
        mercatorScale = 8000;
      } else if (w <=1366 && w > 480) {
        mercatorScale = 5000;
      } else {
        mercatorScale = 2000;
      }

      let path = await d3.geoPath().projection(
        d3.geoMercator()
          .center([121, 24])
          .scale(mercatorScale)
          .translate([width/2.5, height/2.5])
      );
      var svg = await d3.select('#svg')
                        .attr('width', width)
                        .attr('height', height*2)
                        .attr('viewBox', `0 0 ${width} ${height}`)
      var url = '../static/COUNTY_MOI_1080726.json'
      await d3.json(url)
              .then((geometry) => {
                // console.log(geometry)
                svg
                  .selectAll('path')
                  .data(geometry.features)
                  .enter().append('path')
                  .attr('d', path)
                  .attr('id', d => 'city' + d.properties.COUNTYCODE)
                  .on('click', (d) => {
                    this.h1 = d.properties.COUNTYNAME;
                    this.h2 = d.properties.COUNTYENG;
                    if (document.querySelector('.mapActive')) {
                      document.querySelector('.mapActive').classList.remove('mapActive');
                    }
                    document.getElementById('city' + d.properties.COUNTYCODE).classList.add('mapActive')
                  })
              }, error => error)
    }
  },
  mounted() {
    this.getTaiwanMap()
  }

}
</script>

<style>
@charset "UTF-8";
.mapContainer {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

body {
  letter-spacing: 1px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "微軟正黑體", "Microsoft JhengHei";
}

.mapContainer {
  display: flex;
  justify-content: space-around;
  background: #232526;
  background: linear-gradient(to right, #414345, #232526);
}

.taiwan-map, .shop-list {
  width: 50%;
  height: 100%;
}

#map {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
#map svg {
  max-height: 100vh;
}
#map path {
  fill: transparent;
  stroke: white;
  cursor: pointer;
  transition: fill 0.2s ease, stroke 0.2s ease, transform 0.2s ease;
}
#map path:hover, #map path.mapActive {
  fill: rgba(255, 202, 40, 0.5);
  stroke: #ffca28;
  transform: translateY(-5px);
}

.mapH1, .mapH2 {
  position: relative;
  line-height: 2;
  text-align: center;
  font-weight: bold;
}

.mapH1 {
  font-size: 5vw;
  color: #ffca28;
}

.mapH1::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 80%;
  height: 2px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.8) 70%, rgba(255, 255, 255, 0) 100%);
  transform: translateX(-50%);
}

.mapH2 {
  font-size: 4vw;
  color: rgba(255, 255, 255, 0.8);
}

.shop-list {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
}
.shop-list h1, .shop-list h2 {
  width: 100%;
}

@media screen and (max-width: 480px) {
  .mapContainer {
    flex-wrap: wrap;
  }

  .taiwan-map, .shop-list {
    width: 100%;
  }

  .taiwan-map {
    height: 80vh;
  }

  .shop-list {
    height: 20vh;
  }

  .mapH1 {
    font-size: 8vw;
  }

  .mapH2 {
    font-size: 6vw;
  }
 }

</style>
<!--<style lang="sass">
$main: #FFCA28

html, body, .container
  width: 100%
  height: 100%
  overflow: hidden

body
  letter-spacing: 1px
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "微軟正黑體", "Microsoft JhengHei"

.container
  display: flex
  justify-content: space-around
  background: #232526
  backgroung: liner-gradient(to right, #414345, #232526)

.taiwan-map, .shop-list
  width: 50%
  height: 100%

#map
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 100%
  svg
    max-height: 100%
  path
    fill: transparent
    stroke: #fff
    cursor: pointer
    transition: fill .2s ease, stroke .2s ease, transform .2s ease
    &:hover, &.acvive
      fill: rgba($main, .5)
      stroke: $main
      transform: translateY(-5px)

h1, h2
  position: relative
  line-height: 2
  text-align: center
  font-weight: bold

h1
  font-size: 5vw
  color: #FFCA28
  &::after
    content: ''
    position: absolute
    left: 50%
    bottom: 0
    width: 80%
    height: 2px
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.8) 70%, rgba(255,255,255,0) 100%)
    transform: translateX(-50%)

h2
  font-size: 4vw
  color: rgba(#FFF, .8)

.shop-list
  display: flex
  justify-content: center
  align-items: center
  align-content: center
  flex-wrap: wrap
  h1, h2
    width: 100%

@media screen and (max-width: 480px)
  .container
    flex-wrap: wrap
  .taiwan-map, .shop-list
    width: 100%
  .taiwan-map
    height: 80vh
  .shop-list
    height: 20vh
  h1
    font-size: 8vw
  h2
    font-size: 6vw


</style> -->
