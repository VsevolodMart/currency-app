<template>
  <div id="app" class="app">
    <template>
      <BrandingHeader/>
      <div class="main-container">
        <router-view/>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
import BrandingHeader from "@/components/branding-header/branding-header.vue";

@Component({
  name: 'App',
  components: {BrandingHeader}
})
export default class App extends Vue {

  public isAuthenticated: boolean;


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position:relative;
}

.main-container {
  height: calc(100vh - 114px);
}
</style>
