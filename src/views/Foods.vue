<template>
  <div>
    <Navbar />
    <b-container>
      <h2 class="mt-5">List of <strong>Food</strong></h2>

      <b-row class="mt-3">
        <b-col>
          <b-input-group class="mt-3">
            <b-form-input v-model="search" @keyup="getSearchData"></b-form-input>
            <b-input-group-append>
              <b-button variant="outline-success"><b-icon-search></b-icon-search></b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <b-col
          md="4"
          class="mb-3"
          v-for="food in dataFoods"
          :key="food.id"
        >
          <CardProduct :product="food" />
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
  data(){
    return {
      search: "",
    }
  },
  computed: {
    ...mapGetters("foods", {
      dataFoods: "getDataFoods",
    }),
  },
  methods: {
    getSearchData(){
      this.$store.dispatch("foods/fetchSearchFoods", {
        search: this.search
      })
    }
  },
  created() {
    this.$store.dispatch('foods/fetchDataFoods')
  },
};
</script>

<style>
</style>