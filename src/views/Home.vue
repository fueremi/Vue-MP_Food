<template>
  <div class="home">
    <Navbar msg="MP Food" />
    <b-container>
      <Hero />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
  },
};
</script>
