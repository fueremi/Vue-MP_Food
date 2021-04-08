<template>
  <div>
    <Navbar />
    <b-container>
      <b-row class="mt-5">
        <b-col>
          <b-breadcrumb :items="items"></b-breadcrumb>
        </b-col>
      </b-row>

      <b-row v-for="product in productsDetail" :key="product.id" class="mt-3">
        <b-col md="6">
          <b-img
            :src="require(`../assets/images/${product.gambar}`)"
            fluid
            class="shadow"
          ></b-img>
        </b-col>

        <b-col md="6">
          <h2 class="text-left">
            <strong> {{ product.nama }} </strong>
          </h2>
          <hr />
          <h4 class="text-left">
            Harga: <strong> {{ product.harga }} </strong>
          </h4>

          <b-form class="mt-4">
            <b-form-group
              id="input-group-1"
              label="Quantity:"
              label-for="input-quantity_order"
            >
              <b-form-input
                id="input-quantity_order"
                type="number"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Notes:"
              label-for="input-notes"
            >
              <b-form-textarea
                id="input-notes"
                placeholder="eg: Spicy, Half rice ..."
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>

              <b-button type="submit" variant="success"><b-icon-cart></b-icon-cart> Order</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import { mapGetters } from "vuex";

export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      items: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Foods",
          to: "/foods",
        },
        {
          text: "Food Order",
          active: true,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      productsDetail: "getData",
    }),
  },
  mounted() {
    this.$store.dispatch("fetchData", {
      endpoints: `products/${this.$route.params.id}`,
    });
  },
};
</script>

<style>
</style>