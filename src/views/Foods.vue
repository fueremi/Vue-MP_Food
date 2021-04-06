<template>
  <div>
    <Navbar />
    <b-container>
      <h2>List of <strong>Food</strong></h2>
      <b-row class="mt-3">
        <b-col
          md="4"
          class="mb-3"
          v-for="product in bestProducts"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";

import { mapGetters } from "vuex";

export default {
  name: "foods",
  components: {
    Navbar,
    CardProduct,
  },
  computed: {
    ...mapGetters({
      bestProducts: "getData",
    }),
  },
  created() {
    this.$store.dispatch("fetchData", {
      endpoints: "products",
    });
  },
};
</script>

<style>
</style>