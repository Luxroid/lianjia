<template>
    <div class="amap-page-container">
      <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
      </el-amap>

      <!-- <div class="toolbar">
        <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
        <span v-else>正在定位</span>
      </div> -->
    </div>
  </template>

  <style>
    .amap-page-container {
      margin-top: .53rem;
      z-index: 1;
    }
    .amap-demo {
      height: 5.6rem;
      z-index: 1;
    }
    .amap-geolocation-con{
      z-index: 1!important;
    }
  </style>

  <script>
    module.exports = {
      data() {
        let self = this;
        return {
          center: [121.59996, 31.197646],
          lng: 0,
          lat: 0,
          loaded: false,
          plugin: [{
            pName: 'Geolocation',
            events: {
              init(o) {
                // o 是高德地图定位插件实例
                o.getCurrentPosition((status, result) => {
                  if (result && result.position) {
                    self.lng = result.position.lng;
                    self.lat = result.position.lat;
                    self.center = [self.lng, self.lat];
                    self.loaded = true;
                    self.$nextTick();
                  }
                });
              }
            }
          }]
        };
      }
    };
</script>
