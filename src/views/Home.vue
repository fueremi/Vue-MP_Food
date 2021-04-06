<template>
  <div class="home">
    <Navbar msg="MP Food" />
    <b-container>
      <Hero />
      <b-row class="mt-5">
        <b-col>
          <h2><strong>Best Products</strong></h2>
        </b-col>
        <b-col>
          <b-button to="/foods" variant="success" class="float-right">
            <b-icon-eye /> See all
          </b-button>
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col md="4" class="mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";

import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct
  },
  data(){
    return {
      products: [],
    }
  },
  methods: {
    setProducts(data){
      this.products = data
    }
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3000/best-products")
      this.setProducts(response.data)
    } catch (err) {
      console.error(err);
    }
  }
};
</script>
