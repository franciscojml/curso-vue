<template>
  <v-app>
    <app-menu />
    <app-toolbar />

    <v-content>
      <app-carousel />
    </v-content>

    <app-footer />
  </v-app>
</template>

<script>
import Footer from "../components/templates/Footer.vue"; //caminho relativo 
import Carousel from "@/components/widgets/Carousel.vue"; //caminho absoluto com @ pega a partir do src
import Toolbar from "../components/templates/Toolbar.vue";
import Menu from "@/components/templates/Menu.vue";

export default {
  components: {
    "app-footer": Footer,
    "app-carousel": Carousel,
    "app-toolbar": Toolbar,
    "app-menu": Menu
  }
};
</script>
